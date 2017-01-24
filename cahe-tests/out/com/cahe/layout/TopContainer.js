"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Container_1 = require("./Container");
var HTMLElementFactory_1 = require("../core/HTMLElementFactory");
var TopContainer = (function (_super) {
    __extends(TopContainer, _super);
    function TopContainer() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    TopContainer.getInstance = function () {
        if (!TopContainer._instance) {
            TopContainer._instance = new TopContainer();
        }
        return TopContainer._instance;
    };
    TopContainer.prototype.init = function () {
        this.openDirection = "topToBottom";
        this.closeDirection = "bottomToTop";
        this._container = HTMLElementFactory_1.HTMLElementFactory.getHTMLElement("div");
        this._container.id = TopContainer.ID;
    };
    return TopContainer;
}(Container_1.Container));
TopContainer.ID = "TopContainer";
exports.TopContainer = TopContainer;
