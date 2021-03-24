input.onButtonPressed(Button.A, function () {
    Walk_button += 1
})
input.onButtonPressed(Button.B, function () {
    malfunction += 1
})
let Walk_button = 0
let malfunction = 0
basic.forever(function () {
    if (malfunction == 0) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(5000)
        for (let index = 0; index < 3; index++) {
            pins.digitalWritePin(DigitalPin.P2, 0)
            basic.pause(150)
            pins.digitalWritePin(DigitalPin.P2, 1)
            basic.pause(150)
        }
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(5000)
        for (let index = 0; index < 3; index++) {
            pins.digitalWritePin(DigitalPin.P0, 0)
            basic.pause(150)
            pins.digitalWritePin(DigitalPin.P0, 1)
            basic.pause(150)
        }
        pins.digitalWritePin(DigitalPin.P0, 0)
        Walk_button = 0
    } else if (malfunction == 1) {
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P1, 0)
    } else if (malfunction == 2) {
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P0, 0)
    } else {
        malfunction = 0
    }
})
basic.forever(function () {
    if (Walk_button >= 1 && pins.digitalReadPin(DigitalPin.P0) == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.clearScreen()
    } else if (Walk_button >= 1 && pins.digitalReadPin(DigitalPin.P1) == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.clearScreen()
    } else if (Walk_button >= 1 && 0 == 0) {
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            . . # . .
            . # . # .
            `)
        basic.pause(100)
    } else {
    	
    }
})
