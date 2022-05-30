onEvent('server.datapack.high_priority', function (event) {
    event.addJson("plus:advancements/adventure/badlands.json", {
        "display": {
            "icon": {
                "item": "biomemakeover:barrel_cactus"
            },
            "title": {
                "translate": "plus.advancements.adventure.badlands.title"
            },
            "description": {
                "translate": "plus.advancements.adventure.badlands.desc"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:adventure/root",
        "criteria": {
            "get_to_badlands": {
                "trigger": "minecraft:location",
                "conditions": {
                    "location": {
                        "biome": "minecraft:badlands"
                    }
                }
            },
            "get_to_badlands_plateau": {
                "trigger": "minecraft:location",
                "conditions": {
                    "location": {
                        "biome": "minecraft:badlands_plateau"
                    }
                }
            },
            "get_to_wooded_badlands_plateau": {
                "trigger": "minecraft:location",
                "conditions": {
                    "location": {
                        "biome": "minecraft:wooded_badlands_plateau"
                    }
                }
            }
        },
        "requirements": [
            [
                "get_to_badlands",
                "get_to_badlands_plateau",
                "get_to_wooded_badlands_plateau"
            ]
        ]
    }
    )

    //all cactuses
    event.addJson("plus:advancements/adventure/badlands/cactus_all.json", {
        "display": {
            "icon": {
                "item": "biomemakeover:barrel_cactus_flowered"
            },
            "title": {
                "translate": "advancements.biomemakeover.cacti.title"
            },
            "description": {
                "translate": "advancements.biomemakeover.cacti.description"
            },
            "frame": "goal",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:adventure/badlands",
        "criteria": {
            "barrel_cactus_flowered": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "biomemakeover:barrel_cactus_flowered"
                        }
                    ]
                }
            },
            "barrel_cactus": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "biomemakeover:barrel_cactus"
                        }
                    ]
                }
            },
            "saguaro_cactus": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "biomemakeover:saguaro_cactus"
                        }
                    ]
                }
            },
            "cactus": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "minecraft:cactus"
                        }
                    ]
                }
            },
            "tiny_cactus": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "terrestria:tiny_cactus"
                        }
                    ]
                }
            },
            "t_saguaro_cactus": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "terrestria:saguaro_cactus"
                        }
                    ]
                }
            }
        }
    }
    )
    //petals
    event.addJson("plus:advancements/adventure/badlands/pink_petals.json", {
        "display": {
            "icon": {
                "item": "biomemakeover:pink_petals"
            },
            "title": {
                "translate": "advancements.biomemakeover.pink_petal.title"
            },
            "description": {
                "translate": "advancements.biomemakeover.pink_petal.description"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:adventure/badlands/cactus_all",
        "criteria": {
            "get_petals": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "biomemakeover:pink_petals"
                        }
                    ]
                }
            }
        }
    }
    )
    //sc tail
    event.addJson("plus:advancements/adventure/badlands/scuttler_tail.json", {
        "display": {
            "icon": {
                "item": "biomemakeover:scuttler_tail"
            },
            "title": {
                "translate": "advancements.biomemakeover.scuttler_tail.title"
            },
            "description": {
                "translate": "advancements.biomemakeover.scuttler_tail.description"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:adventure/badlands/pink_petals",
        "criteria": {
            "get_stew": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "biomemakeover:scuttler_tail"
                        }
                    ]
                }
            }
        },
    }
    )
    //disc
    event.addJson("plus:advancements/adventure/badlands/disc.json", {
        "display": {
            "icon": {
                "item": "biomemakeover:ghost_town_music_disk"
            },
            "title": {
                "translate": "plus.advancements.adventure.badlands.disc.title"
            },
            "description": {
                "translate": "plus.advancements.adventure.badlands.disc.desc"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:adventure/badlands",
        "criteria": {
            "get_petals": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "biomemakeover:ghost_town_music_disk"
                        }
                    ]
                }
            }
        }
    }
    )
    //ghost town
    event.addJson("plus:advancements/adventure/badlands/get_to_ghost_town.json", {
        "display": {
            "icon": {
                "item": "biomemakeover:ectoplasm"
            },
            "title": {
                "translate": "advancements.biomemakeover.ghost_town.title"
            },
            "description": {
                "translate": "advancements.biomemakeover.ghost_town.description"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:adventure/badlands",
        "criteria": {
            "get_to_ghost_town": {
                "trigger": "minecraft:location",
                "conditions": {
                    "location": {
                        "feature": "biomemakeover:ghost_town"
                    }
                }
            }
        }
    }
    )
    //cowboy hat
    event.addJson("plus:advancements/adventure/badlands/hat.json", {
        "display": {
            "icon": {
                "item": "biomemakeover:cowboy_hat"
            },
            "title": {
                "translate": "plus.advancements.adventure.badlands.hat.title"
            },
            "description": {
                "translate": "plus.advancements.adventure.badlands.hat.desc"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:adventure/badlands/get_to_ghost_town",
        "criteria": {
            "wear_hat": {
                "trigger": "biomemakeover:wear_armor",
                "conditions": {
                    "item": {
                        "item": "biomemakeover:cowboy_hat"
                    }
                }
            }
        }
    }
    )
    //kill cowboy
    event.addJson("plus:advancements/adventure/badlands/kill_cowboy.json", {
        "display": {
            "icon": {
                "item": "minecraft:white_banner",
                "nbt": "{HideFlags: 32, BlockEntityTag: {Patterns: [{Pattern: \"mr\", Color: 9}, {Pattern: \"bs\", Color: 14}, {Pattern: \"hh\", Color: 12}, {Pattern: \"tts\", Color: 15}, {Pattern: \"bo\", Color: 15}, {Pattern: \"mc\", Color: 8}, {Pattern: \"ms\", Color: 12}]}, display: {Name: '{\"color\":\"gold\",\"translate\":\"block.minecraft.ominous_banner\"}'}}",
            },
            "title": {
                "translate": "plus.advancements.adventure.badlands.kill_cowboy.title"
            },
            "description": {
                "translate": "plus.advancements.adventure.badlands.kill_cowboy.desc"
            },
            "frame": "goal",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": true
        },
        "parent": "plus:adventure/badlands/get_to_ghost_town",
        "criteria": {
            "kill_cowboy": {
                "trigger": "minecraft:player_killed_entity",
                "conditions": {
                    "entity": [
                        {
                            "condition": "minecraft:entity_properties",
                            "entity": "this",
                            "predicate": {
                                "type": "biomemakeover:cowboy"
                            }
                        }
                    ]
                }
            }
        }
    }
    )
    //cowboy forever
    event.addJson("plus:advancements/adventure/badlands/hat_forever.json", {
        "display": {
            "icon": {
                "item": "biomemakeover:cowboy_hat",
                "nbt": "{Enchantments:[{id:binding_curse,lvl:1}]}"
            },
            "title": {
                "translate": "advancements.biomemakeover.cursed_hat.title"
            },
            "description": {
                "translate": "advancements.biomemakeover.cursed_hat.description"
            },
            "frame": "challenge",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:adventure/badlands/hat",
        "criteria": {
            "wear_hat": {
                "trigger": "biomemakeover:wear_armor",
                "conditions": {
                    "item": {
                        "item": "biomemakeover:cowboy_hat",
                        "enchantments": [
                            {
                                "enchantment": "minecraft:binding_curse"
                            }
                        ]
                    }
                }
            }
        }
    }
    )
    //fertilizer
    event.addJson("plus:advancements/adventure/badlands/fertilizer.json", {
        "display": {
            "icon": {
                "item": "minecraft:soul_soil"
            },
            "title": {
                "translate": "advancements.biomemakeover.compost_soul_soil.title"
            },
            "description": {
                "translate": "advancements.biomemakeover.compost_soul_soil.description"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:adventure/badlands/get_to_ghost_town",
        "criteria": {
            "compost_soil": {
                "trigger": "biomemakeover:ectoplasm_compost"
            }
        }
    }
    )
    //poltergeist
    event.addJson("plus:advancements/adventure/badlands/poltergeist.json", {
        "display": {
            "icon": {
                "item": "biomemakeover:poltergeist"
            },
            "title": {
                "translate": "advancements.biomemakeover.poltergeist.title"
            },
            "description": {
                "translate": "advancements.biomemakeover.poltergeist.description"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:adventure/badlands/fertilizer",
        "criteria": {
            "poltergeist": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "biomemakeover:poltergeist"
                        }
                    ]
                }
            }
        }
    }
    )
})