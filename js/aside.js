// select dom elements and variables
const darkLightSlider = document.querySelector('.dark-light-slider');
const slider = document.querySelector('#slider');
const menuHandler = document.querySelector('.menu-handler');
const navbar = document.querySelector('.navbar');
let menuClosed = true;
let mode = localStorage.getItem('mode') || 'light';

// function - dark mode handler
function darkModeHandler(mode){
    if(mode === 'dark'){
        document.body.className = 'dark';
    } else {
        document.body.className = '';
    }
}
darkModeHandler(mode);

// function - menu switcher in mobile responsive mode
menuHandler.addEventListener('click', function(){
    if(menuClosed){
        menuHandler.style.transform = 'rotate(270deg)';
        navbar.style.height = 'auto';
        navbar.style.opacity = '1';
        navbar.style.transform = 'translateY(0px)';
        menuClosed = false;
    } else{
        menuHandler.style.transform = 'rotate(90deg)';
        navbar.style.height = '0px';
        navbar.style.opacity = '0';
        navbar.style.transform = 'translateY(-40px)';
        menuClosed = true;
    }
})

// function - dark-light slider (switcher)
darkLightSlider.addEventListener('click', function(){
    mode = (mode === 'light') ? 'dark' : 'light';
    localStorage.setItem('mode' , mode);
    darkModeHandler(mode);
})