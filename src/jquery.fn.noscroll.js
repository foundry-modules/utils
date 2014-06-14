/**
 * jquery.fn.noscroll
 * Disable scrollbar on elements
 * with the ability to restore it.
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

    var props = ["overflow", "overflow-x", "overflow-y"];

    $.fn.noscroll = function(lock) {

        if (lock===undefined) lock = true;

        return this.each(function(){

            var el = $(this),
                overflow = el.data("noscroll");

            // No original overflow values was stored before
            if (!overflow && lock) {

                // Get the original overflow values
                overflow = {};
                $.each(props, function(i, prop){
                    overflow[prop] = el.css(prop);
                });

                // Store original values
                el.data("noscroll", overflow);
            }

            if (lock) {
                $.each(props, function(i, prop){
                    el.css(prop, "hidden");
                });
            } else {
                overflow && el.css(overflow);
            }
        });
    };

})();
