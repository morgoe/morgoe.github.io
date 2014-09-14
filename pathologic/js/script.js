/* Fast Click Initialise */
$(function() {
    FastClick.attach(document.body);
});

$(document).ready(function() {
    $('.js-slick').slick({
  		slide: 'li',
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
    });

    $('.js-toggleLanguage').click(function() {
    	$('.js-toggleLanguage').toggleClass('active');
    });
});