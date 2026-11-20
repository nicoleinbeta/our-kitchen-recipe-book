# Our Kitchen: interactive recipe book

A simple static recipe book using only HTML, CSS and vanilla JavaScript. It works offline and can also be hosted without a framework, API key or database.

## Open it

1. Clone or download this GitHub repository.
2. Open `index.html` in a browser on your Mac or PC. Keep `index.html`, `styles.css`, `app.js` and `recipes.js` together in the same folder.
3. Search recipes, filter by favourites, open a recipe and switch between 2, 4 and 6 servings.

**Important:** This is a static website. It does not sync between devices or with your ChatGPT Library automatically. If you later host the folder as a site, recipes remain bundled in `recipes.js`. Individual rating changes save only in the current browser's `localStorage`, where supported. Use **Export data** to make a backup before switching browsers or devices.

## Publish on GitHub Pages

The files are already ready for branch-based publishing: `index.html`, `styles.css`, `app.js` and `recipes.js` are all at the root of `main`. No build step or GitHub Actions workflow is required.

To enable GitHub Pages from an authenticated browser:

1. Open `https://github.com/nicoleinbeta/our-kitchen-recipe-book/settings/pages`.
2. Under **Build and deployment**, select **Deploy from a branch** as the source.
3. Choose branch **main** and folder **/(root)**, then **Save**.
4. Once GitHub reports the deployment as successful, the expected URL is `https://nicoleinbeta.github.io/our-kitchen-recipe-book/`.

**Eligibility and privacy:** GitHub Pages on a **private repository** requires a GitHub Pro or qualifying paid plan; on GitHub Free, the repository must be made public to enable Pages. The published Pages website is **publicly accessible even when the repository is private**. Do not include personal secrets in the deployed files.

Changes to the committed recipe source on `main` will publish automatically after Pages has been enabled. Rating overrides remain local to each device/browser, not in GitHub.

## Search and filtering

Use the **Main protein** and **Cuisine region** dropdowns to filter recipes. Options are provided in the HTML and refreshed from the data when JavaScript starts. The dropdowns can be combined with meal type, favourites and keyword search. Keyword search also matches specific cuisine names and ingredients. Use **Reset filters** to return to the full collection.

Recipe cards and detail pages intentionally omit conversational feedback, revision notes and source filenames. Ratings and practical ingredient/accompaniment guidance remain.

## What is included

- 18 developed main dishes rated above 2 (or not yet rated), plus two Thanksgiving apple pies.
- The five dishes rated exactly 1 or 2 are excluded from the shipped dataset, not merely hidden with CSS.
- The 2.5-rated chipotle beef bowls remain included with their lower rating. Change this rule if you want to exclude anything below 3.
- 13 full recipes, including two pies, from saved original recipe files.
- Seven earlier recipes are summary-only because complete original ingredient amounts/instructions could not be verified. They are clearly marked and have no invented nutrition facts.
- Serving-size controls for complete savoury recipes (2, 4 or 6); full-sized pies are kept at their original eight-slice tin yield.
- Per-serving estimated calories, protein, carbohydrates, fat and fibre where quantities were available.
- Optional accompaniments update all five per-serving nutrition boxes immediately. The nutritional summary beneath the tick boxes also shows the combined meal and extras.
- Editable joint ratings. Rating a recipe 1 or 2 removes it from the visible collection in that browser.
- Print/copy recipes and export the current recipe data and rating overrides as JSON.

## Nutrition accuracy

Numbers are **rough estimates**, generated from illustrative average ingredient values rather than Ocado-specific labels. They reflect typical raw ingredient weights, assumed edible portions and the recipe's average distribution. They are not nutrition advice, diagnostic or treatment guidance. Recipe quantities are scaled for shopping/cooking; the estimated nutrition **per serving** stays the same when the batch is scaled proportionally. If more/less oil, sauces or feta are used, the actual totals change. The 2% Greek yoghurt assumption may be different from your selected brand. Spices, citrus and garnishes are often omitted from the nutrition calculation where negligible, so figures will not precisely match meal-tracking apps.

The generated `recipes.js` contains the edit-friendly data array. Use a text editor to add recipes or refine values. The original recipe method and ingredients are retained where available; some recipe notes explicitly propose variations not yet tested.

## Future enhancements

Once the first version proves useful, consider adding a meal calendar, ingredient consolidation, shared sign-in for Tom, and verified nutrition data. Those would require more than a local static file to sync reliably across devices.