// define all UI variable
const navToggler = document.querySelector('.navToggler');
const navBar = document.querySelector('.nav');
const navMenu = document.querySelector('.nav .listItems');
const navLinks = document.querySelectorAll('.nav .listItems .item');

// load all event listners
allEventListners();

// functions of all event listners

function allEventListners() {
    // toggler icon click event
    navToggler.addEventListener('click', togglerClick);
    // nav links click event
    navLinks.forEach(elem => elem.addEventListener('click', navLinkClick));
}

function togglerClick() {
    navToggler.classList.toggle('toggler-open');
    navMenu.classList.toggle('open');
    navBar.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
    if (navMenu.classList.contains('open')) {
        navToggler.click();
    }
}