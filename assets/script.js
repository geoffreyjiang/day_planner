$(document).ready(function () {
    const currentTime = moment().format('dddd') + ", " + moment().format('LL');
    $("#currentDay").text(currentTime)
    
    const times = [9, 10, 11, 12, 13, 14, 15, 16, 17]
    
    times.forEach(time => {
        const timeCheck = window.localStorage.getItem(time)
        const currentHour = moment().hour()
        const timeId = "#" + time
    
    if (currentHour > time) {
        $("#input").addClass("bg-danger text-light")
        $(timeId).attr("disabled", true)
    } else if (currentHour === time) {
        $(timeId).addClass("bg-secondary text-light")
    } else {
        $(timeId).addClass("bg-success text-light")
    }
    
        if (timeCheck === null) window.localStorage.setItem(time, "")
        if (timeCheck.length > 0) $(timeId).attr("value", window.localStorage.getItem(time))
    })
// $(".saveBtn").on("click", function (e) {
//     e.preventDefault()
//     const time = e.target.querySelector("input").getAttribute("id")
//     const text = e.target.querySelector("input").value

//     window.localStorage.setItem(time, text)
// })
$("form").on("submit", function (e) {
    e.preventDefault()

    const time = e.target.querySelector("input").getAttribute("id")
    const text = e.target.querySelector("input").value

    window.localStorage.setItem(time, text)
    })

})




// $(".saveBtn").on("click", function(){
//     userInput = $(this).siblings("textArea").val().trim();
//     console.log(userInput);
//     hourSpan = $(this).siblings("textArea").text().trim();
//     console.log(hourSpan);
//     localStorage.setItem(hourSpan, JSON.stringify(userInput));
// })
