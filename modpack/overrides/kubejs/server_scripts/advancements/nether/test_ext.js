/*onEvent('player.tick', function (event) {
    var tick = 0;
    if (!tick > 0) {
        effectEffects.forEach(effect => {
            tick++
            event.server.scheduleInTicks(100, event.server, callback => {
                callback.server.runCommand(`/effect give ${event.getEntity().getDisplayName()} ${effect} 10 1 false`)
            })
        })
    } 
})*/