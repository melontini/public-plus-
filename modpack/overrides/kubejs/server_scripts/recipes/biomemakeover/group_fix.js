onEvent('recipes', event => {
    //I wonder if there's an "edit recipe" function in kubejs
    var buildingBlockPlanks = ["ancient_oak", "swamp_cypress", "willow", "blighted_balsa"]
    buildingBlockPlanks.forEach((plank) => {
        event.remove({ id: 'biomemakeover:' + plank + '_boat' })
        event.shaped('biomemakeover:' + plank + '_boat', [
            "# #",
            "###"
        ], {
            "#": 'biomemakeover:' + plank + '_planks'
        }).group('boat').id('biomemakeover:' + plank + '_boat')
    })
})