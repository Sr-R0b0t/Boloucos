//menubar
let show = true;

const menuContent = document.querySelector('.content');
const menuToggle = menuContent.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
    if (show) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'initial';
    }

    menuContent.classList.toggle('on', show);
    show = !show;
});

//Menu pesquisar
const searchInput = document.querySelector("#searchInput");
const cards = document.querySelectorAll(".cards");

const filterData = () => {
    const searchTerm = searchInput.value.toLowerCase();
    cards.forEach(cards => {
        const title = cards.querySelector("h2").textContent.toLowerCase();
        const description = cards.querySelector("p").textContent.toLowerCase();
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            cards.style.display = "";
        } else {
            cards.style.display = "none";
        }
    });
};

searchInput.addEventListener("input", filterData);

// faq duvidas
let openFaq = document.querySelector('.faq')
let openR = document.getElementById('resultFaq')
let resultadoFaqTwo = document.querySelector('#resultFaq-two')
let resultFaqThree = document.querySelector('#resultFaq-three')
let resultadoFaqFour = document.querySelector('#resultFaq-four')

openFaq.addEventListener('click', function() {
    if (openR.style.display == 'block') {
        openR.style.display = 'none';
    } else {
        openR.style.display = 'block';
    }
})

function clicou() {  
    if (resultadoFaqTwo.style.display == 'block') {
        resultadoFaqTwo.style.display = 'none';
    } else {
        resultadoFaqTwo.style.display = 'block'
    }
}

function clicouThree() {
    if (resultFaqThree.style.display == 'block') {
        resultFaqThree.style.display = 'none'
    } else {
        resultFaqThree.style.display = 'block'
    } 
}

function clicouFour() {
    if (resultadoFaqFour.style.display == 'block') {
        resultadoFaqFour.style.display = 'none'
    } else {
        resultadoFaqFour.style.display = 'block'
    }
}




/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.soap, .father-slider, .box-slider, #produtos', {delay: 50, origin: 'top'});
sr.reveal('.box-card, #duvidas', {origin: 'bottom'})


