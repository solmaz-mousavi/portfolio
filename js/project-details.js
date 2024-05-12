const title = document.querySelector('.page-title');
const shadow = document.querySelector('.shadow');
const skills = document.querySelector('.skills');

const arrowRight = document.querySelector('.arrow-right');
const arrowLeft = document.querySelector('.arrow-left');
const sliderImg = document.querySelector('.slider-img img');
const sliderTitle = document.querySelector('.slider-title');
const sliderDescription = document.querySelector('.slider-description');

const projectContainer = document.querySelector('.project-details');
// const detailImg = document.querySelector('.detail-img');
// const detailTitle = document.querySelector('.detail-title');

const projectId = new URLSearchParams(window.location.search).get('projectId');
let index = 0;

function titleHandler(project){
    title.innerHTML += project.name.toUpperCase();
    shadow.innerHTML += project.name.toUpperCase();
    skills.innerHTML = [...project.skills];
}

function sliderHandler(project, index){
    sliderImg.setAttribute('src', project.details[index].image)
    sliderTitle.innerHTML = project.details[index].title;
    sliderDescription.innerHTML = project.details[index].description;
}

function projectsHandler(project){
    const projectDetails = project.details;
    // console.log(projectDetails);
    projectDetails.forEach(detail => {
        console.log(detail);

        const detailContainer = document.createElement('div');
        detailContainer.className = 'detail-container';

        const detailImg = document.createElement('img');
        detailImg.className = 'detail-img';
        detailImg.setAttribute('src', detail.image);
        detailImg.setAttribute('data-index', detail.index);
        
        const detailTitle = document.createElement('p');
        detailTitle.className = 'description detail-title';
        detailTitle.innerHTML = detail.title;
        
        // console.log(detailContainer);
        // console.log(detailImg);
        // console.log(detailTitle);
        // console.log(projectDetails);
        detailContainer.append(detailImg, detailTitle);
        projectContainer.append(detailContainer);
        
        // console.log(detailTitle);
        // descriptionContainer.append(tumbnailTitle);
    });
}

function titleChanger(project){
    projectContainer.addEventListener('click', function(event){
        index = Number(event.target.dataset.index);
        sliderHandler(project, index)
    });
}

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
        console.log(projectContainer);
        sliderHandler(project, index)
    })

}

window.addEventListener('load', () => {
    fetch('../json/projects.json', {method:'GET'})
        .then(res => res.json())
        .then(data => {
            var project = data.projects[projectId-1];
            // console.log(project);
            titleHandler(project);
            sliderHandler(project, index);
            projectsHandler(project);
            titleChanger(project);
            sliderSwitchHandler(project);
        })
        .catch(err => console.log(err)) 
})
