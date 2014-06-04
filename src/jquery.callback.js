/**
 * jquery.callback
 * Creates a global callback function that gets
 * removed from the window object after it has executed.
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

$.callback = function(func, persist){

	// Create callback
	if ($.isFunction(func)) {

		var funcName = $.uid("cb");

		window[funcName] = function(){

			// Destroy itself after callback has been called
			if (!persist) {
				delete window[funcName];
			}

			return func.apply(null, arguments);
		}

		return funcName;
	}

	// Callback method
	if ($.isString(func)) {
		switch (func) {
			case "destroy":
				var funcName = persist;
				delete window[funcName];
				break;
		}
	}
}