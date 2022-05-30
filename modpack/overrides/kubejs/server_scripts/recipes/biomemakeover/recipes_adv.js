onEvent('server.datapack.high_priority', function (event) {
    var buildingBlockPlanks = ["ancient_oak", "swamp_cypress", "willow", "blighted_balsa"]
    buildingBlockPlanks.forEach((plank) => {
        event.addJson("biomemakeover:advancements/recipes/" + plank + "_stairs.json", {
            parent: "minecraft:recipes/root",
            criteria: {
                has_planks: {
                    trigger: "minecraft:inventory_changed",
                    conditions: {
                        items: [
                            {
                                item: "biomemakeover:" + plank + "_planks"
                            }
                        ]
                    }
                },
                has_the_recipe: {
                    trigger: "minecraft:recipe_unlocked",
                    conditions: {
                        recipe: "biomemakeover:" + plank + "_stairs"
                    }
                }
            },
            requirements: [
                [
                    "has_planks",
                    "has_the_recipe"
                ]
            ],
            rewards: {
                recipes: [
                    "biomemakeover:" + plank + "_stairs"
                ]
            }
        }
        )
        event.addJson('biomemakeover:advancements/recipes/' + plank + '_slab.json', {
            parent: "minecraft:recipes/root",
            criteria: {
                has_planks: {
                    trigger: "minecraft:inventory_changed",
                    conditions: {
                        items: [
                            {
                                item: "biomemakeover:" + plank + "_planks"
                            }
                        ]
                    }
                },
                has_the_recipe: {
                    trigger: "minecraft:recipe_unlocked",
                    conditions: {
                        recipe: "biomemakeover:" + plank + "_slab"
                    }
                }
            },
            requirements: [
                [
                    "has_planks",
                    "has_the_recipe"
                ]
            ],
            rewards: {
                recipes: [
                    "biomemakeover:" + plank + "_slab"
                ]
            }
        })
        event.addJson('biomemakeover:advancements/recipes/' + plank + '_door.json', {
            parent: "minecraft:recipes/root",
            criteria: {
                has_planks: {
                    trigger: "minecraft:inventory_changed",
                    conditions: {
                        items: [
                            {
                                item: "biomemakeover:" + plank + "_planks"
                            }
                        ]
                    }
                },
                has_the_recipe: {
                    trigger: "minecraft:recipe_unlocked",
                    conditions: {
                        recipe: "biomemakeover:" + plank + "_door"
                    }
                }
            },
            requirements: [
                [
                    "has_planks",
                    "has_the_recipe"
                ]
            ],
            rewards: {
                recipes: [
                    "biomemakeover:" + plank + "_door"
                ]
            }
        })
        event.addJson('biomemakeover:advancements/recipes/' + plank + '_trapdoor.json', {
            parent: "minecraft:recipes/root",
            criteria: {
                has_planks: {
                    trigger: "minecraft:inventory_changed",
                    conditions: {
                        items: [
                            {
                                item: "biomemakeover:" + plank + "_planks"
                            }
                        ]
                    }
                },
                has_the_recipe: {
                    trigger: "minecraft:recipe_unlocked",
                    conditions: {
                        recipe: "biomemakeover:" + plank + "_trapdoor"
                    }
                }
            },
            requirements: [
                [
                    "has_planks",
                    "has_the_recipe"
                ]
            ],
            rewards: {
                recipes: [
                    "biomemakeover:" + plank + "_trapdoor"
                ]
            }
        })
        event.addJson('biomemakeover:advancements/recipes/' + plank + '_fence.json', {
            parent: "minecraft:recipes/root",
            criteria: {
                has_planks: {
                    trigger: "minecraft:inventory_changed",
                    conditions: {
                        items: [
                            {
                                item: "biomemakeover:" + plank + "_planks"
                            }
                        ]
                    }
                },
                has_the_recipe: {
                    trigger: "minecraft:recipe_unlocked",
                    conditions: {
                        recipe: "biomemakeover:" + plank + "_fence"
                    }
                }
            },
            requirements: [
                [
                    "has_planks",
                    "has_the_recipe"
                ]
            ],
            rewards: {
                recipes: [
                    "biomemakeover:" + plank + "_fence"
                ]
            }
        })
        event.addJson('biomemakeover:advancements/recipes/' + plank + '_fence_gate.json', {
            parent: "minecraft:recipes/root",
            criteria: {
                has_planks: {
                    trigger: "minecraft:inventory_changed",
                    conditions: {
                        items: [
                            {
                                item: "biomemakeover:" + plank + "_planks"
                            }
                        ]
                    }
                },
                has_the_recipe: {
                    trigger: "minecraft:recipe_unlocked",
                    conditions: {
                        recipe: "biomemakeover:" + plank + "_fence_gate"
                    }
                }
            },
            requirements: [
                [
                    "has_planks",
                    "has_the_recipe"
                ]
            ],
            rewards: {
                recipes: [
                    "biomemakeover:" + plank + "_fence_gate"
                ]
            }
        })
        event.addJson('biomemakeover:advancements/recipes/' + plank + '_sign.json', {
            parent: "minecraft:recipes/root",
            criteria: {
                has_planks: {
                    trigger: "minecraft:inventory_changed",
                    conditions: {
                        items: [
                            {
                                item: "biomemakeover:" + plank + "_planks"
                            }
                        ]
                    }
                },
                has_the_recipe: {
                    trigger: "minecraft:recipe_unlocked",
                    conditions: {
                        recipe: "biomemakeover:" + plank + "_sign"
                    }
                }
            },
            requirements: [
                [
                    "has_planks",
                    "has_the_recipe"
                ]
            ],
            rewards: {
                recipes: [
                    "biomemakeover:" + plank + "_sign"
                ]
            }
        })
        event.addJson('biomemakeover:advancements/recipes/' + plank + '_button.json', {
            parent: "minecraft:recipes/root",
            criteria: {
                has_planks: {
                    trigger: "minecraft:inventory_changed",
                    conditions: {
                        items: [
                            {
                                item: "biomemakeover:" + plank + "_planks"
                            }
                        ]
                    }
                },
                has_the_recipe: {
                    trigger: "minecraft:recipe_unlocked",
                    conditions: {
                        recipe: "biomemakeover:" + plank + "_button"
                    }
                }
            },
            requirements: [
                [
                    "has_planks",
                    "has_the_recipe"
                ]
            ],
            rewards: {
                recipes: [
                    "biomemakeover:" + plank + "_button"
                ]
            }
        })
        event.addJson('biomemakeover:advancements/recipes/' + plank + '_pressure_plate.json', {
            parent: "minecraft:recipes/root",
            criteria: {
                has_planks: {
                    trigger: "minecraft:inventory_changed",
                    conditions: {
                        items: [
                            {
                                item: "biomemakeover:" + plank + "_planks"
                            }
                        ]
                    }
                },
                has_the_recipe: {
                    trigger: "minecraft:recipe_unlocked",
                    conditions: {
                        recipe: "biomemakeover:" + plank + "_pressure_plate"
                    }
                }
            },
            requirements: [
                [
                    "has_planks",
                    "has_the_recipe"
                ]
            ],
            rewards: {
                recipes: [
                    "biomemakeover:" + plank + "_pressure_plate"
                ]
            }
        })
    });
    //planks
    buildingBlockPlanks.forEach((wood) => {
        event.addJson("biomemakeover:advancements/recipes/" + wood + "_planks.json", {
            parent: "minecraft:recipes/root",
            criteria: {
                has_item: {
                    trigger: "minecraft:inventory_changed",
                    conditions: {
                        items: [
                            {
                                tag: "biomemakeover:" + wood + "_logs"
                            }
                        ]
                    }
                },
                has_the_recipe: {
                    trigger: "minecraft:recipe_unlocked",
                    conditions: {
                        recipe: "biomemakeover:" + wood + "_planks"
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
                    "biomemakeover:" + wood + "_planks"
                ]
            }
        })
    });
    //wood
    buildingBlockPlanks.forEach((plank) => {
        event.addJson("biomemakeover:advancements/recipes/" + plank + "_wood.json", {
            parent: "minecraft:recipes/root",
            criteria: {
                has_planks: {
                    trigger: "minecraft:inventory_changed",
                    conditions: {
                        items: [
                            {
                                item: "biomemakeover:" + plank + "_log"
                            }
                        ]
                    }
                },
                has_the_recipe: {
                    trigger: "minecraft:recipe_unlocked",
                    conditions: {
                        recipe: "biomemakeover:" + plank + "_wood"
                    }
                }
            },
            requirements: [
                [
                    "has_planks",
                    "has_the_recipe"
                ]
            ],
            rewards: {
                recipes: [
                    "biomemakeover:" + plank + "_wood"
                ]
            }
        })
        event.addJson('biomemakeover:advancements/recipes/' + plank + '_planks_stripped.json', {
            parent: "minecraft:recipes/root",
            criteria: {
                has_planks: {
                    trigger: "minecraft:inventory_changed",
                    conditions: {
                        items: [
                            {
                                item: "biomemakeover:stripped_" + plank + "_log"
                            }
                        ]
                    }
                },
                has_the_recipe: {
                    trigger: "minecraft:recipe_unlocked",
                    conditions: {
                        recipe: "biomemakeover:stripped_" + plank + "_wood"
                    }
                }
            },
            requirements: [
                [
                    "has_planks",
                    "has_the_recipe"
                ]
            ],
            rewards: {
                recipes: [
                    "biomemakeover:stripped_" + plank + "_wood"
                ]
            }
        })
    });
    //shroomsbricks & bricks
    var buildingBricks = ["red_mushroom_brick", "brown_mushroom_brick", "green_glowshroom_brick", "purple_glowshroom_brick", "orange_glowshroom_brick", "glowshroom_stem_brick", "mushroom_stem_brick", "blighted_cobblestone", "blighted_stone_bricks", "dried_peat_bricks", "cracked_dried_peat_bricks", "mossy_dried_peat_bricks", "mesmerite", "polished_mesmerite"]
    buildingBricks.forEach((brick) => {
        var input
        if (brick.includes("cracked_dried_peat_bricks")) { input = "cracked_dried_peat_brick" }
        else if (brick.includes("mossy_dried_peat_bricks")) { input = "mossy_dried_peat_brick" }
        else { input = brick }
        event.addJson("biomemakeover:advancements/recipes/" + input + "_wall.json", {
            parent: "minecraft:recipes/root",
            criteria: {
                has_bricks: {
                    trigger: "minecraft:inventory_changed",
                    conditions: {
                        items: [
                            {
                                item: "biomemakeover:" + brick
                            }
                        ]
                    }
                },
                has_the_recipe: {
                    trigger: "minecraft:recipe_unlocked",
                    conditions: {
                        recipe: "biomemakeover:" + input + "_wall"
                    }
                }
            },
            requirements: [
                [
                    "has_bricks",
                    "has_the_recipe"
                ]
            ],
            rewards: {
                recipes: [
                    "biomemakeover:" + input + "_wall"
                ]
            }
        })
        event.addJson("biomemakeover:advancements/recipes/" + input + "_slab.json", {
            parent: "minecraft:recipes/root",
            criteria: {
                has_bricks: {
                    trigger: "minecraft:inventory_changed",
                    conditions: {
                        items: [
                            {
                                item: "biomemakeover:" + brick
                            }
                        ]
                    }
                },
                has_the_recipe: {
                    trigger: "minecraft:recipe_unlocked",
                    conditions: {
                        recipe: "biomemakeover:" + input + "_slab"
                    }
                }
            },
            requirements: [
                [
                    "has_bricks",
                    "has_the_recipe"
                ]
            ],
            rewards: {
                recipes: [
                    "biomemakeover:" + input + "_slab"
                ]
            }
        })
        event.addJson("biomemakeover:advancements/recipes/" + input + "_stairs.json", {
            parent: "minecraft:recipes/root",
            criteria: {
                has_bricks: {
                    trigger: "minecraft:inventory_changed",
                    conditions: {
                        items: [
                            {
                                item: "biomemakeover:" + brick
                            }
                        ]
                    }
                },
                has_the_recipe: {
                    trigger: "minecraft:recipe_unlocked",
                    conditions: {
                        recipe: "biomemakeover:" + input + "_stairs"
                    }
                }
            },
            requirements: [
                [
                    "has_bricks",
                    "has_the_recipe"
                ]
            ],
            rewards: {
                recipes: [
                    "biomemakeover:" + input + "_stairs"
                ]
            }
        })
        //console.log(input)
    });
    //"terracotta_bricks"
    color.forEach((col) => {
        event.addJson("biomemakeover:advancements/recipes/" + col + "_terracotta_brick_wall.json", {
            parent: "minecraft:recipes/root",
            criteria: {
                has_bricks: {
                    trigger: "minecraft:inventory_changed",
                    conditions: {
                        items: [
                            {
                                item: "biomemakeover:" + col + "_terracotta_bricks"
                            }
                        ]
                    }
                },
                has_the_recipe: {
                    trigger: "minecraft:recipe_unlocked",
                    conditions: {
                        recipe: "biomemakeover:" + col + "_terracotta_brick_wall"
                    }
                }
            },
            requirements: [
                [
                    "has_bricks",
                    "has_the_recipe"
                ]
            ],
            rewards: {
                recipes: [
                    "biomemakeover:" + col + "_terracotta_brick_wall"
                ]
            }
        });
        event.addJson("biomemakeover:advancements/recipes/" + col + "_terracotta_brick_slab.json", {
            parent: "minecraft:recipes/root",
            criteria: {
                has_bricks: {
                    trigger: "minecraft:inventory_changed",
                    conditions: {
                        items: [
                            {
                                item: "biomemakeover:" + col + "_terracotta_bricks"
                            }
                        ]
                    }
                },
                has_the_recipe: {
                    trigger: "minecraft:recipe_unlocked",
                    conditions: {
                        recipe: "biomemakeover:" + col + "_terracotta_brick_slab"
                    }
                }
            },
            requirements: [
                [
                    "has_bricks",
                    "has_the_recipe"
                ]
            ],
            rewards: {
                recipes: [
                    "biomemakeover:" + col + "_terracotta_brick_slab"
                ]
            }
        });
        event.addJson("biomemakeover:advancements/recipes/" + col + "_terracotta_brick_stairs.json", {
            parent: "minecraft:recipes/root",
            criteria: {
                has_bricks: {
                    trigger: "minecraft:inventory_changed",
                    conditions: {
                        items: [
                            {
                                item: "biomemakeover:" + col + "_terracotta_bricks"
                            }
                        ]
                    }
                },
                has_the_recipe: {
                    trigger: "minecraft:recipe_unlocked",
                    conditions: {
                        recipe: "biomemakeover:" + col + "_terracotta_brick_stairs"
                    }
                }
            },
            requirements: [
                [
                    "has_bricks",
                    "has_the_recipe"
                ]
            ],
            rewards: {
                recipes: [
                    "biomemakeover:" + col + "_terracotta_brick_stairs"
                ]
            }
        })
        //console.log("biomemakeover:" + col + "_terracotta_brick_slab")
    });
    //boats
    buildingBlockPlanks.forEach((boat) => {
        event.addJson("biomemakeover:advancements/recipes/" + boat + "_boat.json", {
            parent: "minecraft:recipes/root",
            criteria: {
                in_water: {
                    trigger: "minecraft:enter_block",
                    conditions: {
                        block: "minecraft:water"
                    }
                },
                has_the_recipe: {
                    trigger: "minecraft:recipe_unlocked",
                    conditions: {
                        recipe: "biomemakeover:" + boat + "_boat"
                    }
                }
            },
            requirements: [
                [
                    "in_water",
                    "has_the_recipe"
                ]
            ],
            rewards: {
                recipes: [
                    "biomemakeover:" + boat + "_boat"
                ]
            }
        }
        )
    })
    //armor hell yeeeeeeeeaaaaaaaaaaaaaah
    var claddedArmor = ["cladded_helmet", "cladded_chestplate", "cladded_leggings", "cladded_boots"]
    claddedArmor.forEach((armor) => {
        event.addJson("biomemakeover:advancements/recipes/" + armor + "_boat.json", {
            parent: "minecraft:recipes/root",
            criteria: {
                has_cladding: {
                    trigger: "minecraft:inventory_changed",
                    conditions: {
                        items: [
                            {
                                item: "biomemakeover:crude_cladding"
                            }
                        ]
                    }
                },
                has_the_recipe: {
                    trigger: "minecraft:recipe_unlocked",
                    conditions: {
                        recipe: "biomemakeover:" + armor + "_smithing"
                    }
                }
            },
            requirements: [
                [
                    "has_cladding",
                    "has_the_recipe"
                ]
            ],
            rewards: {
                recipes: [
                    "biomemakeover:" + armor + "_smithing"
                ]
            }
        }
        )
    })
    event.addJson("biomemakeover:advancements/recipes/cladded_stone.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_cladding: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "biomemakeover:crude_cladding"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "biomemakeover:cladded_stone"
                }
            }
        },
        requirements: [
            [
                "has_cladding",
                "has_the_recipe"
            ]
        ],
        rewards: {
            recipes: [
                "biomemakeover:cladded_stone"
            ]
        }
    }
    )
    event.addJson("biomemakeover:advancements/recipes/magenta_petal.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_cladding: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "biomemakeover:water_lily"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "biomemakeover:magenta_petals_from_water_lily"
                }
            }
        },
        requirements: [
            [
                "has_cladding",
                "has_the_recipe"
            ]
        ],
        rewards: {
            recipes: [
                "biomemakeover:magenta_petals_from_water_lily"
            ]
        }
    }
    )
    //foods
    event.addJson("biomemakeover:advancements/recipes/roasted_bulbus_root.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_bulbus: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "biomemakeover:bulbus_root"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "biomemakeover:roasted_bulbus_root"
                }
            }
        },
        requirements: [
            [
                "has_bulbus",
                "has_the_recipe"
            ]
        ],
        rewards: {
            recipes: [
                "biomemakeover:roasted_bulbus_root"
            ]
        }
    }
    )
    event.addJson("biomemakeover:advancements/recipes/cooked_toad.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_toad: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "biomemakeover:raw_toad"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "biomemakeover:cooked_toad"
                }
            }
        },
        requirements: [
            [
                "has_toad",
                "has_the_recipe"
            ]
        ],
        rewards: {
            recipes: [
                "biomemakeover:cooked_toad"
            ]
        }
    }
    )
    event.addJson("biomemakeover:advancements/recipes/cooked_glowfish.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_fish: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "biomemakeover:glowfish"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "biomemakeover:cooked_glowfish"
                }
            }
        },
        requirements: [
            [
                "has_fish",
                "has_the_recipe"
            ]
        ],
        rewards: {
            recipes: [
                "biomemakeover:cooked_glowfish"
            ]
        }
    }
    )
    //foods from smoking
    event.addJson("biomemakeover:advancements/recipes/roasted_bulbus_root_from_smoking.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_bulbus: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "biomemakeover:bulbus_root"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "biomemakeover:roasted_bulbus_root_from_smoking"
                }
            }
        },
        requirements: [
            [
                "has_bulbus",
                "has_the_recipe"
            ]
        ],
        rewards: {
            recipes: [
                "biomemakeover:roasted_bulbus_root_from_smoking"
            ]
        }
    }
    )
    event.addJson("biomemakeover:advancements/recipes/cooked_toad_from_smoking.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_toad: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "biomemakeover:raw_toad"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "biomemakeover:cooked_toad_from_smoking"
                }
            }
        },
        requirements: [
            [
                "has_toad",
                "has_the_recipe"
            ]
        ],
        rewards: {
            recipes: [
                "biomemakeover:cooked_toad_from_smoking"
            ]
        }
    }
    )
    event.addJson("biomemakeover:advancements/recipes/cooked_glowfish_from_smoking.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_fish: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "biomemakeover:glowfish"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "biomemakeover:cooked_glowfish_from_smoking"
                }
            }
        },
        requirements: [
            [
                "has_fish",
                "has_the_recipe"
            ]
        ],
        rewards: {
            recipes: [
                "biomemakeover:cooked_glowfish_from_smoking"
            ]
        }
    }
    )
    //lone stew
    event.addJson("biomemakeover:advancements/recipes/glowshroom_stew.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_purple_shroom: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "biomemakeover:purple_glowshroom"
                        }
                    ]
                }
            },
            has_green_shroom: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "biomemakeover:green_glowshroom"
                        }
                    ]
                }
            },
            has_orange_shroom: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "biomemakeover:orange_glowshroom"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "biomemakeover:glowshroom_stew"
                }
            }
        },
        requirements: [
            [
                "has_purple_shroom",
                "has_the_recipe"
            ],
            [
                "has_green_shroom",
                "has_the_recipe"
            ],
            [
                "has_orange_shroom",
                "has_the_recipe"
            ]
        ],
        rewards: {
            recipes: [
                "biomemakeover:glowshroom_stew"
            ]
        }
    }
    )
    //even more bricks
    //blighted ones
    event.addJson("biomemakeover:advancements/recipes/blighted_cobblestone.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_mycelium: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "biomemakeover:mycelium_roots"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "biomemakeover:blighted_cobblestone"
                }
            }
        },
        requirements: [
            [
                "has_mycelium",
                "has_the_recipe"
            ]
        ],
        rewards: {
            recipes: [
                "biomemakeover:blighted_cobblestone"
            ]
        }
    }
    )
    event.addJson("biomemakeover:advancements/recipes/blighted_stone_bricks.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_mycelium: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "biomemakeover:mycelium_roots"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "biomemakeover:blighted_stone_bricks"
                }
            }
        },
        requirements: [
            [
                "has_mycelium",
                "has_the_recipe"
            ]
        ],
        rewards: {
            recipes: [
                "biomemakeover:blighted_stone_bricks"
            ]
        }
    }
    )
    event.addJson("biomemakeover:advancements/recipes/blighted_stone_brick_2x2.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_blighted_cobblestone: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "biomemakeover:blighted_cobblestone"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "biomemakeover:blighted_stone_brick_2x2"
                }
            }
        },
        requirements: [
            [
                "has_blighted_cobblestone",
                "has_the_recipe"
            ]
        ],
        rewards: {
            recipes: [
                "biomemakeover:blighted_stone_brick_2x2"
            ]
        }
    }
    )
    //shroom bricks
    event.addJson("biomemakeover:advancements/recipes/red_mushroom_brick.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_shroom: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "minecraft:red_mushroom_block"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "biomemakeover:red_mushroom_brick"
                }
            }
        },
        requirements: [
            [
                "has_shroom",
                "has_the_recipe"
            ]
        ],
        rewards: {
            recipes: [
                "biomemakeover:red_mushroom_brick"
            ]
        }
    }
    )
    event.addJson("biomemakeover:advancements/recipes/brown_mushroom_brick.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_shroom: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "minecraft:brown_mushroom_block"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "biomemakeover:brown_mushroom_brick"
                }
            }
        },
        requirements: [
            [
                "has_shroom",
                "has_the_recipe"
            ]
        ],
        rewards: {
            recipes: [
                "biomemakeover:brown_mushroom_brick"
            ]
        }
    }
    )
    event.addJson("biomemakeover:advancements/recipes/purple_glowshroom_brick.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_shroom: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "biomemakeover:purple_glowshroom_block"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "biomemakeover:purple_glowshroom_brick"
                }
            }
        },
        requirements: [
            [
                "has_shroom",
                "has_the_recipe"
            ]
        ],
        rewards: {
            recipes: [
                "biomemakeover:purple_glowshroom_brick"
            ]
        }
    }
    )
    event.addJson("biomemakeover:advancements/recipes/green_glowshroom_brick.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_shroom: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "biomemakeover:green_glowshroom_block"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "biomemakeover:green_glowshroom_brick"
                }
            }
        },
        requirements: [
            [
                "has_shroom",
                "has_the_recipe"
            ]
        ],
        rewards: {
            recipes: [
                "biomemakeover:green_glowshroom_brick"
            ]
        }
    }
    )
    event.addJson("biomemakeover:advancements/recipes/orange_glowshroom_brick.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_shroom: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "biomemakeover:orange_glowshroom_block"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "biomemakeover:orange_glowshroom_brick"
                }
            }
        },
        requirements: [
            [
                "has_shroom",
                "has_the_recipe"
            ]
        ],
        rewards: {
            recipes: [
                "biomemakeover:orange_glowshroom_brick"
            ]
        }
    }
    )
    //stems
    event.addJson("biomemakeover:advancements/recipes/glowshroom_stem_brick.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_shroom: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "biomemakeover:glowshroom_stem"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "biomemakeover:glowshroom_stem_brick"
                }
            }
        },
        requirements: [
            [
                "has_shroom",
                "has_the_recipe"
            ]
        ],
        rewards: {
            recipes: [
                "biomemakeover:glowshroom_stem_brick"
            ]
        }
    }
    )
    event.addJson("biomemakeover:advancements/recipes/mushroom_stem_brick.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_shroom: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "minecraft:mushroom_stem"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "biomemakeover:mushroom_stem_brick"
                }
            }
        },
        requirements: [
            [
                "has_shroom",
                "has_the_recipe"
            ]
        ],
        rewards: {
            recipes: [
                "biomemakeover:mushroom_stem_brick"
            ]
        }
    }
    )
    //altar & poltergeist
    event.addJson("biomemakeover:advancements/recipes/altar.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_shard: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "biomemakeover:illunite_shard"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "biomemakeover:altar"
                }
            }
        },
        requirements: [
            [
                "has_shard",
                "has_the_recipe"
            ]
        ],
        rewards: {
            recipes: [
                "biomemakeover:altar"
            ]
        }
    }
    )
    event.addJson("biomemakeover:advancements/recipes/poltergeist.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_plasm: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "biomemakeover:ectoplasm"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "biomemakeover:poltergeist"
                }
            }
        },
        requirements: [
            [
                "has_plasm",
                "has_the_recipe"
            ]
        ],
        rewards: {
            recipes: [
                "biomemakeover:poltergeist"
            ]
        }
    }
    )
    //stunt_powder
    event.addJson("biomemakeover:advancements/recipes/stunt_powder.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_shard: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "biomemakeover:illunite_shard"
                        }
                    ]
                }
            },
            has_bulbus: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "biomemakeover:bulbus_root"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "biomemakeover:stunt_powder"
                }
            }
        },
        requirements: [
            [
                "has_shard",
                "has_bulbus",
                "has_the_recipe"
            ]
        ],
        rewards: {
            recipes: [
                "biomemakeover:stunt_powder"
            ]
        }
    }
    )
    //flowers
    event.addJson("biomemakeover:advancements/recipes/white_dye_from_swamp_azalea.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_flower: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "biomemakeover:swamp_azalea"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "biomemakeover:white_dye_from_swamp_azalea"
                }
            }
        },
        requirements: [
            [
                "has_flower",
                "has_the_recipe"
            ]
        ],
        rewards: {
            recipes: [
                "biomemakeover:white_dye_from_swamp_azalea"
            ]
        }
    }
    )
    event.addJson("biomemakeover:advancements/recipes/orange_dye_from_marigold.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_flower: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "biomemakeover:marigold"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "biomemakeover:orange_dye_from_marigold"
                }
            }
        },
        requirements: [
            [
                "has_flower",
                "has_the_recipe"
            ]
        ],
        rewards: {
            recipes: [
                "biomemakeover:orange_dye_from_marigold"
            ]
        }
    }
    )
    event.addJson("biomemakeover:advancements/recipes/black_dye_from_black_thistle.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_flower: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "biomemakeover:black_thistle"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "biomemakeover:black_dye_from_black_thistle"
                }
            }
        },
        requirements: [
            [
                "has_flower",
                "has_the_recipe"
            ]
        ],
        rewards: {
            recipes: [
                "biomemakeover:black_dye_from_black_thistle"
            ]
        }
    }
    )
    event.addJson("biomemakeover:advancements/recipes/purple_dye_from_foxglove.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_flower: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "biomemakeover:foxglove"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "biomemakeover:purple_dye_from_foxglove"
                }
            }
        },
        requirements: [
            [
                "has_flower",
                "has_the_recipe"
            ]
        ],
        rewards: {
            recipes: [
                "biomemakeover:purple_dye_from_foxglove"
            ]
        }
    }
    )
    //membrane
    event.addJson("biomemakeover:advancements/recipes/phantom_membrane.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_scales: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "biomemakeover:moth_scales"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "biomemakeover:phantom_membrane"
                }
            }
        },
        requirements: [
            [
                "has_scales",
                "has_the_recipe"
            ]
        ],
        rewards: {
            recipes: [
                "biomemakeover:phantom_membrane"
            ]
        }
    })
    //more peat
    event.addJson("biomemakeover:advancements/recipes/dried_peat.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_peat: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "biomemakeover:peat"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "biomemakeover:dried_peat"
                }
            }
        },
        requirements: [
            [
                "has_peat",
                "has_the_recipe"
            ]
        ],
        rewards: {
            recipes: [
                "biomemakeover:dried_peat"
            ]
        }
    })
    event.addJson("biomemakeover:advancements/recipes/dried_peat_bricks.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_item: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "biomemakeover:dried_peat"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "biomemakeover:dried_peat_bricks"
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
                "biomemakeover:dried_peat_bricks"
            ]
        }
    })
    event.addJson("biomemakeover:advancements/recipes/mossy_peat.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_peat: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "biomemakeover:peat"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "biomemakeover:mossy_peat"
                }
            }
        },
        requirements: [
            [
                "has_peat",
                "has_the_recipe"
            ]
        ],
        rewards: {
            recipes: [
                "biomemakeover:mossy_peat"
            ]
        }
    })
    event.addJson("biomemakeover:advancements/recipes/mossy_dried_peat_brick.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_item: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "biomemakeover:dried_peat_bricks"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "biomemakeover:mossy_dried_peat_brick"
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
                "biomemakeover:mossy_dried_peat_brick"
            ]
        }
    })
    event.addJson("biomemakeover:advancements/recipes/cracked_dried_peat_bricks.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_item: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "biomemakeover:dried_peat_bricks"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "biomemakeover:cracked_dried_peat_bricks"
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
                "biomemakeover:cracked_dried_peat_bricks"
            ]
        }
    })
    //polished mesmerite
    event.addJson("biomemakeover:advancements/recipes/polished_mesmerite.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_item: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "biomemakeover:mesmerite"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "biomemakeover:polished_mesmerite"
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
                "biomemakeover:polished_mesmerite"
            ]
        }
    })
    //mesmerite stone
    event.addJson("biomemakeover:advancements/recipes/mesmerite.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_item: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "biomemakeover:illunite_shard"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "biomemakeover:mesmerite"
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
                "biomemakeover:mesmerite"
            ]
        }
    })
    var petalColor = ["magenta", "light_blue", "pink", "gray", "cyan", "purple", "blue", "brown"]
    petalColor.forEach((petal) => {
        event.addJson("biomemakeover:advancements/recipes/" + petal + "_dye_from_" + petal + "_petal.json", {
            parent: "minecraft:recipes/root",
            criteria: {
                has_petal: {
                    trigger: "minecraft:inventory_changed",
                    conditions: {
                        items: [
                            {
                                item: "biomemakeover:" + petal + "_petals"
                            }
                        ]
                    }
                },
                has_the_recipe: {
                    trigger: "minecraft:recipe_unlocked",
                    conditions: {
                        recipe: "biomemakeover:" + petal + "_dye_from_" + petal + "_petal"
                    }
                }
            },
            requirements: [
                [
                    "has_petal",
                    "has_the_recipe"
                ]
            ],
            rewards: {
                recipes: [
                    "biomemakeover:" + petal + "_dye_from_" + petal + "_petal"
                ]
            }
        }
        )
    })
    //illunite block and back
    event.addJson("biomemakeover:advancements/recipes/illunite_block.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_item: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "biomemakeover:illunite_shard"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "biomemakeover:illunite_block"
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
                "biomemakeover:illunite_block"
            ]
        }
    })
    event.addJson("biomemakeover:advancements/recipes/illunite_shard_from_block.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_item: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "biomemakeover:illunite_block"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "biomemakeover:illunite_shard_from_block"
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
                "biomemakeover:illunite_shard_from_block"
            ]
        }
    })
})