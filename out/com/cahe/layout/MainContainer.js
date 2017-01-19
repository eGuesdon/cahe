"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Container_1 = require("./Container");
var HTMLElementFactory_1 = require("../core/HTMLElementFactory");
var MainContainer = (function (_super) {
    __extends(MainContainer, _super);
    function MainContainer() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    MainContainer.getInstance = function () {
        if (!MainContainer._instance) {
            MainContainer._instance = new MainContainer();
        }
        return MainContainer._instance;
    };
    MainContainer.prototype.init = function () {
        this._container = HTMLElementFactory_1.HTMLElementFactory.getHTMLElement("div");
        this._container.id = MainContainer.ID;
    };
    return MainContainer;
}(Container_1.Container));
MainContainer.ID = "MainContainer";
exports.MainContainer = MainContainer;
