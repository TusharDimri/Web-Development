burger = document.querySelector('.burger');
navList = document.querySelector('.nav-list');
rightNav = document.querySelector('.right-nav');
navbar = document.querySelector('.navbar')

burger.addEventListener('click', ()=>{
    navList.classList.toggle('visibility');
    rightNav.classList.toggle('visibility');
    navbar.classList.toggle('h-nav')
});