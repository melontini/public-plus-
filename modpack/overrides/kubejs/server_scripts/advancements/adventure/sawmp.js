onEvent('server.datapack.high_priority', function (event) {
    event.addJson("plus:advancements/adventure/swamp.json", {
        "display": {
            "icon": {
                "item": "biomemakeover:willow_sapling"
            },
            "title": {
                "translate": "plus.advancements.adventure.swamp.title"
            },
            "description": {
                "translate": "plus.advancements.adventure.swamp.desc"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:adventure/root",
        "criteria": {
            "get_to_swamp": {
                "trigger": "minecraft:location",
                "conditions": {
                    "location": {
                        "biome": "minecraft:swamp"
                    }
                }
            },
            "get_to_swamp_hills": {
                "trigger": "minecraft:location",
                "conditions": {
                    "location": {
                        "biome": "minecraft:swamp_hills"
                    }
                }
            }
        },
        "requirements": [
            [
                "get_to_swamp",
                "get_to_swamp_hills"
            ]
        ]
    }
    )
    //antidote
    event.addJson("plus:advancements/adventure/swamp/antidote_pot.json", {
        "display": {
            "icon": {
                "item": "minecraft:potion",
                "nbt": "{Potion:\"biomemakeover:antidote_pot\"}"
            },
            "title": {
                "translate": "advancements.biomemakeover.antidote.title"
            },
            "description": {
                "translate": "advancements.biomemakeover.antidote.description"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:adventure/swamp",
        "criteria": {
            "has_effect": {
                "trigger": "biomemakeover:antidote"
            }
        },
    }
    )
    //catch lightining bug
    event.addJson("plus:advancements/adventure/swamp/lightning_bug.json", {
        "display": {
            "icon": {
                "item": "biomemakeover:lightning_bug_bottle"
            },
            "title": {
                "translate": "advancements.biomemakeover.lightning_bug_bottle.title"
            },
            "description": {
                "translate": "advancements.biomemakeover.lightning_bug_bottle.description"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:adventure/swamp",
        "criteria": {
            "get_bug": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "biomemakeover:lightning_bug_bottle"
                        }
                    ]
                }
            }
        }
    }
    )
    //lightning bottle
    event.addJson("plus:advancements/adventure/swamp/lightning_bottle.json", {
        "display": {
            "icon": {
                "item": "biomemakeover:lightning_bottle"
            },
            "title": {
                "translate": "advancements.biomemakeover.lightning_bottle.title"
            },
            "description": {
                "translate": "advancements.biomemakeover.lightning_bottle.description"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:adventure/swamp/lightning_bug",
        "criteria": {
            "get_bug": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "biomemakeover:lightning_bottle"
                        }
                    ]
                }
            }
        }
    }
    )
    //king slime
    event.addJson("plus:advancements/adventure/swamp/king_slime.json", {
        "display": {
            "icon": {
                "item": "minecraft:slime_ball"
            },
            "title": {
                "translate": "advancements.biomemakeover.kill_giant_slime.title"
            },
            "description": {
                "translate": "advancements.biomemakeover.kill_giant_slime.description"
            },
            "frame": "goal",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": true
        },
        "parent": "plus:adventure/swamp",
        "criteria": {
            "kill_king_slime": {
                "trigger": "minecraft:player_killed_entity",
                "conditions": {
                    "entity": [
                        {
                            "condition": "minecraft:entity_properties",
                            "predicate": {
                                "type": "biomemakeover:giant_slime"
                            },
                            "entity": "this"
                        }
                    ]
                }
            }
        }
    }
    )
    //music disc
    event.addJson("plus:advancements/adventure/swamp/disc.json", {
        "display": {
            "icon": {
                "item": "biomemakeover:swamp_jives_music_disk"
            },
            "title": {
                "translate": "plus.advancements.adventure.swamp.disc.title"
            },
            "description": {
                "translate": "plus.advancements.adventure.swamp.disc.desc"
            },
            "frame": "goal",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:adventure/swamp",
        "criteria": {
            "get_disc": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "biomemakeover:swamp_jives_music_disk"
                        }
                    ]
                }
            }
        }
    }
    )
    //sunken ruin
    event.addJson("plus:advancements/adventure/swamp/sunken_ruin.json", {
        "display": {
            "icon": {
                "item": "minecraft:cauldron"
            },
            "title": {
                "translate": "advancements.biomemakeover.sunken_ruin.title"
            },
            "description": {
                "translate": "advancements.biomemakeover.sunken_ruin.description"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:adventure/swamp",
        "criteria": {
            "sunken_ruin": {
                "trigger": "minecraft:location",
                "conditions": {
                    "location": {
                        "feature": "biomemakeover:sunken_ruin"
                    }
                }
            }
        }
    }
    )
    //hat
    event.addJson("plus:advancements/adventure/swamp/witch_hat.json", {
        "display": {
            "icon": {
                "item": "biomemakeover:witch_hat"
            },
            "title": {
                "translate": "advancements.biomemakeover.witch_hat.title"
            },
            "description": {
                "translate": "advancements.biomemakeover.witch_hat.description"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:adventure/swamp/sunken_ruin",
        "criteria": {
            "wear_hat": {
                "trigger": "biomemakeover:wear_armor",
                "conditions": {
                    "item": {
                        "item": "biomemakeover:witch_hat"
                    }
                }
            }
        }
    }
    )
    //trade
    event.addJson("plus:advancements/adventure/swamp/witch_quest.json", {
        "display": {
            "icon": {
                "item": "minecraft:glowstone_dust"
            },
            "title": {
                "translate": "advancements.biomemakeover.witch_quest.title"
            },
            "description": {
                "translate": "advancements.biomemakeover.witch_quest.description"
            },
            "frame": "goal",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:adventure/swamp/witch_hat",
        "criteria": {
            "witch_quest": {
                "trigger": "biomemakeover:witch_trade"
            }
        }
    }
    )
})