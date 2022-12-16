/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/local1857-event-core/edit.js":
/*!******************************************!*\
  !*** ./src/local1857-event-core/edit.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/local1857-event-core/editor.scss");




function Edit(props) {
  const events = props.attributes.events.slice();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "local1857-events-block"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "local1857-editor-events-container"
  }, events && events.length === 0 && "No Upcoming Events", events && events.length > 0 ? events.map(event => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "kcls-event"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
      className: "kcls-event-title"
    }, event.title), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."));
  }) : null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "local1857-editor-events-overlay"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "This automatically pulls the closest three events, and is not editable.")))));
}

/***/ }),

/***/ "./src/local1857-event-core/local1857-events-block.js":
/*!************************************************************!*\
  !*** ./src/local1857-event-core/local1857-events-block.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ KCLSEventBlock)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/local1857-event-core/editor.scss");





function KCLSEventBlock() {
  const KCLSEventBlockBlocks = [["core/group", {
    className: "kcls-events kcls-section"
  }, [["core/group", {
    className: "kcls-section-title"
  }, [["core/heading", {
    level: 2,
    content: "Upcoming Events",
    className: "kcls-heading"
  }], ["core/button", {
    text: "See All Events",
    className: "kcls-read-blog-button",
    url: "/meetings/"
  }]]], ["local-1857/events-block"]]]];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "kcls-event-block"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)(), {
    template: KCLSEventBlockBlocks
  })));
}

/***/ }),

/***/ "./src/local1857-event-core/save.js":
/*!******************************************!*\
  !*** ./src/local1857-event-core/save.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);



function save() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null));
}

/***/ }),

