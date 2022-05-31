onEvent('server.datapack.high_priority', function (event) {
    event.addJson("biomemakeover:tags/items/glowshrooms.json", {
        "replace": false,
        "values": [
            "biomemakeover:purple_glowshroom",
            "biomemakeover:orange_glowshroom",
            "biomemakeover:green_glowshroom"
        ]
    })
    event.addJson("minecraft:tags/entity_types/hostile.json", {
        "replace": false,
        "values": [
            "minecraft:blaze",
            "minecraft:cave_spider",
            "minecraft:creeper",
            "minecraft:drowned",
            "minecraft:elder_guardian",
            "minecraft:enderman",
            "minecraft:endermite",
            "minecraft:evoker",
            "minecraft:ghast",
            "minecraft:guardian",
            "minecraft:hoglin",
            "minecraft:husk",
            "minecraft:magma_cube",
            "minecraft:phantom",
            "minecraft:piglin",
            "minecraft:piglin_brute",
            "minecraft:pillager",
            "minecraft:ravager",
            "minecraft:shulker",
            "minecraft:silverfish",
            "minecraft:skeleton",
            "minecraft:slime",
            "minecraft:spider",
            "minecraft:stray",
            "minecraft:vex",
            "minecraft:vindicator",
            "minecraft:witch",
            "minecraft:wither_skeleton",
            "minecraft:zoglin",
            "minecraft:zombie",
            "minecraft:zombie_villager",
            "minecraft:zombified_piglin",
            "artifacts:mimic",
            "biomemakeover:ghost",
            "biomemakeover:cowboy",
            "biomemakeover:decayed",
            "biomemakeover:giant_slime",
            "biomemakeover:moth"
        ]
    })
    event.addJson("minecraft:tags/blocks/crops.json", {
        "replace": false,
        "values": [
            "minecraft:beetroots",
            "minecraft:carrots",
            "minecraft:potatoes",
            "minecraft:wheat",
            "minecraft:melon_stem",
            "minecraft:pumpkin_stem",
            "farmersdelight:cabbages",
            "farmersdelight:onions",
            "farmersdelight:rice_crop",
            "farmersdelight:tomatoes",
            "biomemakeover:rootling_crop"
        ]
    })
    event.addJson("plus:tags/items/very_simple_meals.json", {
        "replace": false,
        "values": [
            "minecraft:bread",
            "minecraft:cooked_porkchop",
            "minecraft:cooked_beef",
            "minecraft:cooked_chicken",
            "minecraft:cooked_rabbit",
            "minecraft:cooked_mutton",
            "minecraft:cooked_salmon",
            "minecraft:cooked_cod",
            "minecraft:baked_potato",
            "fruitful:baked_apple",
            "artifacts:eternal_steak",
            "biomemakeover:cooked_glowfish",
            "biomemakeover:roasted_bulbus_root",
            "biomemakeover:cooked_toad",
            "farmersdelight:fried_egg",
            "gofish:baked_seaweed",
            "gofish:baked_carrot_carp",
            "gofish:grilled_blackstone_trout",
            "gofish:baked_endfish",
        ]
    })
    event.addJson("minecraft:tags/items/music_discs.json", {
        "replace": false,
        "values": [
            "biomemakeover:button_mushrooms_music_disk",
            "biomemakeover:red_rose_music_disk",
            "biomemakeover:ghost_town_music_disk",
            "biomemakeover:swamp_jives_music_disk",
            "cinderscapes:music_disc_luminous_plantation",
            "cinderscapes:music_disc_chilling_in_hell",
        ]
    })
    event.addJson("biomemakeover:tags/items/tapestries.json", {
        "replace": false,
        "values": [
            "biomemakeover:adjudicator_tapestry",
            "biomemakeover:white_tapestry",
            "biomemakeover:orange_tapestry",
            "biomemakeover:magenta_tapestry",
            "biomemakeover:light_blue_tapestry",
            "biomemakeover:yellow_tapestry",
            "biomemakeover:lime_tapestry",
            "biomemakeover:pink_tapestry",
            "biomemakeover:gray_tapestry",
            "biomemakeover:light_gray_tapestry",
            "biomemakeover:cyan_tapestry",
            "biomemakeover:purple_tapestry",
            "biomemakeover:blue_tapestry",
            "biomemakeover:brown_tapestry",
            "biomemakeover:green_tapestry",
            "biomemakeover:red_tapestry",
            "biomemakeover:black_tapestry"
        ]
    })
    event.addJson("minecraft:tags/items/crops.json", {
        "replace": false,
        "values": [
            "minecraft:beetroot_seeds",
            "minecraft:carrot",
            "minecraft:potato",
            "minecraft:wheat_seeds",
            "minecraft:melon_seeds",
            "minecraft:pumpkin_seeds",
            "farmersdelight:cabbage_seeds",
            "farmersdelight:onion",
            "farmersdelight:rice",
            "farmersdelight:tomato_seeds"
        ]
    })
    event.addJson("minecraft:tags/items/tall_flowers.json", {
        "replace": false,
        "values": [
            "biomemakeover:black_thistle",
            "biomemakeover:foxglove",
        ]
    })
    event.addJson("minecraft:tags/items/piglin_loved.json", {
        "replace": false,
        "values": [
            "farmersdelight:golden_knife",
            "gofish:golden_crate",
            "gofish:golden_fish",
            "blast:golden_bomb",
            "blast:golden_trigger_bomb",
            "harvest_scythes:golden_scythe",
            "harvest_scythes:golden_machete",
        ]
    })
    event.addJson("minecraft:tags/blocks/guarded_by_piglins.json", {
        "replace": false,
        "values": [
            "gofish:golden_crate",
        ]
    })
    event.addJson("blast:tags/items/bombs.json", {
        "replace": false,
        "values": [
            "blast:bomb",
        ]
    })
    event.addJson("c:tags/items/leather_alt.json", {
        "replace": false,
        "values": [
            "farmersdelight:canvas",
            "minecraft:leather"
        ]
    })

    event.addJson("biomemakeover:tags/items/blighted_balsa_logs.json", {
        "replace": false,
        "values": [
            "biomemakeover:blighted_balsa_log",
            "biomemakeover:stripped_blighted_balsa_log",
            "biomemakeover:blighted_balsa_wood",
            "biomemakeover:stripped_blighted_balsa_wood"
        ]
    })
    event.addJson("biomemakeover:tags/items/willow_logs.json", {
        "replace": false,
        "values": [
            "biomemakeover:willow_log",
            "biomemakeover:stripped_willow_log",
            "biomemakeover:willow_wood",
            "biomemakeover:stripped_willow_wood"
        ]
    })
    event.addJson("biomemakeover:tags/items/swamp_cypress_logs.json", {
        "replace": false,
        "values": [
            "biomemakeover:swamp_cypress_log",
            "biomemakeover:stripped_swamp_cypress_log",
            "biomemakeover:swamp_cypress_wood",
            "biomemakeover:stripped_swamp_cypress_wood"
        ]
    })
    event.addJson("biomemakeover:tags/items/ancient_oak_logs.json", {
        "replace": false,
        "values": [
            "biomemakeover:ancient_oak_log",
            "biomemakeover:stripped_ancient_oak_log",
            "biomemakeover:ancient_oak_wood",
            "biomemakeover:stripped_ancient_oak_wood"
        ]
    })
    //blocks
    event.addJson("biomemakeover:tags/blocks/blighted_balsa_logs.json", {
        "replace": false,
        "values": [
            "biomemakeover:blighted_balsa_log",
            "biomemakeover:stripped_blighted_balsa_log",
            "biomemakeover:blighted_balsa_wood",
            "biomemakeover:stripped_blighted_balsa_wood"
        ]
    })
    event.addJson("biomemakeover:tags/blocks/willow_logs.json", {
        "replace": false,
        "values": [
            "biomemakeover:willow_log",
            "biomemakeover:stripped_willow_log",
            "biomemakeover:willow_wood",
            "biomemakeover:stripped_willow_wood"
        ]
    })
    event.addJson("biomemakeover:tags/blocks/swamp_cypress_logs.json", {
        "replace": false,
        "values": [
            "biomemakeover:swamp_cypress_log",
            "biomemakeover:stripped_swamp_cypress_log",
            "biomemakeover:swamp_cypress_wood",
            "biomemakeover:stripped_swamp_cypress_wood"
        ]
    })
    event.addJson("biomemakeover:tags/blocks/ancient_oak_logs.json", {
        "replace": false,
        "values": [
            "biomemakeover:ancient_oak_log",
            "biomemakeover:stripped_ancient_oak_log",
            "biomemakeover:ancient_oak_wood",
            "biomemakeover:stripped_ancient_oak_wood"
        ]
    })
    event.addJson("fruitful:tags/items/gives_sustaining_long.json", {
        "replace": true,
        "values": [
        ]
    })
    event.addJson("fruitful:tags/items/gives_sustaining.json", {
        "replace": true,
        "values": [
        ]
    })
    event.addJson("fruitful:tags/items/gives_sustaining_ii.json", {
        "replace": true,
        "values": [
        ]
    })
})