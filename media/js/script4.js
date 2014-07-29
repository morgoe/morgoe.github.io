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

	function setBokeh() {
		$('.item.walker').each(function() {
			var randomSize = (2 * Math.random()) + 1;
			var transform = 'translate3d(-50%, -50%, 130px) scale3d(' + randomSize + ',' + randomSize + ',1)';
			$(this).find('div').css('opacity', 0.75*Math.random()).css('transform', transform);
		});
		setTimeout(function() {
			setBokeh()
		}, 7500);
	}

	$('#fullpage').fullpage({
		anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {
			if (anchorLink == 'secondPage') {
				
			}
		}
	});

	$('button').click(function() {
			$.fn.fullpage.moveSectionDown();
	});
	$('body').one('mousemove', function() {
			$('.js-animate-1').addClass('animate-after');
			$('.js-animate-2').addClass('animate-after');
			$('.js-animate-3').addClass('animate-after');
			$('.js-animate-4').addClass('animate-after');
	} );



	var world = new Burner.World($('#bokeh')[0], {
			gravity: new Burner.Vector(),
			c: 0
		});	

	Burner.System.init(function() {
		var colors = ['#cd9859', '#b49f8e', '#935832', '#d9a053', '#e8c071', '#966e3d', '#8a251a', '#2d362c'];
		var density = $(window).height() * $(window).width()/ 100000;
		for (var i = 0; i < density; i++) {
			this.add('Walker', {
				color: [255,255,255],
				borderWidth: 0,
				perlinSpeed: 0.0001,
				// perlinSpeed: 0,
				remainsOnScreen: true,
				perlinAccelLow: -1,
				perlinAccelHigh: 1,
				width: 0,
				height: 0
			});
		}
		$('.item.walker').each(function() {
			$(this).append('<div style="background-image: url(media/images/particles/particle' + Math.floor(1 + 8*Math.random()) + '.png)"></div>');
		});

	}, world);
	
	setTimeout(function() {
		setBokeh();
	}, 10);
});