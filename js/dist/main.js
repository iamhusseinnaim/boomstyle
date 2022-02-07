/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./components/build/dropdown.js":
/*!**************************************!*\
  !*** ./components/build/dropdown.js ***!
  \**************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://my-webpack-project/./components/build/dropdown.js?");

/***/ }),

/***/ "./components/chips.js":
/*!*****************************!*\
  !*** ./components/chips.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Chipsies)\n/* harmony export */ });\nclass Chipsies {\n  constructor() {\n    this.append_icon();\n  }\n\n  append_icon() {// $('.lt-chips').append('<i class=\"fi  fi-rr-cross-circle\"></i>');\n  }\n\n}\nnew Chipsies();\n\n//# sourceURL=webpack://my-webpack-project/./components/chips.js?");

/***/ }),

/***/ "./components/navigations.js":
/*!***********************************!*\
  !*** ./components/navigations.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Navigations)\n/* harmony export */ });\nclass Navigations {\n  constructor() {\n    this.toggle_drawer_tab();\n  }\n\n  toggle_drawer_tab() {\n    $('.lt-nav-drawer-item').click(function (e) {\n      $(this).addClass('lt-active-nav-drawer-item');\n      $(this).siblings().removeClass('lt-active-nav-drawer-item');\n    });\n  }\n\n}\nnew Navigations();\n\n//# sourceURL=webpack://my-webpack-project/./components/navigations.js?");

/***/ }),

/***/ "./components/slider.js":
/*!******************************!*\
  !*** ./components/slider.js ***!
  \******************************/
/***/ (() => {

eval("class Slider {\n  constructor(id) {\n    $('.lt-slider-btn').click(function (e) {\n      e.preventDefault();\n      let action = $(this).data('action');\n      let mainSlider = $(id);\n      let img = $(id + ' img');\n      let scroll;\n\n      if (action == '-') {\n        scroll = mainSlider.scrollLeft() - img.innerWidth();\n      } else {\n        scroll = mainSlider.scrollLeft() + img.innerWidth();\n      }\n\n      mainSlider.animate({\n        scrollLeft: scroll\n      });\n    });\n    return $(id);\n  }\n\n}\n\nfunction newSlider(id) {\n  return new Slider(id);\n}\n\n//# sourceURL=webpack://my-webpack-project/./components/slider.js?");

/***/ }),

/***/ "./components/tabs.js":
/*!****************************!*\
  !*** ./components/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tabs)\n/* harmony export */ });\nclass Tabs {\n  constructor() {\n    this.changeTab();\n  }\n\n  changeTab() {\n    $('.lt-tab').click(function (e) {\n      e.preventDefault();\n      let target = $($(this).data('target'));\n      target.addClass('lt-active-layer');\n      target.siblings().removeClass('lt-active-layer');\n      $(this).addClass('lt-active-tab');\n      $(this).siblings().removeClass('lt-active-tab');\n    });\n  }\n\n}\nnew Tabs();\n\n//# sourceURL=webpack://my-webpack-project/./components/tabs.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/tabs */ \"./components/tabs.js\");\n/* harmony import */ var _components_navigations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/navigations */ \"./components/navigations.js\");\n/* harmony import */ var _components_chips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/chips */ \"./components/chips.js\");\n/* harmony import */ var _components_build_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/build/dropdown */ \"./components/build/dropdown.js\");\n/* harmony import */ var _components_build_dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_build_dropdown__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/slider */ \"./components/slider.js\");\n/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_slider__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n // ? gloabl \n\n$(document).ready(function () {\n  document.onscroll = () => {\n    let scrollY = window.scrollY;\n\n    if (scrollY >= 110) {\n      $('.lt-lg-nav,.lt-mobile-nav').addClass('pos-fixed');\n      $('.lt-lg-nav,.lt-mobile-nav').addClass('lt-bottom-light');\n    } else {\n      $('.lt-lg-nav,.lt-mobile-nav').removeClass('pos-fixed');\n      $('.lt-lg-nav,.lt-mobile-nav').addClass('lt-bottom-light');\n    }\n\n    if ($('.lt-menu').hasClass('show-menu')) {\n      $('.lt-menu').removeClass('show-menu');\n      $('main').removeClass('lt-blur');\n    }\n  };\n\n  $('.show-menu-button').click(function (e) {\n    e.preventDefault();\n    $('.lt-menu').toggleClass('show-menu');\n    $('main').toggleClass('lt-blur');\n  });\n});\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;