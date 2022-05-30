onEvent('item.modification', event => {
    event.modify('minecraft:cooked_porkchop', item => {
        item.setFoodProperties((food) => {
            food.hunger(5).saturation(0.6);
        })
    })
    event.modify('minecraft:cooked_beef', item => {
        item.setFoodProperties((food) => {
            food.hunger(5).saturation(0.6);
        })
    })
    event.modify('artifacts:eternal_steak', item => {
        item.setFoodProperties((food) => {
            food.hunger(5).saturation(0.6);
        })
    })
    event.modify('minecraft:cooked_cod', item => {
        item.setFoodProperties((food) => {
            food.hunger(3).saturation(0.4);
        })
    })
    event.modify('minecraft:cooked_salmon', item => {
        item.setFoodProperties((food) => {
            food.hunger(3).saturation(1);
        })
    })
    event.modify('biomemakeover:cooked_glowfish', item => {
        item.setFoodProperties((food) => {
            food.hunger(3).saturation(1);
        })
    })
    event.modify('gofish:grilled_blackstone_deluxe', item => {
        item.setFoodProperties((food) => {
            food.effect('farmersdelight:nourished', 4800, 0, 1.0);
        })
    })
    event.modify('gofish:endfish_and_chorus', item => {
        item.setFoodProperties((food) => {
            food.effect('farmersdelight:nourished', 4800, 0, 1.0);
        })
    })
    event.modify('gofish:aquatic_astral_stew', item => {
        item.setFoodProperties((food) => {
            food.effect('farmersdelight:nourished', 4800, 1, 1.0).effect('minecraft:glowing', 300, 0, 1.0);
        })
        item.maxStackSize = 16
    })
    event.modify('fruitful:baked_apple', item => {
        item.setFoodProperties((food) => {
            food.effect('farmersdelight:nourished', 1200, 0, 0.7);
        })
    })
    event.modify('minecraft:mushroom_stew', item => {
        item.setFoodProperties((food) => {
            food.effect('farmersdelight:comfort', 2400, 0, 1);
        })
    })
    event.modify('minecraft:rabbit_stew', item => {
        item.setFoodProperties((food) => {
            food.effect('farmersdelight:comfort', 2400, 0, 1);
        })
    })
    event.modify('minecraft:beetroot_soup', item => {
        item.setFoodProperties((food) => {
            food.effect('farmersdelight:comfort', 2400, 0, 1);
        })
    })
    event.modify('biomemakeover:glowshroom_stew', item => {
        item.setFoodProperties((food) => {
            food.effect('farmersdelight:comfort', 2400, 0, 1);
        })
    })
    event.modify('minecraft:rabbit_stew', item => {
        item.maxStackSize = 16
    })
    event.modify('minecraft:beetroot_stew', item => {
        item.maxStackSize = 16
    })
    event.modify('minecraft:mushroom_stew', item => {
        item.maxStackSize = 16
    })
    event.modify('minecraft:cake', item => {
        item.maxStackSize = 16
    })
})