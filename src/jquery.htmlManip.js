/**
 * jquery.htmlManip
 * Utilities to manipulate html content.
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

$.sanitizeHTML = function(html) {
    return $($.parseHTML(html, document, true)).toHTML();
};

// This also encodes html entities.
$.toHTML = function(str) {
    return $("<div>").html(str).html();
};

$.fn.toHTML = function() {
    return $.toHTML(this.clone());
};

// Based on http://stackoverflow.com/questions/1231770/innerhtml-removes-attribute-quotes-in-internet-explorer
$.toXHTML = function(obj, maintainUppercaseTag) {

    var zz = obj.innerHTML ? String(obj.innerHTML) : obj,
        z  = zz.match(/(<.+[^>])/g);

    if (z) {
        for (var i=0; i<z.length; (i=i+1)) {

            var y,
                zSaved = z[i],
                attrRE = /\=[a-zA-Z\.\:\[\]_\(\)\&\$\%#\@\!0-9\/]+[?\s+|?>]/g;

            z[i] =
                z[i].replace(/([<|<\/].+?\w+).+[^>]/, function(a){
                    return a;
                });

            y = z[i].match(attrRE);

            if (y) {
                var j = 0,
                    len = y.length;

                while (j < len) {

                    var replaceRE = /(\=)([a-zA-Z\.\:\[\]_\(\)\&\$\%#\@\!0-9\/]+)?([\s+|?>])/g,
                        replacer = function() {
                            var args = Array.prototype.slice.call(arguments);
                            return '="' + (maintainUppercaseTag ? args[2] : args[2].toLowerCase()) + '"' + args[3];
                        };

                    z[i] = z[i].replace(y[j], y[j].replace(replaceRE,replacer));
                    j += 1;
                }
            }

            zz = zz.replace(zSaved,z[i]);
        }
    }

    return zz;
};

$.fn.xhtml = function() {
    return $.IE ? $.toXHTML(this[0]) : this.html();
};

/**
 * jquery.buildHTML
 * Converts html string into jQuery element where
 * script tags within it gets removed after it is
 * inserted into the DOM.
 *
 * Using $.buildHTML(html) over $(html) also circumvents
 * CloudFlare from modifying the execution behaviour of
 * script elements.
 */

$.buildHTML = function(html, keepScripts) {

    // If a jquery element was passed in, return as it is.
    if (html instanceof $) return html;

    var doc = document;

    // If CloudFlare exists, use document from iframe
    // because CloudFlare Rocketscript overrides native methods.
    if (window["CloudFlare"]) {

        var iframe = $.buildHTML.iframe;

        // If iframe wasn't created, or iframe was removed or detached,
        // create the iframe element again;
        if (!iframe || !iframe.contentDocument) {

            // Create iframe
            var iframe =
                $.buildHTML.iframe =
                document.createElement("iframe");

            // Hide iframe
            iframe.style.display = "none";

            // Append iframe to body
            document.body.appendChild(iframe);
        }

        doc = iframe.contentDocument;
    }

    // Trim out any whitespace so no unusable text nodes are introduced.
    var html = $.trim(html),

        // Build html fragment while keeping a separate reference to the script
        scripts = [],
        fragment = $.buildFragment([html], doc, scripts),

        // Convert childNodes into a proper array
        nodes = $.merge([], fragment.childNodes);

    // If we want to remove the script after
    // it is appended to the DOM & executed
    if (!keepScripts && scripts.length > 0) {

        // Create script remover
        var script = doc.createElement("script");
            // This is wrapped in try..catch because Cloudflare's
            // proxy node executes this twice for some reason.
            // The second time this executes, the callback has been removed,
            // so let it fail silently.
            script.text = "try{" + $.callback(function(){$(scripts).remove();}) + "();}catch(e){}";

        // Go through nodes in reverse
        var i = nodes.length-1, node, inserted;

        while (node = nodes[i--]) {

            // If a script node is found first, we'll just append
            // script remover next to it to ensure this last script
            // executes before any script removal happens.
            if (node.nodeName==="SCRIPT") {
                inserted = nodes.push(script);
            } else if (node.nodeType===1) {
                inserted = node.appendChild(script);
            }

            if (inserted) break;
        }

        // If script remover was not inserted,
        // then just add it to the array of nodes
        if (!inserted) nodes.push(script);

        // Add script remover itself to the
        // array of scripts to be removed.
        scripts.push(script);
    }

    // Convert nodes into jquery instance and return
    return $(nodes);
};