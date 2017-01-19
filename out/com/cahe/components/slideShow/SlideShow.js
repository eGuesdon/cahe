"use strict";
require("css!./css/SlideShow.css");
var SlideShow = (function () {
    function SlideShow(parentContainer, dataProvider, direction, timelaps) {
        this._index = -1;
        this._timelaps = 0;
        this._browsingType = SlideShow.CONTINUOUSBROWSING;
        this._transitionType = SlideShow.LEFTRIGHT;
        this._contentType = SlideShow.IMGCONTENTTYPE;
        this._hasBackground = false;
        this._parentContainer = parentContainer;
        this._direction = direction;
        this.dataProvider = dataProvider;
        this._timelaps = timelaps;
    }
    SlideShow.prototype.next = function () {
        this._index = this._index == this._dataProvider.length - 1 ? 0 : this._index + 1;
        console.log("index = " + this._index);
        return this._index;
    };
    SlideShow.prototype.previous = function () {
        this._index = this._index == 0 ? this._dataProvider.length - 1 : this._index - 1;
        return this._index;
    };
    SlideShow.prototype.start = function () {
        if (this._timelaps > 0) {
            this.setInterval();
        }
        this.next();
    };
    SlideShow.prototype.stop = function () {
        clearInterval(this._interval);
    };
    SlideShow.prototype.setInterval = function () {
        this._interval = setInterval(this.next.bind(this), this._timelaps);
    };
    SlideShow.prototype.setContainer = function () {
        this._container = document.createElement("div");
        this._container.id = "SlideShowWrapper";
        this._parentContainer.appendChild(this._container);
        this.setContentContainer();
    };
    SlideShow.prototype.setContentContainer = function () {
        if (!this._dataProvider)
            return;
        switch (this._contentType) {
            case SlideShow.IMGCONTENTTYPE:
                var l = this._dataProvider.length;
                for (var i = 0; i < l; i++) {
                    var img = document.createElement("img");
                    img.id = "IMGContainer" + i;
                    img.src = this._dataProvider[i];
                    this._container.appendChild(img);
                }
                break;
            default:
                return;
        }
    };
    Object.defineProperty(SlideShow.prototype, "timeLaps", {
        set: function (value) {
            this._timelaps = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlideShow.prototype, "transitionType", {
        set: function (value) {
            if (value != SlideShow.DOWNTOP || value != SlideShow.FADE || value != SlideShow.LEFTRIGHT || value != SlideShow.RIGHTLEFT || value != SlideShow.TOPDOWN) {
                throw new Error("This type of transition is not yet supported");
            }
            this._transitionType = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlideShow.prototype, "browsingType", {
        set: function (value) {
            if (value != SlideShow.CONTINUOUSBROWSING || value != SlideShow.DISCONTINUOUSBROWSING) {
                throw new Error("This type of browsing SlideShow is not yet supported");
            }
            this._browsingType = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlideShow.prototype, "contentType", {
        set: function (value) {
            if (value != SlideShow.IMGCONTENTTYPE) {
                throw new Error("This type of content is not yet supported");
            }
            this._contentType = value;
            this.setContainer();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlideShow.prototype, "dataProvider", {
        set: function (value) {
            this._dataProvider = value;
            this.setContainer();
        },
        enumerable: true,
        configurable: true
    });
    return SlideShow;
}());
SlideShow.LEFTRIGHT = "LeftRight";
SlideShow.RIGHTLEFT = "RightLeft";
SlideShow.TOPDOWN = "TopDown";
SlideShow.DOWNTOP = "DownTop";
SlideShow.FADE = "Fade";
SlideShow.CONTINUOUSBROWSING = "ContinuousBrowsing";
SlideShow.DISCONTINUOUSBROWSING = "DiscontinuousBrowsing";
SlideShow.IMGCONTENTTYPE = "IMG";
exports.SlideShow = SlideShow;
