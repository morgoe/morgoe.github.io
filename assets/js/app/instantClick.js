$(document).ready(function() {
	InstantClick.on('change', function() {
		// ga('send', 'pageview', location.pathname + location.search);
		// numPagesVisited++;
		// initVisited();
		initExternalLinks();
		initCarousels();
		expandSVGs();
		initMasonry();
		// animateIn();
		$(window).resize();
	});

	InstantClick.init();
});