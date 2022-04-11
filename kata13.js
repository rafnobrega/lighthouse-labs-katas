const talkingCalendar = function(date) {
  let fullDate = "";
  let dateParts = date.split("/"); // here I use the "/" as a separator.
  let year = dateParts[0];
  let month = dateParts[1];
  let day = dateParts[2];

  if (month === "01") {
    month = "January";
  } else if (month === "02") {
    month = "February";
  } else if (month === "03") {
    month = "March";
  } else if (month === "04") {
    month = "April";
  } else if (month === "05") {
    month = "May";
  } else if (month === "06") {
    month = "June";
  } else if (month === "07") {
    month = "July";
  } else if (month === "08") {
    month = "August";
  } else if (month === "09") {
    month = "September";
  } else if (month === "10") {
    month = "October";
  } else if (month === "11") {
    month = "November";
  } else if (month === "12") {
    month = "December";
  }

  if (day === "01" || day === "21" || day === "31"){
    day = (day +"st");
  } else if (day === "02" || day === "22"){
    day = (day +"nd");
  } else if (day === "03" || day === "23") {
    day = (day +"rd");
  } else {
    day = (day +"th"); // for other numbers different than st/nd/rd.
  }

  fullDate = month + " " + day + ", " + year;
  return fullDate; // If I didn't return it, it would print "undefined".
}

console.log(talkingCalendar("2017/12/02")); // Prints: December 2nd, 2017
console.log(talkingCalendar("2007/11/11")); // Prints: November 11th, 2007
console.log(talkingCalendar("1987/08/24")); // Prints: August 24th, 1987

