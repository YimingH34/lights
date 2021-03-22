basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(2000)
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P2, 1)
    }
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(2000)
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P0, 1)
    }
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
})
