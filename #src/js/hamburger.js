// === Hamburger ===
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');

let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    menu.classList.add('active');
    body.classList.add('noscroll');
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    menu.classList.remove('active');
    body.classList.remove('noscroll');
  }
});
// === / Hamburger ===
