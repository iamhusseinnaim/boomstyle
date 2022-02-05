import '../components/tabs';
import '../components/navigations';
import '../components/chips';
import '../components/build/dropdown';
import '../components/slider';


// ? gloabl 
$(document).ready(function () {
    


    
document.onscroll = ()=>{

    let scrollY = window.scrollY;
    if(scrollY >= 110){
        $('.lt-lg-nav,.lt-mobile-nav').addClass('pos-fixed');
        $('.lt-lg-nav,.lt-mobile-nav').addClass('lt-bottom-light');
    }else{
        $('.lt-lg-nav,.lt-mobile-nav').removeClass('pos-fixed');
        $('.lt-lg-nav,.lt-mobile-nav').addClass('lt-bottom-light');
    }

    if($('.lt-menu').hasClass('show-menu')){
        $('.lt-menu').removeClass('show-menu');
        $('main').removeClass('lt-blur')
    }

}


$('.show-menu-button').click(function (e) { 
    e.preventDefault();
    $('.lt-menu').toggleClass('show-menu');
    $('main').toggleClass('lt-blur');
});


});