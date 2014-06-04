/**
 * jquery.Bloop
 * Binary loop helper.
 * https://github.com/jstonne/jquery.Bloop
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

(function(){

	var Bloop = function(items) {

		this.items = items;
		this.start = 0;
		this.end = items.length - 1;
		this.node = null;
		this.stopped = false;
	};

	$.extend(Bloop.prototype, {

		isLooping: function() {

			if (this.stopped) return false;

			if (Math.abs(this.start - this.end) > 1) {
				this.node = Math.floor((this.start + this.end) / 2);
				return true;
			}

			return false;
		},

		flip: function(flip) {

			if (flip) {
				this.end = this.node - 1;
			} else {
				this.start = this.node + 1;
			}
		},

		stop: function() {
			this.stop = true;
		}
	});


	$.Bloop = function(items){

		return new Bloop(items);
	}

})();
