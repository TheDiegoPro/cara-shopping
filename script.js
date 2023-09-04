//selection of HTML elements
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

//this is for open the hamburger menu
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

//this is for close hamburger menu
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}