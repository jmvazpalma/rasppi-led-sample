const wpi = require('wiring-pi');

const configPin = 7;
const configTimeout = 1000;

wpi.setup('wpi');
wpi.pinMode(configPin, OUTPUT);

const isLedOn = 0;

setInterval(function() {
	isLedOn = +!isLedOn;

	wpi.digitalWrite(configPin, isLedOn );
}, configTimeout);