onEvent('recipes', event => {
    var bruhMoment = ["lava_bricks", "lava_polished_blackstone", "water_bricks", "magma_bricks", "small_magma_brick", "blaze_bricks", "blaze", "polished_netherrack", "smooth_red_nether_bricks", "netherrack_brick", "netherrack", "charred_nether_bricks", "smooth_charred_nether_bricks", "charred_nether", "teal_nether", "teal_nether_brick", "soaked_bricks", "charred_bricks"]
    bruhMoment.forEach((block) => {
        event.remove({output: "blockus:" + block})
        event.remove({output: "blockus:" + block + "_wall"})
        event.remove({output: "blockus:zigzagged_" + block})
        event.remove({output: "blockus:zigzagged_" + block + "s"})
        event.remove({output: "blockus:" + block + "_bricks"})
        event.remove({output: "blockus:" + block + "s"})
        event.remove({output: "blockus:" + block + "_stairs"})
        event.remove({output: "blockus:" + block + "_slab"})
        event.remove({output: "blockus:chiseled_" + block})
        event.remove({output: "blockus:" + block + "_pillar"})
        event.remove({output: "blockus:" + block + "_circle_pavement"})
        event.remove({output: "blockus:smooth_" + block})
        event.remove({output: "blockus:smooth_" + block + "s"})
    })
    var threeVariantBlocks = ["charred"]
    threeVariantBlocks.forEach((block) => {
        event.remove({output: "blockus:" + block})
        event.remove({output: "blockus:" + block + "_planks"})
        event.remove({output: "blockus:" + block + "_slab"})
        event.remove({output: "blockus:" + block + "_stairs"})
        event.remove({output: "blockus:" + block + "_wall"})
        event.remove({output: "blockus:" + block + "_fence"})
    })
    var smallLogs = ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak", "warped", "crimson", "white_oak"]
    smallLogs.forEach((block) => {
        event.remove({output: "blockus:" + block + "_small_logs"})
        event.remove({output: "blockus:" + block + "_small_stems"})
    })
    var timberFrames = ["spruce", "birch", "jungle", "acacia", "dark_oak", "warped", "crimson", "white_oak", "bamboo", "charred"]
    timberFrames.forEach((block) => {
        event.remove({output: "blockus:" + block + "_timber_frame"})
        event.remove({output: "blockus:" + block + "_diagonal_timber_frame"})
        event.remove({output: "blockus:" + block + "_cross_timber_frame"})
    })
    color.forEach((block) => {
        event.remove({output: "blockus:" + block + "_stone_bricks"})
        event.remove({output: "blockus:" + block + "_stone_brick_wall"})
        event.remove({output: "blockus:" + block + "_stone_brick_stairs"})
        event.remove({output: "blockus:" + block + "_stone_brick_slab"})
    })
    color.forEach((block) => {
        event.remove({output: "blockus:" + block + "_futurneo_block"})
        event.remove({output: "blockus:gray_bright_futurneo_block"})
        event.remove({output: "blockus:rainbow_futurneo_block"})
    })
    color.forEach((block) => {
        event.remove({output: "blockus:" + block + "_asphalt"})
        event.remove({output: "blockus:asphalt"})
        event.remove({output: "blockus:asphalt_stairs"})
        event.remove({output: "blockus:asphalt_slab"})
        event.remove({output: "blockus:" + block + "_asphalt_stairs"})
        event.remove({output: "blockus:" + block + "_asphalt_slab"})
    })
    color.forEach((block) => {
        event.remove({output: "blockus:" + block + "_colored_tiles"})
        event.remove({output: "blockus:rainbow_colored_tiles"})
    })
    var plating = ["gold", "iron"]
    plating.forEach((block) => {
        event.remove({output: "blockus:" + block + "_plating"})
        event.remove({output: "blockus:" + block + "_plating_stairs"})
        event.remove({output: "blockus:" + block + "_plating_slab"})
    })
    var barrel = ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak", "warped", "crimson", "white_oak", "bamboo", "charred"]
    barrel.forEach((block) => {
        event.remove({output: "blockus:" + block + "_barrel"})
    })
    //barrelfix
    event.remove({output: "minecraft:barrel"})
    event.shaped('minecraft:barrel', [
        "PSP",
        "P P",
        "PSP"
      ], {
        "P": {
          "tag": "minecraft:planks"
        },
        "S": {
          "tag": "minecraft:wooden_slabs"
        }
      })
    //legacy bullshit
    //PS who would ever want to build with that?????
    event.remove({output: "blockus:legacy_first_grass_block"})
    event.remove({output: "blockus:legacy_grass_block"})
    event.remove({output: "blockus:legacy_leaves"})
    event.remove({output: "blockus:legacy_bricks"})
    event.remove({output: "blockus:legacy_planks"})
    event.remove({output: "blockus:legacy_first_cobblestone"})
    event.remove({output: "blockus:legacy_cobblestone"})
    event.remove({output: "blockus:legacy_mossy_cobblestone"})
    event.remove({output: "blockus:legacy_gravel"})
    event.remove({output: "blockus:legacy_iron_block"})
    event.remove({output: "blockus:legacy_gold_block"})
    event.remove({output: "blockus:legacy_coal_block"})
    event.remove({output: "blockus:legacy_explosion_proof_gold_block"})
    event.remove({output: "blockus:legacy_diamond_block"})
    event.remove({output: "blockus:legacy_lapis_block"})
    event.remove({output: "blockus:legacy_sponge"})
    event.remove({output: "blockus:legacy_crying_obsidian"})
    event.remove({output: "blockus:legacy_glowstone"})
    event.remove({output: "blockus:legacy_stonecutter"})
    event.remove({output: "blockus:legacy_glowing_obsidian"})
    event.remove({output: "blockus:legacy_nether_reactor_core"})
    //aaaahhh
    event.remove({output: "blockus:blaze_block"})
    event.remove({output: "blockus:glowing_obsidian"})
    event.remove({output: "blockus:rainbow_block"})
    event.remove({output: "blockus:carrot_crate"})
    event.remove({output: "blockus:beetroot_crate"})
    event.remove({output: "blockus:potato_crate"})
    event.remove({output: "blockus:chorus_block"})
    event.remove({output: "blockus:cookie_block"})
    event.remove({output: "blockus:stars_block"})
    event.remove({output: "blockus:companion_cube"})
    event.remove({output: "blockus:weight_storage_cube"})
    event.remove({output: "blockus:love_block"})
    event.remove({output: "blockus:ender_block"})
    event.remove({output: "blockus:nether_stars_block"})
    event.remove({output: "blockus:charred_button"})
    event.remove({output: "blockus:polished_netherrack_button"})
    event.remove({output: "blockus:charred_pressure_plate"})
    event.remove({output: "blockus:polished_netherrack_pressure_plate"})
    event.remove({output: "blockus:charred_trapdoor"})
    event.remove({output: "blockus:charred_door"})
    event.remove({output: "blockus:charred_fence_gate"})
    event.remove({output: "blockus:soul_lantern_block"})
    event.remove({output: "blockus:lantern_block"})
    event.remove({output: "blockus:sturdy_stone"})
    event.remove({id: "blockus:golden_carrot_crate_from_carrot_crate"})
    event.shaped('blockus:golden_carrot_crate', [
        'CCC',
        'CGC',
        'CCC'
      ], {
        C: 'minecraft:gold_ingot',
        G: 'farmersdelight:carrot_crate'
      }).id("golden_carrot_crate_from_carrot_crate")
})