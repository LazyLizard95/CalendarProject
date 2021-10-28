$(document).ready(function() {
    let date = moment().format("MM/DD/YYYY, H:mm, h:mm a");
    $("#currentDay").append(date);
    
});

let hour = moment().format("H")
// let timeValue = $(".timeValue");
let timeValue = $(".timeValue").map(function(){
    return this.id;
}).get();


function checkTime(timeValue){
                for(let i = 0; i < timeValue.length; i++){
                console.log(hour);    
                console.log(timeValue[i]);
  
switch (hour, timeValue[i]){
        case (hour < timeValue[i]):
            console.log("hour is less than timevalue");
        break;
        case (hour > timeValue[i]):
            console.log("hour is greater than timevalue");
        break;
        case (hour === timeValue[i]):
            console.log("hour is equal to timevalue");
        break;
        default: console.log("NaN");
    }
}
}   
    checkTime(timeValue);






















