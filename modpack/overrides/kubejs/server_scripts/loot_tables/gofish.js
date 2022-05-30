onEvent('generic.loot_tables', event => {

    event.modify('gofish:gameplay/fishing/wooden_crate', table => {
        table.addPool(pool => {
            pool.addItem('farmersdelight:tomato', 1, [2, 5]).randomChance(0.6)
            pool.addItem('farmersdelight:onion', 1, [2, 5]).randomChance(0.6)
            pool.addItem('farmersdelight:rice_panicle', 1, [2, 5]).randomChance(0.6)
        })
    })

    event.modify('gofish:gameplay/fishing/golden_crate', table => {
        table.addPool(pool => {
            pool.addItem('artifacts:golden_hook').randomChance(0.3)
            pool.addItem('harvest_scythes:golden_scythe').damage([0.5, 1]).randomChance(0.1).enchantWithLevels(15, false)
            pool.addItem('harvest_scythes:golden_machete').damage([0.5, 1]).randomChance(0.1).enchantWithLevels(15, false)
        })
    })

    event.modify('gofish:gameplay/fishing/diamond_crate', table => {
        table.addPool(pool => {
            pool.addItem('artifacts:crystal_heart').randomChance(0.2)
            pool.addItem('biomemakeover:illunite_shard', 1, [2, 6]).randomChance(0.5)
        })
    })

    event.modify('gofish:gameplay/fishing/supply_crate', table => {
        table.addPool(pool => {
            pool.addItem('farmersdelight:cabbage_seeds', 1, [2, 5]).randomChance(0.6)
            pool.addItem('farmersdelight:tomato', 1, [2, 5]).randomChance(0.6)
            pool.addItem('farmersdelight:tomato_seeds', 1, [2, 5]).randomChance(0.6)
            pool.addItem('farmersdelight:onion', 1, [2, 5]).randomChance(0.6)
            pool.addItem('farmersdelight:rice_panicle', 1, [2, 5]).randomChance(0.6)
        })
    })

    event.modify('gofish:gameplay/fishing/fiery_crate', table => {
        table.addPool(pool => {
            pool.addItem('artifacts:obsidian_skull').randomChance(0.1)
            pool.addItem('artifacts:fire_gauntlet').randomChance(0.1)
            pool.addItem('artifacts:flame_pendant').randomChance(0.1)
        })
    })

    //idk where else to put them
    event.modify('gofish:gameplay/fishing/gilded_blackstone_crate', table => {
        table.addPool(pool => {
            pool.addItem('cinderscapes:music_disc_chilling_in_hell', 1, [0, 1]).randomChance(0.1)
            pool.addItem('cinderscapes:music_disc_luminous_plantation', 1, [0, 1]).randomChance(0.1)
        })
    })
})