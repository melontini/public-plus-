onEvent('server.datapack.high_priority', function (event) {
    event.addJson("minecraft:advancements/husbandry/fishy_business.json", {
        "display": {
            "icon": {
                "item": "minecraft:fishing_rod",
                "nbt": "{Damage:0}"
            },
            "title": {
                "translate": "advancements.husbandry.fishy_business.title"
            },
            "description": {
                "translate": "advancements.husbandry.fishy_business.description"
            },
            "frame": "task",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "gofish:fishing/root",
        "criteria": {
            "cod": {
                "trigger": "minecraft:fishing_rod_hooked",
                "conditions": {
                    "item": {
                        "tag": "minecraft:fishes"
                    }
                }
            }
        }
    }
    )
})