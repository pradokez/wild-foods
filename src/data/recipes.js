const recipes = [
    {
      name: "Copious Meat Skewers",
      ingredients: ["Meat", "Meat", "Meat", "Meat"],
    },
    {
      name: "Creamy Meat Soup",
      ingredients: ["Fresh Milk", "Rock Salt", "Greens", "Meat"],
    },
    {
      name: "Glazed Meat",
      ingredients: ["Courser Bee Honey", "Meat"],
    },
    {
      name: "Gourmet Meat and Rice Bowl",
      ingredients: [
        "Hylian Rice",
        "Raw Gourmet Meat or Raw Whole Bird",
        "Rock Salt",
      ],
    },
    {
      name: "Gourmet Meat and Seafood Fry",
      ingredients: ["Raw Gourmet Meat or Raw Whole Bird", "Seafood"],
    },
    {
      name: "Gourmet Meat Curry",
      ingredients: ["Hylian Rice", "Goron Spice", "Raw Gourmet Meat"],
    },
    {
      name: "Gourmet Meat Stew",
      ingredients: ["Fresh Milk", "Tabantha Wheat", "..."],
    },
    {
      name: "Gourmet Spiced Meat Skewer",
      ingredients: ["Goron Spice", "Raw Gourmet Meat"],
    },
    {
      name: "Meat and Mushroom Skewer",
      ingredients: ["Meat", "Mushroom"],
    },
    {
      name: "Meat and Rice Bowl",
      ingredients: ["Hylian Rice", "Raw Bird Drumstick or Raw Meat", "Rock Salt"],
    },
    {
      name: "Meat and Seafood Fry",
      ingredients: ["Seafood", "Raw Bird Drumstick or Raw Meat"],
    },
    {
      name: "Meat Curry",
      ingredients: ["Goron Spice", "Hylian Rice", "Raw Meat"],
    },
    {
      name: "Meat Pie",
      ingredients: ["Goat Butter", "Meat", "Rock Salt", "Tabantha Wheat"],
    },
    {
      name: "Meat Skewer",
      ingredients: ["Meat"],
    },
    {
      name: "Meat Stew",
      ingredients: ["Fresh Milk", "..."],
    },
    { name: "Crab Stir-Fry", ingredients: ["Crab", "Goron Spice"] },
    {
      name: "Creamy Seafood Soup",
      ingredients: ["Fresh Milk", "Rock Salt", "Greens", "Seafood"],
    },
    {
      name: "Fish and Mushroom Skewer",
      ingredients: ["Fish", "Mushroom"],
    },
    {
      name: "Fish Pie",
      ingredients: ["Goat Butter", "Rock Salt", "Seafood", "Tabantha Wheat"],
    },
    {
      name: "Fish Skewer",
      ingredients: ["Fish"],
    },
    {
      name: "Glazed Seafood",
      ingredients: ["Courser Bee Honey"],
    },
    {
      name: "Pepper Seafood",
      ingredients: ["Seafood", "Spicy Pepper"],
    },
    {
      name: "Porgy Meuniere",
      ingredients: ["Goat Butter", "Porgy", "Tabantha Wheat"],
    },
    {
      name: "Salmon Meuniere",
      ingredients: ["Goat Butter", "Hearty Salmon", "Tabantha Wheat"],
    },
    {
      name: "Pumpkin Pie",
      ingredients: [
        "Cane Sugar",
        "Fortified Pumpkin",
        "Goat Butter",
        "Tabantha Wheat",
      ],
    },
    {
      name: "Pumpkin Stew",
      ingredients: [
        "Fortified Pumpkin",
        "Fresh Milk",
        "Goat Butter",
        "Tabantha Wheat",
      ],
    },
    {
      name: "Salt-Grilled Greens",
      ingredients: ["Rock Salt", "Greens"],
    },
    {
      name: "Salt-Grilled Mushrooms",
      ingredients: ["Mushroom", "Rock Salt"],
    },
    {
      name: "Sauteed Peppers",
      ingredients: ["Spicy Pepper"],
    },
    {
      name: "Steamed Mushrooms",
      ingredients: ["Mushroom", "Greens"],
    },
    {
      name: "Vegetable Curry",
      ingredients: ["Carrot OR Fortified Pumpkin", "Goron Spice", "Hylian Rice"],
    },
    {
      name: "Vegetable Omelet",
      ingredients: [
        "Bird Egg",
        "Hylian Rice OR Tabantha Wheat OR Hearty Truffle",
        "Rock Salt",
      ],
    },
    { name: "Honeyed Apple", ingredients: ["Apple", "Courser Bee Honey"] },
    {
      name: "Honeyed Fruits",
      ingredients: ["Courser Bee Honey", "Fruit"],
    },
    {
      name: "Hot Buttered Apple",
      ingredients: ["Apple", "Goat Butter"],
    },
    {
      name: "Nutcake",
      ingredients: ["Cane Sugar", "Goat Butter", "Nut"],
    },
    {
      name: "Plain Crepe",
      ingredients: ["Bird Egg", "Cane Sugar", "Fresh Milk", "Tabantha Wheat"],
    },
    {
      name: "Simmered Fruit",
      ingredients: ["Fruit"],
    },
    {
      name: "Steamed Fruit",
      ingredients: ["Fruit", "Greens"],
    },
    {
      name: "Wildberry Crepe",
      ingredients: [
        "Bird Egg",
        "Cane Sugar",
        "Fresh Milk",
        "Tabantha Wheat",
        "Wildberry",
      ],
    },
    {
      name: "Curry Pilaf",
      ingredients: ["Goat Butter", "Goron Spice", "Hylian Rice"],
    },
    {
      name: "Curry Rice",
      ingredients: ["Goron Spice", "Hylian Rice"],
    },
    {
      name: "Dubious Food",
      ingredients: ["One of: Monster Part, Creature, Anything"],
    },
    {
      name: "Fried Egg and Rice",
      ingredients: ["Bird Egg", "Hylian Rice"],
    },
    {
      name: "Monster Cake",
      ingredients: [
        "Cane Sugar",
        "Goat Butter",
        "Monster Extract",
        "Tabantha Wheat",
      ],
    },
    {
      name: "Monster Curry",
      ingredients: ["Goron Spice", "Hylian Rice", "Monster Extract"],
    },
    {
      name: "Monster Rice Balls",
      ingredients: ["Hylian Rice", "Monster Extract", "Rock Salt"],
    },
    {
      name: "Chilly Elixir",
      ingredients: ["Monster Part", "Heat Resistance Creature"],
      effect: "Heat Resistance",
    },
    {
      name: "Electro Elixir",
      ingredients: ["Monster Part", "Shock Resistance Creature"],
      effect: "Shock Resistance",
    },
    {
      name: "Enduring Elixir",
      ingredients: ["Monster Part", "Extra Stamina Creatures"],
      effect: "Extra Stamina",
    },
    {
      name: "Energizing Elixir",
      ingredients: ["Monster Part", "Stamina Restoration Creatures"],
      effect: "Stamina Restoration",
    },
    {
      name: "Fireproof Elixir",
      ingredients: ["Monster Part", "Flame Guard Creatures"],
      effect: "Flame Guard",
    },
    {
      name: "Hasty Elixir",
      ingredients: ["Monster Part", "Movement Speed Up Creatures"],
      effect: "Movement Speed Up",
    },
  ];
  
  export default recipes;