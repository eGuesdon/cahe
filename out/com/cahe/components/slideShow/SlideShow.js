"use strict";
class SlideShow {
    constructor(parentContainer, dataProvider, direction, timelaps) {
        this._index = -1;
        this._timelaps = 0;
        this._parentContainer = parentContainer;
        this._direction = direction;
        this._dataProvider = dataProvider;
        this._timelaps = timelaps;
        this.setContainer();
    }
    next() {
        this._index = this._index == this._dataProvider.length - 1 ? 0 : this._index + 1;
        return this.setContent();
    }
    previous() {
        this._index = this._index == 0 ? this._dataProvider.length - 1 : this._index - 1;
        return this.setContent();
    }
    start() {
        if (this._timelaps > 0) {
            this.setInterval();
        }
        this.next();
    }
    stop() {
        clearInterval(this._interval);
    }
    setInterval() {
        this._interval = setInterval(this.next.bind(this), this._timelaps);
    }
    setContainer() {
        this._container = document.createElement("img");
        this._parentContainer.appendChild(this._container);
    }
    setContent() {
        try {
            this._container.src = this._dataProvider[this._index];
        }
        catch (e) {
            console.log("une erreur s'est produit : " + e);
        }
        finally {
            return this._index;
        }
    }
    set timeLaps(value) {
        this._timelaps = value;
    }
}
SlideShow.LEFTRIGHT = "LeftRight";
SlideShow.RIGHTLEFT = "RightLeft";
SlideShow.TOPDOWN = "TopDown";
SlideShow.DOWNTOP = "DownTop";
exports.SlideShow = SlideShow;
