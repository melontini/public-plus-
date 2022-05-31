onEvent('item.toss', function (event) {
    let player = event.getEntity()
    let item = event.getItem()
    let itemEntity = event.getItemEntity()
    //check if player is in the end
    if (event.getWorld().getDimension() == 'minecraft:the_end') {
        //checks players Y cords
        if (player.getY() > 200) {
            //checks if tossed item is dragon egg
            if (item == 'minecraft:dragon_egg') {
                //cheating protection
                //server waits 2 second to make sure the egg was actually thrown down
                event.server.scheduleInTicks(40, event.server, function (callback) {
                    //checks if eggs fall distance is above 14
                    if (itemEntity.getFallDistance() >= 15) {
                        //grants the advancement
                        event.server.runCommandSilent(`/advancement grant ${event.getEntity().getDisplayName()} only plus:end/on_top_of_the_world`)
                    }
                })
            }
        }
    }
})