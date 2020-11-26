/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/dateformat/lib/dateformat.js":
/*!***************************************************!*\
  !*** ./node_modules/dateformat/lib/dateformat.js ***!
  \***************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_require__, __webpack_exports__, module */
/*! CommonJS bailout: this is used directly at 229:3-7 */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_RESULT__;/*\n * Date Format 1.2.3\n * (c) 2007-2009 Steven Levithan <stevenlevithan.com>\n * MIT license\n *\n * Includes enhancements by Scott Trenda <scott.trenda.net>\n * and Kris Kowal <cixar.com/~kris.kowal/>\n *\n * Accepts a date, a mask, or a date and a mask.\n * Returns a formatted version of the given date.\n * The date defaults to the current date/time.\n * The mask defaults to dateFormat.masks.default.\n */\n\n(function(global) {\n  'use strict';\n\n  var dateFormat = (function() {\n      var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\\1?|[LloSZWN]|\"[^\"]*\"|'[^']*'/g;\n      var timezone = /\\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\\d{4})?)\\b/g;\n      var timezoneClip = /[^-+\\dA-Z]/g;\n  \n      // Regexes and supporting functions are cached through closure\n      return function (date, mask, utc, gmt) {\n  \n        // You can't provide utc if you skip other args (use the 'UTC:' mask prefix)\n        if (arguments.length === 1 && kindOf(date) === 'string' && !/\\d/.test(date)) {\n          mask = date;\n          date = undefined;\n        }\n  \n        date = date || new Date;\n  \n        if(!(date instanceof Date)) {\n          date = new Date(date);\n        }\n  \n        if (isNaN(date)) {\n          throw TypeError('Invalid date');\n        }\n  \n        mask = String(dateFormat.masks[mask] || mask || dateFormat.masks['default']);\n  \n        // Allow setting the utc/gmt argument via the mask\n        var maskSlice = mask.slice(0, 4);\n        if (maskSlice === 'UTC:' || maskSlice === 'GMT:') {\n          mask = mask.slice(4);\n          utc = true;\n          if (maskSlice === 'GMT:') {\n            gmt = true;\n          }\n        }\n  \n        var _ = utc ? 'getUTC' : 'get';\n        var d = date[_ + 'Date']();\n        var D = date[_ + 'Day']();\n        var m = date[_ + 'Month']();\n        var y = date[_ + 'FullYear']();\n        var H = date[_ + 'Hours']();\n        var M = date[_ + 'Minutes']();\n        var s = date[_ + 'Seconds']();\n        var L = date[_ + 'Milliseconds']();\n        var o = utc ? 0 : date.getTimezoneOffset();\n        var W = getWeek(date);\n        var N = getDayOfWeek(date);\n        var flags = {\n          d:    d,\n          dd:   pad(d),\n          ddd:  dateFormat.i18n.dayNames[D],\n          dddd: dateFormat.i18n.dayNames[D + 7],\n          m:    m + 1,\n          mm:   pad(m + 1),\n          mmm:  dateFormat.i18n.monthNames[m],\n          mmmm: dateFormat.i18n.monthNames[m + 12],\n          yy:   String(y).slice(2),\n          yyyy: y,\n          h:    H % 12 || 12,\n          hh:   pad(H % 12 || 12),\n          H:    H,\n          HH:   pad(H),\n          M:    M,\n          MM:   pad(M),\n          s:    s,\n          ss:   pad(s),\n          l:    pad(L, 3),\n          L:    pad(Math.round(L / 10)),\n          t:    H < 12 ? dateFormat.i18n.timeNames[0] : dateFormat.i18n.timeNames[1],\n          tt:   H < 12 ? dateFormat.i18n.timeNames[2] : dateFormat.i18n.timeNames[3],\n          T:    H < 12 ? dateFormat.i18n.timeNames[4] : dateFormat.i18n.timeNames[5],\n          TT:   H < 12 ? dateFormat.i18n.timeNames[6] : dateFormat.i18n.timeNames[7],\n          Z:    gmt ? 'GMT' : utc ? 'UTC' : (String(date).match(timezone) || ['']).pop().replace(timezoneClip, ''),\n          o:    (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),\n          S:    ['th', 'st', 'nd', 'rd'][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10],\n          W:    W,\n          N:    N\n        };\n  \n        return mask.replace(token, function (match) {\n          if (match in flags) {\n            return flags[match];\n          }\n          return match.slice(1, match.length - 1);\n        });\n      };\n    })();\n\n  dateFormat.masks = {\n    'default':               'ddd mmm dd yyyy HH:MM:ss',\n    'shortDate':             'm/d/yy',\n    'mediumDate':            'mmm d, yyyy',\n    'longDate':              'mmmm d, yyyy',\n    'fullDate':              'dddd, mmmm d, yyyy',\n    'shortTime':             'h:MM TT',\n    'mediumTime':            'h:MM:ss TT',\n    'longTime':              'h:MM:ss TT Z',\n    'isoDate':               'yyyy-mm-dd',\n    'isoTime':               'HH:MM:ss',\n    'isoDateTime':           'yyyy-mm-dd\\'T\\'HH:MM:sso',\n    'isoUtcDateTime':        'UTC:yyyy-mm-dd\\'T\\'HH:MM:ss\\'Z\\'',\n    'expiresHeaderFormat':   'ddd, dd mmm yyyy HH:MM:ss Z'\n  };\n\n  // Internationalization strings\n  dateFormat.i18n = {\n    dayNames: [\n      'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',\n      'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'\n    ],\n    monthNames: [\n      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',\n      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'\n    ],\n    timeNames: [\n      'a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM'\n    ]\n  };\n\nfunction pad(val, len) {\n  val = String(val);\n  len = len || 2;\n  while (val.length < len) {\n    val = '0' + val;\n  }\n  return val;\n}\n\n/**\n * Get the ISO 8601 week number\n * Based on comments from\n * http://techblog.procurios.nl/k/n618/news/view/33796/14863/Calculate-ISO-8601-week-and-year-in-javascript.html\n *\n * @param  {Object} `date`\n * @return {Number}\n */\nfunction getWeek(date) {\n  // Remove time components of date\n  var targetThursday = new Date(date.getFullYear(), date.getMonth(), date.getDate());\n\n  // Change date to Thursday same week\n  targetThursday.setDate(targetThursday.getDate() - ((targetThursday.getDay() + 6) % 7) + 3);\n\n  // Take January 4th as it is always in week 1 (see ISO 8601)\n  var firstThursday = new Date(targetThursday.getFullYear(), 0, 4);\n\n  // Change date to Thursday same week\n  firstThursday.setDate(firstThursday.getDate() - ((firstThursday.getDay() + 6) % 7) + 3);\n\n  // Check if daylight-saving-time-switch occurred and correct for it\n  var ds = targetThursday.getTimezoneOffset() - firstThursday.getTimezoneOffset();\n  targetThursday.setHours(targetThursday.getHours() - ds);\n\n  // Number of weeks between target Thursday and first Thursday\n  var weekDiff = (targetThursday - firstThursday) / (86400000*7);\n  return 1 + Math.floor(weekDiff);\n}\n\n/**\n * Get ISO-8601 numeric representation of the day of the week\n * 1 (for Monday) through 7 (for Sunday)\n * \n * @param  {Object} `date`\n * @return {Number}\n */\nfunction getDayOfWeek(date) {\n  var dow = date.getDay();\n  if(dow === 0) {\n    dow = 7;\n  }\n  return dow;\n}\n\n/**\n * kind-of shortcut\n * @param  {*} val\n * @return {String}\n */\nfunction kindOf(val) {\n  if (val === null) {\n    return 'null';\n  }\n\n  if (val === undefined) {\n    return 'undefined';\n  }\n\n  if (typeof val !== 'object') {\n    return typeof val;\n  }\n\n  if (Array.isArray(val)) {\n    return 'array';\n  }\n\n  return {}.toString.call(val)\n    .slice(8, -1).toLowerCase();\n};\n\n\n\n  if (true) {\n    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n      return dateFormat;\n    }).call(exports, __webpack_require__, exports, module),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  } else {}\n})(this);\n\n\n//# sourceURL=webpack://homework19/./node_modules/dateformat/lib/dateformat.js?");

/***/ }),

/***/ "./src/components/addPhoneInfo.js":
/*!****************************************!*\
  !*** ./src/components/addPhoneInfo.js ***!
  \****************************************/
/*! namespace exports */
/*! export addPhoneInfo [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addPhoneInfo\": () => /* binding */ addPhoneInfo\n/* harmony export */ });\n/* harmony import */ var _prependToElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prependToElement */ \"./src/components/prependToElement.js\");\n\r\n\r\nfunction addPhoneInfo() {\r\n    let text =\r\n        \"<i class='far fa-clock'></i> SUN 8:30 AM &nbsp;&nbsp;&nbsp; <i class='fas fa-battery-quarter'></i> 27%\";\r\n    let node = document.getElementsByClassName('clock')[0];\r\n    (0,_prependToElement__WEBPACK_IMPORTED_MODULE_0__.prependToElement)(text, 'phoneInfo', node);\r\n}\r\n\n\n//# sourceURL=webpack://homework19/./src/components/addPhoneInfo.js?");

