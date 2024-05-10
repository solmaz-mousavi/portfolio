const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const sliderElem = document.querySelector('.slider-img');
let index = 0;


function sliderHandler(sliderImages) {

    arrowRight.addEventListener('click', function(){
        index = (index > sliderImages.length-2) ? 0 : index + 1 ;
        sliderElem.style.backgroundImage = `url("${sliderImages[index]}")`
    });
    
    arrowLeft.addEventListener('click', function(){
        index = (index == 0) ? sliderImages.length-1 : index - 1 ;
        sliderElem.style.backgroundImage = `url("${sliderImages[index]}")`

    })

}


window.addEventListener('load', () => {


    fetch('../json/slider.json', {method:'GET'})
        .then(res => res.json())
        .then(data => {
            let sliderImages = data.img;
            sliderHandler(sliderImages);
        })
        .catch(err => console.log(err + "kgcnausaig")) 

})