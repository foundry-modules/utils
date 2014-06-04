/**
 * jquery.fn.checked
 * Checked/unchecked event handler for checkbox & radio button.
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

$.fn.checked = function(checked, unchecked) {

	// Return checked value if no arguments are given;
	if (arguments.length < 1)
		return this.is(':checked');

	this.each(function(i) {

		var input = $(this);

		if (typeof checked == "boolean") {
			input.attr('checked', checked).trigger('change');
			return;
		}

		if (input.is('input[type=checkbox]') || input.is('input[type=radio]')) {
			input
				.off('change.checked')
				.on('change.checked', function() {
					try {
						return (input.is(':checked')) ? checked.apply(input) : unchecked.apply(input);
					} catch(e) {};
				});
		}
	});

	return this;
};
