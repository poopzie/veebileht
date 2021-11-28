/*Teksti ilmutamine*/
/*https://codepen.io/rakibhstu/pen/MWwybqx*/
/*https://dev.to/_saranshbarua/creating-a-simple-yet-smooth-reveal-animation-with-the-swiss-knife-css-animations-vanillajs-on-codepen-4mc1*/
const loadingAnimationTime = 100

const showMainAnimation = (parent) => {
    const boxContainer = document.createElement("div");
    boxContainer.style.overflow = "hidden";
    const box = document.createElement("div");
    box.classList.add("box", "flex");
    parent.appendChild(boxContainer);
    boxContainer.appendChild(box);
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

    if (counter===1){
        var quote = ["Vaata", "hommikusöögi", "retsepte", "siit"];
    }
    if (counter === 2){
        quote = ["Vaata", "lõunasöögi", "retsepte", "siit"]
    }
    if (counter === 3){
        quote = ["Vaata", "õhtusöögi", "retsepte", "siit"]
    }
    let delay = 0;
    // Add all the words
    for (let word in quote){
        let text = document.createElement("span");
        text.textContent = quote[word];
        text.classList.add("animate-slideup");
        delay = delay + 22;
        text.style.animationDelay = delay + "ms";
        box.appendChild(text);
    }
    const lastAnimationTime = 1000 + delay; // in ms
    // Add full stop
    let text = document.createElement("div");
    text.classList.add("fs", "flex");
    text.style.animationDelay = lastAnimationTime - 100 + "ms";
    box.appendChild(text);
};

const revealCurtain = (parent) => {
    const curtain = document.createElement("div");
    curtain.classList.add("flex", "curtain");
    parent.appendChild(curtain);
    const progressBar = document.createElement("div");
    progressBar.classList.add("progressBar");
    curtain.appendChild(progressBar);
    progressBar.classList.add("progressGrow-animation");
    return curtain;
};
const init = () => {
    const container = document.getElementById("main");
    const curtain = revealCurtain(container);
    setTimeout(() => {
        container.removeChild(curtain);
        showMainAnimation(container);
    }, loadingAnimationTime + 100)
};

init();
/*teksti reveal lõpp*/
