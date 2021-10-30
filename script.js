$(document).ready(function () {
    let date = moment().format("MM/DD/YYYY, H:mm, h:mm a"); //set time and date to current
    $("#currentDay").append(date);
});

let hour = moment().format("H") //variable for current hour
let timeValue = $(".timeValue").map(function () {
    return this.id; //create array with all timeValue id
}).get();

for (let i = 0; i < timeValue.length; i++) {
    if (parseInt(hour) > parseInt(timeValue[i])) {
        $("#" + timeValue[i]).addClass("past");
    }
    if (parseInt(hour) < parseInt(timeValue[i])) {
        $("#" + timeValue[i]).addClass("future");
    }
    if (parseInt(hour) === parseInt(timeValue[i])) {
        $("#" + timeValue[i]).addClass("present");
    }
}



















