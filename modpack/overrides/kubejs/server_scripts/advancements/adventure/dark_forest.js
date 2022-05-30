onEvent('server.datapack.high_priority', function (event) {
    var tapestryCriteria = {};
    tapestries.forEach((tapestryIndex) => {
        tapestryCriteria[tapestryIndex] = {
            "trigger": "minecraft:inventory_changed",
            "conditions": {
                "items": [
                    {
                        "item": tapestryIndex
                    }
                ]
            }
        }
    })
    event.addJson("plus:advancements/adventure/dark_forest.json", {
        "display": {
            "icon": {
                "item": "biomemakeover:ancient_oak_sapling"
            },
            "title": {
                "translate": "plus.advancements.story.get_to_dark_forest.title"
            },
            "description": {
                "translate": "plus.advancements.story.get_to_dark_forest.description"
            },
            "frame": "task",
            "show_toast": false,
            "announce_to_chat": false,
            "hidden": false
        },
        "parent": "plus:adventure/root",
        "criteria": {
            "get_to_dark_forest": {
                "trigger": "minecraft:location",
                "conditions": {
                    "location": {
                        "biome": "minecraft:dark_forest"
                    }
                }
            },
            "get_to_dark_forest_hills": {
                "trigger": "minecraft:location",
                "conditions": {
                    "location": {
                        "biome": "minecraft:dark_forest_hills"
                    }
                }
            }
        },
        "requirements": [
            [
                "get_to_dark_forest",
                "get_to_dark_forest_hills"
            ]
        ]
    }
    )
    //find mansion
    event.addJson("plus:advancements/adventure/dark_forest/mansion.json", {
        "display": {
            "icon": {
                "item": "biomemakeover:gray_tapestry"
            },
            "title": {
                "translate": "advancements.biomemakeover.mansion.title"
            },
            "description": {
                "translate": "advancements.biomemakeover.mansion.description"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:adventure/dark_forest",
        "criteria": {
            "mansion": {
                "trigger": "minecraft:location",
                "conditions": {
                    "location": {
                        "feature": "biomemakeover:mansion"
                    }
                }
            }
        }
    }
    )
    //arm golem
    event.addJson("plus:advancements/adventure/dark_forest/arm_golem.json", {
        "display": {
            "icon": {
                "item": "minecraft:crossbow"
            },
            "title": {
                "translate": "advancements.biomemakeover.arm_golem.title"
            },
            "description": {
                "translate": "advancements.biomemakeover.arm_golem.description"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:adventure/dark_forest/mansion",
        "criteria": {
            "do_trade": {
                "trigger": "biomemakeover:arm_golem"
            }
        }
    }
    )
    //tapestries
    event.addJson("plus:advancements/adventure/dark_forest/find_tapestry.json", {
        "display": {
            "icon": {
                "item": "biomemakeover:blue_tapestry"
            },
            "title": {
                "translate": "plus.advancements.adventure.dark_forest.find_tapestry.title"
            },
            "description": {
                "translate": "plus.advancements.adventure.dark_forest.find_tapestry.description"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:adventure/dark_forest/mansion",
        "criteria": {
            "tapestry": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "tag": "biomemakeover:tapestries"
                        }
                    ]
                }
            }
        }
    }
    )
    //tapestries all
    event.addJson("plus:advancements/adventure/dark_forest/tapestries_all.json", {
        "display": {
            "icon": {
                "item": "biomemakeover:yellow_tapestry"
            },
            "title": {
                "translate": "advancements.biomemakeover.all_tapestries.title"
            },
            "description": {
                "translate": "advancements.biomemakeover.all_tapestries.description"
            },
            "frame": "challenge",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:adventure/dark_forest/find_tapestry",
        "criteria": tapestryCriteria
    }
    )
    //kill adjudicator
    event.addJson("plus:advancements/adventure/dark_forest/kill_adjudicator.json", {
        "display": {
            "icon": {
                "item": "biomemakeover:adjudicator_tapestry"
            },
            "title": {
                "translate": "plus.advancements.adventure.dark_forest.kill_adjudicator.title"
            },
            "description": {
                "translate": "plus.advancements.adventure.dark_forest.kill_adjudicator.description"
            },
            "frame": "challenge",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": true
        },
        "parent": "plus:adventure/dark_forest/mansion",
        "criteria": {
            "kill_adjudicator": {
                "trigger": "minecraft:player_killed_entity",
                "conditions": {
                    "entity": [
                        {
                            "condition": "minecraft:entity_properties",
                            "entity": "this",
                            "predicate": {
                                "type": "biomemakeover:adjudicator"
                            }
                        }
                    ]
                }
            }
        }
    }
    )
    //nocturnal
    event.addJson("plus:advancements/adventure/dark_forest/nocturnal.json", {
        "display": {
            "icon": {
                "item": "minecraft:potion",
                "nbt": "{Potion:\"biomemakeover:nocturnal_pot\"}"
            },
            "title": {
                "translate": "advancements.biomemakeover.nocturnal_potion.title"
            },
            "description": {
                "translate": "advancements.biomemakeover.nocturnal_potion.description"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:adventure/dark_forest",
        "criteria": {
            "has_effect": {
                "trigger": "minecraft:effects_changed",
                "conditions": {
                    "effects": {
                        "biomemakeover:nocturnal": {}
                    }
                }
            }
        }
    }
    )
    //moth blossom
    event.addJson("plus:advancements/adventure/dark_forest/blossom.json", {
        "display": {
            "icon": {
                "item": "biomemakeover:moth_blossom"
            },
            "title": {
                "translate": "advancements.biomemakeover.moth_blossom.title"
            },
            "description": {
                "translate": "advancements.biomemakeover.moth_blossom.description"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:adventure/dark_forest",
        "criteria": {
            "get_stew": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "biomemakeover:moth_blossom"
                        }
                    ]
                }
            }
        }
    }
    )
    //disc
    event.addJson("plus:advancements/adventure/dark_forest/disc.json", {
        "display": {
            "icon": {
                "item": "biomemakeover:red_rose_music_disk"
            },
            "title": {
                "translate": "plus.advancements.adventure.dark_forest.red_rose_disc.title"
            },
            "description": {
                "translate": "plus.advancements.adventure.dark_forest.red_rose_disc.desc"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:adventure/dark_forest",
        "criteria": {
            "get_disc": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "biomemakeover:red_rose_music_disk"
                        }
                    ]
                }
            }
        }
    }
    )
    event.addJson("plus:advancements/adventure/dark_forest/rootling_seeds.json", {
        "display": {
            "icon": {
                "item": "biomemakeover:rootling_seeds"
            },
            "title": {
                "translate": "advancements.biomemakeover.rootling_seeds.title"
            },
            "description": {
                "translate": "advancements.biomemakeover.rootling_seeds.description"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:adventure/dark_forest",
        "criteria": {
            "get_seed": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "biomemakeover:rootling_seeds"
                        }
                    ]
                }
            }
        }
    }
    )
    event.addJson("plus:advancements/adventure/dark_forest/roasted_bulbus_root.json", {
        "display": {
            "icon": {
                "item": "biomemakeover:roasted_bulbus_root"
            },
            "title": {
                "translate": "advancements.biomemakeover.roasted_bulbus_root.title"
            },
            "description": {
                "translate": "advancements.biomemakeover.roasted_bulbus_root.description"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:adventure/dark_forest/rootling_seeds",
        "criteria": {
            "get_root": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "biomemakeover:roasted_bulbus_root"
                        }
                    ]
                }
            }
        }
    }
    )
})