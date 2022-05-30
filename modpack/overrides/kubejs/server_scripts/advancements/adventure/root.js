onEvent('server.datapack.high_priority', function (event) {
    event.addJson("plus:advancements/adventure/root.json", {
        "display": {
          "icon": {
            "item": "minecraft:map"
          },
          "title": {
            "translate": "plus.advancements.adventure.root.title"
          },
          "description": {
            "translate": "plus.advancements.adventure.root.desc"
          },
          "background": "biomemakeover:textures/block/mushroom_stem_brick.png",
          "frame": "task",
          "show_toast": false,
          "announce_to_chat": false,
          "hidden": false
        },
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
})