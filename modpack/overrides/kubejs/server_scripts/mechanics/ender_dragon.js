onEvent('entity.spawned', event => {
    let entity = event.getEntity()
    let data = 'dragon.json'
    let dataRead = JsonIO.read(data)
    if (entity.getType() == 'minecraft:ender_dragon') {
        if (entity.isAlive()) {
            let dragonIDprepare = {
                "dragonAlive": true
            }
            JsonIO.write(data, dragonIDprepare)

            //I'm not smart
            event.server.scheduleInTicks(1, event.server, function (callback) {
                if (entity.isAlive()) {
                    if (dataRead.dragonAlive != true) {
                        JsonIO.write(data, dragonIDprepare)
                    }
                } else if (!entity.isAlive()) {
                    if (dataRead.dragonAlive != false) {
                        JsonIO.write(data, dragonIDprepare)
                    }
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
            event.server.scheduleInTicks(1, event.server, function (callback) {
                var x = entity.getX()
                var y = entity.getY()
                var z = entity.getZ()
                var time = Math.floor(Math.random() * 1200) + 2200
                if (!event.getEntity().isAlive() && dataRead.dragonAlive != false) {
                    event.server.scheduleInTicks(time, event.server, function (callback) {
                        if (!event.getEntity().isAlive() && dataRead.dragonAlive != false) {
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
})
onEvent('world.unload', event => {
    let data = 'dragon.json'
    let dataRead = JsonIO.read(data)
    let dataNuke = {
        "dragonAlive": false
    }
    if (event.getWorld().getDimension() == 'minecraft:the_end') {
        JsonIO.write(data, dataNuke)
    }
})