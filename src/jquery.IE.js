/**
 * jquery.IE
 * Returns the current IE version.
 *
 * Based on Padolsey's IE detection script.
 * https://gist.github.com/padolsey/527683
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

$.IE = (function(){

    // It seems Padolsey's IE detection script
    // doesn't work on IE10 and 11.
    var ua = navigator.userAgent;
    if (ua.match(/MSIE 9/)) return 9;
    if (ua.match(/MSIE 10/)) return 10;
    if (ua.match(/rv:11/i)) return 11;

    var undef,
        v = 3,
        div = document.createElement('div'),
        all = div.getElementsByTagName('i');

    while (
        v++,
        div.innerHTML = '<!--[if gt IE ' + v + ']><i></i><![endif]-->',
        all[0]
    );

    return v > 4 ? v : undef;

}());