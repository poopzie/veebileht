//https://codepen.io/Realto619/pen/ZEyWjKm

//Sündmuse kuulaja
document.addEventListener('click', function (e) {
    e = e || window.event;
    var target = e.target || e.srcElement;
//kui elemendil on omadus data-toggle, siis avame ta
    if (target.hasAttribute('data-toggle') && target.getAttribute('data-toggle') == 'modal') {
        if (target.hasAttribute('data-target')) {
            var m_ID = target.getAttribute('data-target');
            document.getElementById(m_ID).classList.add('open');
            e.preventDefault();
        }
    }

    // Sulgeme hüpik-akna kui vajutame akna raamist välja või sulgemise nupule
    if ((target.hasAttribute('data-dismiss') && target.getAttribute('data-dismiss') == 'modal') || target.classList.contains('modal')) {
        var modal = document.querySelector('[class="modal open"]');
        modal.classList.remove('open');
        e.preventDefault();
    }
}, false);

document.body.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        console.log(e);
        document.querySelector('.close').click();
    }
});


