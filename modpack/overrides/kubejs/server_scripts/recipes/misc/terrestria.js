onEvent('recipes', event => {
    var buildingBlockPlanks = ["sakura", "japanese_maple", "redwood", "hemlock", "rubber", "cypress", "rainbow_eucalyptus", "willow", "yucca_palm"]
    buildingBlockPlanks.forEach((plank) => {
        event.remove({ id: 'terrestria:' + plank + '_sign' })
        event.shaped('3x terrestria:' + plank + '_sign', [
            "###",
            "###",
            " S "
        ], {
            "#": 'terrestria:' + plank + '_planks',
            S: 'minecraft:stick'
        }).group('sign').id('terrestria:' + plank + '_sign')
    })
})