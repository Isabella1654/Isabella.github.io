
const header = document.querySelectorAll('header');

window.addEventListener('scroll', () => {
    header.forEach((item) => {
        item.classList.toggle('sticky', window.scrollY > 40);
    });
});