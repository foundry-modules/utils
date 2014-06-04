/**
 * jquery.Threads
 * A manager that controls threads a.k.a. execution of function simultaneously.
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

(function() {

	var Threads = function(options) {
		this.threads = [];
		this.threadCount = 0;
		this.threadLimit = options.threadLimit || 1;
		this.threadDelay = options.threadDelay || 0;
	}

	$.extend(Threads.prototype, {

		add: function(thread, type) {

			if (!$.isFunction(thread)) return;

			thread.type = type || "normal";

			if (type=="deferred") {
				thread.deferred = $.Deferred().always($.proxy(this.next, this));
			}

			this.threads.push(thread);

			this.run();
		},

		addDeferred: function(thread) {

			return this.add(thread, "deferred");
		},

		next: function() {

			// Reduce thread count
			this.threadCount--;

			// And see if there's anymore task to run
			this.run();
		},

		run: function() {

			var self = this;

			setTimeout(function(){

				if (self.threads.length < 1) return;

				if (self.threadCount < self.threadLimit) {

					self.threadCount++;

					var thread = self.threads.shift();

					// Wrap in a try catch in case if the thread
					// throws an error it doesn't break our chain.
					try { thread.call(thread, thread.deferred); }
					catch(e) { console.error(e); }

					!thread.deferred && self.next();
				}

			}, self.threadDelay);
		}
	});

	$.Threads = function(options) {

		return new Threads(options);
	};

})();
