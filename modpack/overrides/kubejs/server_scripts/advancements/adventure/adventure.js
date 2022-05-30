onEvent('server.datapack.high_priority', function (event) {
    var biomesCriteria = {};
    overworldBiomes.forEach((biomesIndex) => {
        biomesCriteria[biomesIndex] = {
            "trigger": "minecraft:location",
            "conditions": {
                "location": {
                    "biome": biomesIndex
                }
            }
        }
    })
    var musicDiscCriteria = {};
    musicDiscs.forEach((discIndex) => {
        musicDiscCriteria[discIndex] = {
            "trigger": "minecraft:inventory_changed",
            "conditions": {
                "items": [
                    {
                        "item": discIndex
                    }
                ]
            }
        }
    })
    //que the music, music collector
    event.addJson("plus:advancements/adventure/all_discs.json", {
        "display": {
            "icon": {
                "item": "minecraft:music_disc_stal"
            },
            "title": {
                "translate": "plus.advancements.adventure.all_discs.title"
            },
            "description": {
                "translate": "plus.advancements.adventure.all_discs.desc"
            },
            "frame": "challenge",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:adventure/root",
        "criteria": musicDiscCriteria
    }
    )
    //kill mimic
    event.addJson("plus:advancements/adventure/mimic.json", {
        "display": {
            "icon": {
                "item": "artifacts:mimic_spawn_egg"
            },
            "title": {
                "translate": "plus.advancements.adventure.mimic.title"
            },
            "description": {
                "translate": "plus.advancements.adventure.mimic.desc"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": true
        },
        "parent": "plus:adventure/root",
        "criteria": {
            "kill_mimic": {
                "trigger": "minecraft:player_killed_entity",
                "conditions": {
                    "entity": [
                        {
                            "condition": "minecraft:entity_properties",
                            "entity": "this",
                            "predicate": {
                                "type": "artifacts:mimic"
                            }
                        }
                    ]
                }
            }
        }
    }
    )
    //vol exile
    event.addJson("plus:advancements/adventure/voluntary_exile.json", {
        "display": {
            "icon": {
                "item": "minecraft:white_banner",
                "nbt": "{BlockEntityTag:{Patterns:[{Color:9,Pattern:\"mr\"},{Color:8,Pattern:\"bs\"},{Color:7,Pattern:\"cs\"},{Color:8,Pattern:\"bo\"},{Color:15,Pattern:\"ms\"},{Color:8,Pattern:\"hh\"},{Color:8,Pattern:\"mc\"},{Color:15,Pattern:\"bo\"}]},HideFlags:32,display:{Name:\u0027{\"color\":\"gold\",\"translate\":\"block.minecraft.ominous_banner\"}\u0027}}"
            },
            "title": {
                "translate": "advancements.adventure.voluntary_exile.title"
            },
            "description": {
                "translate": "advancements.adventure.voluntary_exile.description"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": true
        },
        "parent": "plus:adventure/root",
        "criteria": {
            "kill_leader": {
                "trigger": "minecraft:player_killed_entity",
                "conditions": {
                    "entity": [
                        {
                            "condition": "minecraft:entity_properties",
                            "predicate": {
                                "type": "#minecraft:raiders",
                                "equipment": {
                                    "head": {
                                        "item": "minecraft:white_banner",
                                        "nbt": "{BlockEntityTag:{Patterns:[{Color:9,Pattern:\"mr\"},{Color:8,Pattern:\"bs\"},{Color:7,Pattern:\"cs\"},{Color:8,Pattern:\"bo\"},{Color:15,Pattern:\"ms\"},{Color:8,Pattern:\"hh\"},{Color:8,Pattern:\"mc\"},{Color:15,Pattern:\"bo\"}]},HideFlags:32,display:{Name:\u0027{\"color\":\"gold\",\"translate\":\"block.minecraft.ominous_banner\"}\u0027}}"
                                    }
                                }
                            },
                            "entity": "this"
                        }
                    ]
                }
            }
        }
    }
    )
    //hero of the village
    event.addJson("plus:advancements/adventure/hero_of_the_village.json", {
        "display": {
            "icon": {
                "item": "minecraft:white_banner",
                "nbt": "{BlockEntityTag:{Patterns:[{Color:9,Pattern:\"mr\"},{Color:8,Pattern:\"bs\"},{Color:7,Pattern:\"cs\"},{Color:8,Pattern:\"bo\"},{Color:15,Pattern:\"ms\"},{Color:8,Pattern:\"hh\"},{Color:8,Pattern:\"mc\"},{Color:15,Pattern:\"bo\"}]},HideFlags:32,display:{Name:\u0027{\"color\":\"gold\",\"translate\":\"block.minecraft.ominous_banner\"}\u0027}}"
            },
            "title": {
                "translate": "advancements.adventure.hero_of_the_village.title"
            },
            "description": {
                "translate": "advancements.adventure.hero_of_the_village.description"
            },
            "frame": "challenge",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": true
        },
        "parent": "plus:adventure/voluntary_exile",
        "criteria": {
            "hero_of_the_village": {
                "trigger": "minecraft:hero_of_the_village",
                "conditions": {}
            }
        }
    }
    )
    //honey block save
    event.addJson("plus:advancements/adventure/honey_save.json", {
        "display": {
            "icon": {
                "item": "minecraft:honey_block"
            },
            "title": {
                "translate": "advancements.adventure.honey_block_slide.title"
            },
            "description": {
                "translate": "advancements.adventure.honey_block_slide.description"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:adventure/root",
        "criteria": {
            "honey_block_slide": {
                "trigger": "minecraft:slide_down_block",
                "conditions": {
                    "block": "minecraft:honey_block"
                }
            }
        }
    }
    )
    //first trade overwrite
    event.addJson("morevillagers:advancements/first_trade.json", {
        "display": {
            "icon": {
                "item": "minecraft:emerald"
            },
            "title": {
                "translate": "plus.advancements.adventure.first_trade.title"
            },
            "description": {
                "translate": "plus.advancements.adventure.first_trade.desc"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:adventure/root",
        "criteria": {
            "villagertrade": {
                "trigger": "minecraft:villager_trade"
            }
        }
    }
    )
    //all biomes overwrite
    event.addJson("minecraft:advancements/adventure/adventuring_time.json", {
        "display": {
            "icon": {
                "item": "minecraft:diamond_boots",
                "nbt": "{Damage:0}"
            },
            "title": {
                "translate": "advancements.adventure.adventuring_time.title"
            },
            "description": {
                "translate": "advancements.adventure.adventuring_time.description"
            },
            "frame": "challenge",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:adventure/root",
        "criteria": biomesCriteria
    }
    )
})