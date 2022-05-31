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
        event.addJson("harvest_scythes:advancements/recipes/" + recipeID + ".json", {
            parent: "minecraft:recipes/root",
            criteria: {
                has_item: {
                    trigger: "minecraft:inventory_changed",
                    conditions: condition
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
        ['minecraft:iron_ingot', 'harvest_scythes:iron_scythe'],
        ['minecraft:gold_ingot', 'harvest_scythes:golden_scythe'],
        ['minecraft:iron_ingot', 'harvest_scythes:iron_machete'],
        ['minecraft:gold_ingot', 'harvest_scythes:golden_machete'],
        ['minecraft:diamond', 'harvest_scythes:diamond_scythe'],
        ['minecraft:diamond', 'harvest_scythes:diamond_machete'],
        ['minecraft:netherite_ingot', 'harvest_scythes:netherite_scythe'],
        ['minecraft:netherite_ingot', 'harvest_scythes:netherite_scythe'],
        //tags
        ['#minecraft:planks', 'harvest_scythes:wooden_scythe'],
        ['#minecraft:planks', 'harvest_scythes:wooden_machete'],
        ['#minecraft:stone_tool_materials', 'harvest_scythes:stone_scythe'],
        ['#minecraft:stone_tool_materials', 'harvest_scythes:stone_machete'],
    ];
    for (let [input, recipe] of advancements) {
        advancementTemplate(input, recipe)
    }
})
onEvent('recipes', event => {
    event.remove({output: 'harvest_scythes:stone_scythe'})
    event.shaped('harvest_scythes:stone_scythe', [
      'SSS',
      '  s',
      '  s'
    ], {
      S: '#minecraft:stone_tool_materials',
      s: 'minecraft:stick'
    }).id('harvest_scythes:stone_scythe')

    event.remove({output: 'harvest_scythes:stone_machete'})
    event.shaped('harvest_scythes:stone_machete', [
      'SS ',
      ' S ',
      ' s '
    ], {
      S: '#minecraft:stone_tool_materials',
      s: 'minecraft:stick'
    }).id('harvest_scythes:stone_machete')
})