/**
 * jquery.regExpEscape
 * Makes string regex safe.
 * http://stackoverflow.com/questions/2593637/how-to-escape-regular-expression-in-javascript
 */

$.regExpEscape = function(str) {
    return str.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, '\\$1').replace(/\x08/g, '\\x08');
}
