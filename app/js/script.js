const btnHamburger = document.querySelector('#btnHamburger')
const body = document.querySelector('body')
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')
const fadeElemns = document.querySelectorAll('.has-fade')

btnHamburger.addEventListener('click', function() {
    console.log('click hamburger')

    if(header.classList.contains('open')) { // Close hamburger menu
        body.classList.remove('noscroll')
        header.classList.remove('open')
        fadeElemns.forEach(element => {
            element.classList.add('fade-out')
            element.classList.remove('fade-in')
        })
    } else { // Open haburger menu
        body.classList.add('noscroll')
        header.classList.add('open')
        fadeElemns.forEach(element => {
            element.classList.add('fade-in')
            element.classList.remove('fade-out')
        })
    }
})