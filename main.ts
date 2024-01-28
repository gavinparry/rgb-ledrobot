let BLUE = 0
let GREEN = 0
let RED = 0
let Direction2 = false
let item = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) > 10) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 100)
        Direction2 = Math.randomBoolean()
        if (Direction2 == true) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 100)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
            basic.pause(800)
        } else {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 100)
            basic.pause(800)
        }
    }
})
basic.forever(function () {
    RED = 0
    GREEN = 0
    BLUE = 255
    for (let index = 0; index < 255; index++) {
        RED += 1
        BLUE += -1
        item.showColor(neopixel.rgb(RED, GREEN, BLUE))
        basic.pause(1)
    }
    for (let index = 0; index < 255; index++) {
        GREEN += 1
        RED += -1
        item.showColor(neopixel.rgb(RED, GREEN, BLUE))
        basic.pause(1)
    }
    for (let index = 0; index < 255; index++) {
        BLUE += 1
        GREEN += -1
        item.showColor(neopixel.rgb(RED, GREEN, BLUE))
        basic.pause(1)
    }
})
