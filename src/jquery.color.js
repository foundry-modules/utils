/**
 * jquery.color
 * Color helpers.
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

var hexToRgb = function(hex) {
    var hex = parseInt(((hex.indexOf('#') > -1) ? hex.substring(1) : hex), 16);
    return {r: hex >> 16, g: (hex & 0x00FF00) >> 8, b: (hex & 0x0000FF)};
};

var hexToHsb = function(hex) {
    return rgbToHsb(hexToRgb(hex));
};

var rgbToHsb = function(rgb) {
    var hsb = {h: 0, s: 0, b: 0};
    var min = Math.min(rgb.r, rgb.g, rgb.b);
    var max = Math.max(rgb.r, rgb.g, rgb.b);
    var delta = max - min;
    hsb.b = max;
    hsb.s = max != 0 ? 255 * delta / max : 0;
    if (hsb.s != 0) {
        if (rgb.r == max) hsb.h = (rgb.g - rgb.b) / delta;
        else if (rgb.g == max) hsb.h = 2 + (rgb.b - rgb.r) / delta;
        else hsb.h = 4 + (rgb.r - rgb.g) / delta;
        hsb.h *= 60;
    } else hsb.h = 360;
    if (hsb.h < 0) hsb.h += 360;
    hsb.s *= 100/255;
    hsb.b *= 100/255;
    return hsb;
};

var hsbToRgb = function(hsb) {
    var rgb = {};
    var h = hsb.h;
    var s = hsb.s*255/100;
    var v = hsb.b*255/100;
    if(s == 0) {
        rgb.r = rgb.g = rgb.b = v;
    } else {
        var t1 = v;
        var t2 = (255-s)*v/255;
        var t3 = (t1-t2)*(h%60)/60;
        if(h==360) h = 0;
        if(h<60) {rgb.r=t1; rgb.b=t2; rgb.g=t2+t3}
        else if(h<120) {rgb.g=t1; rgb.b=t2; rgb.r=t1-t3}
        else if(h<180) {rgb.g=t1; rgb.r=t2; rgb.b=t2+t3}
        else if(h<240) {rgb.b=t1; rgb.r=t2; rgb.g=t1-t3}
        else if(h<300) {rgb.b=t1; rgb.g=t2; rgb.r=t2+t3}
        else if(h<360) {rgb.r=t1; rgb.g=t2; rgb.b=t1-t3}
        else {rgb.r=0; rgb.g=0; rgb.b=0}
    }
    return {r:Math.round(rgb.r), g:Math.round(rgb.g), b:Math.round(rgb.b)};
};

var rgbToHex = function(rgb) {
    var hex = [
        rgb.r.toString(16),
        rgb.g.toString(16),
        rgb.b.toString(16)
    ];
    $.each(hex, function (nr, val) {
        if (val.length == 1) {
            hex[nr] = '0' + val;
        }
    });
    return hex.join('');
};

var hsbToHex = function (hsb) {
    return rgbToHex(hsbToRgb(hsb));
};

var fixHsb = function (hsb) {
    return {
        h: Math.min(360, Math.max(0, hsb.h)),
        s: Math.min(100, Math.max(0, hsb.s)),
        b: Math.min(100, Math.max(0, hsb.b))
    };
};

var fixRgb = function (rgb) {
    return {
        r: Math.min(255, Math.max(0, rgb.r)),
        g: Math.min(255, Math.max(0, rgb.g)),
        b: Math.min(255, Math.max(0, rgb.b))
    };
};

var fixHex = function (hex) {
    var len = 6 - hex.length;

    if (len == 3) {
        var chars = hex.split(""), chr, hex = "";
        while (chr = chars.shift()) hex += chr + chr;
    } else {
        while (len--) hex = "0" + hex;
    }

    hex.replace(/[^A-Fa-f0-9]/g, "0");

    return hex;
};

$.extend($, {
    hexToRgb: hexToRgb,
    hexToHsb: hexToHsb,
    rgbToHsb: rgbToHsb,
    hsbToRgb: hsbToRgb,
    rgbToHex: rgbToHex,
    hsbToHex: hsbToHex,
    fixHsb: fixHsb,
    fixRgb: fixRgb,
    fixHex: fixHex
});

})();;