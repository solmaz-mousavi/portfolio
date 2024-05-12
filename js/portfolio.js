const projectsContainer = document.querySelector('.projects-container');

function projectsHandler(projects){
    projects.forEach(project => {

        const projectElem = document.createElement('div');
        projectElem.className = 'project-tumbnail';

        const imagecontainer = document.createElement('div');
        imagecontainer.className = 'project-img';

        const imageElem = document.createElement('img');
        imageElem.setAttribute('src', project.details[0].image);
        
        const titleContainer = document.createElement('div');
        titleContainer.className = 'project-title';
        
        const titleElem = document.createElement('h3');
        titleElem.className = 'title';
        titleElem.innerText = project.name;
        
        const skillsElem = document.createElement('p');
        skillsElem.className = 'title';
        skillsElem.innerText = 'شامل مهارتهای نرم افزاری: ' + [...project.skills];

        const infocontainer = document.createElement('div');
        infocontainer.className = 'project-info';
        
        const descriptionElem = document.createElement('p');
        descriptionElem.className = 'description';
        descriptionElem.innerText = project.details[0].description;
        
        const linkElem = document.createElement('a');
        linkElem.setAttribute('href', `../pages/project-details.html?projectId=${project.id}`);
        linkElem.innerText = 'جزئیات بیشتر ';
        
        imagecontainer.appendChild(imageElem);
        titleContainer.append(titleElem, skillsElem);
        infocontainer.append(descriptionElem, linkElem);
        projectElem.append(imagecontainer, titleContainer, infocontainer);
        projectsContainer.appendChild(projectElem);






    });
}

window.addEventListener('load', () => {
    fetch('../json/projects.json', {method:'GET'})
        .then(res => res.json())
        .then(data => {
            console.log(data.projects);
            let projects = data.projects;
            projectsHandler(projects);
        })
        .catch(err => console.log(err)) 
    }
)