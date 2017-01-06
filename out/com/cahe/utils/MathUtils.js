"use strict";
var com;
(function (com) {
    var cahe;
    (function (cahe) {
        var utils;
        (function (utils) {
            class MathUtils {
                static SphereVolume(rayon) {
                    return (4 / 3) * Math.PI * rayon * rayon * rayon;
                }
            }
            utils.MathUtils = MathUtils;
        })(utils = cahe.utils || (cahe.utils = {}));
    })(cahe = com.cahe || (com.cahe = {}));
})(com = exports.com || (exports.com = {}));
