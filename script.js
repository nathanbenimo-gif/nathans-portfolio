const menuButton = document.querySelector('#menu-btn');

const navbar = document.querySelector('.navbar');
menuButton.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
    
    if(navbar.classList.contains('nav-open')){
        menuButton.textContent = 'X';
    } else{
        menuButton.textContent = '☰';
    }
});

const navLinks = document.querySelectorAll('.nav-links');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
    e.preventDefault();

    navbar.classList.remove('nav-open');
    menuBtn.textcontent = '☰';

    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if(targetSection) {
     targetSection.scrollIntoView({behavior: 'smooth'});
     }
    });
});



const name = 'Nathan Benimo';
const title = 'Web Developer';

const city = 'Yenagoa Bayelsa';

const skill = ['HTML', 'CSS', 'Javascript', 'GraphicDesign', 'VideoEditing'];

const projects = [
    {
        title: 'My Portfolio',
        description: 'Personal portfolio site built during LLA Bootcamp',
        tech: 'HTML, CSS, JavaScript'
    },
    {
        title: 'Quiz Website',
        description: 'Personal portfolio site built during LLA Bootcamp ',
        tech: 'HTML, CSS, JavaScript'
    }
];

const introduce = () => {
    console.log(`Hi, I'm ${name}. I'm a ${title} based in ${city}.`);
};

const renderSkills = () => {
    const list = document.querySelector('#skills-list');
    list.innerHTML = '';
    skill.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        li.classList.add('skill-tag');
        list.appendChild(li);
    });
};

const renderproject = () => {
    const grid = document.querySelector('#project-grid');

    projects.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('project-card');

        const title = document.createElement('h3');
        title.textContent = project.title;

        const desc = document.createElement('p');
        desc.textContent = project.description;

        const tech = document.createElement('span');
        tech.textContent = project.tech;

        card.appendChild(title);
        card.appendChild(desc);
        card.appendChild(tech);

        grid.appendChild(card);
    });
};

const backToTop = document.querySelector('#back-to-top');

backToTop.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
});

function showError(input, message) {
    const errorEl = document.createElement('p');
    errorEl.textContent = message;
    errorEl.classList.add('error-message');
    input.classList.add('input-error');
    input.parentElement.appendChild(errorEl);
}

function clearErrors() {
    document.querySelectorAll('.error-message').forEach(el => el.remove());
    document.querySelectorAll('.input-error').forEach(el => {
        el.classList.remove('input-error');
    });
}

function showSuccess(message) {
    const success =ndocument.querySelector('#form-success');
    success.textContent = message;
    success.classList.add('visible');
} 

const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
    clearErrors();
    let isValid = true;

    const firstName = document.querySelector('#fname');
    const LastName = document.querySelector('#lname');
    const email = document.querySelector('#email');
    const phone = document.querySelector('#number');
    const service = document.querySelector('#source');
    const message = document.querySelector('#message');

    if(firstName.ariaValueMax.trim() === ''){
        e.preventDefault();
        showError(firstName, 'First name is required');
        isValid = false;
    }

    if(lastName.value.trim() ===''){
        e.preventDefault();
        showError(lastName, 'Last name is required');
        isValid = false;
    }

    if(!email.value.Includes('@')) {
        e.preventDefault();
        showError(email, 'Please enter a valid email address');
        isValid = false;
    }

    if(phone.value.trim() === ''&& phone.value.trim().length < 7) {
        e.preventDefault();
        showError(phone, 'Enter a valid phone number');
        isValid = false;
    }

    if(service.value === '') {
        e.preventDefault();
        showError(service, 'Please select a service');
        isValid = false;
    }

    if(message.value.trim().length < 10) {
        e.preventDefault();
        showError(message, 'Message must be at least 10 characters');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    introduce();
    renderSkills();
    renderproject();
});