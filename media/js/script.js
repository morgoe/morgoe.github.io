/* Fast Click Initialise */
$(function() {
    FastClick.attach(document.body);
});

/*-----------------------------------------------------------------------------------*/
/*	MENU HOVER ON TOUCH-able DEVICE
/*-----------------------------------------------------------------------------------*/
jQuery(function($){
	//Fix dropdown bootstrap
	$('body').on('touchstart.dropdown', '.dropdown-menu', function (e) { e.stopPropagation(); })
				.on('touchstart.dropdown', '.dropdown-submenu', function (e) {e.preventDefault();});
	if( 'ontouchstart' in document.documentElement ) {
		var clickable = null;
		$('#access .menu-item').each(function(){
			var $this = $(this);

			if( $this.find('ul.sub-menu').length > 0 ) {

				$this.find('a:first').unbind('click').bind('touchstart',function(event){
					if( clickable != this ) {
						clickable = this;
						event.preventDefault();
					} else {
						clickable = null;
					}
				});
			}
		});
	}
});


var whatAmI = new Array();
whatAmICounter = 0;
whatAmI[0] = "a web developer";
whatAmI[1] = 'currently employed at <a href="//www.stackla.com" target="_blank">Stackla</a>';
whatAmI[2] = 'based in Sydney';
whatAmI[3] = 'always interested in cool projects, so drop me a line: <a href="mailto:morgancarter1@gmail.com">morgancarter1@gmail.com</a>';
whatAmI[4] = 'listening to <a href="http://open.spotify.com/artist/163tK9Wjr9P9DmM0AVK7lm" target="_blank">Lorde</a> at the moment';
whatAmI[5] = 'trying to find a new pair of appropriately hipster glasses';
whatAmI[6] = 'eating lasagne made by <a href="https://twitter.com/Amelia_Lewis";target="_blank">@Amelia_Lewis</a>. It\'s pretty good';

var widgetDescriptionStuff = "Here's some stuff I'm into, powered by <a href='//www.stackla.com' target='_blank'>Stackla</a>. I don't moderate this, so there's probably design stuff, fashion, porn, music, test posts and the occasional selfie. Enjoy! Alternatively, check out my <a class='js-filter-portfolio important'>portfolio</a>!";
var widgetDescriptionPortfolio = "These are some of the things I've made over the years - some are designed, others just coded up. Check out the descriptions in each for more info! If you're interested in working with me, <a class='important' href='mailto:morgancarter1@gmail.com'>drop me a line</a>. Otherwise, when you're bored, go check out some more <a class='js-filter-stuff'>stuff I like</a>.";

jQuery('.js-what-am-i-refresh').click(function() {
	whatAmICounter++;
	jQuery('.js-what-am-i').html(whatAmI[whatAmICounter%whatAmI.length]);
	var spinnything = jQuery(this);
	spinnything .addClass('animate');
	setTimeout(function() {
		spinnything .removeClass('animate');
	}, 1000);
});
jQuery(document).ready(function() {
	window.scrollTo(0, 0);
	resizeHero();

	jQuery('.js-widget-description').html(widgetDescriptionStuff);

	var attachClickFn = function() {
		jQuery('.js-filter-portfolio').click(function() {
			StacklaFluidWidget.changeFilter(75,960);
			jQuery('.js-widget-description').html(widgetDescriptionPortfolio);
			attachClickFn();
		});
		jQuery('.js-filter-stuff').click(function() {
			StacklaFluidWidget.changeFilter(75,957);
			jQuery('.js-widget-description').html(widgetDescriptionStuff);
			attachClickFn();
		});
	}
	attachClickFn();
});
jQuery(window).load(function () {
	resizeHero();
});
jQuery(window).resize(function() {
	resizeHero();
});
jQuery(window).scroll(function() {
	var scrollPos = 3 * jQuery(window).scrollTop()/jQuery(window).height();
	jQuery('.hero-bg').css('opacity', scrollPos);
	jQuery('.hero-text').css('opacity', 1-scrollPos);
});
function resizeHero() {
	var heroHeight = jQuery('.js-hero-height-one').height() + jQuery('.js-hero-height-two').height() + jQuery('.js-hero-height-three').height();
	jQuery('.js-hero-content').height(heroHeight);
	jQuery('.js-hero-content').width(jQuery('.js-hero').width());
	jQuery('.js-hero').outerHeight(jQuery(window).height());
};

jQuery('.js-scroll-down').click(function() {
	jQuery('html,body').animate({
		scrollTop: jQuery('.js-scroll-to').offset().top
	}, 400);
});