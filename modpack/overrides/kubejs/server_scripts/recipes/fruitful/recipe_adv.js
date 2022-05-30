onEvent('server.datapack.high_priority', function (event) {
    event.addJson("fruitful:advancements/recipes/baked_apple.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_apple: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "minecraft:apple"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "fruitful:baked_apple"
                }
            }
        },
        requirements: [
            [
                "has_apple",
                "has_the_recipe"
            ]
        ],
        rewards: {
            recipes: [
                "fruitful:baked_apple"
            ]
        }
    })
    event.addJson("fruitful:advancements/recipes/baked_apple_from_smoking.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_apple: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "minecraft:apple"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "fruitful:baked_apple_from_smoking"
                }
            }
        },
        requirements: [
            [
                "has_apple",
                "has_the_recipe"
            ]
        ],
        rewards: {
            recipes: [
                "fruitful:baked_apple_from_smoking"
            ]
        }
    })
    event.addJson("fruitful:advancements/recipes/baked_apple_from_campfire_cooking.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_apple: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "minecraft:apple"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "fruitful:baked_apple_from_campfire_cooking"
                }
            }
        },
        requirements: [
            [
                "has_apple",
                "has_the_recipe"
            ]
        ],
        rewards: {
            recipes: [
                "fruitful:baked_apple_from_campfire_cooking"
            ]
        }
    })
})