"use strict";
const CC = require("./CoreContainer");
const TC = require("./TopContainer");
const MC = require("./MainContainer");
class LayoutManager {
    constructor() {
        this.init();
    }
    static getInstance(conf) {
        if (!LayoutManager._instance) {
            LayoutManager._instance = new LayoutManager();
        }
        return LayoutManager._instance;
    }
    setTopContainer() {
        this._topContainer = TC.TopContainer.getInstance();
        this._topContainer.displayContainer(this.coreContainerAsContainer);
    }
    init() {
        this._coreContainer = CC.CoreContainer.getInstance();
        this._coreContainer.displayContainer(document.body);
        this._mainContainer = MC.MainContainer.getInstance();
        this._mainContainer.displayContainer(this.coreContainerAsContainer);
    }
    get coreContainer() {
        return this._coreContainer;
    }
    get coreContainerAsContainer() {
        return this.coreContainer.container;
    }
    get mainContainer() {
        return this._mainContainer;
    }
    get mainContainerAsContainer() {
        return this._mainContainer.container;
    }
    get topContainer() {
        return this.topContainer;
    }
    get topContainerAsContainer() {
        return this._topContainer.container;
    }
}
exports.LayoutManager = LayoutManager;
