/**
 * jquery.Task
 * Task runner utility.
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

$.Task = function(props) {

    var task = $.extend(
        $.Deferred(),
        {
            data: {},
            list: [],
            add: function(name) {

                var item = $.extend(
                    $.Deferred(),
                    {
                        name: name,
                        item: item
                    }
                );

                task.list.push(item);

                return item;
            },
            process: function() {

                if (!task._promise) {

                    task._promise =
                        $.when.apply($, task.list)
                            .then(
                                task.resolve,
                                task.reject,
                                task.progress
                            );
                }

                return task;
            }
        },
        props
    );

    return task;
};