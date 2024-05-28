const themeBtn = document.querySelector('.theme-btn');
const body = document.body;
const themeIcon = themeBtn.querySelector('.fa');

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    themeIcon.classList.toggle('fa-moon-o');
    themeIcon.classList.toggle('fa-sun-o');
});