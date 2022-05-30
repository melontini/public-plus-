onEvent('worldgen.add', event => {
  event.addOre(ore => {
    ore.block = 'kubejs:geode_ore'
    ore.spawnsIn.values = ['#minecraft:base_stone_overworld']
    ore.biomes.blacklist = true
    ore.biomes.values = ['#nether', '#the_end']

    ore.clusterMaxSize = 3
    ore.clusterCount = 10
    ore.minHeight = 0
    ore.maxHeight = 32
    ore.squared = true
  })
})