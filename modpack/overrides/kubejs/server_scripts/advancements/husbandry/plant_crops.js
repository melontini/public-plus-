onEvent('block.place', event => {
    let block = event.getBlock();
    crops.forEach(crop => {
        if (block.id == crop) {
            event.server.runCommandSilent(`/advancement grant ${event.getEntity().getDisplayName()} only plus:husbandry/plant_seeds`)
            //console.log(block.id + " successfully planted a seed /nI sure love minecraft not allowing tags in place block advancements")
        }
    })
})