const modalBox = document.querySelector('.modal');
// const modalCloseBtn = document.querySelector('.modal-close-btn');
const modalDescription = document.querySelector('.modal-description');

function modalHandler(){
    modalDescription.innerHTML = formElem.dataset.modal;
    modalBox.style.opacity = 1;

    setTimeout (function(){
        modalBox.style.opacity = 0;
    }, 3000 );
}
