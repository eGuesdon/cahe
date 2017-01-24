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
	var SlideShow = __webpack_require__(7);
	var Menu_1 = __webpack_require__(9);
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
	        this._lm = LayoutManager_1.LayoutManager.getInstance();
	        var assets = ["./assets/images/Coupe-de-France.jpg", "./assets/images/Handball.jpg", "./assets/images/Insus.jpg", "./assets/images/Les-Enfoires.jpg", "./assets/images/Riders-Cup.jpg", "./assets/images/Roland-Garros.jpg", "./assets/images/Vieille_canailles.jpg"];
	        this._ss = new SlideShow.SlideShow(this._lm.mainContainer.container, assets, SlideShow.SlideShow.LEFTRIGHT, 5000);
	        this._ss.start();
	        var m = new Menu_1.Menu();
	    };
	    return Init;
	}());
	exports.Init = Init;
	var i = Init.getInstance();


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var CC = __webpack_require__(2);
	var TC = __webpack_require__(5);
	var MC = __webpack_require__(6);
	var LayoutManager = (function () {
	    function LayoutManager() {
	        this.init();
	    }
	    LayoutManager.getInstance = function (conf) {
	        if (!LayoutManager._instance) {
	            LayoutManager._instance = new LayoutManager();
	        }
	        return LayoutManager._instance;
	    };
	    LayoutManager.prototype.setTopContainer = function () {
	        this._topContainer = TC.TopContainer.getInstance();
	        this._topContainer.displayContainer(this.coreContainerAsContainer);
	    };
	    LayoutManager.prototype.init = function () {
	        this._coreContainer = CC.CoreContainer.getInstance();
	        this._coreContainer.displayContainer(document.body);
	        this._mainContainer = MC.MainContainer.getInstance();
	        this._mainContainer.displayContainer(this.coreContainerAsContainer);
	    };
	    Object.defineProperty(LayoutManager.prototype, "coreContainer", {
	        get: function () {
	            return this._coreContainer;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(LayoutManager.prototype, "coreContainerAsContainer", {
	        get: function () {
	            return this.coreContainer.container;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(LayoutManager.prototype, "mainContainer", {
	        get: function () {
	            return this._mainContainer;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(LayoutManager.prototype, "mainContainerAsContainer", {
	        get: function () {
	            return this._mainContainer.container;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(LayoutManager.prototype, "topContainer", {
	        get: function () {
	            return this.topContainer;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(LayoutManager.prototype, "topContainerAsContainer", {
	        get: function () {
	            return this._topContainer.container;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return LayoutManager;
	}());
	exports.LayoutManager = LayoutManager;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Container_1 = __webpack_require__(3);
	var HTMLElementFactory_1 = __webpack_require__(4);
	var CoreContainer = (function (_super) {
	    __extends(CoreContainer, _super);
	    function CoreContainer() {
	        var _this = _super.call(this) || this;
	        _this.init();
	        return _this;
	    }
	    CoreContainer.getInstance = function () {
	        if (!CoreContainer._instance) {
	            CoreContainer._instance = new CoreContainer();
	        }
	        return CoreContainer._instance;
	    };
	    CoreContainer.prototype.init = function () {
	        this._container = HTMLElementFactory_1.HTMLElementFactory.getHTMLElement("div");
	        this._container.id = CoreContainer.ID;
	    };
	    return CoreContainer;
	}(Container_1.Container));
	CoreContainer.ID = "CoreContainer";
	exports.CoreContainer = CoreContainer;


/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	var Container = (function () {
	    function Container() {
	    }
	    Container.prototype.displayContainer = function (target) {
	        this._parentContainer = target;
	        this._parentContainer.appendChild(this._container);
	        return this.container;
	    };
	    Container.prototype.openContainer = function () {
	        return this.container;
	    };
	    Container.prototype.closeContainer = function () {
	        return this.container;
	    };
	    Container.prototype.hideContainer = function () {
	        return this.container;
	    };
	    Container.prototype.removeContainer = function () {
	        this._parentContainer.removeChild(this.container);
	    };
	    Object.defineProperty(Container.prototype, "container", {
	        get: function () {
	            return this._container;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return Container;
	}());
	exports.Container = Container;


/***/ },
/* 4 */
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


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Container_1 = __webpack_require__(3);
	var HTMLElementFactory_1 = __webpack_require__(4);
	var TopContainer = (function (_super) {
	    __extends(TopContainer, _super);
	    function TopContainer() {
	        var _this = _super.call(this) || this;
	        _this.init();
	        return _this;
	    }
	    TopContainer.getInstance = function () {
	        if (!TopContainer._instance) {
	            TopContainer._instance = new TopContainer();
	        }
	        return TopContainer._instance;
	    };
	    TopContainer.prototype.init = function () {
	        this.openDirection = "topToBottom";
	        this.closeDirection = "bottomToTop";
	        this._container = HTMLElementFactory_1.HTMLElementFactory.getHTMLElement("div");
	        this._container.id = TopContainer.ID;
	    };
	    return TopContainer;
	}(Container_1.Container));
	TopContainer.ID = "TopContainer";
	exports.TopContainer = TopContainer;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Container_1 = __webpack_require__(3);
	var HTMLElementFactory_1 = __webpack_require__(4);
	var MainContainer = (function (_super) {
	    __extends(MainContainer, _super);
	    function MainContainer() {
	        var _this = _super.call(this) || this;
	        _this.init();
	        return _this;
	    }
	    MainContainer.getInstance = function () {
	        if (!MainContainer._instance) {
	            MainContainer._instance = new MainContainer();
	        }
	        return MainContainer._instance;
	    };
	    MainContainer.prototype.init = function () {
	        this._container = HTMLElementFactory_1.HTMLElementFactory.getHTMLElement("div");
	        this._container.id = MainContainer.ID;
	    };
	    return MainContainer;
	}(Container_1.Container));
	MainContainer.ID = "MainContainer";
	exports.MainContainer = MainContainer;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var styles = __webpack_require__(8);
	var SlideShow = (function () {
	    function SlideShow(parentContainer, dataProvider, direction, timelaps) {
	        this._index = -1;
	        this._previousIndex = -1;
	        this._timelaps = 0;
	        this._browsingType = SlideShow.CONTINUOUSBROWSING;
	        this._transitionType = SlideShow.LEFTRIGHT;
	        this._contentType = SlideShow.IMGCONTENTTYPE;
	        this._hasBackground = false;
	        this._parentContainer = parentContainer;
	        this._direction = direction;
	        this.dataProvider = dataProvider;
	        this._timelaps = timelaps;
	    }
	    SlideShow.prototype.next = function (direction) {
	        this.setPreviousIndex();
	        if (!direction || direction > 0) {
	            this._index = this._index == this._dataProvider.length - 1 ? 0 : this._index + 1;
	        }
	        else {
	            this._index = this._index == 0 ? this._dataProvider.length - 1 : this._index - 1;
	        }
	        this.setTransition();
	        return this._index;
	    };
	    SlideShow.prototype.start = function () {
	        if (this._timelaps > 0) {
	            this.setInterval();
	        }
	        this.next();
	    };
	    SlideShow.prototype.stop = function () {
	        clearInterval(this._interval);
	    };
	    SlideShow.prototype.setPreviousIndex = function () {
	        this._previousIndex = this._index;
	    };
	    SlideShow.prototype.setInterval = function () {
	        this._interval = setInterval(this.next.bind(this), this._timelaps);
	    };
	    SlideShow.prototype.setTransition = function () {
	        try {
	            var previousElement = this._container.childNodes[this._previousIndex];
	            previousElement.style.opacity = "0";
	        }
	        catch (e) {
	        }
	        try {
	            var nextElement = this._container.childNodes[this._index];
	            nextElement.style.opacity = "1";
	        }
	        catch (e) {
	        }
	        console.log("currentIndex : " + this._index);
	        console.log("previousIndex : " + this._previousIndex);
	    };
	    SlideShow.prototype.setContainer = function () {
	        this._container = document.createElement("div");
	        this._container.id = "SlideShowWrapper";
	        this._parentContainer.appendChild(this._container);
	        this.setContentContainer();
	    };
	    SlideShow.prototype.setContentContainer = function () {
	        if (!this._dataProvider)
	            return;
	        switch (this._contentType) {
	            case SlideShow.IMGCONTENTTYPE:
	                var l = this._dataProvider.length;
	                for (var i = 0; i < l; i++) {
	                    var img = document.createElement("img");
	                    img.id = "IMGContainer" + i;
	                    img.src = this._dataProvider[i];
	                    img.style.opacity = "0";
	                    this._container.appendChild(img);
	                }
	                break;
	            default:
	                return;
	        }
	    };
	    Object.defineProperty(SlideShow.prototype, "timeLaps", {
	        set: function (value) {
	            this._timelaps = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SlideShow.prototype, "transitionType", {
	        set: function (value) {
	            if (value != SlideShow.DOWNTOP || value != SlideShow.FADE || value != SlideShow.LEFTRIGHT || value != SlideShow.RIGHTLEFT || value != SlideShow.TOPDOWN) {
	                throw new Error("This type of transition is not yet supported");
	            }
	            this._transitionType = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SlideShow.prototype, "browsingType", {
	        set: function (value) {
	            if (value != SlideShow.CONTINUOUSBROWSING || value != SlideShow.DISCONTINUOUSBROWSING) {
	                throw new Error("This type of browsing SlideShow is not yet supported");
	            }
	            this._browsingType = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SlideShow.prototype, "contentType", {
	        set: function (value) {
	            if (value != SlideShow.IMGCONTENTTYPE) {
	                throw new Error("This type of content is not yet supported");
	            }
	            this._contentType = value;
	            this.setContainer();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SlideShow.prototype, "dataProvider", {
	        set: function (value) {
	            this._dataProvider = value;
	            this.setContainer();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return SlideShow;
	}());
	SlideShow.LEFTRIGHT = "LeftRight";
	SlideShow.RIGHTLEFT = "RightLeft";
	SlideShow.TOPDOWN = "TopDown";
	SlideShow.DOWNTOP = "DownTop";
	SlideShow.FADE = "Fade";
	SlideShow.CONTINUOUSBROWSING = "ContinuousBrowsing";
	SlideShow.DISCONTINUOUSBROWSING = "DiscontinuousBrowsing";
	SlideShow.IMGCONTENTTYPE = "IMG";
	exports.SlideShow = SlideShow;


/***/ },
/* 8 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var styles = __webpack_require__(10);
	var Menu = (function () {
	    function Menu() {
	    }
	    return Menu;
	}());
	exports.Menu = Menu;


/***/ },
/* 10 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);