/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tasks */ \"./src/tasks/index.js\");\n\r\n\r\n/* ● find ul element\r\n   ● find the second li*/\r\n(0,_tasks__WEBPACK_IMPORTED_MODULE_0__.firstTask)();\r\n\r\n/* ● find an element with the list class\r\n   ● find the second li and change the text in it\r\n   ● make the text in the div red*/\r\n(0,_tasks__WEBPACK_IMPORTED_MODULE_0__.secondTask)();\r\n\r\n// ● add the checked attribute to the checkboxes.\r\n(0,_tasks__WEBPACK_IMPORTED_MODULE_0__.thirdTask)();\r\n\r\n// ● if the item has class \"text\" then delete it and vice versa.\r\n(0,_tasks__WEBPACK_IMPORTED_MODULE_0__.fourthTask)();\r\n\r\n// ● add 5 li elements with text from 1 to 5 to the list.\r\n(0,_tasks__WEBPACK_IMPORTED_MODULE_0__.fifthTask)();\r\n\n\n//# sourceURL=webpack://homework17/./src/js/script.js?");

/***/ }),

/***/ "./src/tasks/index.js":
/*!****************************!*\
  !*** ./src/tasks/index.js ***!
  \****************************/
/*! namespace exports */
/*! export fifthTask [provided] [no usage info] [missing usage info prevents renaming] -> ./src/tasks/task5.js .fifthTask */
/*! export firstTask [provided] [no usage info] [missing usage info prevents renaming] -> ./src/tasks/task1.js .firstTask */
/*! export fourthTask [provided] [no usage info] [missing usage info prevents renaming] -> ./src/tasks/task4.js .fourthTask */
/*! export secondTask [provided] [no usage info] [missing usage info prevents renaming] -> ./src/tasks/task2.js .secondTask */
/*! export thirdTask [provided] [no usage info] [missing usage info prevents renaming] -> ./src/tasks/task3.js .thirdTask */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"firstTask\": () => /* reexport safe */ _task1__WEBPACK_IMPORTED_MODULE_0__.firstTask,\n/* harmony export */   \"secondTask\": () => /* reexport safe */ _task2__WEBPACK_IMPORTED_MODULE_1__.secondTask,\n/* harmony export */   \"thirdTask\": () => /* reexport safe */ _task3__WEBPACK_IMPORTED_MODULE_2__.thirdTask,\n/* harmony export */   \"fourthTask\": () => /* reexport safe */ _task4__WEBPACK_IMPORTED_MODULE_3__.fourthTask,\n/* harmony export */   \"fifthTask\": () => /* reexport safe */ _task5__WEBPACK_IMPORTED_MODULE_4__.fifthTask\n/* harmony export */ });\n/* harmony import */ var _task1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task1 */ \"./src/tasks/task1.js\");\n/* harmony import */ var _task2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task2 */ \"./src/tasks/task2.js\");\n/* harmony import */ var _task3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task3 */ \"./src/tasks/task3.js\");\n/* harmony import */ var _task4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task4 */ \"./src/tasks/task4.js\");\n/* harmony import */ var _task5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task5 */ \"./src/tasks/task5.js\");\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://homework17/./src/tasks/index.js?");

/***/ }),

/***/ "./src/tasks/task1.js":
/*!****************************!*\
  !*** ./src/tasks/task1.js ***!
  \****************************/
/*! namespace exports */
/*! export firstTask [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"firstTask\": () => /* binding */ firstTask\n/* harmony export */ });\nconst firstTask = () => {\r\n    let nodes = document.body.children;\r\n    for (let i = 0; i < nodes.length; i++) {\r\n        if (nodes[i].nodeName == 'UL') {\r\n            console.log(nodes[i].nodeName);\r\n            let children = nodes[i].children;\r\n            let cnt = 0;\r\n            for (let j = 0; j < children.length; j++) {\r\n                if (children[j].nodeName == 'LI') {\r\n                    if (cnt == 1) {\r\n                        console.log(children[j].innerHTML);\r\n                    }\r\n                    cnt++;\r\n                }\r\n            }\r\n        }\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://homework17/./src/tasks/task1.js?");

/***/ }),

/***/ "./src/tasks/task2.js":
/*!****************************!*\
  !*** ./src/tasks/task2.js ***!
  \****************************/
/*! namespace exports */
/*! export secondTask [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"secondTask\": () => /* binding */ secondTask\n/* harmony export */ });\nconst secondTask = () => {\r\n    let a = document.getElementsByClassName('list')[0];\r\n    console.log(a);\r\n    let b = a.lastElementChild;\r\n    b.innerHTML = 'SCSS';\r\n    document.getElementsByTagName('div')[0].style.color = 'red';\r\n};\r\n\n\n//# sourceURL=webpack://homework17/./src/tasks/task2.js?");

/***/ }),

/***/ "./src/tasks/task3.js":
/*!****************************!*\
  !*** ./src/tasks/task3.js ***!
  \****************************/
/*! namespace exports */
/*! export thirdTask [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"thirdTask\": () => /* binding */ thirdTask\n/* harmony export */ });\nconst thirdTask = () => {\r\n    document.getElementsByTagName('input')[0].setAttribute('checked', true);\r\n};\r\n\n\n//# sourceURL=webpack://homework17/./src/tasks/task3.js?");

/***/ }),

/***/ "./src/tasks/task4.js":
/*!****************************!*\
  !*** ./src/tasks/task4.js ***!
  \****************************/
/*! namespace exports */
/*! export fourthTask [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fourthTask\": () => /* binding */ fourthTask\n/* harmony export */ });\nconst fourthTask = () => {\r\n    let nodes = document.body.children;\r\n    for (let i = 0; i < nodes.length; i++) {\r\n        if (nodes[i].nodeName == 'INPUT') {\r\n            nodes[i].classList.toggle('text');\r\n        }\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://homework17/./src/tasks/task4.js?");

/***/ }),

/***/ "./src/tasks/task5.js":
/*!****************************!*\
  !*** ./src/tasks/task5.js ***!
  \****************************/
/*! namespace exports */
/*! export fifthTask [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fifthTask\": () => /* binding */ fifthTask\n/* harmony export */ });\nconst fifthTask = () => {\r\n    for (let i = 1; i <= 5; i++) {\r\n        let newLi = document.createElement('LI');\r\n        newLi.innerHTML = i;\r\n        ordered_list.appendChild(newLi);\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://homework17/./src/tasks/task5.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/script.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;