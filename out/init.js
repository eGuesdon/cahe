/// <reference path="./com/cahe/utils/MathUtils.ts" />
/// <reference path="./com/cahe/utils/StringUtils.ts" />
define(["require", "exports"], function (require, exports) {
    "use strict";
    var StringUtils = com.cahe.utils.StringUtils;
    var Init = (function () {
        function Init() {
            console.log(StringUtils.prefill("Eric", "0", 10));
            document.body.innerHTML = StringUtils.prefill("Eric", "0", 10);
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
