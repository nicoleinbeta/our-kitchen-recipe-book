/* Our Kitchen: simple offline meal planner and shopping list. */
(() => {
  'use strict';
  const $=id=>document.getElementById(id);
  const DATA=RECIPE_DATA, PKEY='ourKitchenPlan_v1',HKEY='ourKitchenHave_v1',RKEY='ourKitchenRatings_v1';
  const DAYS=['Flexible','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  const GROUPS=['Fresh vegetables & herbs','Meat, fish & eggs','Chilled & dairy','Tins & jars','Cupboard','Herbs & spices','Other'];
  const aliases=[
    [/chopped tomatoes|tin.*tomatoes/i,'tinned-tomatoes','Chopped tomatoes','Tins & jars'],
    [/cherry tomatoes/i,'cherry-tomatoes','Cherry tomatoes','Fresh vegetables & herbs'],
    [/tomatoes?/i,'tomatoes','Fresh tomatoes','Fresh vegetables & herbs'],
    [/beef mince/i,'beef-mince','Beef mince','Meat, fish & eggs'],
    [/lamb mince/i,'lamb-mince','Lamb mince','Meat, fish & eggs'],
    [/turkey mince/i,'turkey-mince','Turkey mince','Meat, fish & eggs'],
    [/chicken thighs?/i,'chicken-thighs','Chicken thighs','Meat, fish & eggs'],
    [/cod fillets?/i,'cod','Cod fillets','Meat, fish & eggs'],
    [/steaks?|sirloin|rump/i,'beef-steak','Beef steak','Meat, fish & eggs'],
    [/\beggs?\b/i,'eggs','Eggs','Meat, fish & eggs'],
    [/spring onions?/i,'spring-onion','Spring onions','Fresh vegetables & herbs'],
    [/red onions?/i,'red-onion','Red onions','Fresh vegetables & herbs'],
    [/\bonions?\b/i,'onion','Onions','Fresh vegetables & herbs'],
    [/\bgarlic\b/i,'garlic','Garlic cloves','Fresh vegetables & herbs'],
    [/\bspinach\b/i,'spinach','Baby spinach','Fresh vegetables & herbs'],
    [/courgettes?/i,'courgette','Courgettes','Fresh vegetables & herbs'],
    [/mushrooms?/i,'mushrooms','Mushrooms','Fresh vegetables & herbs'],
    [/pak choi/i,'pak-choi','Pak choi','Fresh vegetables & herbs'],
    [/tenderstem broccoli/i,'broccoli','Tenderstem broccoli','Fresh vegetables & herbs'],
    [/aubergines?/i,'aubergine','Aubergine','Fresh vegetables & herbs'],
    [/\bblack pepper\b|\bsalt\b/i,'salt-pepper','Salt & pepper','Herbs & spices'],
    [/\bpeppers?\b/i,'peppers','Peppers','Fresh vegetables & herbs'],
    [/romaine lettuce/i,'lettuce','Romaine lettuce','Fresh vegetables & herbs'],
    [/watercress|salad leaves/i,'salad-leaves','Salad leaves','Fresh vegetables & herbs'],
    [/cucumbers?/i,'cucumber','Cucumber','Fresh vegetables & herbs'],
    [/fresh ginger|grated ginger/i,'ginger','Fresh ginger','Fresh vegetables & herbs'],
    [/\blimes?\b/i,'limes','Limes','Fresh vegetables & herbs'],
    [/\blemons?\b/i,'lemons','Lemons','Fresh vegetables & herbs'],
    [/fresh coriander|chopped coriander/i,'coriander','Fresh coriander','Fresh vegetables & herbs'],
    [/fresh parsley|chopped parsley/i,'parsley','Fresh parsley','Fresh vegetables & herbs'],
    [/rosemary/i,'rosemary','Rosemary','Fresh vegetables & herbs'],
    [/greek yoghurt|plain.*yoghurt/i,'yoghurt','Greek yoghurt','Chilled & dairy'],
    [/\bfeta\b/i,'feta','Feta','Chilled & dairy'],
    [/\bbutter\b/i,'butter','Butter','Chilled & dairy'],
    [/\bavocado/i,'avocado','Avocado','Fresh vegetables & herbs'],
    [/chicken stock/i,'stock','Chicken stock','Cupboard'],
    [/chipotle paste/i,'chipotle','Chipotle paste','Tins & jars'],
    [/harissa paste/i,'harissa','Harissa paste','Tins & jars'],
    [/miso paste/i,'miso','White miso paste','Tins & jars'],
    [/tomato purée/i,'tomato-puree','Tomato purée','Tins & jars'],
    [/soy sauce/i,'soy','Soy sauce','Cupboard'],
    [/rice vinegar/i,'rice-vinegar','Rice vinegar','Cupboard'],
    [/sesame oil/i,'sesame-oil','Sesame oil','Cupboard'],
    [/olive oil/i,'olive-oil','Olive oil','Cupboard'],
    [/neutral (?:cooking )?oil/i,'neutral-oil','Neutral cooking oil','Cupboard'],
    [/smoked paprika/i,'paprika','Smoked paprika','Herbs & spices'],
    [/garam masala/i,'garam-masala','Garam masala','Herbs & spices'],
    [/ground cumin/i,'cumin','Ground cumin','Herbs & spices'],
    [/ground coriander/i,'ground-coriander','Ground coriander','Herbs & spices'],
    [/dried oregano/i,'oregano','Dried oregano','Herbs & spices'],
    [/ground cinnamon/i,'cinnamon','Ground cinnamon','Herbs & spices'],
    [/\bturmeric\b/i,'turmeric','Turmeric','Herbs & spices'],
    [/chilli flakes|chilli powder/i,'chilli','Chilli flakes or powder','Herbs & spices'],
    [/sesame seeds/i,'sesame-seeds','Sesame seeds','Cupboard'],
    [/salt|black pepper/i,'salt-pepper','Salt & pepper','Herbs & spices']
  ];
  const FR={'¼':.25,'½':.5,'¾':.75};
  const read=(key,def)=>{try{return JSON.parse(localStorage.getItem(key)||'null')??def}catch(_){return def}};
  let plan=read(PKEY,[]),have=read(HKEY,{});
  if(!Array.isArray(plan))plan=[];
  if(!have || typeof have!=='object'||Array.isArray(have))have={};
  plan=plan.filter(x=>x&&typeof x.id==='string'&&[2,4,6].includes(Number(x.servings)));
  const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function status(s){$('plannerStatus').textContent=s}
  function save(){try{localStorage.setItem(PKEY,JSON.stringify(plan));localStorage.setItem(HKEY,JSON.stringify(have))}catch(_){status('Browser storage unavailable: copy your shopping list before leaving.')}}
  function rating(r){let old=read(RKEY,{});return Object.prototype.hasOwnProperty.call(old,r.id)?old[r.id]:r.rating}
  function eligible(r){const score=rating(r);return r.type!=='Dessert'&&r.ingredients.length>0&&r.steps.length>0&&(score==null||score>2)}
  function available(){return DATA.filter(eligible)}
  function number(v){v=String(v).trim();if(FR[v]!=null)return FR[v];const m=v.match(/^(\d+(?:\.\d+)?)([¼½¾])$/);return m?Number(m[1])+FR[m[2]]:Number(v)}
  function quantity(s){
    s=String(s).replace(/^\*+\s*/,'').trim();
    let m=s.match(/^(\d+)\s*[×x]\s*(\d+)\s*g\s*tin/i);
    if(m)return {min:+m[1]*+m[2],max:+m[1]*+m[2],unit:'g'};
    m=s.match(/^1\s+pack\b.*?\(\s*about\s*(\d+)\s*g\s*\)/i);
    if(m)return {min:+m[1],max:+m[1],unit:'g'};
    m=s.match(/^(\d+)\s*tbsp\s*\+\s*(\d+)\s*tsp/i);
    if(m)return {min:+m[1]*15 + +m[2]*5,max:+m[1]*15 + +m[2]*5,unit:'ml'};
    s=s.replace(/^(about|roughly|approximately|juice of|zest and juice of|crumble:)\s*/i,'').replace(/^\*+\s*/,'');
    m=s.match(/^(\d+(?:\.\d+)?[¼½¾]?|[¼½¾])(?:\s*[–-]\s*(\d+(?:\.\d+)?[¼½¾]?|[¼½¾]))?\s*(litres?|liters?|ml|kg|g|tbsp|tsp)\b/i);
    if(m){
      const u=m[3].toLowerCase(), factor=u==='kg'||u.startsWith('lit')?1000:u==='tbsp'?15:u==='tsp'?5:1;
      return {min:number(m[1])*factor,max:number(m[2]||m[1])*factor,unit:['ml','tsp','tbsp'].includes(u)||u.startsWith('lit')?'ml':'g'};
    }
    m=s.match(/^(\d+(?:\.\d+)?[¼½¾]?|[¼½¾])(?:\s*[–-]\s*(\d+(?:\.\d+)?[¼½¾]?|[¼½¾]))?/);
    if(m)return {min:number(m[1]),max:number(m[2]||m[1]),unit:/garlic cloves?/i.test(s)?'cloves':/rosemary sprigs?/i.test(s)?'sprigs':/fillets?/i.test(s)?'fillets':/steaks?/i.test(s)?'steaks':'items'};
    return {min:0,max:0,unit:'as needed'};
  }
  function ingredient(raw){
    raw=String(raw).replace(/\*\*/g,'').trim();
    if(/^(?:optional|pinch of|tiny pinch)/i.test(raw)||/\boptional per serving\b/i.test(raw))return null;
    if(/^(?:\d[\d.–]*\s*(?:ml|litres?|tbsp)\s+)?water\b/i.test(raw)||/\bwater, if needed\b/i.test(raw))return null;
    const rule=aliases.find(x=>x[0].test(raw));
    const v=quantity(raw);
    return {key:rule?rule[1]:'other-'+raw.toLowerCase().replace(/[^a-z0-9]+/g,'-').slice(0,50),label:rule?rule[2]:raw,group:rule?rule[3]:'Other',original:raw,...v};
  }
  function fmt(n){let v=Math.round(n*10)/10,whole=Math.floor(v);for(const [k,x] of Object.entries(FR))if(Math.abs(v-whole-x)<0.026)return (whole?whole:'')+k;return String(v)}
  function amount(x){
    if(x.unit==='as needed')return 'As needed';
    const a=fmt(x.min),b=fmt(x.max);
    const u=x.unit==='items'?'':x.unit==='g'?' g':x.unit==='ml'?' ml':' '+x.unit;
    let result=a+(Math.abs(x.max-x.min)>0.001?'–'+b:'')+u;
    if(x.key==='tinned-tomatoes'&&x.unit==='g'&&x.min===x.max)result+=' (buy '+Math.ceil(x.min/400)+' × 400 g tins)';
    if(x.unit==='items'&&x.min===x.max&&x.min!==Math.ceil(x.min))result+=' (buy '+Math.ceil(x.min)+')';
    return result;
  }
  function shopping(){
    const grouped=new Map();
    plan.forEach(slot=>{
      const r=DATA.find(x=>x.id===slot.id);
      if(!r||!eligible(r))return;
      r.ingredients.forEach(line=>{
        const v=ingredient(line);if(!v)return;
        const key=v.key+'|'+v.unit;
        const item=grouped.get(key)||{...v,id:key,min:0,max:0,usedBy:new Set()};
        item.min+=v.min*slot.servings/r.baseServings;
        item.max+=v.max*slot.servings/r.baseServings;
        item.usedBy.add(r.id);grouped.set(key,item);
      });
    });
    return [...grouped.values()].sort((a,b)=>GROUPS.indexOf(a.group)-GROUPS.indexOf(b.group)||a.label.localeCompare(b.label));
  }
  function suggestions(){
    if(!plan.length)return [];
    const planRecipes=plan.map(p=>DATA.find(r=>r.id===p.id)).filter(Boolean);
    const keys=new Set(planRecipes.flatMap(r=>r.ingredients.map(ingredient).filter(Boolean).map(x=>x.key)));
    const oldProtein=new Set(planRecipes.map(r=>r.protein));
    return available().filter(r=>!plan.some(p=>p.id===r.id)).map(r=>{
      const shared=[...new Set(r.ingredients.map(ingredient).filter(Boolean).map(x=>x.key))].filter(k=>keys.has(k));
      const fresh=shared.filter(k=>aliases.some(x=>x[1]===k && ['Fresh vegetables & herbs','Chilled & dairy'].includes(x[3])));
      const s=fresh.length*4+Math.min(shared.length-fresh.length,2)+(.4*(rating(r)||0))+(oldProtein.has(r.protein)?-1:1);
      return {r,fresh,score:s};
    }).filter(x=>x.fresh.length).sort((a,b)=>b.score-a.score).slice(0,3);
  }
  function addRecipe(id,day='Flexible',servings=2){
    const r=DATA.find(x=>x.id===id);
    if(!r||!eligible(r)){status('Choose a recipe with complete ingredient quantities.');return}
    plan.push({id,day:DAYS.includes(day)?day:'Flexible',servings:[2,4,6].includes(Number(servings))?Number(servings):2});
    save();render();status('Added '+r.title+'.');
  }
  function choices(){
    const select=$('plannerRecipe'),old=select.value;
    select.innerHTML='<option value="">Choose a recipe…</option>'+available().slice().sort((a,b)=>a.title.localeCompare(b.title)).map(r=>'<option value="'+esc(r.id)+'">'+esc(r.title)+'</option>').join('');
    if(available().some(r=>r.id===old))select.value=old;
  }
  function drawPlan(){
    $('plannerSummary').textContent=plan.length+' dishes · '+plan.reduce((n,x)=>n+x.servings,0)+' portions';
    $('plannedMeals').innerHTML=plan.length?plan.map((slot,i)=>{
      const r=DATA.find(x=>x.id===slot.id);if(!r)return '';
      return '<div class="plan-row"><div class="plan-row-name"><strong>'+esc(r.title)+'</strong><small>'+esc(r.cuisine)+' · '+(r.nutrition?'≈ '+Math.round(r.nutrition.kcal)+' kcal per serving':'Nutrition pending')+'</small></div>'+
        '<label class="plan-small"><span>Day</span><select data-day="'+i+'" aria-label="Day for '+esc(r.title)+'">'+DAYS.map(d=>'<option'+(slot.day===d?' selected':'')+'>'+d+'</option>').join('')+'</select></label>'+
        '<label class="plan-small"><span>Serves</span><select data-servings="'+i+'" aria-label="Servings for '+esc(r.title)+'">'+[2,4,6].map(n=>'<option'+(slot.servings===n?' selected':'')+'>'+n+'</option>').join('')+'</select></label>'+
        '<button class="plan-remove" data-remove="'+i+'" aria-label="Remove '+esc(r.title)+'" type="button">✕</button></div>';
    }).join(''):'<p class="planner-empty">Add your first recipe above. Choose four servings if you want leftovers.</p>';
  }
  function drawSuggestions(){
    const list=suggestions();
    $('smartSuggestions').innerHTML=!plan.length?'<p class="planner-muted">Add a recipe and we’ll look for meals that reuse fresh ingredients.</p>':
      list.length?list.map(x=>'<div class="suggestion"><strong>'+esc(x.r.title)+'</strong><small>'+esc(x.r.protein)+' · '+esc(x.r.region)+'</small><p>Shares '+esc(x.fresh.slice(0,4).map(k=>{const z=aliases.find(a=>a[1]===k);return z?z[2].toLowerCase():k}).join(', '))+'</p><button class="plan-action secondary" type="button" data-suggest="'+esc(x.r.id)+'">Add to plan</button></div>').join(''):
      '<p class="planner-muted">No strong ingredient matches yet. You can still choose another recipe for variety.</p>';
  }
  function drawShopping(){
    const list=shopping();
    $('shoppingSummary').textContent=list.length+' combined ingredients';
    $('shoppingList').innerHTML=list.length?GROUPS.map(cat=>{
      const rows=list.filter(x=>x.group===cat);if(!rows.length)return '';
      return '<div class="shop-category"><h4>'+esc(cat)+'</h4>'+rows.map(x=>'<label class="shop-row"><input type="checkbox" data-have="'+esc(x.id)+'"'+(have[x.id]?' checked':'')+'><span class="shop-main"><strong>'+esc(x.label)+'</strong><small>'+esc(amount(x))+'</small></span><span class="shop-used">'+x.usedBy.size+' recipe'+(x.usedBy.size>1?'s':'')+'</span></label>').join('')+'</div>';
    }).join(''):'<p class="planner-empty">Add recipes to generate a shopping list.</p>';
    const shared=list.filter(x=>x.usedBy.size>1).sort((a,b)=>b.usedBy.size-a.usedBy.size).slice(0,5);
    $('sharedIngredients').textContent=shared.length?'Ingredients shared across meals: '+shared.map(x=>x.label.toLowerCase()+' ('+x.usedBy.size+')').join(' · '):'Matching ingredients are combined automatically when you plan more than one meal.';
  }
  function render(){choices();drawPlan();drawSuggestions();drawShopping()}
  function shoppingText(){
    const list=shopping().filter(x=>!have[x.id]);
    if(!list.length)return 'Our Kitchen shopping list\nNo remaining items.';
    return 'Our Kitchen shopping list\n'+GROUPS.map(group=>{
      const rows=list.filter(x=>x.group===group);
      return rows.length?'\n'+group+'\n'+rows.map(x=>'- '+x.label+': '+amount(x)).join('\n'):'';
    }).join('\n')+'\n\nQuantities are approximate. Check optional accompaniments and alternatives in the recipes.';
  }
  async function copy(){
    const content=shoppingText();
    try{if(!navigator.clipboard?.writeText)throw Error('no clipboard');await navigator.clipboard.writeText(content);status('Shopping list copied.')}
    catch(_){const blob=new Blob([content],{type:'text/plain'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='our-kitchen-shopping-list.txt';a.click();URL.revokeObjectURL(url);status('Shopping list downloaded.')}
  }
  $('plannerAdd').addEventListener('click',()=>{$('plannerRecipe').value?addRecipe($('plannerRecipe').value,$('plannerDay').value,$('plannerServings').value):status('Choose a recipe first.')});
  $('plannedMeals').addEventListener('change',e=>{
    if(e.target.dataset.day!=null && plan[+e.target.dataset.day])plan[+e.target.dataset.day].day=e.target.value;
    if(e.target.dataset.servings!=null && plan[+e.target.dataset.servings])plan[+e.target.dataset.servings].servings=+e.target.value;
    save();render();
  });
  $('plannedMeals').addEventListener('click',e=>{const b=e.target.closest('[data-remove]');if(b){plan.splice(+b.dataset.remove,1);save();render()}});
  $('smartSuggestions').addEventListener('click',e=>{const b=e.target.closest('[data-suggest]');if(b)addRecipe(b.dataset.suggest)});
  $('shoppingList').addEventListener('change',e=>{if(e.target.dataset.have!=null){have[e.target.dataset.have]=e.target.checked;save()}});
  $('copyShopping').addEventListener('click',copy);
  $('clearPlan').addEventListener('click',()=>{if(plan.length&&window.confirm('Clear all planned meals?')){plan=[];save();render();status('Meal plan cleared.')}});
  document.addEventListener('ourKitchen:addRecipe',e=>{addRecipe(e.detail.id,'Flexible',e.detail.servings||2);$('plannerSection').scrollIntoView({behavior:'smooth'})});
  document.addEventListener('ourKitchen:ratingsChanged',()=>{plan=plan.filter(s=>DATA.some(r=>r.id===s.id&&eligible(r)));save();render()});
  window.OurKitchenPlanner={addRecipe,shopping,ingredient,quantity,suggestions,getPlan:()=>plan.slice()};
  render();
})();