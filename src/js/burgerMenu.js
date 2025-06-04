
const burgerBtn = document.querySelector('[data-action="open"]')
const nav = document.querySelector('.nav')

burgerBtn.addEventListener('click', (event) => {
    event.stopPropagation()
    nav.classList.toggle('nav--open')
})

document.addEventListener('click', (event) => {
    if (nav.classList.contains('nav--open') && !nav.contains(event.target) && !burgerBtn.contains(event.target)) {
        nav.classList.remove('nav--open')
    }
})