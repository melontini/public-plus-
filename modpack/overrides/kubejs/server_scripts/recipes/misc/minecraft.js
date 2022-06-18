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
    event.forEachRecipe({ id: "minecraft:minecart" }, r => {
        r.setGroup("minecarts")
    })
    event.forEachRecipe({ input: "minecraft:minecart" }, r => {
        r.setGroup("minecarts")
    })
    //rails
    event.forEachRecipe({ output: "#minecraft:rails" }, r => {
        r.setGroup("rails")
    })
    //Temp placements for this
    //TODO move this somewhere else
    //TODO separate stone things from wooden ones
    event.forEachRecipe({ output: "#minecraft:doors" }, r => {
        r.setGroup("doors")
    })
    event.forEachRecipe({ output: "#minecraft:trapdoors" }, r => {
        r.setGroup("trapdoors")
    })
    event.forEachRecipe({ output: "#minecraft:pressure_plates" }, r => {
        r.setGroup("pressure_plates")
    })
    event.forEachRecipe({ output: "#minecraft:buttons" }, r => {
        r.setGroup("buttons")
    })
    event.forEachRecipe({ output: "minecraft:lead" }, r => {
        r.setGroup('lead')
    })
    //organic compost
    event.forEachRecipe({ output: "farmersdelight:organic_compost" }, r => {
        r.setGroup('organic_compost')
    })
    //boats
    event.forEachRecipe({ output: "#minecraft:boats" }, r => {
        r.setGroup("boats")
    })
    //blockus gates
    event.forEachRecipe({ output: "blockus:iron_gate" }, r => {
        r.setGroup("gates")
    })
    event.forEachRecipe({ output: "blockus:golden_gate" }, r => {
        r.setGroup("gates")
    })
    //dyes
    color.forEach(color => {
        event.forEachRecipe({ output: "minecraft:" + color + '_dye' }, r => {
            r.setGroup(color + '_dye')
        })
    })
    //biomemakeover wierdness
    color.forEach(color => {
        event.forEachRecipe({ output: "biomemakeover:" + color + '_terracotta_bricks' }, r => {
            r.setGroup('terracotta_bricks')
        })
    })
    color.forEach(color => {
        event.forEachRecipe({ output: "biomemakeover:" + color + '_terracotta_brick_wall' }, r => {
            r.setGroup('terracotta_brick_wall')
        })
    })
    color.forEach(color => {
        event.forEachRecipe({ output: "biomemakeover:" + color + '_terracotta_brick_slab' }, r => {
            r.setGroup('terracotta_brick_slab')
        })
    })
    color.forEach(color => {
        event.forEachRecipe({ output: "biomemakeover:" + color + '_terracotta_brick_stairs' }, r => {
            r.setGroup('terracotta_brick_stairs')
        })
    })
    //non colored terracotta bricks
    event.forEachRecipe({ output: "biomemakeover:terracotta_bricks" }, r => {
        r.setGroup('terracotta_bricks')
    })
    event.forEachRecipe({ output: "biomemakeover:terracotta_brick_wall" }, r => {
        r.setGroup('terracotta_brick_wall')

    })
    event.forEachRecipe({ output: "biomemakeover:terracotta_brick_slab" }, r => {
        r.setGroup('terracotta_brick_slab')

    })
    event.forEachRecipe({ output: "biomemakeover:terracotta_brick_stairs" }, r => {
        r.setGroup('terracotta_brick_stairs')
    })
    //more blockus
    event.forEachRecipe({ output: "#blockus:bluestone" }, r => {
        r.setGroup("bluestone")
    })
    event.forEachRecipe({ output: "#blockus:limestone" }, r => {
        r.setGroup("limestone")
    })
    event.forEachRecipe({ output: "#blockus:marble" }, r => {
        r.setGroup("marble")
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
        event.forEachRecipe({ output: "#" + namespace + ":" + log }, r => {
            r.setGroup(namespace + '_' + log)
        })
    }
})
