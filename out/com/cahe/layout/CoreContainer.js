"use strict";
const Container_1 = require("./Container");
const HTMLElementFactory_1 = require("../core/HTMLElementFactory");
class CoreContainer extends Container_1.Container {
    constructor() {
        super();
        this.init();
    }
    static getInstance() {
        if (!CoreContainer._instance) {
            CoreContainer._instance = new CoreContainer();
        }
        return CoreContainer._instance;
    }
    init() {
        this._container = HTMLElementFactory_1.HTMLElementFactory.getHTMLElement("div");
        this._container.id = CoreContainer.ID;
    }
}
CoreContainer.ID = "CoreContainer";
exports.CoreContainer = CoreContainer;
