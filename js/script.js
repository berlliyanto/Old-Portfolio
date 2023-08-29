var navLinks = document.querySelectorAll('.navigasi ul li a');
let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.navigasi ul li a[href*=' + id + ']')
                    .classList.add('active');
            })
            sec.style.opacity = 1;
            sec.style.transform = 'translateY(0)';
        }
    });
}

// Nav Active
function handleClick(event) {
    navLinks.forEach(function (link) {
        link.classList.remove('active');
    });
    event.target.classList.add('active');
}

navLinks.forEach(function (link) {
    link.addEventListener('click', handleClick);
});

// Download CV
function downloadPDF() {
    var pdfURL = '../file/CV_berli.pdf';
    window.open(pdfURL, '_blank');
}

// Go To Kontak
function goToKontak() {
    window.location.href = '#kontak';
}

// Go To Home
function goToBeranda() {
    window.location.href = '#beranda';
}

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('clicked');
    navMenu.classList.toggle('clicked');
});

document.querySelectorAll(".nav-menu a").forEach(n => n.addEventListener(
    'click', function () {
        hamburger.classList.remove('clicked');
        navMenu.classList.remove('clicked');
    }
));

// Hover Pengalaman
const gudang = document.querySelector('.content-1');
gudang.addEventListener('mouseenter', (event) => {
    console.log("aaa");
});

// Button Pengalaman
// Github
document.getElementById('git-gudang').addEventListener('click', ()=>{
    let URL = '';
    window.open(URL, '_blank');
});
document.getElementById('git-erp-dcs').addEventListener('click', ()=>{
    let URL = '';
    window.open(URL, '_blank');
});
document.getElementById('git-porto').addEventListener('click', ()=>{
    let URL = '';
    window.open(URL, '_blank');
});
document.getElementById('git-erp').addEventListener('click', ()=>{
    let URL = '';
    window.open(URL, '_blank');
});
document.getElementById('git-TA-mobile').addEventListener('click', ()=>{
    let URL = '';
    window.open(URL, '_blank');
});
document.getElementById('git-todo-mobile').addEventListener('click', ()=>{
    let URL = '';
    window.open(URL, '_blank');
});

document.getElementById('sel-gudang').addEventListener('click', ()=>{
    let URL = '';
    window.open(URL, '_blank');
});
document.getElementById('sel-erp-dcs').addEventListener('click', ()=>{
    let URL = '';
    window.open(URL, '_blank');
});
document.getElementById('sel-porto').addEventListener('click', ()=>{
    let URL = '';
    window.open(URL, '_blank');
});
document.getElementById('sel-erp').addEventListener('click', ()=>{
    let URL = '';
    window.open(URL, '_blank');
});
document.getElementById('sel-TA-mobile').addEventListener('click', ()=>{
    let URL = '';
    window.open(URL, '_blank');
});
document.getElementById('sel-todo-mobile').addEventListener('click', ()=>{
    let URL = '';
    window.open(URL, '_blank');
});

// Social Media
const github = document.getElementById('github');
const linkedin = document.getElementById('linkedin');
const instagram = document.getElementById('instagram');

github.addEventListener('click', ()=>{
    var githubURL = 'https://github.com/berlliyanto';
    window.open(githubURL, '_blank');
})

linkedin.addEventListener('click', ()=>{
    var linkedinURL = 'https://www.linkedin.com/in/berlliyanto-aji-nugraha-0a493b229/';
    window.open(linkedinURL, '_blank');
})

instagram.addEventListener('click', ()=>{
    var instgramURL = 'https://www.instagram.com/berlliyanto/';
    window.open(instgramURL, '_blank');
})

// copyright
const year = document.getElementById('year');
let nowdate = new Date();
let currentYear = nowdate.getFullYear();
year.innerText = currentYear;

document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed('#typing', {
        strings: ['Web Developer', 'Mobile Developer', 'Internet of Things'],
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 2000,
        loop: true
    });
});


// function isElementInViewport(el) {
//     var rect = el.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }

// function animateOnScroll() {
//     var elements = document.querySelectorAll('.box');
//     elements.forEach(function (element) {
//         if (isElementInViewport(element)) {
//             element.style.opacity = 1;
//             element.style.transform = 'translateY(0)';
//         }
//     });
// }