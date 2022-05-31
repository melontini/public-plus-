onEvent('recipes', event => {
    //I wonder if there's an "edit recipe" function in kubejs
    var buildingBlockPlanks = ["ancient_oak", "swamp_cypress", "willow", "blighted_balsa"]
    buildingBlockPlanks.forEach((plank) => {
        //boats
        event.remove({ id: 'biomemakeover:' + plank + '_boat' })
        event.shaped('biomemakeover:' + plank + '_boat', [
            "# #",
            "###"
        ], {
            "#": 'biomemakeover:' + plank + '_planks'
        }).group('boat').id('biomemakeover:' + plank + '_boat')
        //doors
        event.remove({ id: 'biomemakeover:' + plank + '_door' })
        event.shaped('3x biomemakeover:' + plank + '_door', [
            "##",
            "##",
            "##"
          ], {
            "#": 'biomemakeover:' + plank + '_planks'
        }).group('wooden_door').id('biomemakeover:' + plank + '_door')
        //fence_gate
        event.remove({ id: 'biomemakeover:' + plank + '_fence_gate' })
        event.shaped('biomemakeover:' + plank + '_fence_gate', [
            "S#S",
            "S#S"
          ], {
            "#": 'biomemakeover:' + plank + '_planks',
             S:  'minecraft:stick'
        }).group('wooden_fence_gate').id('biomemakeover:' + plank + '_fence_gate')
        //fence
        event.remove({ id: 'biomemakeover:' + plank + '_fence' })
        event.shaped('3x biomemakeover:' + plank + '_fence', [
            "#S#",
            "#S#"
          ], {
            "#": 'biomemakeover:' + plank + '_planks',
            S:  'minecraft:stick'
        }).group('wooden_fence').id('biomemakeover:' + plank + '_fence')
        //trapdoor
        event.remove({ id: 'biomemakeover:' + plank + '_trapdoor' })
        event.shaped('2x biomemakeover:' + plank + '_trapdoor', [
            "###",
            "###"
          ], {
            "#": 'biomemakeover:' + plank + '_planks'
        }).group('wooden_trapdoor').id('biomemakeover:' + plank + '_trapdoor')
        //signs
        event.remove({ id: 'biomemakeover:' + plank + '_sign' })
        event.shaped('3x biomemakeover:' + plank + '_sign', [
            "###",
            "###",
            " S "
          ], {
            "#": 'biomemakeover:' + plank + '_planks',
            S:  'minecraft:stick'
        }).group('sign').id('biomemakeover:' + plank + '_sign')
        //stairs
        event.remove({ id: 'biomemakeover:' + plank + '_stairs' })
        event.shaped('4x biomemakeover:' + plank + '_stairs', [
            "#  ",
            "## ",
            "###"
          ], {
            "#": 'biomemakeover:' + plank + '_planks'
        }).group('wooden_stairs').id('biomemakeover:' + plank + '_stairs')
        //slab
        event.remove({ id: 'biomemakeover:' + plank + '_slab' })
        event.shaped('6x biomemakeover:' + plank + '_slab', [
            "###"
          ], {
            "#": 'biomemakeover:' + plank + '_planks'
        }).group('wooden_slab').id('biomemakeover:' + plank + '_slab')
        //plate
        event.remove({ id: 'biomemakeover:' + plank + '_pressure_plate' })
        event.shaped('biomemakeover:' + plank + '_pressure_plate', [
            "##"
          ], {
            "#": 'biomemakeover:' + plank + '_planks'
        }).group('wooden_pressure_plate').id('biomemakeover:' + plank + '_pressure_plate')
        //button
        event.remove({ id: 'biomemakeover:' + plank + '_button' })
        event.shapeless('biomemakeover:' + plank + '_button', ['biomemakeover:' + plank + '_planks']).group('wooden_button').id('biomemakeover:' + plank + '_button')
    })
})