"use strict";
exports.id = 647;
exports.ids = [647];
exports.modules = {

/***/ 8647:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3135);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var date_and_time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1986);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9869);
/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6762);
/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_markdown__WEBPACK_IMPORTED_MODULE_2__, date_and_time__WEBPACK_IMPORTED_MODULE_4__]);
([react_markdown__WEBPACK_IMPORTED_MODULE_2__, date_and_time__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);







class CardProjects extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    shuffleArray(array) {
        for(let i = array.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [
                array[j],
                array[i]
            ];
        }
        return array;
    }
    render() {
        const { url , project , k  } = this.props;
        const { slug , date , title , description , categories , coverImage  } = project;
        let _date = date_and_time__WEBPACK_IMPORTED_MODULE_4__["default"].parse(date, 'YYYY-MM-DD');
        _date = date_and_time__WEBPACK_IMPORTED_MODULE_4__["default"].format(_date, 'YYYY');
        const _categories = categories.map((category, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: category.title
            }, index)
        );
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
            href: `/projects/${slug}`,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                children: k % 2 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_6__.Fade, {
                    cascade: true,
                    direction: "left",
                    triggerOnce: true,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "project_card",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                children: title
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "columns is-vcentered reverse-columns",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "column is-two-thirds",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: url + coverImage.url
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "column infos",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "date",
                                                children: _date
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                className: "categories",
                                                children: _categories
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_markdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                children: description
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            })
                        ]
                    })
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_6__.Fade, {
                    cascade: true,
                    direction: "right",
                    triggerOnce: true,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "project_card",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                children: title
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "columns is-vcentered",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "column infos",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "date",
                                                children: _date
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                className: "categories",
                                                children: _categories
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_markdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                children: description
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "column is-two-thirds",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: url + coverImage.url
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            })
                        ]
                    })
                })
            })
        }));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardProjects);

});

/***/ }),

