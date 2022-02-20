$(document).ready(function () {
    // full height class 
    var height = $(window).innerHeight();
    console.log(height)
    $('.full-h').css({
        height:height+'px'
    });
});