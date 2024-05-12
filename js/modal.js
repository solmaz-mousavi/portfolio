// select dom elements
const modalBox = document.querySelector('.modal');
const modalDescription = document.querySelector('.modal-description');

// function - modal handler
function modalHandler(){
    modalDescription.innerHTML = formElem.dataset.modal;
    modalBox.style.opacity = 1;

    setTimeout (function(){
        modalBox.style.opacity = 0;
    }, 3000 );
}
