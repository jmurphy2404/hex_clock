

//Clock Javascript

//declare variables to edit elements in html
var clock = document.getElementById('clock');
var hex = document.getElementById('hex_color');

//declare function to get the time
function clockHex() {
	var time = new Date();
	var hours = (time.getHours() % 12).toString();
	var min = time.getMinutes().toString();
	var sec = time.getSeconds().toString();

//add 0 to front so its always 2 digits
	if(hours.length < 2) {
		hours = '0' + hours;
	}
	
//add 0 to front so its always 2 digits	
	if(min.length < 2){
		min = '0' + min;
	}
	
//add 0 to front so its always 2 digits	
	if(sec.length < 2){
		sec = '0' + sec;
	}

//create variables for the strings which will display
	var clockString = hours + ':' + min + '.' + sec;
	var hexString = '#' + hours + min + sec;

//change objects to display variables from above
	clock.textContent = clockString;
	hex.textContent = hexString;
	document.body.style.backgroundColor = hexString;
}

//execute function
clockHex();

//set interval of 1s so it auto updates and keeps accurate time
setInterval(clockHex, 1000);
