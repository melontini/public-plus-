onEvent('recipes', event => {
    event.remove({ id: 'candlebackport:candle' })
    event.shaped('candlebackport:candle', [
        'S',
        'H'
    ], {
        H: 'minecraft:honeycomb',
        S: 'minecraft:string'
    }).group('candle').id("candlebackport:candle")
    color.forEach((color) => {
        event.remove({ id: 'candlebackport:' + color + '_candle' })
        event.shapeless('candlebackport:' + color + '_candle', ['candlebackport:candle', 'minecraft:' + color + '_dye']).group('candle').id("candlebackport:" + color + "_candle")
    })
})

onEvent('server.datapack.high_priority', function (event) {
    let advancementTemplate = (inputItem, recipeItem) => {
        var recipeID = recipeItem.replace(":", "_")
        event.addJson("candlebackport:advancements/recipes/" + recipeID + ".json", {
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
    advancementTemplate('minecraft:honeycomb', 'candlebackport:candle')
    color.forEach(color => {
        advancementTemplate('candlebackport:candle', 'candlebackport:' + color + '_candle')
    })
})