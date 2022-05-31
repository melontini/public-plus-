onEvent('block.right_click', event => {
    //check if it's night and player can sleep
    if (!event.getWorld().isDaytime()) {
        //runs this function for every bed color
        color.forEach(color => {
            //matches right clicked block and runs the random function
            if (event.getBlock().id == 'minecraft:' + color + '_bed' && Math.floor(Math.random() * 7500000000000) == 1) {
                //gives luck 2 effect
                event.server.runCommandSilent(`/effect give ${event.getEntity().getDisplayName()} minecraft:luck 1000000 2 true`)
                //grants advancement
                event.server.runCommandSilent(`/advancement grant ${event.getEntity().getDisplayName()} only plus:story/dream`)
                //console.info(event.getWorld().getLocalTime())
            }
        })
    }
})