/**
 * jquery.fn.locate
 * Locate a related child element based on data attribute.
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

$.fn.locate = function(key) {

    var prefix = "data";

    $.each(this[0].attributes, function(i, attr){
        if (attr.specified && attr.value==="$") {
            prefix = attr.name;
            return false;
        }
    });

    return this.find("[" + prefix + "-" + key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase() + "]");
};
