const wpi = require('node-wiring-pi');

const configPin = 7;
const configTimeout = 1000;

wpi.setup('wpi');
wpi.pinMode(configPin, wpi.OUTPUT);

let isLedOn = 0;

setInterval(function() {
	isLedOn = +!isLedOn;

	wpi.digitalWrite(configPin, isLedOn );
}, configTimeout);