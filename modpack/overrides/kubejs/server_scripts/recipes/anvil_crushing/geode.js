onEvent('server.datapack.high_priority', function (event) {
    /*{
  "block_ingredient": {
    "block": "minecraft:stone"
  },
  "block_output": "minecraft:cobblestone"
}
 */
    event.addJson("kubejs:anvil_crushing_recipes/geode.json", {
        "block_ingredient": {
            "block": "kubejs:geode"
        },
        "block_output": "kubejs:cracked_geode"
    })
    event.addJson("kubejs:anvil_crushing_recipes/cracked_geode.json", {
        "block_ingredient": {
            "block": "kubejs:cracked_geode"
        },
        "loot_output": "kubejs:gameplay/geode_crack"
    })
})