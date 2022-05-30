onEvent('server.datapack.high_priority', function (event) {
    let advancementTemplate = (inputItem, recipeItem) => {
        var recipeID = recipeItem.replace(":", "_")
        event.addJson("phonos:advancements/recipes/" + recipeID + ".json", {
            parent: "minecraft:recipes/root",
            criteria: {
                has_item: {
                    trigger: "minecraft:inventory_changed",
                    conditions: {
                        items: [
                            {
                                item: inputItem
                            }
                        ]
                    }
                },
                has_the_recipe: {
                    trigger: "minecraft:recipe_unlocked",
                    conditions: {
                        recipe: recipeItem
                    }
                }
            },
            requirements: [
                [
                    "has_item",
                    "has_the_recipe"
                ]
            ],
            rewards: {
                recipes: [
                    recipeItem
                ]
            }
        })
    }
    event.addJson("morevillagers:advancements/recipes/purpur_altar.json", {
        "parent": "minecraft:recipes/root",
        "criteria": {
            "entered_endcity": {
                "trigger": "minecraft:location",
                "conditions": {
                    "location": {
                        "feature": "endcity"
                    }
                }
            },
            "has_recipe": {
                "trigger": "minecraft:recipe_unlocked",
                "conditions": {
                    "recipe": "morevillagers:purpur_altar"
                }
            }
        },
        "requirements": [
            [
                "entered_endcity",
                "has_recipe"
            ]
        ],
        "rewards": {
            "recipes": [
                "morevillagers:purpur_altar"
            ]
        }
    }
    )
    event.addJson("morevillagers:advancements/recipes/oceanography_table.json", {
        "parent": "minecraft:recipes/root",
        "criteria": {
            "in_water": {
                "trigger": "minecraft:enter_block",
                "conditions": {
                    "block": "minecraft:water"
                }
            },
            "has_the_recipe": {
                "trigger": "minecraft:recipe_unlocked",
                "conditions": {
                    "recipe": "morevillagers:oceanography_table"
                }
            }
        },
        "requirements": [
            [
                "in_water",
                "has_the_recipe"
            ]
        ],
        "rewards": {
            "recipes": [
                "morevillagers:oceanography_table"
            ]
        }
    }
    )
    event.addJson("morevillagers:advancements/recipes/decayed_workbench.json", {
        "parent": "minecraft:recipes/root",
        "criteria": {
            "entered_nether": {
                "trigger": "minecraft:changed_dimension",
                "conditions": {
                    "to": "minecraft:the_nether"
                }
            },
            "has_recipe": {
                "trigger": "minecraft:recipe_unlocked",
                "conditions": {
                    "recipe": "morevillagers:decayed_workbench"
                }
            }
        },
        "requirements": [
            [
                "entered_nether",
                "has_recipe"
            ]
        ],
        "rewards": {
            "recipes": [
                "morevillagers:decayed_workbench"
            ]
        }
    }
    )
    event.addJson("morevillagers:advancements/recipes/gardening_table.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_item: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            tag: "minecraft:flowers"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "morevillagers:gardening_table"
                }
            }
        },
        requirements: [
            [
                "has_item",
                "has_the_recipe"
            ]
        ],
        rewards: {
            recipes: [
                "morevillagers:gardening_table"
            ]
        }
    })
    event.addJson("morevillagers:advancements/recipes/woodworking_table.json", {
        parent: "minecraft:recipes/root",
        criteria: {
            has_item: {
                trigger: "minecraft:inventory_changed",
                conditions: {
                    items: [
                        {
                            tag: "minecraft:logs"
                        }
                    ]
                }
            },
            has_the_recipe: {
                trigger: "minecraft:recipe_unlocked",
                conditions: {
                    recipe: "morevillagers:woodworking_table"
                }
            }
        },
        requirements: [
            [
                "has_item",
                "has_the_recipe"
            ]
        ],
        rewards: {
            recipes: [
                "morevillagers:woodworking_table"
            ]
        }
    })
    event.addJson("morevillagers:advancements/recipes/hunting_post.json", {
        "parent": "minecraft:recipes/root",
        "criteria": {
            "has_recipe": {
                "trigger": "minecraft:recipe_unlocked",
                "conditions": {
                    "recipe": "morevillagers:hunting_post"
                }
            },
            "killed_entity": {
                "trigger": "minecraft:player_killed_entity"
            }
        },
        "requirements": [
            [
                "killed_entity",
                "has_recipe"
            ]
        ],
        "rewards": {
            "recipes": [
                "morevillagers:hunting_post"
            ]
        }
    }
    )
    event.addJson("morevillagers:advancements/recipes/blueprint_table.json", {
        "parent": "minecraft:recipes/root",
        "criteria": {
          "has_recipe": {
            "trigger": "minecraft:recipe_unlocked",
            "conditions": {
              "recipe": "morevillagers:blueprint_table"
            }
          },
          "placed_block": {
            "trigger": "minecraft:placed_block"
          }
        },
        "requirements": [
          [
            "placed_block",
            "has_recipe"
          ]
        ],
        "rewards": {
          "recipes": [
            "morevillagers:blueprint_table"
          ]
        }
      }
      
    )
})