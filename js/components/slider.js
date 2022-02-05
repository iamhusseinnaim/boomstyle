
    class Slider{
        constructor(id){
            $('.lt-slider-btn').click(function (e) { 
                e.preventDefault();
                let action = $(this).data('action')
                let mainSlider = $(id)
                let img = $(id+' img')
                let scroll;
                if(action == '-'){
                    scroll = mainSlider.scrollLeft() - img.innerWidth()
                }else{
                    scroll = mainSlider.scrollLeft()+img.innerWidth()
                }
                mainSlider.animate({
                    scrollLeft:scroll
                })
            });
            return $(id)
        }
    }


function newSlider(id){
    return new Slider(id)
}



