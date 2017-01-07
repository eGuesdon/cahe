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
            class UserModel {
                constructor() {
                }
            }
            utils.UserModel = UserModel;
        })(utils = cahe.utils || (cahe.utils = {}));
    })(cahe = com.cahe || (com.cahe = {}));
})(com || (com = {}));
