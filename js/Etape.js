/*global define */

define(function (require) {

    "use strict";

    var L = require('lib/leaflet'),
        MarkerIcon = require('./MarkerIcon');

    function toLineString(coords) {
        return coords.split(' ').map(function (coord) {
            var lnglat = coord.split(',');
            return [parseFloat(lnglat[0]), parseFloat(lnglat[1])];
        });
    }

    return L.GeoJSON.extend({

        initialize: function () {

            this.bounds = new L.LatLngBounds();
            this.bounds.extend(L.latLng(this.start.coordinates[1], this.start.coordinates[0]));
            this.bounds.extend(L.latLng(this.stop.coordinates[1], this.stop.coordinates[0]));

            var geojson = [];

            geojson.push({
                'type': 'Feature',
                'properties': {
                    'popupContent': this.start.popupContent,
                    'iconUrl': this.start.iconUrl
                },
                'geometry': {
                    'type': 'Point',
                    'iconUrl': this.start.iconUrl,
                    'coordinates': this.start.coordinates
                }
            });

            geojson.push({
                'type': 'Feature',
                'properties': {
                    'popupContent': this.stop.popupContent,
                    'iconUrl': this.stop.iconUrl
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': this.stop.coordinates
                }
            });

            geojson.push({
                'type': 'Feature',
                'properties': {
                    'popupContent': this.track.popupContent
                },
                'geometry': {
                    'type': 'LineString',
                    'coordinates': toLineString(this.track.coordinates)
                }
            });

            if (this.circuit) {
                geojson.push({
                    'type': 'Feature',
                    'properties': {
                        'popupContent': this.circuit.popupContent
                    },
                    'geometry': {
                        'type': 'LineString',
                        'coordinates': toLineString(this.circuit.coordinates)
                    }
                });
            }

            var self = this;

            var options = {
                onEachFeature: function (feature, layer) {
                    var content = [feature.properties.popupContent];
                    if (self.moreInfo) {
                        content.push('<br/><a target="_blank" href="' + self.moreInfo + '">Mere Information</a>');
                    }
                    layer.bindPopup(content.join(''));
                },
                pointToLayer: function (feature, latlng) {
                    return L.marker(latlng, {
                        icon: new MarkerIcon({
                            iconUrl: feature.properties.iconUrl
                        })
                    });
                }
            };


            L.GeoJSON.prototype.initialize.call(this, geojson, options);
        }

    });

});