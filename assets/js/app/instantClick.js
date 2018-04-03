$(document).ready(function() {
	InstantClick.on('change', function() {
		$(window).off('resize', initMasonry);
		// ga('send', 'pageview', location.pathname + location.search);
		// numPagesVisited++;
		// initVisited();
		initExternalLinks();
		initCarousels();
		expandSVGs();
		$(window).on('resize', initMasonry).resize();
	});

	InstantClick.init();
});