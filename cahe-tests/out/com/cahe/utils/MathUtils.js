"use strict";
var MathUtils = (function () {
    function MathUtils() {
    }
    MathUtils.SphereVolume = function (rayon) {
        return (4 / 3) * Math.PI * rayon * rayon * rayon;
    };
    return MathUtils;
}());
exports.MathUtils = MathUtils;
