//TODO group in mod folders
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
            "farmersdelight:tomato_seeds",
            "biomemakeover:rootling_seeds"
        ]
    })
    event.addJson("tinytweaks:tags/items/plantable.json", {
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
            "farmersdelight:tomato_seeds",
            "biomemakeover:rootling_seeds"
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
    //shingles
    event.addJson("blockus:tags/items/shingles.json", {
        "replace": false,
        "values": [
            "blockus:shingles",
            "blockus:white_shingles",
            "blockus:orange_shingles",
            'blockus:magenta_shingles',
            'blockus:light_blue_shingles',
            'blockus:yellow_shingles',
            'blockus:lime_shingles',
            'blockus:pink_shingles',
            'blockus:gray_shingles',
            'blockus:light_gray_shingles',
            'blockus:cyan_shingles',
            'blockus:purple_shingles',
            'blockus:blue_shingles',
            'blockus:brown_shingles',
            'blockus:green_shingles',
            'blockus:red_shingles',
            'blockus:black_shingles',
            'blockus:shingles_stairs',
            'blockus:white_shingles_stairs',
            'blockus:orange_shingles_stairs',
            'blockus:magenta_shingles_stairs',
            'blockus:light_blue_shingles_stairs',
            'blockus:yellow_shingles_stairs',
            'blockus:lime_shingles_stairs',
            'blockus:pink_shingles_stairs',
            'blockus:gray_shingles_stairs',
            'blockus:light_gray_shingles_stairs',
            'blockus:cyan_shingles_stairs',
            'blockus:purple_shingles_stairs',
            'blockus:blue_shingles_stairs',
            'blockus:brown_shingles_stairs',
            'blockus:green_shingles_stairs',
            'blockus:red_shingles_stairs',
            'blockus:black_shingles_stairs',
            'blockus:shingles_slab',
            'blockus:white_shingles_slab',
            'blockus:orange_shingles_slab',
            'blockus:magenta_shingles_slab',
            'blockus:light_blue_shingles_slab',
            'blockus:yellow_shingles_slab',
            'blockus:lime_shingles_slab',
            'blockus:pink_shingles_slab',
            'blockus:gray_shingles_slab',
            'blockus:light_gray_shingles_slab',
            'blockus:cyan_shingles_slab',
            'blockus:purple_shingles_slab',
            'blockus:blue_shingles_slab',
            'blockus:brown_shingles_slab',
            'blockus:green_shingles_slab',
            'blockus:red_shingles_slab',
            'blockus:black_shingles_slab'
        ]
    })
    //tiles
    event.addJson("blockus:tags/items/colored_tiles.json", {
        "replace": false,
        "values": [
            'blockus:white_colored_tiles',
            'blockus:orange_colored_tiles',
            'blockus:magenta_colored_tiles',
            'blockus:light_blue_colored_tiles',
            'blockus:yellow_colored_tiles',
            'blockus:lime_colored_tiles',
            'blockus:pink_colored_tiles',
            'blockus:gray_colored_tiles',
            'blockus:light_gray_colored_tiles',
            'blockus:cyan_colored_tiles',
            'blockus:purple_colored_tiles',
            'blockus:blue_colored_tiles',
            'blockus:brown_colored_tiles',
            'blockus:green_colored_tiles',
            'blockus:red_colored_tiles',
            'blockus:black_colored_tiles',
            'blockus:orange_white_colored_tiles',
            'blockus:magenta_white_colored_tiles',
            'blockus:light_blue_white_colored_tiles',
            'blockus:yellow_white_colored_tiles',
            'blockus:lime_white_colored_tiles',
            'blockus:pink_white_colored_tiles',
            'blockus:gray_white_colored_tiles',
            'blockus:light_gray_white_colored_tiles',
            'blockus:cyan_white_colored_tiles',
            'blockus:purple_white_colored_tiles',
            'blockus:blue_white_colored_tiles',
            'blockus:brown_white_colored_tiles',
            'blockus:green_white_colored_tiles',
            'blockus:red_white_colored_tiles',
            'blockus:black_white_colored_tiles',
            'blockus:gray_light_gray_colored_tiles',
            'blockus:black_gray_colored_tiles',
            'blockus:black_red_colored_tiles',
            'blockus:black_blue_colored_tiles',
            'blockus:magenta_black_colored_tiles',
            'blockus:pink_magenta_colored_tiles',
            'blockus:purple_orange_colored_tiles',
            'blockus:purple_blue_colored_tiles',
            'blockus:green_orange_colored_tiles',
            'blockus:green_brown_colored_tiles',
            'blockus:lime_yellow_colored_tiles',
            'blockus:light_blue_yellow_colored_tiles',
            'blockus:blue_cyan_colored_tiles',
            'blockus:red_blue_colored_tiles',
            'blockus:rainbow_colored_tiles'
        ]
    })
    event.addJson("blockus:tags/items/food_crates.json", {
        "replace": false,
        "values": [
            'blockus:sweet_berries_crate',
            'blockus:salmon_crate',
            'blockus:pufferfish_crate',
            'blockus:tropical_fish_crate',
            'blockus:cod_crate',
            'blockus:potato_crate',
            'blockus:apple_crate',
            'blockus:beetroot_crate',
            'blockus:carrot_crate',
            'blockus:bread_box',
            'blockus:golden_apple_crate',
            'blockus:golden_carrot_crate',
        ]
    })
    event.addJson("minecraft:tags/items/pressure_plates.json", {
        "replace": false,
        "values": [
            'terrestria:basalt_pressure_plate',
            'minecraft:light_weighted_pressure_plate',
            'minecraft:heavy_weighted_pressure_plate',
            '#minecraft:wooden_pressure_plates',
            '#minecraft:stone_pressure_plates'
        ]
    })
    event.addJson("minecraft:tags/items/stone_pressure_plates.json", {
        "replace": false,
        "values": [
            'minecraft:stone_pressure_plate',
            'minecraft:polished_blackstone_pressure_plate',
            'blockus:polished_andesite_pressure_plate',
            'blockus:polished_diorite_pressure_plate',
            'blockus:polished_granite_pressure_plate',
            'blockus:limestone_pressure_plate',
            'blockus:marble_pressure_plate',
            'blockus:bluestone_pressure_plate',
            'blockus:polished_netherrack_pressure_plate',
            'blockus:polished_end_stone_pressure_plate',
            'blockus:polished_basalt_pressure_plate',
        ]
    })
    event.addJson("blockus:tags/items/limestone.json", {
        "replace": false,
        "values": [
            'blockus:limestone',
            'blockus:limestone_stairs',
            'blockus:limestone_slab',
            'blockus:polished_limestone',
            'blockus:polished_limestone_stairs',
            'blockus:polished_limestone_slab',
            'blockus:limestone_bricks',
            'blockus:limestone_bricks_stairs',
            'blockus:limestone_bricks_slab',
            'blockus:limestone_tiles',
            'blockus:limestone_tile_stairs',
            'blockus:limestone_tile_slab',
            'blockus:limestone_pillar',
            'blockus:small_limestone_bricks',
            'blockus:small_limestone_bricks_stairs',
            'blockus:small_limestone_bricks_slab',
            'blockus:chiseled_limestone',
            'blockus:limestone_circle_pavement',
        ]
    })
    event.addJson("blockus:tags/items/marble.json", {
        "replace": false,
        "values": [
            'blockus:marble',
            'blockus:marble_stairs',
            'blockus:marble_slab',
            'blockus:polished_marble',
            'blockus:polished_marble_stairs',
            'blockus:polished_marble_slab',
            'blockus:marble_bricks',
            'blockus:marble_bricks_stairs',
            'blockus:marble_bricks_slab',
            'blockus:marble_tiles',
            'blockus:marble_tile_stairs',
            'blockus:marble_tile_slab',
            'blockus:marble_pillar',
            'blockus:small_marble_bricks',
            'blockus:small_marble_bricks_stairs',
            'blockus:small_marble_bricks_slab',
            'blockus:chiseled_marble',
            'blockus:marble_circle_pavement',
        ]
    })
    event.addJson("blockus:tags/items/bluestone.json", {
        "replace": false,
        "values": [
            'blockus:bluestone',
            'blockus:bluestone_stairs',
            'blockus:bluestone_slab',
            'blockus:smooth_bluestone',
            'blockus:smooth_bluestone_stairs',
            'blockus:smooth_bluestone_slab',
            'blockus:bluestone_bricks',
            'blockus:bluestone_bricks_stairs',
            'blockus:bluestone_bricks_slab',
            'blockus:bluestone_tiles',
            'blockus:bluestone_tiles_stairs',
            'blockus:bluestone_tiles_slab',
            'blockus:bluestone_pillar',
            'blockus:bluestone_little_bricks',
            'blockus:bluestone_little_bricks_stairs',
            'blockus:bluestone_little_bricks_slab',
            'blockus:chiseled_bluestone',
            'blockus:bluestone_circle_pavement',
        ]
    })
    event.addJson("blockus:tags/items/diorite_blocks.json", {
        "replace": false,
        "values": [
            'blockus:diorite_bricks',
            'blockus:diorite_bricks_stairs',
            'blockus:diorite_bricks_slab',
            'blockus:zigzagged_diorite',
            'blockus:chiseled_diorite_bricks',
            'blockus:cracked_diorite_bricks',
            'blockus:polished_diorite_pillar',
            'blockus:diorite_circle_pavement',
        ]
    })
    event.addJson("blockus:tags/items/granite_blocks.json", {
        "replace": false,
        "values": [
            'blockus:granite_bricks',
            'blockus:granite_bricks_stairs',
            'blockus:granite_bricks_slab',
            'blockus:zigzagged_granite',
            'blockus:chiseled_granite_bricks',
            'blockus:cracked_granite_bricks',
            'blockus:polished_granite_pillar',
            'blockus:granite_circle_pavement',
        ]
    })
    event.addJson("blockus:tags/items/andesite_blocks.json", {
        "replace": false,
        "values": [
            'blockus:andesite_bricks',
            'blockus:andesite_bricks_stairs',
            'blockus:andesite_bricks_slab',
            'blockus:zigzagged_andesite',
            'blockus:chiseled_andesite_bricks',
            'blockus:cracked_andesite_bricks',
            'blockus:polished_andesite_pillar',
            'blockus:andesite_circle_pavement',
        ]
    })
    event.addJson("blockus:tags/items/basalt_blocks.json", {
        "replace": false,
        "values": [
            'blockus:rough_basalt',
            'blockus:rough_basalt_slab',
            'blockus:rough_basalt_stairs',
            'blockus:polished_basalt_bricks',
            'blockus:polished_basalt_bricks_stairs',
            'blockus:polished_basalt_bricks_slab',
            'blockus:chiseled_polished_basalt',
            'blockus:cracked_polished_basalt_bricks',
            'blockus:polished_basalt_pillar',
            'blockus:zigzagged_polished_basalt',
            'blockus:polished_basalt_circle_pavement'
        ]
    })
    event.addJson("blockus:tags/items/obsidian.json", {
        "replace": false,
        "values": [
            'blockus:obsidian_bricks',
            'blockus:obsidian_bricks_stairs',
            'blockus:obsidian_bricks_slab',
            'blockus:obsidian_bricks_wall',
            'blockus:cracked_obsidian_bricks',
            'blockus:small_obsidian_bricks',
            'blockus:small_obsidian_bricks_stairs',
            'blockus:small_obsidian_bricks_slab',
            'blockus:small_obsidian_bricks_wall',
            'blockus:obsidian_pillar',
            'blockus:obsidian_circle_pavement',
            'blockus:glowing_obsidian',
            'blockus:legacy_crying_obsidian',
            'blockus:legacy_glowing_obsidian'
        ]
    })
    event.addJson("blockus:tags/items/soul_sandstone.json", {
        "replace": false,
        "values": [
            'blockus:soul_sandstone',
            'blockus:soul_sandstone_slab',
            'blockus:soul_sandstone_stairs',
            'blockus:rough_soul_sandstone',
            'blockus:rough_soul_sandstone_slab',
            'blockus:rough_soul_sandstone_stairs',
            'blockus:smooth_soul_sandstone',
            'blockus:smooth_soul_sandstone_slab',
            'blockus:smooth_soul_sandstone_stairs',
            'blockus:soul_sandstone_bricks',
            'blockus:soul_sandstone_bricks_slab',
            'blockus:soul_sandstone_bricks_stairs',
            'blockus:small_soul_sandstone_bricks',
            'blockus:small_soul_sandstone_bricks_slab',
            'blockus:small_soul_sandstone_bricks_stairs',
            'blockus:cut_soul_sandstone',
            'blockus:cut_soul_sandstone_slab',
            'blockus:chiseled_soul_sandstone',
            'blockus:gold_decorated_soul_sandstone',
            'blockus:lapis_decorated_soul_sandstone',
            'blockus:soul_sandstone_pillar'
        ]
    })
    event.addJson("blockus:tags/items/red_sandstone.json", {
        "replace": false,
        "values": [
            'blockus:rough_red_sandstone',
            'blockus:rough_red_sandstone_slab',
            'blockus:rough_red_sandstone_stairs',
            'blockus:red_sandstone_bricks',
            'blockus:red_sandstone_bricks_slab',
            'blockus:red_sandstone_bricks_stairs',
            'blockus:small_red_sandstone_bricks',
            'blockus:small_red_sandstone_bricks_slab',
            'blockus:small_red_sandstone_bricks_stairs',
            'blockus:gold_decorated_red_sandstone',
            'blockus:lapis_decorated_red_sandstone',
            'blockus:red_sandstone_pillar'
        ]
    })
    event.addJson("blockus:tags/items/sandstone.json", {
        "replace": false,
        "values": [
            'blockus:rough_sandstone',
            'blockus:rough_sandstone_slab',
            'blockus:rough_sandstone_stairs',
            'blockus:sandstone_bricks',
            'blockus:sandstone_bricks_slab',
            'blockus:sandstone_bricks_stairs',
            'blockus:small_sandstone_bricks',
            'blockus:small_sandstone_bricks_slab',
            'blockus:small_sandstone_bricks_stairs',
            'blockus:gold_decorated_sandstone',
            'blockus:lapis_decorated_sandstone',
            'blockus:sandstone_pillar'
        ]
    })
    event.addJson("blockus:tags/items/bricks_blocks.json", {
        "replace": false,
        "values": [
            'blockus:large_bricks',
            'blockus:large_bricks_stairs',
            'blockus:large_bricks_slab',
            'blockus:zigzagged_bricks',
            'blockus:soaked_bricks',
            'blockus:soaked_bricks_stairs',
            'blockus:soaked_bricks_slab',
            'blockus:zigzagged_soaked_bricks',
            'blockus:sandy_bricks',
            'blockus:sandy_bricks_stairs',
            'blockus:sandy_bricks_slab',
            'blockus:zigzagged_sandy_bricks',
            'blockus:charred_bricks',
            'blockus:charred_bricks_stairs',
            'blockus:charred_bricks_slab',
            'blockus:zigzagged_charred_bricks'
        ]
    })
    event.addJson("blockus:tags/items/purpur_blocks.json", {
        "replace": false,
        "values": [
            'blockus:purpur_bricks',
            'blockus:purpur_bricks_stairs',
            'blockus:purpur_bricks_slab',
            'blockus:smooth_purpur',
            'blockus:smooth_purpur_stairs',
            'blockus:smooth_purpur_slab',
            'blockus:purpur_squares',
            'blockus:purpur_little_bricks',
            'blockus:purpur_little_bricks_stairs',
            'blockus:purpur_little_bricks_slab',
            'blockus:chiseled_purpur',
            'blockus:purpur_lines',
            '#blockus:phantom_purpur_blocks'
        ]
    })
    event.addJson("blockus:tags/items/phantom_purpur_blocks.json", {
        "replace": false,
        "values": [
            'blockus:phantom_purpur_block',
            'blockus:phantom_purpur_slab',
            'blockus:phantom_purpur_stairs',
            'blockus:phantom_purpur_pillar',
            'blockus:phantom_purpur_bricks',
            'blockus:phantom_purpur_bricks_stairs',
            'blockus:phantom_purpur_bricks_slab',
            'blockus:smooth_phantom_purpur',
            'blockus:smooth_phantom_purpur_stairs',
            'blockus:smooth_phantom_purpur_slab',
            'blockus:phantom_purpur_squares',
            'blockus:phantom_purpur_little_bricks',
            'blockus:phantom_purpur_little_bricks_stairs',
            'blockus:phantom_purpur_little_bricks_slab',
            'blockus:chiseled_phantom_purpur',
            'blockus:phantom_purpur_lines'
        ]
    })
    event.addJson("blockus:tags/items/end_stone_blocks.json", {
        "replace": false,
        "values": [
            'blockus:chiseled_end_stone_bricks',
            'blockus:zigzagged_end_stone_bricks',
            'blockus:polished_end_stone',
            'blockus:polished_end_stone_stairs',
            'blockus:polished_end_stone_slab',
            'blockus:cracked_end_stone_bricks',
            'blockus:end_stone_pillar',
            'blockus:small_end_stone_bricks',
            'blockus:small_end_stone_bricks_stairs',
            'blockus:small_end_stone_bricks_slab',
            'blockus:purpur_decorated_end_stone',
            'blockus:phantom_purpur_decorated_end_stone',
        ]
    })
    event.addJson("blockus:tags/items/quartz_blocks.json", {
        "replace": false,
        "values": [
            'blockus:quartz_bricks',
            'blockus:quartz_tiles_stairs',
            'blockus:quartz_tiles_slab',
            'blockus:quartz_circle_pavement'
        ]
    })
    event.addJson("blockus:tags/items/rainbow_blocks.json", {
        "replace": false,
        "values": [
            'blockus:rainbow_block',
            'blockus:rainbow_bricks',
            'blockus:rainbow_bricks_stairs',
            'blockus:rainbow_bricks_slab'
        ]
    })
    event.addJson("blockus:tags/items/blackstone_blocks.json", {
        "replace": false,
        "values": [
            'blockus:polished_blackstone_pillar',
            'blockus:zigzagged_polished_blackstone',
            'blockus:polished_blackstone_circle_pavement',
            'blockus:crimson_warty_blackstone_bricks',
            'blockus:crimson_warty_blackstone_bricks_stairs',
            'blockus:crimson_warty_blackstone_bricks_slab',
            'blockus:warped_warty_blackstone_bricks',
            'blockus:warped_warty_blackstone_bricks_stairs',
            'blockus:warped_warty_blackstone_bricks_slab',
            'blockus:gold_decorated_polished_blackstone',
            'blockus:sturdy_blackstone'
        ]
    })
})

onEvent('tags.blocks', event => {
    color.forEach((colorI) => {
        event.add('biomemakeover:tapestries', 'biomemakeover:' + colorI + '_tapestry')
        event.add('biomemakeover:tapestries', 'biomemakeover:' + colorI + '_wall_tapestry')
    })
    var buildingBlockPlanks = ["ancient_oak", "swamp_cypress", "willow", "blighted_balsa"]
    buildingBlockPlanks.forEach((colorI) => {
        event.add('minecraft:signs', 'biomemakeover:' + colorI + '_sign')
        event.add('minecraft:signs', 'biomemakeover:' + colorI + '_wall_sign')
    })
})