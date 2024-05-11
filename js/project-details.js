const title = document.querySelector('.title');
const shadow = document.querySelector('.shadow');
const skills = document.querySelector('.skills');
const sliderImg = document.querySelector('.slider-img');
const sliderTitle = document.querySelector('.slider-container h3');
const sliderDescription = document.querySelector('.slider-container p');
const tumbnailContainer = document.querySelector('.project-details');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const projectId = new URLSearchParams(window.location.search).get('projectId');
let index = 0;

function titleHandler(project){
    title.innerHTML += project.name.toUpperCase();
    shadow.innerHTML += project.name.toUpperCase();
    skills.innerHTML = [...project.skills];
}

function sliderHandler(project, index){
    sliderImg.style.backgroundImage = `url(${project.details[index].image})`;
    sliderTitle.innerHTML = project.details[index].title;
    sliderDescription.innerHTML = project.details[index].description;
}

function projectsHandler(project, indexId){
    const projectDetails = project.details;
    projectDetails.forEach(detail => {

        const projectTumbnail = document.createElement('div');
        projectTumbnail.className = 'project-tumbnail';

        const tumbnailImg = document.createElement('img');
        tumbnailImg.setAttribute('src', detail.image);
        tumbnailImg.setAttribute('data-index', detail.index);
        if (detail.index == indexId) {
            tumbnailImg.className = 'active';
        }

        const tumbnailTitle = document.createElement('p');
        tumbnailTitle.innerHTML = detail.title;

        projectTumbnail.append(tumbnailImg, tumbnailTitle);
        tumbnailContainer.append(projectTumbnail);
    });
}

function titleChanger(project){
    tumbnailContainer.addEventListener('click', function(event){
        index = Number(event.target.dataset.index);
        sliderHandler(project, index)
    })
}

function sliderSwitchHandler(project){
    arrowLeft.addEventListener('click', function(){
        index = (index == 0) ? tumbnailContainer.childElementCount-1 : index - 1 ;
        sliderHandler(project, index)
    })
    arrowRight.addEventListener('click', function(){
        index = (index > tumbnailContainer.childElementCount-2) ? 0 : index + 1 ;
        sliderHandler(project, index)
    })
}

window.addEventListener('load', () => {
    fetch('../json/projects.json', {method:'GET'})
        .then(res => res.json())
        .then(data => {
            var project = data.projects[projectId-1];
            titleHandler(project);
            sliderHandler(project, index);
            projectsHandler(project, index);
            titleChanger(project);
            sliderSwitchHandler(project);
        })
        .catch(err => console.log(err)) 
})
