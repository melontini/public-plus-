onEvent('server.datapack.high_priority', function (event) {
    event.addJson("plus:advancements/recipes/cooking_pot/aa_stew.json", {
        "parent": "minecraft:recipes/root",
        "criteria": {
            "got_fish_0": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "gofish:lunarfish"
                        }
                    ]
                }
            },
            "got_fish_1": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "gofish:galaxy_starfish"
                        }
                    ]
                }
            },
            "got_fish_2": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "gofish:starry_salmon"
                        }
                    ]
                }
            },
            "got_fish_3": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "gofish:nebula_swordfish"
                        }
                    ]
                }
            }
        },
        "requirements": [
            [
                "got_fish_0"
            ],
            [
                "got_fish_1"
            ],
            [
                "got_fish_2"
            ],
            [
                "got_fish_3"
            ]
        ]
    }
    )
    //cod stew
    event.addJson("plus:advancements/recipes/cooking_pot/cod_stew.json", {
        "parent": "minecraft:recipes/root",
        "criteria": {
            "got_fish_0": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "tag": "fabric:raw_fishes/cod"
                        }
                    ]
                }
            }
        },
        "requirements": [
            [
                "got_fish_0"
            ]
        ]
    }
    )
    event.addJson("plus:advancements/recipes/cooking_pot/beef_stew.json", {
        "parent": "minecraft:recipes/root",
        "criteria": {
            "got_fish_0": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "tag": "fabric:raw_beef"
                        }
                    ]
                }
            }
        },
        "requirements": [
            [
                "got_fish_0"
            ]
        ]
    }
    )
    //beetroot soup
    event.addJson("plus:advancements/recipes/cooking_pot/beetroot_soup.json", {
        "parent": "minecraft:recipes/root",
        "criteria": {
            "got_fish_0": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "tag": "fabric:vegetables/beetroot"
                        }
                    ]
                }
            }
        },
        "requirements": [
            [
                "got_fish_0"
            ]
        ]
    }
    )
    event.addJson("plus:advancements/recipes/cooking_pot/grilled_blackstone_deluxe.json", {
        "parent": "minecraft:recipes/root",
        "criteria": {
            "got_fish_0": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "gofish:grilled_blackstone_trout"
                        }
                    ]
                }
            }
        },
        "requirements": [
            [
                "got_fish_0"
            ]
        ]
    }
    )
    event.addJson("plus:advancements/recipes/cooking_pot/cabbage_rolls.json", {
        "parent": "minecraft:recipes/root",
        "criteria": {
            "got_fish_0": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "tag": "fabric:crops/cabbage"
                        }
                    ]
                }
            }
        },
        "requirements": [
            [
                "got_fish_0"
            ]
        ]
    }
    )
    event.addJson("plus:advancements/recipes/cooking_pot/chicken_soup.json", {
        "parent": "minecraft:recipes/root",
        "criteria": {
            "got_fish_0": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "tag": "fabric:raw_chicken"
                        }
                    ]
                }
            }
        },
        "requirements": [
            [
                "got_fish_0"
            ]
        ]
    }
    )
    event.addJson("plus:advancements/recipes/cooking_pot/cooked_rice.json", {
        "parent": "minecraft:recipes/root",
        "criteria": {
            "got_fish_0": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "farmersdelight:rice"
                        }
                    ]
                }
            }
        },
        "requirements": [
            [
                "got_fish_0"
            ]
        ]
    }
    )
    event.addJson("plus:advancements/recipes/cooking_pot/dog_food.json", {
        "parent": "minecraft:recipes/root",
        "criteria": {
            "got_fish_0": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "tag": "farmersdelight:wolf_prey"
                        }
                    ]
                }
            }
        },
        "requirements": [
            [
                "got_fish_0"
            ]
        ]
    }
    )
    event.addJson("plus:advancements/recipes/cooking_pot/dumplings.json", {
        "parent": "minecraft:recipes/root",
        "criteria": {
            "got_fish_0": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "tag": "fabric:pasta"
                        }
                    ]
                }
            }
        },
        "requirements": [
            [
                "got_fish_0"
            ]
        ]
    }
    )
    event.addJson("plus:advancements/recipes/cooking_pot/endfish_and_chorus.json", {
        "parent": "minecraft:recipes/root",
        "criteria": {
            "got_fish_0": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "gofish:baked_endfish"
                        }
                    ]
                }
            }
        },
        "requirements": [
            [
                "got_fish_0"
            ]
        ]
    }
    )
    event.addJson("plus:advancements/recipes/cooking_pot/fish_stew.json", {
        "parent": "minecraft:recipes/root",
        "criteria": {
            "got_fish_0": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "tag": "fabric:raw_fishes"
                        }
                    ]
                }
            }
        },
        "requirements": [
            [
                "got_fish_0"
            ]
        ]
    }
    )
    event.addJson("plus:advancements/recipes/cooking_pot/fried_rice.json", {
        "parent": "minecraft:recipes/root",
        "criteria": {
            "got_fish_0": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "tag": "fabric:crops/rice"
                        }
                    ]
                }
            }
        },
        "requirements": [
            [
                "got_fish_0"
            ]
        ]
    }
    )
    event.addJson("plus:advancements/recipes/cooking_pot/glowshroom_stew.json", {
        "parent": "minecraft:recipes/root",
        "criteria": {
            "got_fish_0": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "biomemakeover:purple_glowshroom"
                        }
                    ]
                }
            },
            "got_fish_1": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "biomemakeover:orange_glowshroom"
                        }
                    ]
                }
            },
            "got_fish_2": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "biomemakeover:green_glowshroom"
                        }
                    ]
                }
            }
        },
        "requirements": [
            [
                "got_fish_0",
                "got_fish_1",
                "got_fish_2"
            ]
        ]
    }
    )
    event.addJson("plus:advancements/recipes/cooking_pot/hot_cocoa.json", {
        "parent": "minecraft:recipes/root",
        "criteria": {
            "got_fish_0": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "minecraft:cocoa_beans"
                        }
                    ]
                }
            }
        },
        "requirements": [
            [
                "got_fish_0"
            ]
        ]
    }
    )
    event.addJson("plus:advancements/recipes/cooking_pot/mushroom_stew.json", {
        "parent": "minecraft:recipes/root",
        "criteria": {
            "got_fish_0": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "minecraft:brown_mushroom"
                        }
                    ]
                }
            },
            "got_fish_1": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "minecraft:red_mushroom"
                        }
                    ]
                }
            }
        },
        "requirements": [
            [
                "got_fish_0",
                "got_fish_1"
            ]
        ]
    }
    )
    event.addJson("plus:advancements/recipes/cooking_pot/noodle_soup.json", {
        "parent": "minecraft:recipes/root",
        "criteria": {
            "got_fish_0": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "tag": "fabric:pasta"
                        }
                    ]
                }
            }
        },
        "requirements": [
            [
                "got_fish_0"
            ]
        ]
    }
    )
    event.addJson("plus:advancements/recipes/cooking_pot/pasta_with_meatballs.json", {
        "parent": "minecraft:recipes/root",
        "criteria": {
            "got_fish_0": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "farmersdelight:minced_beef"
                        }
                    ]
                }
            }
        },
        "requirements": [
            [
                "got_fish_0"
            ]
        ]
    }
    )
    event.addJson("plus:advancements/recipes/cooking_pot/pasta_with_mutton_chop.json", {
        "parent": "minecraft:recipes/root",
        "criteria": {
            "got_fish_0": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "tag": "fabric:raw_mutton"
                        }
                    ]
                }
            }
        },
        "requirements": [
            [
                "got_fish_0"
            ]
        ]
    }
    )
    event.addJson("plus:advancements/recipes/cooking_pot/pumpkin_soup.json", {
        "parent": "minecraft:recipes/root",
        "criteria": {
            "got_fish_0": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "farmersdelight:pumpkin_slice"
                        }
                    ]
                }
            }
        },
        "requirements": [
            [
                "got_fish_0"
            ]
        ]
    }
    )
    event.addJson("plus:advancements/recipes/cooking_pot/rabbit_stew.json", {
        "parent": "minecraft:recipes/root",
        "criteria": {
            "got_fish_0": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "minecraft:rabbit"
                        }
                    ]
                }
            },
            "got_fish_1": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "minecraft:cooked_rabbit"
                        }
                    ]
                }
            }
        },
        "requirements": [
            [
                "got_fish_0",
                "got_fish_1"
            ]
        ]
    }
    )
    event.addJson("plus:advancements/recipes/cooking_pot/ratatouille.json", {
        "parent": "minecraft:recipes/root",
        "criteria": {
            "got_fish_0": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "tag": "fabric:vegetables"
                        }
                    ]
                }
            }
        }
    }
    )
    event.addJson("plus:advancements/recipes/cooking_pot/squid_ink_pasta.json", {
        "parent": "minecraft:recipes/root",
        "criteria": {
            "got_fish_0": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "minecraft:ink_sac"
                        }
                    ]
                }
            },
            "got_fish_1": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "tag": "fabric:pasta"
                        }
                    ]
                }
            }
        }
    }
    )
    event.addJson("plus:advancements/recipes/cooking_pot/stuffed_pumpkin.json", {
        "parent": "minecraft:recipes/root",
        "criteria": {
            "got_fish_0": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "tag": "fabric:vegetables"
                        }
                    ]
                }
            },
            "got_fish_0": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "minecraft:pumpkin"
                        }
                    ]
                }
            }
        }
    }
    )
    event.addJson("plus:advancements/recipes/cooking_pot/tomato_sauce.json", {
        "parent": "minecraft:recipes/root",
        "criteria": {
            "got_fish_0": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "tag": "fabric:crops/tomato"
                        }
                    ]
                }
            }
        }
    }
    )
    event.addJson("plus:advancements/recipes/cooking_pot/vegetable_noodles.json", {
        "parent": "minecraft:recipes/root",
        "criteria": {
            "got_fish_0": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "tag": "fabric:vegetables"
                        }
                    ]
                }
            },
            "got_fish_1": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "tag": "fabric:pasta"
                        }
                    ]
                }
            }
        }
    }
    )
    event.addJson("plus:advancements/recipes/cooking_pot/vegetable_soup.json", {
        "parent": "minecraft:recipes/root",
        "criteria": {
            "got_fish_0": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "tag": "fabric:salad_ingredients"
                        }
                    ]
                }
            }
        }
    }
    )
})