"use strict";
var CC = require("./CoreContainer");
var TC = require("./TopContainer");
var MC = require("./MainContainer");
var LayoutManager = (function () {
    function LayoutManager() {
        this.init();
    }
    LayoutManager.getInstance = function (conf) {
        if (!LayoutManager._instance) {
            LayoutManager._instance = new LayoutManager();
        }
        return LayoutManager._instance;
    };
    LayoutManager.prototype.setTopContainer = function () {
        this._topContainer = TC.TopContainer.getInstance();
        this._topContainer.displayContainer(this.coreContainerAsContainer);
    };
    LayoutManager.prototype.init = function () {
        this._coreContainer = CC.CoreContainer.getInstance();
        this._coreContainer.displayContainer(document.body);
        this._mainContainer = MC.MainContainer.getInstance();
        this._mainContainer.displayContainer(this.coreContainerAsContainer);
    };
    Object.defineProperty(LayoutManager.prototype, "coreContainer", {
        get: function () {
            return this._coreContainer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutManager.prototype, "coreContainerAsContainer", {
        get: function () {
            return this.coreContainer.container;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutManager.prototype, "mainContainer", {
        get: function () {
            return this._mainContainer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutManager.prototype, "mainContainerAsContainer", {
        get: function () {
            return this._mainContainer.container;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutManager.prototype, "topContainer", {
        get: function () {
            return this.topContainer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutManager.prototype, "topContainerAsContainer", {
        get: function () {
            return this._topContainer.container;
        },
        enumerable: true,
        configurable: true
    });
    return LayoutManager;
}());
exports.LayoutManager = LayoutManager;
