onEvent('server.datapack.high_priority', function (event) {
  event.addJson("plus:advancements/story/get_crafting_table.json", {
    "display": {
      "icon": {
        "item": "minecraft:crafting_table"
      },
      "title": {
        "translate": "plus.advancements.story.crafting_table.title"
      },
      "description": {
        "translate": "plus.advancements.story.crafting_table.desc"
      },
      "frame": "task",
      "show_toast": true,
      "announce_to_chat": true,
      "hidden": false
    },
    "parent": "plus:story/root",
    "criteria": {
      "get_crafting_table": {
        "trigger": "minecraft:inventory_changed",
        "conditions": {
          "items": [
            {
              "item": "minecraft:crafting_table"
            }
          ]
        }
      }
    },
    "requirements": [
      [
        "get_crafting_table"
      ]
    ]
  }
  )
  //get campfire
  event.addJson("plus:advancements/story/get_campfire.json", {
    "display": {
      "icon": {
        "item": "minecraft:campfire"
      },
      "title": {
        "translate": "plus.advancements.story.campfire.title"
      },
      "description": {
        "translate": "plus.advancements.story.campfire.desc"
      },
      "frame": "task",
      "show_toast": true,
      "announce_to_chat": true,
      "hidden": false
    },
    "parent": "plus:story/get_crafting_table",
    "criteria": {
      "placed_block": {
        "trigger": "minecraft:placed_block",
        "conditions": {
          "player": {},
          "block": "minecraft:campfire"
        }
      },
      "has_effect": {
        "trigger": "minecraft:tick",
        "conditions": {
          "player": {
            "effects": {
              "minecraft:regeneration": {}
            }
          }
        }
      }
    },
    "requirements": [
      [
        "placed_block"
      ],
      [
        "has_effect"
      ]
    ]
  }
  )
  //seeds
  event.addJson("plus:advancements/story/get_seeds.json", {
    "display": {
      "icon": {
        "item": "minecraft:wheat_seeds"
      },
      "title": {
        "translate": "plus.advancements.story.seeds.title"
      },
      "description": {
        "translate": "plus.advancements.story.seeds.desc"
      },
      "frame": "task",
      "show_toast": true,
      "announce_to_chat": true,
      "hidden": false
    },
    "parent": "plus:story/get_crafting_table",
    "criteria": {
      "get_seeds": {
        "trigger": "minecraft:inventory_changed",
        "conditions": {
          "items": [
            {
              "tag": "minecraft:crops"
            }
          ]
        }
      }
    },
    "requirements": [
      [
        "get_seeds"
      ]
    ]
  }
  )
  //sleep in bed
  event.addJson("plus:advancements/story/sleep.json", {
    "display": {
      "icon": {
        "item": "minecraft:red_bed"
      },
      "title": {
        "translate": "plus.advancements.story.sleep.title"
      },
      "description": {
        "translate": "plus.advancements.story.sleep.desc"
      },
      "frame": "task",
      "show_toast": true,
      "announce_to_chat": true,
      "hidden": false
    },
    "parent": "plus:story/get_crafting_table",
    "criteria": {
      "slept_in_bed": {
        "trigger": "minecraft:slept_in_bed",
        "conditions": {}
      }
    },
    "requirements": [
      [
        "slept_in_bed"
      ]
    ]
  }
  )
  //dream
  event.addJson("plus:advancements/story/dream.json", {
    "display": {
      "icon": {
        "item": "minecraft:clock"
      },
      "title": {
        "translate": "plus.advancements.story.dream.title"
      },
      "description": {
        "translate": "plus.advancements.story.dream.desc"
      },
      "frame": "challenge",
      "show_toast": true,
      "announce_to_chat": true,
      "hidden": true
    },
    "parent": "plus:story/sleep",
    "criteria": {
      "impossible": {
        "trigger": "minecraft:impossible"
      }
    },
    "requirements": [
      [
        "impossible"
      ]
    ]
  }
  )
  //Stone age
  event.addJson("plus:advancements/story/break_stone.json", {
    "display": {
      "icon": {
        "item": "minecraft:wooden_pickaxe",
        "nbt": "{Damage:0}"
      },
      "title": {
        "translate": "plus.advancements.story.break_stone.title"
      },
      "description": {
        "translate": "plus.advancements.story.break_stone.desc"
      },
      "frame": "task",
      "show_toast": true,
      "announce_to_chat": true,
      "hidden": false
    },
    "parent": "plus:story/get_crafting_table",
    "criteria": {
      "break_stone": {
        "trigger": "minecraft:inventory_changed",
        "conditions": {
          "items": [
            {
              "tag": "minecraft:stone_tool_materials"
            }
          ]
        }
      }
    },
    "requirements": [
      [
        "break_stone"
      ]
    ]
  }
  )
  //better tools
  event.addJson("plus:advancements/story/craft_stone_pick.json", {
    "parent": "plus:story/break_stone",
    "display": {
      "icon": {
        "item": "minecraft:stone_pickaxe",
        "nbt": "{Damage:0}"
      },
      "title": {
        "translate": "plus.advancements.story.craft_stone_pick.title"
      },
      "description": {
        "translate": "plus.advancements.story.craft_stone_pick.description"
      },
      "frame": "task",
      "show_toast": true,
      "announce_to_chat": true,
      "hidden": false
    },
    "criteria": {
      "stone_pickaxe": {
        "trigger": "minecraft:inventory_changed",
        "conditions": {
          "items": [
            {
              "item": "minecraft:stone_pickaxe"
            }
          ]
        }
      }
    },
    "requirements": [
      [
        "stone_pickaxe"
      ]
    ]
  }
  )
  //get iron
  event.addJson("plus:advancements/story/iron_ingot.json", {
    "display": {
      "icon": {
        "item": "minecraft:iron_ingot"
      },
      "title": {
        "translate": "plus.advancements.story.iron_ingot.title"
      },
      "description": {
        "translate": "plus.advancements.story.iron_ingot.description"
      },
      "frame": "task",
      "show_toast": true,
      "announce_to_chat": true,
      "hidden": false
    },
    "parent": "plus:story/craft_stone_pick",
    "criteria": {
      "get_iron": {
        "trigger": "minecraft:inventory_changed",
        "conditions": {
          "items": [
            {
              "item": "minecraft:iron_ingot"
            }
          ]
        }
      }
    },
    "requirements": [
      [
        "get_iron"
      ]
    ]
  }
  )
  //iron pickaxe
  event.addJson("plus:advancements/story/iron_pickaxe.json", {
    "display": {
      "icon": {
        "item": "minecraft:iron_pickaxe",
        "nbt": "{Damage:0}"
      },
      "title": {
        "translate": "plus.advancements.story.iron_pickaxe.title"
      },
      "description": {
        "translate": "plus.advancements.story.iron_pickaxe.description"
      },
      "frame": "task",
      "show_toast": true,
      "announce_to_chat": true,
      "hidden": false
    },
    "parent": "plus:story/iron_ingot",
    "criteria": {
      "get_iron_pick": {
        "trigger": "minecraft:inventory_changed",
        "conditions": {
          "items": [
            {
              "item": "minecraft:iron_pickaxe"
            }
          ]
        }
      }
    },
    "requirements": [
      [
        "get_iron_pick"
      ]
    ]
  }
  )
  //get diamonds
  event.addJson("plus:advancements/story/diamond.json", {
    "display": {
      "icon": {
        "item": "minecraft:diamond"
      },
      "title": {
        "translate": "plus.advancements.story.diamonds.title"
      },
      "description": {
        "translate": "plus.advancements.story.diamonds.description"
      },
      "frame": "task",
      "show_toast": true,
      "announce_to_chat": true,
      "hidden": false
    },
    "parent": "plus:story/iron_pickaxe",
    "criteria": {
      "get_diamond": {
        "trigger": "minecraft:inventory_changed",
        "conditions": {
          "items": [
            {
              "item": "minecraft:diamond"
            }
          ]
        }
      }
    },
    "requirements": [
      [
        "get_diamond"
      ]
    ]
  }
  )
  //diamond pickaxe
  event.addJson("plus:advancements/story/diamond_pickaxe.json", {
    "display": {
      "icon": {
        "item": "minecraft:diamond_pickaxe",
        "nbt": "{Damage:0}"
      },
      "title": {
        "translate": "plus.advancements.story.diamond_pickaxe.title"
      },
      "description": {
        "translate": "plus.advancements.story.diamond_pickaxe.description"
      },
      "frame": "task",
      "show_toast": true,
      "announce_to_chat": true,
      "hidden": false
    },
    "parent": "plus:story/diamond",
    "criteria": {
      "get_diamond_pickaxe": {
        "trigger": "minecraft:inventory_changed",
        "conditions": {
          "items": [
            {
              "item": "minecraft:diamond_pickaxe"
            }
          ]
        }
      }
    },
    "requirements": [
      [
        "get_diamond_pickaxe"
      ]
    ]
  }
  )
  //get lava
  event.addJson("plus:advancements/story/get_lava.json", {
    "display": {
      "icon": {
        "item": "minecraft:lava_bucket"
      },
      "title": {
        "translate": "plus.advancements.story.lava.title"
      },
      "description": {
        "translate": "plus.advancements.story.lava.description"
      },
      "frame": "task",
      "show_toast": true,
      "announce_to_chat": true,
      "hidden": false
    },
    "parent": "plus:story/iron_ingot",
    "criteria": {
      "get_lava": {
        "trigger": "minecraft:inventory_changed",
        "conditions": {
          "items": [
            {
              "item": "minecraft:lava_bucket"
            }
          ]
        }
      }
    },
    "requirements": [
      [
        "get_lava"
      ]
    ]
  }
  )
  //get obsidian
  event.addJson("plus:advancements/story/get_obsidian.json", {
    "display": {
      "icon": {
        "item": "minecraft:obsidian"
      },
      "title": {
        "translate": "plus.advancements.story.get_obsidian.title"
      },
      "description": {
        "translate": "plus.advancements.story.get_obsidian.description"
      },
      "frame": "task",
      "show_toast": true,
      "announce_to_chat": true,
      "hidden": false
    },
    "parent": "plus:story/get_lava",
    "criteria": {
      "get_obsidian": {
        "trigger": "minecraft:inventory_changed",
        "conditions": {
          "items": [
            {
              "item": "minecraft:obsidian"
            }
          ]
        }
      }
    },
    "requirements": [
      [
        "get_obsidian"
      ]
    ]
  }
  )
  //eneter the nether
  event.addJson("plus:advancements/story/enter_nether.json", {
    "display": {
      "icon": {
        "item": "minecraft:flint_and_steel",
        "nbt": "{Damage:0}"
      },
      "title": {
        "translate": "plus.advancements.story.enter_nether.title"
      },
      "description": {
        "translate": "plus.advancements.story.enter_nether.desc"
      },
      "frame": "task",
      "show_toast": true,
      "announce_to_chat": true,
      "hidden": false
    },
    "parent": "plus:story/get_obsidian",
    "criteria": {
      "entered_nether": {
        "trigger": "minecraft:changed_dimension",
        "conditions": {
          "to": "minecraft:the_nether"
        }
      }
    },
    "requirements": [
      [
        "entered_nether"
      ]
    ]
  }
  )
  //armory
  event.addJson("plus:advancements/story/armory.json", {
    "display": {
      "icon": {
        "item": "minecraft:iron_sword",
        "nbt": "{Damage:0}"
      },
      "title": {
        "translate": "plus.advancements.story.gear_up.title"
      },
      "description": {
        "translate": "plus.advancements.story.gear_up.desc"
      },
      "background": "biomemakeover:textures/block/cladded_stone.png",
      "frame": "task",
      "show_toast": true,
      "announce_to_chat": true,
      "hidden": false
    },
    "parent": "plus:story/iron_ingot",
    "criteria": {
      "get_iron_sword": {
        "trigger": "minecraft:inventory_changed",
        "conditions": {
          "items": [
            {
              "tag": "fabric:swords"
            }
          ]
        }
      },
      "get_iron_chestplate": {
        "trigger": "minecraft:inventory_changed",
        "conditions": {
          "items": [
            {
              "tag": "curios:cosmetic_chestplate"
            }
          ]
        }
      },
      "get_leggings": {
        "trigger": "minecraft:inventory_changed",
        "conditions": {
          "items": [
            {
              "tag": "curios:cosmetic_leggings"
            }
          ]
        }
      },
      "get_boots": {
        "trigger": "minecraft:inventory_changed",
        "conditions": {
          "items": [
            {
              "tag": "curios:cosmetic_boots"
            }
          ]
        }
      },
      "get_helmet": {
        "trigger": "minecraft:inventory_changed",
        "conditions": {
          "items": [
            {
              "tag": "curios:cosmetic_helmet"
            }
          ]
        }
      }
    },
    "requirements": [
      [
        "get_boots",
        "get_leggings",
        "get_iron_chestplate",
        "get_iron_sword",
        "get_helmet"
      ]
    ]
  }
  )
  //discover dark forest
  event.addJson("plus:advancements/story/get_to_dark_forest.json", {
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
      "show_toast": true,
      "announce_to_chat": true,
      "hidden": false
    },
    "parent": "plus:story/armory",
    "criteria": {
      "get_to_dark_forest": {
        "trigger": "minecraft:location",
        "conditions": {
          "location": {
            "biome": "minecraft:dark_forest"
          }
        }
      }
    },
    "requirements": [
      [
        "get_to_dark_forest"
      ]
    ]
  }
  )
  //get moth scales
  event.addJson("plus:advancements/story/moth_scales.json", {
    "display": {
      "icon": {
        "item": "biomemakeover:moth_scales"
      },
      "title": {
        "translate": "plus.advancements.story.moth_scales.title"
      },
      "description": {
        "translate": "plus.advancements.story.moth_scales.desc"
      },
      "frame": "task",
      "show_toast": true,
      "announce_to_chat": true,
      "hidden": false
    },
    "parent": "plus:story/get_to_dark_forest",
    "criteria": {
      "get_moth_scales": {
        "trigger": "minecraft:inventory_changed",
        "conditions": {
          "items": [
            {
              "item": "biomemakeover:moth_scales"
            }
          ]
        }
      }
    },
    "requirements": [
      [
        "get_moth_scales"
      ]
    ]
  }
  )
  //follow ender eye
  event.addJson("plus:advancements/story/follow_ender_eye.json", {
    "display": {
      "icon": {
        "item": "minecraft:ender_eye"
      },
      "title": {
        "translate": "plus.advancements.story.follow_ender_eye.title"
      },
      "description": {
        "translate": "plus.advancements.story.follow_ender_eye.desc"
      },
      "frame": "task",
      "show_toast": true,
      "announce_to_chat": true,
      "hidden": false
    },
    "parent": "plus:story/enter_nether",
    "criteria": {
      "in_stronghold": {
        "trigger": "minecraft:location",
        "conditions": {
          "location": {
            "feature": "stronghold"
          }
        }
      }
    },
    "requirements": [
      [
        "in_stronghold"
      ]
    ]
  }
  )
  //the end
  event.addJson("plus:advancements/story/the_end.json", {
    "display": {
      "icon": {
        "item": "minecraft:end_portal_frame"
      },
      "title": {
        "translate": "plus.advancements.story.the_end.title"
      },
      "description": {
        "translate": "plus.advancements.story.the_end.desc"
      },
      "frame": "goal",
      "show_toast": true,
      "announce_to_chat": true,
      "hidden": false
    },
    "parent": "plus:story/follow_ender_eye",
    "criteria": {
      "entered_end": {
        "trigger": "minecraft:changed_dimension",
        "conditions": {
          "to": "minecraft:the_end"
        }
      }
    },
    "requirements": [
      [
        "entered_end"
      ]
    ]
  }
  )
})