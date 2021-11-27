//Video tutoorial  https://www.youtube.com/watch?v=KcdBOoK3Pfw&ab_channel=DevEd
const contentSlide = document.querySelector('.content-slider-images');
const contentImages = document.querySelectorAll('.content-slider-images img');

//Defineerime nupud
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Kontrollime mis kell on
$(document).ready(function() {
    function dateTime() {
        var ndate = new Date();
        var hours = ndate.getHours();
    setInterval(dateTime, 1000);
    }
});

Number.prototype.leadingZeroes = function(len) {
    return (new Array(len).fill('0', 0).join('') + this).slice(-Math.abs(len));
}

//
var d = new Date()
let counter = 1
if (d.getHours() < 12){
    counter = 1;
}else if(d.getHours()<18){
    counter = 2;
}else{
    counter = 3;
}

const size = contentImages[0].clientWidth;

contentSlide.style.transform = 'translateX('+ ( -size * counter) + 'px)';

//Button Listeners

nextBtn.addEventListener('click', () =>{
    if (counter >= contentImages.length -1) return;
    contentSlide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    contentSlide.style.transform = 'translateX(' + ( -size * counter) + 'px)';
});
prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    contentSlide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    contentSlide.style.transform = 'translateX(' + ( -size * counter) + 'px)';
});
contentSlide.addEventListener('transitionend', ()=>{
    if (contentImages[counter].id === "lastClone"){
        contentSlide.style.transition = "none"
        counter = contentImages.length -2;
        contentSlide.style.transform = 'translateX(' + ( -size * counter) + 'px)';
    }
    if (contentImages[counter].id === "firstClone"){
        contentSlide.style.transition = "none"
        counter = contentImages.length-counter;
        contentSlide.style.transform = 'translateX(' + ( -size * counter) + 'px)';
    }
});
