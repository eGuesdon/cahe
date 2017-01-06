/// <reference path="../out/com/cahe/utils/MathUtils.d.ts" />
/// <reference path="../out/com/cahe/utils/StringUtils.d.ts" />
"use strict";
const Mu = require("./com/cahe/utils/MathUtils");
const Su = require("./com/cahe/utils/StringUtils");
class Init {
    constructor() {
        console.log(Mu.com.cahe.utils.MathUtils.SphereVolume(10000));
        console.log(Su.com.cahe.utils.StringUtils.prefill());
        Su.com.cahe.utils.sayHello();
    }
    static getInstance() {
        if (Init._instance == null) {
            Init._instance = new Init();
        }
        ;
        return Init._instance;
    }
}
exports.Init = Init;
var i = Init.getInstance();
