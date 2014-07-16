/**
 * jquery.classManip
 * Utilities to manipulate classnames.
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
 * $.fn.switchClass
 * Swaps a classname for another classname that bears identical prefix.
 *
 * $("div").switchClass("state-busy")l;
 *
 * Before:
 * <div class="state-idle"></div>
 *
 * After:
 * <div class="state-busy"></div>
 */
$.fn.switchClass = function(classname, delimiter){

	var delimiter = delimiter || "-",
		prefix = classname.split(delimiter)[0] + delimiter,
		length = prefix.length;

	return this.each(function(){

		var $el = $(this),
			classnames =
				$.map($el.attr("class").split(' '), function(classname){
					return (classname.slice(0, length)==prefix || classname=="") ? null : classname;
				});
			classnames.push(classname);

		$el.attr("class", classnames.join(" "));
	});
};

/**
 * $.fn.activateClass
 * Add classname on current set of elements and
 * remove classname on previous set of elements.
 *
 * $(".item").find("[data-id=64]").activateClass("active");
 *
 * Before:
 * <div class="item active" data-id="62"></div>
 * <div class="item" data-id="63"></div>
 * <div class="item" data-id="64"></div>
 *
 * After:
 * <div class="item" data-id="62"></div>
 * <div class="item" data-id="63"></div>
 * <div class="item active" data-id="64"></div>
 */
$.fn.activateClass = function(className) {
    this.prevObject.removeClass(className);
    return $(this).addClass(className);
};