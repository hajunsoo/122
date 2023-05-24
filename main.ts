radio.onReceivedNumber(function (receivedNumber) {
    수신 = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    d += 1
    if (d == 문자열_리스트.length) {
        d = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("" + (문자열_리스트[d]))
})
input.onButtonPressed(Button.B, function () {
    d += -1
    if (d == -1) {
        d = 문자열_리스트.length - 1
    }
})
let 수신 = 0
let d = 0
let 문자열_리스트: string[] = []
문자열_리스트 = ["in the room", "going out", "do not disturb"]
d = 0
basic.forever(function () {
    let 리스트: string[] = []
    OLED.clear()
    OLED.writeStringNewLine(리스트[d])
    OLED.writeStringNewLine(수신)
    basic.pause(500)
})
