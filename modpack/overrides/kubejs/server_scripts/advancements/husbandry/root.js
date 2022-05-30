onEvent('server.datapack.high_priority', function (event) {
    event.addJson("plus:advancements/husbandry/root.json", {
        "display": {
            "icon": {
                "item": "minecraft:hay_block"
            },
            "title": {
                "translate": "plus.advancements.husbandry.root.title"
            },
            "description": {
                "translate": "plus.advancements.husbandry.root.desc"
            },
            "background": "minecraft:textures/gui/advancements/backgrounds/husbandry.png",
            "frame": "task",
            "show_toast": false,
            "announce_to_chat": false,
            "hidden": false
        },
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
})