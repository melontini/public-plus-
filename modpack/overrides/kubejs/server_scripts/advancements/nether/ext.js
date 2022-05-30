onEvent('server.datapack.high_priority', function (event) {
    var biomesCriteria = {};
    netherBiomes.forEach((biomesIndex) => {
        biomesCriteria[biomesIndex] = {
            "trigger": "minecraft:location",
            "conditions": {
                "location": {
                    "biome": biomesIndex
                }
            }
        }
    })
    var potionCriteria = {};
    potionEffects.forEach((potionIndex) => {
        potionCriteria[potionIndex] = {
            potionIndex: {},
        }
    })
    var effectCriteria = {};
    effectEffects.forEach((effectIndex) => {
        effectCriteria[effectIndex] = {
            effectIndex: {},
        }
    })
    event.addJson("minecraft:advancements/nether/explore_nether.json", {
        "display": {
            "icon": {
                "item": "minecraft:netherite_boots",
                "nbt": "{Damage:0}"
            },
            "title": {
                "translate": "advancements.nether.explore_nether.title"
            },
            "description": {
                "translate": "advancements.nether.explore_nether.description"
            },
            "frame": "challenge",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "minecraft:nether/ride_strider",
        "criteria": biomesCriteria
    }
    )
    //all potions
    event.addJson("minecraft:advancements/nether/all_potions.json", {
        "display": {
            "icon": {
                "item": "minecraft:milk_bucket"
            },
            "title": {
                "translate": "advancements.nether.all_potions.title"
            },
            "description": {
                "translate": "advancements.nether.all_potions.description"
            },
            "frame": "challenge",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "minecraft:nether/brew_potion",
        "criteria": {
            "all_effects": {
                "trigger": "minecraft:effects_changed",
                "conditions": {
                    "effects": potionCriteria
                }
            }
        }
    }
    )
    //all effects
    event.addJson("minecraft:advancements/nether/all_effects.json", {
        "display": {
            "icon": {
                "item": "minecraft:bucket"
            },
            "title": {
                "translate": "advancements.nether.all_effects.title"
            },
            "description": {
                "translate": "advancements.nether.all_effects.description"
            },
            "frame": "challenge",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": true
        },
        "parent": "minecraft:nether/all_potions",
        "criteria": {
            "all_effects": {
                "trigger": "minecraft:effects_changed",
                "conditions": {
                    "effects": effectCriteria
                }
            }
        }
    }
    )
    //cover me in debris
    event.addJson("minecraft:advancements/nether/netherite_armor.json", {
        "parent": "minecraft:nether/obtain_ancient_debris",
        "display": {
            "icon": {
                "item": "minecraft:netherite_chestplate",
                "nbt": "{Damage:0}"
            },
            "title": {
                "translate": "advancements.nether.netherite_armor.title"
            },
            "description": {
                "translate": "advancements.nether.netherite_armor.description"
            },
            "frame": "challenge",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "criteria": {
            "netherite_armor_helmet": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "minecraft:netherite_helmet"
                        }
                    ]
                }
            },
            "netherite_armor_chestplate": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "minecraft:netherite_chestplate"
                        }
                    ]
                }
            },
            "netherite_armor_leggings": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "minecraft:netherite_leggings"
                        }
                    ]
                }
            },
            "netherite_armor_boots": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "minecraft:netherite_boots"
                        }
                    ]
                }
            }
        },
        "requirements": [
            [
                "netherite_armor_helmet"
            ],
            [
                "netherite_armor_chestplate"
            ],
            [
                "netherite_armor_leggings"
            ],
            [
                "netherite_armor_boots"
            ]
        ]
    }
    )
    //Sad obsidian
    event.addJson("plus:advancements/nether/onion_obsidian.json", {
        "display": {
            "icon": {
                "item": "farmersdelight:onion"
            },
            "title": {
                "translate": "plus.advancements.nether.onion_obsidian.title"
            },
            "description": {
                "translate": "plus.advancements.nether.onion_obsidian.desc"
            },
            "frame": "goal",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": true
        },
        "parent": "minecraft:nether/obtain_crying_obsidian",
        "criteria": {
            "placed_block": {
                "trigger": "minecraft:impossible"
            }
        },
        "requirements": [
            [
                "placed_block"
            ]
        ]
    }
    )
})