/***/ 9869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const SVG = (props)=>{
    let svgs = [
        /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
            ...props,
            preserveAspectRatio: "none",
            id: "visual",
            viewBox: "0 0 900 450",
            width: 900,
            height: 450,
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            className: "svg_bg",
            key: "1",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M0 56L50 79.2C100 102.3 200 148.7 300 189.3C400 230 500 265 600 275.5C700 286 800 272 850 265L900 258L900 451L850 451C800 451 700 451 600 451C500 451 400 451 300 451C200 451 100 451 50 451L0 451Z",
                fill: "#0066FF",
                strokeLinecap: "round",
                strokeLinejoin: "miter"
            })
        }),
        /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
            className: "svg_bg",
            ...props,
            preserveAspectRatio: "none",
            id: "visual",
            viewBox: "0 0 900 450",
            width: 900,
            height: 450,
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            key: "2",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M0 141L50 151.5C100 162 200 183 300 218C400 253 500 302 600 277.7C700 253.3 800 155.7 850 106.8L900 58L900 451L850 451C800 451 700 451 600 451C500 451 400 451 300 451C200 451 100 451 50 451L0 451Z",
                fill: "#0066FF",
                strokeLinecap: "round",
                strokeLinejoin: "miter"
            })
        }),
        /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
            ...props,
            preserveAspectRatio: "none",
            id: "visual",
            viewBox: "0 0 900 450",
            width: 900,
            height: 450,
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            className: "svg_bg",
            key: "3",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M0 254L50 272.7C100 291.3 200 328.7 300 310.2C400 291.7 500 217.3 600 192.3C700 167.3 800 191.7 850 203.8L900 216L900 451L850 451C800 451 700 451 600 451C500 451 400 451 300 451C200 451 100 451 50 451L0 451Z",
                fill: "#0066FF",
                strokeLinecap: "round",
                strokeLinejoin: "miter"
            })
        }),
        /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
            ...props,
            preserveAspectRatio: "none",
            id: "visual",
            viewBox: "0 0 900 450",
            width: 900,
            height: 450,
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            className: "svg_bg",
            key: "4",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M0 305L50 261.7C100 218.3 200 131.7 300 112.2C400 92.7 500 140.3 600 182.3C700 224.3 800 260.7 850 278.8L900 297L900 451L850 451C800 451 700 451 600 451C500 451 400 451 300 451C200 451 100 451 50 451L0 451Z",
                fill: "#0066FF",
                strokeLinecap: "round",
                strokeLinejoin: "miter"
            })
        }),
        /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
            ...props,
            preserveAspectRatio: "none",
            id: "visual",
            viewBox: "0 0 900 450",
            width: 900,
            height: 450,
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            className: "svg_bg",
            key: "5",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M0 133L50 148.3C100 163.7 200 194.3 300 203.2C400 212 500 199 600 212C700 225 800 264 850 283.5L900 303L900 451L850 451C800 451 700 451 600 451C500 451 400 451 300 451C200 451 100 451 50 451L0 451Z",
                fill: "#0066FF",
                strokeLinecap: "round",
                strokeLinejoin: "miter"
            })
        }),
        /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
            ...props,
            preserveAspectRatio: "none",
            id: "visual",
            viewBox: "0 0 900 450",
            width: 900,
            height: 450,
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            className: "svg_bg",
            key: "6",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M0 278L50 254.7C100 231.3 200 184.7 300 152.5C400 120.3 500 102.7 600 134C700 165.3 800 245.7 850 285.8L900 326L900 451L850 451C800 451 700 451 600 451C500 451 400 451 300 451C200 451 100 451 50 451L0 451Z",
                fill: "#0066FF",
                strokeLinecap: "round",
                strokeLinejoin: "miter"
            })
        }),
        /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
            className: "svg_bg",
            ...props,
            preserveAspectRatio: "none",
            width: 900,
            height: 450,
            viewBox: "0 0 900 450",
            xmlns: "http://www.w3.org/2000/svg",
            key: "7",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "m0 312 50 19.7c50 19.6 150 59 250 27.5s200-133.9 300-191.5C700 110 800 97 850 90.5l50-6.5v367H0Z"
            })
        }),
        /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
            ...props,
            preserveAspectRatio: "none",
            id: "visual",
            viewBox: "0 0 900 450",
            width: 900,
            height: 450,
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            className: "svg_bg",
            key: "8",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M0 252L50 281.8C100 311.7 200 371.3 300 329.3C400 287.3 500 143.7 600 80.8C700 18 800 36 850 45L900 54L900 451L850 451C800 451 700 451 600 451C500 451 400 451 300 451C200 451 100 451 50 451L0 451Z",
                fill: "#0066FF",
                strokeLinecap: "round",
                strokeLinejoin: "miter"
            })
        }),
        /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
            ...props,
            preserveAspectRatio: "none",
            id: "visual",
            viewBox: "0 0 900 450",
            width: 900,
            height: 450,
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            className: "svg_bg",
            key: "9",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M0 174L50 197.7C100 221.3 200 268.7 300 248.2C400 227.7 500 139.3 600 92.2C700 45 800 39 850 36L900 33L900 451L850 451C800 451 700 451 600 451C500 451 400 451 300 451C200 451 100 451 50 451L0 451Z",
                fill: "#0066FF",
                strokeLinecap: "round",
                strokeLinejoin: "miter"
            })
        }),
        /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
            ...props,
            preserveAspectRatio: "none",
            id: "visual",
            viewBox: "0 0 900 450",
            width: 900,
            height: 450,
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            className: "svg_bg",
            key: "10",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M0 333L50 281.3C100 229.7 200 126.3 300 103C400 79.7 500 136.3 600 158.3C700 180.3 800 167.7 850 161.3L900 155L900 451L850 451C800 451 700 451 600 451C500 451 400 451 300 451C200 451 100 451 50 451L0 451Z",
                fill: "#0066FF",
                strokeLinecap: "round",
                strokeLinejoin: "miter"
            })
        })
    ];
    let id = Math.floor(Math.random() * svgs.length);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "svg",
        "data-id": id,
        children: svgs[id]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SVG);


/***/ })

};
;