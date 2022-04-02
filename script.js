$( document ).ready(function() {
    console.log("Ready!!")
})

const formatToday = moment().format('MMMM Do YYYY, h:mm:ss a')

$("#currentDay").html(formatToday)

console.log(moment().hours())


function colourCoded() {
    var now = moment().hours()
    if (now > 10) {
        $("#1stHour").addClass("past")
    } else if (now >= 9 && now < 10) {
        $("#1stHour").addClass("present")
    } else {
        $("#1stHour").addClass("future")
    }
    
    if (now > 11) {
        $("#2ndHour").addClass("past")
    } else if (now >= 10 && now < 11) {
        $("#2ndHour").addClass("present")
    } else {
        $("#2ndHour").addClass("future")
    }
    
    if (now > 12) {
        $("#3rdHour").addClass("past")
    } else if (now >= 11 && now < 12) {
        $("#3rdHour").addClass("present")
    } else {
        $("#3rdHour").addClass("future")
    }
    
    if (now > 13) {
        $("#4thHour").addClass("past")
    } else if (now >= 12 && now < 13) {
        $("#4thHour").addClass("present")
    } else {
        $("#4thHour").addClass("future")
    }
    
    if (now > 14) {
        $("#5thHour").addClass("past")
    } else if (now >= 13 && now < 14) {
        $("#5thHour").addClass("present")
    } else {
        $("#5thHour").addClass("future")
    }
    
    if (now > 15) {
        $("#6thHour").addClass("past")
    } else if (now >= 14 && now < 15) {
        $("#6thHour").addClass("present")
    } else {
        $("#6thHour").addClass("future")
    }
    
    if (now > 16) {
        $("#7thHour").addClass("past")
    } else if (now >= 15 && now < 16) {
        $("#7thHour").addClass("present")
    } else {
        $("#7thHour").addClass("future")
    }
    
    if (now > 17) {
        $("#8thHour").addClass("past")
    } else if (now >= 16 && now < 17) {
        $("#8thHour").addClass("present")
    } else {
        $("#8thHour").addClass("future")
    }
    
    if (now > 18) {
        $("#9thHour").addClass("past")
    } else if (now >= 17 && now < 18) {
        $("#9thHour").addClass("present")
    } else {
        $("#9thHour").addClass("future")
    }
}

colourCoded();

// This will store all the additions to the planner in local storage per time block
$(".saveBtn").on("click", function (event) {
    event.preventDefault
    var description = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time,description);
})


$("#1stHour textarea").val(localStorage.getItem("1stHour"))
$("#2ndHour textarea").val(localStorage.getItem("2ndHour"))
$("#3rdHour textarea").val(localStorage.getItem("3rdHour"))
$("#4thHour textarea").val(localStorage.getItem("4thHour"))
$("#5thHour textarea").val(localStorage.getItem("5thHour"))
$("#6thHour textarea").val(localStorage.getItem("6thHour"))
$("#7thHour textarea").val(localStorage.getItem("7thHour"))
$("#8thHour textarea").val(localStorage.getItem("8thHour"))
$("#9thHour textarea").val(localStorage.getItem("9thHour"))



