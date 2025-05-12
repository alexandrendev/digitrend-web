document.addEventListener('DOMContentLoaded', () => {
  const mediaQuery1024 = window.matchMedia("(min-width: 1440px)");
  const mediaQuery768 = window.matchMedia("(min-width: 1024px)");

  let previousTarget = null;

  function checkBreakpoints() {
      let target = null;
  
      if (mediaQuery1024.matches) {
          target = document.querySelector('#first-large a');
      } 
      else if (mediaQuery768.matches) {
          target = document.querySelector('.desktop-wide a');
      } 
      else {
          target = document.querySelector('.grid-container .item:first-child a');
      }
  
      if (target && target !== previousTarget) {
          if (previousTarget) {
              previousTarget.innerHTML = '';
              previousTarget.classList.remove('link');
          }
  
          target.innerHTML = `
          <div class="image-overlay">
            <div class="image-overlay-text">
              <h2>Website Dashboard Design</h2>
              <p>Lorem ipsum dolor sit amet consectetur. Semper a interdum →</p>
            </div>
          </div>
          `;
          target.classList.add('link');
          target.href = 'https://www.compass.uol';
          previousTarget = target;
      }
  }


  checkBreakpoints();

  mediaQuery1024.addEventListener("change", checkBreakpoints);
  mediaQuery768.addEventListener("change", checkBreakpoints);
});



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



// SERVICES CARDS
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    cards.forEach(c => c.classList.remove('active-card'));
    card.classList.add('active-card');
    const cardArrow = card.querySelector('.card-link img');
    cardArrow.src = 'assets/shared/Arrow-selected.svg';    
  });
});


