// select dom elements - title
const title = document.querySelector('.page-title');
const shadow = document.querySelector('.shadow');
const skills = document.querySelector('.skills');

// select dom elements - slider
const arrowRight = document.querySelector('.arrow-right');
const arrowLeft = document.querySelector('.arrow-left');
const sliderImg = document.querySelector('.slider-img img');
const sliderTitle = document.querySelector('.slider-title');
const sliderDescription = document.querySelector('.slider-description');

// select dom elements - details
const projectContainer = document.querySelector('.project-details');

// variables
const projectId = new URLSearchParams(window.location.search).get('projectId');
let index = 0;

// function - page title creator
function titleHandler(project){
    title.innerHTML += project.name.toUpperCase();
    shadow.innerHTML += project.name.toUpperCase();
    skills.innerHTML = [...project.skills];
}

// function - slider creator
function sliderHandler(project, index){
    sliderImg.setAttribute('src', project.details[index].image)
    sliderTitle.innerHTML = project.details[index].title;
    sliderDescription.innerHTML = project.details[index].description;
}

// function - project details creator
function projectsHandler(project){
    const projectDetails = project.details;
    projectDetails.forEach(detail => {

        const detailContainer = document.createElement('div');
        detailContainer.className = 'detail-container';

        const detailImg = document.createElement('img');
        detailImg.className = 'detail-img';
        detailImg.setAttribute('src', detail.image);
        detailImg.setAttribute('data-index', detail.index);
        
        const detailTitle = document.createElement('p');
        detailTitle.className = 'description detail-title';
        detailTitle.innerHTML = detail.title;
        
        detailContainer.append(detailImg, detailTitle);
        projectContainer.append(detailContainer);
    });
}

// function - slider title changer
function titleChanger(project){
    projectContainer.addEventListener('click', function(event){
        index = Number(event.target.dataset.index);
        sliderHandler(project, index)
    });
}

// function - slider changer
function sliderSwitchHandler(project){
    arrowLeft.addEventListener('click', function(){
        index = (index == 0) ? projectContainer.childElementCount-1 : index - 1 ;
        sliderHandler(project, index)
    });
    arrowRight.addEventListener('click', function(){
        index = (index > projectContainer.childElementCount-2) ? 0 : index + 1 ;
        sliderHandler(project, index)
    });
    sliderImg.addEventListener('click', function(){
        index = (index > projectContainer.childElementCount-2) ? 0 : index + 1 ;
        sliderHandler(project, index)
    })
}

// fetch data from json file
window.addEventListener('load', () => {
    fetch('../json/projects.json', {method:'GET'})
        .then(res => res.json())
        .then(data => {
            var project = data.projects[projectId-1];
            titleHandler(project);
            sliderHandler(project, index);
            projectsHandler(project);
            titleChanger(project);
            sliderSwitchHandler(project);
        })
        .catch(err => console.log(err)) 
})
