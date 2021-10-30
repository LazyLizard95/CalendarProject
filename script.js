$(document).ready(function() {
    let date = moment().format("MM/DD/YYYY, H:mm, h:mm a");
    $("#currentDay").append(date);
    
});
let hour = moment().format("H")
let timeValue = $(".timeValue").map(function(){
    return this.id;
}).get();
// console.log(hour)
// console.log(timeValue)

    for(let i = 0; i < timeValue.length; i++){
        parseInt(timeValue[i]);
        parseInt(hour);
        if (hour > timeValue[i]){
            $("#" + timeValue[i]).addClass("past");
            console.log("hour is less than timevalue");
        }
        if (hour < timeValue[i]){
            $("#" + timeValue[i]).addClass("future");
            console.log(hour);
            console.log(timeValue[i]);
            console.log("hour is less than timevalue");
        }
        if (hour === timeValue[i]){
            $("#" + timeValue[i]).addClass("present");
            
            console.log("hour is greater than timevalue");
        }
    
    }



















