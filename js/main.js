const burgerBtn = document.querySelector('.btn-menu')
const menu = document.querySelector('.menu')
const closeBtn = document.querySelector('.close');

burgerBtn.addEventListener('click', () => {
    menu.classList.add('active');
})

closeBtn.addEventListener('click', () => {
    menu.classList.remove('active');
})