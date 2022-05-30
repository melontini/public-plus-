onEvent('server.datapack.high_priority', function (event) {
    let advancementTemplate = (inputItem, recipeItem) => {
        var recipeID = recipeItem.replace(":", "_")
        event.addJson("harvest_scythes:advancements/recipes/" + recipeID + ".json", {
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
    let advancementTemplateTags = (inputItem, recipeItem) => {
        var recipeID = recipeItem.replace(":", "_")
        event.addJson("harvest_scythes:advancements/recipes/" + recipeID + ".json", {
            parent: "minecraft:recipes/root",
            criteria: {
                has_item: {
                    trigger: "minecraft:inventory_changed",
                    conditions: {
                        items: [
                            {
                                tag: inputItem
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
    advancementTemplate('minecraft:iron_ingot', 'harvest_scythes:iron_scythe')
    advancementTemplate('minecraft:gold_ingot', 'harvest_scythes:golden_scythe')
    advancementTemplate('minecraft:iron_ingot', 'harvest_scythes:iron_machete')
    advancementTemplate('minecraft:gold_ingot', 'harvest_scythes:golden_machete')
    advancementTemplate('minecraft:diamond', 'harvest_scythes:diamond_scythe')
    advancementTemplate('minecraft:diamond', 'harvest_scythes:diamond_machete')
    advancementTemplate('minecraft:netherite_ingot', 'harvest_scythes:netherite_scythe')
    advancementTemplate('minecraft:netherite_ingot', 'harvest_scythes:netherite_machete')

    advancementTemplateTags('minecraft:planks', 'harvest_scythes:wooden_scythe')
    advancementTemplateTags('minecraft:planks', 'harvest_scythes:wooden_machete')
    advancementTemplateTags('minecraft:stone_tool_materials', 'harvest_scythes:stone_scythe')
    advancementTemplateTags('minecraft:stone_tool_materials', 'harvest_scythes:stone_machete')
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