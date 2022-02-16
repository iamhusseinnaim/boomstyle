// number 

const button = function(classList,dataAction,icon=null,text=''){
    
    if(!icon){
        return $(`<button data-action="${dataAction}" class="${classList}">${text}</button>`)
    }
    var button = `<button data-action="${dataAction}" class="${classList}">${text}</button>`
    $(button).append(icon)
    return button   
}


function handleNumberInputStyle(){

    let element = $(".boom-number")
    for(let index = 0 ; index<element.length;index++){
        var up = button('button boom-number-button','up',null,'<i class="fi fi-rr-angle-small-up"></i>')
        var down = button('button boom-number-button','down',null,'<i class="fi fi-rr-angle-small-down"></i>')
        var container = $('<div class="boom-container-number"></div>')
        $(element[index]).parent().append(container)
        container.append($(element)[index])
        container.append(up)
        container.append(down)
        container.css('height','45px')
        container.children().css('height','45px')
    }


}
handleNumberInputStyle()

function handleClickEvent(element){
    $(element).click(function (e) { 
        e.preventDefault();
        var input = $(this).siblings('.boom-number')
        if($(this).data('action') == 'up'){
            if(parseInt(input.val())){
                input.val(parseInt(input.val())+1)
            }else{
                input.val(1)
            }
        }else{
            if(parseInt(input.val()) >=1){
                input.val(parseInt(input.val())-1)
            }else{
                return false
            }
        }
    });
}

handleClickEvent('.boom-number-button')

// circle select color
function checkboxColorFromDataAttr(){
    var ele = $('.boom-color-circle')
    ele.css('background',ele.data('bg'))
}
checkboxColorFromDataAttr()