/**
 * jquery.eventManip
 * Utilities to handle events in jQuery.
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

/**
 * jquery.ns
 * Adds namespace to events.
 * $(el).on($.ns("mousedown keyup keydown", ".foobar"), function(){});
 */
$.ns = function(event, ns) {
    return event.split(" ").join(ns + " ") + ns;
};


/**
 * jquery.getPointerPosition
 * Get pointer position whether it came from mouse or touch events.
 */
$.getPointerPosition = function(event) {

    return event.type.match("touch") ?
        {
            x: event.originalEvent.changedTouches[0].pageX,
            y: event.originalEvent.changedTouches[0].pageY
        } :
        {
            x: event.pageX,
            y: event.pageY
        };
};