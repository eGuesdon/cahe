"use strict";
class Init {
    constructor() {
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
