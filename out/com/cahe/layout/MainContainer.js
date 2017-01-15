"use strict";
const Container_1 = require("./Container");
const HTMLElementFactory_1 = require("../core/HTMLElementFactory");
class MainContainer extends Container_1.Container {
    constructor() {
        super();
        this.init();
    }
    static getInstance() {
        if (!MainContainer._instance) {
            MainContainer._instance = new MainContainer();
        }
        return MainContainer._instance;
    }
    init() {
        this._container = HTMLElementFactory_1.HTMLElementFactory.getHTMLElement("div");
        this._container.id = MainContainer.ID;
    }
}
MainContainer.ID = "MainContainer";
exports.MainContainer = MainContainer;
