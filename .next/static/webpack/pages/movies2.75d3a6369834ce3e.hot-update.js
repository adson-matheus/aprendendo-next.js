"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/movies2",{

/***/ "./pages/movies2.js":
/*!**************************!*\
  !*** ./pages/movies2.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Movies2; }\n/* harmony export */ });\n/* harmony import */ var C_Users_20200023325_Documents_next0_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_20200023325_Documents_next0_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_20200023325_Documents_next0_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Movies2() {\n    var _this = this;\n    _s();\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"http://www.omdbapi.com/?apikey=b2c265dc&s=spider\", fetcher), data = ref.data, error = ref.error;\n    if (error) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n            children: \"Falha na requisi\\xe7\\xe3o.\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\20200023325\\\\Documents\\\\next0\\\\pages\\\\movies2.js\",\n            lineNumber: 5,\n            columnNumber: 28\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\20200023325\\\\Documents\\\\next0\\\\pages\\\\movies2.js\",\n        lineNumber: 5,\n        columnNumber: 23\n    }, this));\n    if (!data) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n            children: \"Carregando...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\20200023325\\\\Documents\\\\next0\\\\pages\\\\movies2.js\",\n            lineNumber: 6,\n            columnNumber: 28\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\20200023325\\\\Documents\\\\next0\\\\pages\\\\movies2.js\",\n        lineNumber: 6,\n        columnNumber: 23\n    }, this));\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        style: {\n            textAlign: 'center'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: data.Search.map(function(m) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: [\n                            m.Title,\n                            \" --- \",\n                            m.Year\n                        ]\n                    }, m.imdbID, true, {\n                        fileName: \"C:\\\\Users\\\\20200023325\\\\Documents\\\\next0\\\\pages\\\\movies2.js\",\n                        lineNumber: 11,\n                        columnNumber: 43\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\20200023325\\\\Documents\\\\next0\\\\pages\\\\movies2.js\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\20200023325\\\\Documents\\\\next0\\\\pages\\\\movies2.js\",\n                lineNumber: 12,\n                columnNumber: 19\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                href: \"/\",\n                children: \"P\\xe1gina Inicial\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\20200023325\\\\Documents\\\\next0\\\\pages\\\\movies2.js\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\20200023325\\\\Documents\\\\next0\\\\pages\\\\movies2.js\",\n                lineNumber: 13,\n                columnNumber: 43\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\20200023325\\\\Documents\\\\next0\\\\pages\\\\movies2.js\",\n        lineNumber: 9,\n        columnNumber: 9\n    }, this));\n};\n_s(Movies2, \"PLUSh3GLacfZJClYQJks7Deieck=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Movies2;\nfunction fetcher(url) {\n    return _fetcher.apply(this, arguments);\n}\nfunction _fetcher() {\n    _fetcher = _asyncToGenerator(C_Users_20200023325_Documents_next0_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(url) {\n        var res, json;\n        return C_Users_20200023325_Documents_next0_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch(url);\n                case 2:\n                    res = _ctx.sent;\n                    _ctx.next = 5;\n                    return res.json();\n                case 5:\n                    json = _ctx.sent;\n                    return _ctx.abrupt(\"return\", json);\n                case 7:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _fetcher.apply(this, arguments);\n}\nvar _c;\n$RefreshReg$(_c, \"Movies2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVQsUUFBUSxDQUFDQyxPQUFPLEdBQUUsQ0FBQzs7O0lBQzlCLEdBQUssQ0FBaUJELEdBQW1FLEdBQW5FQSwrQ0FBTSxDQUFFLENBQWdELG1EQUFHRSxPQUFPLEdBQWpGQyxJQUFJLEdBQVdILEdBQW1FLENBQWxGRyxJQUFJLEVBQUVDLEtBQUssR0FBSUosR0FBbUUsQ0FBNUVJLEtBQUs7SUFDbEIsRUFBRSxFQUFFQSxLQUFLLEVBQUUsTUFBTSw2RUFBRUMsQ0FBRzs4RkFBRUMsQ0FBQztzQkFBQyxDQUFvQjs7Ozs7Ozs7Ozs7SUFDNUMsS0FBR0gsSUFBSSxFQUFFLE1BQU0sNkVBQUVFLENBQUc7OEZBQUVDLENBQUM7c0JBQUMsQ0FBYTs7Ozs7Ozs7Ozs7SUFFdkMsTUFBTSw2RUFDREQsQ0FBRztRQUFDRSxLQUFLLEVBQUUsQ0FBQ0M7WUFBQUEsU0FBUyxFQUFDLENBQVE7UUFBQSxDQUFDOzt3RkFDM0JILENBQUc7MEJBQ0VGLElBQUksQ0FBQ00sTUFBTSxDQUFDQyxHQUFHLENBQUUsUUFBUUwsQ0FBUE0sQ0FBQztrQ0FBSyxNQUFNLCtEQUFMTixDQUFHOzs0QkFBaUJNLENBQUMsQ0FBQ0MsS0FBSzs0QkFBQyxDQUFLOzRCQUFDRCxDQUFDLENBQUNFLElBQUk7O3VCQUEvQkYsQ0FBQyxDQUFDRyxNQUFNOzs7Ozs7Ozs7Ozt3RkFDekNDLENBQUU7Ozs7O3dGQUNSQyxDQUFDO2dCQUFDQyxJQUFJLEVBQUMsQ0FBRzswQkFBQyxDQUFjOzs7Ozs7d0ZBQUtGLENBQUU7Ozs7Ozs7Ozs7O0FBRzdDLENBQUM7R0FidUJkLE9BQU87O1FBQ0xELDJDQUFNOzs7S0FEUkMsT0FBTztTQWVoQkMsT0FBTyxDQUFDZ0IsR0FBRztXQUFYaEIsUUFBTzs7U0FBUEEsUUFBTztJQUFQQSxRQUFPLG9LQUF0QixRQUFRLFNBQWVnQixHQUFHLEVBQUMsQ0FBQztZQUNsQkMsR0FBRyxFQUNIQyxJQUFJOzs7OzsyQkFEUUMsS0FBSyxDQUFDSCxHQUFHOztvQkFBckJDLEdBQUc7OzJCQUNVQSxHQUFHLENBQUNDLElBQUk7O29CQUFyQkEsSUFBSTtpREFDSEEsSUFBSTs7Ozs7O0lBQ2YsQ0FBQztXQUpjbEIsUUFBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9tb3ZpZXMyLmpzPzgzYjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb3ZpZXMyKCl7XHJcbiAgICBjb25zdCB7ZGF0YSwgZXJyb3J9ID0gdXNlU1dSKGBodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9YjJjMjY1ZGMmcz1zcGlkZXJgLCBmZXRjaGVyKVxyXG4gICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj48cD5GYWxoYSBuYSByZXF1aXNpw6fDo28uPC9wPjwvZGl2PlxyXG4gICAgaWYgKCFkYXRhKSByZXR1cm4gPGRpdj48cD5DYXJyZWdhbmRvLi4uPC9wPjwvZGl2PlxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgeyBkYXRhLlNlYXJjaC5tYXAoIChtKSA9PiA8ZGl2IGtleT17bS5pbWRiSUR9PnttLlRpdGxlfSAtLS0ge20uWWVhcn08L2Rpdj4gKSB9XHJcbiAgICAgICAgICAgIDwvZGl2Pjxici8+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+UMOhZ2luYSBJbmljaWFsPC9hPjxici8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoZXIodXJsKXtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIHJldHVybiBqc29uO1xyXG59Il0sIm5hbWVzIjpbInVzZVNXUiIsIk1vdmllczIiLCJmZXRjaGVyIiwiZGF0YSIsImVycm9yIiwiZGl2IiwicCIsInN0eWxlIiwidGV4dEFsaWduIiwiU2VhcmNoIiwibWFwIiwibSIsIlRpdGxlIiwiWWVhciIsImltZGJJRCIsImJyIiwiYSIsImhyZWYiLCJ1cmwiLCJyZXMiLCJqc29uIiwiZmV0Y2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/movies2.js\n");

/***/ })

});