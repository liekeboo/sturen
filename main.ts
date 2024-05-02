radio.setGroup(1)
basic.forever(function () {
    if (Math.abs(input.acceleration(Dimension.Y)) < 300 && Math.abs(input.acceleration(Dimension.X)) < 300) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
        radio.sendNumber(0)
    }
    if (input.acceleration(Dimension.Y) < -700) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        radio.sendNumber(1)
    }
    if (input.acceleration(Dimension.Y) > 700) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        radio.sendNumber(2)
    }
    if (input.acceleration(Dimension.X) < -700) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        radio.sendNumber(3)
    }
    if (input.acceleration(Dimension.X) > 700) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        radio.sendNumber(4)
    }
})
