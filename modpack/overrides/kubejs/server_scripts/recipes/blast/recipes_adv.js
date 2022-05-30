/*
 */
onEvent('server.datapack.high_priority', function (event) {
    event.addJson("blast:advancements/recipes/bomb.json", {
        "criteria": {
            "has_the_recipe": {
                "trigger": "minecraft:recipe_unlocked",
                "conditions": {
                    "recipe": "blast:bomb"
                }
            }
        },
        "requirements": [
            [
                "has_the_recipe"
            ]
        ],
        "rewards": {
            "recipes": [
                "blast:bomb"
            ]
        }
    })
    event.addJson("blast:advancements/recipes/golden_bomb.json", {
        "criteria": {
            "has_the_recipe": {
                "trigger": "minecraft:recipe_unlocked",
                "conditions": {
                    "recipe": "blast:golden_bomb"
                }
            }
        },
        "requirements": [
            [
                "has_the_recipe"
            ]
        ],
        "rewards": {
            "recipes": [
                "blast:golden_bomb"
            ]
        }
    })
    event.addJson("blast:advancements/recipes/diamond_bomb.json", {
        "criteria": {
            "has_the_recipe": {
                "trigger": "minecraft:recipe_unlocked",
                "conditions": {
                    "recipe": "blast:diamond_bomb"
                }
            }
        },
        "requirements": [
            [
                "has_the_recipe"
            ]
        ],
        "rewards": {
            "recipes": [
                "blast:diamond_bomb"
            ]
        }
    })
    //trigger bombs
    event.addJson("blast:advancements/recipes/trigger_bomb.json", {
        "criteria": {
            "has_the_recipe": {
                "trigger": "minecraft:recipe_unlocked",
                "conditions": {
                    "recipe": "blast:trigger_bomb"
                }
            }
        },
        "requirements": [
            [
                "has_the_recipe"
            ]
        ],
        "rewards": {
            "recipes": [
                "blast:trigger_bomb"
            ]
        }
    })
    event.addJson("blast:advancements/recipes/golden_trigger_bomb.json", {
        "criteria": {
            "has_the_recipe": {
                "trigger": "minecraft:recipe_unlocked",
                "conditions": {
                    "recipe": "blast:golden_trigger_bomb"
                }
            }
        },
        "requirements": [
            [
                "has_the_recipe"
            ]
        ],
        "rewards": {
            "recipes": [
                "blast:golden_trigger_bomb"
            ]
        }
    })
    event.addJson("blast:advancements/recipes/diamond_trigger_bomb.json", {
        "criteria": {
            "has_the_recipe": {
                "trigger": "minecraft:recipe_unlocked",
                "conditions": {
                    "recipe": "blast:diamond_trigger_bomb"
                }
            }
        },
        "requirements": [
            [
                "has_the_recipe"
            ]
        ],
        "rewards": {
            "recipes": [
                "blast:diamond_trigger_bomb"
            ]
        }
    })
    //naval mine
    event.addJson("blast:advancements/recipes/naval_mine.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_planks: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "minecraft:prismarine_shard"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "blast:naval_mine"
                }
            },
            has_the_recipe_two: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "blast:bomb"
                }
            }
        },
        requirements: [
            [
                "has_planks",
                "has_the_recipe"
            ],
            [
                "has_the_recipe_two"
            ]
        ],
        rewards: {
            recipes: [
                "blast:naval_mine"
            ]
        }
    })
    //stripminer
    event.addJson("blast:advancements/recipes/stripminer.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_planks: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "blast:gunpowder_block"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "blast:stripminer"
                }
            }
        },
        requirements: [
            [
                "has_planks",
                "has_the_recipe"
            ]
        ],
        rewards: {
            recipes: [
                "blast:stripminer"
            ]
        }
    })
    //gunpowder
    event.addJson("blast:advancements/recipes/gunpowder_block.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_planks: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            item: "minecraft:gunpowder"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "blast:gunpowder_block"
                }
            }
        },
        requirements: [
            [
                "has_planks",
                "has_the_recipe"
            ]
        ],
        rewards: {
            recipes: [
                "blast:gunpowder_block"
            ]
        }
    })
})
//over-engineered
//bomb
onEvent('block.right_click', event => {
    let entity = event.getEntity()
    let world = event.getWorld()
    if (event.getItem().id == 'minecraft:flint_and_steel' && event.getBlock().id == 'minecraft:tnt') {
        world.server.runCommandSilent('/advancement grant ' + entity.getDisplayName() + ' only blast:recipes/bomb')
    }
})
//golden bomb
onEvent('block.right_click', event => {
    let entity = event.getEntity()
    let world = event.getWorld()
    if (event.getItem().id == 'minecraft:flint_and_steel' && event.getBlock().id == 'minecraft:tnt') {
        world.server.runCommandSilent('/advancement grant ' + entity.getDisplayName() + ' only blast:recipes/golden_bomb')
    }
})
//diamond bomb
onEvent('block.right_click', event => {
    let entity = event.getEntity()
    let world = event.getWorld()
    if (event.getItem().id == 'minecraft:flint_and_steel' && event.getBlock().id == 'minecraft:tnt') {
        world.server.runCommandSilent('/advancement grant ' + entity.getDisplayName() + ' only blast:recipes/diamond_bomb')
    }
})
//trigger bomb
onEvent('block.right_click', event => {
    let entity = event.getEntity()
    let world = event.getWorld()
    if (event.getItem().id == 'minecraft:flint_and_steel' && event.getBlock().id == 'minecraft:tnt') {
        world.server.runCommandSilent('/advancement grant ' + entity.getDisplayName() + ' only blast:recipes/trigger_bomb')
    }
})
//golden trigger bomb
onEvent('block.right_click', event => {
    let entity = event.getEntity()
    let world = event.getWorld()
    if (event.getItem().id == 'minecraft:flint_and_steel' && event.getBlock().id == 'minecraft:tnt') {
        world.server.runCommandSilent('/advancement grant ' + entity.getDisplayName() + ' only blast:recipes/golden_trigger_bomb')
    }
})
//diamond trigger bomb
onEvent('block.right_click', event => {
    let entity = event.getEntity()
    let world = event.getWorld()
    if (event.getItem().id == 'minecraft:flint_and_steel' && event.getBlock().id == 'minecraft:tnt') {
        world.server.runCommandSilent('/advancement grant ' + entity.getDisplayName() + ' only blast:recipes/diamond_trigger_bomb')
    }
})