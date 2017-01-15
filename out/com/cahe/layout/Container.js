"use strict";
class Container {
    constructor() { }
    displayContainer(target) {
        this._parentContainer = target;
        this._parentContainer.appendChild(this._container);
        return this.container;
    }
    openContainer() {
        return this.container;
    }
    closeContainer() {
        return this.container;
    }
    hideContainer() {
        return this.container;
    }
    removeContainer() {
        this._parentContainer.removeChild(this.container);
    }
    get container() {
        return this._container;
    }
}
exports.Container = Container;
