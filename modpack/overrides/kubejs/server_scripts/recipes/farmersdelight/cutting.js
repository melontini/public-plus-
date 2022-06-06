onEvent('recipes', event => {
    let cuttingTemplate = (inputItem, tool, output, count, output1, count1, output2, count2, output3, count3, output4, count4) => {
        if (inputItem.startsWith('#')) {
            var ingredients = {}
            var sterileInputItem = inputItem.replace('#', '')
            ingredients = {
                tag: sterileInputItem
            }

        } else if (inputItem == null || inputItem == 'minecraft:air') {
            console.error('variable inputItem can\'t be null or equal air. You probably mistyped something. Currently inputItem is' + inputItem)
        } else {
            ingredients = {
                item: inputItem
            }
        }
        //tools
        if (tool.startsWith('#')) {
            var craftingTool = {}
            var steriletool = tool.replace('#', '')
            craftingTool = {
                "type": "farmersdelight:tool",
                "tag": steriletool
            }
        } else if (tool == null || tool == 'minecraft:air') {
            console.error('variable tool can\'t be null or equal air. You probably mistyped something. Currently inputItem is' + tool)
        } else {
            craftingTool = {
                "type": "farmersdelight:tool",
                "item": tool
            }
        }
        //holy fuck
        var outputItems = {};
        if (output4 != null) {
            event.custom({
                "type": "farmersdelight:cutting",
                "ingredients": [ingredients],
                "tool": craftingTool,
                "result": [
                    {
                        "item": output,
                        "count": count
                    },
                    {
                        "item": output1,
                        "count": count1
                    },
                    {
                        "item": output2,
                        "count": count2
                    },
                    {
                        "item": output3,
                        "count": count3
                    },
                    {
                        "item": output4,
                        "count": count4
                    }
                ]
            })
        } else if (output3 != null) {
            event.custom({
                "type": "farmersdelight:cutting",
                "ingredients": [ingredients],
                "tool": craftingTool,
                "result": [
                    {
                        "item": output,
                        "count": count
                    },
                    {
                        "item": output1,
                        "count": count1
                    },
                    {
                        "item": output2,
                        "count": count2
                    },
                    {
                        "item": output3,
                        "count": count3
                    }
                ]
            })
        } else if (output2 != null) {
            event.custom({
                "type": "farmersdelight:cutting",
                "ingredients": [ingredients],
                "tool": craftingTool,
                "result": [
                    {
                        "item": output,
                        "count": count
                    },
                    {
                        "item": output1,
                        "count": count1
                    },
                    {
                        "item": output2,
                        "count": count2
                    }
                ]
            })
        } else if (output1 != null) {
            event.custom({
                "type": "farmersdelight:cutting",
                "ingredients": [ingredients],
                "tool": craftingTool,
                "result": [
                    {
                        "item": output,
                        "count": count
                    },
                    {
                        "item": output1,
                        "count": count1
                    }
                ]
            })
        } else if (output != null) {
            event.custom({
                "type": "farmersdelight:cutting",
                "ingredients": [ingredients],
                "tool": craftingTool,
                "result": [
                    {
                        "item": output,
                        "count": count
                    }
                ]
            })
        } else {
            console.error('no output specified')
        }
    }
    let cuttingTemplateSound = (sound, inputItem, tool, output, count, output1, count1, output2, count2, output3, count3, output4, count4) => {
        if (inputItem.startsWith('#')) {
            var ingredients = {}
            var sterileInputItem = inputItem.replace('#', '')
            ingredients = {
                tag: sterileInputItem
            }

        } else if (inputItem == null || inputItem == 'minecraft:air') {
            console.error('variable inputItem can\'t be null or equal air. You probably mistyped something. Currently inputItem is' + inputItem)
        } else {
            ingredients = {
                item: inputItem
            }
        }
        //tools
        if (tool.startsWith('#')) {
            var craftingTool = {}
            var steriletool = tool.replace('#', '')
            craftingTool = {
                "type": "farmersdelight:tool",
                "tag": steriletool
            }
        } else if (tool == null || tool == 'minecraft:air') {
            console.error('variable tool can\'t be null or equal air. You probably mistyped something. Currently inputItem is' + tool)
        } else {
            craftingTool = {
                "type": "farmersdelight:tool",
                "item": tool
            }
        }
        //holy fuck
        var outputItems = {};
        if (output4 != null) {
            event.custom({
                "type": "farmersdelight:cutting",
                "ingredients": [ingredients],
                "tool": craftingTool,
                "result": [
                    {
                        "item": output,
                        "count": count
                    },
                    {
                        "item": output1,
                        "count": count1
                    },
                    {
                        "item": output2,
                        "count": count2
                    },
                    {
                        "item": output3,
                        "count": count3
                    },
                    {
                        "item": output4,
                        "count": count4
                    }
                ],
                "sound": sound
            })
        } else if (output3 != null) {
            event.custom({
                "type": "farmersdelight:cutting",
                "ingredients": [ingredients],
                "tool": craftingTool,
                "result": [
                    {
                        "item": output,
                        "count": count
                    },
                    {
                        "item": output1,
                        "count": count1
                    },
                    {
                        "item": output2,
                        "count": count2
                    },
                    {
                        "item": output3,
                        "count": count3
                    }
                ],
                "sound": sound
            })
        } else if (output2 != null) {
            event.custom({
                "type": "farmersdelight:cutting",
                "ingredients": [ingredients],
                "tool": craftingTool,
                "result": [
                    {
                        "item": output,
                        "count": count
                    },
                    {
                        "item": output1,
                        "count": count1
                    },
                    {
                        "item": output2,
                        "count": count2
                    }
                ],
                "sound": sound
            })
        } else if (output1 != null) {
            event.custom({
                "type": "farmersdelight:cutting",
                "ingredients": [ingredients],
                "tool": craftingTool,
                "result": [
                    {
                        "item": output,
                        "count": count
                    },
                    {
                        "item": output1,
                        "count": count1
                    }
                ],
                "sound": sound
            })
        } else if (output != null) {
            event.custom({
                "type": "farmersdelight:cutting",
                "ingredients": [ingredients],
                "tool": craftingTool,
                "result": [
                    {
                        "item": output,
                        "count": count
                    }
                ],
                "sound": sound
            })
        } else {
            console.error('no output specified')
        }
    }
    cuttingTemplate('biomemakeover:wild_mushrooms', '#fabric:tools/knives', 'minecraft:brown_mushroom', 2, 'minecraft:red_mushroom', 2)
    cuttingTemplate('biomemakeover:tall_brown_mushroom', '#fabric:tools/knives', 'minecraft:brown_mushroom', 3)
    cuttingTemplate('biomemakeover:tall_red_mushroom', '#fabric:tools/knives', 'minecraft:red_mushroom', 3)
    cuttingTemplate('biomemakeover:cattail', '#fabric:tools/knives', 'minecraft:string', 2)

    cuttingTemplate('biomemakeover:glowfish', '#fabric:tools/knives', 'farmersdelight:salmon_slice', 2, 'minecraft:bone_meal', 1)
    cuttingTemplate('biomemakeover:cooked_glowfish', '#fabric:tools/knives', 'farmersdelight:cooked_salmon_slice', 2, 'minecraft:bone_meal', 1)
    cuttingTemplate('biomemakeover:raw_toad', '#fabric:tools/knives', 'farmersdelight:chicken_cuts', 2, 'minecraft:bone_meal', 1)
    cuttingTemplate('biomemakeover:cooked_toad', '#fabric:tools/knives', 'farmersdelight:cooked_chicken_cuts', 2, 'minecraft:bone_meal', 1)

    var logs = [
        ['biomemakeover', 'willow'],
        ['biomemakeover', 'ancient_oak'],
        ['biomemakeover', 'blighted_balsa'],
        ['biomemakeover', 'swamp_cypress'],
        ['traverse', 'fir'],
        ['terrestria', 'japanese_maple'],
        ['terrestria', 'redwood'],
        ['terrestria', 'hemlock'],
        ['terrestria', 'rubber'],
        ['terrestria', 'cypress'],
        ['terrestria', 'willow']
    ]
    for (let [namespace, log] of logs) {
        cuttingTemplateSound("minecraft:item.axe.strip", namespace + ':' + log + '_log', '#fabric:tools/axes', namespace + ':stripped_' + log + '_log', 1, 'farmersdelight:tree_bark')
        cuttingTemplateSound("minecraft:item.axe.strip", namespace + ':' + log + '_wood', '#fabric:tools/axes', namespace + ':stripped_' + log + '_wood', 1, 'farmersdelight:tree_bark')
        cuttingTemplate(namespace + ':' + log + '_door', '#fabric:tools/axes', namespace + ':' + log + '_planks', 1)
        cuttingTemplate(namespace + ':' + log + '_trapdoor', '#fabric:tools/axes', namespace + ':' + log + '_planks', 1)
        cuttingTemplate(namespace + ':' + log + '_sign', '#fabric:tools/axes', namespace + ':' + log + '_planks', 1)
    }
    var logNoWood = [
        ['terrestria', 'sakura'],
        ['terrestria', 'yucca_palm']
    ]
    for (let [namespace, log] of logNoWood) {
        cuttingTemplateSound("minecraft:item.axe.strip", namespace + ':' + log + '_log', '#fabric:tools/axes', namespace + ':stripped_' + log + '_log', 1, 'farmersdelight:tree_bark')
        cuttingTemplate(namespace + ':' + log + '_door', '#fabric:tools/axes', namespace + ':' + log + '_planks', 1)
        cuttingTemplate(namespace + ':' + log + '_trapdoor', '#fabric:tools/axes', namespace + ':' + log + '_planks', 1)
        cuttingTemplate(namespace + ':' + log + '_sign', '#fabric:tools/axes', namespace + ':' + log + '_planks', 1)
    }
    var logNoLog = [
        ['blockus', 'bamboo']
    ]
    for (let [namespace, log] of logNoLog) {
        cuttingTemplate(namespace + ':' + log + '_door', '#fabric:tools/axes', namespace + ':' + log + '_planks', 1)
        cuttingTemplate(namespace + ':' + log + '_trapdoor', '#fabric:tools/axes', namespace + ':' + log + '_planks', 1)
    }
    var stems = [
        ['cinderscapes', 'umbral'],
        ['cinderscapes', 'scorched']
    ]
    for (let [namespace, log] of stems) {
        cuttingTemplateSound("minecraft:item.axe.strip", namespace + ':' + log + '_stem', '#fabric:tools/axes', namespace + ':stripped_' + log + '_stem', 1, 'farmersdelight:tree_bark')
        cuttingTemplateSound("minecraft:item.axe.strip", namespace + ':' + log + '_hyphae', '#fabric:tools/axes', namespace + ':stripped_' + log + '_hyphae', 1, 'farmersdelight:tree_bark')
        cuttingTemplate(namespace + ':' + log + '_door', '#fabric:tools/axes', namespace + ':' + log + '_planks', 1)
        cuttingTemplate(namespace + ':' + log + '_trapdoor', '#fabric:tools/axes', namespace + ':' + log + '_planks', 1)
        cuttingTemplate(namespace + ':' + log + '_sign', '#fabric:tools/axes', namespace + ':' + log + '_planks', 1)
    }
    //why, blockus?
    cuttingTemplateSound("minecraft:item.axe.strip", 'blockus:white_oak_log', '#fabric:tools/axes', 'blockus:stripped_white_oak_log', 1, 'farmersdelight:tree_bark')
    cuttingTemplateSound("minecraft:item.axe.strip", 'blockus:white_oak_wood', '#fabric:tools/axes', 'blockus:stripped_white_oak_wood', 1, 'farmersdelight:tree_bark')
    cuttingTemplate('blockus:white_oak_door', '#fabric:tools/axes', 'blockus:white_oak_planks', 1)
    cuttingTemplate('blockus:white_oak_trapdoor', '#fabric:tools/axes', 'blockus:white_oak_planks', 1)

    //terrestria
    cuttingTemplate('terrestria:cattail', '#fabric:tools/knives', 'minecraft:string', 2)

    //gofish
    cuttingTemplate('gofish:smokey_salmon', '#fabric:tools/knives', 'farmersdelight:cooked_salmon_slice', 2, 'minecraft:bone_meal', 1)
})