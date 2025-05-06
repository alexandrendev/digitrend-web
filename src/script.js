let menu = document.getElementById("menu");
let items = document.getElementsByClassName("options");

menu.addEventListener("click", function (e) {
});



const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-options');
const closeMenu = document.querySelector('.close-menu');

closeMenu.addEventListener('click', (e) => {
    e.stopPropagation();
    menuToggle.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('active');
    
    document.body.style.overflow = 'auto';
});

menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';

    menuToggle.setAttribute('aria-expanded', !isExpanded);
    mobileMenu.classList.toggle('active');

    document.body.style.overflow = isExpanded ? 'auto' : 'hidden';
});