"use strict";
const Container_1 = require("./Container");
const HTMLElementFactory_1 = require("../core/HTMLElementFactory");
class TopContainer extends Container_1.Container {
    constructor() {
        super();
        this.init();
    }
    static getInstance() {
        if (!TopContainer._instance) {
            TopContainer._instance = new TopContainer();
        }
        return TopContainer._instance;
    }
    init() {
        this.openDirection = "topToBottom";
        this.closeDirection = "bottomToTop";
        this._container = HTMLElementFactory_1.HTMLElementFactory.getHTMLElement("div");
        this._container.id = TopContainer.ID;
    }
}
TopContainer.ID = "TopContainer";
exports.TopContainer = TopContainer;
