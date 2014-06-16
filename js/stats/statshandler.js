/*global define, window, console */

define(function (require) {

    "use strict";

    var L = require('lib/leaflet');

    return L.Class.extend({

        initialize: function (map, options) {
            this.map = map;
            this.options = options;

            var self = this;

            if (options.page) {
                map.on('ready', function (evt) {
                    self.log(evt.layer, options.page);
                });
            }
        },

        log: function (key, options) {
            var eventValue = options[key] || options.defaultEvent;
            if (eventValue) {
                this.doLog(eventValue);
            }
        },

        doLog: function () {
            throw new Error("Implement doLog in subclass!");
        }

    });

});