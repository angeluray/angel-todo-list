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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  height: 100vh;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.myListContainer {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  box-sizing: border-box;\\r\\n  border-radius: 3px;\\r\\n  box-shadow: 0 2px 8px rgb(0 0 0 / 15%);\\r\\n  width: 100%;\\r\\n  max-width: 500px;\\r\\n  padding: 0 0 0 0;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\n.headlineContainer {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  border-bottom: 1px solid #eeee;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  color: #545862;\\r\\n  font-size: 14px;\\r\\n  padding: 1rem;\\r\\n  line-height: 20px;\\r\\n  margin: 0;\\r\\n  width: 90%;\\r\\n  white-space: nowrap;\\r\\n  font-family: 'Lato', sans-serif;\\r\\n  font-family: 'Open Sans', sans-serif;\\r\\n  font-weight: 700;\\r\\n}\\r\\n\\r\\n.myRefresher {\\r\\n  width: 19px;\\r\\n  height: 19px;\\r\\n  padding-right: 18px;\\r\\n  transition: all 0.3s;\\r\\n  cursor: pointer !important;\\r\\n}\\r\\n\\r\\n.myRefresher:hover {\\r\\n  transform: scale(1.2) rotate(10deg);\\r\\n}\\r\\n\\r\\n.list {\\r\\n  list-style-type: none;\\r\\n  padding-left: 2px;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.list li {\\r\\n  padding: 15px 12px 15px;\\r\\n  border-bottom: 1px solid #eeee;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  font-family: 'Lato', sans-serif;\\r\\n  font-family: 'Open Sans', sans-serif;\\r\\n  font-weight: 400;\\r\\n  font-size: 15px;\\r\\n  color: #3d3d3d;\\r\\n}\\r\\n\\r\\nli div {\\r\\n  display: flex;\\r\\n  gap: 15px;\\r\\n}\\r\\n\\r\\n#toDo {\\r\\n  width: 100%;\\r\\n  padding: 0 40px 0 1rem;\\r\\n  line-height: 50px;\\r\\n  height: 50px;\\r\\n  border-top: none;\\r\\n  border-bottom: none;\\r\\n  border-left: none;\\r\\n  border-right: none;\\r\\n  margin-bottom: 0;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n#toDo::placeholder {\\r\\n  font-style: italic;\\r\\n  font-family: 'Lato', sans-serif;\\r\\n  font-family: 'Open Sans', sans-serif;\\r\\n  font-weight: 400;\\r\\n  color: #adadad;\\r\\n}\\r\\n\\r\\n.input {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  border-bottom: 1px solid #eeee;\\r\\n}\\r\\n\\r\\n.mySendIcon {\\r\\n  width: 17px;\\r\\n  height: 17px;\\r\\n  padding: 18px;\\r\\n  cursor: pointer !important;\\r\\n}\\r\\n\\r\\nimg {\\r\\n  filter: opacity(40%);\\r\\n  transition: all 0.5s ease-in-out;\\r\\n  cursor: grab;\\r\\n}\\r\\n\\r\\nimg:hover {\\r\\n  filter: opacity(80%);\\r\\n}\\r\\n\\r\\n.myOptionIcon {\\r\\n  width: 25px;\\r\\n  height: 20px;\\r\\n  display: none;\\r\\n}\\r\\n\\r\\ninput[type=checkbox] {\\r\\n  transform: scale(1.5);\\r\\n}\\r\\n\\r\\ninput[type=checkbox]:checked + input[type=text] {\\r\\n  text-decoration: line-through;\\r\\n  color: #a9a9a9bb;\\r\\n}\\r\\n\\r\\n#clearAllBtn {\\r\\n  width: 100%;\\r\\n  border: none;\\r\\n  padding: 15px 0 15px 0;\\r\\n  color: #a9a9a9;\\r\\n  border-top: 1px solid #eeee;\\r\\n  cursor: pointer;\\r\\n  transition: all 0.5s ease;\\r\\n}\\r\\n\\r\\n#clearAllBtn:hover {\\r\\n  color: #575757;\\r\\n  text-decoration: underline;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_Add_Remove_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Add&Remove.js */ \"./src/modules/Add&Remove.js\");\n/* harmony import */ var _modules_interactive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/interactive.js */ \"./src/modules/interactive.js\");\n\r\n// eslint-disable-next-line\r\n\r\n\r\n\r\n// HTML Management\r\nconst container = document.querySelector('.myListContainer');\r\ncontainer.innerHTML = '<div class=\"headlineContainer\"><h1>Today\\'s To-Do\\'s</h1><img src=\"https://img.icons8.com/ios-glyphs/30/000000/refresh--v1.png\" class=\"myRefresher\"></div>';\r\nconst list = document.createElement('ol');\r\nlist.classList.add('list');\r\nconst input = document.createElement('div');\r\ninput.classList.add('input');\r\ncontainer.appendChild(input);\r\ncontainer.appendChild(list);\r\nlist.insertAdjacentHTML('afterend', '<button type=\"button\" id=\"clearAllBtn\">Clear all completed</button>');\r\n\r\n// This code below is for future improvements.\r\ndocument.querySelector('.myRefresher').addEventListener('click', () => {\r\n  // For future improvements and testing only console.table(eachList);\r\n});\r\n\r\ninput.innerHTML = `\r\n<input type=\"text\" id=\"toDo\" placeholder=\"Add to your list...\" required>\r\n`;\r\n\r\nconst clearAllBtn = document.getElementById('clearAllBtn');\r\nconst refreshIcon = document.createElement('img');\r\nrefreshIcon.classList.add('mySendIcon');\r\nrefreshIcon.src = 'https://img.icons8.com/sf-regular/48/000000/return.png';\r\ninput.appendChild(refreshIcon);\r\n\r\nconst addNewList = () => {\r\n  const toDo = document.getElementById('toDo').value;\r\n  const eachItemList = new _modules_Add_Remove_js__WEBPACK_IMPORTED_MODULE_1__.NewItemList(toDo, false, (_modules_Add_Remove_js__WEBPACK_IMPORTED_MODULE_1__.eachList.length + 1));\r\n  // Push into the array\r\n  _modules_Add_Remove_js__WEBPACK_IMPORTED_MODULE_1__.eachList.push(eachItemList);\r\n  // This code is for testing only console.log(eachList);\r\n\r\n  // print in the HTML file.\r\n  // eslint-disable-next-line\r\n  (0,_modules_Add_Remove_js__WEBPACK_IMPORTED_MODULE_1__.printDynamic)(_modules_Add_Remove_js__WEBPACK_IMPORTED_MODULE_1__.eachList);\r\n  localStorage.setItem('tasks', JSON.stringify(_modules_Add_Remove_js__WEBPACK_IMPORTED_MODULE_1__.eachList));\r\n  return _modules_Add_Remove_js__WEBPACK_IMPORTED_MODULE_1__.eachList;\r\n};\r\n\r\ndocument.getElementById('toDo').addEventListener('keypress', (e) => {\r\n  const toDo = document.getElementById('toDo').value;\r\n  if (e.key === 'Enter' && toDo !== '') {\r\n    addNewList();\r\n    document.getElementById('toDo').value = '';\r\n  }\r\n});\r\n\r\nrefreshIcon.addEventListener('click', () => {\r\n  const toDo = document.getElementById('toDo').value;\r\n  if (toDo) {\r\n    addNewList();\r\n  }\r\n  document.getElementById('toDo').value = '';\r\n});\r\n\r\nclearAllBtn.addEventListener('click', () => {\r\n  (0,_modules_interactive_js__WEBPACK_IMPORTED_MODULE_2__.noCompleted)();\r\n});\r\n\r\n(0,_modules_Add_Remove_js__WEBPACK_IMPORTED_MODULE_1__.printDynamic)(_modules_Add_Remove_js__WEBPACK_IMPORTED_MODULE_1__.eachList);\n\n//# sourceURL=webpack://webpack/./src/index.js?");

/***/ }),

