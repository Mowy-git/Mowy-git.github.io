/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\r\n    margin: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\nheader {\r\n    background-color: rgb(24, 55, 121);\r\n    width: 100%;\r\n    height: 70px;\r\n    color: white;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    padding-right: 30px;\r\n}\r\n\r\nnav {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 50px;\r\n    font-size: 2rem;\r\n}\r\n\r\nbutton {\r\n    font-size: 2rem;\r\n    color: white;\r\n    border: none;\r\n    background: none;\r\n    padding: 10px 20px;\r\n    border-radius: 10px;\r\n    cursor:pointer;\r\n}\r\n\r\n#content {\r\n    background-color: #142270;\r\n    width: 900px;\r\n    height: 1000px;\r\n    margin: 50px 0px;\r\n    border-radius: 50px;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    color: white;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuTab)\n/* harmony export */ });\nconst content = document.querySelector(\"#content\");\r\n\r\nfunction menuTab() {\r\n    const description = document.createElement(\"div\");\r\n    const title = document.createElement(\"div\");\r\n    const name = document.createElement(\"div\");\r\n    const div = document.createElement(\"div\");\r\n    const info = document.createElement(\"div\");\r\n\r\n    title.style.fontSize = \"3rem\";\r\n    title.style.backgroundColor = \"#1c5da3\";\r\n    title.style.margin = \"50px 0px\";\r\n    title.style.border = \"#a83323 solid 10px\";\r\n    title.style.borderRadius = \"10px\";\r\n    title.style.display = \"flex\";\r\n    title.style.alignItems = \"center\";\r\n    title.style.justifyContent = \"center\";\r\n    title.style.width = \"40%\";\r\n    title.style.height = \"100px\";\r\n\r\n    title.textContent = \"Contact Us!\";\r\n    \r\n\r\n    div.style.minWidth = \"60%\";\r\n    div.style.border = \"#a83323 solid 10px\";\r\n    div.style.borderRadius = \"10px\";\r\n    div.style.backgroundColor = \"#1c5da3\";\r\n    div.style.padding = \"20px 0px\";\r\n    div.style.margin = \"30px\";\r\n    div.style.fontSize = \"1.5rem\";\r\n\r\n    name.textContent = \"Mowy\";\r\n    name.style.fontSize = \"2rem\";\r\n    name.style.marginLeft = \"40px\";\r\n    name.style.fontFamily = \"Arial\";\r\n\r\n    info.setAttribute('style', 'white-space: pre;');\r\n    info.textContent = \"Manager\\r\\n123-456-7890\\r\\nmowysomething@gmail.com\";\r\n    info.style.alignSelf = \"center\";\r\n\r\n    div.style.display = \"flex\";\r\n    div.style.flexDirection = \"column\";\r\n\r\n    div.appendChild(name);\r\n    div.appendChild(info);\r\n\r\n\r\n    content.append(title);\r\n    content.append(div);\r\n}\n\n//# sourceURL=webpack:///./src/about.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ homeTab)\n/* harmony export */ });\nconst content = document.querySelector(\"#content\");\r\n\r\nfunction homeTab() {\r\n    const title = document.createElement(\"div\");\r\n    const description = document.createElement(\"div\");\r\n    const hoursOpen = document.createElement(\"div\");\r\n    const hours = document.createElement(\"div\");\r\n    const hoursTime = document.createElement(\"div\");\r\n    const location = document.createElement(\"div\");\r\n    const locationtext = document.createElement(\"div\");\r\n    const locationaddress = document.createElement(\"div\");\r\n\r\n    title.id = \"title\";\r\n    description.id = \"description\";\r\n    hoursOpen.id = \"hoursOpen\";\r\n    hoursTime.id = \"hoursTime\";\r\n    location.id = \"location\";\r\n\r\n    title.innerHTML = \"Mowy's Pizzeria\";\r\n    title.style.fontSize = \"3rem\";\r\n    title.style.backgroundColor = \"#1c5da3\";\r\n    title.style.margin = \"50px 0px\";\r\n    title.style.border = \"#a83323 solid 10px\";\r\n    title.style.borderRadius = \"10px\";\r\n    title.style.width = \"70%\";\r\n    title.style.display = \"flex\";\r\n    title.style.alignItems = \"center\";\r\n    title.style.justifyContent = \"center\";\r\n\r\n    description.style.fontSize = \"1.5rem\";\r\n    description.style.border = \"#a83323 solid 10px\";\r\n    description.style.borderRadius = \"10px\";\r\n    description.style.backgroundColor = \"#1c5da3\";\r\n    description.style.maxWidth = \"60%\";\r\n    description.style.padding = \"20px\";\r\n    description.textContent = \"Welcome to the Mowy's Pizzeria! We make pizza here with love and fresh ingredients, Come try some!\";\r\n\r\n    hours.style.minWidth = \"60%\";\r\n    hours.style.border = \"#a83323 solid 10px\";\r\n    hours.style.borderRadius = \"10px\";\r\n    hours.style.backgroundColor = \"#1c5da3\";\r\n    hours.style.padding = \"20px\";\r\n    hours.style.margin = \"30px\";\r\n    hours.style.fontSize = \"1.5rem\";\r\n\r\n    hoursOpen.textContent = \"Hours\";\r\n    hoursOpen.style.fontSize = \"2rem\";\r\n    hoursOpen.style.marginLeft = \"40px\";\r\n    hoursOpen.style.fontFamily = \"Arial\";\r\n\r\n    hoursTime.setAttribute('style', 'white-space: pre;');\r\n    hoursTime.textContent = \"Sunday: 8am - 8pm\\r\\nMonday: 6am - 6pm\\r\\nTuesday: 6am - 6pm\\r\\nWednesday: 6am - 6pm\\r\\nThursday: 6am - 10pm\\r\\nFriday: 6am - 10pm\\r\\nSaturday: 8am - 10pm\";\r\n    hoursTime.style.alignSelf = \"center\";\r\n\r\n    hours.style.display = \"flex\";\r\n    hours.style.flexDirection = \"column\";\r\n\r\n    hours.appendChild(hoursOpen);\r\n    hours.appendChild(hoursTime);\r\n\r\n    location.style.minWidth = \"60%\";\r\n    location.style.border = \"#a83323 solid 10px\";\r\n    location.style.borderRadius = \"10px\";\r\n    location.style.backgroundColor = \"#1c5da3\";\r\n    location.style.padding = \"20px\";\r\n    location.style.fontSize = \"1.5rem\";\r\n\r\n    location.style.display = \"flex\";\r\n    location.style.flexDirection = \"column\";\r\n    \r\n    locationtext.textContent = \"Location\";\r\n    locationtext.style.marginLeft = \"40px\";\r\n    locationtext.style.fontFamily = \"Arial\";\r\n    locationtext.style.fontSize = \"2rem\";\r\n\r\n    locationaddress.textContent = \"#123 Sesame St, Black Shore\";\r\n    locationaddress.style.alignSelf = \"center\";\r\n\r\n    location.appendChild(locationtext);\r\n    location.appendChild(locationaddress);\r\n\r\n    content.style.height = \"850px\";\r\n\r\n    content.append(title);\r\n    content.append(description);\r\n    content.append(hours);\r\n    content.append(location);\r\n}\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\r\n\r\n\r\n\r\n\r\nlet clearContent = () => content.innerHTML = \"\";\r\n\r\nconsole.log(\"it's working\");\r\n\r\nconst content = document.querySelector(\"#content\");\r\nconst home = document.querySelector(\"#home\");\r\nconst menu = document.querySelector(\"#menu\");\r\nconst about = document.querySelector(\"#about\");\r\n\r\n(0,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\ndocument.getElementById(\"home\").addEventListener(\"click\", () => {\r\n    clearContent();\r\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n});\r\n\r\ndocument.getElementById(\"menu\").addEventListener(\"click\", () => {\r\n    clearContent();\r\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n});\r\n\r\ndocument.getElementById(\"about\").addEventListener(\"click\", () => {\r\n    clearContent();\r\n    (0,_about_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n});\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuTab)\n/* harmony export */ });\nconst content = document.querySelector(\"#content\");\r\n\r\n\r\n\r\nfunction menuTab() {\r\n    const description = document.createElement(\"div\");\r\n    const title = document.createElement(\"div\");\r\n    const page1 = document.createElement(\"div\");\r\n\r\n    title.style.fontSize = \"3rem\";\r\n    title.style.backgroundColor = \"#1c5da3\";\r\n    title.style.margin = \"50px 0px\";\r\n    title.style.border = \"#a83323 solid 10px\";\r\n    title.style.borderRadius = \"10px\";\r\n    title.style.display = \"flex\";\r\n    title.style.alignItems = \"center\";\r\n    title.style.justifyContent = \"center\";\r\n    title.style.width = \"70%\";\r\n\r\n    title.textContent = \"Menu\";\r\n    \r\n    page1.style.fontSize = \"3rem\";\r\n    page1.style.backgroundColor = \"#1c5da3\";\r\n    page1.style.margin = \"50px 0px\";\r\n    page1.style.border = \"#a83323 solid 10px\";\r\n    page1.style.borderRadius = \"10px\";\r\n    page1.style.display = \"flex\";\r\n    page1.style.alignItems = \"center\";\r\n    page1.style.justifyContent = \"center\";\r\n    page1.style.width = \"40%\";\r\n\r\n    page1.textContent = \"Pizza\";\r\n\r\n    // const box1 = document.createElement(\"div\");\r\n    // box1.style.fontSize = \"3rem\";\r\n    // box1.style.backgroundColor = \"#1c5da3\";\r\n    // box1.style.border = \"#a83323 solid 10px\";\r\n    // box1.style.borderRadius = \"10px\";\r\n    // box1.style.display = \"flex\";\r\n    // box1.style.alignItems = \"center\";\r\n    // box1.style.justifyContent = \"center\";\r\n    // box1.style.width = \"450px\";\r\n    // box1.style.height = \"450px\";\r\n    let box1 = document.createElement(\"div\");\r\n    let box2 = document.createElement(\"div\");\r\n\r\n    box1 = box(\"Pizza\" ,\"A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!\", \"100\");\r\n\r\n    box2 = box(\"Pizza\" ,\"A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!\", \"100\");\r\n    content.style.height = \"2000px\";\r\n    content.style.gap = \"20px\";\r\n\r\n    content.append(title);\r\n    content.append(page1);\r\n    content.append(box1);\r\n    content.append(box2);\r\n    // content.append(box1);\r\n}\r\n\r\nfunction box(name, desc, price) {\r\n    const box = document.createElement(\"div\");\r\n    const boxname = document.createElement(\"div\");\r\n    const boxdescription = document.createElement(\"div\");\r\n    const boxprice = document.createElement(\"div\");\r\n    box.style.fontSize = \"2rem\";\r\n    box.style.backgroundColor = \"#1c5da3\";\r\n    box.style.border = \"#a83323 solid 10px\";\r\n    box.style.borderRadius = \"10px\";\r\n    box.style.width = \"450px\";\r\n    box.style.height = \"450px\";\r\n\r\n    box.style.display = \"flex\";\r\n    box.style.flexDirection = \"column\";\r\n\r\n    boxname.style.margin = \"30px 0px 20px 40px\";\r\n    boxdescription.style.display = \"flex\";\r\n    boxdescription.style.justifyContent = \"center\";\r\n    boxdescription.style.alignContent = \"center\";\r\n    boxdescription.style.marginLeft = \"60px\";\r\n    boxdescription.style.marginRight = \"30px\";\r\n\r\n    boxname.innerHTML = name;\r\n    boxdescription.innerHTML = desc;\r\n    boxdescription.style.fontSize = \"1rem\";\r\n\r\n    boxprice.innerHTML = \"$\" + price;\r\n    boxprice.style.fontSize = \"1rem\";\r\n    boxprice.style.marginLeft = \"60px\";\r\n    boxprice.style.marginRight = \"30px\";\r\n\r\n    box.appendChild(boxname);\r\n    box.appendChild(boxdescription);\r\n    box.appendChild(boxprice);\r\n\r\n    return box;\r\n}\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/styles.css?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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