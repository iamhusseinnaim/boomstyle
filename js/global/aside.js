// this file has one block of code you can find it in ../navigations/naviagations.js 
// on scroll section 

$('.show-settings-button').click(function (e) { 
    e.preventDefault();
    $('.categories-settings').toggleClass('active-settings');
    $('.content').toggleClass('blur');
  });