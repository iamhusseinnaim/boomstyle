$('.drop').click(function (e) { 
    e.preventDefault();
    $($(this).data('target')).slideToggle();
});