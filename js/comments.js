const commentContainer = document.querySelector('.comment-container');

const formElem = document.querySelector('form');
const nameElem = document.querySelector('input');
const commentElem = document.querySelector('textarea');
const errorElem = document.querySelector('.error');

const date = new Date();
console.log(date.getFullYear());
console.log(date.getDate());
console.log(date.getMonth());

const isRequired = (str) => str.trim() === "" ? false : true;


function commentsHandler(comments){
    comments.forEach(comment => {
        const commentElem = document.createElement('div');
        commentElem.className = 'tumbnail';
        commentElem.innerHTML = `
            <i class="fa-solid fa-circle-user"></i>
            <span>${comment.name}</span>
            <span class="description">${comment.date}</span>
            <p class="description"> - ${comment.description}</p>
            `
        commentContainer.appendChild(commentElem);
    });
}

function checkName() {
    if (!isRequired(nameElem.value)) {
        errorElem.innerHTML += 'Please insert your name'
        return false;
    }
    return true;
}

function checkComment(){
    if (!isRequired(commentElem.value)) {
        errorElem.innerHTML += 'Please insert comment in the box above'
        return false;
    }
    return true;
}
    
function submitHandler(event){
    event.preventDefault();
    errorElem.innerHTML = '';

    if(checkName() && checkComment()){
        formElem.submit();
    }
}

window.addEventListener('load', () => {
    fetch('../json/comments.json', {method:'GET'})
        .then(res => res.json())
        .then(data => {
            console.log(data.comments);
            let comments = data.comments;
            commentsHandler(comments);
        })
        .catch(err => console.log(err)) 
    }
)