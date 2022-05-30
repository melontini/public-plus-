onEvent('item.modification', event => {
    event.modify('biomemakeover:lightning_bug_bottle', item => {
        item.craftingReminder = "minecraft:glass_bottle"
    })
    event.modify('biomemakeover:lightning_bottle', item => {
        item.maxStackSize = 4
    })
    event.modify('blast:bomb', item => {
        item.maxStackSize = 16
    })
    event.modify('blast:diamond_bomb', item => {
        item.maxStackSize = 16
    })
    event.modify('blast:golden_bomb', item => {
        item.maxStackSize = 16
    })
    event.modify('blast:trigger_bomb', item => {
        item.maxStackSize = 16
    })
    event.modify('blast:diamond_trigger_bomb', item => {
        item.maxStackSize = 16
    })
    event.modify('blast:golden_trigger_bomb', item => {
        item.maxStackSize = 16
    })
    event.modify('blast:naval_mine', item => {
        item.maxStackSize = 16
    })
    event.modify('minecraft:minecart', item => {
        item.maxStackSize = 8
    })
    event.modify('minecraft:chest_minecart', item => {
        item.maxStackSize = 8
    })
    event.modify('minecraft:hopper_minecart', item => {
        item.maxStackSize = 8
    })
    event.modify('minecraft:furnace_minecart', item => {
        item.maxStackSize = 8
    })
    event.modify('minecraft:tnt_minecart', item => {
        item.maxStackSize = 8
    })
    event.modify('minecraft:command_block_minecart', item => {
        item.maxStackSize = 8
    })
})