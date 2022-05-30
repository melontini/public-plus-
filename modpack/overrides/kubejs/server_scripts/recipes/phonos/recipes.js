onEvent('recipes', event => {
    event.remove({output: 'phonos:redstone_chip'})
    event.remove({output: 'phonos:note_block_tuner'})
    event.remove({output: 'phonos:channel_tuner'})
    event.remove({output: 'phonos:gourd_speaker'})
    event.remove({output: 'phonos:speak_o_lantern'})
    event.remove({output: 'phonos:tiny_potato_speaker'})

    event.remove({output: 'phonos:loudspeaker'})
    event.shaped('phonos:loudspeaker', [
      'PPP',
      'LRL',
      'SIS'
    ], {
      S: '#minecraft:stone_crafting_materials',
      P: '#minecraft:planks',
      L: '#c:leather_alt',
      R: 'minecraft:redstone',
      I: 'minecraft:iron_ingot',
    }).id('phonos:loudspeaker')

    event.remove({output: 'phonos:radio_jukebox'})
    event.shaped('phonos:radio_jukebox', [
      'PRP',
      'LDL',
      'SIS'
    ], {
      S: '#minecraft:stone_crafting_materials',
      P: '#minecraft:planks',
      L: '#c:leather_alt',
      D: 'minecraft:diamond',
      R: 'minecraft:redstone',
      I: 'minecraft:iron_ingot',
    }).id('phonos:radio_jukebox')

    event.remove({output: 'phonos:radio_note_block'})
    event.shaped('phonos:radio_note_block', [
      'PPP',
      'LRL',
      'SSS'
    ], {
      S: '#minecraft:stone_crafting_materials',
      P: '#minecraft:planks',
      L: '#c:leather_alt',
      R: 'minecraft:redstone',
    }).id('phonos:radio_note_block')
})