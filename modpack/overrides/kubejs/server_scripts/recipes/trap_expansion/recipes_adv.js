onEvent('server.datapack.high_priority', function (event) {
    let advancementTemplate = (inputItem, recipeItem) => {
        var condition = {};
        //checks if input is a tag
        if (inputItem.startsWith('#')) {
            //removes the #
            var sterileInputItem = inputItem.replace('#', '')
            //set condition to use tags
            condition = {
                items: [
                    {
                    tag: sterileInputItem
                    }
                ]
            }
        } else if (inputItem == null || inputItem == 'minecraft:air') {
            //throws an error if the item is null or minecraft air
            //the air part is a fallback, because I don't exaclty remember how KubeJS handles broken ids
            console.error('variable inputItem can\'t be null or equal air. You probably mistyped something. Currently inputItem is' + inputItem)
        } else {
            //sets condition to use item if it's not a tag
            condition = {
                items: [
                    {
                    item: inputItem
                    }
                ]
            }
        }
        //another "cleaner", this time for fixing namespaces
        var recipeID = recipeItem.replace(":", "_")
        //generates the .json file
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
    //runs this function for every entry in the array(?)
    for (let [input, recipe] of advancements) {
        //the function itself
        advancementTemplate(input, recipe)
    }
})