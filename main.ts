input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P1, 0)
    pins.servoWritePin(AnalogPin.P2, 180)
    Pixel_Array.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    Pixel_Array.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    Pixel_Array.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    Pixel_Array.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
    Pixel_Array.setPixelColor(4, neopixel.colors(NeoPixelColors.Purple))
})
input.onButtonPressed(Button.AB, function () {
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P1, 180)
    pins.servoWritePin(AnalogPin.P2, 0)
    Pixel_Array.clear()
    Pixel_Array.show()
})
let Pixel_Array: neopixel.Strip = null
Pixel_Array = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
basic.forever(function () {
    basic.pause(100)
    Pixel_Array.rotate(1)
    Pixel_Array.show()
})
