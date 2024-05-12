const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const sliderImg = document.querySelector('.slider-img img');
let index = 0;


function sliderHandler(sliderImages) {

    arrowRight.addEventListener('click', function(){
        index = (index > sliderImages.length-2) ? 0 : index + 1 ;
        sliderImg.setAttribute('src', sliderImages[index]);
    });
    
    arrowLeft.addEventListener('click', function(){
        index = (index == 0) ? sliderImages.length-1 : index - 1 ;
        sliderImg.setAttribute('src', sliderImages[index]);
        // sliderElem.style.backgroundImage = `url("${sliderImages[index]}")`

    });

    sliderImg.addEventListener('click', function (event) {
        index = (index > sliderImages.length-2) ? 0 : index + 1 ;
        sliderImg.setAttribute('src', sliderImages[index]);

        // sliderImg.style.backgroundImage = `url("${sliderImages[index]}")`
    })

}




window.addEventListener('load', () => {


    fetch('../json/slider.json', {method:'GET'})
        .then(res => res.json())
        .then(data => {
            let sliderImages = data.img;
            sliderHandler(sliderImages);
        })
        .catch(err => console.log(err)) 

})