input.onButtonPressed(Button.A, function () {
    random = randint(1, 12)
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
    } else if (random == 6) {
        basic.showLeds(`
            # # . # #
            . . . . .
            # # . # #
            . . . . .
            # # . # #
            `)
    } else if (random == 7) {
        basic.showLeds(`
            # # . # #
            . . . . .
            # . # . #
            . . . . .
            # # . # #
            `)
    } else if (random == 8) {
        basic.showLeds(`
            # . . . #
            . . # . .
            # . . . #
            . . # . .
            # . . . #
            `)
    } else if (random == 9) {
        basic.showLeds(`
            # . # . #
            . . . . .
            # . # . #
            . . . . .
            # . # . #
            `)
    } else if (random == 10) {
        basic.showLeds(`
            # . . . #
            . # . # .
            # . . . #
            . # . # .
            # . . . #
            `)
    } else if (random == 11) {
        basic.showLeds(`
            # . . . #
            . # . # .
            # . # . #
            . # . # .
            # . . . #
            `)
    } else {
        basic.showLeds(`
            # . # . #
            . # . # .
            # . . . #
            . # . # .
            # . # . #
            `)
    }
})
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
