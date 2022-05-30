onEvent('block.right_click', event => {
    if (event.getWorld().getLocalTime() >= 12500.0) {var cond = true}
    color.forEach(color => {
        if (event.getBlock().id == 'minecraft:' + color + '_bed' & cond == true) {
            if (Math.floor(Math.random() * 7500000000001) == 1) {
                event.server.runCommandSilent(`/effect give ${event.getEntity().getDisplayName()} minecraft:luck 1000000 2 true`)
                event.server.runCommandSilent(`/advancement grant ${event.getEntity().getDisplayName()} only plus:story/dream`)
            }
            //console.info(event.getWorld().getLocalTime())
        }
    })
})