/***/ }),

/***/ "./src/components/addPicture.js":
/*!**************************************!*\
  !*** ./src/components/addPicture.js ***!
  \**************************************/
/*! namespace exports */
/*! export addPicture [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addPicture\": () => /* binding */ addPicture\n/* harmony export */ });\nfunction addPicture(url) {\r\n    let picture = document.createElement('img');\r\n    picture.setAttribute('src', url);\r\n    secondSection.prepend(picture);\r\n}\r\n\n\n//# sourceURL=webpack://homework19/./src/components/addPicture.js?");

/***/ }),

/***/ "./src/components/appendToElement.js":
/*!*******************************************!*\
  !*** ./src/components/appendToElement.js ***!
  \*******************************************/
/*! namespace exports */
/*! export appendToElement [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appendToElement\": () => /* binding */ appendToElement\n/* harmony export */ });\n/* harmony import */ var _createDiv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createDiv */ \"./src/components/createDiv.js\");\n\r\n\r\nfunction appendToElement(content, htmlClass, parent) {\r\n    parent.append((0,_createDiv__WEBPACK_IMPORTED_MODULE_0__.createDiv)(content, htmlClass));\r\n}\r\n\n\n//# sourceURL=webpack://homework19/./src/components/appendToElement.js?");

/***/ }),

