const navToggler = document.querySelector('.hambugger');
const navList = document.querySelector('.nav__list');
const nav_list = document.querySelectorAll('.list');
const navBar = document.querySelector('.nav__bar');


var sliderImage = document.querySelector('#sliderImage');
sliderImage.classList.add('background-picture-image');
var images = new Array(
    "LEAF.jpg",
    "black-and-red-chicken (1).jpg",
    "yellow-corn-kernels-through-leaves (1).jpg");
var length = images.length;
var i = 0;
function slider(){
    if(i > length-1){
        i = 0
    }
    sliderImage.src = images[i]
    i++
    setTimeout('slider()',3000)
}

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