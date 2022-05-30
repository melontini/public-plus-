onEvent('server.datapack.high_priority', function (event) {
  event.addJson("plus:advancements/master_chef/root.json", {
    "display": {
      "icon": {
        "item": "minecraft:campfire"
      },
      "title": {
        "translate": "plus.advancements.master_chef.root.title"
      },
      "description": {
        "translate": "plus.advancements.master_chef.root.desc"
      },
      "background": "farmersdelight:textures/block/straw_bale_side.png",
      "frame": "task",
      "show_toast": false,
      "announce_to_chat": false,
      "hidden": false
    },
    "criteria": {
      "get_campfire": {
        "trigger": "minecraft:inventory_changed",
        "conditions": {
          "items": [
            {
              "item": "minecraft:campfire"
            }
          ]
        }
      }
    },
    "requirements": [
      [
        "get_campfire"
      ]
    ]
  }
  )
})