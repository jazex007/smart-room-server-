//this is part two from our ecosystem the server that will comunicate with our controller and our extensions 
                                                                                                                   
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 101100010001110100000) {
        radio.sendNumber(1.000000000000141)
        radio.sendNumber(0)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
})
radio.onReceivedValue(function (name, value) {
    radio.sendValue("name", 0)
})//this is the comunication channel for comunicating with extensions you can setup
//some number or code that will be the variable like if you want to send something to weather probe not to vacuumer you will send 
//radio.sendValue("name", 0) and the name will be weather and the value can be the temperature then the server send this to controller
// as temperature.
radio.setGroup(1)
radio.setTransmitPower(7)
basic.forever(function () {
    basic.showIcon(IconNames.Yes)
})
