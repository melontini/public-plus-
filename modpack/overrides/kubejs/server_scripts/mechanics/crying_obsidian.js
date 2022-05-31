onEvent('block.right_click', event => {
    let block = event.getBlock()
    let entity = event.getEntity()
    if (event.getItem().id == 'farmersdelight:onion' && block.id == 'minecraft:obsidian') {
        var count = event.getItem().getCount();
        if (!entity.isCreativeMode()) {
            event.getItem().setCount(count - 1)
        }
        event.getWorld().getBlock(block.x, block.y, block.z)
           .set('minecraft:crying_obsidian')
        event.server.runCommandSilent(`/advancement grant ${entity.getDisplayName()} only plus:nether/onion_obsidian`)
        //console.warn()
    }
})