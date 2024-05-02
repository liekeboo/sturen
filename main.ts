radio.setGroup(1)
basic.forever(function () {
    if (Math.abs(input.acceleration(Dimension.Y)) < 1000 && Math.abs(input.acceleration(Dimension.X)) < 1000) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
        radio.sendNumber(0)
    }
    if (input.acceleration(Dimension.Y) < -1000) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        radio.sendNumber(1)
    }
    if (input.acceleration(Dimension.Y) > 1000) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        radio.sendNumber(2)
    }
    if (input.acceleration(Dimension.X) < -1000) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        radio.sendNumber(3)
    }
    if (input.acceleration(Dimension.X) > 1000) {
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
