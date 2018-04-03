function initMasonry() {
	var colWidth = $('.js-masonry .grid-item').outerWidth();
	$('.js-masonry').masonry({
		// options
		itemSelector: '.grid-item',
		columnWidth: colWidth
	});
}