/***/ "./src/components/createDate.js":
/*!**************************************!*\
  !*** ./src/components/createDate.js ***!
  \**************************************/
/*! namespace exports */
/*! export createDate [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createDate\": () => /* binding */ createDate\n/* harmony export */ });\n/* harmony import */ var _appendToElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appendToElement */ \"./src/components/appendToElement.js\");\n\r\n\r\nfunction createDate(data) {\r\n    let dateFormat = __webpack_require__(/*! dateformat */ \"./node_modules/dateformat/lib/dateformat.js\");\r\n    let today = new Date(data);\r\n    let fullTime = dateFormat(today, 'mmm d, yyyy - ddd');\r\n    (0,_appendToElement__WEBPACK_IMPORTED_MODULE_0__.appendToElement)(fullTime, 'clock', firstSection);\r\n    let time = dateFormat(today, 'h:MM TT');\r\n    (0,_appendToElement__WEBPACK_IMPORTED_MODULE_0__.appendToElement)(time, 'time', firstSection);\r\n}\r\n\n\n//# sourceURL=webpack://homework19/./src/components/createDate.js?");

/***/ }),

/***/ "./src/components/createDiv.js":
/*!*************************************!*\
  !*** ./src/components/createDiv.js ***!
  \*************************************/
/*! namespace exports */
/*! export createDiv [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createDiv\": () => /* binding */ createDiv\n/* harmony export */ });\nfunction createDiv(content, htmlClass) {\r\n    let div = document.createElement('div');\r\n    div.innerHTML = `${content}`;\r\n    div.classList.add(`${htmlClass}`);\r\n    return div;\r\n}\r\n\n\n//# sourceURL=webpack://homework19/./src/components/createDiv.js?");

