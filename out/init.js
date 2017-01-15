"use strict";
const LayoutManager_1 = require("./com/cahe/layout/LayoutManager");
class Init {
    constructor() {
        this.init();
    }
    static getInstance() {
        if (!Init._instance) {
            Init._instance = new Init();
        }
        return Init._instance;
    }
    init() {
        this.lm = LayoutManager_1.LayoutManager.getInstance();
    }
}
exports.Init = Init;
var i = Init.getInstance();
