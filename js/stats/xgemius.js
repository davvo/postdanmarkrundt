/*global define, window, console */

define(function (require) {

    "use strict";

    require('lib/xlgemius');

    var StatsHandler = require('./statshandler');

    return StatsHandler.extend({

        doLog: function (eventValue) {
            window.pp_gemius_event(eventValue);
        }

    });

});