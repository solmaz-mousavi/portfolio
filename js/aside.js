const darkLightSlider = document.querySelector('.dark-light-slider');
const slider = document.querySelector('#slider');
const menuHandler = document.querySelector('.menu-handler');
const navbar = document.querySelector('.navbar');
let menuClosed = true;
let mode = localStorage.getItem('mode') || 'light';
console.log('avalin bar' + mode);

function darkModeHandler(mode){
    if(mode === 'dark'){
        document.body.className = 'dark';
        console.log("darkkkkkkk");
    } else {
        document.body.className = '';
        console.log('ligttttttttttttt');
    }
}

darkModeHandler(mode);

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

darkLightSlider.addEventListener('click', function(){
    mode = (mode === 'light') ? 'dark' : 'light';
    localStorage.setItem('mode' , mode);
    console.log('bere local: ' + mode);
    darkModeHandler(mode);
})