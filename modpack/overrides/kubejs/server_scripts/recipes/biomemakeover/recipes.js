onEvent('recipes', event => {
    event.remove({output: 'biomemakeover:willow_planks'})
    event.remove({output: 'biomemakeover:willow_planks_stripped'})
    event.shapeless('4x biomemakeover:willow_planks', ['#biomemakeover:willow_logs']).id('biomemakeover:willow_planks').group('planks')
    event.remove({output: 'biomemakeover:blighted_balsa_planks'})
    event.remove({output: 'biomemakeover:blighted_balsa_planks_stripped'})
    event.shapeless('4x biomemakeover:blighted_balsa_planks', ['#biomemakeover:blighted_balsa_logs']).id('biomemakeover:blighted_balsa_planks').group('planks')
    event.remove({output: 'biomemakeover:swamp_cypress_planks'})
    event.remove({output: 'biomemakeover:swamp_cypress_planks_stripped'})
    event.shapeless('4x biomemakeover:swamp_cypress_planks', ['#biomemakeover:swamp_cypress_logs']).id('biomemakeover:swamp_cypress_planks').group('planks')
    event.remove({output: 'biomemakeover:ancient_oak_planks'})
    event.remove({output: 'biomemakeover:ancient_oak_planks_stripped'})
    event.shapeless('4x biomemakeover:ancient_oak_planks', ['#biomemakeover:ancient_oak_logs']).id('biomemakeover:ancient_oak_planks').group('planks')
})