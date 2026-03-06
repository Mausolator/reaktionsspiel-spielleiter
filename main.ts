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
radio.onReceivedString(function (receivedString) {
    if (true) {
        if (receivedString == "player") {
            radio.sendString("1")
        } else if (false) {
        	
        }
    }
})
radio.onReceivedValue(function (name, value) {
    if ("1" == name && value == Aktion) {
        Punkte_S1 += 1
    } else if ("2" == name && value == Aktion) {
        Punkte_S2 += 1
    }
    if ("1" == name && value != Aktion) {
        Punkte_S1 += Punkte_S1 - 1
    }
    if ("2" == name && value != Aktion) {
        Punkte_S2 += Punkte_S2 - 1
    }
})
let Punkte_S2 = 0
let Punkte_S1 = 0
let Aktion = 0
radio.setGroup(88)
