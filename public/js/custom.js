
// $('.hero-slider-holder').slick({
//     speed: 300,
//     infinite: true,
//     autoplaySpeed: 5000,
//     autoplay: false,
//     dots: true,
//     fade: true,
//     cssEase: 'linear',
//     arrows: false,

// });

// function obserableHoverMenu() {
//     var categoriesArrow = $('img.categories-arrow-img');
//     $('.observer-hover-menu').addClass('active');
//     categoriesArrow.css({
//         'transform': 'rotate(180deg)',
//         'transition': 'transform 0.2s ease-in-out'
//     });
// }
// function obserableHoverLeav() {
//     var categoriesArrow = $('img.categories-arrow-img');
//     categoriesArrow.css({
//         'transform': 'rotate(0deg)',
//         'transition': 'transform 0.2s ease-in-out'
//     });
// }
// function hideObserverHoverMenu() {
//     $('.observer-hover-menu').removeClass('active');
// }


document.onload = function () {
    slideOne();
    slideTwo();
};

let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 0;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;

function slideOne() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    displayValOne.textContent = sliderOne.value;
    fillColor();
}
function slideTwo() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.textContent = sliderTwo.value;
    fillColor();
}
function fillColor() {
    percent1 = (sliderOne.value / sliderMaxValue) * 100;
    percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
}
