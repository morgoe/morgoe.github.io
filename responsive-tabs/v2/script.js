$(document).ready(function() {
	selectTab = function($tabsList, $tab) {
		if ($tab.parent('li').hasClass('dropdown-wrapper')) {
			$tab.siblings('.dropdown').toggleClass('visible');
			$tab.toggleClass('open');
		} else {
			$tabsList.find('.dropdown').removeClass('visible');
			$tabsList.find('.dropdown-wrapper > a').removeClass('open');
			$tabsList.find('a').removeClass('selected');
			$tab.addClass('selected');
			if ($tab.parent('li').parent().hasClass('dropdown')) {
				$tabsList.find('.dropdown-wrapper > a').addClass('selected');
			}
			// if ($tab.parent('li').parent().hasClass('dropdown')) {
			// 	$tab.parent('li').prependTo($tabsList);
			// 	responsiveTabs($tabsList);
			// }
		}
	}

	responsiveTabs = function($tabsList) {
		$tabsWrapper = $tabsList.closest('.tabs-wrapper');
		$tabsDropdown = $tabsList.find('.dropdown');
		if ($tabsList.width() + $tabsList.children('li:first-child').width() < $tabsWrapper.width()) {
			$tabsDropdown.find('li:last-child').insertBefore($tabsDropdown.parent('li'));
		}
		while ($tabsList.width() > $tabsWrapper.width()) {
			$tabsList.children('li:nth-last-child(2)').appendTo($tabsDropdown);
			$tabsDropdown.parent('li').show();
		}
		if ($tabsDropdown.children().length === 0) {
			$tabsDropdown.parent('li').hide();
		}
	}

	initTabs = function($tabsList) {
		$dropdown = $('<li class="dropdown-wrapper"><a>More...</a><ul class="dropdown"></ul></li>');
		$tabsList.append($dropdown);
		$tabsList.find('a').click(function() {
			selectTab($tabsList, $(this));
		});
		$(window).resize(function() {
			responsiveTabs($tabsList);
		});
		responsiveTabs($tabsList);
	}

	initTabs($('.tabs'));
});