onEvent('server.datapack.high_priority', function (event) {
    let advancementTemplate = (inputItem, recipeItem) => {
        var recipeID = recipeItem.replace(":", "_")
        event.addJson("trapexpansion:advancements/recipes/" + recipeID + ".json", {
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
    advancementTemplate('biomemakeover:illunite_shard', 'trapexpansion:detector')
    advancementTemplate('minecraft:redstone', 'trapexpansion:analog_fan')
    advancementTemplate('minecraft:redstone', 'trapexpansion:fan')
    advancementTemplate('minecraft:iron_sword', 'trapexpansion:spike_trap')
    advancementTemplate('minecraft:iron_sword', 'trapexpansion:powered_spike_trap')
    advancementTemplate('minecraft:packed_ice', 'trapexpansion:slippery_stone')
})