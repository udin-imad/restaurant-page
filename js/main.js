/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 402:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(667);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(636), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Roboto', sans-serif;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;

}

#content>header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(85, 34, 34, 0.8);
  padding: 0.6em;
  padding-left: 3%;
  padding-right: 3%;
}

#content>header>nav {
  display: flex;
  gap: 1em;
}

#content>header>div {
  display: flex;
  align-items: center;
  gap: 8px;
}

#content>header>div>p {
  font-size: 1.8rem;
  font-weight: 700;
  font-style: italic;
  color: gold;
}

#content>header>div>p>span {
  color: orangered;
}

#content>header>div>.icon {
  width: 50px;
  height: 50px;
}

#content>header>nav>button {
  font-size: 1rem;
  font-weight: 700;
  padding: 0.5em 0.8em;
  border-radius: 0.3em;
  border: none;
  background-color: orangered;
  color: antiquewhite;
  cursor: pointer;
  transition: background-color 1.5ms;
}

#content>header>nav>button:hover {
  background-color: brown;
}

#content>header>nav>button:active {
  opacity: 0.4;
}

#content>#hero {
  display: flex;
  margin-top: 50px;
  padding-left: 3%;
  padding-right: 3%;
}

#content>#hero>div {
  background-color: rgba(65, 24, 10, 0.9);
  padding: 2em;
  border-radius: 2em;
  height: max-content;
}

#content>#hero>div>h1 {
  font-size: 3rem;
  color: white;
  margin-bottom: 10px;
}

#content>#hero>div>p,
#about-us>p {
  font-size: 1.5rem;
  color: white;
}

#content>#hero>img {
  width: 900px;
  height: 675px;
}

#wrapper {
  width: 60%;
  margin: 0 auto;
}

#about-us>h1 {
  margin-bottom: 10px;
}

#about-us>h1,
#about-us>p {
  color: white;
  text-align: center;
}

.description {
  display: flex;
  justify-content: space-around;
  color: white;
  margin-top: 50px;
  gap: 100px;
}

.description>div {
  padding: 2em;
}

.description>div>h2 {
  margin-bottom: 10px;
}

.description>div>p {
  font-size: 1.3rem;
}

#hero>.menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 50px;
}

#hero>.menu>div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
}

#hero>.menu>div>h1 {
  color: white;
  margin-bottom: 30px;
}

#hero>.menu>div>img {
  border: 3px solid gold;
  border-radius: 20px;
  height: 500px;
}

#hero>#contact h1,
#hero>#contact p {
  color: white;
}

#hero>#contact p {
  font-size: 1.5rem;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 667:
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ 81:
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 379:
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 569:
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 216:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 565:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 795:
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 589:
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ 636:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./img/43ecd686f78d4a2b0f50.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  d: () => (/* binding */ body),
  r: () => (/* binding */ hero)
});

;// CONCATENATED MODULE: ./src/img/icon.png
const icon_namespaceObject = __webpack_require__.p + "./img/4b36054233e030d0ac65.png";
;// CONCATENATED MODULE: ./src/js/navbar.js



function navbar() {

  const header = document.createElement('header');
  body.appendChild(header);

  const logo = document.createElement('div');
  header.appendChild(logo);
  const logoImg = document.createElement('img');
  logoImg.classList.add('icon');
  logo.appendChild(logoImg);
  logoImg.src = icon_namespaceObject;
  const logoTitle = document.createElement('p');
  logo.appendChild(logoTitle);
  logoTitle.textContent = 'Dragon';
  const titleSpan = document.createElement('span');
  logoTitle.appendChild(titleSpan);
  titleSpan.textContent = 'Feast';

  const nav = document.createElement('nav');
  header.appendChild(nav);

  const homeButton = document.createElement('button');
  const menuButton = document.createElement('button');
  const aboutButton = document.createElement('button');
  const contactButton = document.createElement('button');

  nav.appendChild(homeButton)
  nav.appendChild(menuButton)
  nav.appendChild(aboutButton)
  nav.appendChild(contactButton)

  homeButton.textContent = 'Home';
  menuButton.textContent = 'Menu';
  aboutButton.textContent = 'About Us';
  contactButton.textContent = 'Contact';

  return { homeButton, menuButton, aboutButton, contactButton }
};
;// CONCATENATED MODULE: ./src/img/image.png
const image_namespaceObject = __webpack_require__.p + "./img/9c785fcf6e138701f07d.png";
;// CONCATENATED MODULE: ./src/js/home.js



function home() {
  const homePage = document.createElement('div');
  hero.appendChild(homePage);

  const title = document.createElement('h1');
  homePage.appendChild(title);
  title.textContent = 'Welcome to Dragon Feast';
  const description = document.createElement('p');
  homePage.appendChild(description);
  description.innerHTML = `Discover a symphony of flavors at Dragon Feast, where tradition meets innovation in the heart of China Town. Our culinary artisans blend time-honored Chinese recipes with a modern twist, offering a dining experience that transcends the ordinary.<br> <br> Savor the richness of Szechuan spices, indulge in delicate Cantonese creations, and find comfort in our elegant garden terrace. Join us on a journey of taste and elegance, where every dish tells a story and every meal is a celebration. <br> <br> Experience the warmth of our welcoming ambiance and let the Dragon Feast be your sanctuary for culinary exploration and good fortune.`
  const image = document.createElement('img');
  image.src = image_namespaceObject;
  hero.appendChild(image);
}
;// CONCATENATED MODULE: ./src/js/about-us.js


