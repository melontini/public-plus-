onEvent('server.datapack.high_priority', function (event) {
    /*event.addJson("blockus:advancements/recipes/smooth_stone_stairs.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_planks: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "minecraft:smooth_stone"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "blockus:smooth_stone_stairs"
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
                "blockus:smooth_stone_stairs"
            ]
        }
    })*/
    event.addJson("blockus:advancements/recipes/smooth_stone_stairs.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_planks: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "minecraft:smooth_stone"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "blockus:smooth_stone_stairs"
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
                "blockus:smooth_stone_stairs"
            ]
        }
    })
    //stone bricks and stuff
    var varyingBricks = ["andesite", "granite", "diorite"]
    varyingBricks.forEach((brick) => {
        event.addJson("blockus:advancements/recipes/" + brick + "_bricks.json", {
            parent: "minecraft:recipes/root",
            criteria: {
                has_item: {
                    trigger: "minecraft:inventory_changed",
                    conditions: {
                        items: [
                            {
                                item: "minecraft:polished_" + brick
                            }
                        ]
                    }
                },
                has_the_recipe: {
                    trigger: "minecraft:recipe_unlocked",
                    conditions: {
                        recipe: "blockus:" + brick + "_bricks"
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
                    "blockus:" + brick + "_bricks"
                ]
            }
        })
        event.addJson("blockus:advancements/recipes/" + brick + "_bricks_stairs.json", {
            parent: "minecraft:recipes/root",
            criteria: {
                has_item: {
                    trigger: "minecraft:inventory_changed",
                    conditions: {
                        items: [
                            {
                                item: "blockus:" + brick + "_bricks"
                            }
                        ]
                    }
                },
                has_the_recipe: {
                    trigger: "minecraft:recipe_unlocked",
                    conditions: {
                        recipe: "blockus:" + brick + "_bricks_stairs"
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
                    "blockus:" + brick + "_bricks_stairs"
                ]
            }
        })
        event.addJson("blockus:advancements/recipes/" + brick + "_bricks_slab.json", {
            parent: "minecraft:recipes/root",
            criteria: {
                has_item: {
                    trigger: "minecraft:inventory_changed",
                    conditions: {
                        items: [
                            {
                                item: "blockus:" + brick + "_bricks"
                            }
                        ]
                    }
                },
                has_the_recipe: {
                    trigger: "minecraft:recipe_unlocked",
                    conditions: {
                        recipe: "blockus:" + brick + "_bricks_slab"
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
                    "blockus:" + brick + "_bricks_slab"
                ]
            }
        })
        event.addJson("blockus:advancements/recipes/cracked_" + brick + "_bricks.json", {
            parent: "minecraft:recipes/root",
            criteria: {
                has_item: {
                    trigger: "minecraft:inventory_changed",
                    conditions: {
                        items: [
                            {
                                item: "blockus:" + brick + "_bricks"
                            }
                        ]
                    }
                },
                has_the_recipe: {
                    trigger: "minecraft:recipe_unlocked",
                    conditions: {
                        recipe: "blockus:cracked_" + brick + "_bricks"
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
                    "blockus:cracked_" + brick + "_bricks"
                ]
            }
        })
    })
    //y
    var mossyBlackstone = ["crimson_warty_blackstone_bricks", "warped_warty_blackstone_bricks"]
    mossyBlackstone.forEach((brick) => {
        event.addJson("blockus:advancements/recipes/" + brick + "_stairs.json", {
            parent: "minecraft:recipes/root",
            criteria: {
                has_item: {
                    trigger: "minecraft:inventory_changed",
                    conditions: {
                        items: [
                            {
                                item: "blockus:" + brick
                            }
                        ]
                    }
                },
                has_the_recipe: {
                    trigger: "minecraft:recipe_unlocked",
                    conditions: {
                        recipe: "blockus:" + brick + "_stairs"
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
                    "blockus:" + brick + "_stairs"
                ]
            }
        })
        event.addJson("blockus:advancements/recipes/" + brick + "_slab.json", {
            parent: "minecraft:recipes/root",
            criteria: {
                has_item: {
                    trigger: "minecraft:inventory_changed",
                    conditions: {
                        items: [
                            {
                                item: "blockus:" + brick
                            }
                        ]
                    }
                },
                has_the_recipe: {
                    trigger: "minecraft:recipe_unlocked",
                    conditions: {
                        recipe: "blockus:" + brick + "_slab"
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
                    "blockus:" + brick + "_slab"
                ]
            }
        })
        event.addJson("blockus:advancements/recipes/crimson_warty_blackstone_bricks.json", {
            parent: "minecraft:recipes/root",
            criteria: {
                has_item: {
                    trigger: "minecraft:inventory_changed",
                    conditions: {
                        items: [
                            {
                                item: "minecraft:crimson_roots"
                            }
                        ]
                    }
                },
                has_the_recipe: {
                    trigger: "minecraft:recipe_unlocked",
                    conditions: {
                        recipe: "blockus:crimson_warty_blackstone_bricks"
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
                    "blockus:crimson_warty_blackstone_bricks"
                ]
            }
        })
        event.addJson("blockus:advancements/recipes/warped_warty_blackstone_bricks.json", {
            parent: "minecraft:recipes/root",
            criteria: {
                has_item: {
                    trigger: "minecraft:inventory_changed",
                    conditions: {
                        items: [
                            {
                                item: "minecraft:warped_roots"
                            }
                        ]
                    }
                },
                has_the_recipe: {
                    trigger: "minecraft:recipe_unlocked",
                    conditions: {
                        recipe: "blockus:warped_warty_blackstone_bricks"
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
                    "blockus:warped_warty_blackstone_bricks"
                ]
            }
        })
    })
    //gilded blackstone pillar
    event.addJson("blockus:advancements/recipes/gold_decorated_polished_blackstone.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_item: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "minecraft:polished_blackstone"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "blockus:gold_decorated_polished_blackstone"
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
                "blockus:gold_decorated_polished_blackstone"
            ]
        }
    })
    event.addJson("blockus:advancements/recipes/gold_decorated_polished_blackstone_2.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_item: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "minecraft:polished_blackstone"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "blockus:gold_decorated_polished_blackstone_2"
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
                "blockus:gold_decorated_polished_blackstone_2"
            ]
        }
    })
    var roughVars = ["slab", "stairs"]
    roughVars.forEach((brick) => {
        event.addJson("blockus:advancements/recipes/rough_basalt_" + brick + ".json", {
            parent: "minecraft:recipes/root",
            criteria: {
                has_item: {
                    trigger: "minecraft:inventory_changed",
                    conditions: {
                        items: [
                            {
                                item: "blockus:rough_basalt"
                            }
                        ]
                    }
                },
                has_the_recipe: {
                    trigger: "minecraft:recipe_unlocked",
                    conditions: {
                        recipe: "blockus:rough_basaltt_" + brick
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
                    "blockus:rough_basalt_" + brick
                ]
            }
        })
    })
    event.addJson("blockus:advancements/recipes/rough_basalt.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_item: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "minecraft:basalt"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "blockus:rough_basalt"
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
                "blockus:rough_basalt"
            ]
        }
    })
    //blacstoon droor
    event.addJson("blockus:advancements/recipes/blackstone_door.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_item: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "minecraft:blackstone"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "blockus:blackstone_door"
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
                "blockus:blackstone_door"
            ]
        }
    })
    event.addJson("blockus:advancements/recipes/blackstone_trapdoor.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_item: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "minecraft:blackstone"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "blockus:blackstone_trapdoor"
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
                "blockus:blackstone_trapdoor"
            ]
        }
    })
    //polished_basalt
    event.addJson("blockus:advancements/recipes/polished_basalt_bricks.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_item: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "minecraft:polished_basalt"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "blockus:polished_basalt_bricks"
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
                "blockus:polished_basalt_bricks"
            ]
        }
    })
    let advancementTemplate = (inputItem, recipeItem) => {
        var recipeID = recipeItem.replace(":", "_")
        event.addJson("blockus:advancements/recipes/" + recipeID + ".json", {
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
    advancementTemplate("blockus:polished_basalt_bricks", "blockus:polished_basalt_bricks_stairs")
    advancementTemplate("blockus:polished_basalt_bricks", "blockus:polished_basalt_bricks_slab")
    advancementTemplate("blockus:polished_basalt_bricks", "blockus:polished_basalt_bricks_wall")
    advancementTemplate("blockus:polished_basalt_bricks", "blockus:cracked_polished_basalt_bricks")
    var someBlockusBricks = ["limestone", "marble"]
    someBlockusBricks.forEach((brick) => {
        advancementTemplate("blockus:" + brick, "blockus:" + brick + "_stairs")
        advancementTemplate("blockus:" + brick, "blockus:" + brick + "_slab")
        advancementTemplate("blockus:" + brick, "blockus:" + brick + "_wall")
        advancementTemplate("blockus:" + brick, "blockus:polished_" + brick)
        advancementTemplate("blockus:polished_" + brick, "blockus:" + brick + "_bricks")
        advancementTemplate("blockus:" + brick + "_bricks", "blockus:" + brick + "_tiles")
        advancementTemplate("blockus:polished_" + brick, "blockus:polished_" + brick + "_stairs")
        advancementTemplate("blockus:polished_" + brick, "blockus:polished_" + brick + "_slab")
        advancementTemplate("blockus:polished_" + brick, "blockus:polished_" + brick + "_wall")
        advancementTemplate("blockus:" + brick + "_bricks", "blockus:" + brick + "_bricks_stairs")
        advancementTemplate("blockus:" + brick + "_bricks", "blockus:" + brick + "_bricks_slab")
        advancementTemplate("blockus:" + brick + "_bricks", "blockus:" + brick + "_bricks_wall")
        advancementTemplate("blockus:small_" + brick + "_bricks", "blockus:small_" + brick + "_bricks_stairs")
        advancementTemplate("blockus:small_" + brick + "_bricks", "blockus:small_" + brick + "_bricks_slab")
        advancementTemplate("blockus:small_" + brick + "_bricks", "blockus:small_" + brick + "_bricks_wall")
        advancementTemplate("blockus:" + brick + "_tiles", "blockus:" + brick + "_tile_stairs")
        advancementTemplate("blockus:" + brick + "_tiles", "blockus:" + brick + "_tile_slab")
        advancementTemplate("blockus:" + brick + "_tiles", "blockus:" + brick + "_tile_wall")
    })
    advancementTemplate("blockus:bluestone", "blockus:bluestone_stairs")
    advancementTemplate("blockus:bluestone", "blockus:bluestone_slab")
    advancementTemplate("blockus:bluestone", "blockus:bluestone_wall")
    advancementTemplate("blockus:bluestone", "blockus:polished_bluestone")
    advancementTemplate("blockus:smooth_bluestone", "blockus:bluestone_bricks")
    advancementTemplate("blockus:bluestone_bricks", "blockus:bluestone_tiles")
    advancementTemplate("blockus:smooth_bluestone", "blockus:polished_bluestone_stairs")
    advancementTemplate("blockus:smooth_bluestone", "blockus:polished_bluestone_slab")
    advancementTemplate("blockus:smooth_bluestone", "blockus:polished_bluestone_wall")
    advancementTemplate("blockus:bluestone_bricks", "blockus:bluestone_bricks_stairs")
    advancementTemplate("blockus:bluestone_bricks", "blockus:bluestone_bricks_slab")
    advancementTemplate("blockus:bluestone_bricks", "blockus:bluestone_bricks_wall")
    advancementTemplate("blockus:bluestone_little_bricks", "blockus:small_bluestone_bricks_stairs")
    advancementTemplate("blockus:bluestone_little_bricks", "blockus:small_bluestone_bricks_slab")
    advancementTemplate("blockus:bluestone_little_bricks", "blockus:small_bluestone_bricks_wall")
    advancementTemplate("blockus:bluestone_tiles", "blockus:bluestone_tiles_stairs")
    advancementTemplate("blockus:bluestone_tiles", "blockus:bluestone_tiles_slab")
    advancementTemplate("blockus:bluestone_tiles", "blockus:bluestone_tile_wall")
    //snowy
    advancementTemplate("minecraft:snow_block", "blockus:snow_bricks")
    advancementTemplate("blockus:snow_bricks", "blockus:snow_bricks_stairs")
    advancementTemplate("blockus:snow_bricks", "blockus:snow_bricks_slab")
    advancementTemplate("blockus:snow_bricks", "blockus:snow_bricks_wall")
    //ice-y
    event.addJson("blockus:advancements/recipes/ice_bricks.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_item: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            tag: "minecraft:ice"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "blockus:ice_bricks"
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
                "blockus:ice_bricks"
            ]
        }
    })
    advancementTemplate("minecraft:ice", "blockus:ice_bricks")
    advancementTemplate("minecraft:packed_ice", "blockus:ice_bricks")
    advancementTemplate("minecraft:blue_ice", "blockus:ice_bricks")
    advancementTemplate("blockus:ice_bricks", "blockus:ice_bricks_wall")
    //obsidian
    advancementTemplate("minecraft:obsidian", "blockus:obsidian_bricks")
    advancementTemplate("blockus:obsidian_bricks", "blockus:obsidian_bricks_stairs")
    advancementTemplate("blockus:obsidian_bricks", "blockus:obsidian_bricks_slab")
    advancementTemplate("blockus:obsidian_bricks", "blockus:obsidian_bricks_wall")
    advancementTemplate("blockus:small_obsidian_bricks", "blockus:small_obsidian_bricks_stairs")
    advancementTemplate("blockus:small_obsidian_bricks", "blockus:small_obsidian_bricks_slab")
    advancementTemplate("blockus:small_obsidian_bricks", "blockus:small_obsidian_bricks_wall")
    advancementTemplate("blockus:obsidian_bricks", "blockus:cracked_obsidian_bricks")
    advancementTemplate("minecraft:obsidian", "blockus:obsidian_reinforced_door")
    advancementTemplate("minecraft:obsidian", "blockus:obsidian_reinforced_trapdoor")
    //quartz
    advancementTemplate("blockus:quartz_bricks", "blockus:quartz_tiles_stairs")
    advancementTemplate("blockus:quartz_bricks", "blockus:quartz_tiles_slab")
    advancementTemplate("blockus:quartz_bricks", "blockus:quartz_tile_wall")
    //bricks
    advancementTemplate("minecraft:bricks", "blockus:large_bricks")
    advancementTemplate("blockus:large_bricks", "blockus:large_bricks_stairs")
    advancementTemplate("blockus:large_bricks", "blockus:large_bricks_slab")
    advancementTemplate("blockus:large_bricks", "blockus:large_bricks_wall")
    //sand_bricks
    advancementTemplate("minecraft:bricks", "blockus:sandy_bricks")
    advancementTemplate("minecraft:brick", "blockus:sandy_bricks_alt")
    advancementTemplate("blockus:sandy_bricks", "blockus:sandy_bricks_stairs")
    advancementTemplate("blockus:sandy_bricks", "blockus:sandy_bricks_slab")
    advancementTemplate("blockus:sandy_bricks", "blockus:sandy_bricks_wall")
    advancementTemplate("blockus:zigzagged_bricks", "blockus:zigzagged_sandy_bricks")
    //sand
    var sandBlocks = ["red_sandstone", "sandstone", "soul_sandstone"]
    sandBlocks.forEach((brick) => {
        advancementTemplate("minecraft:red_sandstone_slab", "blockus:rough_red_sandstone")
        advancementTemplate("minecraft:sandstone_slab", "blockus:rough_sandstone")
        advancementTemplate("blockus:soul_sandstone_slab", "blockus:rough_soul_sandstone")
        advancementTemplate("blockus:rough_" + brick, "blockus:rough_" + brick + "_stairs")
        advancementTemplate("blockus:rough_" + brick, "blockus:rough_" + brick + "_slab")
        advancementTemplate("blockus:" + brick + "_bricks", "blockus:" + brick + "_bricks_stairs")
        advancementTemplate("blockus:" + brick + "_bricks", "blockus:" + brick + "_bricks_slab")
        advancementTemplate("blockus:" + brick + "_bricks", "blockus:" + brick + "_bricks_wall")
        advancementTemplate("blockus:small_" + brick + "_bricks", "blockus:small_" + brick + "_bricks_stairs")
        advancementTemplate("blockus:small_" + brick + "_bricks", "blockus:small_" + brick + "_bricks_slab")
        advancementTemplate("blockus:small_" + brick + "_bricks", "blockus:small_" + brick + "_bricks_wall")
        advancementTemplate("minecraft:cut_red_sandstone", "blockus:gold_decorated_red_sandstone")
        advancementTemplate("minecraft:cut_red_sandstone", "blockus:lapis_decorated_red_sandstone")
        advancementTemplate("minecraft:cut_sandstone", "blockus:gold_decorated_sandstone")
        advancementTemplate("minecraft:cut_sandstone", "blockus:lapis_decorated_sandstone")
        advancementTemplate("blockus:cut_soul_sandstone", "blockus:gold_decorated_soul_sandstone")
        advancementTemplate("blockus:cut_soul_sandstone", "blockus:lapis_decorated_soul_sandstone")
    })
    //soul sad stone
    event.addJson("blockus:advancements/recipes/soul_sandstone.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_item: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            tag: "blockus:soul_soils"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "blockus:soul_sandstone"
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
                "blockus:soul_sandstone"
            ]
        }
    })
    advancementTemplate("blockus:soul_sandstone", "blockus:soul_sandstone_stairs")
    advancementTemplate("blockus:soul_sandstone", "blockus:soul_sandstone_slab")
    advancementTemplate("blockus:soul_sandstone", "blockus:soul_sandstone_wall")
    advancementTemplate("blockus:soul_sandstone", "blockus:smooth_soul_sandstone")
    advancementTemplate("blockus:smooth_soul_sandstone", "blockus:smooth_soul_sandstone_stairs")
    advancementTemplate("blockus:smooth_soul_sandstone", "blockus:smooth_soul_sandstone_slab")
    advancementTemplate("blockus:smooth_soul_sandstone", "blockus:smooth_soul_sandstone_wall")
    //honey
    advancementTemplate("minecraft:honeycomb_block", "blockus:honeycomb_bricks")
    advancementTemplate("blockus:honeycomb_bricks", "blockus:honeycomb_bricks_stairs")
    advancementTemplate("blockus:honeycomb_bricks", "blockus:honeycomb_bricks_slab")
    advancementTemplate("blockus:honeycomb_bricks", "blockus:honeycomb_bricks_wall")
    //purpre
    var purpurs = ["purpur", "phantom_purpur"]
    purpurs.forEach((brick) => {
        advancementTemplate("blockus:smooth_" + brick, "blockus:polished_" + brick + "_stairs")
        advancementTemplate("blockus:smooth_" + brick, "blockus:polished_" + brick + "_slab")
        advancementTemplate("blockus:smooth_" + brick, "blockus:" + brick + "_bricks")
        advancementTemplate("blockus:" + brick + "_bricks", "blockus:" + brick + "_bricks_stairs")
        advancementTemplate("blockus:" + brick + "_bricks", "blockus:" + brick + "_bricks_slab")
        advancementTemplate("blockus:" + brick + "_bricks", "blockus:" + brick + "_bricks_wall")
        advancementTemplate("blockus:" + brick + "_little_bricks", "blockus:small_" + brick + "_bricks_stairs")
        advancementTemplate("blockus:" + brick + "_little_bricks", "blockus:small_" + brick + "_bricks_slab")
        advancementTemplate("blockus:" + brick + "_little_bricks", "blockus:small_" + brick + "_bricks_wall")
    })
    advancementTemplate("minecraft:purpur_block", "blockus:polished_purpur")
    advancementTemplate("blockus:phantom_purpur_block", "blockus:polished_phantom_purpur")
    //purpur xtras
    advancementTemplate("blockus:phantom_purpur_block", "blockus:phantom_purpur_stairs")
    advancementTemplate("blockus:phantom_purpur_block", "blockus:phantom_purpur_slab")
    advancementTemplate("blockus:phantom_purpur_slab", "blockus:phantom_purpur_pillar")
    //purpur conversion
    advancementTemplate("minecraft:purpur_block", "blockus:phantom_purpur_block")
    advancementTemplate("blockus:smooth_purpur", "blockus:polished_phantom_purpur_alt")
    advancementTemplate("blockus:purpur_bricks", "blockus:phantom_purpur_bricks_alt")
    advancementTemplate("blockus:purpur_lines", "blockus:phantom_purpur_lines")
    advancementTemplate("blockus:purpur_squares", "blockus:phantom_purpur_squares")
    advancementTemplate("blockus:chiseled_purpur", "blockus:chiseled_phantom_purpur")
    advancementTemplate("minecraft:purpur_pillar", "blockus:phantom_purpur_pillar_alt")
    advancementTemplate("blockus:purpur_little_bricks", "blockus:small_phantom_purpur_bricks")
    //endstone
    advancementTemplate("minecraft:end_stone", "blockus:polished_end_stone")
    advancementTemplate("blockus:polished_end_stone", "blockus:polished_end_stone_stairs")
    advancementTemplate("blockus:polished_end_stone", "blockus:polished_end_stone_slab")
    advancementTemplate("blockus:polished_end_stone", "minecraft:end_stone_bricks")
    advancementTemplate("minecraft:end_stone_bricks", "blockus:cracked_end_stone_bricks")
    advancementTemplate("blockus:small_end_stone_bricks", "blockus:small_end_stone_bricks_stairs")
    advancementTemplate("blockus:small_end_stone_bricks", "blockus:small_end_stone_bricks_slab")
    advancementTemplate("blockus:small_end_stone_bricks", "blockus:small_end_stone_bricks_wall")
    advancementTemplate("minecraft:end_stone_bricks", "blockus:purpur_decorated_end_stone")
    advancementTemplate("minecraft:end_stone_bricks", "blockus:phantom_purpur_decorated_end_stone")
    //white oak
    advancementTemplate("blockus:white_oak_log", "blockus:white_oak_wood")
    advancementTemplate("blockus:stripped_white_oak_log", "blockus:stripped_white_oak_wood")
    event.addJson("blockus:advancements/recipes/white_oak_planks.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_item: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            tag: "blockus:white_oak_logs"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "blockus:white_oak_planks"
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
                "blockus:white_oak_planks"
            ]
        }
    })
    advancementTemplate("blockus:white_oak_planks", "blockus:white_oak_stairs")
    advancementTemplate("blockus:white_oak_planks", "blockus:white_oak_slab")
    advancementTemplate("blockus:white_oak_planks", "blockus:white_oak_fence")
    advancementTemplate("blockus:white_oak_planks", "blockus:white_oak_fence_gate")
    advancementTemplate("blockus:white_oak_planks", "blockus:white_oak_door")
    advancementTemplate("blockus:white_oak_planks", "blockus:white_oak_trapdoor")
    //timber frame
    advancementTemplate("minecraft:paper", "blockus:oak_timber_frame")
    advancementTemplate("blockus:oak_timber_frame", "blockus:oak_diagonal_timber_frame")
    advancementTemplate("blockus:oak_diagonal_timber_frame", "blockus:oak_cross_timber_frame")
    //hedges
    advancementTemplate("minecraft:oak_leaves", "blockus:small_hedge")
    advancementTemplate("minecraft:spruce_leaves", "blockus:spruce_small_hedge")
    advancementTemplate("minecraft:birch_leaves", "blockus:birch_small_hedge")
    advancementTemplate("minecraft:jungle_leaves", "blockus:jungle_small_hedge")
    advancementTemplate("minecraft:acacia_leaves", "blockus:acacia_small_hedge")
    advancementTemplate("minecraft:dark_oak_leaves", "blockus:dark_oak_small_hedge")
    advancementTemplate("blockus:white_oak_leaves", "blockus:small_hedge")
    advancementTemplate("minecraft:nether_wart_block", "blockus:crimson_small_hedge")
    advancementTemplate("minecraft:warped_wart_block", "blockus:warped_small_hedge")
    //large pot
    advancementTemplate("minecraft:brick", "blockus:large_flower_pot")
    //crates & box
    advancementTemplate("minecraft:sweet_berries", "blockus:sweet_berries_crate")
    advancementTemplate("minecraft:salmon", "blockus:salmon_crate")
    advancementTemplate("minecraft:pufferfish", "blockus:pufferfish_crate")
    advancementTemplate("minecraft:tropical_fish", "blockus:tropical_fish_crate")
    advancementTemplate("minecraft:apple", "blockus:apple_crate")
    advancementTemplate("minecraft:cod", "blockus:cod_crate")
    advancementTemplate("minecraft:golden_apple", "blockus:golden_apple_crate")
    advancementTemplate("blockus:apple_crate", "blockus:golden_apple_crate_from_apple_crate")
    advancementTemplate("minecraft:golden_carrot", "blockus:golden_carrot_crate")
    advancementTemplate("farmersdelight:carrot_crate", "minecraft:golden_carrot_crate_from_carrot_crate")
    advancementTemplate("minecraft:bread", "blockus:bread_box")
    //bamboo
    advancementTemplate("minecraft:bamboo", "blockus:bamboo_planks")
    advancementTemplate("blockus:bamboo_planks", "blockus:bamboo_stairs")
    advancementTemplate("blockus:bamboo_planks", "blockus:bamboo_slab")
    advancementTemplate("blockus:bamboo_planks", "blockus:bamboo_fence")
    advancementTemplate("blockus:bamboo_planks", "blockus:bamboo_fence_gate")
    advancementTemplate("blockus:bamboo_planks", "blockus:bamboo_door")
    advancementTemplate("blockus:bamboo_planks", "blockus:bamboo_trapdoor")
    //concrete
    color.forEach((brick) => {
        advancementTemplate("minecraft:" + brick + "_concrete", "blockus:" + brick + "_concrete_bricks")
        advancementTemplate("blockus:" + brick + "_concrete_bricks", "blockus:" + brick + "_concrete_brick_stairs")
        advancementTemplate("blockus:" + brick + "_concrete_bricks", "blockus:" + brick + "_concrete_brick_slab")
    })
    //lamps
    color.forEach((brick) => {
        advancementTemplate("minecraft:redstone_lamp", "blockus:" + brick + "_redstone_lamp")
        advancementTemplate("minecraft:redstone_lamp", "blockus:redstone_lamp_lit")
        advancementTemplate("blockus:" + brick + "_redstone_lamp", "blockus:" + brick + "_redstone_lamp_lit")
        advancementTemplate("blockus:redstone_lamp_lit", "blockus:" + brick + "_redstone_lamp_lit_alt")
    })
    //hopes
    for (var a = 0; a < 16; a++) {
        for (var b = 0; b < 16; b++) {
            event.addJson("blockus:advancements/recipes/" + color[a] + "_" + color[b] + "_colored_tiles.json", {
                parent: "minecraft:recipes/root",
                criteria: {
                    has_item: {
                        trigger: "minecraft:inventory_changed",
                        conditions: {
                            items: [
                                {
                                    item: "minecraft:" + color[a] + "_concrete"
                                }
                            ]
                        }
                    },
                    has_item_two: {
                        trigger: "minecraft:inventory_changed",
                        conditions: {
                            items: [
                                {
                                    item: "minecraft:" + color[b] + "_concrete"
                                }
                            ]
                        }
                    },
                    has_the_recipe: {
                        trigger: "minecraft:recipe_unlocked",
                        conditions: {
                            recipe: "blockus:" + color[a] + "_" + color[b] + "_colored_tiles"
                        }
                    }
                },
                requirements: [
                    [
                        "has_item",
                        "has_the_recipe"
                    ],
                    [
                        "has_item_two",
                        "has_the_recipe"
                    ]
                ],
                rewards: {
                    recipes: [
                        "blockus:" + color[a] + "_" + color[b] + "_colored_tiles"
                    ]
                }
            })
        }
    }
    //what was I doing?
    //beveled glass
    advancementTemplate("minecraft:glass", "blockus:beveled_glass")
    advancementTemplate("blockus:beveled_glass", "blockus:beveled_glass_pane")
    color.forEach((brick) => {
        advancementTemplate("minecraft:"+ brick + "_stained_glass", "blockus:"+ brick + "_beveled_glass")
        advancementTemplate("blockus:beveled_glass", "blockus:"+ brick + "_beveled_glass_2")
        advancementTemplate("blockus:"+ brick + "_beveled_glass", "blockus:"+ brick + "_beveled_glass_pane")
        advancementTemplate("blockus:beveled_glass_pane", "blockus:"+ brick + "_beveled_glass_pane_2")
    })
    advancementTemplate("biomemakeover:lightning_bug_bottle", "blockus:rainbow_glass")
    advancementTemplate("biomemakeover:lightning_bug_bottle", "blockus:rainbow_glass_pane")
    advancementTemplate("blockus:rainbow_glass", "blockus:rainbow_glass_pane_2")
    advancementTemplate("biomemakeover:lightning_bug_bottle", "blockus:rainbow_beveled_glass_pane_2")
    advancementTemplate("blockus:rainbow_glass", "blockus:rainbow_beveled_glass")
    advancementTemplate("biomemakeover:lightning_bug_bottle", "blockus:rainbow_beveled_glass_pane_2")
    advancementTemplate("blockus:rainbow_beveled_glass", "blockus:rainbow_beveled_glass_pane")
    advancementTemplate("biomemakeover:lightning_bug_bottle", "blockus:rainbow_lamp")
    advancementTemplate("biomemakeover:lightning_bug_bottle", "blockus:rainbow_lamp_2")
    advancementTemplate("biomemakeover:lightning_bug_bottle", "blockus:rainbow_lamp_lit_alt")
    advancementTemplate("blockus:rainbow_lamp", "blockus:rainbow_lamp_lit")
    //wool
    color.forEach((brick) => {
        advancementTemplate("minecraft:"+ brick + "_wool", "blockus:"+ brick + "_patterned_wool")
    })
    //pressure plates and buttons
    advancementTemplate("minecraft:polished_andesite", "blockus:polished_andesite_pressure_plate")
    advancementTemplate("minecraft:polished_andesite", "blockus:polished_andesite_button")
    advancementTemplate("minecraft:polished_granite", "blockus:polished_granite_pressure_plate")
    advancementTemplate("minecraft:polished_granite", "blockus:polished_granite_button")
    advancementTemplate("minecraft:polished_diorite", "blockus:polished_diorite_pressure_plate")
    advancementTemplate("minecraft:polished_diorite", "blockus:polished_diorite_button")
    advancementTemplate("blockus:limestone", "blockus:limestone_pressure_plate")
    advancementTemplate("blockus:limestone", "blockus:limestone_button")
    advancementTemplate("blockus:marble", "blockus:marble_pressure_plate")
    advancementTemplate("blockus:marble", "blockus:marble_button")
    advancementTemplate("blockus:bamboo_planks", "blockus:bamboo_pressure_plate")
    advancementTemplate("blockus:bamboo_planks", "blockus:bamboo_button")
    advancementTemplate("blockus:white_oak_planks", "blockus:white_oak_pressure_plate")
    advancementTemplate("blockus:white_oak_planks", "blockus:white_oak_button")
    //thatch
    advancementTemplate("minecraft:wheat", "blockus:thatch")
    advancementTemplate("blockus:thatch", "blockus:thatch_stairs")
    advancementTemplate("blockus:thatch", "blockus:thatch_slab")
    //paper block
    advancementTemplate("minecraft:paper", "blockus:paper_block")
    advancementTemplate("blockus:paper_block", "blockus:burned_paper_block")
    //gates
    advancementTemplate("minecraft:iron_bars", "blockus:iron_gate")
    advancementTemplate("blockus:golden_bars", "blockus:golden_gate")
    //bars and chains
    advancementTemplate("minecraft:gold_ingot", "blockus:golden_bars")
    advancementTemplate("minecraft:gold_ingot", "blockus:golden_chain")
    //paper things
    advancementTemplate("minecraft:paper", "blockus:paper_door")
    advancementTemplate("minecraft:paper", "blockus:paper_trapdoor")
    advancementTemplate("minecraft:paper", "blockus:paper_wall")
    advancementTemplate("minecraft:paper", "blockus:paper_lamp")
    //Soul o'lantern
    advancementTemplate("minecraft:soul_torch", "blockus:soul_o_lantern")
    //almost the end
    advancementTemplate("minecraft:stick", "blockus:wooden_frame")
    advancementTemplate("minecraft:stone", "blockus:caution_block")
    advancementTemplate("minecraft:iron_ingot", "blockus:road_barrier")
    advancementTemplate("blockus:caution_block", "blockus:caution_barrier")
    advancementTemplate("minecraft:netherite_block", "blockus:netherite_stairs")
    advancementTemplate("minecraft:netherite_block", "blockus:netherite_slab")
    //blocks
    advancementTemplate("minecraft:charcoal", "blockus:charcoal_block")
    advancementTemplate("minecraft:sugar", "blockus:sugar_block")
    advancementTemplate("minecraft:rotten_flesh", "blockus:rotten_flesh_block")
    advancementTemplate("minecraft:phantom_membrane", "blockus:membrane_block")
    advancementTemplate("minecraft:netherite_block", "blockus:netherite_slab")
    advancementTemplate("minecraft:redstone", "blockus:redstone_sand")
    //shingles
    advancementTemplate("minecraft:terracotta", "blockus:shingles")
    color.forEach((brick) => {
        advancementTemplate("minecraft:" + brick + "_terracotta", "blockus:" + brick + "_shingles")
        advancementTemplate("blockus:shingles", "blockus:" + brick + "_shingles_alt")
        advancementTemplate("blockus:shingles", "blockus:shingles_stairs")
        advancementTemplate("blockus:shingles", "blockus:shingles_slab")
        advancementTemplate("blockus:shingles_stairs", "blockus:" + brick + "_shingles_stairs_alt")
        advancementTemplate("blockus:shingles_slab", "blockus:" + brick + "_shingles_slab_alt")
        advancementTemplate("blockus:" + brick + "_shingles", "blockus:" + brick + "_shingles_stairs")
        advancementTemplate("blockus:" + brick + "_shingles", "blockus:" + brick + "_shingles_slab")
    })
    //rainbow
    advancementTemplate("biomemakeover:lightning_bug_bottle", "blockus:rainbow_bricks")
    advancementTemplate("blockus:rainbow_bricks", "blockus:rainbow_bricks_slab")
    advancementTemplate("blockus:rainbow_bricks", "blockus:rainbow_bricks_stairs")
    advancementTemplate("blockus:rainbow_bricks", "blockus:rainbow_bricks_wall")
})