/***/ }),

/***/ "./src/components/createFeelsLike.js":
/*!*******************************************!*\
  !*** ./src/components/createFeelsLike.js ***!
  \*******************************************/
/*! namespace exports */
/*! export createFeelsLike [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createFeelsLike\": () => /* binding */ createFeelsLike\n/* harmony export */ });\n/* harmony import */ var _appendToElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appendToElement */ \"./src/components/appendToElement.js\");\n\r\n\r\nfunction createFeelsLike(data) {\r\n    let feels = `Feels Like: ${Math.round(data)} &#8451`;\r\n    (0,_appendToElement__WEBPACK_IMPORTED_MODULE_0__.appendToElement)(feels, 'casual', secondSection);\r\n}\r\n\n\n//# sourceURL=webpack://homework19/./src/components/createFeelsLike.js?");

/***/ }),

/***/ "./src/components/createHumidity.js":
/*!******************************************!*\
  !*** ./src/components/createHumidity.js ***!
  \******************************************/
/*! namespace exports */
/*! export createHumidity [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHumidity\": () => /* binding */ createHumidity\n/* harmony export */ });\n/* harmony import */ var _appendToElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appendToElement */ \"./src/components/appendToElement.js\");\n\r\n\r\nfunction createHumidity(data) {\r\n    let humidity = `Humidity: ${data} %`;\r\n    (0,_appendToElement__WEBPACK_IMPORTED_MODULE_0__.appendToElement)(humidity, 'casual', firstSection);\r\n}\r\n\n\n//# sourceURL=webpack://homework19/./src/components/createHumidity.js?");

/***/ }),

/***/ "./src/components/createPhrase.js":
/*!****************************************!*\
  !*** ./src/components/createPhrase.js ***!
  \****************************************/
/*! namespace exports */
/*! export createPhrase [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createPhrase\": () => /* binding */ createPhrase\n/* harmony export */ });\n/* harmony import */ var _appendToElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appendToElement */ \"./src/components/appendToElement.js\");\n\r\n\r\nfunction createPhrase(data) {\r\n    (0,_appendToElement__WEBPACK_IMPORTED_MODULE_0__.appendToElement)(data, 'phrase', secondSection);\r\n}\r\n\n\n//# sourceURL=webpack://homework19/./src/components/createPhrase.js?");

/***/ }),

/***/ "./src/components/createPressure.js":
/*!******************************************!*\
  !*** ./src/components/createPressure.js ***!
  \******************************************/
/*! namespace exports */
/*! export createPressure [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createPressure\": () => /* binding */ createPressure\n/* harmony export */ });\n/* harmony import */ var _appendToElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appendToElement */ \"./src/components/appendToElement.js\");\n\r\n\r\nfunction createPressure(data) {\r\n    let pressure = `Pressure: ${data} hPa`;\r\n    (0,_appendToElement__WEBPACK_IMPORTED_MODULE_0__.appendToElement)(pressure, 'casual', firstSection);\r\n}\r\n\n\n//# sourceURL=webpack://homework19/./src/components/createPressure.js?");

/***/ }),

