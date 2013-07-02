/*global L */

define(function (require) {

	function toLineString(coords) {
		return coords.split(' ').map(function (coord) {
			var lnglat = coord.split(',');
			return [parseFloat(lnglat[0]), parseFloat(lnglat[1])];
		});		
	}

	var StartIcon = L.Icon.extend({
	    options: {
	    	iconUrl: 'img/dd-start.png',
	        iconSize:     [20, 34],
	        iconAnchor:   [10, 34],
	        popupAnchor:  [0, -40]
	    }
	});

	var StopIcon = L.Icon.extend({
	    options: {
	    	iconUrl: 'img/dd-end.png',
	        iconSize:     [20, 34],
	        iconAnchor:   [10, 34],
	        popupAnchor:  [0, -40]
	    }
	});

	return L.GeoJSON.extend({

		initialize: function () {

			var geojson = [];

			geojson.push({
				'type': 'Feature',
				'properties': {
					'popupContent': this.start.popupContent,
					'type': 'start'
				},
				'geometry': {
					'type': 'Point',
					'coordinates': this.start.coordinates
				}
			});

			geojson.push({
				'type': 'Feature',
				'properties': {
					'popupContent': this.stop.popupContent,
					'type': 'stop'
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
					var options = {};
					if (feature.properties.type === 'start') {
						options.icon = new StartIcon(latlng)
					} else if (feature.properties.type === 'stop') {
						options.icon = new StopIcon(latlng)
			        }
			        return L.marker(latlng, options);
			    }				
			};


			L.GeoJSON.prototype.initialize.call(this, geojson, options);
		}

	});

});