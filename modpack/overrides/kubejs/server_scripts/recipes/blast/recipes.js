onEvent('recipes', event => {
    event.remove({output: 'blast:bomb'})
    event.shapeless('2x blast:bomb', ['minecraft:gunpowder', 'minecraft:blaze_powder', 'minecraft:iron_ingot', 'minecraft:string']).id('blast:bomb').group('bombs')
    event.remove({output: 'blast:golden_bomb'})
    event.shapeless('2x blast:golden_bomb', ['minecraft:gunpowder', 'minecraft:blaze_powder', 'minecraft:gold_ingot', 'minecraft:string']).id('blast:golden_bomb').group('bombs')
    event.remove({output: 'blast:diamond_bomb'})
    event.shapeless('1x blast:diamond_bomb', ['minecraft:gunpowder', 'minecraft:blaze_powder', 'minecraft:diamond', 'minecraft:string']).id('blast:diamond_bomb').group('bombs')
    //trigger bombs
    event.remove({output: 'blast:trigger_bomb'})
    event.shapeless('2x blast:trigger_bomb', ['minecraft:gunpowder', 'minecraft:blaze_powder', 'minecraft:iron_ingot', 'minecraft:redstone', '#minecraft:buttons']).id('blast:trigger_bomb').group('bombs')
    event.remove({output: 'blast:golden_trigger_bomb'})
    event.shapeless('2x blast:golden_trigger_bomb', ['minecraft:gunpowder', 'minecraft:blaze_powder', 'minecraft:gold_ingot', 'minecraft:redstone', '#minecraft:buttons']).id('blast:golden_trigger_bomb').group('bombs')
    event.remove({output: 'blast:diamond_trigger_bomb'})
    event.shapeless('1x blast:diamond_trigger_bomb', ['minecraft:gunpowder', 'minecraft:blaze_powder', 'minecraft:diamond', 'minecraft:redstone', '#minecraft:buttons']).id('blast:diamond_trigger_bomb').group('bombs')
})