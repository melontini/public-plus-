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
})