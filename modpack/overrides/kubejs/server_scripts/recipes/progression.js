onEvent('recipes', event => {
    event.remove({id: 'minecraft:ender_eye'})
    event.shapeless('minecraft:ender_eye', ['minecraft:blaze_powder', 'minecraft:ender_pearl', 'biomemakeover:moth_scales']).id('minecraft:ender_eye')
})