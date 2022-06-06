global.crystals = [];
onEvent('entity.spawned', event => {
    let world = event.getWorld()
    let entity = event.getEntity()
    let data = 'dragon.json'
    let dataRead = JsonIO.read(data)
    let crystalData = 'crystals.json'
    let CrystalRead = JsonIO.read(crystalData)
    if (entity.getType() == 'minecraft:ender_dragon') {
        if (entity.isAlive()) {
            let dragonIDprepare = {
                "dragonAlive": true
            }
            JsonIO.write(data, dragonIDprepare)

            //I'm not smart
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
            event.server.scheduleInTicks(5, event.server, function (callback) {
                let dataNuke = {
                    "dragonAlive": false
                }
                if (!entity.isAlive()) {
                    JsonIO.write(data, dataNuke)
                } else {
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
            if (dataRead.dragonAlive != false) {
                global.crystals.push([entity.getId(), entity.getX(), entity.getY(), entity.getZ()]);
                console.log(global.crystals)
            }
            event.server.scheduleInTicks(1, event.server, function (callback) {
                var x = entity.getX()
                var y = entity.getY()
                var z = entity.getZ()
                if (!event.getEntity().isAlive() && dataRead.dragonAlive == true) {
                    event.server.scheduleInTicks(1800, event.server, function (callback) {
                        if (!event.getEntity().isAlive() && dataRead.dragonAlive == true) {
                            callback.server.runCommandSilent(`/execute in minecraft:the_end run summon minecraft:lightning_bolt ${x} ${y} ${z}`)

                            event.server.scheduleInTicks(20, event.server, function (callback) {
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
    JsonIO.write(data, dataNuke)
})