const navToggler = document.querySelector('.hambugger');
const navList = document.querySelector('.nav__list');
const nav_list = document.querySelectorAll('.list');
const navBar = document.querySelector('.nav__bar');


/*var sliderImage = document.querySelector('#sliderImage');
sliderImage.classList.add('background-picture-image');
var images = new Array(
    "LEAF.jpg",
    "black-and-red-chicken (1).jpg",
    "yellow-corn-kernels-through-leaves (1).jpg");
var length = images.length;
var i = 0;


//change the image on the home page first section
function slider(){
    if(i > length-1){
        i = 0
    }
    sliderImage.src = images[i]
    i++
    setTimeout('slider()',3000)
}*/

//activate nav bar on scroll
function activateScrolly() {
    navBar.classList.toggle('addNavBarColor', scrollY > 20)
}

//activates the navigation bar and controls the hambugger movement
function activateNavbar() {
    let navState = navToggler.getAttribute('aria-controls');
if(navState === 'closed'){
    navToggler.setAttribute('aria-controls', 'open')
}else{navToggler.setAttribute('aria-controls', 'closed')}
navList.classList.toggle('navActive')
}

//deacivates the navbar on scroll with a corresponding hambugger movement
function removeNavbar() {
    let navState = navToggler.getAttribute('aria-controls');
if(navState === 'open'){
    navToggler.setAttribute('aria-controls', 'closed')
    navList.classList.remove('navActive')
}
}

//declare active navigation button on click
function declareActiveNav() {
    Array.from(nav_list).forEach(nav => {
        nav.addEventListener('click', () => {
            nav_list.forEach(nav => {
                nav.classList.remove('active')
            })
          nav.classList.add('active')
        })
    })
}

declareActiveNav();

window.addEventListener('scroll', () => {
    activateScrolly();
})

window.addEventListener('load', () => {
    navList.classList.remove('navActive')  
})


navToggler.addEventListener('click', () => {
    activateNavbar()
})

window.addEventListener('scroll', () => {
    removeNavbar()    
})

const readMore = document.querySelector('.read-more')
readMore.addEventListener('click', () => {
    showMore()
})
//display on all the content on the why choose joam real estate log
const showMore = () => {
    let par = document.querySelector('.extended-paragraph');
    let parAttribute = par.getAttribute('aria-details')
    if(parAttribute === 'hidden'){
        par.setAttribute('aria-details', 'visible');
        par.classList.add('showExtended-paragraph')
    }else{
        par.setAttribute('aria-details', 'hidden')
        par.classList.remove('showExtended-paragraph')
    }
}

//controls the swipper
const swiperWrapper = document.querySelector('.swiper-wrapper');

const slides = Array.from(swiperWrapper.children)
const slideWidth = slides[1].getBoundingClientRect().width;
console.log(slideWidth)

const assignPosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
    const num = slide.style.left
    console.log(num)
}
//slides.forEach(assignPosition);
