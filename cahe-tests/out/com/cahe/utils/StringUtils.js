"use strict";
var StringUtils = (function () {
    function StringUtils() {
    }
    StringUtils.prefill = function (stringChain, prefillChar, finalLength) {
        var len = stringChain.length;
        if (len >= finalLength) {
            return stringChain;
        }
        var gap = finalLength - len;
        var prefillChain = "";
        for (var i = 0; i < gap; i++) {
            prefillChain += prefillChar;
        }
        return prefillChain + stringChain;
    };
    StringUtils.prefillWith = function (stringChain, prefillChain) {
        return prefillChain + stringChain;
    };
    return StringUtils;
}());
exports.StringUtils = StringUtils;
