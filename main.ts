input.onButtonPressed(Button.A, function () {
    radio.sendString("" + convertToText(0) + "," + "My Name")
})
radio.onReceivedString(function (receivedString) {
    msg = _py.py_string_split(receivedString, ",")
katakana.setScrollTime(200)
    if (msg[0] == "0") {
        basic.showString("" + (msg[1]))
    } else {
        katakana.showString(msg[1])
    }
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("" + convertToText(1) + "," + "ｺﾝﾆﾁﾜ")
})
let msg : string[] = []
