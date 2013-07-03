/*global define, L */

define(function (require) {

    "use strict";

	require('lib/domReady');
	require('lib/ddr-ecma5');

	var Etape1 = require('Etape1'),
		Etape2 = require('Etape2'),
		Etape3 = require('Etape3'),
		Etape4 = require('Etape4'),
		Etape5 = require('Etape5'),
		Etape6 = require('Etape6');

	var map = L.map('map', {
		attributionControl: false,
        zoomControl: false
	}).setView([56.10000, 10.35000], 7);

    new L.Control.Zoom({
        'position': 'bottomleft'
    }).addTo(map);

    var url = 'http://{s}.eniro.no/geowebcache/service/tms1.0.0/{layer}/{z}/{x}/{y}.{ext}';
    var options = {
        subdomains: ['map01', 'map02', 'map03', 'map04'],
        tms: true
    };

    var mapLayer = L.tileLayer(url, L.Util.extend({
        layer: 'map',
        ext: 'png',
        maxZoom: 17
    }, options));

    var aerialLayer = L.tileLayer(url, L.Util.extend({
        layer: 'aerial',
        ext: 'jpeg',
        maxZoom: 20
    }, options));

    var baseLayers = {
        'Kort': mapLayer,
        'Luftfoto': aerialLayer
    };

    var overlays = {
        "1. etape, Silkeborg-Varde, 180 km": new Etape1(),
        "2. etape, Ribe–Sønderborg, 180 km": new Etape2(),
        "3. etape, Sønderborg–Vejle, 200 km": new Etape3(),
        "4. etape, Høng–Asnæs Indelukke, 105 km": new Etape4(),
        "5. etape, Holbæk, 12,1 km enkeltstart": new Etape5(),
        "6. etape, Roskilde–Frederiksberg, 165 km": new Etape6()
    };

    mapLayer.addTo(map);

    Object.keys(overlays).forEach(function (name) {
        map.addLayer(overlays[name]);
    });

});