$(document).ready(function () {
    const currentTime = moment().format('dddd') + ", " + moment().format('LL');
    $("#currentDay").text(currentTime)
    
    const times = [9, 10, 11, 12, 13, 14, 15, 16, 17]
    
    times.forEach(time => {
        const timeCheck = window.localStorage.getItem(time)
        const currentHour = moment().hour()
        const timeId = "#" + time
    
    if (currentHour > time) {
        $(timeId).addClass("bg-danger text-light")
        $(timeId).attr("disabled", true)
        $(timeId).css("text-decoration", "line-through")
    } else if (currentHour === time) {
        $(timeId).addClass("bg-secondary text-light")
    } else {
        $(timeId).addClass("bg-success text-light")
    }
    
        if (timeCheck === null) {
            window.localStorage.setItem(time, "")
        }   else if (timeCheck.length > 0) {
            $(timeId).attr("value", window.localStorage.getItem(time))
        }
    })
    
$("form").on("submit", function (e) {
    e.preventDefault()

    const time = e.target.querySelector("input").getAttribute("id")
    const text = e.target.querySelector("input").value
    location.reload();
    window.localStorage.setItem(time, text)
    })

})



