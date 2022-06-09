onEvent('block.right_click', event => {
    let block = event.getBlock()
    let entity = event.getEntity()
    let blockState = block.getBlockState()
    let stringState = blockState.toString()
    //epic unexploiable code
    if (event.getItem().id == 'minecraft:gunpowder' && ((block.id == 'farmersdelight:stove' && stringState.includes("lit=true")) || (block.id == 'minecraft:campfire' && stringState.includes("lit=true")) || (block.id == 'minecraft:soul_campfire' && stringState.includes("lit=true")))) {
        var count = event.getItem().getCount();
        if (!entity.isCreativeMode()) {
            event.getItem().setCount(count - 1)
        }
        event.getWorld().getBlock(block.x, block.y, block.z)
            .createExplosion()
            .causesFire(true)
            .damagesTerrain(false)
            .strength(2)
            .explode()
    }
})