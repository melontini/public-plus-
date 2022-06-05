var dragon
onEvent('entity.spawned', event => {
    let world = event.getWorld()
    let entity = event.getEntity()
    if (entity.getType() == 'minecraft:ender_dragon') {
        dragon = true
        if (entity.isAlive()) {
            //TODO add some server load checks
            //pain
            event.server.scheduleInTicks(1, event.server, (callback) => {
                callback.data.tell(Text.red('Hi! Little dev message. Under any circumstances DO NOT RESTART the server or DO NOT RELOAD your world. The script managing the dragon runs on pure enthusiasm, so it will break if you restart the game or server.'))
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
        event.server.scheduleInTicks(1, event.server, function (callback) {
            if (!entity.isAlive()) {
                dragon = false
            } else {
                callback.reschedule()
            }
        })
    }
    if (entity.getType() == 'minecraft:end_crystal') {
        //console.log(entity.getWorld().getDimension())
        if (entity.getWorld().getDimension() == 'minecraft:the_end') {
            event.server.scheduleInTicks(1, event.server, function (callback) {
                var x = entity.getX()
                var y = entity.getY()
                var z = entity.getZ()
                if (!event.getEntity().isAlive() && dragon != false) {
                    event.server.scheduleInTicks(2400, event.server, function (callback) {
                        if (!event.getEntity().isAlive() && dragon != false) {
                            event.server.runCommandSilent(`/particle minecraft:end_rod ${x} ${y} ${z} 0.5 0.5 0.5 0.5 100 normal`)
                            event.server.runCommandSilent(`/execute in minecraft:the_end run summon minecraft:lightning_bolt ${x} ${y} ${z}`)
                            //console.log(dragon)
                            event.server.scheduleInTicks(20, event.server, function (callback) {
                                event.server.runCommandSilent(`/execute in minecraft:the_end run summon minecraft:end_crystal ${x} ${y} ${z}`)
                            })
                        }
                    })
                } else {
                    callback.reschedule()
                }
            })
        }
    }
})