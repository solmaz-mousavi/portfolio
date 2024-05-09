const darkLightSlider = document.querySelector('.dark-light-slider');
const slider = document.querySelector('#slider');
const menuHandler = document.querySelector('.menu-handler');
const navbar = document.querySelector('.navbar');

let lightMode = true;
let menuClosed = true;

darkLightSlider.addEventListener('click', function(){
    if(lightMode){
        document.body.classList.add('dark');
        slider.style.transform = 'translateX(40px)'
        lightMode = false;
    } else {
        document.body.classList.remove('dark');
        slider.style.transform = 'translateX(0px)'
        lightMode = true;
    }
})

menuHandler.addEventListener('click', function(){
    if(menuClosed){
        menuHandler.style.transform = 'rotate(270deg)';
        navbar.style.height = 'auto';
        navbar.style.opacity = '1';
        menuClosed = false;
    } else{
        menuHandler.style.transform = 'rotate(90deg)';
        navbar.style.height = '0px';
        navbar.style.opacity = '0';
        menuClosed = true;
    }
})




