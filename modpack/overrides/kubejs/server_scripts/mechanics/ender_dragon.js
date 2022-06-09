global.isDragonAlive
onEvent('entity.spawned', event => {
    let entity = event.getEntity()
    if (entity.getType() == 'minecraft:ender_dragon') {
        if (entity.isAlive()) {
            //I'm not smart
            event.server.scheduleInTicks(1, event.server, function (callback) {
                if (entity.isAlive()) {
                    global.isDragonAlive = true
                    callback.reschedule()
                } else if (!entity.isAlive()) {
                    global.isDragonAlive = false
                }
            })
            event.server.scheduleInTicks(20, event.server, function (callback) {
                if (entity.isAlive()) {
                    var players = event.server.getPlayers()
                    var playersInEnd = [];
                    players.forEach(player => {
                        if (player.getWorld().getDimension() == 'minecraft:the_end') {
                            if (!playersInEnd.includes(player)) {
                                playersInEnd.push(player);
                            }
                        }
                    });

                    var playersCountInEnd = playersInEnd.length;
                    event.server.runCommandSilent(`/attribute ${entity.getId()} minecraft:generic.max_health base set ${(parseInt(Math.sqrt(500 * playersCountInEnd)) * 10)}`)
                    callback.reschedule()
                }
            })
        }
    }
    /**
     * 
     * 
     * 
     * 
     */
    if (entity.getType() == 'minecraft:end_crystal') {
        if (entity.getWorld().getDimension() == 'minecraft:the_end') {
            var x = entity.getX()
            var y = entity.getY()
            var z = entity.getZ()
            if (y >= 74) {
                event.server.scheduleInTicks(1, event.server, function (callback) {
                    if (!event.getEntity().isAlive() && global.isDragonAlive == true) {
                        var time = Math.floor(Math.random() * 1000) + 2200
                        event.server.scheduleInTicks(time, event.server, function (callback) {
                            if (!event.getEntity().isAlive() && global.isDragonAlive == true) {
                                callback.server.runCommandSilent(`/execute in minecraft:the_end run particle minecraft:end_rod ${x} ${y} ${z} 0.5 0.5 0.5 0.5 200 force`)
                                callback.server.runCommandSilent(`/execute in minecraft:the_end run summon minecraft:lightning_bolt ${x} ${y} ${z}`)

                                event.server.scheduleInTicks(25, event.server, function (callback) {
                                    callback.server.runCommandSilent(`/execute in minecraft:the_end run summon minecraft:end_crystal ${x} ${y} ${z}`)
                                })
                            }
                        })
                    } else {
                        callback.reschedule()
                    }
                })
            }
        }
    }
})