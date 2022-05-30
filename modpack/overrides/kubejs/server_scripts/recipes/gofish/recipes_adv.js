onEvent('server.datapack.high_priority', function (event) {
    let advancementTemplate = (inputItem, recipeItem) => {
        var recipeID = recipeItem.replace(":", "_")
        event.addJson("gofish:advancements/recipes/" + recipeID + ".json", {
            parent: "minecraft:recipes/root",
            criteria: {
                has_item: {
                    trigger: "minecraft:inventory_changed",
                    conditions: {
                        items: [
                            {
                                item: inputItem
                            }
                        ]
                    }
                },
                has_the_recipe: {
                    trigger: "minecraft:recipe_unlocked",
                    conditions: {
                        recipe: recipeItem
                    }
                }
            },
            requirements: [
                [
                    "has_item",
                    "has_the_recipe"
                ]
            ],
            rewards: {
                recipes: [
                    recipeItem
                ]
            }
        })
    }
    advancementTemplate('minecraft:blaze_rod', 'gofish:blaze_rod')
    advancementTemplate('minecraft:diamond', 'gofish:diamond_reinforced_rod')
    //fishes
    advancementTemplate('gofish:ender_eel', 'gofish:eye_of_ender_from_ender_eel')
    advancementTemplate('gofish:icicle_fish', 'gofish:blue_ice_from_icice_fish')
    advancementTemplate('gofish:lilyfish', 'gofish:lilypad_from_lilyfish')
    advancementTemplate('gofish:matrix_fish', 'gofish:end_crystal')
    advancementTemplate('gofish:seaweed', 'gofish:baked_seaweed')
    advancementTemplate('gofish:seaweed', 'gofish:baked_seaweed_from_smoking')
    advancementTemplate('gofish:seaweed', 'gofish:baked_seaweed_from_campfire_cooking')
    advancementTemplate('gofish:seaweed_eel', 'gofish:seaweed_from_seaweed_eel')
    advancementTemplate('gofish:slimefish', 'gofish:slime_ball_from_slimefish')
    advancementTemplate('gofish:carrot_carp', 'gofish:baked_carrot_carp')
    advancementTemplate('gofish:carrot_carp', 'gofish:baked_carrot_carp_from_smoking')
    advancementTemplate('gofish:carrot_carp', 'gofish:baked_carrot_carp_from_campfire_cooking')
    advancementTemplate('gofish:blackstone_trout', 'gofish:grilled_blackstone_trout')
    advancementTemplate('gofish:blackstone_trout', 'gofish:grilled_blackstone_trout_from_smoking')
    advancementTemplate('gofish:blackstone_trout', 'gofish:grilled_blackstone_trout_from_campfire_cooking')
    advancementTemplate('gofish:grilled_blackstone_trout', 'gofish:grilled_blackstone_deluxe')
    advancementTemplate('gofish:bonefish', 'gofish:bonemeal_from_bonefish')
    advancementTemplate('gofish:simple_lure', 'gofish:soul_lure')
    advancementTemplate('gofish:magma_cod', 'gofish:magma_from_magma_cod')
    advancementTemplate('gofish:basalt_bass', 'gofish:basalt_from_basalt_bass')
    advancementTemplate('gofish:obsidian_halibut', 'gofish:obsidian_from_obsidian_halibut')
    advancementTemplate('gofish:endfish', 'gofish:baked_endfish')
    advancementTemplate('gofish:endfish', 'gofish:baked_endfish_from_smoking')
    advancementTemplate('gofish:endfish', 'gofish:baked_endfish_from_campfire_cooking')
    advancementTemplate('gofish:baked_endfish', 'gofish:endfish_and_chorus')
    event.addJson("gofish:advancements/recipes/aquatic_astral_stew.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_lunarfish: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "gofish:lunarfish"
                        }
                    ]
                }
            },
            has_starfish: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "gofish:galaxy_starfish"
                        }
                    ]
                }
            },
            has_salmon: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "gofish:starry_salmon"
                        }
                    ]
                }
            },
            has_swordfish: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "gofish:nebula_swordfish"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "gofish:aquatic_astral_stew"
                }
            }
        },
        requirements: [
            [
                "has_lunarfish",
                "has_the_recipe"
            ],
            [
                "has_starfish",
                "has_the_recipe"
            ],
            [
                "has_salmon",
                "has_the_recipe"
            ],
            [
                "has_swordfish",
                "has_the_recipe"
            ]
        ],
        rewards: {
            recipes: [
                "gofish:aquatic_astral_stew"
            ]
        }
    })
    advancementTemplate('gofish:rainy_bass', 'gofish:water_bucket_from_rainy_bass')
    advancementTemplate('gofish:rainy_bass', 'gofish:steamed_bass')
    advancementTemplate('gofish:rainy_bass', 'gofish:steamed_bass_from_smoking')
    advancementTemplate('gofish:rainy_bass', 'gofish:steamed_bass_from_campfire_cooking')
    advancementTemplate('gofish:cloudy_crab', 'gofish:smoked_cloudy_crab')
    advancementTemplate('gofish:blizzard_bass', 'gofish:ice_from_blizzard_bass')
    advancementTemplate('gofish:blizzard_bass', 'gofish:packed_ice_from_blizzard_bass')
    /*
*/
    event.addJson("gofish:advancements/recipes/simple_lure.json", {
        "parent": "minecraft:recipes/root",
        "criteria": {
          "fishing_rod_hooked": {
            "trigger": "minecraft:fishing_rod_hooked"
          },
          "has_recipe": {
            "trigger": "minecraft:recipe_unlocked",
            "conditions": {
              "recipe": "gofish:simple_lure"
            }
          }
        },
        "requirements": [
          [
            "fishing_rod_hooked",
            "has_recipe"
          ]
        ],
        "rewards": {
          "recipes": [
            "gofish:simple_lure"
          ]
        }
      }
      )
})