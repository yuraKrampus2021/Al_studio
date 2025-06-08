const burgerBtn = document.querySelector('.btn-menu')
const menu = document.querySelector('.menu')

burgerBtn.addEventListener('click', () => {
    menu.classList.add('active');
})