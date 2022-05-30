onEvent('block.right_click', event => {
    let block = event.getBlock()
    let entity = event.getEntity()
    if (event.getItem().id == 'farmersdelight:onion' && block.id == 'minecraft:obsidian') {
        //////////////////Please someone fix this
        //////////////////I couldn't find a proper decrement function in kjs and have no idea how to fix this
        event.getWorld().getBlock(block.x, block.y, block.z)
           .set('minecraft:crying_obsidian')
        event.server.runCommandSilent(`clear ${entity.getDisplayName()} farmersdelight:onion 1`)
        event.server.runCommandSilent(`/advancement grant ${entity.getDisplayName()} only plus:nether/onion_obsidian`)
        //console.warn('okay')
    }
})