/***/ "./src/components/createTemp.js":
/*!**************************************!*\
  !*** ./src/components/createTemp.js ***!
  \**************************************/
/*! namespace exports */
/*! export createTemp [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTemp\": () => /* binding */ createTemp\n/* harmony export */ });\n/* harmony import */ var _appendToElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appendToElement */ \"./src/components/appendToElement.js\");\n\r\n\r\nfunction createTemp(data) {\r\n    let temp = `${Math.round(data)} &#8451`;\r\n    (0,_appendToElement__WEBPACK_IMPORTED_MODULE_0__.appendToElement)(temp, 'temperature', secondSection);\r\n}\r\n\n\n//# sourceURL=webpack://homework19/./src/components/createTemp.js?");

/***/ }),

/***/ "./src/components/createWeatherInformation.js":
/*!****************************************************!*\
  !*** ./src/components/createWeatherInformation.js ***!
  \****************************************************/
/*! namespace exports */
/*! export createWeatherInformation [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createWeatherInformation\": () => /* binding */ createWeatherInformation\n/* harmony export */ });\n/* harmony import */ var _components_createHumidity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/createHumidity */ \"./src/components/createHumidity.js\");\n/* harmony import */ var _components_createPressure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/createPressure */ \"./src/components/createPressure.js\");\n/* harmony import */ var _components_createTemp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/createTemp */ \"./src/components/createTemp.js\");\n/* harmony import */ var _components_createFeelsLike__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/createFeelsLike */ \"./src/components/createFeelsLike.js\");\n\r\n\r\n\r\n\r\n\r\nfunction createWeatherInformation(weatherData) {\r\n    (0,_components_createHumidity__WEBPACK_IMPORTED_MODULE_0__.createHumidity)(weatherData.humidity);\r\n    (0,_components_createPressure__WEBPACK_IMPORTED_MODULE_1__.createPressure)(weatherData.pressure);\r\n    (0,_components_createTemp__WEBPACK_IMPORTED_MODULE_2__.createTemp)(weatherData.temp);\r\n    (0,_components_createFeelsLike__WEBPACK_IMPORTED_MODULE_3__.createFeelsLike)(weatherData.feels_like);\r\n}\r\n\n\n//# sourceURL=webpack://homework19/./src/components/createWeatherInformation.js?");

/***/ }),

/***/ "./src/components/createWindInfo.js":
/*!******************************************!*\
  !*** ./src/components/createWindInfo.js ***!
  \******************************************/
/*! namespace exports */
/*! export createWindInfo [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createWindInfo\": () => /* binding */ createWindInfo\n/* harmony export */ });\n/* harmony import */ var _utilite_computeDirection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilite/computeDirection */ \"./src/utilite/computeDirection.js\");\n/* harmony import */ var _appendToElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appendToElement */ \"./src/components/appendToElement.js\");\n\r\n\r\n\r\nfunction createWindInfo(data) {\r\n    let wind = `Wind: ${data} km/h SSE`;\r\n    (0,_utilite_computeDirection__WEBPACK_IMPORTED_MODULE_1__.computeDirection)(data);\r\n    (0,_appendToElement__WEBPACK_IMPORTED_MODULE_0__.appendToElement)(wind, 'wind', firstSection);\r\n}\r\n\n\n//# sourceURL=webpack://homework19/./src/components/createWindInfo.js?");

/***/ }),

/***/ "./src/components/getFakeJson.js":
/*!***************************************!*\
  !*** ./src/components/getFakeJson.js ***!
  \***************************************/
/*! namespace exports */
/*! export getFakeJson [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getFakeJson\": () => /* binding */ getFakeJson\n/* harmony export */ });\nasync function getFakeJson(target) {\r\n    let url = `https://jsonplaceholder.typicode.com/${target}`;\r\n    let response = await fetch(url);\r\n    let content = await response.json();\r\n    content.filter(el => el.id < 10).forEach(element => console.log(element));\r\n}\r\n\n\n//# sourceURL=webpack://homework19/./src/components/getFakeJson.js?");

