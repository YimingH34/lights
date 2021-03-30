/**
 * This is where the code is running.
 */
/**
 * Whenever the program is turned on, it will set one of the variable that I set up(Walk_button) to 0 and another variable (malfunction) to 0 as well.
 */
// When ever you press the A button, a variable that I set up will increase by 1 and it will show the led which is full.
input.onButtonPressed(Button.A, function () {
    Walk_button += 1
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
// Whenever you press the B button, it will simply increase another variable that I set by 1.
input.onButtonPressed(Button.B, function () {
    malfunction += 1
})
let malfunction = 0
let Walk_button = 0
// This is to make the code to run forever, because it is always true therefore it will run forever.
while (true) {
    // This code will only run and loop if the variable (Walk_button) is 0.
    while (Walk_button == 0) {
        // This is scenario 1, this is for normal mode for a light.
        if (malfunction == 0) {
            // This is when the pin will turn on and P2 is the green light.
            pins.digitalWritePin(DigitalPin.P2, 1)
            // This is to make the red light to turn on for that amount of time.
            basic.pause(25000)
            // This is a loop to create a blinking effect, it will shut off the pin for 0.1sec and turn it on for 0.1sec and this will loop for 3 times.
            for (let index = 0; index <= 2; index++) {
                pins.digitalWritePin(DigitalPin.P2, 0)
                basic.pause(100)
                pins.digitalWritePin(DigitalPin.P2, 1)
                basic.pause(100)
            }
            // This will just turn off the p2.
            pins.digitalWritePin(DigitalPin.P2, 0)
            // This will make the P1 to turn on.
            pins.digitalWritePin(DigitalPin.P1, 1)
            // It will pause for 2.5sec so it will make the light to turn on for that amount of time.
            basic.pause(2500)
            // This will turn on P1
            pins.digitalWritePin(DigitalPin.P1, 0)
            // This will turn on P0
            pins.digitalWritePin(DigitalPin.P0, 1)
            // This will make the light to turn on for 5sec.
            basic.pause(25000)
            // Turns off the P0.
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
        } else if (malfunction == 1) {
            // This right here is the scenario 2, it is for malfunction, if you press the B button once to make P1 to turn on and off and that is the yellow light.
            pins.digitalWritePin(DigitalPin.P1, 1)
            basic.pause(200)
            pins.digitalWritePin(DigitalPin.P1, 0)
            basic.pause(200)
        } else if (malfunction == 2) {
            // This is scenario 3 and it will make the P0(red light) to turn on and off if you press the B button twice.
            pins.digitalWritePin(DigitalPin.P0, 1)
            basic.pause(200)
            pins.digitalWritePin(DigitalPin.P0, 0)
            basic.pause(200)
        } else {
            // This is the last scenario there is, if you press the B button more than twice it will just reset the variable so it will run the normal street light.
            malfunction = 0
        }
    }
    // This is the other loop, if you press the A button which is the variable Walk_button. it runs if the variable doesn't equal 0. The code is the same except there are some tiny changes.
    while (Walk_button != 0) {
        // It will show a person icon so that it means it means that you can walk.
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            . . # . .
            . # . # .
            `)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(7000)
        // After the icon shows up for a little bit, it will show a count down.
        for (let index3 = 0; index3 <= 9; index3++) {
            basic.showNumber(10 - index3)
        }
        for (let index = 0; index <= 2; index++) {
            pins.digitalWritePin(DigitalPin.P2, 0)
            basic.pause(100)
            pins.digitalWritePin(DigitalPin.P2, 1)
            basic.pause(100)
        }
        basic.clearScreen()
        // After the green light turns of it will show a solid red icon to show stop walking. This will happen when the yellow/red light turns on.
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
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(25000)
        pins.digitalWritePin(DigitalPin.P0, 0)
        for (let turns2 = 0; turns2 <= 8; turns2++) {
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
        // It will set the the variable to 0 so that it will run the other codes again
        Walk_button = 0
        // This will stop this loop so it will go to the other part of the code.
        break;
    }
}
control.inBackground(function () {
    if (malfunction != 0 && Walk_button != 0) {
        malfunction = 0
    }
})
