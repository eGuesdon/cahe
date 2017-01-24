"use strict";
var HTMLElementFactory = (function () {
    function HTMLElementFactory() {
    }
    HTMLElementFactory.getHTMLElement = function (elementName) {
        return document.createElement(elementName);
    };
    return HTMLElementFactory;
}());
exports.HTMLElementFactory = HTMLElementFactory;
