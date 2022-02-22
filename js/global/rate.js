$(document).ready(function () {
    
    $('.rate-star').click(function () {
        $(this).addClass('fi-sr-star');
        $(this).prevAll().addClass('fi-sr-star');
        var input = $('[name=rate]')
        input.val($(this).data('value'))
    });

    $('.remove-rate').click(function (e) { 
        e.preventDefault();
        var input = $("[name=rate]")
        var stars = $(".rate-star")
        input.val('')
        stars.removeClass('fi-sr-star');
    });


});


