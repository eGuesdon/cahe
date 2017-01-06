"use strict";
var com;
(function (com) {
    var cahe;
    (function (cahe) {
        var utils;
        (function (utils) {
            class StringUtils {
                static prefill(stringChain, prefillChar, finalLength) {
                    let len = stringChain.length;
                    if (len >= finalLength) {
                        return stringChain;
                    }
                    let gap = finalLength - len;
                    let prefillChain = "";
                    for (let i = 0; i < len; i++) {
                        prefillChain += prefillChar;
                    }
                    return prefillChain + stringChain;
                }
            }
            utils.StringUtils = StringUtils;
            function sayHello() {
                console.log("je suis dans le module com.cahe.utils, je me nomme sayHello et je suis une fonction");
            }
            utils.sayHello = sayHello;
        })(utils = cahe.utils || (cahe.utils = {}));
    })(cahe = com.cahe || (com.cahe = {}));
})(com = exports.com || (exports.com = {}));
