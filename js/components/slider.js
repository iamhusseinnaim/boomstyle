
    class Slider{
        constructor(id){
            $('.lt-slider-btn').click(function (e) { 
                e.preventDefault();
                let action = $(this).data('action')
                let mainSlider = $(id)
                let img = $(id+' img')
                var top = mainSlider.offset().top;
                var left = mainSlider.offset().left;
                var activeimg;
                for(let i=0;i<img.length;i++){
                    if($(img[i]).offset().top == top && $(img[i]).offset().left == left){
                        activeimg = $(img[i]).next()
                    }
                }
                mainSlider.animate({
                    scrollLeft:action+img.innerWidth()
                })
                console.log(top,left,activeimg)
            });
            
            setInterval(() => {
                try{
                    updateImg()
                }catch{}
            }, 5000);   
            // update images
            function updateImg(){
                let mainSlider = $(id)
                let img = $(id+' img')
                var top = mainSlider.offset().top
                var left = mainSlider.offset().left
                var activeimg;
            
                for(let i=0;i<img.length;i++){
                    if($(img[i]).offset().top == top && $(img[i]).offset().left == left){
                        activeimg = $(img[i]).next()
                    }
                }
                mainSlider.animate({
                    scrollLeft:'-'+img.innerWidth()
                })
            
                if(!activeimg.length){
                    mainSlider.animate({
                        scrollLeft:img.innerWidth()
                    })
                }
            }
            
            return $(id)
        }
    }


export default function newSlider(id){
    return new Slider(id)
}