"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/components/navbar.tsx":
/*!***********************************!*\
  !*** ./app/components/navbar.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst NavBarComponent = ()=>{\n    _s();\n    const { data: session, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"navbar bg-black navbar-expand-lg\",\n        \"data-bs-theme\": \"dark\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container-fluid\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    className: \"navbar-brand\",\n                    href: \"/\",\n                    children: \"Inicio\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Proyecto Final 7\\\\CafeFront\\\\app\\\\components\\\\navbar.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Proyecto Final 7\\\\CafeFront\\\\app\\\\components\\\\navbar.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"collapse navbar-collapse\",\n                id: \"navbarNav\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"navbar-nav\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"nav-item\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                className: \"nav-link active\",\n                                \"aria-current\": \"page\",\n                                href: \"/Productos\",\n                                children: \"Productos\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Proyecto Final 7\\\\CafeFront\\\\app\\\\components\\\\navbar.tsx\",\n                                lineNumber: 18,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Proyecto Final 7\\\\CafeFront\\\\app\\\\components\\\\navbar.tsx\",\n                            lineNumber: 17,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"nav-item\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                className: \"nav-link active\",\n                                href: \"/Tiendas\",\n                                children: \"Tiendas\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Proyecto Final 7\\\\CafeFront\\\\app\\\\components\\\\navbar.tsx\",\n                                lineNumber: 22,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Proyecto Final 7\\\\CafeFront\\\\app\\\\components\\\\navbar.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, undefined),\n                        session ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"nav-item\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)(),\n                                    className: \"nav-link btn btn-link\",\n                                    children: \"Cerrar Sesi\\xf3n\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Proyecto Final 7\\\\CafeFront\\\\app\\\\components\\\\navbar.tsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Proyecto Final 7\\\\CafeFront\\\\app\\\\components\\\\navbar.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"nav-item\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    className: \"nav-link active\",\n                                    href: \"/Login\",\n                                    children: \"Iniciar Sesi\\xf3n\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Proyecto Final 7\\\\CafeFront\\\\app\\\\components\\\\navbar.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Proyecto Final 7\\\\CafeFront\\\\app\\\\components\\\\navbar.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Proyecto Final 7\\\\CafeFront\\\\app\\\\components\\\\navbar.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Proyecto Final 7\\\\CafeFront\\\\app\\\\components\\\\navbar.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Proyecto Final 7\\\\CafeFront\\\\app\\\\components\\\\navbar.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NavBarComponent, \"ujwIunAD3hlHFoJLG3BNiDLiMqM=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = NavBarComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBarComponent);\nvar _c;\n$RefreshReg$(_c, \"NavBarComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL25hdmJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDNEI7QUFDMEI7QUFFdEQsTUFBTUcsa0JBQWtCOztJQUN0QixNQUFNLEVBQUVDLE1BQU1DLE9BQU8sRUFBRUMsTUFBTSxFQUFFLEdBQUdMLDJEQUFVQTtJQUU1QyxxQkFDRSw4REFBQ007UUFBSUMsV0FBVTtRQUFtQ0MsaUJBQWM7OzBCQUM5RCw4REFBQ0M7Z0JBQUlGLFdBQVU7MEJBQ2IsNEVBQUNSLGtEQUFJQTtvQkFBQ1EsV0FBVTtvQkFBZUcsTUFBSzs4QkFBSTs7Ozs7Ozs7Ozs7MEJBRTFDLDhEQUFDRDtnQkFBSUYsV0FBVTtnQkFBMkJJLElBQUc7MEJBQzNDLDRFQUFDQztvQkFBR0wsV0FBVTs7c0NBR1osOERBQUNNOzRCQUFHTixXQUFVO3NDQUNaLDRFQUFDUixrREFBSUE7Z0NBQUNRLFdBQVU7Z0NBQWtCTyxnQkFBYTtnQ0FBT0osTUFBSzswQ0FBYTs7Ozs7Ozs7Ozs7c0NBRzFFLDhEQUFDRzs0QkFBR04sV0FBVTtzQ0FDWiw0RUFBQ1Isa0RBQUlBO2dDQUFDUSxXQUFVO2dDQUFrQkcsTUFBSzswQ0FBVzs7Ozs7Ozs7Ozs7d0JBR25ETix3QkFDQztzQ0FDRSw0RUFBQ1M7Z0NBQUdOLFdBQVU7MENBQ1osNEVBQUNRO29DQUFPQyxTQUFTLElBQU1mLHdEQUFPQTtvQ0FBSU0sV0FBVTs4Q0FBd0I7Ozs7Ozs7Ozs7OzBEQUl4RTtzQ0FFRSw0RUFBQ007Z0NBQUdOLFdBQVU7MENBQ1osNEVBQUNSLGtEQUFJQTtvQ0FBQ1EsV0FBVTtvQ0FBa0JHLE1BQUs7OENBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWhFO0dBdENNUjs7UUFDOEJGLHVEQUFVQTs7O0tBRHhDRTtBQXdDTiwrREFBZUEsZUFBZUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9uYXZiYXIudHN4Pzg5NmIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCB7IHVzZVNlc3Npb24sIHNpZ25PdXQgfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcblxyXG5jb25zdCBOYXZCYXJDb21wb25lbnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uLCBzdGF0dXMgfSA9IHVzZVNlc3Npb24oKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIGJnLWJsYWNrIG5hdmJhci1leHBhbmQtbGdcIiBkYXRhLWJzLXRoZW1lPVwiZGFya1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIvXCI+SW5pY2lvPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhck5hdlwiPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2XCI+XHJcblxyXG5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJuYXYtbGluayBhY3RpdmVcIiBhcmlhLWN1cnJlbnQ9XCJwYWdlXCIgaHJlZj1cIi9Qcm9kdWN0b3NcIj5Qcm9kdWN0b3M8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJuYXYtbGluayBhY3RpdmVcIiBocmVmPVwiL1RpZW5kYXNcIj5UaWVuZGFzPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICB7c2Vzc2lvbiA/IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2lnbk91dCgpfSBjbGFzc05hbWU9XCJuYXYtbGluayBidG4gYnRuLWxpbmtcIj5DZXJyYXIgU2VzacOzbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICB7LyogTGlua3MgcGFyYSB1c3VhcmlvcyBubyBhdXRlbnRpY2Fkb3MgKi99XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJuYXYtbGluayBhY3RpdmVcIiBocmVmPVwiL0xvZ2luXCI+SW5pY2lhciBTZXNpw7NuPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmF2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyQ29tcG9uZW50Il0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VTZXNzaW9uIiwic2lnbk91dCIsIk5hdkJhckNvbXBvbmVudCIsImRhdGEiLCJzZXNzaW9uIiwic3RhdHVzIiwibmF2IiwiY2xhc3NOYW1lIiwiZGF0YS1icy10aGVtZSIsImRpdiIsImhyZWYiLCJpZCIsInVsIiwibGkiLCJhcmlhLWN1cnJlbnQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/navbar.tsx\n"));

/***/ })

});