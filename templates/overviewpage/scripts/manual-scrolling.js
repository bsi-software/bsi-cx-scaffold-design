/* Scroll Behaviour */

const scrollContainer = document.getElementById('carousel-viewport');

const buttonNext = document.getElementById('nextcard');
const buttonPrev = document.getElementById('prevcard');

function scrollPosition(element) {
    element.scrollLeft += 500;
    console.log(element.scrollLeft + ' and ' + element.scrollWidth);
}

function scrollRight(element) {
    element.scrollLeft -= 500;
    console.log(element.scrollLeft + ' and ' + element.scrollWidth);
}

buttonNext.addEventListener('click', () => {
    scrollPosition(scrollContainer);
});

buttonPrev.addEventListener('click', () => {
    scrollRight(scrollContainer);
});