/***/ }),

/***/ "./src/components/getGitPhoto.js":
/*!***************************************!*\
  !*** ./src/components/getGitPhoto.js ***!
  \***************************************/
/*! namespace exports */
/*! export getGitPhoto [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getGitPhoto\": () => /* binding */ getGitPhoto\n/* harmony export */ });\nasync function getGitPhoto(userName) {\r\n    let url = `https://api.github.com/users/${userName}`;\r\n    let response = await fetch(url);\r\n    let content = await response.json();\r\n    let img = document.createElement('img');\r\n    img.setAttribute('src', content.avatar_url);\r\n    document.body.prepend(img);\r\n}\r\n\n\n//# sourceURL=webpack://homework19/./src/components/getGitPhoto.js?");

/***/ }),

/***/ "./src/components/getReload.js":
/*!*************************************!*\
  !*** ./src/components/getReload.js ***!
  \*************************************/
/*! namespace exports */
/*! export getReload [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getReload\": () => /* binding */ getReload\n/* harmony export */ });\n/* harmony import */ var _getWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWeather */ \"./src/components/getWeather.js\");\n/* harmony import */ var _components_prependToElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/prependToElement */ \"./src/components/prependToElement.js\");\n\r\n\r\n\r\nfunction getReload() {\r\n    let text = \"Jun 13 11:02 PM <i class='fas fa-sync-alt event'></i>\";\r\n    let node = document.querySelector('.phrase');\r\n    (0,_components_prependToElement__WEBPACK_IMPORTED_MODULE_1__.prependToElement)(text, 'phoneInfo', node);\r\n\r\n    document.querySelector('.event').addEventListener('click', () => {\r\n        firstSection.innerHTML = '';\r\n        secondSection.innerHTML = '';\r\n        (0,_getWeather__WEBPACK_IMPORTED_MODULE_0__.getWeather)();\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://homework19/./src/components/getReload.js?");

/***/ }),

/***/ "./src/components/getWeather.js":
/*!**************************************!*\
  !*** ./src/components/getWeather.js ***!
  \**************************************/
/*! namespace exports */
/*! export getWeather [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWeather\": () => /* binding */ getWeather\n/* harmony export */ });\n/* harmony import */ var _components_createDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/createDate */ \"./src/components/createDate.js\");\n/* harmony import */ var _components_createPhrase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/createPhrase */ \"./src/components/createPhrase.js\");\n/* harmony import */ var _components_createWindInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/createWindInfo */ \"./src/components/createWindInfo.js\");\n/* harmony import */ var _components_createWeatherInformation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/createWeatherInformation */ \"./src/components/createWeatherInformation.js\");\n/* harmony import */ var _components_addPhoneInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/addPhoneInfo */ \"./src/components/addPhoneInfo.js\");\n/* harmony import */ var _components_addPicture__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/addPicture */ \"./src/components/addPicture.js\");\n/* harmony import */ var _components_getReload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/getReload */ \"./src/components/getReload.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nasync function getWeather() {\r\n    let url =\r\n        'http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19';\r\n    let response = await fetch(url);\r\n    let content = await response.json();\r\n    (0,_components_createDate__WEBPACK_IMPORTED_MODULE_0__.createDate)(content.dt);\r\n    (0,_components_createWeatherInformation__WEBPACK_IMPORTED_MODULE_3__.createWeatherInformation)(content.main);\r\n    (0,_components_createPhrase__WEBPACK_IMPORTED_MODULE_1__.createPhrase)(content.weather[0].description);\r\n    (0,_components_createWindInfo__WEBPACK_IMPORTED_MODULE_2__.createWindInfo)(content.wind.speed);\r\n    (0,_components_addPicture__WEBPACK_IMPORTED_MODULE_6__.addPicture)('http://openweathermap.org/img/w/10d.png');\r\n    (0,_components_addPhoneInfo__WEBPACK_IMPORTED_MODULE_4__.addPhoneInfo)();\r\n    (0,_components_getReload__WEBPACK_IMPORTED_MODULE_5__.getReload)();\r\n}\r\n\n\n//# sourceURL=webpack://homework19/./src/components/getWeather.js?");

