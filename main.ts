input.onGesture(Gesture.Shake, function () {
    random = randint(1, 6)
    if (random == 1) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
    } else if (random == 2) {
        basic.showLeds(`
            # # . . .
            # # . . .
            . . . . .
            . . . # #
            . . . # #
            `)
    } else if (random == 3) {
        basic.showLeds(`
            # # . # #
            # . . . #
            . . . . .
            . . # . .
            . # # # .
            `)
    } else if (random == 4) {
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            # # . # #
            # # . # #
            `)
    } else if (random == 5) {
        basic.showLeds(`
            # # . # #
            # . . . #
            . . # . .
            # . . . #
            # # . # #
            `)
    } else {
        basic.showLeds(`
            # # . # #
            . . . . .
            # # . # #
            . . . . .
            # # . # #
            `)
    }
})
let random = 0
basic.showString("PLAY DICE!")
basic.forever(function () {
	
})
