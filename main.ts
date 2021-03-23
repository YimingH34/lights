let Walk_button = 0
input.onButtonPressed(Button.A, function () {
    Walk_button += 1
})
basic.forever(function () {
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
})
basic.forever(function () {
    while (Walk_button == 1 && pins.digitalReadPin(DigitalPin.P0) == 1) {
        music.playTone(831, music.beat(BeatFraction.Half))
    }
    while (Walk_button == 1 && pins.digitalReadPin(DigitalPin.P2) == 1) {
        music.playTone(698, music.beat(BeatFraction.Half))
        music.playTone(587, music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Half))
        music.playTone(466, music.beat(BeatFraction.Half))
        music.playTone(466, music.beat(BeatFraction.Quarter))
    }
})
