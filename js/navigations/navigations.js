$(document).ready(function () {
    // sticky nav 
    document.onscroll = function(){

        if(window.scrollY >=500 && window.innerHeight >=2000){
            $(".sticky-nav").addClass("pos-fixed")
            $(".sticky-sidebar").addClass("mt-3")
        }else{
            $(".sticky-nav").removeClass("pos-fixed")
            $(".sticky-sidebar").removeClass("mt-3")
        }
    }

    $('.drop-menu-link').hover(function () {
            // over
            $($(this).data('drop')).show('slow');
        }, function () {
        }
    );

});

$('.categories-menu').hover(function () {
        // over
        $(this).show('slow');
        
    }, function () {
        // out
        $(this).hide('slow');
    }
);


// mobile nav

$('.mobile-nav').css({
    'top':$('.navbar').innerHeight()+'px'
  });

  $('.mobile-menu-button').click(function (e) { 
    e.preventDefault();
    $('.mobile-nav').toggleClass('show-mobile-nav');
  });


