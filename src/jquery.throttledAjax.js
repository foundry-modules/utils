/**
 * jquery.throttledAjax
 * jQuery AJAX with throttling.
 *
 * Requires jquery.Threads.
 *
 * Part of the jQuery Utils family:
 * https://github.com/jstonne/jquery.utils
 *
 * Copyright (c) 2014 Jensen Tonne
 * http://jstonne.me
 *
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

(function(){

var self = $.Ajax = function(options) {

    // Start ajax manually
    options.autostart = false;

	var ajax = $.ajax(options);

    self.queue
        .addDeferred(function(queue){

            // Start ajax now
            ajax.send();

    		// Mark this queue as resolved
    		setTimeout(queue.resolve, self.interval);
    	});

	return ajax;
}

self.queue    = $.Threads({threadLimit: 1});
self.interval = 1200;

// Do not throttle ajax calls on Joomla 3.2 and above.
var version = $.joomla.version.split("."),
    majorVersion = version[0],
    minorVersion = version[1];

if (majorVersion >= 3 && minorVersion >= 2) {
    self.interval = 0;
}

})();