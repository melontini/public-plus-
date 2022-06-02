onEvent('server.datapack.high_priority', function (event) {
    var simpleMealsCriteria = {};
    simpleMeals.forEach((mealIndex) => {
        simpleMealsCriteria[mealIndex] = {
            "trigger": "minecraft:inventory_changed",
            "conditions": {
                "items": [
                    {
                        "item": mealIndex
                    }
                ]
            }
        }
    })
    var cookableMealsCriteria = {};
    allHarderMeals.forEach((allHarderMealsIndex) => {
        cookableMealsCriteria[allHarderMealsIndex] = {
            "trigger": "minecraft:consume_item",
            "conditions": {
                "item": {
                    "item": allHarderMealsIndex
                }
            }
        }
    })
    event.addJson("plus:advancements/master_chef/novice.json", {
        "display": {
            "icon": {
                "item": "minecraft:cooked_porkchop"
            },
            "title": {
                "translate": "plus.advancements.master_chef.novice.title"
            },
            "description": {
                "translate": "plus.advancements.master_chef.novice.desc"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:master_chef/root",
        "criteria": {
            "get_food": {
                "trigger": "minecraft:inventory_changed",
                "conditions": {
                    "items": [
                        {
                            "tag": "plus:very_simple_meals"
                        }
                    ]
                }
            }
        },
        "requirements": [
            [
                "get_food"
            ]
        ]
    }
    )
    event.addJson("plus:advancements/master_chef/extremly_novice.json", {
        "display": {
            "icon": {
                "item": "artifacts:eternal_steak"
            },
            "title": {
                "translate": "plus.advancements.master_chef.extremly_novice.title"
            },
            "description": {
                "translate": "plus.advancements.master_chef.extremly_novice.desc"
            },
            "frame": "challenge",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": true
        },
        "parent": "plus:master_chef/novice",
        "criteria": simpleMealsCriteria
    }
    )
    //stove
    event.addJson("farmersdelight:advancements/main/place_stove.json", {
        "display": {
            "icon": {
                "item": "farmersdelight:stove"
            },
            "title": {
                "translate": "farmersdelight.advancement.place_stove"
            },
            "description": {
                "translate": "farmersdelight.advancement.place_stove.desc"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "plus:master_chef/root",
        "criteria": {
            "placed_block": {
                "trigger": "minecraft:placed_block",
                "conditions": {
                    "player": {},
                    "block": "farmersdelight:stove"
                }
            }
        },
        "requirements": [
            [
                "placed_block"
            ]
        ]
    }
    )
    //glowshroom stew
    event.addJson("plus:advancements/master_chef/glow_stew.json", {
        "display": {
            "icon": {
                "item": "biomemakeover:glowshroom_stew"
            },
            "title": {
                "translate": "plus.advancements.master_chef.glow_stew.title"
            },
            "description": {
                "translate": "plus.advancements.master_chef.glow_stew.desc"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": true
        },
        "parent": "farmersdelight:main/eat_comfort_food",
        "criteria": {
            "ate_stew": {
                "trigger": "minecraft:consume_item",
                "conditions": {
                    "item": {
                        "item": "biomemakeover:glowshroom_stew"
                    }
                }
            }
        },
        "requirements": [
            [
                "ate_stew"
            ]
        ]
    }
    )
    //astral stew
    event.addJson("plus:advancements/master_chef/astral_stew.json", {
        "display": {
            "icon": {
                "item": "gofish:aquatic_astral_stew"
            },
            "title": {
                "translate": "plus.advancements.master_chef.astral_stew.title"
            },
            "description": {
                "translate": "plus.advancements.master_chef.astral_stew.desc"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": true
        },
        "parent": "farmersdelight:main/eat_comfort_food",
        "criteria": {
            "ate_stew": {
                "trigger": "minecraft:consume_item",
                "conditions": {
                    "item": {
                        "item": "gofish:aquatic_astral_stew"
                    }
                }
            }
        },
        "requirements": [
            [
                "ate_stew"
            ]
        ]
    }
    )
    event.addJson("farmersdelight:advancements/main/master_chef.json", {
        "display": {
            "icon": {
                "item": "farmersdelight:honey_glazed_ham"
            },
            "title": {
                "translate": "farmersdelight.advancement.master_chef"
            },
            "description": {
                "translate": "farmersdelight.advancement.master_chef.desc"
            },
            "frame": "challenge",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "farmersdelight:main/place_feast",
        "criteria": cookableMealsCriteria
    }
    )
    event.addJson("plus:advancements/master_chef/give_book.json", {
        "parent": "farmersdelight:main/place_cooking_pot",
        "criteria": {
            "got_cooking_pot": {
                "trigger": "minecraft:tick",
                "conditions": {
                    "player": [
                        {
                            "condition": "minecraft:entity_properties",
                            "entity": "this",
                            "predicate": {
                                "player": {
                                    "advancements": {
                                        "farmersdelight:main/place_cooking_pot": true
                                    }
                                }
                            }
                        }
                    ]
                }
            }
        },
        "rewards": {
            "loot": [
                "plus:functional/guide_book"
            ]
        }
    }
    )
    event.addJson("plus:advancements/master_chef/use_axe_on_board.json", {
        "display": {
            "icon": {
                "item": "minecraft:iron_axe"
            },
            "title": {
                "translate": "plus.advancements.master_chef.use_axe_on_board.title"
            },
            "description": {
                "translate": "plus.advancements.master_chef.use_axe_on_board.desc"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "farmersdelight:main/use_cutting_board",
        "criteria": {
            "requirement": {
                "trigger": "farmersdelight:use_cutting_board",
                "conditions": {
                    "player": [
                        {
                            "condition": "minecraft:entity_properties",
                            "entity": "this",
                            "predicate": {
                                "equipment": {
                                    "mainhand": {
                                        "tag": "fabric:tools/axes"
                                    }
                                }
                            }
                        }
                    ]
                }
            }
        }
    }
    )
})