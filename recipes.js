const RECIPE_DATA = [
  {
    "id": "R01",
    "title": "Chicken & egg fried rice",
    "rating": 5,
    "cuisine": "Chinese-inspired",
    "type": "Main",
    "baseServings": 2,
    "minutes": 25,
    "emoji": "🍳",
    "extras": [
      "avocado",
      "vegetables"
    ],
    "ingredients": [],
    "steps": [],
    "outline": "Chicken thighs, egg, rice, garlic, spring onions, soy and sesame.",
    "nutrition": null,
    "protein": "Chicken",
    "region": "East & Southeast Asia"
  },
  {
    "id": "R02",
    "title": "Rigatoni meatballs with tomato, basil & burrata",
    "rating": 4,
    "cuisine": "Italian",
    "type": "Main",
    "baseServings": 2,
    "minutes": 45,
    "emoji": "🍝",
    "extras": [
      "vegetables"
    ],
    "ingredients": [],
    "steps": [],
    "outline": "Rigatoni, meatballs, tomato, basil and burrata.",
    "nutrition": null,
    "protein": "Beef",
    "region": "Mediterranean & Southern Europe"
  },
  {
    "id": "R03",
    "title": "Creamy potato, leek, bacon & apple soup",
    "rating": 4,
    "cuisine": "British-inspired",
    "type": "Soup",
    "baseServings": 4,
    "minutes": 40,
    "emoji": "🥣",
    "extras": [
      "vegetables"
    ],
    "ingredients": [],
    "steps": [],
    "outline": "Potatoes, leeks, bacon lardons, Granny Smith apple, cream and chives.",
    "nutrition": null,
    "protein": "Pork",
    "region": "Northern Europe",
    "tags": [
      "bacon"
    ]
  },
  {
    "id": "R04",
    "title": "Creamy chicken, mushroom & wild rice soup",
    "rating": 5,
    "cuisine": "American-inspired",
    "type": "Soup",
    "baseServings": 4,
    "minutes": 45,
    "emoji": "🍲",
    "extras": [
      "butter",
      "vegetables"
    ],
    "ingredients": [],
    "steps": [],
    "outline": "Chicken thighs, mushrooms, wild rice, cream and stock.",
    "nutrition": null,
    "protein": "Chicken",
    "region": "North America"
  },
  {
    "id": "R05",
    "title": "Italian sausage & green lentil soup",
    "rating": 4,
    "cuisine": "Italian",
    "type": "Soup",
    "baseServings": 4,
    "minutes": 40,
    "emoji": "🥣",
    "extras": [
      "vegetables"
    ],
    "ingredients": [],
    "steps": [],
    "outline": "Italian sausage, green lentils, mirepoix and tomatoes.",
    "nutrition": null,
    "protein": "Pork",
    "region": "Mediterranean & Southern Europe",
    "tags": [
      "sausage"
    ]
  },
  {
    "id": "R06",
    "title": "Lemon, dill & thyme chicken noodle soup with courgette noodles",
    "rating": 5,
    "cuisine": "Mediterranean",
    "type": "Soup",
    "baseServings": 4,
    "minutes": 35,
    "emoji": "🍋",
    "extras": [
      "avocado",
      "yoghurt"
    ],
    "ingredients": [],
    "steps": [],
    "outline": "Chicken, lemon, dill, thyme and courgette noodles in broth.",
    "nutrition": null,
    "protein": "Chicken",
    "region": "Mediterranean & Southern Europe"
  },
  {
    "id": "R07",
    "title": "Creamy Cumberland sausage, fennel & spinach soup",
    "rating": 5,
    "cuisine": "Italian-inspired",
    "type": "Soup",
    "baseServings": 4,
    "minutes": 35,
    "emoji": "🍲",
    "extras": [
      "vegetables"
    ],
    "ingredients": [],
    "steps": [],
    "outline": "Cumberland sausages, fennel seeds, spinach and a moderate amount of cream.",
    "nutrition": null,
    "protein": "Pork",
    "region": "Mediterranean & Southern Europe",
    "tags": [
      "sausage"
    ]
  },
  {
    "id": "R11",
    "title": "Smoky beef, mushroom & courgette skillet",
    "rating": 3,
    "cuisine": "Mediterranean-inspired",
    "type": "Main",
    "baseServings": 3,
    "minutes": 30,
    "emoji": "🍳",
    "extras": [
      "feta",
      "yoghurt",
      "avocado"
    ],
    "ingredients": [
      "500 g beef mince, preferably 5% fat",
      "1 courgette, diced",
      "200 g mushrooms, sliced",
      "About 100–125 g baby spinach",
      "1 × 400 g tin chopped tomatoes",
      "2 garlic cloves, finely chopped",
      "1 tsp smoked paprika",
      "½ tsp ground cumin",
      "½ tsp dried oregano",
      "Pinch of chilli flakes, optional",
      "1 tsp olive oil, if needed",
      "Salt and plenty of black pepper",
      "Optional to serve: crumbled feta, Greek yoghurt, avocado or chopped fresh parsley"
    ],
    "steps": [
      "Heat a large frying pan over medium-high heat. Brown the beef mince, breaking it up with a spoon, until deeply coloured. Add a teaspoon of oil only if needed.",
      "Stir in the garlic, mushrooms and courgette. Cook for 5–7 minutes, allowing the mushrooms to brown and the courgette to soften.",
      "Add the tomatoes, smoked paprika, cumin, oregano, chilli flakes if using, salt and pepper. Simmer for 8–10 minutes, stirring occasionally, until the sauce has reduced and the vegetables are tender.",
      "Stir in the spinach until wilted. Taste and adjust the seasoning, adding another squeeze of lemon or a splash of vinegar if the sauce needs brightness."
    ],
    "nutrition": {
      "kcal": 327,
      "protein": 40.7,
      "carbs": 8.8,
      "fat": 12.2,
      "fibre": 4
    },
    "protein": "Beef",
    "region": "Mediterranean & Southern Europe"
  },
  {
    "id": "R12",
    "title": "Rosemary steak with garlicky mushrooms & tenderstem broccoli",
    "rating": 3,
    "cuisine": "British",
    "type": "Main",
    "baseServings": 2,
    "minutes": 25,
    "emoji": "🥩",
    "extras": [
      "butter",
      "avocado",
      "vegetables"
    ],
    "ingredients": [
      "2 beef fillet or sirloin steaks, 150–200 g each",
      "200 g mushrooms, sliced",
      "1 pack tenderstem broccoli (about 200 g)",
      "2 garlic cloves, lightly crushed",
      "1–2 rosemary sprigs",
      "1 tbsp olive oil total",
      "Optional: 10–15 g butter for basting or serving",
      "½ tsp smoked paprika, optional",
      "Salt, black pepper and lemon juice",
      "Optional: avocado, feta or a spoonful of horseradish yoghurt alongside"
    ],
    "steps": [
      "Pat the steaks dry and season generously with salt, black pepper and smoked paprika if using. Steam or microwave the broccoli until just tender, approximately 4–6 minutes.",
      "Heat a frying pan over medium-high heat with a little olive oil. Add the steaks, garlic and rosemary. Sear to your preferred doneness, typically 2–4 minutes per side for modest steaks, depending on thickness. Add butter during the final minute if wanted, spooning it over the steaks. Rest for 5 minutes.",
      "In the same pan, cook the mushrooms with the garlic and rosemary for 5–7 minutes, scraping up the browned steak juices. Season with salt and pepper.",
      "Serve the steaks with the mushrooms and broccoli. Finish with lemon juice, pan juices and any optional toppings."
    ],
    "nutrition": {
      "kcal": 432,
      "protein": 45,
      "carbs": 6.7,
      "fat": 23.5,
      "fibre": 3.7
    },
    "protein": "Beef",
    "region": "Northern Europe"
  },
  {
    "id": "R13",
    "title": "Mushroom, spinach & feta omelette",
    "rating": 5,
    "cuisine": "Everyday",
    "type": "Breakfast",
    "baseServings": 1,
    "minutes": 10,
    "emoji": "🍳",
    "extras": [
      "avocado",
      "feta"
    ],
    "ingredients": [
      "2 eggs",
      "About 50–75 g baby spinach",
      "Any remaining mushrooms (about 50–100 g), sliced",
      "1 tsp olive oil or a small knob of butter",
      "15–20 g feta, crumbled",
      "¼ tsp smoked paprika or a pinch of chilli flakes, optional",
      "Salt and pepper",
      "Optional: chopped parsley, spring onion or avocado to serve"
    ],
    "steps": [
      "Sauté the mushrooms in the oil or butter for 3–4 minutes, until browned. Add the smoked paprika or chilli flakes if using, then wilt in the spinach.",
      "Beat the eggs with salt and pepper. Pour into the pan and cook gently until nearly set.",
      "Scatter over the feta, fold the omelette and cook for another minute until set to your liking.",
      "Finish with black pepper and parsley or spring onion. Serve with avocado if available."
    ],
    "nutrition": {
      "kcal": 266,
      "protein": 19.3,
      "carbs": 3.5,
      "fat": 18.8,
      "fibre": 2.1
    },
    "protein": "Eggs",
    "region": "Everyday / mixed"
  },
  {
    "id": "R15",
    "title": "Smoky chipotle beef bowls with avocado & lime yoghurt",
    "rating": 2.5,
    "cuisine": "Mexican",
    "type": "Main",
    "baseServings": 3,
    "minutes": 25,
    "emoji": "🌶️",
    "extras": [
      "avocado",
      "feta",
      "yoghurt"
    ],
    "ingredients": [
      "400g 5% fat beef mince",
      "2 peppers, sliced",
      "1 large courgette, diced",
      "1 red onion, sliced",
      "2 garlic cloves, minced",
      "1–2 tsp chipotle paste (check heat and added sugar)",
      "1½ tsp ground cumin",
      "1 tsp smoked paprika",
      "½ tsp ground coriander",
      "½ tsp dried oregano",
      "1 tsp olive oil",
      "Juice of 1 lime",
      "Salt and pepper",
      "1 romaine lettuce, shredded (to serve)",
      "1 avocado, sliced (to serve across the bowls)",
      "Fresh coriander and sliced spring onions, optional"
    ],
    "steps": [
      "Combine cumin, paprika, coriander, oregano and chipotle in a small bowl. Mix yoghurt sauce in a second small bowl (or directly in its storage container).",
      "Heat oil in a large frying pan. Cook the mince, breaking it up, for 5–6 minutes until browned. Remove excess liquid if necessary so it can caramelise.",
      "Add onion, peppers and courgette. Cook 7–9 minutes on medium-high heat, stirring occasionally, until lightly charred and tender.",
      "Stir in garlic and spice mixture for 1 minute, then add a splash of water and the lime juice; scrape the tasty browned bits from the pan. Season to taste.",
      "Serve hot over shredded lettuce with avocado, lime yoghurt, coriander and spring onions."
    ],
    "nutrition": {
      "kcal": 393,
      "protein": 36.2,
      "carbs": 16.7,
      "fat": 18,
      "fibre": 7.7
    },
    "protein": "Beef",
    "region": "North America"
  },
  {
    "id": "R16",
    "title": "Moroccan lamb meatballs in harissa tomato sauce",
    "rating": 4,
    "cuisine": "Moroccan",
    "type": "Main",
    "baseServings": 3,
    "minutes": 35,
    "emoji": "🧆",
    "extras": [
      "feta",
      "yoghurt",
      "avocado"
    ],
    "ingredients": [
      "400g lean lamb mince",
      "1 egg, beaten (start with about half if the mixture feels wet)",
      "1 tsp ground cumin",
      "1 tsp ground coriander",
      "½ tsp ground cinnamon",
      "1 garlic clove, grated",
      "½ tsp salt, plus black pepper",
      "1 tsp olive oil, only if needed",
      "1 aubergine, diced small (about 1.5cm)",
      "1 × 400g tin chopped tomatoes",
      "1–2 tsp harissa paste, to taste",
      "150g baby spinach",
      "2–3 tbsp water, if needed",
      "Chopped parsley, optional"
    ],
    "steps": [
      "Mix lamb, beaten egg (start with half), cumin, coriander, cinnamon, garlic, salt and pepper. Shape into 9 small meatballs.",
      "Heat a large deep frying pan. Brown meatballs all over for 4–5 minutes, working in batches if needed. Spoon off excess rendered fat and move meatballs to a plate.",
      "Add aubergine to the pan. Cook 5–6 minutes, stirring to pick up browned bits. Add a splash of water rather than more oil if it sticks.",
      "Add chopped tomatoes, harissa and a little water. Return meatballs; cover and simmer 12–15 minutes until cooked through (75°C internally).",
      "Stir in spinach and wilt. Taste and adjust harissa and salt. Serve with lemon yoghurt and parsley."
    ],
    "nutrition": {
      "kcal": 430,
      "protein": 34.9,
      "carbs": 11.9,
      "fat": 24.1,
      "fibre": 5.9
    },
    "protein": "Lamb",
    "region": "North Africa"
  },
  {
    "id": "R18",
    "title": "Indian turkey keema with peppers & spinach",
    "rating": 4,
    "cuisine": "Indian",
    "type": "Main",
    "baseServings": 3,
    "minutes": 30,
    "emoji": "🍛",
    "extras": [
      "yoghurt",
      "avocado",
      "vegetables"
    ],
    "ingredients": [
      "600g lean turkey mince (ideally 5% fat)",
      "1 medium onion, finely diced",
      "2 peppers, diced",
      "100g baby spinach",
      "3 garlic cloves, minced",
      "20g fresh ginger, grated",
      "1 × 400g tin chopped tomatoes",
      "2 tsp tomato purée",
      "2 tsp garam masala",
      "2 tsp ground cumin",
      "1 tsp ground coriander",
      "½ tsp turmeric",
      "Chilli flakes or chilli powder, to taste",
      "1 tbsp olive oil",
      "150g plain Greek yoghurt, to serve (roughly 50g per portion)",
      "Juice of ½ lemon",
      "Salt, black pepper and optional fresh coriander"
    ],
    "steps": [
      "Heat the oil in a deep frying pan over medium-high heat. Add onion and peppers; cook 5 minutes until beginning to soften and colour.",
      "Add turkey mince. Break it up and cook 5–6 minutes until it loses its raw colour and starts to brown. Avoid constantly stirring so it can develop flavour.",
      "Add garlic, ginger, tomato purée, garam masala, cumin, ground coriander, turmeric and chilli. Stir for 1 minute to toast the spices.",
      "Add chopped tomatoes and a splash of water if necessary. Simmer 10–12 minutes, stirring occasionally, until thick and the turkey is cooked through (75°C in the centre).",
      "Stir in spinach to wilt, then finish with lemon juice. Season generously and serve with a spoonful of Greek yoghurt and coriander if using."
    ],
    "nutrition": {
      "kcal": 459,
      "protein": 50,
      "carbs": 19.4,
      "fat": 19.3,
      "fibre": 5.5
    },
    "protein": "Turkey",
    "region": "South Asia"
  },
  {
    "id": "R19",
    "title": "Japanese ginger-soy beef with mushrooms & greens",
    "rating": 3,
    "cuisine": "Japanese-inspired",
    "type": "Main",
    "baseServings": 3,
    "minutes": 25,
    "emoji": "🥢",
    "extras": [
      "sesame",
      "avocado",
      "vegetables"
    ],
    "ingredients": [
      "500g rump or sirloin steak, sliced thinly across the grain",
      "300g mushrooms, sliced",
      "250–300g pak choi, chopped (or shredded white cabbage)",
      "2 garlic cloves, minced",
      "20g fresh ginger, grated",
      "2 tbsp reduced-salt soy sauce",
      "1 tbsp rice vinegar",
      "1 tsp sesame oil",
      "1 tbsp neutral oil, for the pan",
      "2–3 spring onions, sliced",
      "Black pepper; optional chilli flakes and sesame seeds",
      "1–2 tbsp water, as needed"
    ],
    "steps": [
      "Stir together soy sauce, rice vinegar, sesame oil, ginger, garlic and optional chilli. Toss with the sliced beef; leave for 10 minutes while preparing the vegetables.",
      "Heat a large frying pan until very hot. Add half the neutral oil, then quickly sear the beef in two batches for roughly 1–2 minutes each, depending on thickness. Remove to a plate. Do not crowd the pan.",
      "Add the remaining oil. Brown mushrooms for 4–5 minutes, then add pak choi or cabbage and stir-fry 2–3 minutes until just tender. Add a splash of water if needed.",
      "Return beef and any juices to the pan. Toss for 30–60 seconds until coated and hot. Taste before adding salt, as soy sauce is already salty.",
      "Finish with spring onions and optional sesame seeds."
    ],
    "nutrition": {
      "kcal": 403,
      "protein": 42.7,
      "carbs": 6,
      "fat": 22,
      "fibre": 2.3
    },
    "protein": "Beef",
    "region": "East & Southeast Asia"
  },
  {
    "id": "R20",
    "title": "Miso-ginger cod with pak choi & mushrooms",
    "rating": 3,
    "cuisine": "Japanese-inspired",
    "type": "Main",
    "baseServings": 2,
    "minutes": 25,
    "emoji": "🐟",
    "extras": [
      "butter",
      "vegetables"
    ],
    "ingredients": [
      "2 cod fillets (150–180g each)",
      "2 pak choi, halved lengthways",
      "250g mushrooms, sliced",
      "1 tbsp white miso paste",
      "1 tbsp soy sauce",
      "1 tsp sesame oil",
      "1 tbsp rice vinegar",
      "1 tsp freshly grated ginger",
      "1 garlic clove, grated",
      "1 tsp neutral cooking oil",
      "2 spring onions, sliced",
      "Sesame seeds, optional"
    ],
    "steps": [
      "Preheat the oven to 200°C fan.",
      "Mix the miso, soy sauce, rice vinegar, ginger, garlic and sesame oil with 1 tbsp water to make a glaze.",
      "Toss the mushrooms and pak choi with the neutral oil and a little black pepper. Spread on a lined oven tray and roast for 8 minutes.",
      "Move the vegetables to the sides of the tray. Add the cod and spoon the miso glaze over the fillets.",
      "Roast for another 10–12 minutes, adjusting for the thickness of the cod, until the fish is opaque and flakes easily and is cooked through.",
      "Scatter with spring onions and optional sesame seeds. Spoon the tray juices over the cod."
    ],
    "nutrition": {
      "kcal": 246,
      "protein": 37.1,
      "carbs": 5.8,
      "fat": 7.4,
      "fibre": 3
    },
    "protein": "Fish",
    "region": "East & Southeast Asia"
  },
  {
    "id": "R21",
    "title": "Vietnamese shaking beef (Bò lúc lắc)",
    "rating": 5,
    "cuisine": "Vietnamese",
    "type": "Main",
    "baseServings": 2,
    "minutes": 25,
    "emoji": "🥩",
    "extras": [
      "avocado",
      "butter",
      "vegetables"
    ],
    "ingredients": [
      "350–400g sirloin or rump steak, cut into 2–3cm cubes",
      "2 garlic cloves, finely chopped",
      "1 tbsp + 1 tsp soy sauce (replaces fish sauce)",
      "1 tsp rice vinegar",
      "½ tsp freshly ground black pepper",
      "1 tsp sesame oil",
      "1 tsp neutral cooking oil",
      "½ cucumber, sliced",
      "2 tomatoes, cut into wedges",
      "½ small red onion, thinly sliced",
      "A handful of watercress or mixed salad leaves",
      "1 lime"
    ],
    "steps": [
      "Marinate the beef: Mix soy sauce, rice vinegar, black pepper, garlic and sesame oil. Toss with the steak and leave for 10–15 minutes.",
      "Make the salad: Divide the watercress, cucumber, tomatoes and red onion between two plates. Squeeze over a little lime.",
      "Sear the beef: Heat a large frying pan until very hot, add the neutral oil and spread the beef in a single layer. Cook for 2–3 minutes, turning or shaking the pan, until nicely browned; adjust for the size of the cubes and your preferred doneness. Work in batches if necessary.",
      "Finish: Cook any marinade remaining in the pan until bubbling and reduced to a glaze. Do not use uncooked marinade as a finishing sauce. Spoon the beef over the salad.",
      "Serve: Combine remaining lime juice with freshly ground black pepper and a small pinch of salt for a simple dipping sauce."
    ],
    "nutrition": {
      "kcal": 439,
      "protein": 45.1,
      "carbs": 11.2,
      "fat": 22.3,
      "fibre": 2.4
    },
    "protein": "Beef",
    "region": "East & Southeast Asia"
  },
  {
    "id": "R22",
    "title": "Smoky Mexican chicken, pepper & spinach soup",
    "rating": null,
    "cuisine": "Mexican",
    "type": "Soup",
    "baseServings": 4,
    "minutes": 35,
    "emoji": "🍲",
    "extras": [
      "avocado",
      "yoghurt"
    ],
    "ingredients": [
      "500–550g boneless, skinless chicken thighs",
      "1 medium onion, diced",
      "2 red peppers, diced",
      "1 medium courgette, diced",
      "100g baby spinach",
      "3 garlic cloves, crushed",
      "1 × 400g tin chopped tomatoes",
      "1–1.2 litres chicken stock",
      "1–2 tsp chipotle paste, to taste",
      "2 tsp ground cumin",
      "1½ tsp smoked paprika",
      "1 tbsp olive oil",
      "Juice of 1–2 limes, to taste",
      "Small handful fresh coriander, chopped",
      "Salt and black pepper",
      "Optional per serving: avocado, Greek yoghurt or extra lime"
    ],
    "steps": [
      "Heat olive oil in a large saucepan. Cook onion and peppers for 5–6 minutes until beginning to soften and colour.",
      "Add garlic, cumin, smoked paprika and chipotle. Stir for 45–60 seconds until fragrant.",
      "Add tomatoes, stock and whole chicken thighs. Simmer gently, covered, for 15–20 minutes or until the chicken is cooked to 75°C internally.",
      "Lift out chicken and shred with two forks. Add diced courgette to the soup and simmer 5–7 minutes until tender.",
      "Return chicken, add spinach to wilt, then finish with plenty of lime juice and coriander. Taste: if flat, add salt and lime before adding more oil."
    ],
    "nutrition": {
      "kcal": 319,
      "protein": 30.2,
      "carbs": 15.5,
      "fat": 14.5,
      "fibre": 4.6
    },
    "protein": "Chicken",
    "region": "North America"
  },
  {
    "id": "R23",
    "title": "Greek-style baked cod with feta & roasted vegetables",
    "rating": null,
    "cuisine": "Greek",
    "type": "Main",
    "baseServings": 2,
    "minutes": 30,
    "emoji": "🐟",
    "extras": [
      "feta",
      "vegetables"
    ],
    "ingredients": [
      "2 cod fillets, 150–180g each",
      "1 red pepper, sliced",
      "1 medium courgette, in half-moons",
      "250g cherry tomatoes",
      "2 garlic cloves, thinly sliced or crushed",
      "1 tsp dried oregano",
      "Zest and juice of ½–1 lemon",
      "1 tbsp olive oil, divided",
      "100–150g feta from the fridge, divided according to preference",
      "Fresh parsley, chopped",
      "Black pepper; a little salt if needed (feta is salty)"
    ],
    "steps": [
      "Preheat oven to 200°C fan. Toss pepper, courgette and garlic on a lined baking tray with about 2 tsp olive oil, oregano and black pepper. Roast 12–15 minutes.",
      "Add cherry tomatoes and move vegetables to make room for cod. Season cod with lemon zest, a little lemon juice, black pepper and remaining olive oil.",
      "Bake for 10–14 minutes more, depending on fillet thickness, until the cod is cooked through and flakes easily.",
      "Crumble feta over the hot vegetables and fish, return to the oven for 2 minutes to soften, then finish with parsley and extra lemon juice."
    ],
    "nutrition": {
      "kcal": 439,
      "protein": 41.9,
      "carbs": 15.4,
      "fat": 22.1,
      "fibre": 4.3
    },
    "protein": "Fish",
    "region": "Mediterranean & Southern Europe"
  },
  {
    "id": "R24",
    "title": "Three-Meat Smoky Chipotle Chilli",
    "rating": 4,
    "cuisine": "Tex-Mex",
    "type": "Main",
    "baseServings": 4,
    "minutes": 55,
    "emoji": "🌶️",
    "protein": "Beef",
    "proteins": [
      "Beef",
      "Pork"
    ],
    "region": "North America",
    "tags": [
      "chilli",
      "kidney beans",
      "bacon",
      "smoked lardons",
      "pork"
    ],
    "extras": [
      "cheddar",
      "sourcream"
    ],
    "ingredients": [
      "350 g lean beef mince (ideally 5% fat)",
      "200 g rump or sirloin steak, cut into 1.5–2 cm cubes",
      "75–100 g smoked bacon lardons",
      "1 large onion, finely diced",
      "200 g mushrooms, finely chopped",
      "3 garlic cloves, minced",
      "1 × 400 g tin red kidney beans, drained and rinsed",
      "1 × 400 g tin chopped tomatoes",
      "2 tbsp tomato purée",
      "100–150 ml beef stock (start with 100 ml)",
      "Optional: Up to 1 tbsp olive oil, only if needed",
      "1–2 tsp chipotle paste, to taste",
      "10 g dark chocolate (70% cocoa or higher)",
      "Juice of ½ lime, or 1 tsp red wine vinegar",
      "Salt and freshly ground black pepper",
      "2 tsp ground cumin",
      "2 tsp smoked paprika",
      "1 tsp dried oregano",
      "½ tsp ground coriander",
      "¼ tsp ground cinnamon",
      "Optional to serve: About 100 g mature cheddar, grated (roughly 25 g per person)",
      "Optional to serve: About 120 g sour cream (roughly 30 g per person)",
      "Optional to serve: Fresh coriander, chopped",
      "Optional to serve: Lime wedges",
      "Optional to serve: Jalapeños, optional"
    ],
    "steps": [
      "Prepare everything (10–15 minutes). Dice the onion, finely chop the mushrooms and garlic, and cut the steak into 1.5–2 cm cubes. Drain and rinse the kidney beans. Mix the dried spices together in a small bowl.",
      "Render the lardons (4–5 minutes). Heat a large, heavy-based frying pan or casserole over medium-high heat. Add the lardons and cook until golden and some fat has rendered. Lift out with a slotted spoon, leaving about 1 tablespoon of fat in the pan. If there is more, pour off the excess.",
      "Sear the steak (1–2 minutes). Raise the heat. Pat the steak cubes dry, season lightly with pepper, and sear quickly in the hot pan until browned on the outside. Work in two batches if necessary so they brown rather than steam. Transfer to a plate; they will finish cooking later. Do not simmer them with the mince from the start.",
      "Brown the mince (5–6 minutes). Add the beef mince to the same pan. Spread it out and leave it undisturbed for a minute or two to develop a crust, then break it up and cook until browned throughout. Transfer it to the plate with the lardons. Add a little olive oil only if the pan is dry.",
      "Cook the vegetables (6–8 minutes). Add the onion and mushrooms to the pan. Cook over medium-high heat until the onion softens and the mushrooms have lost their moisture and begun to brown. Add the garlic for the final minute.",
      "Toast the flavourings (1–2 minutes). Stir in the tomato purée, chipotle paste, cumin, smoked paprika, oregano, ground coriander and cinnamon. Cook, stirring, until fragrant and the tomato purée darkens slightly. Start with 1 tsp chipotle and increase later if needed.",
      "Build the chilli (15 minutes). Return the browned mince and lardons to the pan. Add the chopped tomatoes and 100 ml beef stock, scraping up the browned bits. Bring to a gentle simmer, then cook partially covered for about 15 minutes. Stir occasionally. Add a little more stock only if it gets too thick.",
      "Add the beans (5 minutes). Stir in the drained kidney beans and simmer uncovered for 5 minutes so they heat through and the sauce reduces. The chilli should be thick enough to eat from a bowl without rice.",
      "Finish the steak (5–8 minutes). Stir the steak cubes and any accumulated juices into the chilli. Simmer gently until the steak is cooked to your liking and heated through. Avoid a hard boil or prolonged simmer, which can toughen this quick-cooking cut. For food safety, ensure the mince is fully cooked and the steak is cooked to a temperature appropriate for the diners.",
      "Balance and serve (2 minutes). Turn the heat low and stir in the dark chocolate until melted. Add lime juice (or red wine vinegar). Taste and adjust salt, pepper and chipotle. Remember the lardons, stock and cheddar already add salt. Serve in warm bowls with grated mature cheddar, sour cream, coriander and extra lime wedges. Add jalapeños if you want more heat."
    ],
    "nutrition": {
      "kcal": 415,
      "protein": 41.8,
      "carbs": 20.4,
      "fat": 15.2,
      "fibre": 8.9
    }
  },
  {
    "id": "D01",
    "title": "Bourbon caramel apple pie",
    "rating": null,
    "cuisine": "Dessert",
    "type": "Dessert",
    "baseServings": 8,
    "minutes": 85,
    "emoji": "🥧",
    "extras": [],
    "ingredients": [
      "** about 1.5kg apples",
      "2 sheets ready-rolled shortcrust pastry",
      "150g caster sugar",
      "60g butter",
      "120ml double cream",
      "2–3 tbsp bourbon",
      "30g cornflour",
      "1 tbsp lemon juice",
      "1 tsp cinnamon",
      "pinch of salt",
      "1 beaten egg for pastry wash (shared with second pie)."
    ],
    "steps": [
      "Caramel: Gently melt the sugar in a heavy saucepan until deep amber, carefully whisk in butter, then cream. It will bubble vigorously. Once smooth and slightly cooled, stir in bourbon and salt. Hot caramel can burn, so keep hands clear and add the cream gradually.",
      "Toss sliced apples with cinnamon, cornflour and lemon, then fold in the cooled caramel.",
      "Line a 23cm pie tin with one pastry sheet, add the filling and make a lattice with the second. Brush exposed pastry with egg.",
      "Bake on a preheated baking tray at 190°C fan for about 50–65 minutes, shielding the edges with foil if browning too quickly, until the filling is actively bubbling and pastry is golden. Cool for at least 3 hours for clean slices."
    ],
    "fixedYield": true,
    "nutrition": {
      "kcal": 635,
      "protein": 6.2,
      "carbs": 76.1,
      "fat": 32.2,
      "fibre": 5.5
    },
    "protein": "No main protein",
    "region": "North America"
  },
  {
    "id": "D02",
    "title": "Chai-spiced apple pie with crumble topping",
    "rating": null,
    "cuisine": "Dessert",
    "type": "Dessert",
    "baseServings": 8,
    "minutes": 85,
    "emoji": "🥧",
    "extras": [],
    "ingredients": [
      "** about 1.5kg apples",
      "1 sheet ready-rolled shortcrust pastry",
      "110g light brown sugar",
      "30g cornflour",
      "1 tbsp lemon juice",
      "1 tsp cinnamon",
      "½ tsp ground ginger",
      "½ tsp ground cardamom",
      "¼ tsp nutmeg",
      "tiny pinch cloves",
      "optional 1 tsp vanilla.",
      "Crumble: ** 100g plain flour, 75g cold butter, 70g light brown sugar and optional 50g chopped pecans."
    ],
    "steps": [
      "Toss sliced apples with brown sugar, cornflour, lemon juice and chai spices.",
      "Line a 23cm pie tin with pastry and fill with apples.",
      "Rub flour, cold butter and brown sugar together until crumbly; add pecans if using. Scatter over the fruit.",
      "Bake on a preheated baking tray at 190°C fan for about 50–65 minutes, until bubbling and golden. Cover loosely with foil if the crumble colours too fast. Cool at least 3 hours."
    ],
    "fixedYield": true,
    "nutrition": {
      "kcal": 464,
      "protein": 4.3,
      "carbs": 72.2,
      "fat": 17.2,
      "fibre": 5.1
    },
    "protein": "No main protein",
    "region": "North America"
  }
];
