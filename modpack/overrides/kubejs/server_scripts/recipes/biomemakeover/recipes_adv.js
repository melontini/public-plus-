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
        if (recipeItem == null || recipeItem == 'minecraft:air') {
            console.error('variable recipeItem can\'t be null or equal air. You probably mistyped something. Currently recipeItem is' + recipeItem)
        }
        var recipeID = recipeItem.replace(":", "_")
        event.addJson("biomemakeover:advancements/recipes/" + recipeID + ".json", {
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
        ["biomemakeover:crude_cladding", "biomemakeover:cladded_stone"],
        ["biomemakeover:water_lily", "biomemakeover:magenta_petals_from_water_lily"],
        ["biomemakeover:mycelium_roots", "biomemakeover:blighted_cobblestone"],
        ["biomemakeover:mycelium_roots", "biomemakeover:blighted_stone_bricks"],
        ["biomemakeover:blighted_cobblestone", "biomemakeover:blighted_stone_brick_2x2"],
        ["minecraft:red_mushroom_block", "biomemakeover:red_mushroom_brick"],
        ["minecraft:brown_mushroom_block", "biomemakeover:brown_mushroom_brick"],
        ["biomemakeover:purple_glowshroom_block", "biomemakeover:purple_glowshroom_brick"],
        ["biomemakeover:green_glowshroom_block", "biomemakeover:green_glowshroom_brick"],
        ["biomemakeover:orange_glowshroom_block", "biomemakeover:orange_glowshroom_brick"],
        ["biomemakeover:glowshroom_stem", "biomemakeover:glowshroom_stem_brick"],
        ["minecraft:mushroom_stem", "biomemakeover:mushroom_stem_brick"],
        ["biomemakeover:illunite_shard", "biomemakeover:altar"],
        ["biomemakeover:ectoplasm", "biomemakeover:poltergeist"],
        ["biomemakeover:swamp_azalea", "biomemakeover:white_dye_from_swamp_azalea"],
        ["biomemakeover:marigold", "biomemakeover:orange_dye_from_marigold"],
        ["biomemakeover:black_thistle", "biomemakeover:black_dye_from_black_thistle"],
        ["biomemakeover:foxglove", "biomemakeover:purple_dye_from_foxglove"],
        ["biomemakeover:moth_scales", "biomemakeover:phantom_membrane"],
        ["biomemakeover:peat", "biomemakeover:dried_peat"],
        ["biomemakeover:dried_peat", "biomemakeover:dried_peat_bricks"],
        ["biomemakeover:peat", "biomemakeover:mossy_peat"],
        ["biomemakeover:dried_peat_bricks", "biomemakeover:mossy_dried_peat_brick"],
        ["biomemakeover:dried_peat_bricks", "biomemakeover:cracked_dried_peat_bricks"],
        ["biomemakeover:mesmerite", "biomemakeover:polished_mesmerite"],
        ["biomemakeover:illunite_shard", "biomemakeover:mesmerite"],
        ["biomemakeover:illunite_shard", "biomemakeover:illunite_block"],
        ["biomemakeover:illunite_block", "biomemakeover:illunite_shard_from_block"],
    ]
    for (let [input, recipe] of advancements) {
        advancementTemplate(input, recipe)
    }
    var buildingBlockPlanks = ["ancient_oak", "swamp_cypress", "willow", "blighted_balsa"]
    buildingBlockPlanks.forEach((plank) => {
        advancementTemplate("biomemakeover:" + plank + "_planks", "biomemakeover:" + plank + "_stairs")
        advancementTemplate("biomemakeover:" + plank + "_planks", "biomemakeover:" + plank + "_slab")
        advancementTemplate("biomemakeover:" + plank + "_planks", "biomemakeover:" + plank + "_door")
        advancementTemplate("biomemakeover:" + plank + "_planks", "biomemakeover:" + plank + "_trapdoor")
        advancementTemplate("biomemakeover:" + plank + "_planks", "biomemakeover:" + plank + "_fence")
        advancementTemplate("biomemakeover:" + plank + "_planks", "biomemakeover:" + plank + "_fence_gate")
        advancementTemplate("biomemakeover:" + plank + "_planks", "biomemakeover:" + plank + "_sign")
        advancementTemplate("biomemakeover:" + plank + "_planks", "biomemakeover:" + plank + "_button")
        advancementTemplate("biomemakeover:" + plank + "_planks", "biomemakeover:" + plank + "_pressure_plate")
        //planks
        advancementTemplate("#biomemakeover:" + plank + "_logs", "biomemakeover:" + plank + "_planks")
        //wood
        advancementTemplate("biomemakeover:" + plank + "_log", "biomemakeover:" + plank + "_wood")
        advancementTemplate("biomemakeover:stripped_" + plank + "_log", "biomemakeover:stripped_" + plank + "_wood")
    });
    //shroomsbricks & bricks
    var buildingBricks = ["red_mushroom_brick", "brown_mushroom_brick", "green_glowshroom_brick", "purple_glowshroom_brick", "orange_glowshroom_brick", "glowshroom_stem_brick", "mushroom_stem_brick", "blighted_cobblestone", "blighted_stone_bricks", "dried_peat_bricks", "cracked_dried_peat_bricks", "mossy_dried_peat_bricks", "mesmerite", "polished_mesmerite"]
    buildingBricks.forEach((brick) => {
        var input
        if (brick.includes("cracked_dried_peat_bricks")) { input = "cracked_dried_peat_brick" }
        else if (brick.includes("mossy_dried_peat_bricks")) { input = "mossy_dried_peat_brick" }
        else { input = brick }
        advancementTemplate("biomemakeover:" + brick, "biomemakeover:" + input + "_wall")
        advancementTemplate("biomemakeover:" + brick, "biomemakeover:" + input + "_slab")
        advancementTemplate("biomemakeover:" + brick, "biomemakeover:" + input + "_stairs")
        //console.log(input)
    });
    //"terracotta_bricks"
    color.forEach((col) => {
        advancementTemplate("biomemakeover:" + col + "_terracotta_bricks", "biomemakeover:" + col + "_terracotta_brick_wall")
        advancementTemplate("biomemakeover:" + col + "_terracotta_bricks", "biomemakeover:" + col + "_terracotta_brick_slab")
        advancementTemplate("biomemakeover:" + col + "_terracotta_bricks", "biomemakeover:" + col + "_terracotta_brick_stairs")
        //console.log("biomemakeover:" + col + "_terracotta_brick_slab")
    });
    //boats
    buildingBlockPlanks.forEach((boat) => {
        event.addJson("biomemakeover:advancements/recipes/" + boat + "_boat.json", {
            parent: "minecraft:recipes/root",
            criteria: {
                in_water: {
                    trigger: "minecraft:enter_block",
                    conditions: {
                        block: "minecraft:water"
                    }
                },
                has_the_recipe: {
                    trigger: "minecraft:recipe_unlocked",
                    conditions: {
                        recipe: "biomemakeover:" + boat + "_boat"
                    }
                }
            },
            requirements: [
                [
                    "in_water",
                    "has_the_recipe"
                ]
            ],
            rewards: {
                recipes: [
                    "biomemakeover:" + boat + "_boat"
                ]
            }
        }
        )
    })
    //armor
    var claddedArmor = ["cladded_helmet", "cladded_chestplate", "cladded_leggings", "cladded_boots"]
    claddedArmor.forEach((armor) => {
        advancementTemplate("biomemakeover:crude_cladding", "biomemakeover:" + armor + "_smithing")
    })
    var cookingTypes = ["_from_smoking", "", "_from_camfire_cooking"]
    cookingTypes.forEach((station) => {
        advancementTemplate("biomemakeover:bulbus_root", "biomemakeover:roasted_bulbus_root" + station)
        advancementTemplate("biomemakeover:raw_toad", "biomemakeover:cooked_toad" + station)
        advancementTemplate("biomemakeover:glowfish", "biomemakeover:cooked_glowfish" + station)
    })
    //this is handled by a different advancement
    //advancementTemplate("#biomemakeover:glowshrooms", "biomemakeover:glowshroom_stew")
    //stunt_powder
    event.addJson("biomemakeover:advancements/recipes/stunt_powder.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_shard: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "biomemakeover:illunite_shard"
                        }
                    ]
                }
            },
            has_bulbus: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "biomemakeover:bulbus_root"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "biomemakeover:stunt_powder"
                }
            }
        },
        requirements: [
            [
                "has_shard",
                "has_bulbus",
                "has_the_recipe"
            ]
        ],
        rewards: {
            recipes: [
                "biomemakeover:stunt_powder"
            ]
        }
    }
    )
    var petalColor = ["magenta", "light_blue", "pink", "gray", "cyan", "purple", "blue", "brown"]
    petalColor.forEach((petal) => {
        advancementTemplate("biomemakeover:" + petal + "_petals", "biomemakeover:" + petal + "_dye_from_" + petal + "_petal")
    })
})