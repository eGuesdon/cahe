System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Import;
    return {
        setters: [],
        execute: function () {
            Import = class Import {
                constructor() {
                }
                sayHello() {
                    return "sayHello";
                }
            };
            exports_1("Import", Import);
        }
    };
});
