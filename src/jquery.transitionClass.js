/*!
 * jquery.transitionClass.
 * jQuery functions to invoke classnames that has CSS3 transitions.
 *
 * Copyright (c) 2014 Jensen Tonne
 * http://www.jstonne.com
 *
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

(function(){

// addTransitoryClass
$.fn.addTransitoryClass = function(classname, duration) {
    var elem = this.addClass(classname);
    setTimeout(function(){elem.removeClass(classname)}, duration || 1);
    return this;
};

// addClassAfter
// removeClassAfter
var classAfter = function(operation, classname, timer) {
    var elem = this;
    setTimeout(function(){elem[operation+"Class"](classname)}, timer || 50);
    return this;
}

$.fn.addClassAfter = function(classname, timer) {
    return classAfter.call(this, "add", classname, timer);
};

$.fn.removeClassAfter = function(classname, timer) {
    return classAfter.call(this, "remove", classname, timer);
};

// addTransitionClass
// removeTransitionClass
var transitionClass = function(toggle, classname, duration) {
    var suffix = toggle ? "-in" : "-out";
    return this.addTransitoryClass(classname.replace(/ /g, suffix + " ") + suffix, duration || 1000)
        [(toggle ? "add" : "remove") + "ClassAfter"](classname);
}

$.fn.addTransitionClass = function(classname, duration) {
    return transitionClass.call(this, true, classname, duration);
}

$.fn.removeTransitionClass = function(classname, duration) {
    return transitionClass.call(this, false, classname, duration);
}

})();