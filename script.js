$(document).ready(function() {
    let date = moment().format("MM/DD/YYYY, H:mm, h:mm a");
    $("#currentDay").append(date);
    
});

let hour = moment().format("H00")
let timeValue = $(".timeValue8").siblings();

timeValue.each(function() {
    
                
console.log(hour, timeValue.text());
    switch (hour, timeValue){
        case (hour < timeValue):
            console.log("hour is less than timevalue");
        break;
        case (hour > timeValue):
            console.log("hour is greater than timevalue");
        
        case (timeValue === hour):
            console.log("hour is equal to timevalue");
        break;
        default: console.log("ERROR");
    }
}  
    
    

)




















