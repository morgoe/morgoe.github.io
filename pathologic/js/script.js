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

    $('.js-language-toggler').click(function() {
    	$('.js-language-toggler').toggleClass('active');
    });

    $('.js-menu-toggler').click(function() {
    	$('.js-menu-toggle').toggleClass('active');
    });

	$('.js-imagePopup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

});