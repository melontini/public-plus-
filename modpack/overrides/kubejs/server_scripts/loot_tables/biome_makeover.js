onEvent('generic.loot_tables', event => {
    event.modify('biomemakeover:sunken_ruin', table => {
        table.addPool(pool => {
            pool.addItem('artifacts:antidote_vessel').randomChance(0.1)
        })
    })
    
    //mansion
    event.modify('biomemakeover:mansion/dungeon', table => {
        table.addPool(pool => {
            pool.addItem('farmersdelight:rope', 1, [1, 7]).randomChance(0.4)
            pool.addItem('blast:bomb', 1, [1, 2]).randomChance(0.2)
        })
    })
    event.modify('biomemakeover:mansion/dungeon_good', table => {
        table.addPool(pool => {
            pool.addItem('farmersdelight:rope', 1, [1, 7]).randomChance(0.5)
            pool.addItem('blast:bomb', 1, [1, 3]).randomChance(0.4)
            pool.addItem('blast:golden_trigger_bomb', 1, [1, 2]).randomChance(0.3)
            pool.addItem('artifacts:night_vision_goggles').randomChance(0.3)
        })
    })
    event.modify('biomemakeover:mansion/dungeon_junk', table => {
        table.addPool(pool => {
            pool.addItem('minecraft:allium', 1, [1, 7]).randomChance(0.4)
        })
    })
    event.modify('biomemakeover:mansion/good', table => {
        table.addPool(pool => {
            pool.addItem('farmersdelight:rope', 1, [1, 5]).randomChance(0.4)
            pool.addItem('blast:bomb', 1, [1, 2]).randomChance(0.3)
            pool.addItem('blast:golden_trigger_bomb', 1, [1, 1]).randomChance(0.2)
            pool.addItem('artifacts:night_vision_goggles').randomChance(0.2)
        })
    })
    event.modify('biomemakeover:mansion/standard', table => {
        table.addPool(pool => {
            pool.addItem('farmersdelight:rope', 1, [1, 7]).randomChance(0.4)
            pool.addItem('blast:bomb', 1, [1, 2]).randomChance(0.2)
        })
    })
    event.modify('biomemakeover:mansion/junk', table => {
        table.addPool(pool => {
            pool.addItem('minecraft:allium', 1, [1, 7]).randomChance(0.4)
        })
    })

    //badlands
    event.modify('biomemakeover:ghost_town/loot_0', table => {
        table.addPool(pool => {
            pool.addItem('farmersdelight:rope', 1, [1, 5]).randomChance(0.4)
            pool.addItem('farmersdelight:straws', 1, [1, 2]).randomChance(0.5)
            pool.addItem('farmersdelight:tomato_seeds', 1, [1, 3]).randomChance(0.3)
        })
    })
    event.modify('biomemakeover:ghost_town/loot_2', table => {
        table.addPool(pool => {
            pool.addItem('candlebackport:candle', 1, [1, 1]).randomChance(0.4)
        })
    })
})