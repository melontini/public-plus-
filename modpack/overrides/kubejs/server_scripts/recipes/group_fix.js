onEvent('recipes', event => {
    event.forEachRecipeAsync({ id: "minecraft:minecart" }, r => {
        r.setGroup("minecarts")
    })
    event.forEachRecipeAsync({ input: "minecraft:minecart" }, r => {
        r.setGroup("minecarts")
    })
    //rails
    event.forEachRecipeAsync({ output: "#minecraft:rails" }, r => {
        r.setGroup("rails")
    })
    //Temp placements for this
    //TODO separate stone things from wooden ones
    event.forEachRecipeAsync({ output: "#minecraft:doors" }, r => {
        r.setGroup("doors")
    })
    event.forEachRecipeAsync({ output: "#minecraft:trapdoors" }, r => {
        r.setGroup("trapdoors")
    })
    event.forEachRecipeAsync({ output: "#minecraft:pressure_plates" }, r => {
        r.setGroup("pressure_plates")
    })
    event.forEachRecipeAsync({ output: "#minecraft:buttons" }, r => {
        r.setGroup("buttons")
    })
    event.forEachRecipeAsync({ output: "minecraft:lead" }, r => {
        r.setGroup('lead')
    })
    //organic compost
    event.forEachRecipeAsync({ output: "farmersdelight:organic_compost" }, r => {
        r.setGroup('organic_compost')
    })
    //boats
    event.forEachRecipeAsync({ output: "#minecraft:boats" }, r => {
        r.setGroup("boats")
    })
    //blockus gates
    event.forEachRecipeAsync({ output: "blockus:iron_gate" }, r => {
        r.setGroup("gates")
    })
    event.forEachRecipeAsync({ output: "blockus:golden_gate" }, r => {
        r.setGroup("gates")
    })
    //dyes
    color.forEach(color => {
        event.forEachRecipeAsync({ output: "minecraft:" + color + '_dye' }, r => {
            r.setGroup(color + '_dye')
        })
    })
    //biomemakeover wierdness
    color.forEach(color => {
        event.forEachRecipeAsync({ output: "biomemakeover:" + color + '_terracotta_bricks' }, r => {
            r.setGroup('terracotta_bricks')
        })
    })
    color.forEach(color => {
        event.forEachRecipeAsync({ output: "biomemakeover:" + color + '_terracotta_brick_wall' }, r => {
            r.setGroup('terracotta_brick_wall')
        })
    })
    color.forEach(color => {
        event.forEachRecipeAsync({ output: "biomemakeover:" + color + '_terracotta_brick_slab' }, r => {
            r.setGroup('terracotta_brick_slab')
        })
    })
    color.forEach(color => {
        event.forEachRecipeAsync({ output: "biomemakeover:" + color + '_terracotta_brick_stairs' }, r => {
            r.setGroup('terracotta_brick_stairs')
        })
    })
    //non colored terracotta bricks
    event.forEachRecipeAsync({ output: "biomemakeover:terracotta_bricks" }, r => {
        r.setGroup('terracotta_bricks')
    })
    event.forEachRecipeAsync({ output: "biomemakeover:terracotta_brick_wall" }, r => {
        r.setGroup('terracotta_brick_wall')

    })
    event.forEachRecipeAsync({ output: "biomemakeover:terracotta_brick_slab" }, r => {
        r.setGroup('terracotta_brick_slab')

    })
    event.forEachRecipeAsync({ output: "biomemakeover:terracotta_brick_stairs" }, r => {
        r.setGroup('terracotta_brick_stairs')
    })
    //glowshroom
    var glowshroomColors = ['purple', 'green', 'orange']
    glowshroomColors.forEach(color => {
        event.forEachRecipeAsync({ output: "biomemakeover:" + color + '_glowshroom_brick_stairs' }, r => {
            r.setGroup(color + 'glowshroom_blocks')
        })
        event.forEachRecipeAsync({ output: "biomemakeover:" + color + '_glowshroom_brick_slab' }, r => {
            r.setGroup(color + 'glowshroom_blocks')
        })
        event.forEachRecipeAsync({ output: "biomemakeover:" + color + '_glowshroom_brick_wall' }, r => {
            r.setGroup(color + 'glowshroom_blocks')
        })
        event.forEachRecipeAsync({ output: "biomemakeover:" + color + '_glowshroom_brick' }, r => {
            r.setGroup(color + 'glowshroom_blocks')
        })
    })
    event.forEachRecipeAsync({ output: "biomemakeover:glowshroom_stem_brick_stairs" }, r => {
        r.setGroup("glowshroom_stem_blocks")
    })
    event.forEachRecipeAsync({ output: "biomemakeover:glowshroom_stem_brick_slab" }, r => {
        r.setGroup("glowshroom_stem_blocks")
    })
    event.forEachRecipeAsync({ output: "biomemakeover:glowshroom_stem_brick_wall" }, r => {
        r.setGroup("glowshroom_stem_blocks")
    })
    event.forEachRecipeAsync({ output: "biomemakeover:glowshroom_stem_brick" }, r => {
        r.setGroup("glowshroom_stem_blocks")
    })

    event.forEachRecipeAsync({ output: "biomemakeover:brown_mushroom_brick" }, r => {
        r.setGroup("brown_mushroom_bricks")
    })
    event.forEachRecipeAsync({ output: "biomemakeover:brown_mushroom_brick_stairs" }, r => {
        r.setGroup("brown_mushroom_bricks")
    })
    event.forEachRecipeAsync({ output: "biomemakeover:brown_mushroom_brick_wall" }, r => {
        r.setGroup("brown_mushroom_bricks")
    })
    event.forEachRecipeAsync({ output: "biomemakeover:brown_mushroom_brick_slab" }, r => {
        r.setGroup("brown_mushroom_bricks")
    })

    event.forEachRecipeAsync({ output: "biomemakeover:red_mushroom_brick" }, r => {
        r.setGroup("red_mushroom_bricks")
    })
    event.forEachRecipeAsync({ output: "biomemakeover:red_mushroom_brick_stairs" }, r => {
        r.setGroup("red_mushroom_bricks")
    })
    event.forEachRecipeAsync({ output: "biomemakeover:red_mushroom_brick_wall" }, r => {
        r.setGroup("red_mushroom_bricks")
    })
    event.forEachRecipeAsync({ output: "biomemakeover:red_mushroom_brick_slab" }, r => {
        r.setGroup("red_mushroom_bricks")
    })

    event.forEachRecipeAsync({ output: "biomemakeover:mushroom_stem_brick" }, r => {
        r.setGroup("mushroom_stem_bricks")
    })
    event.forEachRecipeAsync({ output: "biomemakeover:mushroom_stem_brick_stairs" }, r => {
        r.setGroup("mushroom_stem_bricks")
    })
    event.forEachRecipeAsync({ output: "biomemakeover:mushroom_stem_brick_wall" }, r => {
        r.setGroup("mushroom_stem_bricks")
    })
    event.forEachRecipeAsync({ output: "biomemakeover:mushroom_stem_brick_slab" }, r => {
        r.setGroup("mushroom_stem_bricks")
    })


    event.forEachRecipeAsync({ output: "biomemakeover:mesmerite" }, r => {
        r.setGroup("mesmerites")
    })
    event.forEachRecipeAsync({ output: "biomemakeover:mesmerite_stairs" }, r => {
        r.setGroup("mesmerites")
    })
    event.forEachRecipeAsync({ output: "biomemakeover:mesmerite_wall" }, r => {
        r.setGroup("mesmerites")
    })
    event.forEachRecipeAsync({ output: "biomemakeover:mesmerite_slab" }, r => {
        r.setGroup("mesmerites")
    })

    event.forEachRecipeAsync({ output: "biomemakeover:polished_mesmerite" }, r => {
        r.setGroup("mesmerites")
    })
    event.forEachRecipeAsync({ output: "biomemakeover:polished_mesmerite_stairs" }, r => {
        r.setGroup("mesmerites")
    })
    event.forEachRecipeAsync({ output: "biomemakeover:polished_mesmerite_wall" }, r => {
        r.setGroup("mesmerites")
    })
    event.forEachRecipeAsync({ output: "biomemakeover:polished_mesmerite_slab" }, r => {
        r.setGroup("mesmerites")
    })



    //more blockus
    event.forEachRecipeAsync({ output: "blockus:rainbow_bricks" }, r => {
        r.setGroup("rainbow_bricks")
    })
    event.forEachRecipeAsync({ output: "blockus:rainbow_bricks_stairs" }, r => {
        r.setGroup("rainbow_bricks")
    })
    event.forEachRecipeAsync({ output: "blockus:rainbow_bricks_wall" }, r => {
        r.setGroup("rainbow_bricks")
    })
    event.forEachRecipeAsync({ output: "blockus:rainbow_bricks_slab" }, r => {
        r.setGroup("rainbow_bricks")
    })

    event.forEachRecipeAsync({ output: "#blockus:bluestone" }, r => {
        r.setGroup("bluestone")
    })
    event.forEachRecipeAsync({ output: "blockus:bluestone_wall" }, r => {
        r.setGroup("bluestone")
    })
    event.forEachRecipeAsync({ output: "blockus:bluestone_tile_wall" }, r => {
        r.setGroup("bluestone")
    })
    event.forEachRecipeAsync({ output: "blockus:bluestone_bricks_wall" }, r => {
        r.setGroup("bluestone")
    })
    event.forEachRecipeAsync({ output: "blockus:small_bluestone_bricks_wall" }, r => {
        r.setGroup("bluestone")
    })


    event.forEachRecipeAsync({ output: "#blockus:limestone" }, r => {
        r.setGroup("limestone")
    })
    event.forEachRecipeAsync({ output: "blockus:limestone_wall" }, r => {
        r.setGroup("limestone")
    })
    event.forEachRecipeAsync({ output: "blockus:limestone_tile_wall" }, r => {
        r.setGroup("limestone")
    })
    event.forEachRecipeAsync({ output: "blockus:limestone_bricks_wall" }, r => {
        r.setGroup("limestone")
    })
    event.forEachRecipeAsync({ output: "blockus:small_limestone_bricks_wall" }, r => {
        r.setGroup("limestone")
    })

    event.forEachRecipeAsync({ output: "#blockus:marble" }, r => {
        r.setGroup("marble")
    })
    event.forEachRecipeAsync({ output: "blockus:marble_wall" }, r => {
        r.setGroup("marble")
    })
    event.forEachRecipeAsync({ output: "blockus:marble_tile_wall" }, r => {
        r.setGroup("marble")
    })
    event.forEachRecipeAsync({ output: "blockus:marble_bricks_wall" }, r => {
        r.setGroup("marble")
    })
    event.forEachRecipeAsync({ output: "blockus:small_marble_bricks_wall" }, r => {
        r.setGroup("marble")
    })

    event.forEachRecipeAsync({ output: "#blockus:end_stone_blocks" }, r => {
        r.setGroup("end_stone_blocks")
    })
    event.forEachRecipeAsync({ output: "minecraft:end_stone_brick_wall" }, r => {
        r.setGroup("end_stone_blocks")
    })
    event.forEachRecipeAsync({ output: "blockus:small_end_stone_bricks_wall" }, r => {
        r.setGroup("end_stone_blocks")
    })
    event.forEachRecipeAsync({ output: "minecraft:end_stone_brick_stairs" }, r => {
        r.setGroup("end_stone_blocks")
    })
    event.forEachRecipeAsync({ output: "minecraft:end_stone_brick_slab" }, r => {
        r.setGroup("end_stone_blocks")
    })
    event.forEachRecipeAsync({ output: "minecraft:end_stone_bricks" }, r => {
        r.setGroup("end_stone_blocks")
    })

    //purpur
    event.forEachRecipeAsync({ output: "#blockus:purpur_blocks", not: [{ output: "#blockus:phantom_purpur_blocks" }] }, r => {
        r.setGroup("purpur_blocks")
    })
    event.forEachRecipeAsync({ output: "blockus:purpur_bricks_wall" }, r => {
        r.setGroup("purpur_blocks")
    })
    event.forEachRecipeAsync({ output: "blockus:small_purpur_bricks_wall" }, r => {
        r.setGroup("purpur_blocks")
    })
    event.forEachRecipeAsync({ output: "minecraft:purpur_pillar" }, r => {
        r.setGroup("purpur_blocks")
    })
    event.forEachRecipeAsync({ output: "minecraft:purpur_stairs" }, r => {
        r.setGroup("purpur_blocks")
    })
    event.forEachRecipeAsync({ output: "minecraft:purpur_slab" }, r => {
        r.setGroup("purpur_blocks")
    })
    event.forEachRecipeAsync({ output: "minecraft:purpur_block" }, r => {
        r.setGroup("purpur_blocks")
    })

    event.forEachRecipeAsync({ output: "#blockus:phantom_purpur_blocks" }, r => {
        r.setGroup("phantom_purpur_blocks")
    })
    event.forEachRecipeAsync({ output: "blockus:phantom_purpur_bricks_wall" }, r => {
        r.setGroup("phantom_purpur_blocks")
    })
    event.forEachRecipeAsync({ output: "blockus:small_phantom_purpur_bricks_wall" }, r => {
        r.setGroup("phantom_purpur_blocks")
    })


    event.forEachRecipeAsync({ output: "blockus:honeycomb_bricks" }, r => {
        r.setGroup("honeycomb_blocks")
    })
    event.forEachRecipeAsync({ output: "blockus:honeycomb_bricks_slab" }, r => {
        r.setGroup("honeycomb_blocks")
    })
    event.forEachRecipeAsync({ output: "blockus:honeycomb_bricks_stairs" }, r => {
        r.setGroup("honeycomb_blocks")
    })
    event.forEachRecipeAsync({ output: "blockus:honeycomb_bricks_wall" }, r => {
        r.setGroup("honeycomb_blocks")
    })
    event.forEachRecipeAsync({ output: "minecraft:honeycomb_block" }, r => {
        r.setGroup("honeycomb_blocks")
    })

    //soul sandstone
    event.forEachRecipeAsync({ output: "#blockus:soul_sandstone" }, r => {
        r.setGroup("soul_sandstone")
    })
    event.forEachRecipeAsync({ output: "blockus:soul_sandstone_wall" }, r => {
        r.setGroup("soul_sandstone")
    })
    event.forEachRecipeAsync({ output: "blockus:soul_sandstone_bricks_wall" }, r => {
        r.setGroup("soul_sandstone")
    })
    event.forEachRecipeAsync({ output: "blockus:small_soul_sandstone_bricks_wall" }, r => {
        r.setGroup("soul_sandstone")
    })

    //red
    event.forEachRecipeAsync({ output: "#blockus:red_sandstone" }, r => {
        r.setGroup("red_sandstone")
    })
    event.forEachRecipeAsync({ output: "blockus:red_sandstone_wall" }, r => {
        r.setGroup("red_sandstone")
    })
    event.forEachRecipeAsync({ output: "blockus:red_sandstone_bricks_wall" }, r => {
        r.setGroup("red_sandstone")
    })
    event.forEachRecipeAsync({ output: "blockus:small_red_sandstone_bricks_wall" }, r => {
        r.setGroup("red_sandstone")
    })
    //thanks
    event.forEachRecipeAsync({ output: "minecraft:red_sandstone" }, r => {
        r.setGroup("red_sandstone")
    })
    event.forEachRecipeAsync({ output: "minecraft:red_sandstone_stairs" }, r => {
        r.setGroup("red_sandstone")
    })
    event.forEachRecipeAsync({ output: "minecraft:red_sandstone_slab" }, r => {
        r.setGroup("red_sandstone")
    })
    event.forEachRecipeAsync({ output: "minecraft:red_sandstone_wall" }, r => {
        r.setGroup("red_sandstone")
    })
    event.forEachRecipeAsync({ output: "minecraft:cut_red_sandstone" }, r => {
        r.setGroup("red_sandstone")
    })
    event.forEachRecipeAsync({ output: "minecraft:cut_red_sandstone_slab" }, r => {
        r.setGroup("red_sandstone")
    })
    event.forEachRecipeAsync({ output: "minecraft:chiseled_red_sandstone" }, r => {
        r.setGroup("red_sandstone")
    })
    event.forEachRecipeAsync({ output: "minecraft:smooth_red_sandstone_slab" }, r => {
        r.setGroup("red_sandstone")
    })
    event.forEachRecipeAsync({ output: "minecraft:smooth_red_sandstone_stairs" }, r => {
        r.setGroup("red_sandstone")
    })

    //sandstone
    event.forEachRecipeAsync({ output: "#blockus:sandstone" }, r => {
        r.setGroup("sandstone")
    })
    event.forEachRecipeAsync({ output: "blockus:sandstone_wall" }, r => {
        r.setGroup("sandstone")
    })
    event.forEachRecipeAsync({ output: "blockus:sandstone_bricks_wall" }, r => {
        r.setGroup("sandstone")
    })
    event.forEachRecipeAsync({ output: "blockus:small_sandstone_bricks_wall" }, r => {
        r.setGroup("sandstone")
    })
    //thanks
    event.forEachRecipeAsync({ output: "minecraft:sandstone" }, r => {
        r.setGroup("sandstone")
    })
    event.forEachRecipeAsync({ output: "minecraft:sandstone_stairs" }, r => {
        r.setGroup("sandstone")
    })
    event.forEachRecipeAsync({ output: "minecraft:sandstone_slab" }, r => {
        r.setGroup("sandstone")
    })
    event.forEachRecipeAsync({ output: "minecraft:sandstone_wall" }, r => {
        r.setGroup("sandstone")
    })
    event.forEachRecipeAsync({ output: "minecraft:cut_sandstone" }, r => {
        r.setGroup("sandstone")
    })
    event.forEachRecipeAsync({ output: "minecraft:cut_sandstone_slab" }, r => {
        r.setGroup("sandstone")
    })
    event.forEachRecipeAsync({ output: "minecraft:chiseled_sandstone" }, r => {
        r.setGroup("sandstone")
    })
    event.forEachRecipeAsync({ output: "minecraft:smooth_sandstone_slab" }, r => {
        r.setGroup("sandstone")
    })
    event.forEachRecipeAsync({ output: "minecraft:smooth_sandstone_stairs" }, r => {
        r.setGroup("sandstone")
    })


    //minecraft's blocks are not fun
    event.forEachRecipeAsync({ output: "#blockus:granite_blocks" }, r => {
        r.setGroup("granite_blocks")
    })
    event.forEachRecipeAsync({ output: "blockus:granite_bricks_wall" }, r => {
        r.setGroup("granite_blocks")
    })
    event.forEachRecipeAsync({ output: "minecraft:granite" }, r => {
        r.setGroup("granite_blocks")
    })
    event.forEachRecipeAsync({ output: "minecraft:granite_slab" }, r => {
        r.setGroup("granite_blocks")
    })
    event.forEachRecipeAsync({ output: "minecraft:granite_stairs" }, r => {
        r.setGroup("granite_blocks")
    })
    event.forEachRecipeAsync({ output: "minecraft:granite_wall" }, r => {
        r.setGroup("granite_blocks")
    })
    event.forEachRecipeAsync({ output: "minecraft:polished_granite" }, r => {
        r.setGroup("granite_blocks")
    })
    event.forEachRecipeAsync({ output: "minecraft:polished_granite_slab" }, r => {
        r.setGroup("granite_blocks")
    })
    event.forEachRecipeAsync({ output: "minecraft:polished_granite_stairs" }, r => {
        r.setGroup("granite_blocks")
    })
    event.forEachRecipeAsync({ output: "minecraft:polished_granite_wall" }, r => {
        r.setGroup("granite_blocks")
    })

    event.forEachRecipeAsync({ output: "#blockus:andesite_blocks" }, r => {
        r.setGroup("andesite_blocks")
    })
    event.forEachRecipeAsync({ output: "blockus:andesite_bricks_wall" }, r => {
        r.setGroup("andesite_blocks")
    })
    event.forEachRecipeAsync({ output: "minecraft:andesite" }, r => {
        r.setGroup("andesite_blocks")
    })
    event.forEachRecipeAsync({ output: "minecraft:andesite_slab" }, r => {
        r.setGroup("andesite_blocks")
    })
    event.forEachRecipeAsync({ output: "minecraft:andesite_stairs" }, r => {
        r.setGroup("andesite_blocks")
    })
    event.forEachRecipeAsync({ output: "minecraft:andesite_wall" }, r => {
        r.setGroup("andesite_blocks")
    })
    event.forEachRecipeAsync({ output: "minecraft:polished_andesite" }, r => {
        r.setGroup("andesite_blocks")
    })
    event.forEachRecipeAsync({ output: "minecraft:polished_andesite_slab" }, r => {
        r.setGroup("andesite_blocks")
    })
    event.forEachRecipeAsync({ output: "minecraft:polished_andesite_stairs" }, r => {
        r.setGroup("andesite_blocks")
    })
    event.forEachRecipeAsync({ output: "minecraft:polished_andesite_wall" }, r => {
        r.setGroup("andesite_blocks")
    })


    event.forEachRecipeAsync({ output: "#blockus:diorite_blocks" }, r => {
        r.setGroup("diorite_blocks")
    })
    event.forEachRecipeAsync({ output: "blockus:diorite_bricks_wall" }, r => {
        r.setGroup("diorite_blocks")
    })
    event.forEachRecipeAsync({ output: "minecraft:diorite" }, r => {
        r.setGroup("diorite_blocks")
    })
    event.forEachRecipeAsync({ output: "minecraft:diorite_slab" }, r => {
        r.setGroup("diorite_blocks")
    })
    event.forEachRecipeAsync({ output: "minecraft:diorite_stairs" }, r => {
        r.setGroup("diorite_blocks")
    })
    event.forEachRecipeAsync({ output: "minecraft:diorite_wall" }, r => {
        r.setGroup("diorite_blocks")
    })
    event.forEachRecipeAsync({ output: "minecraft:polished_diorite" }, r => {
        r.setGroup("diorite_blocks")
    })
    event.forEachRecipeAsync({ output: "minecraft:polished_diorite_slab" }, r => {
        r.setGroup("diorite_blocks")
    })
    event.forEachRecipeAsync({ output: "minecraft:polished_diorite_stairs" }, r => {
        r.setGroup("diorite_blocks")
    })
    event.forEachRecipeAsync({ output: "minecraft:polished_diorite_wall" }, r => {
        r.setGroup("diorite_blocks")
    })

    event.forEachRecipeAsync({ output: "blockus:sandy_bricks" }, r => {
        r.setGroup("sandy_bricks")
    })
    event.forEachRecipeAsync({ output: "blockus:sandy_bricks_stairs" }, r => {
        r.setGroup("sandy_bricks")
    })
    event.forEachRecipeAsync({ output: "blockus:sandy_bricks_slab" }, r => {
        r.setGroup("sandy_bricks")
    })
    event.forEachRecipeAsync({ output: "blockus:sandy_bricks_wall" }, r => {
        r.setGroup("sandy_bricks")
    })
    event.forEachRecipeAsync({ output: "blockus:zigzagged_sandy_bricks" }, r => {
        r.setGroup("sandy_bricks")
    })

    event.forEachRecipeAsync({ output: "minecraft:bricks" }, r => {
        r.setGroup("bricks")
    })
    event.forEachRecipeAsync({ output: "minecraft:brick_stairs" }, r => {
        r.setGroup("bricks")
    })
    event.forEachRecipeAsync({ output: "minecraft:brick_wall" }, r => {
        r.setGroup("bricks")
    })
    event.forEachRecipeAsync({ output: "minecraft:brick_slab" }, r => {
        r.setGroup("bricks")
    })
    event.forEachRecipeAsync({ output: "blockus:large_bricks" }, r => {
        r.setGroup("bricks")
    })
    event.forEachRecipeAsync({ output: "blockus:large_bricks_wall" }, r => {
        r.setGroup("bricks")
    })
    event.forEachRecipeAsync({ output: "blockus:large_bricks_stairs" }, r => {
        r.setGroup("bricks")
    })
    event.forEachRecipeAsync({ output: "blockus:large_bricks_slab" }, r => {
        r.setGroup("bricks")
    })


    event.forEachRecipeAsync({ output: "#blockus:obsidian" }, r => {
        r.setGroup("b_obsidian")
    })
    event.forEachRecipeAsync({ output: "minecraft:obsidian" }, r => {
        r.setGroup("b_obsidian")
    })

    color.forEach(color => {
        event.forEachRecipeAsync({ output: "blockus:" + color + '_concrete_bricks' }, r => {
            r.setGroup('concrete_bricks')
        })
    })
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
        ['terrestria', 'willow'],
        ['terrestria', 'sakura'],
        ['terrestria', 'yucca_palm'],
        ['blockus', 'bamboo'],
        ['blockus', 'white_oak'],
        ['cinderscapes', 'umbral'],
        ['cinderscapes', 'scorched'],
        ['terrestria', 'rainbow_eucalyptus'],
        ['minecraft', 'oak'],
        ['minecraft', 'spruce'],
        ['minecraft', 'birch'],
        ['minecraft', 'jungle'],
        ['minecraft', 'acacia'],
        ['minecraft', 'dark_oak'],
        ['minecraft', 'crimson'],
        ['minecraft', 'warped'],
    ]
    for (let [namespace, log] of logs) {
        event.forEachRecipeAsync({ output: "#" + namespace + ":" + log }, r => {
            r.setGroup(namespace + '_' + log)
        })
    }
    //cinderscapes
    var var1001 = ["smooth_", "chiseled_", ""]
    var quartzModel = ["block", "stairs", "slab", "", "bricks", "pillar"]
    var quartzVariant = [
        ['cinderscapes', 'sulfur_quartz'],
        ['cinderscapes', 'rose_quartz'],
        ['cinderscapes', 'smoky_quartz'],
        ['minecraft', 'quartz']
    ]
    for (let [namespace, variant] of quartzVariant) {
        var1001.forEach(var1001 => {
            quartzModel.forEach(model => {
                event.forEachRecipeAsync({ output: namespace + ":" + var1001 + variant + "_" + model }, r => {
                    r.setGroup(variant)
                })
            })
        })
    }
    event.forEachRecipeAsync({ output: "blockus:quartz_tile_wall" }, r => {
        r.setGroup("quartz")
    })
    event.forEachRecipeAsync({ output: "blockus:quartz_tiles_slab" }, r => {
        r.setGroup("quartz")
    })
    event.forEachRecipeAsync({ output: "blockus:quartz_tiles_stairs" }, r => {
        r.setGroup("quartz")
    })
    //this will give me nightmares
    var var1002 = ["smooth_", "chiseled_", "blighted_", "sturdy_", "warped_warty_", "crimson_warty_", "mossy_", "", "polished_", "rough_"]
    var stoneModel = ["block", "stairs", "slab", "", "bricks", "pillar", "brick", "wall"]
    var stoneVariant = ["stone", "blackstone", "cobblestone", "basalt", "basalt_cobblestone"]
    var stoneNamespace = ["biomemakeover", "blockus", "minecraft", "terrestria"]
    stoneNamespace.forEach(namespace => {
        stoneVariant.forEach(variant => {
            var1002.forEach(var1002 => {
                stoneModel.forEach(model => {
                    stoneModel.forEach(model2 => {
                        if ((namespace == 'terrestria' && variant == 'basalt') || (namespace == 'terrestria' && variant == 'basalt_cobblestone')) {
                            event.forEachRecipeAsync({ output: namespace + ":" + var1002 + variant + "_" + model + "_" + model2 }, r => {
                                r.setGroup(namespace + "basalt")
                            })
                            event.forEachRecipeAsync({ output: namespace + ":" + var1002 + variant + "_" + model }, r => {
                                r.setGroup(namespace + "basalt")
                            })
                            event.forEachRecipeAsync({ output: namespace + ":" + var1002 + variant }, r => {
                                r.setGroup(namespace + "basalt")
                            })
                        }
                        else {
                            event.forEachRecipeAsync({ output: namespace + ":" + var1002 + variant + "_" + model + "_" + model2 }, r => {
                                r.setGroup(variant)
                            })
                            event.forEachRecipeAsync({ output: namespace + ":" + var1002 + variant + "_" + model }, r => {
                                r.setGroup(variant)
                            })
                            event.forEachRecipeAsync({ output: namespace + ":" + var1002 + variant }, r => {
                                r.setGroup(variant)
                            })
                        }
                    })
                })
            })
        })
    })
})