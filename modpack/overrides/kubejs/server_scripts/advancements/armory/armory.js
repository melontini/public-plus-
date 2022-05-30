onEvent('server.datapack.high_priority', function (event) {
    var hostileCriteria = {};
    hostileAnimals.forEach((entityIndex) => {
        hostileCriteria[entityIndex] = {
            "trigger": "minecraft:player_killed_entity",
            "conditions": {
                "entity": [
                    {
                        "condition": "minecraft:entity_properties",
                        "entity": "this",
                        "predicate": {
                            "type": entityIndex
                        }
                    }
                ]
            }
        }
    })
    var artifactCriteria = {};
    artifactsItems.forEach((artifactIndex) => {
        artifactCriteria[artifactIndex] = {
            "trigger": "minecraft:inventory_changed",
            "conditions": {
                "items": [
                    {
                        "item": artifactIndex
                    }
                ]
            }
        }
    })
    //kitted out
    event.addJson("plus:advancements/armory/get_iron_gear.json", {
        "display": {
            "icon": {
                "item": "minecraft:iron_chestplate"
            },
            "title": {
                "translate": "plus.advancements.armory.get_iron_gear.title"
            },
            "description": {
                "translate": "plus.advancements.armory.get_iron_gear.desc"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:armory/root",
        "criteria": {
            "iron_helmet": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "minecraft:iron_helmet"
                        }
                    ]
                }
            },
            "iron_chestplate": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "minecraft:iron_chestplate"
                        }
                    ]
                }
            },
            "iron_leggings": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "minecraft:iron_leggings"
                        }
                    ]
                }
            },
            "iron_boots": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "minecraft:iron_boots"
                        }
                    ]
                }
            },
            "iron_sword": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "minecraft:iron_sword"
                        }
                    ]
                }
            }
        },
        "requirements": [
            [
                "iron_helmet"
            ],
            [
                "iron_chestplate"
            ],
            [
                "iron_leggings"
            ],
            [
                "iron_boots"
            ],
            [
                "iron_sword"
            ]
        ]
    }
    )
    //diamond_gear
    event.addJson("plus:advancements/armory/get_diamond_gear.json", {
        "display": {
            "icon": {
                "item": "minecraft:diamond_chestplate"
            },
            "title": {
                "translate": "plus.advancements.armory.get_diamond_gear.title"
            },
            "description": {
                "translate": "plus.advancements.armory.get_diamond_gear.desc"
            },
            "frame": "goal",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:armory/get_iron_gear",
        "criteria": {
            "diamond_helmet": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "minecraft:diamond_helmet"
                        }
                    ]
                }
            },
            "diamond_chestplate": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "minecraft:diamond_chestplate"
                        }
                    ]
                }
            },
            "diamond_leggings": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "minecraft:diamond_leggings"
                        }
                    ]
                }
            },
            "diamond_boots": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "minecraft:diamond_boots"
                        }
                    ]
                }
            },
            "diamond_sword": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "minecraft:diamond_sword"
                        }
                    ]
                }
            }
        },
        "requirements": [
            [
                "diamond_helmet"
            ],
            [
                "diamond_chestplate"
            ],
            [
                "diamond_leggings"
            ],
            [
                "diamond_boots"
            ],
            [
                "diamond_sword"
            ]
        ]
    }
    )
    //netherite
    event.addJson("plus:advancements/armory/get_netherite_gear.json", {
        "display": {
            "icon": {
                "item": "minecraft:netherite_chestplate"
            },
            "title": {
                "translate": "plus.advancements.armory.get_netherite_gear.title"
            },
            "description": {
                "translate": "plus.advancements.armory.get_netherite_gear.desc"
            },
            "frame": "challenge",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:armory/get_diamond_gear",
        "criteria": {
            "netherite_helmet": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "minecraft:netherite_helmet"
                        }
                    ]
                }
            },
            "netherite_chestplate": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "minecraft:netherite_chestplate"
                        }
                    ]
                }
            },
            "netherite_leggings": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "minecraft:netherite_leggings"
                        }
                    ]
                }
            },
            "netherite_boots": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "minecraft:netherite_boots"
                        }
                    ]
                }
            },
            "netherite_sword": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "minecraft:netherite_sword"
                        }
                    ]
                }
            }
        },
        "requirements": [
            [
                "netherite_helmet"
            ],
            [
                "netherite_chestplate"
            ],
            [
                "netherite_leggings"
            ],
            [
                "netherite_boots"
            ],
            [
                "netherite_sword"
            ]
        ]
    }
    )
    //leather
    event.addJson("plus:advancements/armory/get_leather_gear.json", {
        "display": {
            "icon": {
                "item": "minecraft:leather_chestplate"
            },
            "title": {
                "translate": "plus.advancements.armory.get_leather_gear.title"
            },
            "description": {
                "translate": "plus.advancements.armory.get_leather_gear.desc"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:armory/root",
        "criteria": {
            "leather_helmet": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "minecraft:leather_helmet"
                        }
                    ]
                }
            },
            "leather_chestplate": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "minecraft:leather_chestplate"
                        }
                    ]
                }
            },
            "leather_leggings": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "minecraft:leather_leggings"
                        }
                    ]
                }
            },
            "leather_boots": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "minecraft:leather_boots"
                        }
                    ]
                }
            }
        },
        "requirements": [
            [
                "leather_helmet"
            ],
            [
                "leather_chestplate"
            ],
            [
                "leather_leggings"
            ],
            [
                "leather_boots"
            ]
        ]
    }
    )
    //cladded
    event.addJson("plus:advancements/armory/get_cladded_gear.json", {
        "display": {
            "icon": {
                "item": "biomemakeover:cladded_chestplate"
            },
            "title": {
                "translate": "plus.advancements.armory.get_cladded_gear.title"
            },
            "description": {
                "translate": "plus.advancements.armory.get_cladded_gear.desc"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:armory/get_leather_gear",
        "criteria": {
            "cladded_helmet": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "biomemakeover:cladded_helmet"
                        }
                    ]
                }
            },
            "cladded_chestplate": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "biomemakeover:cladded_chestplate"
                        }
                    ]
                }
            },
            "cladded_leggings": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "biomemakeover:cladded_leggings"
                        }
                    ]
                }
            },
            "cladded_boots": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "biomemakeover:cladded_boots"
                        }
                    ]
                }
            }
        },
        "requirements": [
            [
                "cladded_helmet"
            ],
            [
                "cladded_chestplate"
            ],
            [
                "cladded_leggings"
            ],
            [
                "cladded_boots"
            ]
        ]
    }
    )
    //artifacts
    event.addJson("plus:advancements/armory/artifacts.json", {
        "display": {
            "icon": {
                "item": "artifacts:umbrella"
            },
            "title": {
                "translate": "plus.advancements.armory.artifacts.title"
            },
            "description": {
                "translate": "plus.advancements.armory.artifacts.desc"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:armory/root",
        "criteria": {
            "get_artifact": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "tag": "artifacts:artifacts"
                        }
                    ]
                }
            }
        },
        "requirements": [
            [
                "get_artifact"
            ]
        ]
    }
    )
    //all artifacts
    event.addJson("plus:advancements/armory/artifacts_all.json", {
        "display": {
            "icon": {
                "item": "artifacts:fire_gauntlet"
            },
            "title": {
                "translate": "plus.advancements.armory.artifacts_all.title"
            },
            "description": {
                "translate": "plus.advancements.armory.artifacts_all.desc"
            },
            "frame": "challenge",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:armory/artifacts",
        "criteria": artifactCriteria
    }
    )
    //anvil
    event.addJson("plus:advancements/armory/anvil.json", {
        "display": {
            "icon": {
                "item": "minecraft:anvil"
            },
            "title": {
                "translate": "plus.advancements.armory.anvil.title"
            },
            "description": {
                "translate": "plus.advancements.armory.anvil.desc"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:armory/root",
        "criteria": {
            "get_anvil": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "minecraft:anvil"
                        }
                    ]
                }
            }
        },
        "requirements": [
            [
                "get_anvil"
            ]
        ]
    }
    )
    //ench table
    event.addJson("plus:advancements/armory/enchanting_table.json", {
        "display": {
            "icon": {
                "item": "minecraft:enchanting_table"
            },
            "title": {
                "translate": "plus.advancements.armory.enchanting_table.title"
            },
            "description": {
                "translate": "plus.advancements.armory.enchanting_table.desc"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:armory/anvil",
        "criteria": {
            "get_enchanting_table": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "minecraft:enchanting_table"
                        }
                    ]
                }
            }
        },
        "requirements": [
            [
                "get_enchanting_table"
            ]
        ]
    }
    )
    //get altar
    event.addJson("plus:advancements/armory/altar.json", {
        "display": {
            "icon": {
                "item": "biomemakeover:altar"
            },
            "title": {
                "translate": "plus.advancements.armory.altar.title"
            },
            "description": {
                "translate": "plus.advancements.armory.altar.desc"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:armory/anvil",
        "criteria": {
            "get_altar": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "biomemakeover:altar"
                        }
                    ]
                }
            }
        },
        "requirements": [
            [
                "get_altar"
            ]
        ]
    }
    )
    //smithing table
    event.addJson("plus:advancements/armory/smithing_table.json", {
        "display": {
            "icon": {
                "item": "minecraft:smithing_table"
            },
            "title": {
                "translate": "plus.advancements.armory.smithing_table.title"
            },
            "description": {
                "translate": "plus.advancements.armory.smithing_table.desc"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:armory/anvil",
        "criteria": {
            "get_smithing_table": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "minecraft:smithing_table"
                        }
                    ]
                }
            }
        },
        "requirements": [
            [
                "get_smithing_table"
            ]
        ]
    }
    )
    //monster hunter
    event.addJson("plus:advancements/armory/monster_hunter.json", {
        "display": {
            "icon": {
                "item": "minecraft:stone_sword"
            },
            "title": {
                "translate": "advancements.adventure.kill_a_mob.title"
            },
            "description": {
                "translate": "advancements.adventure.kill_a_mob.description"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:armory/root",
        "criteria": {
            "kill_mob": {
                "trigger": "minecraft:player_killed_entity",
                "conditions": {
                    "entity": [
                        {
                            "condition": "minecraft:entity_properties",
                            "entity": "this",
                            "predicate": {
                                "type": "#minecraft:hostile"
                            }
                        }
                    ]
                }
            }
        },
        "requirements": [
            [
                "kill_mob"
            ]
        ]
    }
    )
    //boss_hunter
    event.addJson("plus:advancements/armory/boss_hunter.json", {
        "display": {
            "icon": {
                "item": "minecraft:netherite_sword"
            },
            "title": {
                "translate": "plus.advancements.armory.boss_hunter.title"
            },
            "description": {
                "translate": "plus.advancements.armory.boss_hunter.description"
            },
            "frame": "challenge",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:armory/monster_hunter",
        "criteria": {
            "kill_dragon": {
                "trigger": "minecraft:player_killed_entity",
                "conditions": {
                    "entity": [
                        {
                            "condition": "minecraft:entity_properties",
                            "entity": "this",
                            "predicate": {
                                "type": "minecraft:ender_dragon"
                            }
                        }
                    ]
                }
            },
            "kill_wither": {
                "trigger": "minecraft:player_killed_entity",
                "conditions": {
                    "entity": [
                        {
                            "condition": "minecraft:entity_properties",
                            "entity": "this",
                            "predicate": {
                                "type": "minecraft:wither"
                            }
                        }
                    ]
                }
            },
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
        },
        "requirements": [
            [
                "kill_dragon"
            ],
            [
                "kill_wither"
            ],
            [
                "kill_adjudicator"
            ]
        ]
    }
    )
    //cleansing
    event.addJson("plus:advancements/armory/cleansing.json", {
        "display": {
            "icon": {
                "item": "minecraft:golden_sword"
            },
            "title": {
                "translate": "plus.advancements.armory.cleansing.title"
            },
            "description": {
                "translate": "plus.advancements.armory.cleansing.desc"
            },
            "frame": "challenge",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:armory/boss_hunter",
        "criteria": hostileCriteria
    }
    )
    //used totem
    event.addJson("plus:advancements/armory/used_totem.json", {
        "display": {
            "icon": {
                "item": "minecraft:totem_of_undying"
            },
            "title": {
                "translate": "plus.advancements.armory.used_totem.title"
            },
            "description": {
                "translate": "plus.advancements.armory.used_totem.desc"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:armory/monster_hunter",
        "criteria": {
            "used_totem": {
                "trigger": "minecraft:used_totem",
                "conditions": {
                    "item": {
                        "item": "minecraft:totem_of_undying"
                    }
                }
            }
        },
        "requirements": [
            [
                "used_totem"
            ]
        ]
    }
    )
    //used enchanted totem
    event.addJson("plus:advancements/armory/used_enchanted_totem.json", {
        "display": {
            "icon": {
                "item": "biomemakeover:enchanted_totem"
            },
            "title": {
                "translate": "plus.advancements.armory.used_totem_ench.title"
            },
            "description": {
                "translate": "plus.advancements.armory.used_totem_ench.desc"
            },
            "frame": "goal",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:armory/used_totem",
        "criteria": {
            "used_totem": {
                "trigger": "minecraft:used_totem",
                "conditions": {
                    "item": {
                        "item": "biomemakeover:enchanted_totem"
                    }
                }
            }
        },
        "requirements": [
            [
                "used_totem"
            ]
        ]
    }
    )
    //throw trident
    event.addJson("plus:advancements/armory/throw_trident.json", {
        "display": {
            "icon": {
                "item": "minecraft:trident",
                "nbt": "{Damage:0}"
            },
            "title": {
                "translate": "advancements.adventure.throw_trident.title"
            },
            "description": {
                "translate": "advancements.adventure.throw_trident.description"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:armory/monster_hunter",
        "criteria": {
            "shot_trident": {
                "trigger": "minecraft:player_hurt_entity",
                "conditions": {
                    "damage": {
                        "type": {
                            "is_projectile": true,
                            "direct_entity": {
                                "type": "minecraft:trident"
                            }
                        }
                    }
                }
            }
        },
        "requirements": [
            [
                "shot_trident"
            ]
        ]
    }
    )
    //villager lightning
    event.addJson("plus:advancements/armory/strike_villager_lightning.json", {
        "display": {
            "icon": {
                "item": "minecraft:trident",
                "nbt": "{Damage:0}"
            },
            "title": {
                "translate": "advancements.adventure.very_very_frightening.title"
            },
            "description": {
                "translate": "advancements.adventure.very_very_frightening.description"
            },
            "frame": "challenge",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:armory/throw_trident",
        "criteria": {
            "struck_villager": {
                "trigger": "minecraft:channeled_lightning",
                "conditions": {
                    "victims": [
                        [
                            {
                                "condition": "minecraft:entity_properties",
                                "predicate": {
                                    "type": "minecraft:villager"
                                },
                                "entity": "this"
                            }
                        ]
                    ]
                }
            }
        },
        "requirements": [
            [
                "struck_villager"
            ]
        ]
    }
    )
    //take aim
    event.addJson("plus:advancements/armory/bow.json", {
        "display": {
            "icon": {
                "item": "minecraft:bow",
                "nbt": "{Damage:0}"
            },
            "title": {
                "translate": "advancements.adventure.shoot_arrow.title"
            },
            "description": {
                "translate": "advancements.adventure.shoot_arrow.description"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:armory/monster_hunter",
        "criteria": {
            "shot_arrow": {
                "trigger": "minecraft:player_hurt_entity",
                "conditions": {
                    "damage": {
                        "type": {
                            "is_projectile": true,
                            "direct_entity": {
                                "type": "#minecraft:arrows"
                            }
                        }
                    }
                }
            }
        },
        "requirements": [
            [
                "shot_arrow"
            ]
        ]
    }
    )
    //crossbow
    event.addJson("plus:advancements/armory/crossbow.json", {
        "display": {
            "icon": {
                "item": "minecraft:crossbow",
                "nbt": "{Damage:0}"
            },
            "title": {
                "translate": "advancements.adventure.ol_betsy.title"
            },
            "description": {
                "translate": "advancements.adventure.ol_betsy.description"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:armory/monster_hunter",
        "criteria": {
            "shot_crossbow": {
                "trigger": "minecraft:shot_crossbow",
                "conditions": {
                    "item": {
                        "item": "minecraft:crossbow"
                    }
                }
            }
        },
        "requirements": [
            [
                "shot_crossbow"
            ]
        ]
    }
    )
    //crossbow 2
    event.addJson("plus:advancements/armory/crossbow_arbalistic.json", {
        "display": {
            "icon": {
                "item": "minecraft:crossbow",
                "nbt": "{Damage:0}"
            },
            "title": {
                "translate": "advancements.adventure.arbalistic.title"
            },
            "description": {
                "translate": "advancements.adventure.arbalistic.description"
            },
            "frame": "challenge",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": true
        },
        "parent": "plus:armory/crossbow",
        "criteria": {
            "arbalistic": {
                "trigger": "minecraft:killed_by_crossbow",
                "conditions": {
                    "unique_entity_types": 5
                }
            }
        },
        "requirements": [
            [
                "arbalistic"
            ]
        ]
    }
    )
    //crossbow 3
    event.addJson("plus:advancements/armory/whos_the_pillager_now.json", {
        "display": {
            "icon": {
                "item": "minecraft:crossbow",
                "nbt": "{Damage:0}"
            },
            "title": {
                "translate": "advancements.adventure.whos_the_pillager_now.title"
            },
            "description": {
                "translate": "advancements.adventure.whos_the_pillager_now.description"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:armory/crossbow",
        "criteria": {
            "kill_pillager": {
                "trigger": "minecraft:killed_by_crossbow",
                "conditions": {
                    "victims": [
                        [
                            {
                                "condition": "minecraft:entity_properties",
                                "predicate": {
                                    "type": "minecraft:pillager"
                                },
                                "entity": "this"
                            }
                        ]
                    ]
                }
            }
        },
        "requirements": [
            [
                "kill_pillager"
            ]
        ]
    }
    )
    //crossbow 4
    event.addJson("plus:advancements/armory/two_birds_one_arrow.json", {
        "display": {
            "icon": {
                "item": "minecraft:crossbow",
                "nbt": "{Damage:0}"
            },
            "title": {
                "translate": "advancements.adventure.two_birds_one_arrow.title"
            },
            "description": {
                "translate": "advancements.adventure.two_birds_one_arrow.description"
            },
            "frame": "challenge",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": true
        },
        "parent": "plus:armory/crossbow",
        "criteria": {
            "two_birds": {
                "trigger": "minecraft:killed_by_crossbow",
                "conditions": {
                    "victims": [
                        [
                            {
                                "condition": "minecraft:entity_properties",
                                "predicate": {
                                    "type": "minecraft:phantom"
                                },
                                "entity": "this"
                            }
                        ],
                        [
                            {
                                "condition": "minecraft:entity_properties",
                                "predicate": {
                                    "type": "minecraft:phantom"
                                },
                                "entity": "this"
                            }
                        ]
                    ]
                }
            }
        },
        "requirements": [
            [
                "two_birds"
            ]
        ]
    }
    )
    //bow far away
    event.addJson("plus:advancements/armory/bow_far_away.json", {
        "display": {
            "icon": {
                "item": "minecraft:spectral_arrow"
            },
            "title": {
                "translate": "advancements.adventure.sniper_duel.title"
            },
            "description": {
                "translate": "advancements.adventure.sniper_duel.description"
            },
            "frame": "challenge",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:armory/bow",
        "criteria": {
            "killed_skeleton": {
                "trigger": "minecraft:player_killed_entity",
                "conditions": {
                    "entity": [
                        {
                            "condition": "minecraft:entity_properties",
                            "predicate": {
                                "type": "minecraft:skeleton",
                                "distance": {
                                    "horizontal": {
                                        "min": 50.0
                                    }
                                }
                            },
                            "entity": "this"
                        }
                    ],
                    "killing_blow": {
                        "is_projectile": true
                    }
                }
            }
        },
        "requirements": [
            [
                "killed_skeleton"
            ]
        ]
    }
    )
    //bullseye
    event.addJson("plus:advancements/armory/bullseye.json", {
        "display": {
            "icon": {
                "item": "minecraft:target"
            },
            "title": {
                "translate": "advancements.adventure.bullseye.title"
            },
            "description": {
                "translate": "advancements.adventure.bullseye.description"
            },
            "frame": "challenge",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:armory/bow",
        "criteria": {
            "bullseye": {
                "trigger": "minecraft:target_hit",
                "conditions": {
                    "signal_strength": 15,
                    "projectile": [
                        {
                            "condition": "minecraft:entity_properties",
                            "predicate": {
                                "distance": {
                                    "horizontal": {
                                        "min": 30.0
                                    }
                                }
                            },
                            "entity": "this"
                        }
                    ]
                }
            }
        },
        "requirements": [
            [
                "bullseye"
            ]
        ]
    }
    )
})