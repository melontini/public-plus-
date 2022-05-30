onEvent('server.datapack.high_priority', function (event) {
    var breedableCriteria = {};
    submissive.forEach((breedIndex) => {
        breedableCriteria[breedIndex] = {
            "trigger": "minecraft:bred_animals",
            "conditions": {
                "child": [
                    {
                        "condition": "minecraft:entity_properties",
                        "predicate": {
                            "type": breedIndex
                        },
                        "entity": "this"
                    }
                ]
            }
        }
    })
    breedable.forEach((breedIndex) => {
        breedableCriteria[breedIndex] = {
            "trigger": "minecraft:bred_animals",
            "conditions": {
                "parent": [
                    {
                        "condition": "minecraft:entity_properties",
                        "predicate": {
                            "type": breedIndex
                        },
                        "entity": "this"
                    }
                ],
                "partner": [
                    {
                        "condition": "minecraft:entity_properties",
                        "predicate": {
                            "type": breedIndex
                        },
                        "entity": "this"
                    }
                ]
            }
        }
    })
    var cropsCriteria = {};
    crops.forEach((cropIndex) => {
        cropsCriteria[cropIndex] = {
            "trigger": "minecraft:placed_block",
            "conditions": {
                "block": cropIndex
            }
        }
    })
    event.addJson("plus:advancements/husbandry/breed.json", {
        "display": {
            "icon": {
                "item": "minecraft:carrot"
            },
            "title": {
                "translate": "advancements.husbandry.breed_an_animal.title"
            },
            "description": {
                "translate": "advancements.husbandry.breed_an_animal.description"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:husbandry/root",
        "criteria": {
            "bred": {
                "trigger": "minecraft:bred_animals",
                "conditions": {}
            }
        },
    }
    )
    //bred all
    event.addJson("plus:advancements/husbandry/bred_all.json", {
        "display": {
            "icon": {
                "item": "farmersdelight:horse_feed"
            },
            "title": {
                "translate": "advancements.husbandry.breed_all_animals.title"
            },
            "description": {
                "translate": "advancements.husbandry.breed_all_animals.description"
            },
            "frame": "challenge",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:husbandry/breed",
        "criteria": breedableCriteria
    }
    )
    event.addJson("plus:advancements/husbandry/bff.json", {
        "display": {
            "icon": {
                "item": "minecraft:lead"
            },
            "title": {
                "translate": "advancements.husbandry.tame_an_animal.title"
            },
            "description": {
                "translate": "advancements.husbandry.tame_an_animal.description"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:husbandry/root",
        "criteria": {
            "tamed_animal": {
                "trigger": "minecraft:tame_animal",
                "conditions": {}
            }
        }
    }
    )
    //cat person
    event.addJson("plus:advancements/husbandry/all_cats.json", {
        "display": {
            "icon": {
                "item": "minecraft:cod"
            },
            "title": {
                "translate": "advancements.husbandry.complete_catalogue.title"
            },
            "description": {
                "translate": "advancements.husbandry.complete_catalogue.description"
            },
            "frame": "challenge",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:husbandry/bff",
        "criteria": {
            "textures/entity/cat/tabby.png": {
                "trigger": "minecraft:tame_animal",
                "conditions": {
                    "entity": [
                        {
                            "condition": "minecraft:entity_properties",
                            "predicate": {
                                "catType": "minecraft:textures/entity/cat/tabby.png"
                            },
                            "entity": "this"
                        }
                    ]
                }
            },
            "textures/entity/cat/black.png": {
                "trigger": "minecraft:tame_animal",
                "conditions": {
                    "entity": [
                        {
                            "condition": "minecraft:entity_properties",
                            "predicate": {
                                "catType": "minecraft:textures/entity/cat/black.png"
                            },
                            "entity": "this"
                        }
                    ]
                }
            },
            "textures/entity/cat/red.png": {
                "trigger": "minecraft:tame_animal",
                "conditions": {
                    "entity": [
                        {
                            "condition": "minecraft:entity_properties",
                            "predicate": {
                                "catType": "minecraft:textures/entity/cat/red.png"
                            },
                            "entity": "this"
                        }
                    ]
                }
            },
            "textures/entity/cat/siamese.png": {
                "trigger": "minecraft:tame_animal",
                "conditions": {
                    "entity": [
                        {
                            "condition": "minecraft:entity_properties",
                            "predicate": {
                                "catType": "minecraft:textures/entity/cat/siamese.png"
                            },
                            "entity": "this"
                        }
                    ]
                }
            },
            "textures/entity/cat/british_shorthair.png": {
                "trigger": "minecraft:tame_animal",
                "conditions": {
                    "entity": [
                        {
                            "condition": "minecraft:entity_properties",
                            "predicate": {
                                "catType": "minecraft:textures/entity/cat/british_shorthair.png"
                            },
                            "entity": "this"
                        }
                    ]
                }
            },
            "textures/entity/cat/calico.png": {
                "trigger": "minecraft:tame_animal",
                "conditions": {
                    "entity": [
                        {
                            "condition": "minecraft:entity_properties",
                            "predicate": {
                                "catType": "minecraft:textures/entity/cat/calico.png"
                            },
                            "entity": "this"
                        }
                    ]
                }
            },
            "textures/entity/cat/persian.png": {
                "trigger": "minecraft:tame_animal",
                "conditions": {
                    "entity": [
                        {
                            "condition": "minecraft:entity_properties",
                            "predicate": {
                                "catType": "minecraft:textures/entity/cat/persian.png"
                            },
                            "entity": "this"
                        }
                    ]
                }
            },
            "textures/entity/cat/ragdoll.png": {
                "trigger": "minecraft:tame_animal",
                "conditions": {
                    "entity": [
                        {
                            "condition": "minecraft:entity_properties",
                            "predicate": {
                                "catType": "minecraft:textures/entity/cat/ragdoll.png"
                            },
                            "entity": "this"
                        }
                    ]
                }
            },
            "textures/entity/cat/white.png": {
                "trigger": "minecraft:tame_animal",
                "conditions": {
                    "entity": [
                        {
                            "condition": "minecraft:entity_properties",
                            "predicate": {
                                "catType": "minecraft:textures/entity/cat/white.png"
                            },
                            "entity": "this"
                        }
                    ]
                }
            },
            "textures/entity/cat/jellie.png": {
                "trigger": "minecraft:tame_animal",
                "conditions": {
                    "entity": [
                        {
                            "condition": "minecraft:entity_properties",
                            "predicate": {
                                "catType": "minecraft:textures/entity/cat/jellie.png"
                            },
                            "entity": "this"
                        }
                    ]
                }
            },
            "textures/entity/cat/all_black.png": {
                "trigger": "minecraft:tame_animal",
                "conditions": {
                    "entity": [
                        {
                            "condition": "minecraft:entity_properties",
                            "predicate": {
                                "catType": "minecraft:textures/entity/cat/all_black.png"
                            },
                            "entity": "this"
                        }
                    ]
                }
            }
        }
    }
    )
    event.addJson("plus:advancements/husbandry/plant_seeds.json", {
        "display": {
            "icon": {
                "item": "minecraft:wheat"
            },
            "title": {
                "translate": "plus.advancements.husbandry.plant_seeds.title"
            },
            "description": {
                "translate": "plus.advancements.husbandry.plant_seeds.desc"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:husbandry/root",
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
    //netherite hoe
    event.addJson("plus:advancements/husbandry/netherite_hoe.json", {
        "display": {
            "icon": {
                "item": "minecraft:netherite_hoe"
            },
            "title": {
                "translate": "plus.advancements.husbandry.netherite_hoe.title"
            },
            "description": {
                "translate": "plus.advancements.husbandry.netherite_hoe.desc"
            },
            "frame": "challenge",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:husbandry/plant_seeds",
        "criteria": {
            "broke_hoe": {
                "trigger": "minecraft:item_durability_changed",
                "conditions": {
                    "item": {
                        "item": "minecraft:netherite_hoe"
                    },
                    "durability": 0
                }
            }
        },
    }
    )
    //all crops
    event.addJson("plus:advancements/husbandry/plant_seeds_all.json", {
        "display": {
            "icon": {
                "item": "farmersdelight:cabbage"
            },
            "title": {
                "translate": "plus.advancements.husbandry.plant_seeds_all.title"
            },
            "description": {
                "translate": "plus.advancements.husbandry.plant_seeds_all.desc"
            },
            "frame": "goal",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:husbandry/plant_seeds",
        "criteria": cropsCriteria
    }
    )
    //and harvest them
    //TO-DO
    //knives
    event.addJson("plus:advancements/husbandry/craft_knife.json", {
        "display": {
            "icon": {
                "item": "farmersdelight:flint_knife"
            },
            "title": {
                "translate": "plus.advancements.husbandry.craft_knife.title"
            },
            "description": {
                "translate": "plus.advancements.husbandry.craft_knife.desc"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:husbandry/root",
        "criteria": {
            "flint_knife": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "tag": "fabric:tools/knives"
                        }
                    ]
                }
            },
        }
    }
    )
    //ham
    event.addJson("plus:advancements/husbandry/get_ham.json", {
        "display": {
            "icon": {
                "item": "farmersdelight:ham"
            },
            "title": {
                "translate": "plus.advancements.husbandry.get_ham.title"
            },
            "description": {
                "translate": "plus.advancements.husbandry.get_ham.desc"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:husbandry/craft_knife",
        "criteria": {
            "get_ham": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "farmersdelight:ham"
                        }
                    ]
                }
            },
        }
    }
    )
    //netherite knife
    event.addJson("plus:advancements/husbandry/netherite_knife.json", {
        "display": {
            "icon": {
                "item": "farmersdelight:netherite_knife"
            },
            "title": {
                "translate": "plus.advancements.husbandry.netherite_knife.title"
            },
            "description": {
                "translate": "plus.advancements.husbandry.netherite_knife.desc"
            },
            "frame": "challenge",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:husbandry/craft_knife",
        "criteria": {
            "netherite_knife": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "farmersdelight:netherite_knife"
                        }
                    ]
                }
            },
        }
    }
    )
    //knifes
    event.addJson("plus:advancements/husbandry/get_knifes.json", {
        "display": {
            "icon": {
                "item": "farmersdelight:golden_knife"
            },
            "title": {
                "translate": "plus.advancements.husbandry.get_knifes.title"
            },
            "description": {
                "translate": "plus.advancements.husbandry.get_knifes.desc"
            },
            "frame": "challenge",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": true
        },
        "parent": "plus:husbandry/netherite_knife",
        "criteria": {
            "flint_knife": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "farmersdelight:flint_knife"
                        }
                    ]
                }
            },
            "iron_knife": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "farmersdelight:iron_knife"
                        }
                    ]
                }
            },
            "golden_knife": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "farmersdelight:golden_knife"
                        }
                    ]
                }
            },
            "diamond_knife": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "farmersdelight:diamond_knife"
                        }
                    ]
                }
            },
            "netherite_knife": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "farmersdelight:netherite_knife"
                        }
                    ]
                }
            },
        }
    }
    )
    //straw
    event.addJson("plus:advancements/husbandry/straw.json", {
        "display": {
            "icon": {
                "item": "farmersdelight:straw"
            },
            "title": {
                "translate": "plus.advancements.husbandry.straw.title"
            },
            "description": {
                "translate": "plus.advancements.husbandry.straw.desc"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:husbandry/craft_knife",
        "criteria": {
            "netherite_knife": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "farmersdelight:straw"
                        }
                    ]
                }
            },
        }
    }
    )
    //rich soil
    event.addJson("plus:advancements/husbandry/rich_soil.json", {
        "display": {
            "icon": {
                "item": "farmersdelight:rich_soil"
            },
            "title": {
                "translate": "plus.advancements.husbandry.rich_soil.title"
            },
            "description": {
                "translate": "plus.advancements.husbandry.rich_soil.desc"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:husbandry/straw",
        "criteria": {
            "netherite_knife": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "farmersdelight:rich_soil"
                        }
                    ]
                }
            },
        }
    }
    )
    //worst advancement ever
    event.addJson("plus:advancements/husbandry/strawful.json", {
        "display": {
            "icon": {
                "item": "minecraft:scute"
            },
            "title": {
                "translate": "plus.advancements.husbandry.strawful.title"
            },
            "description": {
                "translate": "plus.advancements.husbandry.strawful.desc"
            },
            "frame": "challenge",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": true
        },
        "parent": "plus:husbandry/straw",
        "criteria": {
            "kill_turtle_with_straw": {
                "trigger": "minecraft:player_killed_entity",
                "conditions": {
                    "player": {
                        "equipment": {
                            "mainhand": {
                                "item": "farmersdelight:straw"
                            }
                        }
                    },
                    "entity": {
                        "type": "minecraft:turtle"
                    }
                }
            }
        }
    }
    )
    //shroom colony
    event.addJson("plus:advancements/husbandry/mushroom_colony.json", {
        "display": {
            "icon": {
                "item": "farmersdelight:red_mushroom_colony"
            },
            "title": {
                "translate": "farmersdelight.advancement.get_mushroom_colony"
            },
            "description": {
                "translate": "farmersdelight.advancement.get_mushroom_colony.desc"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:husbandry/rich_soil",
        "criteria": {
            "brown_mushroom_colony": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "farmersdelight:brown_mushroom_colony"
                        }
                    ]
                }
            },
            "red_mushroom_colony": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "item": "farmersdelight:red_mushroom_colony"
                        }
                    ]
                }
            }
        },
        "requirements": [
            [
                "brown_mushroom_colony",
                "red_mushroom_colony"
            ]
        ]
    }
    )
    //honey
    event.addJson("plus:advancements/husbandry/safe_honey.json", {
        "display": {
            "icon": {
                "item": "minecraft:honey_bottle"
            },
            "title": {
                "translate": "plus.advancements.husbandry.safe_honey.title"
            },
            "description": {
                "translate": "plus.advancements.husbandry.safe_honey.desc"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:husbandry/root",
        "criteria": {
            "get_safe_honey": {
                "trigger": "minecraft:item_used_on_block",
                "conditions": {
                    "location": {
                        "smokey": true,
                        "block": {
                            "tag": "minecraft:beehives"
                        }
                    },
                    "item": {
                        "item": "minecraft:glass_bottle"
                    }
                }
            }
        }
    }
    )
    //candles
    event.addJson("plus:advancements/husbandry/candle.json", {
        "display": {
            "icon": {
                "item": "candlebackport:candle"
            },
            "title": {
                "translate": "plus.advancements.husbandry.candle.title"
            },
            "description": {
                "translate": "plus.advancements.husbandry.candle.desc"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:husbandry/safe_honey",
        "criteria": {
            "get_candle": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "tag": "candlebackport:candles"
                        }
                    ]
                }
            }
        }
    }
    )
    //beehive
    event.addJson("plus:advancements/husbandry/goodbeeye.json", {
        "display": {
            "icon": {
                "item": "minecraft:bee_nest"
            },
            "title": {
                "translate": "plus.advancements.husbandry.goodbeeye.title"
            },
            "description": {
                "translate": "plus.advancements.husbandry.goodbeeye.desc"
            },
            "frame": "goal",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:husbandry/safe_honey",
        "criteria": {
            "silk_touch_bee_nest": {
                "trigger": "minecraft:bee_nest_destroyed",
                "conditions": {
                    "block": "minecraft:bee_nest",
                    "item": {
                        "enchantments": [
                            {
                                "enchantment": "minecraft:silk_touch",
                                "levels": {
                                    "min": 1
                                }
                            }
                        ]
                    },
                    "num_bees_inside": 3
                }
            }
        }
    }
    )
})