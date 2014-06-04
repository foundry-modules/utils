/**
 * jquery.fn.where
 * Filter jQuery elements by data attributes.
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

$.fn.where = $.fn.filterBy = function(key, val, operator) {

	var operator = operator || "=",
		selector = "[data-" + key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase() + operator + val + "]";

	return this.filter(selector);
};
