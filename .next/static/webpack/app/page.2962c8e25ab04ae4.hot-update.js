"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.module.css */ \"(app-pages-browser)/./app/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_ProductosCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ProductosCard */ \"(app-pages-browser)/./app/components/ProductosCard.tsx\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst PrincipalPage = ()=>{\n    _s();\n    const { data: session, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)();\n    const [productos, setProductos] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (session === null || session === void 0 ? void 0 : session.user.token) {\n            fetch(\"http://localhost:8080/Productos\", {\n                method: \"GET\",\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                    \"Authorization\": \"Bearer \".concat(session.user.token)\n                }\n            }).then((response)=>response.json()).then((json)=>setProductos(json)).catch((error)=>console.error(\"Error fetching products:\", error));\n            console.log();\n        }\n    }, [\n        session\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().principal),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().content),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().header),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().headerContent),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"Bienvenidos a Caf\\xe9 Contigo\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ruben\\\\Downloads\\\\CafeFront\\\\app\\\\page.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Descubre una amplia variedad de productos de caf\\xe9.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ruben\\\\Downloads\\\\CafeFront\\\\app\\\\page.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ruben\\\\Downloads\\\\CafeFront\\\\app\\\\page.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ruben\\\\Downloads\\\\CafeFront\\\\app\\\\page.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().searchContainer),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Buscador\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ruben\\\\Downloads\\\\CafeFront\\\\app\\\\page.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Buscar productos...\",\n                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().searchInput)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ruben\\\\Downloads\\\\CafeFront\\\\app\\\\page.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().searchButton),\n                            children: \"Buscar\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ruben\\\\Downloads\\\\CafeFront\\\\app\\\\page.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ruben\\\\Downloads\\\\CafeFront\\\\app\\\\page.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().categories),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Categor\\xedas populares\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ruben\\\\Downloads\\\\CafeFront\\\\app\\\\page.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().categoryList),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"./Categorias\",\n                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().categoryItem),\n                                children: \"Categorias\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ruben\\\\Downloads\\\\CafeFront\\\\app\\\\page.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ruben\\\\Downloads\\\\CafeFront\\\\app\\\\page.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ruben\\\\Downloads\\\\CafeFront\\\\app\\\\page.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().featuredProducts),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Productos Destacados\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ruben\\\\Downloads\\\\CafeFront\\\\app\\\\page.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"row\",\n                            children: productos.map((producto)=>//condicionar aqui que se vean los productos con mas likes\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductosCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    producto: producto\n                                }, producto.idProducto, false, {\n                                    fileName: \"C:\\\\Users\\\\ruben\\\\Downloads\\\\CafeFront\\\\app\\\\page.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ruben\\\\Downloads\\\\CafeFront\\\\app\\\\page.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ruben\\\\Downloads\\\\CafeFront\\\\app\\\\page.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ruben\\\\Downloads\\\\CafeFront\\\\app\\\\page.tsx\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ruben\\\\Downloads\\\\CafeFront\\\\app\\\\page.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PrincipalPage, \"jf3/YgcyCpvHe8c44v7NFDSulgI=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession\n    ];\n});\n_c = PrincipalPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PrincipalPage);\nvar _c;\n$RefreshReg$(_c, \"PrincipalPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQzZCO0FBQ2U7QUFDSDtBQUNjO0FBRUQ7QUFFdEQsTUFBTU0sZ0JBQWdCOztJQUNwQixNQUFNLEVBQUVDLE1BQU1DLE9BQU8sRUFBRUMsTUFBTSxFQUFFLEdBQUdKLDJEQUFVQTtJQUM1QyxNQUFNLENBQUNLLFdBQVdDLGFBQWEsR0FBR1QsK0NBQVFBLENBQWMsRUFBRTtJQUUxREQsZ0RBQVNBLENBQUM7UUFFUixJQUFJTyxvQkFBQUEsOEJBQUFBLFFBQVNJLElBQUksQ0FBQ0MsS0FBSyxFQUFFO1lBQ3ZCQyxNQUFNLG1DQUFtQztnQkFDdkNDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsZ0JBQWdCO29CQUNoQixpQkFBaUIsVUFBNkIsT0FBbkJSLFFBQVFJLElBQUksQ0FBQ0MsS0FBSztnQkFDL0M7WUFDRixHQUNHSSxJQUFJLENBQUNDLENBQUFBLFdBQVlBLFNBQVNDLElBQUksSUFDOUJGLElBQUksQ0FBQ0UsQ0FBQUEsT0FBUVIsYUFBYVEsT0FDMUJDLEtBQUssQ0FBQ0MsQ0FBQUEsUUFBU0MsUUFBUUQsS0FBSyxDQUFDLDRCQUE0QkE7WUFFMURDLFFBQVFDLEdBQUc7UUFDZjtJQUdGLEdBQUc7UUFBQ2Y7S0FBUTtJQUdaLHFCQUVFLDhEQUFDZ0I7UUFBSUMsV0FBV3RCLHFFQUFnQjtrQkFHOUIsNEVBQUNxQjtZQUFJQyxXQUFXdEIsbUVBQWM7OzhCQUM5Qiw4REFBQ3lCO29CQUFPSCxXQUFXdEIsa0VBQWE7OEJBQzlCLDRFQUFDcUI7d0JBQUlDLFdBQVd0Qix5RUFBb0I7OzBDQUNsQyw4REFBQzJCOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNDOzBDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFLTCw4REFBQ0M7b0JBQVFQLFdBQVd0QiwyRUFBc0I7O3NDQUN4Qyw4REFBQytCO3NDQUFHOzs7Ozs7c0NBQ0osOERBQUNDOzRCQUFNQyxNQUFLOzRCQUFPQyxhQUFZOzRCQUFzQlosV0FBV3RCLHVFQUFrQjs7Ozs7O3NDQUNsRiw4REFBQ29DOzRCQUFPZCxXQUFXdEIsd0VBQW1CO3NDQUFFOzs7Ozs7Ozs7Ozs7OEJBSTFDLDhEQUFDNkI7b0JBQVFQLFdBQVd0QixzRUFBaUI7O3NDQUNuQyw4REFBQytCO3NDQUFHOzs7Ozs7c0NBQ0osOERBQUNWOzRCQUFJQyxXQUFXdEIsd0VBQW1CO3NDQUVqQyw0RUFBQ0gsa0RBQUlBO2dDQUFDMkMsTUFBSztnQ0FBZWxCLFdBQVd0Qix3RUFBbUI7MENBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQU85RCw4REFBQzZCO29CQUFRUCxXQUFXdEIsNEVBQXVCOztzQ0FDekMsOERBQUMrQjtzQ0FBRzs7Ozs7O3NDQUNKLDhEQUFDVjs0QkFBSUMsV0FBVTtzQ0FDWmYsVUFBVW9DLEdBQUcsQ0FBQyxDQUFDQyxXQUNkLDBEQUEwRDs4Q0FDMUQsOERBQUMzQyxpRUFBYUE7b0NBQTJCMkMsVUFBVUE7bUNBQS9CQSxTQUFTQyxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPckQ7R0FyRU0xQzs7UUFDOEJELHVEQUFVQTs7O0tBRHhDQztBQXVFTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMubW9kdWxlLmNzc1wiO1xuaW1wb3J0IFByb2R1Y3Rvc0NhcmQgZnJvbSBcIi4vY29tcG9uZW50cy9Qcm9kdWN0b3NDYXJkXCI7XG5pbXBvcnQgeyBJUHJvZHVjdG8gfSBmcm9tIFwiLi9tb2RlbHMvSVByb2R1Y3RvXCI7XG5pbXBvcnQgeyB1c2VTZXNzaW9uLCBzaWduT3V0IH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuXG5jb25zdCBQcmluY2lwYWxQYWdlID0gKCkgPT4ge1xuICBjb25zdCB7IGRhdGE6IHNlc3Npb24sIHN0YXR1cyB9ID0gdXNlU2Vzc2lvbigpO1xuICBjb25zdCBbcHJvZHVjdG9zLCBzZXRQcm9kdWN0b3NdID0gdXNlU3RhdGU8SVByb2R1Y3RvW10+KFtdKTtcbiAgXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICBpZiAoc2Vzc2lvbj8udXNlci50b2tlbikge1xuICAgICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9Qcm9kdWN0b3MnLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Nlc3Npb24udXNlci50b2tlbn1gLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihqc29uID0+IHNldFByb2R1Y3Rvcyhqc29uKSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2R1Y3RzOicsIGVycm9yKSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coKTtcbiAgICB9XG5cblxuICB9LCBbc2Vzc2lvbl0pO1xuXG5cbiAgcmV0dXJuIChcblxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJpbmNpcGFsfT5cblxuICAgICAgey8qIENvbnRlbmlkbyBkZSBsYSBww6FnaW5hICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJDb250ZW50fT5cbiAgICAgICAgICA8aDE+QmllbnZlbmlkb3MgYSBDYWbDqSBDb250aWdvPC9oMT5cbiAgICAgICAgICA8cD5EZXNjdWJyZSB1bmEgYW1wbGlhIHZhcmllZGFkIGRlIHByb2R1Y3RvcyBkZSBjYWbDqS48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgICBcbiAgICAgICAgey8qIEJ1c2NhZG9yICovfVxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hDb250YWluZXJ9PlxuICAgICAgICAgIDxoMj5CdXNjYWRvcjwvaDI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJCdXNjYXIgcHJvZHVjdG9zLi4uXCIgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoSW5wdXR9IC8+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hCdXR0b259PkJ1c2NhcjwvYnV0dG9uPlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgey8qIENhdGVnb3LDrWFzICovfVxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yaWVzfT5cbiAgICAgICAgICA8aDI+Q2F0ZWdvcsOtYXMgcG9wdWxhcmVzPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3J5TGlzdH0+XG4gICAgICAgICAgICB7LyogQXF1w60gcHVlZGVzIG1vc3RyYXIgY2F0ZWdvcsOtYXMgbyBlbmxhY2VzIGEgcMOhZ2luYXMgZGUgY2F0ZWdvcsOtYXMgKi99XG4gICAgICAgICAgICA8TGluayBocmVmPVwiLi9DYXRlZ29yaWFzXCIgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcnlJdGVtfT5cbiAgICAgICAgICAgICAgQ2F0ZWdvcmlhc1xuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgey8qIFByb2R1Y3RvcyBEZXN0YWNhZG9zICovfVxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5mZWF0dXJlZFByb2R1Y3RzfT5cbiAgICAgICAgICA8aDI+UHJvZHVjdG9zIERlc3RhY2Fkb3M8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICB7cHJvZHVjdG9zLm1hcCgocHJvZHVjdG86IElQcm9kdWN0bykgPT4gKFxuICAgICAgICAgICAgICAvL2NvbmRpY2lvbmFyIGFxdWkgcXVlIHNlIHZlYW4gbG9zIHByb2R1Y3RvcyBjb24gbWFzIGxpa2VzXG4gICAgICAgICAgICAgIDxQcm9kdWN0b3NDYXJkIGtleT17cHJvZHVjdG8uaWRQcm9kdWN0b30gcHJvZHVjdG89e3Byb2R1Y3RvfSAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJpbmNpcGFsUGFnZTsiXSwibmFtZXMiOlsiTGluayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiUHJvZHVjdG9zQ2FyZCIsInVzZVNlc3Npb24iLCJQcmluY2lwYWxQYWdlIiwiZGF0YSIsInNlc3Npb24iLCJzdGF0dXMiLCJwcm9kdWN0b3MiLCJzZXRQcm9kdWN0b3MiLCJ1c2VyIiwidG9rZW4iLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJwcmluY2lwYWwiLCJjb250ZW50IiwiaGVhZGVyIiwiaGVhZGVyQ29udGVudCIsImgxIiwicCIsInNlY3Rpb24iLCJzZWFyY2hDb250YWluZXIiLCJoMiIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwic2VhcmNoSW5wdXQiLCJidXR0b24iLCJzZWFyY2hCdXR0b24iLCJjYXRlZ29yaWVzIiwiY2F0ZWdvcnlMaXN0IiwiaHJlZiIsImNhdGVnb3J5SXRlbSIsImZlYXR1cmVkUHJvZHVjdHMiLCJtYXAiLCJwcm9kdWN0byIsImlkUHJvZHVjdG8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});