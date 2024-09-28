let menuIcons = document.querySelector('#bar');
let navbar = document.querySelector('nav');

menuIcons.onclick = () => {
    menuIcons.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};