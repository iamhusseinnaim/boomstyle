export default class Tabs{
    constructor(){
        this.changeTab();
    }

    changeTab(){
        $('.lt-tab').click(function (e) { 
            e.preventDefault();
            let target = $($(this).data('target'))
            target.addClass('lt-active-layer')
            target.siblings().removeClass('lt-active-layer')
            $(this).addClass('lt-active-tab');
            $(this).siblings().removeClass('lt-active-tab');

        });
    }
}

new Tabs();