/***/ "./src/local1857-event-core/editor.scss":
/*!**********************************************!*\
  !*** ./src/local1857-event-core/editor.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/local1857-event-core/style.scss":
/*!*********************************************!*\
  !*** ./src/local1857-event-core/style.scss ***!
  \*********************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nHookWebpackError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Can't find stylesheet to import.\n  ╷\n1 │ @import \"colors\";\n  │         ^^^^^^^^\n  ╵\n  src\\local1857-event-core\\style.scss 1:9  root stylesheet\n    at tryRunOrWebpackError (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\webpack\\lib\\HookWebpackError.js:88:9)\n    at __webpack_require_module__ (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\webpack\\lib\\Compilation.js:5058:12)\n    at __webpack_require__ (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\webpack\\lib\\Compilation.js:5015:18)\n    at C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\webpack\\lib\\Compilation.js:5086:20\n    at symbolIterator (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\neo-async\\async.js:3485:9)\n    at done (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\neo-async\\async.js:3527:9)\n    at Hook.eval [as callAsync] (eval at create (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\tapable\\lib\\Hook.js:18:14)\n    at C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\webpack\\lib\\Compilation.js:4993:43\n    at symbolIterator (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\neo-async\\async.js:3482:9)\n    at timesSync (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\neo-async\\async.js:2297:7)\n    at Object.eachLimit (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\neo-async\\async.js:3463:5)\n    at C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\webpack\\lib\\Compilation.js:4958:16\n    at symbolIterator (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\neo-async\\async.js:3485:9)\n    at timesSync (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\neo-async\\async.js:2297:7)\n    at Object.eachLimit (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\neo-async\\async.js:3463:5)\n    at C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\webpack\\lib\\Compilation.js:4926:15\n    at symbolIterator (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\neo-async\\async.js:3485:9)\n    at done (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\neo-async\\async.js:3527:9)\n    at C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\webpack\\lib\\Compilation.js:4873:8\n    at C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\webpack\\lib\\Compilation.js:3352:32\n    at C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\webpack\\lib\\HookWebpackError.js:68:3\n    at Hook.eval [as callAsync] (eval at create (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at Cache.store (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\webpack\\lib\\Cache.js:107:20)\n    at ItemCacheFacade.store (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\webpack\\lib\\CacheFacade.js:137:15)\n    at C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\webpack\\lib\\Compilation.js:3352:11\n    at C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\webpack\\lib\\Cache.js:93:5\n    at Hook.eval [as callAsync] (eval at create (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:16:1)\n    at Cache.get (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\webpack\\lib\\Cache.js:75:18)\n    at ItemCacheFacade.get (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\webpack\\lib\\CacheFacade.js:111:15)\n    at Compilation._codeGenerationModule (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\webpack\\lib\\Compilation.js:3322:9)\n    at codeGen (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\webpack\\lib\\Compilation.js:4861:11)\n    at symbolIterator (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\neo-async\\async.js:3482:9)\n    at timesSync (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\neo-async\\async.js:2297:7)\n    at Object.eachLimit (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\neo-async\\async.js:3463:5)\n    at C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\webpack\\lib\\Compilation.js:4891:14\n    at processQueue (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\webpack\\lib\\util\\processAsyncTree.js:55:4)\n    at process.processTicksAndRejections (node:internal/process/task_queues:77:11)\n-- inner error --\nError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Can't find stylesheet to import.\n  ╷\n1 │ @import \"colors\";\n  │         ^^^^^^^^\n  ╵\n  src\\local1857-event-core\\style.scss 1:9  root stylesheet\n    at Object.<anonymous> (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\css-loader\\dist\\cjs.js??ruleSet[1].rules[3].use[1]!C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\postcss-loader\\dist\\cjs.js??ruleSet[1].rules[3].use[2]!C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\sass-loader\\dist\\cjs.js??ruleSet[1].rules[3].use[3]!C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\src\\local1857-event-core\\style.scss:1:7)\n    at C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\webpack\\lib\\javascript\\JavascriptModulesPlugin.js:441:11\n    at Hook.eval [as call] (eval at create (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\tapable\\lib\\HookCodeFactory.js:19:10), <anonymous>:7:1)\n    at Hook.CALL_DELEGATE [as _call] (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\tapable\\lib\\Hook.js:14:14)\n    at C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\webpack\\lib\\Compilation.js:5060:39\n    at tryRunOrWebpackError (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\webpack\\lib\\HookWebpackError.js:83:7)\n    at __webpack_require_module__ (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\webpack\\lib\\Compilation.js:5058:12)\n    at __webpack_require__ (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\webpack\\lib\\Compilation.js:5015:18)\n    at C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\webpack\\lib\\Compilation.js:5086:20\n    at symbolIterator (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\neo-async\\async.js:3485:9)\n    at done (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\neo-async\\async.js:3527:9)\n    at Hook.eval [as callAsync] (eval at create (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\tapable\\lib\\Hook.js:18:14)\n    at C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\webpack\\lib\\Compilation.js:4993:43\n    at symbolIterator (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\neo-async\\async.js:3482:9)\n    at timesSync (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\neo-async\\async.js:2297:7)\n    at Object.eachLimit (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\neo-async\\async.js:3463:5)\n    at C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\webpack\\lib\\Compilation.js:4958:16\n    at symbolIterator (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\neo-async\\async.js:3485:9)\n    at timesSync (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\neo-async\\async.js:2297:7)\n    at Object.eachLimit (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\neo-async\\async.js:3463:5)\n    at C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\webpack\\lib\\Compilation.js:4926:15\n    at symbolIterator (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\neo-async\\async.js:3485:9)\n    at done (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\neo-async\\async.js:3527:9)\n    at C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\webpack\\lib\\Compilation.js:4873:8\n    at C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\webpack\\lib\\Compilation.js:3352:32\n    at C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\webpack\\lib\\HookWebpackError.js:68:3\n    at Hook.eval [as callAsync] (eval at create (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at Cache.store (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\webpack\\lib\\Cache.js:107:20)\n    at ItemCacheFacade.store (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\webpack\\lib\\CacheFacade.js:137:15)\n    at C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\webpack\\lib\\Compilation.js:3352:11\n    at C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\webpack\\lib\\Cache.js:93:5\n    at Hook.eval [as callAsync] (eval at create (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:16:1)\n    at Cache.get (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\webpack\\lib\\Cache.js:75:18)\n    at ItemCacheFacade.get (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\webpack\\lib\\CacheFacade.js:111:15)\n    at Compilation._codeGenerationModule (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\webpack\\lib\\Compilation.js:3322:9)\n    at codeGen (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\webpack\\lib\\Compilation.js:4861:11)\n    at symbolIterator (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\neo-async\\async.js:3482:9)\n    at timesSync (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\neo-async\\async.js:2297:7)\n    at Object.eachLimit (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\neo-async\\async.js:3463:5)\n    at C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\webpack\\lib\\Compilation.js:4891:14\n    at processQueue (C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\webpack\\lib\\util\\processAsyncTree.js:55:4)\n    at process.processTicksAndRejections (node:internal/process/task_queues:77:11)\n\nGenerated code for C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\css-loader\\dist\\cjs.js??ruleSet[1].rules[3].use[1]!C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\postcss-loader\\dist\\cjs.js??ruleSet[1].rules[3].use[2]!C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\node_modules\\sass-loader\\dist\\cjs.js??ruleSet[1].rules[3].use[3]!C:\\Users\\jalle\\Local Sites\\kclsvoice\\app\\public\\wp-content\\plugins\\events-block\\src\\local1857-event-core\\style.scss\n1 | throw new Error(\"Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nSassError: Can't find stylesheet to import.\\n  ╷\\n1 │ @import \\\"colors\\\";\\n  │         ^^^^^^^^\\n  ╵\\n  src\\\\local1857-event-core\\\\style.scss 1:9  root stylesheet\");");

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./src/local1857-event-core/block.json":
/*!*********************************************!*\
  !*** ./src/local1857-event-core/block.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"local-1857/events-block","version":"0.1.0","title":"Local 1857 Events Block","category":"widgets","icon":"smiley","description":"Imports upcoming events from Google Calendar and renders them on KCLS Voice","supports":{"html":false},"textdomain":"events-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php"}');

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*******************************************!*\
  !*** ./src/local1857-event-core/index.js ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/local1857-event-core/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/local1857-event-core/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/local1857-event-core/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/local1857-event-core/block.json");
/* harmony import */ var _local1857_events_block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./local1857-events-block */ "./src/local1857-event-core/local1857-events-block.js");






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"]
});
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)("local1857/events", {
  edit: _local1857_events_block__WEBPACK_IMPORTED_MODULE_5__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"],
  title: "Local 1857 Events"
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map