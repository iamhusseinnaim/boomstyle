class BoomMenu{

    constructor(target,config={
        holderName:'boom-value-holder',
        allowSearch:false,
        searchName:'boom-search-input',
        containerClass:'bg-white',
        searchPlaceholder:'new menu instance',
        searchID:"boom-menu-search-input",
        menuClass:'bg-light',
        menuId:"boom-menu",
        defaultSearchText:'',
        defaultHolderValue:''
    }){
        
        this.target = target
        this.status = 'close'
        this.config = config
        this.render()
        $(`[name=${this.config.holderName}]`).val('')
        // events 
        this.events()

    }

    events(){
        var self = this
        var menu = $(this.container).children("menu")
        var searchInput = `[name=${this.config.searchName}]`
        $(searchInput).on('focus', function () {
            $(menu).slideDown();
            self.status = 'open'
            

        });

        var config = this.config

        $(menu.children("option")).click(function (e) { 
            $(searchInput).val(this.textContent);
            $(`[name=${config.holderName}]`).val($(this).val());
            $(menu).slideUp();
        });
        
        $($(this.container).children("i")).click(function (e) { 
            $(menu).slideUp();
            self.status = 'open'

        });


    }
 

    render(){
        var holder = `<input value="${this.config.defaultHolderValue}" type="text" class="d-none" name="${this.config.holderName}" />`
        var search = `<input value="${this.config.defaultSearchText}" type="text"  name="${this.config.searchName}" placeholder="${this.config.searchPlaceholder}" />`
        var icon = '<i class="fi fi-rr-angle-small-down"></i>'
        var children =$(this.target).children()
        var container = document.createElement("div")
        $(container).addClass(this.config.containerClass)
        $(container).addClass('boom-menu')
        var menu = document.createElement("menu")
        $(menu).addClass(this.config.menuClass)
        $(menu).append(children);
        $(menu).attr('id',this.config.menuId);
        $(container).append(menu)
        $(container).append(holder)
        $(container).append(search)
        $(container).append(icon)
        this.container = container
        $($(this.target).data("parent")).append(container);   

    }


}