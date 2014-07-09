/* Fast Click Initialise */
$(function() {
    FastClick.attach(document.body);
});

window.addEventListener('deviceorientation', function(eventData) {
	var xTilt = 10 * eventData.gamma * (15/180);
	if (xTilt > 15)
		xTilt = 15;
	else if (xTilt < -15)
		xTilt = -15;

	$('.js-tilt-image').css('transform', 'translate3d(' + xTilt + '%, 0, 0)');
}, false);



$(document).ready(function() {
	$('#fullpage').fullpage();
	$('button').click(function() {
		$.fn.fullpage.moveSectionDown();
	});
});