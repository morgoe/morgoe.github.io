$(document).ready(function() {
	InstantClick.on('change', function() {
		// ga('send', 'pageview', location.pathname + location.search);
		// numPagesVisited++;
		// initVisited();
		initExternalLinks();
		// animateIn();
		$(window).resize();
	});

	InstantClick.init();
});