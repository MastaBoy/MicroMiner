input.onButtonPressed(Button.A, function () {
    if (Playable == 0) {
        basic.showString("GO")
        TIMER = 35
        Playable = 2
        HEALTH = 5
        basic.pause(500)
        HEALTH += -1
        if (HEALTH == 4) {
            basic.showLeds(`
                . # . # .
                # # # # #
                # # # # #
                . # # # .
                . . # . .
                `)
        }
        for (let index = 0; index < 30; index++) {
            music.playMelody("F B A F C5 A G B ", 120)
        }
    }
})
input.onPinPressed(TouchPin.P2, function () {
    if (Playable == 2) {
        basic.showString("YOU WIN")
        basic.showString("SCORE")
        basic.showNumber(TIMER)
        if (HEALTH == 4) {
            basic.showLeds(`
                . . # . .
                . # # # .
                # # # # #
                . # . # .
                # . . . #
                `)
            control.reset()
        }
        control.reset()
    }
})
input.onButtonPressed(Button.B, function () {
    control.reset()
})
input.onPinPressed(TouchPin.P1, function () {
	
})
input.onPinReleased(TouchPin.P1, function () {
    HEALTH += -1
    if (HEALTH == 4) {
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
    } else if (HEALTH == 3) {
        basic.showLeds(`
            . # . . .
            # # # . .
            # # # # #
            . # # # .
            . . # . .
            `)
    } else if (HEALTH == 2) {
        basic.showLeds(`
            . # . . .
            # # # . .
            # # # . .
            . # # . .
            . . # . .
            `)
    } else if (HEALTH == 1) {
        basic.showLeds(`
            . # . . .
            # # # . .
            # # # . .
            . . . . .
            . . . . .
            `)
    } else {
    	
    }
})
let TIMER = 0
let HEALTH = 0
let Playable = 0
basic.showLeds(`
    # . . . #
    . . . . .
    . . . . .
    # . . . #
    . # # # .
    `)
Playable = 0
HEALTH = 500
basic.forever(function () {
    if (HEALTH == 0) {
        music.playMelody("G F E D E D D - ", 120)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(3000)
        control.reset()
    }
})
basic.forever(function () {
    basic.pause(1000)
    TIMER += -1
    if (TIMER == 0) {
        music.playMelody("G F E D E D D - ", 120)
        basic.showLeds(`
            # . . . #
            . # . # .
            # . # . #
            . # . # .
            # . . . #
            `)
        basic.pause(1000)
        control.reset()
    }
})
basic.forever(function () {
    if (Playable == 2) {
        if (HEALTH == 0) {
            music.stopAllSounds()
        }
    }
})
basic.forever(function () {
    if (HEALTH == 4) {
        music.setTempo(100)
    } else if (HEALTH == 3) {
        music.setTempo(200)
    } else if (HEALTH == 2) {
        music.setTempo(300)
    } else if (HEALTH == 1) {
        music.setTempo(400)
    } else {
    	
    }
})
