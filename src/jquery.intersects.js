/**
 * jquery.intersects
 * jquery.fn.intersectsWith
 *
 * Determines if an area intersects with another area.
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

$.intersects = function(a, b) {

	if ($.isArray(b)) {
	   b = {top: b.y, left: b.x, bottom: b.y, right: b.x}
	}

	return (
	   b.left <= a.right  &&
	   a.left <= b.right  &&
	   b.top  <= a.bottom &&
	   a.top  <= b.bottom
	);
};

$.fn.intersectsWith = function(top, left, width, height) {

	// TODO: intersectsWith(element)

	var offset = this.offset(),

	   reference = {
	        top   : offset.top,
	        left  : offset.left,
	        bottom: offset.top  + (sourceHeight = this.height()),
	        right : offset.left + (sourceWidth  = this.width()),
	        width : sourceWidth,
	        height: sourceHeight
	   },

	   subject = {
	        top   : top,
	        left  : left,
	        bottom: top  + (height || (height = 0)),
	        right : left + (width  || (width  = 0)),
	        width : width,
	        height: height
	   };

	return ($.intersects(reference, subject)) ? {reference: reference, subject: subject} : false;
};