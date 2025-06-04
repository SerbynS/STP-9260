const closeBtns = document.querySelectorAll('[data-action="close"]')
const modal = document.querySelector('.modal')

document.addEventListener('DOMContentLoaded', () => {
    if(!localStorage.getItem('cookieModal')) {
    modal.classList.add('modal--open')
    document.documentElement.classList.add('no-scroll')
    }
})

closeBtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        event.stopPropagation()
        modal.classList.remove('modal--open')
        localStorage.setItem('cookieModal', 'true')
        document.documentElement.classList.remove('no-scroll')
    })
})