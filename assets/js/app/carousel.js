function initCarousels() {
	$('.carousel-frame').each(function() {
		// var $figure = $('.carousel-frame').closest('.carousel-figure');
		var $figure = $(this).closest('.carousel-figure');
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

		// sly.on('pause', function() {
		// 	sly.set('cycleBy', null);
		// });

		if ($figure.find('.js-carouselCaption').length) {
			sly.on('move', function(eventName, itemIndex) {
				var itemIndex = Math.round(sly.pos.dest / sly.pos.end * (sly.items.length-1));
				$figure.find('.js-carouselCaption').text($figure.find('.carousel-listItem').eq(itemIndex).find('.js-carouselItemCaption').text());
			});
		}

		$(window).resize(function() {
			sly.reload();	
		});
	});
}