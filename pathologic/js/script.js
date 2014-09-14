/* Fast Click Initialise */
$(function() {
    FastClick.attach(document.body);
});

$(document).ready(function() {
    console.log('a')
    $('.js-slick').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1
    });
    console.log('b')
});