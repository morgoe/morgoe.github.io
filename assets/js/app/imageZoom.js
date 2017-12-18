$(document).ready(function() {
	var zooms = [],
	zoomOptions = {
		background: '#EDEFF2',
		margin: 16,
		scrollOffset: 0,
	}

	// $('img').each(function(i) {
	// 	$(this).attr('data-zoom-index', i)
	// 	zooms[i] = mediumZoom(this, zoomOptions)
	// });

	function navigateZoomedImage(direction) {
		var zoomIndex = $('.medium-zoom-image--open').data('zoom-index');

		if (zooms[zoomIndex + direction] !== undefined) {
			$('body').addClass('now-instantZoomedImageNavigation');
		}

		zooms[zoomIndex].hide();

		if (zooms[zoomIndex + direction] !== undefined) {
			zooms[zoomIndex + direction].show();
		}

		setTimeout(function() {
			$('body').removeClass('now-instantZoomedImageNavigation');
		}, 1);
	}

	$(document).keydown(function(e) {
		switch(e.which) {
			case 37: // left
				navigateZoomedImage(-1);
			break;

			case 39: // right
				navigateZoomedImage(1);
			break;

			default: return; // exit this handler for other keys
		}
		e.preventDefault(); // prevent the default action (scroll / move caret)
	});
});