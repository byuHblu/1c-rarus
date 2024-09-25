/* SLIDER */
const scrollBtnContainer = document.querySelector('.menu-bottom__list');
const scrollPrevBtn = document.querySelector('.menu-bottom__scroll-btn--prev');
const scrollNextBtn = document.querySelector('.menu-bottom__scroll-btn--next');

function updateScrollButtons() {
  scrollPrevBtn.classList.toggle('active', scrollBtnContainer.scrollLeft > 0);
  scrollNextBtn.classList.toggle(
    'active',
    Math.ceil(scrollBtnContainer.scrollLeft) < scrollBtnContainer.scrollWidth - scrollBtnContainer.clientWidth,
  );
}

scrollPrevBtn.addEventListener('click', () => {
  scrollBtnContainer.scrollBy({ left: -100, behavior: 'smooth' });
  updateScrollButtons();
});

scrollNextBtn.addEventListener('click', () => {
  scrollBtnContainer.scrollBy({ left: 100, behavior: 'smooth' });
  updateScrollButtons();
});

updateScrollButtons();
scrollBtnContainer.addEventListener('scroll', updateScrollButtons);

/* BURGER */
document.querySelector('.burger-menu__btn').addEventListener('click', () => {
  document.querySelector('.burger-menu__content').classList.toggle('active');
});
document.querySelector('.burger-menu__close').addEventListener('click', () => {
  document.querySelector('.burger-menu__content').classList.remove('active');
});
