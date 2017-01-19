"use strict";
var LayoutManager_1 = require("./com/cahe/layout/LayoutManager");
var SlideShow = require("./com/cahe/components/slideShow/SlideShow");
var Init = (function () {
    function Init() {
        this.init();
    }
    Init.getInstance = function () {
        if (!Init._instance) {
            Init._instance = new Init();
        }
        return Init._instance;
    };
    Init.prototype.init = function () {
        this._lm = LayoutManager_1.LayoutManager.getInstance();
        var assets = ["./assets/images/Coupe-de-France.jpg", "./assets/images/Handball.jpg", "./assets/images/Insus.jpg", "./assets/images/Les-Enfoires.jpg", "./assets/images/Riders-Cup.jpg", "./assets/images/Roland-Garros.jpg", "./assets/images/Vieille_canailles.jpg"];
        this._ss = new SlideShow.SlideShow(this._lm.mainContainer.container, assets, SlideShow.SlideShow.LEFTRIGHT, 5000);
        this._ss.start();
    };
    return Init;
}());
exports.Init = Init;
var i = Init.getInstance();
