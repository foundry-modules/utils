/**
 * jquery.number
 * Utilities to deal with numbers.
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

$.isNumeric = function(n) {
	// http://stackoverflow.com/questions/18082/validate-numbers-in-javascript-isnumeric
	return !isNaN(parseFloat(n)) && isFinite(n);
};

$.rotateNumber = function(n, min, max, offset) {

	if (offset===undefined) {
		offset = 0;
	}

	n += offset;

	if (n < min) {
		n += max + 1;
	} else if (n > max) {
		n -= max + 1;
	}

	return n;
};