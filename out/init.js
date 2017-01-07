define(["require", "exports"], function (require, exports) {
    "use strict";
    var sayHello = com.cahe.utils.sayHello;
    var Init = (function () {
        function Init() {
            document.body.innerHTML = sayHello();
        }
        Init.getInstance = function () {
            if (Init._instance == null) {
                Init._instance = new Init();
            }
            ;
            return Init._instance;
        };
        return Init;
    }());
    exports.Init = Init;
    var i = Init.getInstance();
});
