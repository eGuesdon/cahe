// import nw from 'nw.gui' ;
// import Import from './Import' ;
System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Main, main;
    return {
        setters: [],
        execute: function () {// import nw from 'nw.gui' ;
            // import Import from './Import' ;
            Main = class Main {
                // private i : Import.Import = new Import.Import() ;
                constructor() {
                    this.doc = document;
                    this.body = this.doc.body;
                    this.init();
                    // nw.Window.get().showDevTools() ;
                }
                init() {
                    let h1 = document.getElementById("welcomeMsg");
                    let txt = "Document is : \n\n";
                    for (let i in this.doc) {
                        txt += i + " : " + this.doc[i] + " \n";
                    }
                    txt += "\n\n Body is : \n\n";
                    for (let i in this.body) {
                        txt += i + " : " + this.body[i] + " \n";
                    }
                    h1.innerText = txt;
                }
            };
            exports_1("Main", Main);
            main = new Main();
        }
    };
});
