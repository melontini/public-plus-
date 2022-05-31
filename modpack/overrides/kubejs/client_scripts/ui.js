onEvent('ui.main_menu', event => {
    event.replace(ui => {
        //ui.background('kubejsui:textures/example_background.png')
        //day-night change? anyone?
        let result;
        //queries current date
        const date = new Date();
        //gets current hour
        let a = date.getHours();
        //check if it's night
        if (a => 0, a <= 5) {
            result = 'night';
        }
        //checks if it's morning
        else if (a > 5, a <= 12) {
            result = 'morning';
        }
        //checks if it's day
        else if (a > 12, a < 18) {
            result = 'day';
        }
        else if (a >= 18, a <= 21) {
            result = 'eve';
        }
        //check if it's night again, since there're 24 hours in a day
        //I wonder if this work if you use AM/PM format
        else if (a > 21, a <= 23) {
            result = 'night';
        }
        ui.panorama("kubejs:textures/gui/panoramas/sakura_forest/panorama_" + result);
        //top
        ui.image((i) => {
            i.width = 205;
            i.height = 4096;
            i.x = 0;
            i.y = 0;
            i.texture = "kubejs:textures/gui/black_square.png";
        });
        //logo
        //carftmine
        /*ui.image((i) => {
            i.width = 183;
            i.height = 31;
            i.x = 10;
            i.y = 20;
            i.texture = "kubejs:textures/gui/minecraft_logo.png";
        });*/
        //plus
        ui.image((i) => {
            i.width = 130;
            i.height = 47;
            i.x = 41;
            i.y = 34;
            i.texture = "kubejs:textures/gui/plus_minus_logo.png";
        });
        //x
        /*ui.image((i) => {
            i.width = 20;
            i.height = 23;
            i.x = 90;
            i.y = 45;
            i.texture = "kubejs:textures/gui/x_outlined.png";
        });*/
        //buttons
        ui.button(b => {
            b.name = Text.translate("menu.singleplayer")
            b.width = 143;
            b.height = 20;
            b.x = 30;
            b.y = 100;
            b.action = 'minecraft:singleplayer'
        })
        ui.button(b => {
            b.name = Text.translate("menu.options")
            b.width = 143;
            b.height = 20;
            b.x = 30;
            b.y = 150;
            b.action = 'minecraft:options'
        })
        ui.button(b => {
            b.name = Text.translate("menu.multiplayer")
            b.width = 143;
            b.height = 20;
            b.x = 30;
            b.y = 125;
            b.action = 'minecraft:multiplayer'
        })
        ui.button(b => {
            b.name = Text.translate("menu.quit")
            b.width = 69;
            b.height = 20;
            b.x = 104;
            b.y = 175;
            b.action = 'minecraft:quit'
        })
        ui.button(b => {
            b.name = Text.translate("modmenu.title")
            b.width = 69;
            b.height = 20;
            b.x = 30;
            b.y = 175;
            b.action = 'fabric:mod_list'
        })
        //shilling
        ui.imageButton((b) => {
            b.texture = "kubejs:textures/gui/boosty_button_no_outline.png";
            b.width = 20;
            b.height = 20;
            b.x = 178;
            b.y = 175;
            b.action = 'https://boosty.to/melontini/'
        })
        //mojang copyright 
        ui.label(l => {
            l.name = 'Copyright Mojang AB. Do not distribute!'
            l.x = 5
            l.y = ui.height - 12
            //help wanted
            //l.screen = 'screen.credits'
        })
        ui.label(l => {
            l.name = 'Complementary Shaders by EminGTR'
            l.x = 5
            l.y = ui.height - 22
            l.action = 'https://www.curseforge.com/minecraft/customization/complementary-shaders'
        })
    })
})