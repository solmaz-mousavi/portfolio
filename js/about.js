const skillContainer = document.querySelector('.skills');

function skillHandler(skills){
    skills.forEach(skill => {
        const skillElem = document.createElement('li');

        const skillImg = document.createElement('img');
        skillImg.setAttribute('src', skill.image);

        const skillname = document.createElement('span');
        skillname.innerText = skill.name;
        
        const skillDescription = document.createElement('span');
        skillDescription.classList.add('description');
        skillDescription.innerText = ' - ' + skill.description;

        skillElem.appendChild(skillImg);
        skillElem.appendChild(skillname);
        skillElem.appendChild(skillDescription);

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