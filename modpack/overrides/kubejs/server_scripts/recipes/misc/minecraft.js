onEvent('recipes', event => {
    event.remove({ id: 'minecraft:cake' })
    event.remove({ output: 'minecraft:scaffolding' })
    event.shaped('6x minecraft:scaffolding', [
        'TST',
        'T T',
        'T T'
    ], {
        T: 'minecraft:bamboo',
        S: 'minecraft:string'
    }).group('scaffolding').id("minecraft:scaffolding")
    event.shaped('6x minecraft:scaffolding', [
        'TST',
        'T T',
        'T T'
    ], {
        T: 'minecraft:bamboo',
        S: 'farmersdelight:canvas'
    }).group('scaffolding').id("farmersdelight:scaffolding_from_canvas")
    event.remove({ id: 'farmersdelight:painting_from_canvas' })
    event.replaceInput({ id: 'minecraft:item_frame' }, 'minecraft:leather', '#c:leather_alt')
    //minecarts
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
    //TODO move this somewhere else
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

    //more blockus
    event.forEachRecipeAsync({ output: "#blockus:bluestone" }, r => {
        r.setGroup("bluestone")
    })
    event.forEachRecipeAsync({ output: "#blockus:limestone" }, r => {
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



    event.forEachRecipeAsync({ output: "#blockus:obsidian" }, r => {
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
})
