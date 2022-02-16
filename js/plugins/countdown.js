const countDown = (id)=>{
    var expiryDate = new Date($(id).data('expiry-date')).getTime()
    var currentTime = new Date().getTime()
    var gap = expiryDate - currentTime
    var second = 1000
    var minute = second * 60
    var hour = minute * 60
    var day = hour * 24

    // calculate date 
    var dayText = Math.floor(gap / day)
    var hourText = Math.floor((gap % day) / hour)
    var minuteText = Math.floor((gap % hour) / minute)
    var secondText = Math.floor((gap % minute) / second)


        $(id+' .day ').text(dayText);
        $(id+" .hour ").text(hourText);
        $(id+" .minute ").text(minuteText)
        $(id+' .second ').text(secondText)

        setInterval(() => {
            countDown(id)
        }, 1000);

}