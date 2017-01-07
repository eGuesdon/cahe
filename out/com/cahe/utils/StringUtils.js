var com;
(function (com) {
    var cahe;
    (function (cahe) {
        var utils;
        (function (utils) {
            var StringUtils = (function () {
                function StringUtils() {
                }
                StringUtils.prefill = function (stringChain, prefillChar, finalLength) {
                    var len = stringChain.length;
                    if (len >= finalLength) {
                        return stringChain;
                    }
                    var gap = finalLength - len;
                    var prefillChain = "";
                    for (var i = 0; i < gap; i++) {
                        prefillChain += prefillChar;
                    }
                    return prefillChain + stringChain;
                };
                return StringUtils;
            }());
            utils.StringUtils = StringUtils;
            function sayHello() {
                return "je suis dans le module com.cahe.utils, je me nomme sayHello et je suis une fonction";
            }
            utils.sayHello = sayHello;
        })(utils = cahe.utils || (cahe.utils = {}));
    })(cahe = com.cahe || (com.cahe = {}));
})(com || (com = {}));
