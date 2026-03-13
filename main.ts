input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    Aktion = randint(1, 3)
    if (Aktion == 1) {
        radio.sendNumber(1)
    } else if (Aktion == 2) {
        radio.sendNumber(2)
    } else if (Aktion == 3) {
        radio.sendNumber(3)
    }
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showString("S1:")
    basic.showNumber(Punkte_S1)
    basic.pause(1000)
    basic.clearScreen()
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "player") {
        basic.showString("claim")
        if (a == 1) {
            radio.sendString("" + (a))
            a = 2
        } else if (a == 2) {
            radio.sendString("" + (a))
            radio.setGroup(88)
            a = 1
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
    } else {
    	
    }
    if ("2" == name && value != Aktion) {
        Punkte_S2 += Punkte_S2 - 1
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    let Player2 = 0
    basic.showString("S2:")
    basic.showNumber(Player2)
    basic.pause(1000)
    basic.clearScreen()
})
let Punkte_S2 = 0
let Punkte_S1 = 0
let Aktion = 0
let a = 0
radio.setGroup(99)
a = 1
