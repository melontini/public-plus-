onEvent('server.datapack.high_priority', function (event) {
    event.addJson("plus:advancements/story/root.json", {
        "display": {
          "icon": {
              //this is temp
            "item": "minecraft:grass_block"
          },
          "title": {
            "translate": "plus.advancements.story.root.title"
          },
          "description": {
            "translate": "plus.advancements.story.root.desc"
          },
          "background": "blockus:textures/block/bluestone.png",
          "frame": "task",
          "show_toast": true,
          "announce_to_chat": false,
          "hidden": false
        },
        "criteria": {
          "login": {
            "trigger": "minecraft:tick"
          }
        },
        "requirements": [
          [
            "login"
          ]
        ]
      }      
    
    )
})