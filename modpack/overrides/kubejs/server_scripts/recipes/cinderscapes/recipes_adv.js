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
        event.addJson("cinderscapes:advancements/recipes/" + recipeID + ".json", {
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
    var quartz = ['rose_quartz', 'smoky_quartz', 'sulfur_quartz']
    quartz.forEach((quartz) => {
        advancementTemplate('cinderscapes:' + quartz, 'cinderscapes:' + quartz + '_block')
        advancementTemplate('cinderscapes:' + quartz + '_block', 'cinderscapes:' + quartz + '_bricks')
        advancementTemplate('cinderscapes:' + quartz + '_block', 'cinderscapes:' + quartz + '_pillar')
        advancementTemplate('cinderscapes:' + quartz + '_block', 'cinderscapes:' + quartz + '_slab')
        advancementTemplate('cinderscapes:' + quartz + '_slab', 'cinderscapes:chiseled_' + quartz + '_block')
        advancementTemplate('cinderscapes:' + quartz + '_block', 'cinderscapes:' + quartz + '_stairs')
        advancementTemplate('cinderscapes:' + quartz + '_block', 'cinderscapes:smooth_' + quartz)
        advancementTemplate('cinderscapes:smooth_' + quartz, 'cinderscapes:smooth_' + quartz + '_slab')
        advancementTemplate('cinderscapes:smooth_' + quartz, 'cinderscapes:smooth_' + quartz + '_stairs')
    })
    var wood = ['scorched', 'umbral']
    wood.forEach((wood) => {
        advancementTemplate('#cinderscapes:' + wood + '_stems', 'cinderscapes:' + wood + '_planks')

        advancementTemplate('cinderscapes:' + wood + '_planks', 'cinderscapes:' + wood + '_stairs')
        advancementTemplate('cinderscapes:' + wood + '_planks', 'cinderscapes:' + wood + '_slab')
        advancementTemplate('cinderscapes:' + wood + '_planks', 'cinderscapes:' + wood + '_pressure_plate')
        advancementTemplate('cinderscapes:' + wood + '_planks', 'cinderscapes:' + wood + '_fence')
        advancementTemplate('cinderscapes:' + wood + '_planks', 'cinderscapes:' + wood + '_fence_gate')
        advancementTemplate('cinderscapes:' + wood + '_planks', 'cinderscapes:' + wood + '_trapdoor')
        advancementTemplate('cinderscapes:' + wood + '_planks', 'cinderscapes:' + wood + '_door')
        advancementTemplate('cinderscapes:' + wood + '_planks', 'cinderscapes:' + wood + '_button')
        advancementTemplate('cinderscapes:' + wood + '_planks', 'cinderscapes:' + wood + '_sign')
    })
    advancementTemplate('cinderscapes:sulfur', 'cinderscapes:gunpowder')
    advancementTemplate('cinderscapes:ash_pile', 'cinderscapes:ash_block')
    advancementTemplate('cinderscapes:ash_block', 'cinderscapes:ash')
})