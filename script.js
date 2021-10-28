$(document).ready(function() {
    let date = moment().format("MM/DD/YYYY, H:mm, h:mm a");
    $("#currentDay").append(date);
    
});
let hour = moment().format("H")
let timeValue = $(".timeValue").map(function(){
    return this.id;
}).get();
function checkTime(timeValue){
    for(let i = 0; i < timeValue.length; i++){
        if (hour < timeValue[i]){
            $(".timeValue").addClass("past");
            console.log("hour is less than timevalue");
        }
        if (hour > timeValue[i]){
            $(".timeValue").addClass("future");
            console.log("hour is greater than timevalue");
        }
        if (hour === timeValue[i]){
            $(".timeValue").addClass("present");
            console.log("hour is greater than timevalue");
        }
    }

}
checkTime(timeValue);
















