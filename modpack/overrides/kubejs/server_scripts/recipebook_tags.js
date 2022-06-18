onEvent('server.datapack.high_priority', function (event) {
    event.addJson("tagged-recipe-book:tags/items/crafting/equipment.json", {
        "replace": false,
        "values": [
            'terrestria:log_turner',
            "#fabric:tools/knives",
            'farmersdelight:rope',
            'minecraft:ladder',
            'minecraft:carrot_on_a_stick',
            'minecraft:warped_fungus_on_a_stick',
            "gofish:simple_lure",
            "gofish:soul_lure",
            "gofish:blaze_rod",
            "gofish:diamond_reinforced_rod"
        ]
    })
    event.addJson("tagged-recipe-book:tags/items/crafting/building_blocks.json", {
        "replace": false,
        "values": [
            'farmersdelight:tatami',
            'farmersdelight:straw_bale',
            'farmersdelight:rice_bale',
            'farmersdelight:carrot_crate',
            'farmersdelight:potato_crate',
            'farmersdelight:beetroot_crate',
            'farmersdelight:cabbage_crate',
            'farmersdelight:tomato_crate',
            'farmersdelight:onion_crate',
            'farmersdelight:rice_bag',
            'farmersdelight:organic_compost',
            'blockus:paper_wall',
            'blockus:wooden_frame',
            'blockus:honeycomb_bricks',
            'blockus:honeycomb_bricks_slab',
            'blockus:honeycomb_bricks_stairs',
            'blockus:honeycomb_bricks_wall',
            'blockus:paper_lamp',
            'blockus:thatch',
            'blockus:thatch_slab',
            'blockus:thatch_stairs',
            'blockus:sturdy_blackstone',
            'blockus:smooth_stone_stairs',
            'blockus:snow_bricks',
            'blockus:snow_bricks_slab',
            'blockus:snow_bricks_stairs',
            'blockus:soul_o_lantern',
            'blockus:ice_bricks',
            "blockus:oak_timber_frame",
            "blockus:oak_diagonal_timber_frame",
            "blockus:oak_cross_timber_frame",
            "blockus:gold_decorated_polished_blackstone",
            "blockus:gold_decorated_red_sandstone",
            "blockus:gold_decorated_soul_sandstone",
            "blockus:gold_decorated_sandstone",
            "blockus:lapis_decorated_red_sandstone",
            "blockus:lapis_decorated_soul_sandstone",
            "blockus:lapis_decorated_sandstone",
            "blockus:netherite_stairs",
            "blockus:netherite_slab",
            "blockus:charcoal_block",
            "blockus:rotten_flesh_block",
            "blockus:sugar_block",
            "blockus:membrane_block",
            "blockus:paper_block",
            "blockus:caution_block",
            "blockus:smooth_nether_bricks",
            "blockus:golden_bars",
            'biomemakeover:mesmerite',
            'biomemakeover:polished_mesmerite',
            'biomemakeover:mossy_dried_peat_bricks',
            'biomemakeover:mossy_dried_peat_brick_slab',
            'biomemakeover:mossy_dried_peat_brick_stairs',
            'biomemakeover:mossy_dried_peat_brick_wall',
            'biomemakeover:mossy_peat',
            'biomemakeover:dried_peat_bricks',
            'biomemakeover:dried_peat_bricks_slab',
            'biomemakeover:dried_peat_bricks_stairs',
            'biomemakeover:dried_peat_bricks_wall',
            'biomemakeover:cracked_dried_peat_bricks',
            'biomemakeover:cracked_dried_peat_brick_slab',
            'biomemakeover:cracked_dried_peat_brick_stairs',
            'biomemakeover:cracked_dried_peat_brick_wall',
            'biomemakeover:blighted_stone_bricks',
            'biomemakeover:blighted_cobblestone',
            'biomemakeover:cladded_stone',
            'biomemakeover:illunite_block',
            'biomemakeover:brown_mushroom_brick',
            'biomemakeover:red_mushroom_brick',
            'biomemakeover:mushroom_stem_brick',
            'cinderscapes:ash_block',
            'terrestria:basalt_bricks',
            'terrestria:mossy_basalt_bricks',
            'terrestria:chiseled_basalt_bricks',
            'terrestria:mossy_basalt_cobblestone',
            "minecraft:lantern",
            "minecraft:soul_lantern",
            "minecraft:honeycomb_block",
            "minecraft:iron_bars",
            "minecraft:end_rod",
            "minecraft:item_frame",
            "minecraft:painting",
            "#blockus:shingles",
            "#blockus:food_crates",
            "#blockus:colored_tiles",
            "#blockus:small_hedges",
            '#blockus:limestone',
            '#blockus:marble',
            "#blockus:bluestone",
            '#blockus:diorite_blocks',
            '#blockus:granite_blocks',
            '#blockus:andesite_blocks',
            '#blockus:basalt_blocks',
            '#blockus:obsidian',
            '#blockus:soul_sandstone',
            '#blockus:red_sandstone',
            '#blockus:sandstone',
            '#blockus:bricks_blocks',
            '#blockus:purpur_blocks',
            '#blockus:end_stone_blocks',
            '#blockus:quartz_blocks',
            '#blockus:rainbow_blocks',
            '#blockus:blackstone_blocks',
            "#minecraft:logs",
            "#minecraft:fences",
            "#minecraft:slabs",
            "#minecraft:stairs",
            "#minecraft:walls",
            "#minecraft:wool",
            "#minecraft:planks",
            "#minecraft:signs",
            "#minecraft:carpets",
            "#minecraft:banners",
        ]
    })
    event.addJson("tagged-recipe-book:tags/items/crafting/redstone.json", {
        "replace": false,
        "values": [
            'minecraft:honey_block',
            'minecraft:slime_block',
            'minecraft:jukebox',
            "minecraft:minecart",
            "minecraft:chest_minecart",
            "minecraft:hopper_minecart",
            "minecraft:tnt_minecart",
            "minecraft:furnace_minecart",
            "blockus:redstone_sand",
            "blockus:polished_basalt_button",
            "#minecraft:doors",
            "#minecraft:buttons",
            "#minecraft:pressure_plates",
            "#minecraft:trapdoors",
            "#minecraft:rails",
            'blockus:iron_gate',
            'blockus:golden_gate',
            'phonos:loudspeaker',
            'phonos:radio_jukebox',
            'phonos:radio_note_block',
            'biomemakeover:poltergeist'
        ]
    })

    event.addJson("tagged-recipe-book:tags/items/furnace/food.json", {
        "replace": false,
        "values": [
        ]
    })
    event.addJson("tagged-recipe-book:tags/items/furnace/blocks.json", {
        "replace": false,
        "values": [
        ]
    })

    event.addJson("tagged-recipe-book:tags/items/blast_furnace/blocks.json", {
        "replace": false,
        "values": [
        ]
    })
})
onEvent('tags.items', event => {
    var toolTiers = ["wooden", "stone", "iron", "golden", "diamond", "netherite"]
    toolTiers.forEach((colorI) => {
        event.add('tagged-recipe-book:crafting/equipment', 'harvest_scythes:' + colorI + '_scythe')
        event.add('tagged-recipe-book:crafting/equipment', 'harvest_scythes:' + colorI + '_machete')
    })
    event.add('tagged-recipe-book:crafting/building_blocks', 'minecraft:glass_pane')
    event.add('tagged-recipe-book:crafting/building_blocks', 'blockus:rainbow_glass')
    event.add('tagged-recipe-book:crafting/building_blocks', 'blockus:rainbow_glass_pane')
    event.add('tagged-recipe-book:crafting/building_blocks', 'blockus:beveled_glass')
    event.add('tagged-recipe-book:crafting/building_blocks', 'blockus:beveled_glass_pane')
    event.add('tagged-recipe-book:crafting/building_blocks', 'blockus:rainbow_beveled_glass')
    event.add('tagged-recipe-book:crafting/building_blocks', 'blockus:rainbow_beveled_glass_pane')
    event.add('tagged-recipe-book:crafting/building_blocks', 'blockus:redstone_lamp_lit')
    event.add('tagged-recipe-book:crafting/building_blocks', 'blockus:rainbow_lamp_lit')
    event.add('tagged-recipe-book:crafting/building_blocks', 'blockus:paper_lamp')
    event.add('tagged-recipe-book:crafting/redstone', 'blockus:rainbow_lamp')
    event.add('tagged-recipe-book:crafting/building_blocks', 'biomemakeover:terracotta_bricks')
    color.forEach((colorI) => {
        event.add('tagged-recipe-book:crafting/building_blocks', 'blockus:' + colorI + '_beveled_glass')
        event.add('tagged-recipe-book:crafting/building_blocks', 'blockus:' + colorI + '_beveled_glass_pane')
        event.add('tagged-recipe-book:crafting/building_blocks', 'minecraft:' + colorI + '_stained_glass')
        event.add('tagged-recipe-book:crafting/building_blocks', 'minecraft:' + colorI + '_stained_glass_pane')
        event.add('tagged-recipe-book:crafting/building_blocks', 'blockus:' + colorI + '_concrete_bricks')
        event.add('tagged-recipe-book:crafting/building_blocks', 'blockus:' + colorI + '_concrete_brick_slab')
        event.add('tagged-recipe-book:crafting/building_blocks', 'blockus:' + colorI + '_concrete_brick_stairs')
        if (colorI != 'black') {
            event.add('tagged-recipe-book:crafting/redstone', 'blockus:' + colorI + '_redstone_lamp')
            event.add('tagged-recipe-book:crafting/building_blocks', 'blockus:' + colorI + '_redstone_lamp_lit')
        }
        event.add('tagged-recipe-book:crafting/building_blocks', 'biomemakeover:' + colorI + '_terracotta_bricks')
    })
    var logs = [
        ['biomemakeover', 'willow'],
        ['biomemakeover', 'ancient_oak'],
        ['biomemakeover', 'blighted_balsa'],
        ['biomemakeover', 'swamp_cypress'],
        ['traverse', 'fir'],
        ['terrestria', 'japanese_maple'],
        ['terrestria', 'redwood'],
        ['terrestria', 'hemlock'],
        ['terrestria', 'rubber'],
        ['terrestria', 'cypress'],
        ['terrestria', 'willow'],
        ['terrestria', 'sakura'],
        ['terrestria', 'yucca_palm'],
        ['blockus', 'bamboo'],
        ['blockus', 'white_oak'],
        ['cinderscapes', 'umbral'],
        ['cinderscapes', 'scorched'],
        ['terrestria', 'rainbow_eucalyptus'],
        ['minecraft', 'oak'],
        ['minecraft', 'spruce'],
        ['minecraft', 'birch'],
        ['minecraft', 'jungle'],
        ['minecraft', 'acacia'],
        ['minecraft', 'dark_oak'],
        ['minecraft', 'crimson'],
        ['minecraft', 'warped'],
    ]
    var wooden_things = ["slab", "wood", "fence", "fence_gate", "stairs", "planks", "sign"]
    //lol
    console.setMuted(true)
    for (let [namespace, log] of logs) {
        wooden_things.forEach(model => {
            if (log == 'umbral' && model == 'wood') {
                event.add(namespace + ':' + log, namespace + ':' + log + '_hyphae')
            }
            if (log == 'scorched' && model == 'wood') {
                event.add(namespace + ':' + log, namespace + ':' + log + '_hyphae')
            }
            if (log == 'warped' && model == 'wood') {
                event.add(namespace + ':' + log, namespace + ':' + log + '_hyphae')
            }
            if (log == 'crimson' && model == 'wood') {
                event.add(namespace + ':' + log, namespace + ':' + log + '_hyphae')
            }
            event.add(namespace + ':' + log, namespace + ':' + log + '_' + model)
        })
        //
        //
        //
        if (log == 'warped') {
            event.add(namespace + ':' + log, namespace + ':stripped_' + log + '_hyphae')
        }
        if (log == 'crimson') {
            event.add(namespace + ':' + log, namespace + ':stripped_' + log + '_hyphae')
        }
        if (log == 'umbral') {
            event.add(namespace + ':' + log, namespace + ':stripped_' + log + '_hyphae')
        }
        if (log == 'scorched') {
            event.add(namespace + ':' + log, namespace + ':stripped_' + log + '_hyphae')
        }
        event.add(namespace + ':' + log, namespace + ':stripped_' + log + '_wood')
    }
    console.setMuted(false)
    for (let [namespace, log] of logs) {
        event.add('tagged-recipe-book:crafting/redstone', namespace + ':' + log + '_fence_gate')
    }
    var glowShroomColors = ['purple', 'green', 'orange']
    glowShroomColors.forEach((colorI) => {
        event.add('tagged-recipe-book:crafting/building_blocks', 'biomemakeover:' + colorI + '_glowshroom_brick')
    })
    event.add('tagged-recipe-book:crafting/building_blocks', 'biomemakeover:glowshroom_stem_brick')
})