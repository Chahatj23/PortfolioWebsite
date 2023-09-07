// const hamburgerMenu = document.querySelector('.hamburger-menu');
// const right = document.querySelector('.right');

// hamburgerMenu.addEventListener('click', () => {
//   console.log('clicked');
//   right.classList.toggle('active');
// });

document.addEventListener('DOMContentLoaded', function() {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const right = document.querySelector('.right');

  hamburgerMenu.addEventListener('click', () => {
    console.log('clicked');
    right.classList.toggle('active');
  });
});
