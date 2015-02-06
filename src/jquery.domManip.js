/**
 * jquery.fn.domManip
 * Shorthands for common DOM operations.
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

$.fn.tagName = function(){
    return (this[0] || {}).tagName;
};

$.create = function(tagName) {
    return $(document.createElement(tagName));
};

$.fn.editable = function(editable) {
    if ($.isUndefined(editable)) return this.prop("contenteditable")==="true";
    this.prop("contenteditable", editable);
    editable===false && this.removeAttr("contenteditable");
    return this;
}