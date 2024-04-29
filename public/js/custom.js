
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

function obserableHoverMenu() {
    var categoriesArrow = $('img.categories-arrow-img');
    $('.observer-hover-menu').addClass('active');
    categoriesArrow.css({
        'transform': 'rotate(180deg)',
        'transition': 'transform 0.2s ease-in-out'
    });
}
function obserableHoverLeav() {
    var categoriesArrow = $('img.categories-arrow-img');
    categoriesArrow.css({
        'transform': 'rotate(0deg)',
        'transition': 'transform 0.2s ease-in-out'
    });
}
function hideObserverHoverMenu() {
    $('.observer-hover-menu').removeClass('active');
}
