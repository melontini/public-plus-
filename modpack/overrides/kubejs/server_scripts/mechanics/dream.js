onEvent('block.right_click', event => {
    if (!event.getWorld().isDaytime()) {
        color.forEach(color => {
            if (event.getBlock().id == 'minecraft:' + color + '_bed' && Math.floor(Math.random() * 7500000000000) == 1) {
                event.server.runCommandSilent(`/effect give ${event.getEntity().getDisplayName()} minecraft:luck 1000000 2 true`)
                event.server.runCommandSilent(`/advancement grant ${event.getEntity().getDisplayName()} only plus:story/dream`)
                //console.info(event.getWorld().getLocalTime())
            }
        })
    }
})