onEvent('recipes', event => {
    color.forEach((brick) => {
        event.remove({ id: 'blockus:' + brick + '_shingles' })
        event.shaped('6x blockus:' + brick + '_shingles', [
            'T T',
            'TTT',
            ' T '
        ], {
            T: 'minecraft:' + brick + '_terracotta'
        }).id("blockus:" + brick + "_shingles")
    })
    event.remove({ id: 'blockus:shingles' })
    event.shaped('6x blockus:shingles', [
        'T T',
        'TTT',
        ' T '
    ], {
        T: 'minecraft:terracotta'
    }).id("blockus:shingles")
})
onEvent('server.datapack.high_priority', function (event) {
    let advancementTemplate = (inputItem, recipeItem) => {
        var recipeID = recipeItem.replace(":", "_")
        event.addJson("blockus:advancements/recipes/" + recipeID + ".json", {
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
})