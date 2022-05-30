onEvent('recipes', event => {
    var pantries = [
        'oak',
        'birch',
        'spruce',
        'jungle',
        'acacia',
        'dark_oak',
        'crimson',
        'warped'
    ]
    pantries.forEach((color) => {
        event.remove({ id: 'farmersdelight:' + color + '_pantry' })
        event.shaped('farmersdelight:' + color + '_pantry', [
            'SSS',
            'T T',
            'SSS'
        ], {
            S: 'minecraft:' + color + '_slab',
            T: 'minecraft:' + color + '_trapdoor'
        }).group('pantries').id("farmersdelight:" + color + "_pantry")
    })
})