/***/ "./src/modules/Add&Remove.js":
/*!***********************************!*\
  !*** ./src/modules/Add&Remove.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NewItemList\": () => (/* binding */ NewItemList),\n/* harmony export */   \"deelete\": () => (/* binding */ deelete),\n/* harmony export */   \"eachList\": () => (/* binding */ eachList),\n/* harmony export */   \"printDynamic\": () => (/* binding */ printDynamic)\n/* harmony export */ });\n// eslint-disable-next-line\r\nlet eachList = JSON.parse(localStorage.getItem('tasks')) || [];\r\n\r\nclass NewItemList {\r\n  constructor(listInfo, mybool, listIndex) {\r\n    this.listInfo = listInfo;\r\n    this.completed = mybool;\r\n    this.listIndex = listIndex;\r\n  }\r\n}\r\n\r\nconst deelete = (input) => {\r\n  // Delete the number by index position\r\n  eachList.splice(input, 1);\r\n  if (eachList === []) {\r\n    eachList = [];\r\n    localStorage.setItem('tasks', JSON.stringify(eachList));\r\n    return eachList;\r\n  }\r\n  const myNewTaskIndex = eachList.map((el, index) => ({ ...el, listIndex: index - 1 + 1 }));\r\n\r\n  // Upgrade the Local Storage\r\n  localStorage.setItem('tasks', JSON.stringify(myNewTaskIndex));\r\n\r\n  return myNewTaskIndex;\r\n};\r\n\r\nconst printDynamic = (input) => {\r\n  document.getElementsByClassName('list')[0].innerHTML = input.map((items, index) => `\r\n    <li id=\"task-${index}\">\r\n      <div>\r\n        <input type=\"checkbox\" class=\"${items.completed} myInput\" id=\"check-input-${index}\" name=\"${index}\" ${items.completed ? 'checked=true' : ''}>\r\n        <input type=\"text\" value=\"${items.listInfo}\" class\"myEditableField\">\r\n      </div>\r\n      <img src='https://img.icons8.com/windows/32/000000/menu-2.png' class='myOptionIcon'>\r\n      <img src='https://img.icons8.com/material-sharp/24/000000/trash.png' class='myTrash'>\r\n    </li>\r\n  `).join('');\r\n\r\n  input.forEach((items, index) => {\r\n    document.querySelector(`#task-${index} input[type=\"text\"]`).readOnly = items.completed;\r\n    document.querySelector(`#task-${index} input[type=\"text\"]`).style.border = 'none';\r\n    document.querySelector(`#task-${index} input[type=\"text\"]`).style.width = '340px';\r\n    document.querySelector(`#task-${index} input[type=\"text\"]`).addEventListener('input', (e) => {\r\n      e.preventDefault();\r\n      items.listInfo = e.target.value;\r\n      localStorage.setItem('tasks', JSON.stringify(eachList));\r\n      // For future imporvements and testing only console.log(items.listInfo);\r\n    });\r\n\r\n    document.querySelector(`#task-${index} input[type=\"checkbox\"]`).addEventListener('input', (e) => {\r\n      e.preventDefault();\r\n      items.completed = e.target.checked;\r\n      localStorage.setItem('tasks', JSON.stringify(eachList));\r\n    });\r\n\r\n    document.querySelector(`#task-${index} .myTrash`).addEventListener('click', (e) => {\r\n      e.target.parentElement.parentElement.removeChild(e.target.parentElement);\r\n      deelete(index);\r\n    });\r\n  });\r\n};\r\n\r\n\n\n//# sourceURL=webpack://webpack/./src/modules/Add&Remove.js?");

/***/ }),

/***/ "./src/modules/interactive.js":
/*!************************************!*\
  !*** ./src/modules/interactive.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"noCompleted\": () => (/* binding */ noCompleted)\n/* harmony export */ });\n/* harmony import */ var _Add_Remove_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add&Remove.js */ \"./src/modules/Add&Remove.js\");\n\r\n\r\nconst noCompleted = () => {\r\n  const comptdTaskList = _Add_Remove_js__WEBPACK_IMPORTED_MODULE_0__.eachList.filter((noCompletedTask) => noCompletedTask.completed === false);\r\n  (0,_Add_Remove_js__WEBPACK_IMPORTED_MODULE_0__.printDynamic)(comptdTaskList);\r\n  localStorage.clear();\r\n  localStorage.setItem('tasks', JSON.stringify(comptdTaskList));\r\n  // Code below for future improvements and Testing purposes only\r\n  // console.log(comptdTaskList);\r\n};\r\n\r\n// eslint-disable-next-line\r\n\n\n//# sourceURL=webpack://webpack/./src/modules/interactive.js?");

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