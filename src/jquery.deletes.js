/**
 * jquery.deletes
 * Remove properties from objects.
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

$.deletes = function(obj, props) {
    $.each(props, function(i, prop){
        delete obj[prop];
    });
};
