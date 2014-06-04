/**
 * jquery.Enqueue
 * Execute only the last added callback.
 *
 * Part of the jQuery Utils family:
 * https://github.com/jstonne/jquery.utils
 *
 * Copyright (c) 2014 Jensen Tonne & Jason Rey
 * http://jstonne.me
 *
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

(function(isFunction) {

	var Enqueue = function() {
		this.lastId = 0;
	};

	Enqueue.prototype.queue = function(filter) {

 		var self = this,
 			id = $.uid();
 			self.lastId = id;

		return function() {

			if (self.lastId===id) {

				var args = arguments,
					args = (isFunction(filter)) ? filter.apply(this, args) : args;

				return (isFunction(self.fn)) ? self.fn.apply(this, args) : args;
			}
		}
	};

	$.Enqueue = function(fn) {

		var self = new Enqueue();

		if (isFunction(fn)) self.fn = fn;

		var func = $.proxy(self.queue, self);

		func.reset = function() {
			self.lastId = 0;
		};

		return func;
	};
})($.isFunction);
