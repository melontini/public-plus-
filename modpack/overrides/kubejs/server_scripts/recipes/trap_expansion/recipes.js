onEvent('recipes', event => {
    event.remove({output: 'trapexpansion:detector'})
    event.shaped('trapexpansion:detector', [
      'SSS',
      'RRI',
      'SSS'
    ], {
      S: 'minecraft:cobblestone',
      R: 'minecraft:redstone',
      I: 'biomemakeover:illunite_shard'
    }).id('trapexpansion:detector')

    event.remove({output: 'trapexpansion:analog_fan'})
    event.shaped('trapexpansion:analog_fan', [
      'SPS',
      'PsP',
      'RCR'
    ], {
      S: 'minecraft:cobblestone',
      s: 'minecraft:slime_ball',
      R: 'minecraft:redstone',
      P: '#minecraft:planks',
      C: 'minecraft:comparator'
    }).id('trapexpansion:analog_fan')

    event.remove({output: 'trapexpansion:fan'})
    event.shaped('trapexpansion:fan', [
      'SPS',
      'PsP',
      'RCR'
    ], {
      S: 'minecraft:cobblestone',
      s: 'minecraft:slime_ball',
      R: 'minecraft:redstone',
      P: '#minecraft:planks',
      C: 'minecraft:repeater'
    }).id('trapexpansion:fan')

    event.remove({output: 'trapexpansion:spike_trap'})
    event.shaped('trapexpansion:spike_trap', [
      'SsS',
      'RpR'
    ], {
      S: 'minecraft:iron_sword',
      s: 'minecraft:stone_slab',
      R: 'minecraft:redstone',
      p: 'minecraft:stone_pressure_plate'
    }).id('trapexpansion:spike_trap')

    event.remove({output: 'trapexpansion:powered_spike_trap'})
    event.shaped('trapexpansion:powered_spike_trap', [
      'SsS',
      'RpR'
    ], {
      S: 'minecraft:iron_sword',
      s: 'minecraft:stone_slab',
      R: 'minecraft:redstone',
      p: 'minecraft:repeater'
    }).id('trapexpansion:powered_spike_trap')

    event.remove({output: 'trapexpansion:slippery_stone'})
    event.shaped('4x trapexpansion:slippery_stone', [
      'C C',
      ' I ',
      'C C'
    ], {
      C: 'minecraft:cobblestone',
      I: 'minecraft:packed_ice'
    }).id('trapexpansion:slippery_stone')
})