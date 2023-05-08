const navToggler = document.querySelector('.hambugger');
const navList = document.querySelector('.nav__list');
const nav_list = document.querySelectorAll('.list');
const navBar = document.querySelector('.nav__bar');


window.addEventListener('scroll', () => {
    navBar.classList.toggle('addNavBarColor', scrollY > 20)
})
window.addEventListener('load', () => {
    navList.classList.remove('navActive')  
})


navToggler.addEventListener('click', () => {
    let navState = navToggler.getAttribute('aria-controls');
    if(navState === 'closed'){
        navToggler.setAttribute('aria-controls', 'open')
    }else{navToggler.setAttribute('aria-controls', 'closed')}
    navList.classList.toggle('navActive')
})

window.addEventListener('scroll', () => {
    let navState = navToggler.getAttribute('aria-controls');
    if(navState === 'open'){
        navToggler.setAttribute('aria-controls', 'closed')
        navList.classList.remove('navActive')
    }
})

Array.from(nav_list).forEach(nav => {
    nav.addEventListener('click', () => {
        nav_list.forEach(nav => {
            nav.classList.remove('active')
        })
      nav.classList.add('active')
    })
})
