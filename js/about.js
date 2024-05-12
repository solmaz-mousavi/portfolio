const skillContainer = document.querySelector('.skills');

function skillHandler(skills){
    skills.forEach(skill => {
        const skillElem = document.createElement('li');

        const skillTitle = document.createElement('h3');
        skillTitle.className = 'title';
        const skillImg = document.createElement('img');
        skillImg.setAttribute('src', skill.image);
        const skillname = document.createElement('span');
        skillname.innerText = skill.name;
        
        const skillDescription = document.createElement('span');
        skillDescription.classList.add('description');
        skillDescription.innerText = ' - ' + skill.description;

        skillTitle.append(skillImg, skillname)
        skillElem.append(skillTitle, skillDescription);
        skillContainer.appendChild(skillElem);
    });
}

window.addEventListener('load', () => {
    fetch('../json/skills.json', {method:'GET'})
        .then(res => res.json())
        .then(data => {
            console.log(data.skills);
            let skills = data.skills;
            skillHandler(skills);
        })
        .catch(err => console.log(err)) 
    }
)