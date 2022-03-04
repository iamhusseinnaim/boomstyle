$(document).ready(function () {
    
    $('.rate-star').click(function () {
        var hasclass = $(this).hasClass('fi-sr-star');

        if(hasclass){
            $(this).nextAll().removeClass("fi-sr-star")
        }else{
            $(this).addClass('fi-sr-star');
            $(this).prevAll().addClass('fi-sr-star');
        }
        var input = $('[name=value]')
        input.val($(this).data('value'))
    });




    $('.remove-rate').click(function (e) { 
        e.preventDefault();
        var input = $("[name=value]")
        var stars = $(".rate-star")
        input.val('')
        stars.removeClass('fi-sr-star');
    });


});


