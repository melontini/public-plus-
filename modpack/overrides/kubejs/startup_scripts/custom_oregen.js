onEvent('worldgen.remove', event => {
    event.removeOres(ores => {
        ores.blocks = ['biomemakeover:mesmerite']
        ores.biomes.blacklist = true
        ores.biomes.values = []
    })
})

/*onEvent('worldgen.add', event => {
    //coal everywhere
    event.addOre(ore => {
        ore.block = 'minecraft:coal_ore'
        ore.spawnsIn.values = ['#minecraft:base_stone_overworld']
        ore.biomes.blacklist = true
        ore.biomes.values = ['#nether', '#the_end', '#jungle', '#forest']

        ore.clusterMaxSize = 1
        ore.clusterCount = 8
        ore.minHeight = 0
        ore.maxHeight = 12
        ore.squared = true
    })
    event.addOre(ore => {
        ore.block = 'minecraft:coal_ore'
        ore.spawnsIn.values = ['#minecraft:base_stone_overworld']
        ore.biomes.blacklist = true
        ore.biomes.values = ['#nether', '#the_end', '#jungle', '#forest']

        ore.clusterMaxSize = 12
        ore.clusterCount = 5
        ore.minHeight = 12
        ore.maxHeight = 48
        ore.squared = true
        ore.chance = 1
    })
    event.addOre(ore => {
        ore.block = 'minecraft:coal_ore'
        ore.spawnsIn.values = ['#minecraft:base_stone_overworld']
        ore.biomes.blacklist = true
        ore.biomes.values = ['#nether', '#the_end', '#jungle', '#forest']

        ore.clusterMaxSize = 24
        ore.clusterCount = 3
        ore.minHeight = 48
        ore.maxHeight = 255
        ore.squared = true
        ore.chance = 2
    })
    //coal in jungles
    event.addOre(ore => {
        ore.block = 'minecraft:coal_ore'
        ore.spawnsIn.values = ['#minecraft:base_stone_overworld']
        ore.biomes.blacklist = false
        ore.biomes.values = ['#jungle']

        ore.clusterMaxSize = 24
        ore.clusterCount = 6
        ore.minHeight = 0
        ore.maxHeight = 48
        ore.squared = true
        ore.chance = 1
    })
    event.addOre(ore => {
        ore.block = 'minecraft:coal_ore'
        ore.spawnsIn.values = ['#minecraft:base_stone_overworld']
        ore.biomes.blacklist = false
        ore.biomes.values = ['#jungle']

        ore.clusterMaxSize = 54
        ore.clusterCount = 2
        ore.minHeight = 48
        ore.maxHeight = 255
        ore.squared = true
        ore.chance = 3
    })
    //coal ore in forests
    event.addOre(ore => {
        ore.block = 'minecraft:coal_ore'
        ore.spawnsIn.values = ['#minecraft:base_stone_overworld']
        ore.biomes.blacklist = false
        ore.biomes.values = ['#forest']

        ore.clusterMaxSize = 16
        ore.clusterCount = 6
        ore.minHeight = 0
        ore.maxHeight = 48
        ore.squared = true
        ore.chance = 2
    })
    event.addOre(ore => {
        ore.block = 'minecraft:coal_ore'
        ore.spawnsIn.values = ['#minecraft:base_stone_overworld']
        ore.biomes.blacklist = false
        ore.biomes.values = ['#forest']

        ore.clusterMaxSize = 44
        ore.clusterCount = 2
        ore.minHeight = 48
        ore.maxHeight = 255
        ore.squared = true
        ore.chance = 3
    })
    //iron general
    event.addOre(ore => {
        ore.block = 'minecraft:iron_ore'
        ore.spawnsIn.values = ['#minecraft:base_stone_overworld']
        ore.biomes.blacklist = true
        ore.biomes.values = ['#nether', '#the_end', '#extreme_hills']

        ore.clusterMaxSize = 3
        ore.clusterCount = 4
        ore.minHeight = 0
        ore.maxHeight = 12
        ore.squared = true
    })
    event.addOre(ore => {
        ore.block = 'minecraft:iron_ore'
        ore.spawnsIn.values = ['#minecraft:base_stone_overworld']
        ore.biomes.blacklist = true
        ore.biomes.values = ['#nether', '#the_end', '#extreme_hills']

        ore.clusterMaxSize = 12
        ore.clusterCount = 2
        ore.minHeight = 12
        ore.maxHeight = 48
        ore.squared = true
        ore.chance = 1
    })
    event.addOre(ore => {
        ore.block = 'minecraft:iron_ore'
        ore.spawnsIn.values = ['#minecraft:base_stone_overworld']
        ore.biomes.blacklist = true
        ore.biomes.values = ['#nether', '#the_end', '#extreme_hills']

        ore.clusterMaxSize = 12
        ore.clusterCount = 1
        ore.minHeight = 48
        ore.maxHeight = 255
        ore.squared = true
        ore.chance = 2
    })
    //iron in extreme hills
    event.addOre(ore => {
        ore.block = 'minecraft:iron_ore'
        ore.spawnsIn.values = ['#minecraft:base_stone_overworld']
        ore.biomes.blacklist = false
        ore.biomes.values = ['#extreme_hills']

        ore.clusterMaxSize = 5
        ore.clusterCount = 8
        ore.minHeight = 0
        ore.maxHeight = 12
        ore.squared = true
    })
    event.addOre(ore => {
        ore.block = 'minecraft:iron_ore'
        ore.spawnsIn.values = ['#minecraft:base_stone_overworld']
        ore.biomes.blacklist = false
        ore.biomes.values = ['#extreme_hills']

        ore.clusterMaxSize = 18
        ore.clusterCount = 5
        ore.minHeight = 12
        ore.maxHeight = 48
        ore.squared = true
        ore.chance = 1
    })
    event.addOre(ore => {
        ore.block = 'minecraft:iron_ore'
        ore.spawnsIn.values = ['#minecraft:base_stone_overworld']
        ore.biomes.blacklist = false
        ore.biomes.values = ['#extreme_hills']

        ore.clusterMaxSize = 24
        ore.clusterCount = 3
        ore.minHeight = 48
        ore.maxHeight = 255
        ore.squared = true
        ore.chance = 2
    })
    //redstone general
    event.addOre(ore => {
        ore.block = 'minecraft:redstone_ore'
        ore.spawnsIn.values = ['#minecraft:base_stone_overworld']
        ore.biomes.blacklist = true
        ore.biomes.values = ['#nether', '#the_end', '#savanna']

        ore.clusterMaxSize = 6
        ore.clusterCount = 8
        ore.minHeight = 0
        ore.maxHeight = 32
        ore.squared = true
    })
    //redstone in savannas
    event.addOre(ore => {
        ore.block = 'minecraft:redstone_ore'
        ore.spawnsIn.values = ['#minecraft:base_stone_overworld']
        ore.biomes.blacklist = false
        ore.biomes.values = ['#savanna']

        ore.clusterMaxSize = 10
        ore.clusterCount = 5
        ore.minHeight = 29
        ore.maxHeight = 48
        ore.squared = true
        ore.chance = 2
    })
    event.addOre(ore => {
        ore.block = 'minecraft:redstone_ore'
        ore.spawnsIn.values = ['#minecraft:base_stone_overworld']
        ore.biomes.blacklist = false
        ore.biomes.values = ['#savanna']

        ore.clusterMaxSize = 20
        ore.clusterCount = 4
        ore.minHeight = 0
        ore.maxHeight = 32
        ore.squared = true
        ore.chance = 2
    })
    //diamond general
    event.addOre(ore => {
        ore.block = 'minecraft:diamond_ore'
        ore.spawnsIn.values = ['#minecraft:base_stone_overworld']
        ore.biomes.blacklist = true
        ore.biomes.values = ['#nether', '#the_end', 'terrestria:volcanic_island', 'terrestria:volcanic_island_shore', 'terrestria:volcanic_island_beach']

        ore.clusterMaxSize = 6
        ore.clusterCount = 1
        ore.minHeight = 0
        ore.maxHeight = 6
        ore.squared = true
    })
    event.addOre(ore => {
        ore.block = 'minecraft:diamond_ore'
        ore.spawnsIn.values = ['#minecraft:base_stone_overworld']
        ore.biomes.blacklist = true
        ore.biomes.values = ['#nether', '#the_end', 'terrestria:volcanic_island', 'terrestria:volcanic_island_shore', 'terrestria:volcanic_island_beach']

        ore.clusterMaxSize = 3
        ore.clusterCount = 1
        ore.minHeight = 6
        ore.maxHeight = 12
        ore.squared = true
    })
    //diamond in volcanic islands
    event.addOre(ore => {
        ore.block = 'minecraft:diamond_ore'
        ore.spawnsIn.values = ['#minecraft:base_stone_overworld']
        ore.biomes.blacklist = false
        ore.biomes.values = ['terrestria:volcanic_island', 'terrestria:volcanic_island_shore', 'terrestria:volcanic_island_beach']

        ore.clusterMaxSize = 16
        ore.clusterCount = 1
        ore.minHeight = 6
        ore.maxHeight = 6
        ore.squared = false
    })
    //lapis general
    event.addOre(ore => {
        ore.block = 'minecraft:lapis_ore'
        ore.spawnsIn.values = ['#minecraft:base_stone_overworld']
        ore.biomes.blacklist = true
        ore.biomes.values = ['#nether', '#the_end', '#icy', '#ocean']

        ore.clusterMaxSize = 10
        ore.clusterCount = 2
        ore.minHeight = 0
        ore.maxHeight = 24
        ore.squared = true
    })
    //ocean
    event.addOre(ore => {
        ore.block = 'minecraft:lapis_ore'
        ore.spawnsIn.values = ['#minecraft:base_stone_overworld', 'minecraft:gravel']
        ore.biomes.blacklist = false
        ore.biomes.values = ['#ocean']

        ore.clusterMaxSize = 24
        ore.clusterCount = 2
        ore.minHeight = 0
        ore.maxHeight = 48
        ore.squared = true
    })
    //icy
    event.addOre(ore => {
        ore.block = 'minecraft:lapis_ore'
        ore.spawnsIn.values = ['#minecraft:base_stone_overworld']
        ore.biomes.blacklist = false
        ore.biomes.values = ['#icy']

        ore.clusterMaxSize = 16
        ore.clusterCount = 2
        ore.minHeight = 0
        ore.maxHeight = 32
        ore.squared = true
    })
    //gold general
    event.addOre(ore => {
        ore.block = 'minecraft:gold_ore'
        ore.spawnsIn.values = ['#minecraft:base_stone_overworld']
        ore.biomes.blacklist = true
        ore.biomes.values = ['#nether', '#the_end', '#mesa']

        ore.clusterMaxSize = 5
        ore.clusterCount = 4
        ore.minHeight = 0
        ore.maxHeight = 25
        ore.squared = true
    })
    //mesa
    event.addOre(ore => {
        ore.block = 'minecraft:gold_ore'
        ore.spawnsIn.values = ['#minecraft:base_stone_overworld', 'minecraft:sandstone']
        ore.biomes.blacklist = false
        ore.biomes.values = ['#mesa']

        ore.clusterMaxSize = 5
        ore.clusterCount = 10
        ore.minHeight = 70
        ore.maxHeight = 255
        ore.squared = true
    })
    event.addOre(ore => {
        ore.block = 'minecraft:gold_ore'
        ore.spawnsIn.values = ['#minecraft:base_stone_overworld', 'minecraft:sandstone']
        ore.biomes.blacklist = false
        ore.biomes.values = ['#mesa']

        ore.clusterMaxSize = 24
        ore.clusterCount = 3
        ore.minHeight = 0
        ore.maxHeight = 70
        ore.squared = true
    })
})*/