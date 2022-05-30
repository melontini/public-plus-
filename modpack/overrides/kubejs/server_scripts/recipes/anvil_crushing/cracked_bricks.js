onEvent('server.datapack.high_priority', function (event) {
    let crackBricks = (input, output) => {
        var recipeID = output.replace(":", "_")
        event.addJson("kubejs:anvil_crushing_recipes/" + recipeID + ".json", {
            "block_ingredient": {
                "block": input
            },
            "block_output": output
        })
    }
    crackBricks("minecraft:stone_bricks", "minecraft:cracked_stone_bricks")
    crackBricks("minecraft:nether_bricks", "minecraft:cracked_nether_bricks")
    crackBricks("minecraft:polished_blackstone_bricks", "minecraft:cracked_polished_blackstone_bricks")
    crackBricks("minecraft:infested_stone_bricks", "minecraft:infested_cracked_stone_bricks")
    crackBricks("biomemakeover:dried_peat_bricks", "biomemakeover:cracked_dried_peat_bricks")
    crackBricks("blockus:andesite_bricks", "blockus:cracked_andesite_bricks")
    crackBricks("blockus:diorite_bricks", "blockus:cracked_diorite_bricks")
    crackBricks("blockus:granite_bricks", "blockus:cracked_granite_bricks")
    crackBricks("blockus:polished_basalt_bricks", "blockus:cracked_polished_basalt_bricks")
    crackBricks("blockus:obsidian_bricks", "blockus:cracked_obsidian_bricks")
    crackBricks("minecraft:end_stone_bricks", "blockus:cracked_end_stone_bricks")
    crackBricks("terrestria:basalt_bricks", "terrestria:cracked_basalt_bricks")
})