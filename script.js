$(document).ready(function() {
    let date = moment().format("MM/DD/YYYY, H:mm, h:mm a");
    $("#currentDay").append(date);
    
});

let hour = moment().format("H00")
let timeValue = $(".timeValue8")

timeValue.siblings().each(function() {
    
                
console.log(timeValue.text());
    switch (hour, timeValue.text()){
        case (hour < timeValue.text()):
            console.log("hour is less than timevalue");
        break;
        case (hour > timeValue.text()):
            console.log("hour is greater than timevalue");
        
        case (timeValue.text() === hour):
            console.log("hour is equal to timevalue");
        break;
        default: console.log("ERROR");
    }
}  
    
    

)




















