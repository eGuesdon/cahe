System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var WelcomeMsg;
    return {
        setters: [],
        execute: function () {
            WelcomeMsg = class WelcomeMsg {
                constructor() {
                }
                sayHello() {
                    return "Bonjour, Eric, Comment vas-tu ?";
                }
            };
            exports_1("WelcomeMsg", WelcomeMsg);
        }
    };
});
