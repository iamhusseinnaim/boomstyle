// number 

const button = function(classList,dataAction,icon=null,text=''){
    
    if(!icon){
        return $(`<button data-action="${dataAction}" class="${classList}">${text}</button>`)
    }
    var buttonele = `<button data-action="${dataAction}" class="${classList}">${text}</button>`
    $(buttonele).append(icon)
    return buttonele   
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
                if(!input.attr('max')){
                    input.val(parseInt(input.val())+1)
                }else if(parseInt(input.val()) < parseInt(input.attr('max') ) ){
                    input.val(parseInt(input.val())+1)
                }else{
                    return false
                }
            }else{
                return false
            }
        }else{
            if(parseInt(input.val()) >=1){
                if(!input.attr('min')){
                    input.val(parseInt(input.val())-1)
                }else if(parseInt(input.val()) > parseInt(input.attr('min'))){
                    input.val(parseInt(input.val())-1)
                }else{
                    return false
                }
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