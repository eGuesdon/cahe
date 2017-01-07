var com;
(function (com) {
    var cahe;
    (function (cahe) {
        var utils;
        (function (utils) {
            var MathUtils = (function () {
                function MathUtils() {
                }
                MathUtils.SphereVolume = function (rayon) {
                    return (4 / 3) * Math.PI * rayon * rayon * rayon;
                };
                return MathUtils;
            }());
            utils.MathUtils = MathUtils;
        })(utils = cahe.utils || (cahe.utils = {}));
    })(cahe = com.cahe || (com.cahe = {}));
})(com || (com = {}));
