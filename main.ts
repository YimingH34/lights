input.onButtonPressed(Button.A, function () {
    Walk_button += 1
})
input.onButtonPressed(Button.B, function () {
    malfunction += 1
})
let turns = 0
let malfunction = 0
let Walk_button = 0
while (Walk_button == 0) {
    if (malfunction == 0) {
        for (let green_light = 0; green_light <= 5; green_light++) {
            pins.digitalWritePin(DigitalPin.P2, 1)
            basic.pause(1000)
        }
        for (let index = 0; index < 3; index++) {
            pins.digitalWritePin(DigitalPin.P2, 0)
            basic.pause(100)
            pins.digitalWritePin(DigitalPin.P2, 1)
            basic.pause(100)
        }
        Walk_button = 0
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(2500)
        pins.digitalWritePin(DigitalPin.P1, 0)
        for (let red_light = 0; red_light <= 5; red_light++) {
            pins.digitalWritePin(DigitalPin.P0, 1)
            basic.pause(1000)
        }
        for (let index = 0; index < 3; index++) {
            pins.digitalWritePin(DigitalPin.P0, 0)
            basic.pause(150)
            pins.digitalWritePin(DigitalPin.P0, 1)
            basic.pause(150)
        }
        pins.digitalWritePin(DigitalPin.P0, 0)
        for (let turns = 0; turns <= 8; turns++) {
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.pause(100)
        }
        turns = 12
    } else if (malfunction == 1) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P1, 0)
    } else if (malfunction == 2) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P0, 0)
    } else {
        malfunction = 0
    }
    while (Walk_button != 0) {
        if (malfunction == 0) {
            basic.showLeds(`
                . . # . .
                . # # # .
                . # # # .
                . . # . .
                . # . # .
                `)
            for (let green_light = 0; green_light <= 5; green_light++) {
                pins.digitalWritePin(DigitalPin.P2, 1)
                basic.pause(1000)
            }
            for (let index = 0; index < 3; index++) {
                pins.digitalWritePin(DigitalPin.P2, 0)
                basic.pause(100)
                pins.digitalWritePin(DigitalPin.P2, 1)
                basic.pause(100)
            }
            basic.clearScreen()
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            pins.digitalWritePin(DigitalPin.P2, 0)
            pins.digitalWritePin(DigitalPin.P1, 1)
            basic.pause(2500)
            pins.digitalWritePin(DigitalPin.P1, 0)
            basic.clearScreen()
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            for (let red_light = 0; red_light <= 5; red_light++) {
                pins.digitalWritePin(DigitalPin.P0, 1)
                basic.pause(1000)
            }
            for (let index = 0; index < 3; index++) {
                pins.digitalWritePin(DigitalPin.P0, 0)
                basic.pause(150)
                pins.digitalWritePin(DigitalPin.P0, 1)
                basic.pause(150)
            }
            pins.digitalWritePin(DigitalPin.P0, 0)
            for (let turns = 0; turns <= 8; turns++) {
                basic.showLeds(`
                    . . # . .
                    . # . . .
                    # # # # #
                    . # . . .
                    . . # . .
                    `)
                basic.pause(100)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
                basic.pause(100)
            }
            turns = 12
            Walk_button = 0
            break;
        }
    }
}
