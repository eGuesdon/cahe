"use strict";
var Container = (function () {
    function Container() {
    }
    Container.prototype.displayContainer = function (target) {
        this._parentContainer = target;
        this._parentContainer.appendChild(this._container);
        return this.container;
    };
    Container.prototype.openContainer = function () {
        return this.container;
    };
    Container.prototype.closeContainer = function () {
        return this.container;
    };
    Container.prototype.hideContainer = function () {
        return this.container;
    };
    Container.prototype.removeContainer = function () {
        this._parentContainer.removeChild(this.container);
    };
    Object.defineProperty(Container.prototype, "container", {
        get: function () {
            return this._container;
        },
        enumerable: true,
        configurable: true
    });
    return Container;
}());
exports.Container = Container;
