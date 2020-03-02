/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction contact() {\n  const contactLines = document.createElement('div');\n  contactLines.innerHTML = `\n    <h1>Contact</h1>\n    <form class=\"form\">\n      <fieldset>\n        <label for=\"name\">Your full name:</label>\n        <input type=\"text\" id=\"name\" required>\n      </fieldset>\n      <fieldset>\n        <label for=\"email\">Your email address:</label>\n        <input type=\"email\" id=\"email\" required>\n      </fieldset>\n      <fieldset>\n        <label for=\"name\">Your message:</label>\n        <input type=\"text\" id=\"message\" required>\n      </fieldset>\n      <button id=\"submit\">Send</button>\n    </form>\n  `;\n  contactLines.setAttribute('id', 'contact');\n  return contactLines;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (contact);\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/critics.js":
/*!************************!*\
  !*** ./src/critics.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction critics() {\n  const critLines = document.createElement('div');\n  critLines.innerHTML = `\n    <h1>Critics</h1>\n    <div class=\"crit-div\">\n      <div class=\"crit-description\">\n        <img src=\"images/critic1.jpg\" class=\"crit-img\">\n        <h3>Anton Ego</h3>\n        <p class=\"spec-text\">Internationally renowed critic. Defined little chef as the finest chef in France.</p>\n      </div>\n      <div class=\"crit-description\">\n        <img src=\"images/critic2.jpg\" class=\"crit-img\">\n        <h3>Emile</h3>\n        <p class=\"spec-text\">The chef's brother. Eats his food since a baby <s>rat</s>... human. Clearly a human.</p>\n      </div>\n    </div>\n  `;\n  critLines.setAttribute('id', 'critics');\n  return critLines;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (critics);\n\n\n//# sourceURL=webpack:///./src/critics.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction footer() {\n  const footerLines = document.createElement('footer');\n  footerLines.innerHTML = `\n    <ul class=\"links\">\n      <li class=\"link-links\"><a href=\"#\" id=\"home\">Home</a></li>\n      <li class=\"link-links\"><a href=\"#\" id=\"spec\">Our specialty</a></li>\n      <li class=\"link-links\"><a href=\"#\" id=\"crit\">Critics</a></li>\n      <li class=\"link-links\"><a href=\"#\" id=\"cont\">Contact</a></li>\n    </ul>\n  `;\n  footerLines.className = 'footer';\n  return footerLines;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (footer);\n\n\n//# sourceURL=webpack:///./src/footer.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction header() {\n  const headerLines = document.createElement('header');\n  headerLines.innerHTML = `\n    <header class=\"logo\">\n      <img src=\"images/logo2.png\" class=\"logo-img\">\n      <h2 class=\"logo-text\">Little chef's</h2>\n    </header>\n  `;\n  return headerLines;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (header);\n\n\n//# sourceURL=webpack:///./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _phrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phrs */ \"./src/phrs.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _specialty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./specialty */ \"./src/specialty.js\");\n/* harmony import */ var _critics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./critics */ \"./src/critics.js\");\n\n\n\n\n\n\n\nfunction closeModels() {\n  document.getElementById('specialty').style.display = 'none';\n  document.getElementById('contact').style.display = 'none';\n  document.getElementById('critics').style.display = 'none';\n}\n\nfunction specModel() {\n  document.getElementById('specialty').style.display = 'grid';\n  document.getElementById('contact').style.display = 'none';\n  document.getElementById('critics').style.display = 'none';\n}\n\nfunction contactModel() {\n  document.getElementById('specialty').style.display = 'none';\n  document.getElementById('contact').style.display = 'grid';\n  document.getElementById('critics').style.display = 'none';\n}\n\nfunction criticsModel() {\n  document.getElementById('contact').style.display = 'none';\n  document.getElementById('specialty').style.display = 'none';\n  document.getElementById('critics').style.display = 'grid';\n}\n\nconst page = () => {\n  const content = document.getElementById('content');\n\n  content.appendChild(Object(_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n  content.appendChild(Object(_phrs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n  content.appendChild(Object(_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n  content.appendChild(Object(_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n  content.appendChild(Object(_specialty__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\n  content.appendChild(Object(_critics__WEBPACK_IMPORTED_MODULE_5__[\"default\"])());\n\n  content.querySelector('#home').addEventListener('click', closeModels);\n  content.querySelector('#spec').addEventListener('click', specModel);\n  content.querySelector('#cont').addEventListener('click', contactModel);\n  content.querySelector('#crit').addEventListener('click', criticsModel);\n};\n\npage();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/phrs.js":
/*!*********************!*\
  !*** ./src/phrs.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction phrase() {\n  const phrase = document.createElement('div');\n  phrase.innerHTML = '<div class=\"phrase\"><h1>If we are what we eat, here you can be the best there is!</h1></div>';\n  return phrase;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (phrase);\n\n//# sourceURL=webpack:///./src/phrs.js?");

/***/ }),

/***/ "./src/specialty.js":
/*!**************************!*\
  !*** ./src/specialty.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction specialty() {\n  const specLines = document.createElement('div');\n  specLines.innerHTML = `\n    <h1>Our specialty</h1>\n    <div class=\"spec-div\">\n      <img src=\"images/prato.jpeg\" class=\"spec-img\">\n      <div class=\"spec-description\">\n        <h2>Ratatouille</h2>\n        <p class=\"spec-text\">\n          A classic French recipe of cooked vegetables from the 18th century. Taste like childhood.\n        </p>\n      </div>\n    </div>\n  `;\n  specLines.setAttribute('id', 'specialty');\n  return specLines;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (specialty);\n\n\n//# sourceURL=webpack:///./src/specialty.js?");

/***/ })

/******/ });