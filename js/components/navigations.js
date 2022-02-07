export default class Navigations{
    constructor(){
        this.toggle_drawer_tab()
    }

    toggle_drawer_tab(){
        $('.lt-nav-drawer-item').click(function (e) { 
            $(this).addClass('lt-active-nav-drawer-item');
            $(this).siblings().removeClass('lt-active-nav-drawer-item');
        });
    }
}


new Navigations();
