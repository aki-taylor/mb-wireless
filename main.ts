radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showIcon(IconNames.Heart)
    } else if (receivedNumber == 1) {
        basic.showIcon(IconNames.SmallHeart)
    } else if (receivedNumber == 2) {
        basic.showIcon(IconNames.Happy)
    } else if (receivedNumber == 3) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Surprised)
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(2)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(4)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(3)
})
radio.setGroup(1)