function about() {
  const wrapper = document.createElement('div');
  wrapper.setAttribute('id', 'wrapper');
  hero.appendChild(wrapper);

  const aboutUs = document.createElement('div');
  wrapper.appendChild(aboutUs)
  aboutUs.setAttribute('id', 'about-us');
  const title = document.createElement('h1');
  aboutUs.appendChild(title);
  title.textContent = 'About Us';
  const para = document.createElement('p');
  aboutUs.appendChild(para);
  para.innerHTML = 'Welcome to Dragon Feast, where culinary tradition meets modern innovation.<br> Nestled in the heart of the city, our restaurant is a celebration of exquisite Chinese cuisine crafted with care and creativity.';

  const description = document.createElement('div');
  description.classList.add('description');
  wrapper.appendChild(description);

  const contentOne = document.createElement('div');
  description.appendChild(contentOne)
  const contentTwo = document.createElement('div');
  description.appendChild(contentTwo)

  const titleContentOne = document.createElement('h2');
  contentOne.appendChild(titleContentOne);
  titleContentOne.textContent = 'Our Philosophy';
  const contentPara = document.createElement('p');
  contentOne.appendChild(contentPara);
  contentPara.textContent = 'At Dragon Feast, we believe in preserving the rich heritage of Chinese culinary artistry while infusing it with contemporary flair. Our chefs draw inspiration from time-honored recipes, using premium ingredients to create dishes that tantalize the taste buds and ignite the senses.'

  const titleContentTwo = document.createElement('h2');
  contentTwo.appendChild(titleContentTwo);
  titleContentTwo.textContent = 'A Symphony of Flavors'
  const contentPara2 = document.createElement('p');
  contentTwo.appendChild(contentPara2);
  contentPara2.textContent = "From the first bite to the last, every dish at Dragon Feast is a symphony of flavors. Whether you're savoring the spicy indulgence of Szechuan cuisine or reveling in the delicate balance of Cantonese specialties, each plate is a testament to our dedication to exceptional taste."
}
;// CONCATENATED MODULE: ./src/img/image1.png
const image1_namespaceObject = __webpack_require__.p + "./img/4898a16f57404e329de9.png";
;// CONCATENATED MODULE: ./src/img/image2.png
const image2_namespaceObject = __webpack_require__.p + "./img/d916e8d1862300fe4431.png";
;// CONCATENATED MODULE: ./src/img/image3.png
const image3_namespaceObject = __webpack_require__.p + "./img/850167bdf4c1aa69dd7a.png";
;// CONCATENATED MODULE: ./src/js/menu.js





function menu() {
  const menu = document.createElement('div');
  hero.appendChild(menu);
  menu.classList.add('menu')

  const menu1 = document.createElement('div');
  menu.appendChild(menu1);
  const menuTitle1 = document.createElement('h1');
  menu1.appendChild(menuTitle1);
  menuTitle1.textContent = 'Noodle Dragon Fiery';
  const menuImg1 = document.createElement('img');
  menu1.appendChild(menuImg1);
  menuImg1.src = image1_namespaceObject;

  const menu2 = document.createElement('div');
  menu.appendChild(menu2);
  const menuTitle2 = document.createElement('h1');
  menu2.appendChild(menuTitle2);
  menuTitle2.textContent = 'Silk White Spicy Tofu';
  const menuImg2 = document.createElement('img')
  menu2.appendChild(menuImg2);
  menuImg2.src = image3_namespaceObject;

  const menu3 = document.createElement('div');
  menu.appendChild(menu3);
  const menuTitle3 = document.createElement('h1');
  menu3.appendChild(menuTitle3);
  menuTitle3.textContent = 'Great Dumpling Emperor';
  const menuImg3 = document.createElement('img')
  menu3.appendChild(menuImg3);
  menuImg3.src = image2_namespaceObject;
}
;// CONCATENATED MODULE: ./src/js/contact.js


function contact() {
  const contact = document.createElement('div');
  hero.appendChild(contact);
  contact.setAttribute('id', 'contact');

  const reservation = document.createElement('div');
  contact.appendChild(reservation);
  const titleReserv = document.createElement('h1');
  reservation.appendChild(titleReserv);
  titleReserv.textContent = 'Reservation Number';
  const numberReserv = document.createElement('p');
  reservation.appendChild(numberReserv);
  numberReserv.textContent = '054466899';

  const delivery = document.createElement('div');
  contact.appendChild(delivery);
  const titleDel = document.createElement('h1');
  delivery.appendChild(titleDel);
  titleDel.textContent = 'Delivery Order';
  const numberDel = document.createElement('p');
  delivery.appendChild(numberDel);
  numberDel.textContent = '056698741';
}
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/css/style.css
var style = __webpack_require__(402);
;// CONCATENATED MODULE: ./src/css/style.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(style/* default */.Z, options);




       /* harmony default export */ const css_style = (style/* default */.Z && style/* default */.Z.locals ? style/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/js/index.js







const body = document.querySelector('#content');
const js_button = navbar()
const hero = document.createElement('div');
hero.setAttribute('id', 'hero');
body.appendChild(hero);
home();

js_button.homeButton.addEventListener('click', () => {
  refresh()
  home()
});

js_button.aboutButton.addEventListener('click', () => {
  refresh()
  about()
});

js_button.menuButton.addEventListener('click', () => {
  refresh();
  menu();
});

js_button.contactButton.addEventListener('click', () => {
  refresh()
  contact()
})

function refresh() {
  hero.textContent = ''
}
})();

/******/ })()
;