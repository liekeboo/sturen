radio.setGroup(1)
basic.forever(function () {
    if (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Up)) {
        if (Math.abs(input.acceleration(Dimension.Y)) < 300 && Math.abs(input.acceleration(Dimension.X)) < 300) {
            basic.showLeds(`
                . . . . .
                . # # # .
                . # . # .
                . # # # .
                . . . . .
                `)
            radio.sendNumber(1)
        }
        if (input.acceleration(Dimension.Y) < -700 && input.acceleration(Dimension.X) < -50) {
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
            radio.sendNumber(2)
        }
        if (true) {
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
            radio.sendNumber(3)
        }
        if (input.acceleration(Dimension.X) < -700) {
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
            radio.sendNumber(4)
        }
        if (input.acceleration(Dimension.X) > 700) {
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
            radio.sendNumber(5)
        }
        if (input.acceleration(Dimension.X) > 700 && input.acceleration(Dimension.Y) > 700) {
            basic.showLeds(`
                # . . . .
                . # . . .
                . . # . #
                . . . # #
                . . # # #
                `)
            radio.sendNumber(6)
        }
        if (input.acceleration(Dimension.X) > 700 && input.acceleration(Dimension.Y) < -700) {
            basic.showLeds(`
                . . # # #
                . . . # #
                . . # . #
                . # . . .
                # . . . .
                `)
            radio.sendNumber(7)
        }
    } else {
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
    }
})
