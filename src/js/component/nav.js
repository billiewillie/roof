const burgerMenu = document.querySelector('.burger__menu');
const mobileHidden = document.querySelector('.mobile__hidden');
const wrapper = document.querySelector('.wrapper');

export default burgerMenu.addEventListener('click', function () {
  burgerMenu.classList.toggle('active');
  mobileHidden.classList.toggle('show');
  wrapper.classList.toggle('no-scroll');
});