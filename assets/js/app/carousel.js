$(document).ready(function() {
	var $figure = $('.carousel-frame').closest('.carousel-figure');
	var $frame = $figure.find('.carousel-frame');
	var $scrollbar = $figure.find('.carousel-scrollbar');

	var sly = new Sly($frame, {
		horizontal: 1,
		itemNav: 'basic',
		smart: 1,
		activateOn: 'click',
		mouseDragging: 1,
		touchDragging: 1,
		releaseSwing: 1,
		startAt: 0,
		scrollBar: $scrollbar,
		scrollBy: 1,
		speed: 800,
		elasticBounds: 1,
		easing: 'easeOutExpo',
		dragHandle: 1,
		dynamicHandle: 1,
		clickBar: 1,
		cycleBy: 'items',
		cycleInterval: 2000,
		pauseOnHover: 1,
	}).init();

	sly.on('pause', function() {
		sly.set('cycleBy', null);
	});

	// $('.carousel-button--next').click(function() {
	// 	moveSlider('right');
	// });

	// $('.carousel-button--prev').click(function() {
	// 	moveSlider('left');
	// });

	// // Move the slider forward or backward by 1 item.
	// function moveSlider(direction) {
	// 	sly.slideBy(direction === 'right' ? 1 : -1);
	// 	checkSliderButtons();
	// }

	// // Update the slider buttons
	// // If it's at one end or the other, disable that slide button (this will also remove the black fade-out)
	// function checkSliderButtons() {
	// 	var isStart = sly.pos.dest <= sly.pos.start;
	// 	var isEnd = sly.pos.dest >= sly.pos.end;
	// 	var prevButton = $('.carousel-button--prev');
	// 	var nextButton = $('.carousel-button--next');

	// 	prevButton[isStart ? 'addClass' : 'removeClass']('disabled').prop('disabled', isStart)
	// 	nextButton[isEnd ? 'addClass' : 'removeClass']('disabled').prop('disabled', isEnd);
	// }
});