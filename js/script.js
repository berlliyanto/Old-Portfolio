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
    var pdfURL = '../file/CV_Berli_Indo.pdf';
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
    let URL = 'https://github.com/berlliyanto/Pengelola-Gudang';
    window.open(URL, '_blank');
});
document.getElementById('git-erp-dcs').addEventListener('click', ()=>{
    let URL = 'https://github.com/berlliyanto/Praktikum-Enterprise2-Frontend';
    window.open(URL, '_blank');
});
document.getElementById('git-porto').addEventListener('click', ()=>{
    let URL = 'https://github.com/berlliyanto/portfolio';
    window.open(URL, '_blank');
});
document.getElementById('git-erp').addEventListener('click', ()=>{
    let URL = 'https://github.com/berlliyanto/Enterprise-Project-Frontend';
    window.open(URL, '_blank');
});
document.getElementById('git-TA-mobile').addEventListener('click', ()=>{
    let URL = 'https://github.com/berlliyanto/Flutter_TugasAkhir';
    window.open(URL, '_blank');
});
document.getElementById('git-todo-mobile').addEventListener('click', ()=>{
    let URL = 'https://github.com/berlliyanto/Task-Management-App-Mobile';
    window.open(URL, '_blank');
});
document.getElementById('git-revou').addEventListener('click', ()=>{
    let URL = 'https://github.com/revou-fundamental-course/21-aug-23-berlliyanto';
    window.open(URL, '_blank');
});

document.getElementById('git-react').addEventListener('click', ()=>{
    let URL = 'https://github.com/berlliyanto/Clone_TugasAkhir_ReactJS';
    window.open(URL, '_blank');
});



document.getElementById('sel-gudang').addEventListener('click', ()=>{
    let URL = 'https://aplikasipms.com/gudang';
    window.open(URL, '_blank');
});
document.getElementById('sel-erp-dcs').addEventListener('click', ()=>{
    let URL = 'https://aplikasipms.com/enterprise2/frontend/#/';
    window.open(URL, '_blank');
});
document.getElementById('sel-porto').addEventListener('click', ()=>{
    let URL = 'index.html';
    window.open(URL, '_blank');
});
document.getElementById('sel-erp').addEventListener('click', ()=>{
    let URL = 'https://aplikasipms.com/enterprise-simulation/#/';
    window.open(URL, '_blank');
});
document.getElementById('sel-TA-mobile').addEventListener('click', ()=>{
    let URL = 'https://drive.google.com/file/d/1NF4M50h_7D8yFUJNFoLE6ttyMh8IEt93/view?usp=sharing';
    window.open(URL, '_blank');
});
document.getElementById('sel-todo-mobile').addEventListener('click', ()=>{
    let URL = '';
    window.open(URL, '_blank');
});
document.getElementById('sel-revou').addEventListener('click', ()=>{
    let URL = 'https://aplikasipms.com/revou-mini-project';
    window.open(URL, '_blank');
});

document.getElementById('sel-react').addEventListener('click', ()=>{
    let URL = 'https://aplikasipms.com/';
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
