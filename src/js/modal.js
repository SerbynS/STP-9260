const closeBtns = document.querySelectorAll('[data-action="close"]')
const modal = document.querySelector('.modal')

document.addEventListener('DOMContentLoaded', () => {
    if(!localStorage.getItem('cookieModal')) {
    modal.classList.add('modal--open')
    }
})


closeBtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        event.stopPropagation()
        modal.classList.remove('modal--open')
        localStorage.setItem('cookieModal', 'true')
    })
})