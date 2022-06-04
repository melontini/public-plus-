var dragon
onEvent('entity.spawned', event => {
    let world = event.getWorld()
    let entity = event.getEntity()
    if (entity.getType() == 'minecraft:ender_dragon') {
        dragon = true
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