onEvent('server.datapack.high_priority', function (event) {
    event.addJson("plus:advancements/adventure/mushroom_fields.json", {
        "display": {
            "icon": {
                "item": "biomemakeover:blighted_balsa_sapling"
            },
            "title": {
                "translate": "plus.advancements.adventure.mushroom_fields.title"
            },
            "description": {
                "translate": "plus.advancements.adventure.mushroom_fields.desc"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:adventure/root",
        "criteria": {
            "get_to_mushroom_fields": {
                "trigger": "minecraft:location",
                "conditions": {
                    "location": {
                        "biome": "minecraft:mushroom_fields"
                    }
                }
            },
            "get_to_mushroom_field_shore": {
                "trigger": "minecraft:location",
                "conditions": {
                    "location": {
                        "biome": "minecraft:mushroom_field_shore"
                    }
                }
            }
        },
        "requirements": [
            [
                "get_to_mushroom_fields",
                "get_to_mushroom_field_shore"
            ]
        ]
    }
    )
    //disc
    event.addJson("plus:advancements/adventure/mushroom_fields/disc.json", {
        "display": {
            "icon": {
                "item": "biomemakeover:button_mushrooms_music_disk"
            },
            "title": {
                "translate": "plus.advancements.adventure.mushroom_fields.disc.title"
            },
            "description": {
                "translate": "plus.advancements.adventure.mushroom_fields.disc.desc"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:adventure/mushroom_fields/blighted_balsa_boat",
        "criteria": {
            "get_petals": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "biomemakeover:button_mushrooms_music_disk"
                        }
                    ]
                }
            }
        }
    }
    )
    //fish save
    event.addJson("plus:advancements/adventure/mushroom_fields/fish_save.json", {
        "display": {
            "icon": {
                "item": "biomemakeover:glowfish_bucket"
            },
            "title": {
                "translate": "advancements.biomemakeover.glowfish_bucket_save.title"
            },
            "description": {
                "translate": "advancements.biomemakeover.glowfish_bucket_save.description"
            },
            "frame": "challenge",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:adventure/mushroom_fields/blighted_balsa_boat",
        "criteria": {
            "fish_save": {
                "trigger": "biomemakeover:glowfish_bucket_save",
                "conditions": {
                }
            }
        }
    }
    )
    //boat
    event.addJson("plus:advancements/adventure/mushroom_fields/blighted_balsa_boat.json", {
        "display": {
            "icon": {
                "item": "biomemakeover:blighted_balsa_boat"
            },
            "title": {
                "translate": "advancements.biomemakeover.blighted_balsa_boat.title"
            },
            "description": {
                "translate": "advancements.biomemakeover.blighted_balsa_boat.description"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:adventure/mushroom_fields",
        "criteria": {
            "get_boat": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "biomemakeover:blighted_balsa_boat"
                        }
                    ]
                }
            }
        }
    }
    )
    //all shrooms
    event.addJson("plus:advancements/adventure/mushroom_fields/all_glowshrooms.json", {
        "display": {
            "icon": {
                "item": "biomemakeover:purple_glowshroom"
            },
            "title": {
                "translate": "advancements.biomemakeover.all_shrooms.title"
            },
            "description": {
                "translate": "plus.advancements.adventure.mushroom_fields.all_shrooms.desc"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:adventure/mushroom_fields",
        "criteria": {
            "get_shrooms": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "biomemakeover:purple_glowshroom"
                        },
                        {
                            "item": "biomemakeover:green_glowshroom"
                        },
                        {
                            "item": "biomemakeover:orange_glowshroom"
                        }
                    ]
                }
            }
        }
    }
    )
    //stone
    event.addJson("plus:advancements/adventure/mushroom_fields/stone.json", {
        "display": {
            "icon": {
                "item": "biomemakeover:blighted_cobblestone"
            },
            "title": {
                "translate": "advancements.biomemakeover.blighted_stone.title"
            },
            "description": {
                "translate": "advancements.biomemakeover.blighted_stone.description"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:adventure/mushroom_fields/all_glowshrooms",
        "criteria": {
            "get_cobble": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "biomemakeover:blighted_cobblestone"
                        }
                    ]
                }
            },
            "get_brick": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "biomemakeover:blighted_stone_bricks"
                        }
                    ]
                }
            }
        },
        "requirements": [
            [
                "get_cobble",
                "get_brick"
            ]
        ]
    }
    )
})