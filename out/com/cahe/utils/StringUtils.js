"use strict";
class StringUtils {
    static prefill(stringChain, prefillChar, finalLength) {
        let len = stringChain.length;
        if (len >= finalLength) {
            return stringChain;
        }
        let gap = finalLength - len;
        let prefillChain = "";
        for (let i = 0; i < gap; i++) {
            prefillChain += prefillChar;
        }
        return prefillChain + stringChain;
    }
    static prefillWith(stringChain, prefillChain) {
        return prefillChain + stringChain;
    }
}
exports.StringUtils = StringUtils;
