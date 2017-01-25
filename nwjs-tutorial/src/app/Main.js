System.register(["./WelcomeMsg"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var WelcomeMsg_1, Main, main;
    return {
        setters: [
            function (WelcomeMsg_1_1) {
                WelcomeMsg_1 = WelcomeMsg_1_1;
            }
        ],
        execute: function () {
            Main = class Main {
                constructor() {
                    this.doc = document;
                    this.body = this.doc.body;
                    this.i = new WelcomeMsg_1.WelcomeMsg();
                    this.init();
                    nw.Window.get().showDevTools();
                }
                init() {
                    this.doc.getElementById("welcomeMsg").innerText = this.i.sayHello();
                }
            };
            exports_1("Main", Main);
            main = new Main();
        }
    };
});
