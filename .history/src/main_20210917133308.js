/*const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', () => {
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu');
        });
    }
};
showMenu('nav-toggle','nav-menu');*/

let x = document.getElementById("nav-toggle");
x.addEventListener("click", myFunction);

function myFunction() {
    let element = document.getElementById("nav-list");
    element.classList.toggle("open");

    x.classList.toggle("change")
}
