/*global requirejs, define, window, evt */

requirejs.config({
    baseUrl: 'js',
    shim: {
        'lib/jquery': {
            exports: '$'
        },
        'lib/leaflet': {
            exports: 'L'
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

        $ = require('lib/jquery'),
        L = require('lib/leaflet');

    var zoomLevel = 8;
    if ($(window).width() < 590) {
        zoomLevel = 6;
    }

    var map = L.map('map', {
        attributionControl: false,
        zoomControl: false
    }).setView([55.80475, 10.37197], zoomLevel);

    new L.Control.Zoom({
        'position': 'bottomleft'
    }).addTo(map);


    function getTileVersion(type, callback) {
        $.ajax({
            url: 'http://map.krak.dk/api/tileversion',
            data: {
                format: 'json',
                type: type
            },
            dataType: 'jsonp'
        }).done(callback);
    }

    var url = 'http://{s}.eniro.no/geowebcache/service/tms1.0.0/{layer}/{z}/{x}/{y}.{ext}?v={tileVersion}';
    var options = {
        subdomains: ['map01', 'map02', 'map03', 'map04'],
        tms: true,
        minZoom: 3
    };

    var mapLayer, aerialLayer;

    getTileVersion('map', function (res) {
        mapLayer = L.tileLayer(url, L.Util.extend({
            layer: 'map2x',
            ext: 'png',
            maxZoom: 17,
            tileVersion: res.tileVersion
        }, options)).addTo(map);
    });

    getTileVersion('aerial', function (res) {
        aerialLayer = L.tileLayer(url, L.Util.extend({
            layer: 'aerial',
            ext: 'jpeg',
            maxZoom: 20,
            tileVersion: res.tileVersion
        }, options));
    });

    var etape = [
        new Etape1(),
        new Etape2(),
        new Etape3(),
        new Etape4(),
        new Etape5(),
        new Etape6()
    ];

    etape.forEach(function (layer) {
        map.addLayer(layer);
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

    function layerselecthandler(index) {
        var layer = etape[index];

        etape.forEach(function (etap) {
            etap.setStyle(function () {
                return {
                    color: 'blue',
                    weight: 5,
                    opacity: 0.5
                };
            });
        });

        layer.setStyle(function () {
            return {
                color: '#3c008e',
                weight: 7,
                opacity: 0.6
            };
        });

        map.fitBounds(layer.getBounds());
    }

    $('#layerSelect ol a').click(function (evt) {
        evt.preventDefault();
        var index = $(evt.target).attr('data-etape') - 1;
        layerselecthandler(index);
    });

    $('#layerSelectSmall').change(function (evt) {
        evt.preventDefault();
        var index = evt.target.selectedIndex;
        layerselecthandler(index);
        evt.target.blur();
    });
});