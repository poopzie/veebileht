//Video tutoorial  https://www.youtube.com/watch?v=KcdBOoK3Pfw&ab_channel=DevEd

//Ootame kuni kogu lehekülje CSS on ära laadinud ja siis tegutseme edasi
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
    // Vastavalt kellale kuvame veebilehele pildi
    let counter = number
    let size = contentImages[0].clientWidth;
    contentSlide.style.transform = 'translateX('+ ( -size * counter) + 'px)';
    console.log(number)


    //Sündmuse kuulaja mis on nupu küljes, liigutab pildi võrra edasi

    nextBtn.addEventListener('click', () =>{
        if (counter >= contentImages.length -1) return;
        contentSlide.style.transition = 'transform 0.4s ease-in-out';
        counter++;
        contentSlide.style.transform = 'translateX(' + ( -size * counter) + 'px)';
        console.log(contentSlide.style.transform)

    });

    //Sündmuse kuulaja mis on nupu küljes, liigutab pildi võrra edasi

    prevBtn.addEventListener('click', () => {
        if (counter <= 0) return;
        contentSlide.style.transition = 'transform 0.4s ease-in-out';
        counter--;
        contentSlide.style.transform = 'translateX(' + ( -size * counter) + 'px)';
    });
    //Sündmuse kuulaja mis tuvastab kui oleme jõudnud viimasele pildile
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

    //Sündmuse kuulaja et muuta slider suurusetundlikuks
    window.addEventListener('resize', () => {
        contentSlide.style.transition = "none";
        size = contentImages[0].clientWidth;
        contentSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });
});
