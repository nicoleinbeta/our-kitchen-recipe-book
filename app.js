/* Our Kitchen: deliberately dependency-free, offline-first vanilla JavaScript. */
(() => {
  'use strict';
  const $ = (id) => document.getElementById(id);
  const DATA = RECIPE_DATA;
  const RATING_KEY = 'ourKitchenRatings_v1';
  let storedRatings = {};
  try { storedRatings = JSON.parse(localStorage.getItem(RATING_KEY) || '{}') || {}; } catch (_) {}
  let state = { tab:'all', type:'all', protein:'all', region:'all', query:'', sort:'rating', opened:null, servings:2, extras:[] };
  const EXTRAS = {
    avocado:{ label:'½ avocado (70g)', n:{kcal:112,protein:1.4,carbs:1.3,fat:10.5,fibre:4.7} },
    feta:{ label:'Feta (30g)', n:{kcal:80,protein:4.2,carbs:1.2,fat:6.3,fibre:0} },
    butter:{ label:'Butter (10g)', n:{kcal:72,protein:0.1,carbs:0,fat:8.1,fibre:0} },
    yoghurt:{ label:'Greek yoghurt, 2% (60g)', n:{kcal:44,protein:5.4,carbs:2.2,fat:1.2,fibre:0} },
    vegetables:{ label:'Extra greens (150g)', n:{kcal:35,protein:3.2,carbs:4.5,fat:0.5,fibre:3.5} },
    sesame:{ label:'Sesame seeds (15g)', n:{kcal:86,protein:2.6,carbs:1.8,fat:7.5,fibre:1.8} }
  };
  function esc(s) { return String(s ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch])); }
  function ratingFor(r) { return Object.prototype.hasOwnProperty.call(storedRatings,r.id) ? storedRatings[r.id] : r.rating; }
  function groupFor(r) { const s=ratingFor(r); return s===null||s===undefined?'unrated':s>=4.5?'favourite':s>=4?'rotation':'improve'; }
  function qualifying(r) { const s=ratingFor(r); return s==null || s>2; }
  function ratingText(r) { let v=ratingFor(r); return v==null?'Unrated':`${v}/5 ★`; }
  function allValid() { return DATA.filter(qualifying); }
  function filtered() {
    let arr=allValid().filter(r => {
      if(state.tab!=='all' && groupFor(r)!==state.tab) return false;
      if(state.type!=='all' && r.type!==state.type) return false;
      if(state.protein!=='all' && r.protein!==state.protein) return false;
      if(state.region!=='all' && r.region!==state.region) return false;
      const haystack=[r.title,r.cuisine,r.region,r.protein,r.type,r.outline||'',...r.ingredients].join(' ').toLowerCase();
      return !state.query || haystack.includes(state.query);
    });
    arr.sort((a,b) => state.sort==='az'?a.title.localeCompare(b.title):state.sort==='quick'?a.minutes-b.minutes:(ratingFor(b)??-1)-(ratingFor(a)??-1)||a.title.localeCompare(b.title));
    return arr;
  }
  function showToast(t) { let n=$('toast');n.textContent=t;n.classList.add('show');clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>n.classList.remove('show'),3000); }
  function card(r) {
    const detailed=!!r.steps.length;
    return `<button class="recipe-card" data-id="${esc(r.id)}" aria-label="Open ${esc(r.title)}">
      <div class="card-top"><span class="dish-art ${esc(r.type)}">${esc(r.emoji)}</span><span class="rating ${ratingFor(r)==null?'unrated':''}">${esc(ratingText(r))}</span></div>
      <div class="card-body"><div class="card-meta">${esc(r.cuisine)} · ${esc(r.type)}${r.type!=="Dessert"?" · "+esc(r.protein):""}</div><h3>${esc(r.title)}</h3></div>
      <div class="card-bottom"><span class="card-time">◷ ${r.minutes} min <span class="card-full"> · ${detailed?'Full recipe':'Summary only'}</span></span><span class="card-cta">View recipe →</span></div>
    </button>`;
  }
  function renderGrid() {
    const arr=filtered();
    $('recipeGrid').innerHTML=arr.map(card).join('');
    $('emptyState').hidden=arr.length>0;
    $('resultCount').textContent=`${arr.length} shown`;
    const eligible=allValid();
    $('recipeCount').textContent=`${eligible.filter(r=>r.type!=='Dessert').length} main recipes`;
    $('fiveStarCount').textContent=`${eligible.filter(r=>ratingFor(r)===5).length} five-star favourites`;
  }
  function formatQty(n,unit) {
    let v=n;
    if(unit==='g'||unit==='ml')v=Math.round(v*2)/2;
    if(Math.abs(v-Math.round(v))<0.01) return String(Math.round(v));
    const whole=Math.floor(v); const fraction=v-whole;
    const fractionList=[[1/4,'¼'],[1/3,'⅓'],[1/2,'½'],[2/3,'⅔'],[3/4,'¾']];
    for(const [target,symbol] of fractionList) if(Math.abs(fraction-target)<.025) return String(whole||'')+symbol;
    return (Math.round(v*10)/10).toString();
  }
  function numValue(x) {
    x=String(x).trim();const m=x.match(/^(\d+(?:\.\d+)?)([¼½¾])$/);
    if(m)return Number(m[1])+({'¼':.25,'½':.5,'¾':.75}[m[2]]);
    if(x in {'¼':1,'½':1,'¾':1})return {'¼':.25,'½':.5,'¾':.75}[x];
    return Number(x);
  }
  // Only scale the *first* quantity, preventing '2 fillets (150g each)' becoming '4 fillets (300g each)'.
  function scaleLine(s,factor) {
    if(factor===1)return s;
    const index=s.search(/\d|[¼½¾]/);if(index<0)return s;
    const p=s.slice(0,index),rest=s.slice(index);
    const m=rest.match(/^([0-9]+(?:\.[0-9]+)?[¼½¾]?|[¼½¾])(?:\s*[–-]\s*([0-9]+(?:\.[0-9]+)?[¼½¾]?|[¼½¾]))?/);
    if(!m)return s;
    const after=rest.slice(m[0].length);
    const unit=/^\s*(g|kg|ml|litres?|tsp|tbsp)\b/i.test(after)?RegExp.$1.toLowerCase():'';
    let converted=formatQty(numValue(m[1])*factor,unit);
    if(m[2]) converted+='–'+formatQty(numValue(m[2])*factor,unit);
    return p+converted+after;
  }
  function nutrientTable(n,heading) {
    const vals=[['kcal','Calories','kcal'],['protein','Protein','g'],['carbs','Carbs','g'],['fat','Fat','g'],['fibre','Fibre','g']];
    return `<div class="nutrition-grid" aria-label="${esc(heading)}">${vals.map(([k,label,unit])=>`<div class="nutrient"><strong>${Math.round(n[k]*10)/10}${k==='kcal'?'':'g'}</strong><span>${label}</span></div>`).join('')}</div>`;
  }
  function nutrientWithExtras(r) {
    if(!r.nutrition) return `<div class="info-box"><strong>Nutrition not available yet</strong>The earlier recipe's original ingredient quantities need to be recovered before we can calculate meaningful per-serving values.</div>`;
    const result={...r.nutrition};
    for(const key of state.extras){const n=EXTRAS[key].n;for(const k of Object.keys(result))result[k]+=n[k];}
    return `<div class="summary-nutrition">${state.extras.length?'Base meal + selected extras':'Base meal'}: <strong>≈ ${Math.round(result.kcal)} kcal</strong> per serving · ${result.protein.toFixed(1)}g protein · ${result.carbs.toFixed(1)}g carbs · ${result.fat.toFixed(1)}g fat · ${result.fibre.toFixed(1)}g fibre</div>`;
  }
  function detail() {
    const r=DATA.find(v=>v.id===state.opened);if(!r)return;
    const fixed=!!r.fixedYield;
    const f=state.servings/r.baseServings;
    const full=!!r.steps.length;
    const contents=r.ingredients.length?
      `<ul class="ing-list">${r.ingredients.map((line,i)=>`<li><label><input type="checkbox" aria-label="Tick ingredient ${i+1}"><span>${esc(fixed?line:scaleLine(line,f))}</span></label></li>`).join('')}</ul>`:
      `<div class="missing-steps">${esc(r.outline||'Original ingredients not recovered.')}</div>`;
    const steps=full?`<ol class="steps">${r.steps.map(s=>`<li><span>${esc(s)}</span></li>`).join('')}</ol>`:
      `<div class="info-box"><strong>Full recipe needs recovering</strong>The precise method and quantities have not yet been added for this recipe.</div>`;
    const ratingOptions=['','1','1.5','2','2.5','3','3.5','4','4.5','5'].map(s=>`<option value="${s}" ${(ratingFor(r)??'').toString()===s?'selected':''}>${s?s+'/5':'Unrated'}</option>`).join('');
    $('detailContent').innerHTML=`
      <header class="detail-header"><div class="eyebrow dark">${esc(r.cuisine)} · ${esc(r.type)}${r.type!=="Dessert"?" · "+esc(r.protein):""}</div><h2 id="detailTitle">${esc(r.emoji)} ${esc(r.title)}</h2><div class="detail-byline"><span class="rating ${ratingFor(r)==null?'unrated':''}">${esc(ratingText(r))}</span><span>◷ ${r.minutes} minutes</span><span>· ${full?'Complete recipe':'Overview only'}</span></div>
      <div class="rating-update"><label for="ratingEdit">Joint rating:</label><select id="ratingEdit" aria-label="Edit joint rating">${ratingOptions}</select><span class="mini-note">1 or 2 stars hides this dish from the book.</span></div>
      <div class="detail-actions"><button class="button dark" id="printBtn">Print recipe</button><button class="button" id="copyBtn">Copy recipe</button></div></header>
      <section class="detail-section"><div class="section-minihead"><h3>Ingredients</h3>${fixed?'<span class="fixed-label">One 23cm pie · 8 slices</span>':(full?`<div class="serve-control" aria-label="Serving size">${[2,4,6].map(n=>`<button type="button" class="${state.servings===n?'active':''}" data-serving="${n}" aria-pressed="${state.servings===n}">${n}</button>`).join('')}</div>`:'<span class="fixed-label">Amounts to verify</span>')}</div>
      ${contents}${full&&!fixed?`<p class="servings-info">Scaled from the original ${r.baseServings}-serving recipe. Cooking times, oven temperatures, tin sizes and ingredient cuts do not scale automatically. Adjust equipment as needed.</p>`:''}
      </section>
      <section class="detail-section"><h3>Method</h3>${steps}</section>

      <section class="detail-section"><h3>Nutrition per serving</h3>${r.nutrition?nutrientTable(r.nutrition,'Estimated base nutrition'):`<div class="info-box">Nutrition needs the original recipe quantities. We'll calculate it when those have been restored.</div>`}<p class="mini-note">Indicative only. Calculated from typical raw ingredient values and assumed edible weights; brands, oil use and cooking losses change the result. UK carbohydrates are shown separately from fibre. Optional toppings below are not included in the base figure.</p></section>
      ${r.extras.length?`<section class="detail-section"><h3>Make it your own</h3><p class="mini-note">Extra additions, usually for Tom's higher-fat keto plate. Tick to see their additional nutrition per serving. These are <strong>extra</strong> portions on top of the base recipe.</p><div class="extra-list">${r.extras.map(k=>`<label class="extra-row"><input type="checkbox" data-extra="${k}" ${state.extras.includes(k)?'checked':''}><span class="extra-name">${esc(EXTRAS[k].label)}</span><small>+${EXTRAS[k].n.kcal} kcal</small></label>`).join('')}</div><div id="extraTotals">${nutrientWithExtras(r)}</div></section>`:''}

    $('ratingEdit').addEventListener('change',e=>{
      const val=e.target.value;storedRatings[r.id]=val===''?null:Number(val);
      try {localStorage.setItem(RATING_KEY,JSON.stringify(storedRatings));} catch (_) {showToast('Browser storage unavailable. Export your data to keep changes.');}
      if(val!=='' && Number(val)<=2){closeDetail();showToast('Recipe hidden from the book because its rating is 1 or 2.');renderGrid();return;}
      renderGrid();detail();showToast('Joint rating updated on this device.');
    });
    document.querySelectorAll('[data-serving]').forEach(el=>el.addEventListener('click',()=>{state.servings=Number(el.dataset.serving);detail();}));
    document.querySelectorAll('[data-extra]').forEach(el=>el.addEventListener('change',()=>{
      if(el.checked)state.extras.push(el.dataset.extra);else state.extras=state.extras.filter(k=>k!==el.dataset.extra);
      $('extraTotals').innerHTML=nutrientWithExtras(r);
    }));
    $('printBtn').addEventListener('click',()=>window.print());
    $('copyBtn').addEventListener('click',()=>{
      const ingredients=r.ingredients.length?r.ingredients.map(v=>'• '+(fixed?v:scaleLine(v,f))).join('\n'):'Full ingredients not yet recovered';
      const method=r.steps.length?r.steps.map((s,i)=>`${i+1}. ${s}`).join('\n'):'Full method not yet recovered';
      const info=`${r.title}\n${fixed?'One pie, 8 slices':state.servings+' servings'} | ${r.minutes} minutes | ${ratingText(r)}\n\nINGREDIENTS\n${ingredients}\n\nMETHOD\n${method}\n\nNutrition is an estimate only.`;
      if(navigator.clipboard?.writeText){navigator.clipboard.writeText(info).then(()=>showToast('Recipe copied.'),()=>fallbackCopy(info));}else fallbackCopy(info);
    });
  }
  function fallbackCopy(t){const a=document.createElement('textarea');a.value=t;document.body.append(a);a.select();try {document.execCommand('copy');showToast('Recipe copied.');}catch(_){showToast('Copy unavailable in this browser.');}a.remove();}
  function openDetail(id) { const r=DATA.find(x=>x.id===id);if(!r)return;state.opened=id;state.servings=r.baseServings===1?2:r.baseServings===4?4:2;state.extras=[];detail();$('modalBackdrop').hidden=false;document.body.style.overflow='hidden';$('closeDetail').focus(); }
  function closeDetail(){ $('modalBackdrop').hidden=true;state.opened=null;document.body.style.overflow=''; }
  $('recipeGrid').addEventListener('click',e=>{const card=e.target.closest('[data-id]');if(card)openDetail(card.dataset.id);});
  $('closeDetail').addEventListener('click',closeDetail);
  $('modalBackdrop').addEventListener('click',e=>{if(e.target===$('modalBackdrop'))closeDetail();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('modalBackdrop').hidden)closeDetail();});
  function populateSelect(id,field,allLabel) {
    const values=[...new Set(allValid().map(r=>r[field]).filter(Boolean))].sort((a,b)=>a.localeCompare(b));
    $(id).innerHTML='<option value="all">'+esc(allLabel)+'</option>'+values.map(v=>'<option value="'+esc(v)+'">'+esc(v)+'</option>').join('');
  }
  populateSelect('proteinFilter','protein','All proteins');
  populateSelect('regionFilter','region','All cuisine regions');
  $('searchInput').addEventListener('input',e=>{state.query=e.target.value.trim().toLowerCase();renderGrid();});
  $('typeFilter').addEventListener('change',e=>{state.type=e.target.value;renderGrid();});
  $('proteinFilter').addEventListener('change',e=>{state.protein=e.target.value;renderGrid();});
  $('regionFilter').addEventListener('change',e=>{state.region=e.target.value;renderGrid();});
  $('sortFilter').addEventListener('change',e=>{state.sort=e.target.value;renderGrid();});
  $('filterTabs').addEventListener('click',e=>{
    const btn=e.target.closest('[data-filter]');if(!btn)return;
    state.tab=btn.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(b=>{let selected=b.dataset.filter===state.tab;b.classList.toggle('active',selected);b.setAttribute('aria-pressed',String(selected));});
    renderGrid();
  });
  $('resetFilters').addEventListener('click',()=>{
    $('searchInput').value='';$('typeFilter').value='all';$('proteinFilter').value='all';$('regionFilter').value='all';$('sortFilter').value='rating';
    state.query='';state.type='all';state.protein='all';state.region='all';state.sort='rating';
    document.querySelector('[data-filter="all"]').click();
  });
  $('exportButton').addEventListener('click',()=>{
    const payload={exportedAt:new Date().toISOString(),notice:'Local static copy; nutrition indicative.',overrides:storedRatings,recipes:allValid()};
    const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob);
    const a=document.createElement('a');a.href=url;a.download='our-kitchen-recipes-and-ratings.json';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
    showToast('Recipe data exported as JSON.');
  });
  renderGrid();
})();
