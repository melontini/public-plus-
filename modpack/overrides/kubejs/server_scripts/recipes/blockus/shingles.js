onEvent('recipes', event => {
    color.forEach((brick) => {
        event.remove({ id: 'blockus:' + brick + '_shingles' })
        event.shaped('6x blockus:' + brick + '_shingles', [
            'T T',
            'TTT',
            ' T '
        ], {
            T: 'minecraft:' + brick + '_terracotta'
        }).group('shingles').id("blockus:" + brick + "_shingles")
    })
    event.remove({ id: 'blockus:shingles' })
    //should I group this?
    event.shaped('6x blockus:shingles', [
        'T T',
        'TTT',
        ' T '
    ], {
        T: 'minecraft:terracotta'
    }).group('shingles').id("blockus:shingles")
})