/**
 * jquery.formSerializers
 * Serializes form values to Object or JSON.
 * Utilities to manipulate html content.
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

$.fn.toObject = $.fn.serializeObject = function() {

	var obj = {};

	$.each($(this).serializeArray(), function(i, prop) {
		if (obj.hasOwnProperty(prop.name)) {
			// Convert it into an array
			if (!$.isArray(obj[prop.name])) {
				obj[prop.name] = [obj[prop.name]];
			}
			obj[prop.name].push(prop.value);
		} else {
			obj[prop.name] = prop.value;
		}
	});

	return obj;
};

$.fn.toJSON = $.fn.serializeJSON = function() {

	return JSON.stringify($(this).serializeObject());
};
