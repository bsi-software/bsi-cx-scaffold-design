const mainContainer = document.getElementById('main');

let scrollSections = mainContainer.getElementsByClassName(
    'slidersection_slidersection'
);

for (let i = 0; i < scrollSections.length; i++) {
    let scrollContainer = scrollSections[i].getElementsByClassName(
        'slider_carousel__viewport'
    );

    const buttonNext = scrollSections[i].getElementsByClassName(
        'slidersection_controlRight'
    )[0];

    const buttonPrev = scrollSections[i].getElementsByClassName(
        'slidersection_controlLeft'
    )[0];

    buttonNext.addEventListener('click', function() {
        changeScrollPosition(scrollContainer[0], 500);
    });

    buttonPrev.addEventListener('click', function() {
        changeScrollPosition(scrollContainer[0], -500);
    });
}

function changeScrollPosition(element, num) {
    element.scrollLeft += num;
}
