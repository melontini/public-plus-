onEvent('recipes', event => {
    event.remove({ output: 'biomemakeover:glowshroom_stew' })
    event.custom({
        "type": "farmersdelight:cooking",
        "ingredients": [
            {
                "item": "biomemakeover:purple_glowshroom"
            },
            {
                "item": "biomemakeover:orange_glowshroom"
            },
            {
                "item": "biomemakeover:green_glowshroom"
            }
        ],
        "result": {
            "item": "biomemakeover:glowshroom_stew"
        },
        "container": {
            "item": "minecraft:bowl"
        },
        "cookingtime": 200
    })
    event.remove({ output: 'gofish:aquatic_astral_stew' })
    event.custom({
        "type": "farmersdelight:cooking",
        "ingredients": [
            {
                "item": "gofish:lunarfish"
            },
            {
                "item": "gofish:galaxy_starfish"
            },
            {
                "item": "gofish:starry_salmon"
            },
            {
                "item": "gofish:nebula_swordfish"
            }
        ],
        "result": {
            "item": "gofish:aquatic_astral_stew"
        },
        "container": {
            "item": "minecraft:bowl"
        },
        "cookingtime": 200
    }).id('plus:aquatic_astral_stew')
    event.remove({ output: 'gofish:endfish_and_chorus' })
    event.custom({
        "type": "farmersdelight:cooking",
        "ingredients": [
            {
                "item": "gofish:baked_endfish"
            },
            {
                "item": "minecraft:chorus_fruit"
            },
            {
                "item": "minecraft:chorus_fruit"
            }
        ],
        "result": {
            "item": "gofish:endfish_and_chorus"
        },
        "cookingtime": 200
    })
    event.remove({ output: 'gofish:grilled_blackstone_deluxe' })
    event.custom({
        "type": "farmersdelight:cooking",
        "ingredients": [
            {
                "item": "gofish:grilled_blackstone_trout"
            },
            {
                "item": "gofish:baked_seaweed"
            },
            {
                "item": "minecraft:baked_potato"
            },
            {
                "item": "minecraft:baked_potato"
            }
        ],
        "result": {
            "item": "gofish:grilled_blackstone_deluxe"
        },
        "cookingtime": 200
    })
    event.remove({ id: 'minecraft:mushroom_stew' })
    event.remove({ id: 'minecraft:rabbit_stew_from_brown_mushroom' })
    event.remove({ id: 'minecraft:rabbit_stew_from_red_mushroom' })
})