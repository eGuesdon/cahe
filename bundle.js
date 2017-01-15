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
	var LayoutManager_1 = __webpack_require__(1);
	var Init = (function () {
	    function Init() {
	        this.init();
	    }
	    Init.getInstance = function () {
	        if (!Init._instance) {
	            Init._instance = new Init();
	        }
	        return Init._instance;
	    };
	    Init.prototype.init = function () {
	        this.lm = LayoutManager_1.LayoutManager.getInstance();
	    };
	    return Init;
	}());
	exports.Init = Init;
	var i = Init.getInstance();


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var HTMLElementFactory_1 = __webpack_require__(2);
	var LayoutManager = (function () {
	    function LayoutManager() {
	        this.init();
	    }
	    LayoutManager.getInstance = function () {
	        if (!LayoutManager._instance) {
	            LayoutManager._instance = new LayoutManager();
	        }
	        return LayoutManager._instance;
	    };
	    LayoutManager.prototype.init = function () {
	        this._coreContainer = HTMLElementFactory_1.HTMLElementFactory.getHTMLElement("div");
	        this._coreContainer.id = "CoreContainer";
	        document.body.appendChild(this._coreContainer);
	    };
	    return LayoutManager;
	}());
	exports.LayoutManager = LayoutManager;


/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	var HTMLElementFactory = (function () {
	    function HTMLElementFactory() {
	    }
	    HTMLElementFactory.getHTMLElement = function (elementName) {
	        return document.createElement(elementName);
	    };
	    return HTMLElementFactory;
	}());
	exports.HTMLElementFactory = HTMLElementFactory;


/***/ }
/******/ ]);