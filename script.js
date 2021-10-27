$(document).ready(function() {
    let date = moment().format("MM/DD/YYYY, H:mm, h:mm a");
    $("#currentDay").append(date);
    
});

let hour = moment().format("H00")

for (i = 0; i < 12; i++) {
$(".timeValue8").siblings().each(function() {

    switch (hour){
        case (hour < $("#id")):
            console.log("hour is less than timevalue");
        break;
        case (hour > $("#id")):
            console.log("hour is greater than timevalue");
        break;
        default: console.log("hour is equal to timevalue");
    }
    
    
    

})

}


















