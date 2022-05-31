onEvent('block.right_click', event => {
    let block = event.getBlock()
    let entity = event.getEntity()
    if (event.getItem().id == 'farmersdelight:onion' && block.id == 'minecraft:obsidian') {
        event.getWorld().getBlock(block.x, block.y, block.z)
           .set('minecraft:crying_obsidian')
        var count = event.getItem().getCount();
        event.getItem().setCount(count - 1)
        event.server.runCommandSilent(`/advancement grant ${entity.getDisplayName()} only plus:nether/onion_obsidian`)
        //console.warn()
    }
})