onEvent('server.datapack.high_priority', function (event) {
    let advancementTemplate = (inputItem, recipeItem) => {
        var condition = {};
        if (inputItem.startsWith('#')) {
            var sterileInputItem = inputItem.replace('#', '')
            condition = {
                items: [
                    {
                        tag: sterileInputItem
                    }
                ]
            }
        } else if (inputItem == null || inputItem == 'minecraft:air') {
            console.error('variable inputItem can\'t be null or equal air. You probably mistyped something. Currently inputItem is' + inputItem)
        } else {
            condition = {
                items: [
                    {
                        item: inputItem
                    }
                ]
            }
        }
        var recipeID = recipeItem.replace(":", "_")
        event.addJson("gofish:advancements/recipes/" + recipeID + ".json", {
            parent: "minecraft:recipes/root",
            criteria: {
                has_item: {
                    trigger: "minecraft:inventory_changed",
                    conditions: condition
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
    let advancements = [
        ['minecraft:blaze_rod', 'gofish:blaze_rod'],
        ['minecraft:diamond', 'gofish:diamond_reinforced_rod'],
        //fishes
        ['gofish:ender_eel', 'gofish:eye_of_ender_from_ender_eel'],
        ['gofish:icicle_fish', 'gofish:blue_ice_from_icice_fish'],
        ['gofish:lilyfish', 'gofish:lilypad_from_lilyfish'],
        ['gofish:matrix_fish', 'gofish:end_crystal'],
        ['gofish:seaweed', 'gofish:baked_seaweed'],
        ['gofish:seaweed', 'gofish:baked_seaweed_from_smoking'],
        ['gofish:seaweed', 'gofish:baked_seaweed_from_campfire_cooking'],
        ['gofish:seaweed_eel', 'gofish:seaweed_from_seaweed_eel'],
        ['gofish:slimefish', 'gofish:slime_ball_from_slimefish'],
        ['gofish:carrot_carp', 'gofish:baked_carrot_carp'],
        ['gofish:carrot_carp', 'gofish:baked_carrot_carp_from_smoking'],
        ['gofish:carrot_carp', 'gofish:baked_carrot_carp_from_campfire_cooking'],
        ['gofish:blackstone_trout', 'gofish:grilled_blackstone_trout'],
        ['gofish:blackstone_trout', 'gofish:grilled_blackstone_trout_from_smoking'],
        ['gofish:blackstone_trout', 'gofish:grilled_blackstone_trout_from_campfire_cooking'],
        ['gofish:grilled_blackstone_trout', 'gofish:grilled_blackstone_deluxe'],
        ['gofish:bonefish', 'gofish:bonemeal_from_bonefish'],
        ['gofish:simple_lure', 'gofish:soul_lure'],
        ['gofish:magma_cod', 'gofish:magma_from_magma_cod'],
        ['gofish:basalt_bass', 'gofish:basalt_from_basalt_bass'],
        ['gofish:obsidian_halibut', 'gofish:obsidian_from_obsidian_halibut'],
        ['gofish:endfish', 'gofish:baked_endfish'],
        ['gofish:endfish', 'gofish:baked_endfish_from_smoking'],
        ['gofish:endfish', 'gofish:baked_endfish_from_campfire_cooking'],
        ['gofish:baked_endfish', 'gofish:endfish_and_chorus'],
        ['gofish:rainy_bass', 'gofish:water_bucket_from_rainy_bass'],
        ['gofish:rainy_bass', 'gofish:steamed_bass'],
        ['gofish:rainy_bass', 'gofish:steamed_bass_from_smoking'],
        ['gofish:rainy_bass', 'gofish:steamed_bass_from_campfire_cooking'],
        ['gofish:cloudy_crab', 'gofish:smoked_cloudy_crab'],
        ['gofish:blizzard_bass', 'gofish:ice_from_blizzard_bass'],
        ['gofish:blizzard_bass', 'gofish:packed_ice_from_blizzard_bass'],
    ];
    for (let [input, recipe] of advancements) {
        advancementTemplate(input, recipe)
    }
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