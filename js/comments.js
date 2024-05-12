// select dom elements and variables
const commentContainer = document.querySelector('.comment-container');
const formElem = document.querySelector('form');
const errorElem = document.querySelector('.error');
const inputElems = document.querySelectorAll('.input');

// function - comments creator
function commentsHandler(comments){
    comments.forEach(comment => {
        const commentElem = document.createElement('div');
        commentElem.className = 'tumbnail';
        commentElem.innerHTML = `
            <i class="fa-solid fa-circle-user title"></i>
            <span class="title">${comment.name}</span>
            <span class="description">${comment.date}</span>
            <p class="description"> - ${comment.description}</p>
            `
        commentContainer.appendChild(commentElem);
    });
}

// fetch data from json file
window.addEventListener('load', () => {
    fetch('../json/comments.json', {method:'GET'})
        .then(res => res.json())
        .then(data => {
            let comments = data.comments;
            commentsHandler(comments);
        })
        .catch(err => console.log(err)) 
    }
)