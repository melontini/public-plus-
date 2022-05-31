onEvent('server.datapack.high_priority', function (event) {
    let advancementTemplate = (inputItem, recipeItem) => {
        var condition = {};
        if (inputItem.startsWith('#')) {
            var sterileInputItem = inputItem.replace('#', '')
            condition = {
                items: [
                    {
                    tag: sterileInputItem
                    }
                ]
            }
        } else if (inputItem == null || inputItem == 'minecraft:air') {
            console.error('variable inputItem can\'t be null or equal air. You probably mistyped something. Currently inputItem is' + inputItem)
        } else {
            condition = {
                items: [
                    {
                    item: inputItem
                    }
                ]
            }
        }
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
    let advancements = [
        ['biomemakeover:illunite_shard', 'trapexpansion:detector'],
        ['minecraft:redstone', 'trapexpansion:analog_fan'],
        ['minecraft:redstone', 'trapexpansion:fan'],
        ['minecraft:iron_sword', 'trapexpansion:spike_trap'],
        ['minecraft:iron_sword', 'trapexpansion:powered_spike_trap'],
        ['minecraft:packed_ice', 'trapexpansion:slippery_stone'],
    ];
    for (let [input, recipe] of advancements) {
        advancementTemplate(input, recipe)
    }
})