const commentContainer = document.querySelector('.comment-container');

const formElem = document.querySelector('form');
const errorElem = document.querySelector('.error');
const inputElems = document.querySelectorAll('.input');

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