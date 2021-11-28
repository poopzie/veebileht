//Video tutoorial  https://www.youtube.com/watch?v=KcdBOoK3Pfw&ab_channel=DevEd
window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    const contentSlide = document.querySelector('.content-slider-images');
    const contentImages = document.querySelectorAll('.content-slider-images img');

    //Defineerime nupud
    const prevBtn = document.querySelector('#prevBtn');
    const nextBtn = document.querySelector('#nextBtn');

    //Kontrollime mis kell on
    var ndate = new Date();
    var hours = ndate.getHours();
    if (hours < 12){
        number = 1
    }
    if (hours >= 12 && hours < 18 ){
        number = 2
    }
    if (hours >= 18 && hours <= 23){
        number = 3
    }
    let counter = number
    let size = contentImages[0].clientWidth;
    contentSlide.style.transform = 'translateX('+ ( -size * counter) + 'px)';
    console.log(number)


    //Button Listeners

    nextBtn.addEventListener('click', () =>{
        if (counter >= contentImages.length -1) return;
        contentSlide.style.transition = 'transform 0.4s ease-in-out';
        counter++;
        contentSlide.style.transform = 'translateX(' + ( -size * counter) + 'px)';
        console.log(contentSlide.style.transform)

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

    window.addEventListener('resize', () => {
        contentSlide.style.transition = "none";
        size = contentImages[0].clientWidth;
        contentSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });
});
