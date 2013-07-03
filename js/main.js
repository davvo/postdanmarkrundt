/*global requirejs, define, L */

requirejs.config({
    shim: {
        'lib/jquery': {
            exports: '$'
        }
    }
});

define(function (require) {

    "use strict";

	require('lib/domReady');
	require('lib/ddr-ecma5');

	var Etape1 = require('Etape1'),
		Etape2 = require('Etape2'),
		Etape3 = require('Etape3'),
		Etape4 = require('Etape4'),
		Etape5 = require('Etape5'),
		Etape6 = require('Etape6'),

        $ = require('lib/jquery');

	var map = L.map('map', {
		attributionControl: false,
        zoomControl: false
	}).setView([55.80475, 10.37197], 8);

    new L.Control.Zoom({
        'position': 'bottomleft'
    }).addTo(map);

    var url = 'http://{s}.eniro.no/geowebcache/service/tms1.0.0/{layer}/{z}/{x}/{y}.{ext}';
    var options = {
        subdomains: ['map01', 'map02', 'map03', 'map04'],
        tms: true
    };

    var mapLayer = L.tileLayer(url, L.Util.extend({
        layer: 'map2x',
        ext: 'png',
        maxZoom: 17
    }, options));

    var aerialLayer = L.tileLayer(url, L.Util.extend({
        layer: 'aerial',
        ext: 'jpeg',
        maxZoom: 20
    }, options));

    var etape = [
        new Etape1(),
        new Etape2(),
        new Etape3(),
        new Etape4(),
        new Etape5(),
        new Etape6()
    ];

    var overlays = {
        "1. etape, Silkeborg-Varde, 180 km": etape[0],
        "2. etape, Ribe–Sønderborg, 180 km": etape[1],
        "3. etape, Sønderborg–Vejle, 200 km": etape[2],
        "4. etape, Høng–Asnæs Indelukke, 105 km": etape[3],
        "5. etape, Holbæk, 12,1 km enkeltstart": etape[4],
        "6. etape, Roskilde–Frederiksberg, 165 km": etape[5]
    };

    mapLayer.addTo(map);

    Object.keys(overlays).forEach(function (name) {
        map.addLayer(overlays[name]);
    });

    $('#layerSelect form input[name=baselayer]').change(function (evt) {
        switch ($(evt.target).val()) {
        case 'map':
            map.addLayer(mapLayer);
            map.removeLayer(aerialLayer);
            break;
        case 'aerial':
            map.addLayer(aerialLayer);
            map.removeLayer(mapLayer);
            break;
        default:
            break;
        }
    });

    $('#layerSelect ol a').click(function (evt) {
        evt.preventDefault();
        var index = $(evt.target).attr('data-etape') - 1;
        map.fitBounds(etape[index].getBounds());
    });

});