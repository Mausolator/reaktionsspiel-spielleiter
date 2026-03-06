radio.onReceivedNumber(function (receivedNumber) {
	
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Aktion = randint(0, 3)
    if (Aktion == 0) {
        radio.sendNumber(0)
    } else if (Aktion == 1) {
        radio.sendNumber(1)
    } else if (Aktion == 2) {
        radio.sendNumber(2)
    } else if (Aktion == 3) {
        radio.sendNumber(3)
    }
})
let Aktion = 0
radio.setGroup(88)
