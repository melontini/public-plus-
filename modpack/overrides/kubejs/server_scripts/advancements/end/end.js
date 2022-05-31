onEvent('server.datapack.high_priority', function (event) {
    event.addJson("plus:advancements/end/on_top_of_the_world.json", {
        "display": {
            "icon": {
                "item": "curios:crown"
            },
            "title": {
                "translate": "plus.advancements.adventure.on_top_of_the_world.title"
            },
            "description": {
                "translate": "plus.advancements.adventure.on_top_of_the_world.desc"
            },
            "frame": "challenge",
            "show_toast": true,
            "announce_to_chat": true,
            "hidden": false
        },
        "parent": "minecraft:end/dragon_egg",
        "criteria": {
            "placed_block": {
                "trigger": "minecraft:impossible"
            }
        }
    }
    )
})