/**
 * jquery.download
 * Simulate a download programatically.
 *
 * The download url should return the correct
 * Content-Type in the response headers to work.
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

$.download = function(src) {
    return $("<iframe>").hide().appendTo("body").bind("load", function(){$(this).remove()}).attr("src", src);
};