onEvent('server.datapack.high_priority', function (event) {
    event.addJson("kubejs:anvil_crushing_recipes/random/dried_peat_bricks.json", {
        "block_ingredient": {
            "block": "biomemakeover:dried_peat"
        },
        "block_output": "biomemakeover:dried_peat_bricks"
    }
    )
    event.addJson("kubejs:anvil_crushing_recipes/random/sandstone.json", {
        "block_ingredient": {
            "block": "minecraft:sand"
        },
        "block_output": "minecraft:sandstone"
    }
    )
    event.addJson("kubejs:anvil_crushing_recipes/random/red_sandstone.json", {
        "block_ingredient": {
            "block": "minecraft:red_sand"
        },
        "block_output": "minecraft:red_sandstone"
    }
    )
    event.addJson("kubejs:anvil_crushing_recipes/random/soul_sandstone.json", {
        "block_ingredient": {
            "block": "minecraft:soul_sand"
        },
        "block_output": "blockus:soul_sandstone"
    }
    )
})