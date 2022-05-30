onEvent('server.datapack.high_priority', function (event) {
    event.addJson("plus:advancements/armory/root.json", {
        "display": {
            "icon": {
                "item": "minecraft:iron_sword",
                "nbt": "{Damage:0}"
            },
            "title": {
                "translate": "plus.advancements.armory.root.title"
            },
            "description": {
                "translate": "plus.advancements.armory.root.desc"
            },
            "background": "biomemakeover:textures/block/cladded_stone.png",
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
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
})