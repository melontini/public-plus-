onEvent('recipes', event => {
    event.remove({ id: 'traverse:fir_sign' })
    event.shaped('3x traverse:fir_sign', [
        "###",
        "###",
        " S "
    ], {
        "#": 'traverse:fir_planks',
        S: 'minecraft:stick'
    }).group('sign').id('traverse:fir_sign')
})