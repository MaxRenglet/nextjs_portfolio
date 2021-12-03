"use strict";
(() => {
var exports = {};
exports.id = 327;
exports.ids = [327];
exports.modules = {

/***/ 2944:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CardProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8647);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4287);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CardProject__WEBPACK_IMPORTED_MODULE_3__]);
_CardProject__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];





class ListingProjects extends (react__WEBPACK_IMPORTED_MODULE_2___default().Component) {
    constructor(props){
        super(props);
        this.state = {
            projects: this.props.projects,
            categories: this.props.categories
        };
    }
    render() {
        const { url  } = this.props;
        const { projects , categories  } = this.state;
        let sub = this;
        const handleClick = (e)=>{
            categories.forEach((category)=>{
                if (category.id === e.target.value) {
                    category.select = true;
                } else {
                    category.select = false;
                }
            });
            sub.setState({
                categories: categories
            });
            let result = document.querySelector('.results');
            // result.classList.add('tofade');
            gsap__WEBPACK_IMPORTED_MODULE_4___default().to(result, 1, {
                opacity: 0,
                y: 50,
                onComplete: function() {
                    axios__WEBPACK_IMPORTED_MODULE_1___default().get(`${url}/projects?categories.id=${e.target.value}`).then(function(response, data) {
                        sub.setState({
                            projects: response.data
                        });
                        gsap__WEBPACK_IMPORTED_MODULE_4___default().to(result, 1, {
                            opacity: 1,
                            y: 0
                        });
                    });
                }
            });
        };
        let _projects = projects.map((project, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CardProject__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                k: index,
                url: url,
                project: project
            }, index)
        );
        let _categories = categories.map((category, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: category.select ? "selected" : "",
                value: category.id,
                onClick: handleClick,
                children: category.title
            }, index)
        );
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
            className: "listingProjects",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "filters",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: _categories
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "results",
                    children: _projects
                })
            ]
        }));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListingProjects);

});

/***/ }),

/***/ 6108:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3135);
/* harmony import */ var _components_CardProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8647);
/* harmony import */ var next_dist_client_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8418);
/* harmony import */ var _components_ListingProject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2944);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ListingProject__WEBPACK_IMPORTED_MODULE_4__, react_markdown__WEBPACK_IMPORTED_MODULE_1__, _components_CardProject__WEBPACK_IMPORTED_MODULE_2__]);
([_components_ListingProject__WEBPACK_IMPORTED_MODULE_4__, react_markdown__WEBPACK_IMPORTED_MODULE_1__, _components_CardProject__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);





function Page({ page , projects , url , categories  }) {
    const { title , description  } = page;
    // let _projects = projects.map((project, index) => (
    //   <CardProject
    //     key={index}
    //     k={index}
    //     url={url}
    //     project={project}
    //   />
    // ));
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "container is-max-widescreen projects pt-6",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_markdown__WEBPACK_IMPORTED_MODULE_1__["default"], {
                children: description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ListingProject__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                projects: projects,
                categories: categories,
                url: url
            })
        ]
    }));
};
async function getStaticProps(context) {
    const res = await fetch(`${process.env.ADMIN_URL}/projects-index`);
    const page = await res.json();
    const url = process.env.ADMIN_URL;
    const res_ = await fetch(`${process.env.ADMIN_URL}/projects`);
    const projects = await res_.json();
    const res__ = await fetch(`${process.env.ADMIN_URL}/categories`);
    const categories = await res__.json();
    return {
        props: {
            categories,
            page,
            projects,
            url
        }
    };
}

});

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 4287:
/***/ ((module) => {

module.exports = require("gsap");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6762:
/***/ ((module) => {

module.exports = require("react-awesome-reveal");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1986:
/***/ ((module) => {

module.exports = import("date-and-time");;

/***/ }),

/***/ 3135:
/***/ ((module) => {

module.exports = import("react-markdown");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,647], () => (__webpack_exec__(6108)));
module.exports = __webpack_exports__;

})();