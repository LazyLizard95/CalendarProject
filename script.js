$(document).ready(function () {
    let date = moment().format("MM/DD/YYYY, H:mm, h:mm a");
    $("#currentDay").append(date);
});
let hour = moment().format("H")
let timeValue = $(".timeValue").map(function () {
    return this.id;
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



















