let date = new Date();

let lang = navigator.language;

let dayNumber = date.getDate();

let	dayName = date.toLocaleString(lang, {
	weekday: "long"
});
		
let	month = date.getMonth();

let monthName = date.toLocaleString(lang, {
	month: "long"
});
		
let year = date.getFullYear();

var fullDate = document.getElementById("fullDate");
var months =	document.getElementById("months");
var weekDay =	document.getElementById("weekDay");
var days =	document.getElementById("days");

days.innerHTML = dayName;
weekDay.innerHTML = dayNumber;
months.innerHTML = monthName;
fullDate.innerHTML = dayNumber + "-" + month + "-" + year;