/***/ }),

/***/ "./src/components/prependToElement.js":
/*!********************************************!*\
  !*** ./src/components/prependToElement.js ***!
  \********************************************/
/*! namespace exports */
/*! export prependToElement [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"prependToElement\": () => /* binding */ prependToElement\n/* harmony export */ });\n/* harmony import */ var _createDiv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createDiv */ \"./src/components/createDiv.js\");\n\r\n\r\nfunction prependToElement(content, htmlClass, node) {\r\n    node.after((0,_createDiv__WEBPACK_IMPORTED_MODULE_0__.createDiv)(content, htmlClass));\r\n}\r\n\n\n//# sourceURL=webpack://homework19/./src/components/prependToElement.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_getGitPhoto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/getGitPhoto */ \"./src/components/getGitPhoto.js\");\n/* harmony import */ var _components_getFakeJson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/getFakeJson */ \"./src/components/getFakeJson.js\");\n/* harmony import */ var _components_getWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/getWeather */ \"./src/components/getWeather.js\");\n\r\n\r\n\r\n\r\n(0,_components_getGitPhoto__WEBPACK_IMPORTED_MODULE_1__.getGitPhoto)('VeronikaRed');\r\n(0,_components_getFakeJson__WEBPACK_IMPORTED_MODULE_2__.getFakeJson)('posts');\r\n(0,_components_getWeather__WEBPACK_IMPORTED_MODULE_0__.getWeather)();\r\n\n\n//# sourceURL=webpack://homework19/./src/js/script.js?");

/***/ }),

/***/ "./src/utilite/computeDirection.js":
/*!*****************************************!*\
  !*** ./src/utilite/computeDirection.js ***!
  \*****************************************/
/*! namespace exports */
/*! export computeDirection [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"computeDirection\": () => /* binding */ computeDirection\n/* harmony export */ });\nfunction computeDirection(deg) {\r\n  if (deg > 11.25 && deg < 33.75) {\r\n    return \"NNE\";\r\n  } else if (deg > 33.75 && deg < 56.25) {\r\n    return \"ENE\";\r\n  } else if (deg > 56.25 && deg < 78.75) {\r\n    return \"E\";\r\n  } else if (deg > 78.75 && deg < 101.25) {\r\n    return \"ESE\";\r\n  } else if (deg > 101.25 && deg < 123.75) {\r\n    return \"ESE\";\r\n  } else if (deg > 123.75 && deg < 146.25) {\r\n    return \"SE\";\r\n  } else if (deg > 146.25 && deg < 168.75) {\r\n    return \"SSE\";\r\n  } else if (deg > 168.75 && deg < 191.25) {\r\n    return \"S\";\r\n  } else if (deg > 191.25 && deg < 213.75) {\r\n    return \"SSW\";\r\n  } else if (deg > 213.75 && deg < 236.25) {\r\n    return \"SW\";\r\n  } else if (deg > 236.25 && deg < 258.75) {\r\n    return \"WSW\";\r\n  } else if (deg > 258.75 && deg < 281.25) {\r\n    return \"W\";\r\n  } else if (deg > 281.25 && deg < 303.75) {\r\n    return \"WNW\";\r\n  } else if (deg > 303.75 && deg < 326.25) {\r\n    return \"NW\";\r\n  } else if (deg > 326.25 && deg < 348.75) {\r\n    return \"NNW\";\r\n  } else {\r\n    return \"N\";\r\n  }\r\n}\n\n//# sourceURL=webpack://homework19/./src/utilite/computeDirection.js?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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