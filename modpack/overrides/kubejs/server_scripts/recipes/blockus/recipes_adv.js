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
        ["minecraft:smooth_stone", "blockus:smooth_stone_stairs"],
        ["minecraft:crimson_roots", "blockus:crimson_warty_blackstone_bricks"],
        ["minecraft:warped_roots", "blockus:warped_warty_blackstone_bricks"],
        ["minecraft:polished_blackstone", "blockus:gold_decorated_polished_blackstone"],
        ["minecraft:polished_blackstone", "blockus:gold_decorated_polished_blackstone_2"],
        ["minecraft:basalt", "blockus:rough_basalt"],
        ["minecraft:basalt", "blockus:blackstone_door"],
        ["minecraft:blackstone", "blockus:blackstone_door"],
        ["minecraft:blackstone", "blockus:blackstone_trapdoor"],
        ["minecraft:polished_basalt", "blockus:polished_basalt_bricks"],
        ["blockus:polished_basalt_bricks", "blockus:polished_basalt_bricks_stairs"],
        ["blockus:polished_basalt_bricks", "blockus:polished_basalt_bricks_slab"],
        ["blockus:polished_basalt_bricks", "blockus:polished_basalt_bricks_wall"],
        ["blockus:polished_basalt_bricks", "blockus:cracked_polished_basalt_bricks"],
        ["blockus:bluestone", "blockus:bluestone_stairs"],
        ["blockus:bluestone", "blockus:bluestone_slab"],
        ["blockus:bluestone", "blockus:bluestone_wall"],
        ["blockus:bluestone", "blockus:polished_bluestone"],
        ["blockus:smooth_bluestone", "blockus:bluestone_bricks"],
        ["blockus:bluestone_bricks", "blockus:bluestone_tiles"],
        ["blockus:smooth_bluestone", "blockus:polished_bluestone_stairs"],
        ["blockus:smooth_bluestone", "blockus:polished_bluestone_slab"],
        ["blockus:smooth_bluestone", "blockus:polished_bluestone_wall"],
        ["blockus:bluestone_bricks", "blockus:bluestone_bricks_stairs"],
        ["blockus:bluestone_bricks", "blockus:bluestone_bricks_slab"],
        ["blockus:bluestone_bricks", "blockus:bluestone_bricks_wall"],
        ["blockus:bluestone_little_bricks", "blockus:small_bluestone_bricks_stairs"],
        ["blockus:bluestone_little_bricks", "blockus:small_bluestone_bricks_slab"],
        ["blockus:bluestone_little_bricks", "blockus:small_bluestone_bricks_wall"],
        ["blockus:bluestone_tiles", "blockus:bluestone_tiles_stairs"],
        ["blockus:bluestone_tiles", "blockus:bluestone_tiles_slab"],
        ["blockus:bluestone_tiles", "blockus:bluestone_tile_wall"],
        //snowy
        ["minecraft:snow_block", "blockus:snow_bricks"],
        ["blockus:snow_bricks", "blockus:snow_bricks_stairs"],
        ["blockus:snow_bricks", "blockus:snow_bricks_slab"],
        ["blockus:snow_bricks", "blockus:snow_bricks_wall"],
        //ice-y
        ["#minecraft:ice", "blockus:ice_bricks"],
        ["minecraft:ice", "blockus:ice_bricks"],
        ["minecraft:packed_ice", "blockus:ice_bricks"],
        ["minecraft:blue_ice", "blockus:ice_bricks"],
        ["blockus:ice_bricks", "blockus:ice_bricks_wall"],
        //obsidian
        ["minecraft:obsidian", "blockus:obsidian_bricks"],
        ["blockus:obsidian_bricks", "blockus:obsidian_bricks_stairs"],
        ["blockus:obsidian_bricks", "blockus:obsidian_bricks_slab"],
        ["blockus:obsidian_bricks", "blockus:obsidian_bricks_wall"],
        ["blockus:small_obsidian_bricks", "blockus:small_obsidian_bricks_stairs"],
        ["blockus:small_obsidian_bricks", "blockus:small_obsidian_bricks_slab"],
        ["blockus:small_obsidian_bricks", "blockus:small_obsidian_bricks_wall"],
        ["blockus:obsidian_bricks", "blockus:cracked_obsidian_bricks"],
        ["minecraft:obsidian", "blockus:obsidian_reinforced_door"],
        ["minecraft:obsidian", "blockus:obsidian_reinforced_trapdoor"],
        //quartz
        ["blockus:quartz_bricks", "blockus:quartz_tiles_stairs"],
        ["blockus:quartz_bricks", "blockus:quartz_tiles_slab"],
        ["blockus:quartz_bricks", "blockus:quartz_tile_wall"],
        //bricks
        ["minecraft:bricks", "blockus:large_bricks"],
        ["blockus:large_bricks", "blockus:large_bricks_stairs"],
        ["blockus:large_bricks", "blockus:large_bricks_slab"],
        ["blockus:large_bricks", "blockus:large_bricks_wall"],
        //sand_bricks
        ["minecraft:bricks", "blockus:sandy_bricks"],
        ["minecraft:brick", "blockus:sandy_bricks_alt"],
        ["blockus:sandy_bricks", "blockus:sandy_bricks_stairs"],
        ["blockus:sandy_bricks", "blockus:sandy_bricks_slab"],
        ["blockus:sandy_bricks", "blockus:sandy_bricks_wall"],
        ["blockus:zigzagged_bricks", "blockus:zigzagged_sandy_bricks"],
        //soul sandstone
        ['#blockus:soul_soils', 'blockus:soul_sandstone'],
        ["blockus:soul_sandstone", "blockus:soul_sandstone_stairs"],
        ["blockus:soul_sandstone", "blockus:soul_sandstone_slab"],
        ["blockus:soul_sandstone", "blockus:soul_sandstone_wall"],
        ["blockus:soul_sandstone", "blockus:smooth_soul_sandstone"],
        ["blockus:smooth_soul_sandstone", "blockus:smooth_soul_sandstone_stairs"],
        ["blockus:smooth_soul_sandstone", "blockus:smooth_soul_sandstone_slab"],
        ["blockus:smooth_soul_sandstone", "blockus:smooth_soul_sandstone_wall"],
        //honey
        ["minecraft:honeycomb_block", "blockus:honeycomb_bricks"],
        ["blockus:honeycomb_bricks", "blockus:honeycomb_bricks_stairs"],
        ["blockus:honeycomb_bricks", "blockus:honeycomb_bricks_slab"],
        ["blockus:honeycomb_bricks", "blockus:honeycomb_bricks_wall"],
        //purpur
        ["minecraft:purpur_block", "blockus:polished_purpur"],
        ["blockus:phantom_purpur_block", "blockus:polished_phantom_purpur"],
        //purpur xtras
        ["blockus:phantom_purpur_block", "blockus:phantom_purpur_stairs"],
        ["blockus:phantom_purpur_block", "blockus:phantom_purpur_slab"],
        ["blockus:phantom_purpur_slab", "blockus:phantom_purpur_pillar"],
        //purpur conversion
        ["minecraft:purpur_block", "blockus:phantom_purpur_block"],
        ["blockus:smooth_purpur", "blockus:polished_phantom_purpur_alt"],
        ["blockus:purpur_bricks", "blockus:phantom_purpur_bricks_alt"],
        ["blockus:purpur_lines", "blockus:phantom_purpur_lines"],
        ["blockus:purpur_squares", "blockus:phantom_purpur_squares"],
        ["blockus:chiseled_purpur", "blockus:chiseled_phantom_purpur"],
        ["minecraft:purpur_pillar", "blockus:phantom_purpur_pillar_alt"],
        ["blockus:purpur_little_bricks", "blockus:small_phantom_purpur_bricks"],
        //endstone
        ["minecraft:end_stone", "blockus:polished_end_stone"],
        ["blockus:polished_end_stone", "blockus:polished_end_stone_stairs"],
        ["blockus:polished_end_stone", "blockus:polished_end_stone_slab"],
        ["blockus:polished_end_stone", "minecraft:end_stone_bricks"],
        ["minecraft:end_stone_bricks", "blockus:cracked_end_stone_bricks"],
        ["blockus:small_end_stone_bricks", "blockus:small_end_stone_bricks_stairs"],
        ["blockus:small_end_stone_bricks", "blockus:small_end_stone_bricks_slab"],
        ["blockus:small_end_stone_bricks", "blockus:small_end_stone_bricks_wall"],
        ["minecraft:end_stone_bricks", "blockus:purpur_decorated_end_stone"],
        ["minecraft:end_stone_bricks", "blockus:phantom_purpur_decorated_end_stone"],
        //white oak
        ["blockus:white_oak_log", "blockus:white_oak_wood"],
        ["blockus:stripped_white_oak_log", "blockus:stripped_white_oak_wood"],
        ['#blockus:white_oak_logs', 'blockus:white_oak_planks'],
        ["blockus:white_oak_planks", "blockus:white_oak_stairs"],
        ["blockus:white_oak_planks", "blockus:white_oak_slab"],
        ["blockus:white_oak_planks", "blockus:white_oak_fence"],
        ["blockus:white_oak_planks", "blockus:white_oak_fence_gate"],
        ["blockus:white_oak_planks", "blockus:white_oak_door"],
        ["blockus:white_oak_planks", "blockus:white_oak_trapdoor"],
        //timber frame
        ["minecraft:paper", "blockus:oak_timber_frame"],
        ["blockus:oak_timber_frame", "blockus:oak_diagonal_timber_frame"],
        ["blockus:oak_diagonal_timber_frame", "blockus:oak_cross_timber_frame"],
        //hedges
        ["minecraft:oak_leaves", "blockus:small_hedge"],
        ["minecraft:spruce_leaves", "blockus:spruce_small_hedge"],
        ["minecraft:birch_leaves", "blockus:birch_small_hedge"],
        ["minecraft:jungle_leaves", "blockus:jungle_small_hedge"],
        ["minecraft:acacia_leaves", "blockus:acacia_small_hedge"],
        ["minecraft:dark_oak_leaves", "blockus:dark_oak_small_hedge"],
        ["blockus:white_oak_leaves", "blockus:small_hedge"],
        ["minecraft:nether_wart_block", "blockus:crimson_small_hedge"],
        ["minecraft:warped_wart_block", "blockus:warped_small_hedge"],
        //large pot
        ["minecraft:brick", "blockus:large_flower_pot"],
        //crates & box
        ["minecraft:sweet_berries", "blockus:sweet_berries_crate"],
        ["minecraft:salmon", "blockus:salmon_crate"],
        ["minecraft:pufferfish", "blockus:pufferfish_crate"],
        ["minecraft:tropical_fish", "blockus:tropical_fish_crate"],
        ["minecraft:apple", "blockus:apple_crate"],
        ["minecraft:cod", "blockus:cod_crate"],
        ["minecraft:golden_apple", "blockus:golden_apple_crate"],
        ["blockus:apple_crate", "blockus:golden_apple_crate_from_apple_crate"],
        ["minecraft:golden_carrot", "blockus:golden_carrot_crate"],
        ["farmersdelight:carrot_crate", "minecraft:golden_carrot_crate_from_carrot_crate"],
        ["minecraft:bread", "blockus:bread_box"],
        //bamboo
        ["minecraft:bamboo", "blockus:bamboo_planks"],
        ["blockus:bamboo_planks", "blockus:bamboo_stairs"],
        ["blockus:bamboo_planks", "blockus:bamboo_slab"],
        ["blockus:bamboo_planks", "blockus:bamboo_fence"],
        ["blockus:bamboo_planks", "blockus:bamboo_fence_gate"],
        ["blockus:bamboo_planks", "blockus:bamboo_door"],
        ["blockus:bamboo_planks", "blockus:bamboo_trapdoor"],
        //beveled glass
        ["minecraft:glass", "blockus:beveled_glass"],
        ["blockus:beveled_glass", "blockus:beveled_glass_pane"],
        //rainbow glass
        ["biomemakeover:lightning_bug_bottle", "blockus:rainbow_glass"],
        ["biomemakeover:lightning_bug_bottle", "blockus:rainbow_glass_pane"],
        ["blockus:rainbow_glass", "blockus:rainbow_glass_pane_2"],
        ["biomemakeover:lightning_bug_bottle", "blockus:rainbow_beveled_glass_pane_2"],
        ["blockus:rainbow_glass", "blockus:rainbow_beveled_glass"],
        ["biomemakeover:lightning_bug_bottle", "blockus:rainbow_beveled_glass_pane_2"],
        ["blockus:rainbow_beveled_glass", "blockus:rainbow_beveled_glass_pane"],
        ["biomemakeover:lightning_bug_bottle", "blockus:rainbow_lamp"],
        ["biomemakeover:lightning_bug_bottle", "blockus:rainbow_lamp_2"],
        ["biomemakeover:lightning_bug_bottle", "blockus:rainbow_lamp_lit_alt"],
        ["blockus:rainbow_lamp", "blockus:rainbow_lamp_lit"],
        //pressure plates and buttons
        ["minecraft:polished_andesite", "blockus:polished_andesite_pressure_plate"],
        ["minecraft:polished_andesite", "blockus:polished_andesite_button"],
        ["minecraft:polished_granite", "blockus:polished_granite_pressure_plate"],
        ["minecraft:polished_granite", "blockus:polished_granite_button"],
        ["minecraft:polished_diorite", "blockus:polished_diorite_pressure_plate"],
        ["minecraft:polished_diorite", "blockus:polished_diorite_button"],
        ["blockus:limestone", "blockus:limestone_pressure_plate"],
        ["blockus:limestone", "blockus:limestone_button"],
        ["blockus:marble", "blockus:marble_pressure_plate"],
        ["blockus:marble", "blockus:marble_button"],
        ["blockus:bamboo_planks", "blockus:bamboo_pressure_plate"],
        ["blockus:bamboo_planks", "blockus:bamboo_button"],
        ["blockus:white_oak_planks", "blockus:white_oak_pressure_plate"],
        ["blockus:white_oak_planks", "blockus:white_oak_button"],
        //thatch
        ["minecraft:wheat", "blockus:thatch"],
        ["blockus:thatch", "blockus:thatch_stairs"],
        ["blockus:thatch", "blockus:thatch_slab"],
        //paper block
        ["minecraft:paper", "blockus:paper_block"],
        ["blockus:paper_block", "blockus:burned_paper_block"],
        //gates
        ["minecraft:iron_bars", "blockus:iron_gate"],
        ["blockus:golden_bars", "blockus:golden_gate"],
        //bars and chains
        ["minecraft:gold_ingot", "blockus:golden_bars"],
        ["minecraft:gold_ingot", "blockus:golden_chain"],
        //paper things
        ["minecraft:paper", "blockus:paper_door"],
        ["minecraft:paper", "blockus:paper_trapdoor"],
        ["minecraft:paper", "blockus:paper_wall"],
        ["minecraft:paper", "blockus:paper_lamp"],
        //Soul o'lantern
        ["minecraft:soul_torch", "blockus:soul_o_lantern"],
        //almost the end
        ["minecraft:stick", "blockus:wooden_frame"],
        ["minecraft:stone", "blockus:caution_block"],
        ["minecraft:iron_ingot", "blockus:road_barrier"],
        ["blockus:caution_block", "blockus:caution_barrier"],
        ["minecraft:netherite_block", "blockus:netherite_stairs"],
        ["minecraft:netherite_block", "blockus:netherite_slab"],
        //blocks
        ["minecraft:charcoal", "blockus:charcoal_block"],
        ["minecraft:sugar", "blockus:sugar_block"],
        ["minecraft:rotten_flesh", "blockus:rotten_flesh_block"],
        ["minecraft:phantom_membrane", "blockus:membrane_block"],
        ["minecraft:netherite_block", "blockus:netherite_slab"],
        ["minecraft:redstone", "blockus:redstone_sand"],
        //shingles
        ["minecraft:terracotta", "blockus:shingles"],
        //rainbow
        ["biomemakeover:lightning_bug_bottle", "blockus:rainbow_bricks"],
        ["blockus:rainbow_bricks", "blockus:rainbow_bricks_slab"],
        ["blockus:rainbow_bricks", "blockus:rainbow_bricks_stairs"],
        ["blockus:rainbow_bricks", "blockus:rainbow_bricks_wall"],
    ]
    for (let [input, recipe] of advancements) {
        advancementTemplate(input, recipe)
    }
    var varyingBricks = ["andesite", "granite", "diorite"]
    varyingBricks.forEach((brick) => {
        advancementTemplate("minecraft:polished_" + brick, "blockus:" + brick + "_bricks")
        advancementTemplate("blockus:" + brick + "_bricks", "blockus:" + brick + "_bricks_stairs")
        advancementTemplate("blockus:" + brick + "_bricks", "blockus:" + brick + "_bricks_slab")
        advancementTemplate("blockus:" + brick + "_bricks", "blockus:cracked_" + brick + "_bricks")
    })
    var mossyBlackstone = ["crimson_warty_blackstone_bricks", "warped_warty_blackstone_bricks"]
    mossyBlackstone.forEach((brick) => {
        advancementTemplate("blockus:" + brick, "blockus:" + brick + "_stairs")
        advancementTemplate("blockus:" + brick, "blockus:" + brick + "_slab")
    })
    var roughVars = ["slab", "stairs"]
    roughVars.forEach((brick) => {
        advancementTemplate("blockus:rough_basalt", "blockus:rough_basalt_" + brick)
    })
    var someBlockusBricks = ["limestone", "marble"]
    someBlockusBricks.forEach((brick) => {
        advancementTemplate("blockus:" + brick, "blockus:" + brick + "_stairs")
        advancementTemplate("blockus:" + brick, "blockus:" + brick + "_slab")
        advancementTemplate("blockus:" + brick, "blockus:" + brick + "_wall")
        advancementTemplate("blockus:" + brick, "blockus:polished_" + brick)
        advancementTemplate("blockus:polished_" + brick, "blockus:" + brick + "_bricks")
        advancementTemplate("blockus:" + brick + "_bricks", "blockus:" + brick + "_tiles")
        advancementTemplate("blockus:polished_" + brick, "blockus:polished_" + brick + "_stairs")
        advancementTemplate("blockus:polished_" + brick, "blockus:polished_" + brick + "_slab")
        advancementTemplate("blockus:polished_" + brick, "blockus:polished_" + brick + "_wall")
        advancementTemplate("blockus:" + brick + "_bricks", "blockus:" + brick + "_bricks_stairs")
        advancementTemplate("blockus:" + brick + "_bricks", "blockus:" + brick + "_bricks_slab")
        advancementTemplate("blockus:" + brick + "_bricks", "blockus:" + brick + "_bricks_wall")
        advancementTemplate("blockus:small_" + brick + "_bricks", "blockus:small_" + brick + "_bricks_stairs")
        advancementTemplate("blockus:small_" + brick + "_bricks", "blockus:small_" + brick + "_bricks_slab")
        advancementTemplate("blockus:small_" + brick + "_bricks", "blockus:small_" + brick + "_bricks_wall")
        advancementTemplate("blockus:" + brick + "_tiles", "blockus:" + brick + "_tile_stairs")
        advancementTemplate("blockus:" + brick + "_tiles", "blockus:" + brick + "_tile_slab")
        advancementTemplate("blockus:" + brick + "_tiles", "blockus:" + brick + "_tile_wall")
    })
    //sand
    var sandBlocks = ["red_sandstone", "sandstone", "soul_sandstone"]
    sandBlocks.forEach((brick) => {
        advancementTemplate("minecraft:red_sandstone_slab", "blockus:rough_red_sandstone")
        advancementTemplate("minecraft:sandstone_slab", "blockus:rough_sandstone")
        advancementTemplate("blockus:soul_sandstone_slab", "blockus:rough_soul_sandstone")
        advancementTemplate("blockus:rough_" + brick, "blockus:rough_" + brick + "_stairs")
        advancementTemplate("blockus:rough_" + brick, "blockus:rough_" + brick + "_slab")
        advancementTemplate("blockus:" + brick + "_bricks", "blockus:" + brick + "_bricks_stairs")
        advancementTemplate("blockus:" + brick + "_bricks", "blockus:" + brick + "_bricks_slab")
        advancementTemplate("blockus:" + brick + "_bricks", "blockus:" + brick + "_bricks_wall")
        advancementTemplate("blockus:small_" + brick + "_bricks", "blockus:small_" + brick + "_bricks_stairs")
        advancementTemplate("blockus:small_" + brick + "_bricks", "blockus:small_" + brick + "_bricks_slab")
        advancementTemplate("blockus:small_" + brick + "_bricks", "blockus:small_" + brick + "_bricks_wall")
        advancementTemplate("minecraft:cut_red_sandstone", "blockus:gold_decorated_red_sandstone")
        advancementTemplate("minecraft:cut_red_sandstone", "blockus:lapis_decorated_red_sandstone")
        advancementTemplate("minecraft:cut_sandstone", "blockus:gold_decorated_sandstone")
        advancementTemplate("minecraft:cut_sandstone", "blockus:lapis_decorated_sandstone")
        advancementTemplate("blockus:cut_soul_sandstone", "blockus:gold_decorated_soul_sandstone")
        advancementTemplate("blockus:cut_soul_sandstone", "blockus:lapis_decorated_soul_sandstone")
    })
    //purpre
    var purpurs = ["purpur", "phantom_purpur"]
    purpurs.forEach((brick) => {
        advancementTemplate("blockus:smooth_" + brick, "blockus:polished_" + brick + "_stairs")
        advancementTemplate("blockus:smooth_" + brick, "blockus:polished_" + brick + "_slab")
        advancementTemplate("blockus:smooth_" + brick, "blockus:" + brick + "_bricks")
        advancementTemplate("blockus:" + brick + "_bricks", "blockus:" + brick + "_bricks_stairs")
        advancementTemplate("blockus:" + brick + "_bricks", "blockus:" + brick + "_bricks_slab")
        advancementTemplate("blockus:" + brick + "_bricks", "blockus:" + brick + "_bricks_wall")
        advancementTemplate("blockus:" + brick + "_little_bricks", "blockus:small_" + brick + "_bricks_stairs")
        advancementTemplate("blockus:" + brick + "_little_bricks", "blockus:small_" + brick + "_bricks_slab")
        advancementTemplate("blockus:" + brick + "_little_bricks", "blockus:small_" + brick + "_bricks_wall")
    })
    //concrete
    color.forEach((brick) => {
        advancementTemplate("minecraft:" + brick + "_concrete", "blockus:" + brick + "_concrete_bricks")
        advancementTemplate("blockus:" + brick + "_concrete_bricks", "blockus:" + brick + "_concrete_brick_stairs")
        advancementTemplate("blockus:" + brick + "_concrete_bricks", "blockus:" + brick + "_concrete_brick_slab")
    })
    //lamps
    color.forEach((brick) => {
        advancementTemplate("minecraft:redstone_lamp", "blockus:" + brick + "_redstone_lamp")
        advancementTemplate("minecraft:redstone_lamp", "blockus:redstone_lamp_lit")
        advancementTemplate("blockus:" + brick + "_redstone_lamp", "blockus:" + brick + "_redstone_lamp_lit")
        advancementTemplate("blockus:redstone_lamp_lit", "blockus:" + brick + "_redstone_lamp_lit_alt")
    })
    //hopes
    for (var a = 0; a < 16; a++) {
        for (var b = 0; b < 16; b++) {
            event.addJson("blockus:advancements/recipes/" + color[a] + "_" + color[b] + "_colored_tiles.json", {
                parent: "minecraft:recipes/root",
                criteria: {
                    has_item: {
                        trigger: "minecraft:inventory_changed",
                        conditions: {
                            items: [
                                {
                                    item: "minecraft:" + color[a] + "_concrete"
                                }
                            ]
                        }
                    },
                    has_item_two: {
                        trigger: "minecraft:inventory_changed",
                        conditions: {
                            items: [
                                {
                                    item: "minecraft:" + color[b] + "_concrete"
                                }
                            ]
                        }
                    },
                    has_the_recipe: {
                        trigger: "minecraft:recipe_unlocked",
                        conditions: {
                            recipe: "blockus:" + color[a] + "_" + color[b] + "_colored_tiles"
                        }
                    }
                },
                requirements: [
                    [
                        "has_item",
                        "has_the_recipe"
                    ],
                    [
                        "has_item_two",
                        "has_the_recipe"
                    ]
                ],
                rewards: {
                    recipes: [
                        "blockus:" + color[a] + "_" + color[b] + "_colored_tiles"
                    ]
                }
            })
        }
    }
    //what was I doing?
    color.forEach((brick) => {
        advancementTemplate("minecraft:" + brick + "_stained_glass", "blockus:" + brick + "_beveled_glass")
        advancementTemplate("blockus:beveled_glass", "blockus:" + brick + "_beveled_glass_2")
        advancementTemplate("blockus:" + brick + "_beveled_glass", "blockus:" + brick + "_beveled_glass_pane")
        advancementTemplate("blockus:beveled_glass_pane", "blockus:" + brick + "_beveled_glass_pane_2")
    })
    //wool
    color.forEach((brick) => {
        advancementTemplate("minecraft:" + brick + "_wool", "blockus:" + brick + "_patterned_wool")
    })
    color.forEach((brick) => {
        advancementTemplate("minecraft:" + brick + "_terracotta", "blockus:" + brick + "_shingles")
        advancementTemplate("blockus:shingles", "blockus:" + brick + "_shingles_alt")
        advancementTemplate("blockus:shingles", "blockus:shingles_stairs")
        advancementTemplate("blockus:shingles", "blockus:shingles_slab")
        advancementTemplate("blockus:shingles_stairs", "blockus:" + brick + "_shingles_stairs_alt")
        advancementTemplate("blockus:shingles_slab", "blockus:" + brick + "_shingles_slab_alt")
        advancementTemplate("blockus:" + brick + "_shingles", "blockus:" + brick + "_shingles_stairs")
        advancementTemplate("blockus:" + brick + "_shingles", "blockus:" + brick + "_shingles_slab")
    })
})