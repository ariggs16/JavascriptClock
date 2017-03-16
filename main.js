function myClock(){
	var currentTime = new Date();
	var h = currentTime.getHours();
	var m = currentTime.getMinutes();
	var s = currentTime.getSeconds();
	var timeOfDay = "AM";

	if(h == 0){
		h == 12;
	}

	if(h > 12){
		h = h - 12;
		timeOfDay = "PM"
	}

	if(h == 12){
		timeOfDay = "PM";
	}

	// if(h < 10){
	// 	h = "0" + h;
	// }

	if(m < 10){
		m = "0" + m;
	}

	if(s < 10){
		s = "0" + s;
	}


	var time = h + ":" + m + ":" + s + timeOfDay;
	document.querySelector("#Clock").innerHTML = time;

	setTimeout(myClock, 1000);
}
myClock();