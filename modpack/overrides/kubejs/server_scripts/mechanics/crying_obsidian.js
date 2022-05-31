onEvent('block.right_click', event => {
    let block = event.getBlock()
    let entity = event.getEntity()
    //checks if item in hand is onion from farmer's delight and right clicked block is obsidian
    if (event.getItem().id == 'farmersdelight:onion' && block.id == 'minecraft:obsidian') {
        //queries amount of onions in hand
        var count = event.getItem().getCount();
        //check if player is not in creative mode
        if (!entity.isCreativeMode()) {
            //decrements item in hand by 1
            event.getItem().setCount(count - 1)
        }
        //replaces obsidian with crying obsidian
        event.getWorld().getBlock(block.x, block.y, block.z)
           .set('minecraft:crying_obsidian')
        //grant advancement
        event.server.runCommandSilent(`/advancement grant ${entity.getDisplayName()} only plus:nether/onion_obsidian`)
        //console.warn()
    }
})