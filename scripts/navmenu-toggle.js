//https://dev.to/devggaurav/let-s-build-a-responsive-navbar-and-hamburger-menu-using-html-css-and-javascript-4gci

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);
//Lisame "active class"-i mobiilimenüüle mis muudab ta avatavaks
function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

//eemaldame "active class"-i et menüü sulguks
function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}