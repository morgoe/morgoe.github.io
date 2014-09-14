var map;
var mapDataProvider;
var filters = { "south_america" : 694, "north_america" : 1011, "asia" : 695, "europe" : 1012, "australia" : 1010, "africa" : 691 };
var receivedFilterFromParent = false;

/* Tile Layout Manipulation */
Callbacks.prototype.onCompleteJsonToHtml = function(tileObject, t) {
    $(tileObject).find('.tile-image-wrapper').prependTo($(tileObject).find('.tile-content'));
    $(tileObject).find('.tile-video-wrapper').prependTo($(tileObject).find('.tile-content'));
    
    /* User Info */
    var name = $(tileObject).find('.tile-user-name').text();
    var handle = $(tileObject).find('.tile-user-handle').text();
    var time = $(tileObject).find('.tile-timestamp').text();
    $(tileObject).find('.tile-user-name').html('<strong>' + name + '</strong> ' + handle);
    $(tileObject).find('.tile-user-handle').html(time + ' ago via <i class="icon-' + t.source + '"></i> <span class="tile-source-name">' + t.source + '</span>');
    
    /* Wrapper for animation */
    var wrapper = $('<div class="tile-wrapper clearfix"></div>');
    $(tileObject).find('.tile-content').appendTo(wrapper);
    $(tileObject).append(wrapper);
    
    return tileObject;
};

/* Font Loading */
WebFontConfig = {
    custom: {
        families: ['Univers']
    },
    fontactive: function(familyName, fvd) {
        Widget.resizeTiles();
    }
};

/* Tile Animation */
var numTiles = 0;
Callbacks.prototype.onBeforeRenderIsotope = function(containerWidth, maxTileWidth, margin, numColumns, currentTileWidth) {
    numTiles = $('.tile').length;
    return { tileWidth: currentTileWidth, numColumns: numColumns };
}
Callbacks.prototype.onCompleteAddingToDom = function(tile) {
    var time = ($(tile).index() - numTiles) * 50;
    setTimeout(function() {
        $(tile).find('.tile-wrapper').addClass('expand');
    }, time);
};

/* Message Listener */
function receiveMessage(e) {
    try {
        if (window.self !== window.top) {
            var data = JSON.parse(e.data);
            if (data.action == 'setRegion') {
                receivedFilterFromParent = true;
                map.clickMapObject(map.getObjectById(data.countryId));
            }
        }
    } catch (e) {}
}
if (!window.addEventListener) {
    window.attachEvent('onmessage', receiveMessage);
} else {
    window.addEventListener('message', receiveMessage, false);
}










/*
 * AMMAPS
 */

function handleGoHome() {
    alert('go home clicked');
    map.dataProvider = mapDataProvider;
    map.validateNow();
}

$(document).on('click', '.expand-click-through', function() {
    Widget.expandedTile($(this).attr('id'));
})

runAMMaps = function() {
    map = new AmCharts.AmMap();
    map.pathToImages = "//stackla-web-assets.s3.amazonaws.com/morgan.stackla.com/kathmandu/ammaps/images/";

    map.areasSettings = {
        autoZoom: true,
        outlineColor: '#7a9a01',
        rollOverOutlineColor: "#fff",
        outlineThickness: 0.1,
        selectedColor: "#ffcd38",
        selectedOutlineColor: '#ffcd38',
        color: "#7a9a01"
    };

    map.zoomControl = {
        buttonFillColor: "#a4002e",
        buttonRollOverColor: "#ea700c",
        maxZoomLevel: 10,
        bottom: 10,
        left: 0
    };

    mapDataProvider = {
        mapVar: AmCharts.maps.regionsLow,
        areas: [
            {
                id: "russia",
                passZoomValuesToTarget: true
            },
            {
                id: "new_zealand",
                passZoomValuesToTarget: true
            },
            {
                id: "united_kingdom",
                passZoomValuesToTarget: true
            },
            {
                id: "nordic_countries",
                passZoomValuesToTarget: true
            },
            {
                id: "eastern_asia",
                passZoomValuesToTarget: true
            },
            {
                id: "southern_asia",
                passZoomValuesToTarget: true
            },
            {
                id: "north_america",
                passZoomValuesToTarget: true
            },
            {
                id: "northern_africa",
                passZoomValuesToTarget: true
            },
            {
                id: "western_europe",
                passZoomValuesToTarget: true
            },
            {
                id: "australia",
                passZoomValuesToTarget: true
            },
            {
                id: "antarctica",
                passZoomValuesToTarget: true
            },
            {
                id: "south_america",
                passZoomValuesToTarget: true
            },
            {
                id: "eastern_europe",
                passZoomValuesToTarget: true
            },
            {
                id: "southern_africa",
                passZoomValuesToTarget: true
            },
            {
                id: "western_asia",
                passZoomValuesToTarget: true
            }
        ]
        // mapVar: AmCharts.maps.continentsLow,
        // areas: [
            // {
            //     id: "northern_africa",
            //     passZoomValuesToTarget: true},
            // {
            //     id: "asia",
            //     passZoomValuesToTarget: true},
            // {
            //     id: "australia",
            //     passZoomValuesToTarget: true},
            // {
            //     id: "europe",
            //     passZoomValuesToTarget: true},
            // {
            //     id: "north_america",
            //     passZoomValuesToTarget: true},
            // {
            //     id: "south_america",
            //     passZoomValuesToTarget: true}
        // ]
    };

    map.dataProvider = mapDataProvider;

    // monitor when home icon was clicked and also go to continents map
    map.addListener("homeButtonClicked", handleGoHome);
    
    map.write("mapdiv");
    
    /* Change filter on click country */
    map.addListener("clickMapObject", function (event) {
        if (event.mapObject.id !== undefined) {
            var countryId = event.mapObject.id;
            var filterId = filters[countryId];
            setTimeout(function() {
                Widget.changeFilterCallback(filterId);    
            }, 1000);
            
            if (receivedFilterFromParent) {
                receivedFilterFromParent = false;   
            } else { // Change the parent's dropdown
                var data = {};
                data.countryId = countryId;
                data.action = 'changeFilter';
                parent.postMessage(JSON.stringify(data), '*');
            }
        }
    });
};







/* Add scripts to DOM */
$(document).ready(function() {
    $('<div id="mapdiv"></div>').prependTo($('body'));
    $('head').append('<link rel="stylesheet" href="//stackla-web-assets.s3.amazonaws.com/morgan.stackla.com/kathmandu/ammaps/ammap.css" type="text/css" />');
    $('head').append('<link rel="stylesheet" href="//assetscdn.stackla.com/media/css/widget/font-awesome/css/font-awesome.css" type="text/css" />');
    $.getScript("//stackla-web-assets.s3.amazonaws.com/morgan.stackla.com/kathmandu/ammaps/ammap.js", function() {
        // $.getScript("//stackla-web-assets.s3.amazonaws.com/morgan.stackla.com/kathmandu/ammaps/maps/js/continentsLow.js", function() {
        $.getScript("//dev.stackla.local/morgan/kathmandu/regionsLow.js", function() {
            runAMMaps();
        });
    });
});