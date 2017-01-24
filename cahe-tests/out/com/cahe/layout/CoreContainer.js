"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Container_1 = require("./Container");
var HTMLElementFactory_1 = require("../core/HTMLElementFactory");
var CoreContainer = (function (_super) {
    __extends(CoreContainer, _super);
    function CoreContainer() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    CoreContainer.getInstance = function () {
        if (!CoreContainer._instance) {
            CoreContainer._instance = new CoreContainer();
        }
        return CoreContainer._instance;
    };
    CoreContainer.prototype.init = function () {
        this._container = HTMLElementFactory_1.HTMLElementFactory.getHTMLElement("div");
        this._container.id = CoreContainer.ID;
    };
    return CoreContainer;
}(Container_1.Container));
CoreContainer.ID = "CoreContainer";
exports.CoreContainer = CoreContainer;
