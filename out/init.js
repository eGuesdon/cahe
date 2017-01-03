"use strict";
var Init = (function () {
    function Init() {
    }
    Init.getInstance = function () {
        if (Init._instance == null) {
            Init._instance = new Init();
        }
        return Init._instance;
    };
    return Init;
}());
exports.Init = Init;
