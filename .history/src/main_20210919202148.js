/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    /*Active link*/
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    /*Remove menu mobile*/
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

//dark and light 

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})

//reduce the size and print on an a4 sheet

function scaleCv() {
    document.body.classList.add('scale-cv');
}

//remove the size when the cv is downloaded
function removeScale() {
    document.body.remove('scale-cv');
}

//generate pdf

let areaCv = document.getElementById('area-cv');

let resumeButton = document.getElementById('resume-button');

//htm2pdf options
let opt = {
    margin: 0,
    filename: 'myResume.pdf',
    image: {type: 'jpeg', quality: 0.98},
    html2canvas: {scale: 4},
    jsPDF: {format: 'a4', orientation: 'portrait'}
}
//Function to call areaCv and HtmllPdf opt
function generateResume() {
    html2pdf(areaCv, opt);
}
//when is clicked ,it executes 3 functions
resumeButton.addEventListener('click', () => {
    //1 class added to the body and it resizing
    scaleCv();
    //2. Pdf is generated
    generateResume();
    //3.remove scale after 5sec
    setTimeout(removeScale, 5000);
});