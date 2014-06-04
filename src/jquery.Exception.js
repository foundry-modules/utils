/**
 * jquery.Exception
 * Standardized exception object.
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
    var consoleMethod = {
        error: "error",
        warning: "warn",
        success: "log",
        info: "info"
    };

    // $.Exception("message");
    // $.Exception("success", "message");
    // $.Exception("error", "message", data);
    // $.Exception({type: "info", message: "message", foo: "bar", key: "val"});
    $.Exception = function(exception) {

        // Normalize arguments
        var args = arguments,
            simple = args.length==1,
            hasData = args.length==3;

        exception = $.isPlainObject(exception) ?
            exception :
            {
                type   : simple ? "error" : args[0],
                message: simple ? args[0] : args[1]
            }

        hasData && $.extend(exception, args[2]);

        if ($.environment=="development") {
            console[consoleMethod[exception.type]](exception.message, exception);
        }

        return exception;
    }
})();