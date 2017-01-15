"use strict";
class HTMLElementFactory {
    constructor() { }
    static getHTMLElement(elementName) {
        return document.createElement(elementName);
    }
}
exports.HTMLElementFactory = HTMLElementFactory;
