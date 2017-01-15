/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const LayoutManager_1 = __webpack_require__(1);
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


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const CC = __webpack_require__(2);
	const TC = __webpack_require__(5);
	const MC = __webpack_require__(6);
	class LayoutManager {
	    constructor() {
	        this.init();
	    }
	    static getInstance(conf) {
	        if (!LayoutManager._instance) {
	            LayoutManager._instance = new LayoutManager();
	        }
	        return LayoutManager._instance;
	    }
	    setTopContainer() {
	        this._topContainer = TC.TopContainer.getInstance();
	        this._topContainer.displayContainer(this.coreContainerAsContainer);
	    }
	    init() {
	        this._coreContainer = CC.CoreContainer.getInstance();
	        this._coreContainer.displayContainer(document.body);
	        this._mainContainer = MC.MainContainer.getInstance();
	        this._mainContainer.displayContainer(this.coreContainerAsContainer);
	    }
	    get coreContainer() {
	        return this._coreContainer;
	    }
	    get coreContainerAsContainer() {
	        return this.coreContainer.container;
	    }
	    get mainContainer() {
	        return this._mainContainer;
	    }
	    get mainContainerAsContainer() {
	        return this._mainContainer.container;
	    }
	    get topContainer() {
	        return this.topContainer;
	    }
	    get topContainerAsContainer() {
	        return this._topContainer.container;
	    }
	}
	exports.LayoutManager = LayoutManager;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const Container_1 = __webpack_require__(3);
	const HTMLElementFactory_1 = __webpack_require__(4);
	class CoreContainer extends Container_1.Container {
	    constructor() {
	        super();
	        this.init();
	    }
	    static getInstance() {
	        if (!CoreContainer._instance) {
	            CoreContainer._instance = new CoreContainer();
	        }
	        return CoreContainer._instance;
	    }
	    init() {
	        this._container = HTMLElementFactory_1.HTMLElementFactory.getHTMLElement("div");
	        this._container.id = CoreContainer.ID;
	    }
	}
	CoreContainer.ID = "CoreContainer";
	exports.CoreContainer = CoreContainer;


/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	class Container {
	    constructor() { }
	    displayContainer(target) {
	        this._parentContainer = target;
	        this._parentContainer.appendChild(this._container);
	        return this.container;
	    }
	    openContainer() {
	        return this.container;
	    }
	    closeContainer() {
	        return this.container;
	    }
	    hideContainer() {
	        return this.container;
	    }
	    removeContainer() {
	        this._parentContainer.removeChild(this.container);
	    }
	    get container() {
	        return this._container;
	    }
	}
	exports.Container = Container;


/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	class HTMLElementFactory {
	    constructor() { }
	    static getHTMLElement(elementName) {
	        return document.createElement(elementName);
	    }
	}
	exports.HTMLElementFactory = HTMLElementFactory;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const Container_1 = __webpack_require__(3);
	const HTMLElementFactory_1 = __webpack_require__(4);
	class TopContainer extends Container_1.Container {
	    constructor() {
	        super();
	        this.init();
	    }
	    static getInstance() {
	        if (!TopContainer._instance) {
	            TopContainer._instance = new TopContainer();
	        }
	        return TopContainer._instance;
	    }
	    init() {
	        this.openDirection = "topToBottom";
	        this.closeDirection = "bottomToTop";
	        this._container = HTMLElementFactory_1.HTMLElementFactory.getHTMLElement("div");
	        this._container.id = TopContainer.ID;
	    }
	}
	TopContainer.ID = "TopContainer";
	exports.TopContainer = TopContainer;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const Container_1 = __webpack_require__(3);
	const HTMLElementFactory_1 = __webpack_require__(4);
	class MainContainer extends Container_1.Container {
	    constructor() {
	        super();
	        this.init();
	    }
	    static getInstance() {
	        if (!MainContainer._instance) {
	            MainContainer._instance = new MainContainer();
	        }
	        return MainContainer._instance;
	    }
	    init() {
	        this._container = HTMLElementFactory_1.HTMLElementFactory.getHTMLElement("div");
	        this._container.id = MainContainer.ID;
	    }
	}
	MainContainer.ID = "MainContainer";
	exports.MainContainer = MainContainer;


/***/ }
/******/ ]);