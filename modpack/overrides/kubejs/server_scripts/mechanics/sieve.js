/*onEvent('block.right_click', event => {
    let block = event.getBlock()
    let item = event.getItem()
    if (event.getItem().id == 'kubejs:sieve' && event.getBlock().getUp().id == 'minecraft:water' && event.getBlock().getUp().getNorth().id == 'minecraft:water') { var cond = true }
    if (event.getItem().id == 'kubejs:sieve' && event.getBlock().getUp().id == 'minecraft:water' && event.getBlock().getUp().getSouth().id == 'minecraft:water') { var cond = true }
    if (event.getItem().id == 'kubejs:sieve' && event.getBlock().getUp().id == 'minecraft:water' && event.getBlock().getUp().getWest().id == 'minecraft:water') { var cond = true }
    if (event.getItem().id == 'kubejs:sieve' && event.getBlock().getUp().id == 'minecraft:water' && event.getBlock().getUp().getEast().id == 'minecraft:water') { var cond = true }
    //console.info(cond)
    switch (cond) {
        case true:
            if (!event.player.stages.has('sieve_cooldown')) {
                if (Math.floor(Math.random() * 2) == 1) {
                    event.server.scheduleInTicks(1, event.server, callback => {
                        callback.server.runCommandSilent(`/playsound minecraft:block.sand.break ambient @a ${event.getEntity().x} ${event.getEntity().y} ${event.getEntity().z}`)
                    })
                    event.server.scheduleInTicks(7, event.server, callback => {
                        callback.server.runCommandSilent(`/playsound minecraft:block.sand.step ambient @a ${event.getEntity().x} ${event.getEntity().y} ${event.getEntity().z}`)
                    })
                    event.server.scheduleInTicks(13, event.server, callback => {
                        callback.server.runCommandSilent(`/playsound minecraft:block.sand.break ambient @a ${event.getEntity().x} ${event.getEntity().y} ${event.getEntity().z}`)
                    })
                    event.server.scheduleInTicks(25, event.server, callback => {
                        callback.server.runCommandSilent(`/playsound minecraft:block.note_block.banjo ambient @a ${block.x} ${block.y + 1} ${block.z}`)
                    })
                    event.server.scheduleInTicks(25, event.server, callback => {
                        callback.server.runCommandSilent(`/particle minecraft:end_rod ${block.x} ${block.y + 1} ${block.z} .6 .6 .6 0.025 100`)
                    })
                    event.server.scheduleInTicks(25, event.server, callback => {
                        callback.server.runCommandSilent(`/loot spawn ${block.x} ${block.y + 1} ${block.z} loot kubejs:gameplay/sieve`)
                    })
                }
                else {
                    event.server.scheduleInTicks(1, event.server, callback => {
                        callback.server.runCommandSilent(`/playsound minecraft:block.sand.break ambient @a ${event.getEntity().x} ${event.getEntity().y} ${event.getEntity().z}`)
                    })
                    event.server.scheduleInTicks(7, event.server, callback => {
                        callback.server.runCommandSilent(`/playsound minecraft:block.sand.step ambient @a ${event.getEntity().x} ${event.getEntity().y} ${event.getEntity().z}`)
                    })
                    event.server.scheduleInTicks(13, event.server, callback => {
                        callback.server.runCommandSilent(`/playsound minecraft:block.sand.break ambient @a ${event.getEntity().x} ${event.getEntity().y} ${event.getEntity().z}`)
                    })
                    event.server.scheduleInTicks(25, event.server, callback => {
                        callback.server.runCommandSilent(`/playsound minecraft:block.note_block.bass ambient @a ${block.x} ${block.y + 1} ${block.z}`)
                    })
                    event.server.scheduleInTicks(25, event.server, callback => {
                        callback.server.runCommandSilent(`/particle minecraft:angry_villager ${block.x} ${block.y + 1} ${block.z} .6 .6 .6 0.025 10`)
                    })
                }
                event.player.stages.add('sieve_cooldown')
                event.server.scheduleInTicks(400, event.server, callback => {
                    event.player.stages.remove('sieve_cooldown')
                })
            } 
            else {
                event.server.runCommandSilent(`/title ${event.getEntity().getDisplayName()} actionbar "The sieve is on cooldown!"`)
                //console.info('Sieve on cooldown!')
            }
            //console.info('success')
            break;

        default:
            //console.info('fail (invalid surface or wrong item)')
            break;
    }
    //console.info(event.getHand())
    //console.info("=====================================================================")
})*/