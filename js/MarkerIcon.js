/*global define */


define(function (require) {

	"use strict";

	var L = require('lib/leaflet');

	return L.Icon.extend({
	    options: {
			iconSize:     [51, 63],
			iconAnchor:   [5, 52],
			popupAnchor:  [18, -56]
	    }
	});

});