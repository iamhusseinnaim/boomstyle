function countDown(date,id){
    var countDate = new Date(date).getTime()
    var currentTime = new Date().getTime()
    var gap = countDate - currentTime
    var second = 1000
    var minute = second * 60
    var hour = minute * 60
    var day = hour * 24

    // calculate date 
    var dayText = Math.floor(gap / day)
    var hourText = Math.floor((gap % day) / hour)
    var minuteText = Math.floor((gap % hour) / minute)
    var secondText = Math.floor((gap % minute) / second)

        
        $(id+' .day .text').text(dayText);
        $(id+" .hour .text").text(hourText);
        $(id+" .minute .text").text(minuteText)
        $(id+' .second .text').text(secondText)


        setInterval(() => {
            countDown(date,id)
        }, 1000);

}

