/**
 * jquery.fn.htmlData
 * Utilities to handle data within jQuery elements.
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
 * jquery.fn.htmlData
 * Converts inline data attributes into objects.
 */
$.fn.htmlData = function(prefix) {

    var re = new RegExp("^" + "data-" + (prefix ? prefix + "-" : "") + "(.*)", "i"),
        parts,
        data = {};

    // Extract options from data attributes
    $.each(this[0].attributes, function(i, attr){

        if (attr.specified && (parts = attr.name.match(re)) && parts[1]) {

            var props = parts[1].split("-"),
                i, prop, obj = data; max = props.length - 1;

            for (i=0; i<=max; i++) {
                prop = props[i];
                if (i==max) {
                    obj[prop] = attr.value;
                } else {
                    !obj[prop] && (obj[prop] = {});
                    obj = obj[prop];
                }
            }
        }
    });

    return data;
};

/**
 * jquery.fn.defineData
 * Creates persistent data that cannot be changed.
 */
$.fn.defineData = function(name, value) {

    if (this.data(name)===undefined) {
        this.data(name, value);
    }

    return this;
}