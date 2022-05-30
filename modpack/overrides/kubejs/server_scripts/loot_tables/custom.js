onEvent('server.datapack.high_priority', function (event) {
    event.addJson("plus:loot_tables/functional/guide_book.json", {
        "pools": [
            {
                "rolls": 1,
                "entries": [
                    {
                        "type": "minecraft:item",
                        "name": "patchouli:guide_book",
                        "functions": [
                            {
                                "function": "minecraft:set_nbt",
                                "tag": "{\"patchouli:book\":\"patchouli:cook_book\"}"
                            }
                        ]
                    }
                ]
            }
        ]
    }
    )
})