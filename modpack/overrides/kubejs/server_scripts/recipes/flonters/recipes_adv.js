onEvent('server.datapack.high_priority', function (event) {
    let advancementTemplate = (inputItem, recipeItem) => {
        var recipeID = recipeItem.replace(":", "_")
        event.addJson("flonters:advancements/recipes/" + recipeID + ".json", {
            parent: "minecraft:recipes/root",
            criteria: {
                has_item: {
                    trigger: "minecraft:inventory_changed",
                    conditions: {
                        items: [
                            {
                                item: inputItem
                            }
                        ]
                    }
                },
                has_the_recipe: {
                    trigger: "minecraft:recipe_unlocked",
                    conditions: {
                        recipe: recipeItem
                    }
                }
            },
            requirements: [
                [
                    "has_item",
                    "has_the_recipe"
                ]
            ],
            rewards: {
                recipes: [
                    recipeItem
                ]
            }
        })
    }
    color.forEach((color) => {
        advancementTemplate('flonters:' + color + '_flower', 'flonters:' + color + '_flower_dye')
        advancementTemplate('flonters:' + color + '_tallflower', 'flonters:' + color + '_tallflower_dye')
    })
    advancementTemplate('minecraft:egg', 'flonters:eggshell_fertilizer')
})