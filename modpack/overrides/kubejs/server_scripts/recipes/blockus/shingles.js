onEvent('recipes', event => {
    color.forEach((brick) => {
        event.remove({ id: 'blockus:' + brick + '_shingles' })
        event.shaped('6x blockus:' + brick + '_shingles', [
            'T T',
            'TTT',
            ' T '
        ], {
            T: 'minecraft:' + brick + '_terracotta'
        }).id("blockus:" + brick + "_shingles")
    })
    event.remove({ id: 'blockus:shingles' })
    event.shaped('6x blockus:shingles', [
        'T T',
        'TTT',
        ' T '
    ], {
        T: 'minecraft:terracotta'
    }).id("blockus:shingles")
})