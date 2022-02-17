"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/movies2";
exports.ids = ["pages/movies2"];
exports.modules = {

/***/ "./pages/movies2.js":
/*!**************************!*\
  !*** ./pages/movies2.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Movies2)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);\nswr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nfunction Movies2() {\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(`http://www.omdbapi.com/?apikey=b2c265dc&s=spider`, fetcher);\n    if (error) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Falha na requisi\\xe7\\xe3o.\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\20200023325\\\\Documents\\\\next0\\\\pages\\\\movies2.js\",\n            lineNumber: 5,\n            columnNumber: 28\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\20200023325\\\\Documents\\\\next0\\\\pages\\\\movies2.js\",\n        lineNumber: 5,\n        columnNumber: 23\n    }, this));\n    if (!data) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Carregando...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\20200023325\\\\Documents\\\\next0\\\\pages\\\\movies2.js\",\n            lineNumber: 6,\n            columnNumber: 28\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\20200023325\\\\Documents\\\\next0\\\\pages\\\\movies2.js\",\n        lineNumber: 6,\n        columnNumber: 23\n    }, this));\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: data.Search.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    m.Title,\n                    \" --- \",\n                    m.Year\n                ]\n            }, m.imdbID, true, {\n                fileName: \"C:\\\\Users\\\\20200023325\\\\Documents\\\\next0\\\\pages\\\\movies2.js\",\n                lineNumber: 10,\n                columnNumber: 39\n            }, this)\n        )\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\20200023325\\\\Documents\\\\next0\\\\pages\\\\movies2.js\",\n        lineNumber: 9,\n        columnNumber: 9\n    }, this));\n};\nasync function fetcher(url) {\n    const res = await fetch(url);\n    const json = await res.json();\n    return json;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXdCO0FBRVQsUUFBUSxDQUFDQyxPQUFPLEdBQUUsQ0FBQztJQUM5QixLQUFLLENBQUMsQ0FBQ0MsQ0FBQUEsSUFBSSxHQUFFQyxLQUFLLEdBQUMsR0FBR0gsK0NBQU0sRUFBRSxnREFBZ0QsR0FBR0ksT0FBTztJQUN4RixFQUFFLEVBQUVELEtBQUssRUFBRSxNQUFNLDZFQUFFRSxDQUFHOzhGQUFFQyxDQUFDO3NCQUFDLENBQW9COzs7Ozs7Ozs7OztJQUM5QyxFQUFFLEdBQUdKLElBQUksRUFBRSxNQUFNLDZFQUFFRyxDQUFHOzhGQUFFQyxDQUFDO3NCQUFDLENBQWE7Ozs7Ozs7Ozs7O0lBRXZDLE1BQU0sNkVBQ0RELENBQUc7a0JBQ0VILElBQUksQ0FBQ0ssTUFBTSxDQUFDQyxHQUFHLEVBQUdDLENBQUMsK0VBQU1KLENBQUc7O29CQUFpQkksQ0FBQyxDQUFDQyxLQUFLO29CQUFDLENBQUs7b0JBQUNELENBQUMsQ0FBQ0UsSUFBSTs7ZUFBL0JGLENBQUMsQ0FBQ0csTUFBTTs7Ozs7Ozs7Ozs7QUFHeEQsQ0FBQztlQUVjUixPQUFPLENBQUNTLEdBQUcsRUFBQyxDQUFDO0lBQ3hCLEtBQUssQ0FBQ0MsR0FBRyxHQUFHLEtBQUssQ0FBQ0MsS0FBSyxDQUFDRixHQUFHO0lBQzNCLEtBQUssQ0FBQ0csSUFBSSxHQUFHLEtBQUssQ0FBQ0YsR0FBRyxDQUFDRSxJQUFJO0lBQzNCLE1BQU0sQ0FBQ0EsSUFBSTtBQUNmLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0MC8uL3BhZ2VzL21vdmllczIuanM/ODNiOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vdmllczIoKXtcclxuICAgIGNvbnN0IHtkYXRhLCBlcnJvcn0gPSB1c2VTV1IoYGh0dHA6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT1iMmMyNjVkYyZzPXNwaWRlcmAsIGZldGNoZXIpXHJcbiAgICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PjxwPkZhbGhhIG5hIHJlcXVpc2nDp8Ojby48L3A+PC9kaXY+XHJcbiAgICBpZiAoIWRhdGEpIHJldHVybiA8ZGl2PjxwPkNhcnJlZ2FuZG8uLi48L3A+PC9kaXY+XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7IGRhdGEuU2VhcmNoLm1hcCggKG0pID0+IDxkaXYga2V5PXttLmltZGJJRH0+e20uVGl0bGV9IC0tLSB7bS5ZZWFyfTwvZGl2PiApIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hlcih1cmwpe1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgcmV0dXJuIGpzb247XHJcbn0iXSwibmFtZXMiOlsidXNlU1dSIiwiTW92aWVzMiIsImRhdGEiLCJlcnJvciIsImZldGNoZXIiLCJkaXYiLCJwIiwiU2VhcmNoIiwibWFwIiwibSIsIlRpdGxlIiwiWWVhciIsImltZGJJRCIsInVybCIsInJlcyIsImZldGNoIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/movies2.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/movies2.js"));
module.exports = __webpack_exports__;

})();