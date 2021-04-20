module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "/y5a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_FooterWidgets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("40aI");
/* harmony import */ var _modules_FooterLinks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("D98S");
/* harmony import */ var _modules_FooterCopyright__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("JdYI");







const FooterDefault = () => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("footer", {
  className: "ps-footer",
  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: "container",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_modules_FooterWidgets__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_modules_FooterLinks__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_modules_FooterCopyright__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {})]
  })
});

/* harmony default export */ __webpack_exports__["a"] = (FooterDefault);

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "0wdU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getCartSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getCartError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return removeItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return increaseItemQty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return decreaseItemQty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return updateCartSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return updateCartError; });
const actionTypes = {
  GET_CART: 'GET_CART',
  GET_CART_SUCCESS: 'GET_CART_SUCCESS',
  GET_CART_ERROR: 'GET_CART_ERROR',
  GET_CART_TOTAL_QUANTITY: 'GET_CART_TOTAL_QUANTITY',
  GET_CART_TOTAL_QUANTITY_SUCCESS: 'GET_CART_TOTAL_QUANTITY_SUCCESS',
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  CLEAR_CART: 'CLEAR_CART',
  CLEAR_CART_SUCCESS: 'CLEAR_CART_SUCCESS',
  CLEAR_CART_ERROR: 'CLEAR_CART_ERROR',
  INCREASE_QTY: 'INCREASE_QTY',
  INCREASE_QTY_SUCCESS: 'INCREASE_QTY_SUCCESS',
  INCREASE_QTY_ERROR: 'INCREASE_QTY_ERROR',
  DECREASE_QTY: 'DECREASE_QTY',
  UPDATE_CART: 'UPDATE_CART',
  UPDATE_CART_SUCCESS: 'UPDATE_CART_SUCCESS',
  UPDATE_CART_ERROR: 'UPDATE_CART_ERROR'
};
function getCart() {
  return {
    type: actionTypes.GET_CART
  };
}
function getCartSuccess() {
  return {
    type: actionTypes.GET_CART_SUCCESS
  };
}
function getCartError(error) {
  return {
    type: actionTypes.GET_CART_ERROR,
    error
  };
}
function addItem(product) {
  return {
    type: actionTypes.ADD_ITEM,
    product
  };
}
function removeItem(product) {
  return {
    type: actionTypes.REMOVE_ITEM,
    product
  };
}
function increaseItemQty(product) {
  return {
    type: actionTypes.INCREASE_QTY,
    product
  };
}
function decreaseItemQty(product) {
  return {
    type: actionTypes.DECREASE_QTY,
    product
  };
}
function updateCartSuccess(payload) {
  return {
    type: actionTypes.UPDATE_CART_SUCCESS,
    payload
  };
}
function updateCartError(payload) {
  return {
    type: actionTypes.UPDATE_CART_ERROR,
    payload
  };
}

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("h18c");


/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3o9y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const PrevArrow = props => {
  const {
    className,
    onClick,
    icon
  } = props;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
    className: `slick-arrow slick-prev ${className}`,
    onClick: onClick,
    children: icon ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
      className: icon
    }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
      className: "icon-chevron-left"
    })
  });
};

/* harmony default export */ __webpack_exports__["a"] = (PrevArrow);

/***/ }),

/***/ "40aI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);





const FooterWidgets = () => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
  className: "ps-footer__widgets",
  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("aside", {
    className: "widget widget_footer widget_contact-us",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h4", {
      className: "widget-title",
      children: "Contact us"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "widget_content",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Call us 24/7"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h3", {
        children: "1800 97 97 69"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
        children: ["502 New Design Str, Melbourne, Australia ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
          href: "mailto:contact@martfury.co",
          children: "contact@martfury.co"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
        className: "ps-list--social",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            className: "facebook",
            href: "#",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
              className: "fa fa-facebook"
            })
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            className: "twitter",
            href: "#",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
              className: "fa fa-twitter"
            })
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            className: "google-plus",
            href: "#",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
              className: "fa fa-google-plus"
            })
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            className: "instagram",
            href: "#",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
              className: "fa fa-instagram"
            })
          })
        })]
      })]
    })]
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("aside", {
    className: "widget widget_footer",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h4", {
      className: "widget-title",
      children: "Quick links"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
      className: "ps-list--link",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/page/blank",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            children: "Policy"
          })
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/page/blank",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            children: "Term & Condition"
          })
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/page/blank",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            children: "Shipping"
          })
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/page/blank",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            children: "Return"
          })
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/page/faqs",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            children: "FAQs"
          })
        })
      })]
    })]
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("aside", {
    className: "widget widget_footer",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h4", {
      className: "widget-title",
      children: "Company"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
      className: "ps-list--link",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/page/about-us",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            children: "About Us"
          })
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/page/blank",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            children: "Affilate"
          })
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/page/blank",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            children: "Career"
          })
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/page/contact-us",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            children: "Contact"
          })
        })
      })]
    })]
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("aside", {
    className: "widget widget_footer",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h4", {
      className: "widget-title",
      children: "Bussiness"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
      className: "ps-list--link",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/page/about-us",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            children: "Our Press"
          })
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/account/checkout",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            children: "Checkout"
          })
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/account/user-information",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            children: "My account"
          })
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/shop",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            children: "Shop"
          })
        })
      })]
    })]
  })]
});

/* harmony default export */ __webpack_exports__["a"] = (FooterWidgets);

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4lSd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export stickyHeader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return generateTempArray; });
const stickyHeader = () => {
  let number = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  const header = document.getElementById('headerSticky');

  if (header !== null) {
    if (number >= 300) {
      header.classList.add('header--sticky');
    } else {
      header.classList.remove('header--sticky');
    }
  }
};
const generateTempArray = maxItems => {
  let result = [];

  for (let i = 0; i < maxItems; i++) {
    result.push(i);
  }

  return result;
};

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "8tnw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return carouselStandard; });
/* unused harmony export carouselInSidebar */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return carouselFullwidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return carouselSingle; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_elements_carousel_NextArrow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("s5ri");
/* harmony import */ var _components_elements_carousel_PrevArrow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("3o9y");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




const carouselStandard = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 750,
  slidesToShow: 5,
  slidesToScroll: 2,
  nextArrow: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_elements_carousel_NextArrow__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {}),
  prevArrow: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_elements_carousel_PrevArrow__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {}),
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: true
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 2
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }]
};
const carouselInSidebar = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 2,
  nextArrow: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_elements_carousel_NextArrow__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {}),
  prevArrow: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_elements_carousel_PrevArrow__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {}),
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: true
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 2
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }]
};
const carouselFullwidth = {
  dots: false,
  infinite: true,
  speed: 750,
  slidesToShow: 6,
  slidesToScroll: 3,
  arrows: true,
  nextArrow: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_elements_carousel_NextArrow__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {}),
  prevArrow: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_elements_carousel_PrevArrow__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {}),
  lazyload: true,
  responsive: [{
    breakpoint: 1750,
    settings: {
      slidesToShow: 6,
      slidesToScroll: 3,
      dots: true,
      arrows: false
    }
  }, {
    breakpoint: 1366,
    settings: {
      slidesToShow: 5,
      slidesToScroll: 2,
      infinite: true,
      dots: true,
      arrows: false
    }
  }, {
    breakpoint: 1200,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  }, {
    breakpoint: 1024,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  }, {
    breakpoint: 768,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 2,
      dots: true,
      arrows: false
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 2,
      dots: true,
      arrows: false
    }
  }]
};
const carouselSingle = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_elements_carousel_NextArrow__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {}),
  prevArrow: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_elements_carousel_PrevArrow__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {})
};

/***/ }),

/***/ "9hfV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./components/elements/Rating.jsx
var Rating = __webpack_require__("iAvk");

// EXTERNAL MODULE: ./utilities/product-helper.js
var product_helper = __webpack_require__("OqP1");

// EXTERNAL MODULE: ./components/elements/products/modules/ModuleProductActions.js
var ModuleProductActions = __webpack_require__("bd/c");

// CONCATENATED MODULE: ./components/elements/products/modules/ModuleProductProgressbar.jsx




const ModuleProductProgressbar = ({
  product
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "ps-product__progress-bar ps-progress",
    "data-value": product.inventory,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "ps-progress__value",
      children: product.depot / product.inventory * 100 < 100 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        style: {
          width: product.depot / product.inventory * 100 + '%'
        }
      }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        style: {
          width: '100%'
        }
      })
    }), product.inventory - product.depot >= 0 ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
      children: ["Sold: ", product.inventory - product.depot]
    }) : /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
      children: ["Sold: ", product.inventory]
    })]
  });
};

/* harmony default export */ var modules_ModuleProductProgressbar = (ModuleProductProgressbar);
// CONCATENATED MODULE: ./components/elements/products/ProductDealOfDay.jsx










const ProductDealOfDay = ({
  product
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "ps-product ps-product--inner",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "ps-product__thumbnail",
      children: [Object(product_helper["d" /* StrapiProductThumbnail */])(product), Object(product_helper["a" /* StrapiProductBadge */])(product), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ModuleProductActions["a" /* default */], {
        product: product
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "ps-product__container",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/shop",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          className: "ps-product__vendor",
          children: "Young Shop"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "ps-product__content",
        children: [Object(product_helper["c" /* StrapiProductPriceExpanded */])(product), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/product/[pid]",
          as: `/product/${product.id}`,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            className: "ps-product__title",
            children: product.title
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "ps-product__rating",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Rating["a" /* default */], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            children: product.ratingCount
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(modules_ModuleProductProgressbar, {
          product: product
        })]
      })]
    })]
  });
};

/* harmony default export */ var products_ProductDealOfDay = __webpack_exports__["a"] = (Object(external_react_redux_["connect"])()(ProductDealOfDay));

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "BUgW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_elements_Rating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("iAvk");






const ModuleDetailTopInformation = ({
  product
}) => {
  // Views
  let priceView;

  if (product.is_sale) {
    priceView = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("h4", {
      className: "ps-product__price sale",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("del", {
        className: "mr-2",
        children: ["&", product.sale_price]
      }), "$", product.price]
    });
  } else {
    priceView = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("h4", {
      className: "ps-product__price",
      children: ["$", product.price]
    });
  }

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("header", {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
      children: product.title
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "ps-product__meta",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
        children: ["Brand:", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/shop",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            className: "ml-2 text-capitalize",
            children: product.vendor
          })
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "ps-product__rating",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_elements_Rating__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
          children: "(1 review)"
        })]
      })]
    }), priceView]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (ModuleDetailTopInformation);

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "CLZ7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);





class LanguageSwicher extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
  }

  handleFeatureWillUpdate(e) {
    e.preventDefault();
    antd__WEBPACK_IMPORTED_MODULE_2__["notification"].open({
      message: 'Opp! Something went wrong.',
      description: 'This feature has been updated later!',
      duration: 500
    });
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "ps-dropdown language",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("a", {
        href: "#",
        onClick: this.handleFeatureWillUpdate.bind(this),
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
          src: "/static/img/flag/en.png",
          alt: "martfury"
        }), "English"]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
        className: "ps-dropdown-menu",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("a", {
            href: "#",
            onClick: this.handleFeatureWillUpdate.bind(this),
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
              src: "/static/img/flag/germany.png",
              alt: "martfury"
            }), "Germany"]
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("a", {
            href: "#",
            onClick: this.handleFeatureWillUpdate.bind(this),
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
              src: "/static/img/flag/fr.png",
              alt: "martfury"
            }), "France"]
          })
        })]
      })]
    });
  }

}

/* harmony default export */ __webpack_exports__["a"] = (LanguageSwicher);

/***/ }),

/***/ "Crg1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pU5j");


class CollectionRepository {
  async getCollections(payload) {
    let query = '';
    payload.forEach(item => {
      if (query === '') {
        query = `slug_in=${item}`;
      } else {
        query = query + `&slug_in=${item}`;
      }
    });
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__[/* default */ "d"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__[/* baseUrl */ "c"]}/collections?${query}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getCategoriesBySlug(payload) {
    let query = '';
    payload.forEach(item => {
      if (query === '') {
        query = `slug_in=${item}`;
      } else {
        query = query + `&slug_in=${item}`;
      }
    });
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__[/* default */ "d"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__[/* baseUrl */ "c"]}/product-categories?${query}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getProductsByCollectionSlug(slug) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__[/* default */ "d"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__[/* baseUrl */ "c"]}/collections?slug_in=${slug}`).then(response => {
      if (response.data && response.data.length > 0) {
        return {
          items: response.data[0].products
        };
      } else {
        return null;
      }

      return response.data;
    }).catch(error => {
      console.log(JSON.stringify(error));
      return null;
    });
    return reponse;
  }

  async getProductsByCategorySlug(slug) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__[/* default */ "d"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__[/* baseUrl */ "c"]}/product-categories?slug_in=${slug}`).then(response => {
      if (response.data && response.data.length > 0) {
        return {
          items: response.data[0].products
        };
      } else {
        return null;
      }

      return response.data;
    }).catch(error => {
      console.log(JSON.stringify(error));
      return null;
    });
    return reponse;
  }

}

/* harmony default export */ __webpack_exports__["a"] = (new CollectionRepository());

/***/ }),

/***/ "D98S":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);




const Links = {
  consumerElectric: [{
    text: 'Air Conditioners',
    url: '/shop'
  }, {
    text: 'Audios & Theaters',
    url: '/shop'
  }, {
    text: 'Car Electronics',
    url: '/shop'
  }, {
    text: 'Office Electronics',
    url: '/shop'
  }, {
    text: 'TV Televisions',
    url: '/shop'
  }, {
    text: 'Washing Machines',
    url: '/shop'
  }],
  clothingAndApparel: [{
    text: 'Printers',
    url: '/shop'
  }, {
    text: 'Projectors',
    url: '/shop'
  }, {
    text: 'Scanners',
    url: '/shop'
  }, {
    text: 'Store & Business',
    url: '/shop'
  }, {
    text: '4K Ultra HD TVs',
    url: '/shop'
  }, {
    text: 'LED TVs',
    url: '/shop'
  }, {
    text: 'OLED TVs',
    url: '/shop'
  }],
  gardenAndKitchen: [{
    text: 'Cookware',
    url: '/shop'
  }, {
    text: 'Decoration',
    url: '/shop'
  }, {
    text: 'Furniture',
    url: '/shop'
  }, {
    text: 'Garden Tools',
    url: '/shop'
  }, {
    text: 'Garden Equipments',
    url: '/shop'
  }, {
    text: 'Powers And Hand Tools',
    url: '/shop'
  }, {
    text: 'Utensil & Gadget',
    url: '/shop'
  }],
  healthAndBeauty: [{
    text: 'Hair Care',
    url: '/shop'
  }, {
    text: 'Decoration',
    url: '/shop'
  }, {
    text: 'Makeup',
    url: '/shop'
  }, {
    text: 'Body Shower',
    url: '/shop'
  }, {
    text: 'Skin Care',
    url: '/shop'
  }, {
    text: 'Cologine',
    url: '/shop'
  }, {
    text: 'Perfume',
    url: '/shop'
  }],
  jewelryAndWatch: [{
    text: 'Necklace',
    url: '/shop'
  }, {
    text: 'Pendant',
    url: '/shop'
  }, {
    text: 'Diamond Ring',
    url: '/shop'
  }, {
    text: 'Sliver Earing',
    url: '/shop'
  }, {
    text: 'Leather Watcher',
    url: '/shop'
  }, {
    text: 'Gucci',
    url: '/shop'
  }],
  computerAndTechnology: [{
    text: 'Desktop PC',
    url: '/shop'
  }, {
    text: 'Laptop',
    url: '/shop'
  }, {
    text: 'Smartphones',
    url: '/shop'
  }, {
    text: 'Tablet',
    url: '/shop'
  }, {
    text: 'Game Controller',
    url: '/shop'
  }, {
    text: 'Audio & Video',
    url: '/shop'
  }, {
    text: 'Wireless Speaker',
    url: '/shop'
  }]
};

const FooterLinks = () => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
  className: "ps-footer__links",
  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", {
      children: "Consumer Electric:"
    }), Links.consumerElectric.map(item => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: item.url,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
        children: item.text
      })
    }, item.text))]
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", {
      children: "Clothing & Apparel:"
    }), Links.clothingAndApparel.map(item => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: item.url,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
        children: item.text
      })
    }, item.text))]
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", {
      children: "Home, Garden & Kitchen:"
    }), Links.gardenAndKitchen.map(item => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: item.url,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
        children: item.text
      })
    }, item.text))]
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", {
      children: "Health & Beauty:"
    }), Links.healthAndBeauty.map(item => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: item.url,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
        children: item.text
      })
    }, item.text))]
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", {
      children: "Jewelry & Watches:"
    }), Links.jewelryAndWatch.map(item => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: item.url,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
        children: item.text
      })
    }, item.text))]
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", {
      children: "Computer & Technologies:"
    }), Links.computerAndTechnology.map(item => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: item.url,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
        children: item.text
      })
    }, item.text))]
  })]
});

/* harmony default export */ __webpack_exports__["a"] = (FooterLinks);

/***/ }),

/***/ "E4SY":
/***/ (function(module, exports) {

module.exports = require("react-lazyload");

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "Gq6B":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pU5j");


class ProductRepository {
  async getRecords(params) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__[/* default */ "d"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__[/* baseUrl */ "c"]}/products?${Object(_Repository__WEBPACK_IMPORTED_MODULE_0__[/* serializeQuery */ "e"])(params)}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getProducts(params) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__[/* default */ "d"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__[/* baseUrl */ "c"]}/products?${Object(_Repository__WEBPACK_IMPORTED_MODULE_0__[/* serializeQuery */ "e"])(params)}`).then(response => {
      return {
        items: response.data,
        totalItems: response.data.length
      };
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getBrands() {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__[/* default */ "d"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__[/* baseUrl */ "c"]}/brands`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getProductCategories() {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__[/* default */ "d"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__[/* baseUrl */ "c"]}/product-categories`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getTotalRecords() {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__[/* default */ "d"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__[/* baseUrl */ "c"]}/products/count`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getProductsById(payload) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__[/* default */ "d"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__[/* baseUrl */ "c"]}/products/${payload}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getProductsByCategory(payload) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__[/* default */ "d"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__[/* baseUrl */ "c"]}/product-categories?slug=${payload}`).then(response => {
      if (response.data) {
        if (response.data.length > 0) {
          return response.data[0];
        }
      } else {
        return null;
      }
    }).catch(() => {
      return null;
    });
    return reponse;
  }

  async getProductsByBrand(payload) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__[/* default */ "d"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__[/* baseUrl */ "c"]}/brands?slug=${payload}`).then(response => {
      if (response.data) {
        if (response.data.length > 0) {
          return response.data[0];
        }
      } else {
        return null;
      }
    }).catch(() => {
      return null;
    });
    return reponse;
  }

  async getProductsByBrands(payload) {
    let query = '';
    payload.forEach(item => {
      if (query === '') {
        query = `id_in=${item}`;
      } else {
        query = query + `&id_in=${item}`;
      }
    });
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__[/* default */ "d"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__[/* baseUrl */ "c"]}/brands?${query}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getProductsByBrands(payload) {
    let query = '';
    payload.forEach(item => {
      if (query === '') {
        query = `id_in=${item}`;
      } else {
        query = query + `&id_in=${item}`;
      }
    });
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__[/* default */ "d"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__[/* baseUrl */ "c"]}/brands?${query}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getProductsByPriceRange(payload) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__[/* default */ "d"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__[/* baseUrl */ "c"]}/products?${Object(_Repository__WEBPACK_IMPORTED_MODULE_0__[/* serializeQuery */ "e"])(payload)}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

}

/* harmony default export */ __webpack_exports__["a"] = (new ProductRepository());

/***/ }),

/***/ "GrT+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_static_data_menu_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("y2E8");
var _public_static_data_menu_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t("y2E8", 1);
/* harmony import */ var _components_elements_menu_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("w957");




 // import Network from '~/components/helpers/networks';

const MenuCategoriesDropdown = () => {
  // async function getCategories() {
  //     console.log('123 ', localStorage.getItem('token'));
  //     let data;
  //     if (localStorage.getItem('token') !== null) {
  //         data = await Network.dashboardData();
  //         console.log('setp1', localStorage.getItem('token'));
  //     } else {
  //         const token = await Network.getToken();
  //         // setTimeout(async()=>{
  //         if (token) data = await Network.dashboardData();
  //         // },1000)
  //     }
  //     // console.log("123 token",data);
  //     const tempBanners = data && data.data.data.dashboardPanel.banners;
  //     console.log('123 banners>>', tempBanners);
  //     setBanners(tempBanners);
  // }
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: "menu--product-categories",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "menu__toggle",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
        className: "icon-menu"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
        children: "Shop by Department"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "menu__content",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_elements_menu_Menu__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
        source: _public_static_data_menu_json__WEBPACK_IMPORTED_MODULE_2__.product_categories,
        className: "menu--dropdown"
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (MenuCategoriesDropdown);

/***/ }),

/***/ "I+XA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);





const ModuleProductDetailSpecification = () => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
  className: "ps-product__specification",
  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/page/blank",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
      className: "report",
      children: "Report Abuse"
    })
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", {
      children: "SKU:"
    }), " SF1133569600-1"]
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
    className: "categories",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", {
      children: " Categories:"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/shop",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
        children: "Consumer Electronics"
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/shop",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
        children: "Refrigerator"
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/shop",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
        children: "Babies & Moms"
      })
    })]
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
    className: "tags",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", {
      children: " Tags"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/shop",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
        children: "sofa"
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/shop",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
        children: "technologies"
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/shop",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
        children: "wireless"
      })
    })]
  })]
});

/* harmony default export */ __webpack_exports__["a"] = (ModuleProductDetailSpecification);

/***/ }),

/***/ "JNwe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




const Newsletters = ({
  layout
}) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("section", {
  className: "ps-newsletter",
  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    className: layout && layout === 'container' ? ' container' : 'ps-container',
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("form", {
      className: "ps-form--newsletter",
      action: "do_action",
      method: "post",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12 ",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: "ps-form__left",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h3", {
              children: "Newsletter"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
              children: "Subcribe to get information about products and coupons"
            })]
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12 ",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            className: "ps-form__right",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              className: "form-group--nest",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
                className: "form-control",
                type: "email",
                placeholder: "Email address"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
                className: "ps-btn",
                children: "Subscribe"
              })]
            })
          })
        })]
      })
    })
  })
});

/* harmony default export */ __webpack_exports__["a"] = (Newsletters);

/***/ }),

/***/ "JTMZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("O/hg");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cHt3");
/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_image_lightbox__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _repositories_Repository__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("pU5j");
/* harmony import */ var _components_elements_carousel_NextArrow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("s5ri");
/* harmony import */ var _components_elements_carousel_PrevArrow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("3o9y");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const ThumbnailDefault = ({
  product,
  vertical = true
}) => {
  const galleryCarousel = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const variantCarousel = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const {
    0: gallery,
    1: setGallery
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: variant,
    1: setVariant
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: photoIndex,
    1: setPhotoIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: productImages,
    1: setProductImages
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);

  const handleOpenLightbox = (e, imageIndex) => {
    e.preventDefault();
    setPhotoIndex(imageIndex);
    setIsOpen(true);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let images = [];

    if (product && product.images.length > 0) {
      product.images.map(item => {
        images.push(`${_repositories_Repository__WEBPACK_IMPORTED_MODULE_4__[/* baseUrl */ "c"]}${item.url}`);
      });
      setProductImages(images);
    }

    setGallery(galleryCarousel.current);
    setVariant(variantCarousel.current);
  }, [product]);
  const gallerySetting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_elements_carousel_NextArrow__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {}),
    prevArrow: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_elements_carousel_PrevArrow__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {})
  };
  const variantSetting = {
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        dots: false,
        arrows: false,
        vertical: false,
        infinite: false
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        dots: false,
        arrows: false,
        vertical: false,
        infinite: false
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 4,
        dots: false,
        arrows: false,
        vertical: false,
        infinite: false
      }
    }]
  }; //Views

  let lightboxView, variantCarouselView, imagesView, galleryImagesView;

  if (productImages.length > 0) {
    imagesView = productImages.map(item => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "item",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
        src: item,
        alt: item
      })
    }, item));
    galleryImagesView = productImages.map((item, index) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "item",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
        href: "#",
        onClick: e => handleOpenLightbox(e, index),
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
          src: item,
          alt: item
        })
      })
    }, item));
  }

  if (vertical) {
    variantCarouselView = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, _objectSpread(_objectSpread({
      asNavFor: gallery,
      ref: slider => variantCarousel.current = slider,
      swipeToSlide: true,
      arrows: false,
      slidesToShow: 3,
      vertical: true,
      infinite: true,
      focusOnSelect: true
    }, variantSetting), {}, {
      className: "ps-product__variants",
      children: imagesView
    }));
  } else {
    variantCarouselView = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, {
      asNavFor: gallery,
      ref: slider => variantCarousel.current = slider,
      swipeToSlide: true,
      arrows: false,
      slidesToShow: 6,
      vertical: false,
      centered: true,
      infinite: false,
      focusOnSelect: true,
      className: "ps-product__variants",
      children: imagesView
    });
  }

  if (isOpen) {
    lightboxView = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_image_lightbox__WEBPACK_IMPORTED_MODULE_3___default.a, {
      mainSrc: productImages[photoIndex],
      nextSrc: productImages[(photoIndex + 1) % productImages.length],
      prevSrc: productImages[(photoIndex + productImages.length - 1) % productImages.length],
      onCloseRequest: () => {
        setIsOpen(false);
      },
      onMovePrevRequest: () => {
        setPhotoIndex((photoIndex + productImages.length - 1) % productImages.length);
      },
      onMoveNextRequest: () => {
        setPhotoIndex((photoIndex + 1) % productImages.length);
      }
    });
  }

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: "ps-product__thumbnail",
    "data-vertical": vertical ? 'true' : 'false',
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("figure", {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "ps-wrapper",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, _objectSpread(_objectSpread({}, gallerySetting), {}, {
          ref: slider => galleryCarousel.current = slider,
          asNavFor: variant,
          className: "ps-product__gallery ps-carousel inside",
          children: galleryImagesView
        }))
      })
    }), variantCarouselView, lightboxView]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (ThumbnailDefault);

/***/ }),

/***/ "JdYI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




const FooterCopyright = () => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
  className: "ps-footer__copyright",
  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
    children: "\xA9  2021 Martfury. All Rights Reserved"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
      children: "We Using Safe Payment For:"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
      href: "#",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
        src: "/static/img/payment-method/1.jpg",
        alt: "Martfury"
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
      href: "#",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
        src: "/static/img/payment-method/2.jpg",
        alt: "Martfury"
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
      href: "#",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
        src: "/static/img/payment-method/3.jpg",
        alt: "Martfury"
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
      href: "#",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
        src: "/static/img/payment-method/4.jpg",
        alt: "Martfury"
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
      href: "#",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
        src: "/static/img/payment-method/5.jpg",
        alt: "Martfury"
      })
    })]
  })]
});

/* harmony default export */ __webpack_exports__["a"] = (FooterCopyright);

/***/ }),

/***/ "JdbH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);





const ModuleProductDetailDescription = ({
  product
}) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
  className: "ps-product__desc",
  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
    children: ["Sold By:", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/shop",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("strong", {
          children: [" ", product.vendor]
        })
      })
    })]
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
    className: "ps-list--dot",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
      children: "Unrestrained and portable active stereo speaker"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
      children: " Free from the confines of wires and chords"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
      children: " 20 hours of portable capabilities"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
      children: "Double-ended Coil Cord with 3.5mm Stereo Plugs Included"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
      children: " 3/4\u2033 Dome Tweeters: 2X and 4\u2033 Woofer: 1X"
    })]
  })]
});

/* harmony default export */ __webpack_exports__["a"] = (ModuleProductDetailDescription);

/***/ }),

/***/ "MJbt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_auth_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("W80I");







const AccountQuickLinks = props => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  const handleLogout = e => {
    e.preventDefault();
    dispatch(Object(_store_auth_action__WEBPACK_IMPORTED_MODULE_4__[/* logOut */ "b"])());
  };

  const accountLinks = [{
    text: 'Account Information',
    url: '/account/user-information'
  }, {
    text: 'Notifications',
    url: '/account/notifications'
  }, {
    text: 'Invoices',
    url: '/account/invoices'
  }, {
    text: 'Address',
    url: '/account/addresses'
  }, {
    text: 'Recent Viewed Product',
    url: '/account/recent-viewed-product'
  }, {
    text: 'Wishlist',
    url: '/account/wishlist'
  }];
  const {
    isLoggedIn
  } = props; // View

  const linksView = accountLinks.map(item => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: item.url,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
        children: item.text
      })
    })
  }, item.text));

  if (isLoggedIn === true) {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "ps-block--user-account",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
        className: "icon-user"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "ps-block__content",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
          className: "ps-list--arrow",
          children: [linksView, /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
            className: "ps-block__footer",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
              href: "#",
              onClick: e => handleLogout(e),
              children: "Logout"
            })
          })]
        })
      })]
    });
  } else {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "ps-block--user-header",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "ps-block__left",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
          className: "icon-user"
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "ps-block__right",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/account/login",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            children: "Login"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/account/register",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            children: "Register"
          })
        })]
      })]
    });
  }
};

/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(state => state)(AccountQuickLinks));

/***/ }),

/***/ "MbC5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);




const Logo = ({
  type
}) => {
  let data;

  if (type === 'autopart') {
    data = {
      url: '/home/autopart',
      img: 'img/logo-autopart.png'
    };
  } else if (type === 'technology') {
    data = {
      url: '/home/technology',
      img: 'static/img/logo-technology.png'
    };
  } else if (type === 'technology') {
    data = {
      url: '/home/technology',
      img: 'static/img/logo-technology.png'
    };
  } else if (type === 'electronic') {
    data = {
      url: '/home/electronic',
      img: 'static/img/logo-electronic.png'
    };
  } else if (type === 'furniture') {
    data = {
      url: '/home/furniture',
      img: 'static/img/logo-furniture.png'
    };
  } else if (type === 'organic') {
    data = {
      url: '/home/organic',
      img: 'static/img/logo-organic.png'
    };
  } else {
    data = {
      url: '/',
      img: '/static/img/logo_light.png'
    };
  }

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: data.url,
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
      className: "ps-logo",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
        src: data.img,
        alt: ""
      })
    })
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Logo);

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "O/hg":
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "OqP1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return formatCurrency; });
/* unused harmony export getColletionBySlug */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getItemBySlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return convertSlugsQueryString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StrapiProductBadge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return StrapiProductPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return StrapiProductPriceExpanded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return StrapiProductThumbnail; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("E4SY");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _repositories_Repository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("pU5j");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);



/*
 * React template helpers
 * Author: Nouthemes
 * Developed: diaryforlife
 * */




function formatCurrency(num) {
  if (num !== undefined) {
    return parseFloat(num).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  } else {}
}
function getColletionBySlug(collections, slug) {
  if (collections.length > 0) {
    const result = collections.find(item => item.slug === slug.toString());

    if (result !== undefined) {
      return result.products;
    } else {
      return [];
    }
  } else {
    return [];
  }
}
function getItemBySlug(banners, slug) {
  if (banners.length > 0) {
    const banner = banners.find(item => item.slug === slug.toString());

    if (banner !== undefined) {
      return banner;
    } else {
      return null;
    }
  } else {
    return null;
  }
}
function convertSlugsQueryString(payload) {
  let query = '';

  if (payload.length > 0) {
    payload.forEach(item => {
      if (query === '') {
        query = `slug_in=${item}`;
      } else {
        query = query + `&slug_in=${item}`;
      }
    });
  }

  return query;
}
function StrapiProductBadge(product) {
  let view;

  if (product.badge && product.badge !== null) {
    view = product.badge.map(badge => {
      if (badge.type === 'sale') {
        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "ps-product__badge",
          children: badge.value
        });
      } else if (badge.type === 'outStock') {
        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "ps-product__badge out-stock",
          children: badge.value
        });
      } else {
        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "ps-product__badge hot",
          children: badge.value
        });
      }
    });
  }

  return view;
}
function StrapiProductPrice(product) {
  let view;

  if (product.is_sale === true) {
    view = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
      className: "ps-product__price sale",
      children: ["$", formatCurrency(product.price), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("del", {
        className: "ml-2",
        children: ["$", formatCurrency(product.sale_price)]
      })]
    });
  } else {
    view = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
      className: "ps-product__price",
      children: ["$", formatCurrency(product.price)]
    });
  }

  return view;
}
function StrapiProductPriceExpanded(product) {
  let view;

  if (product.is_sale === true) {
    view = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
      className: "ps-product__price sale",
      children: ["$", formatCurrency(product.price), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("del", {
        className: "ml-2",
        children: ["$", formatCurrency(product.sale_price)]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
        children: "18% off"
      })]
    });
  } else {
    view = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
      className: "ps-product__price",
      children: ["$", formatCurrency(product.price)]
    });
  }

  return view;
}
function StrapiProductThumbnail(product) {
  let view;

  if (product.thumbnail) {
    view = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/product/[pid]",
      as: `/product/${product.id}`,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_lazyload__WEBPACK_IMPORTED_MODULE_2___default.a, {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
            src: `${_repositories_Repository__WEBPACK_IMPORTED_MODULE_3__[/* baseUrl */ "c"]}${product.thumbnail.url}`,
            alt: product.title
          })
        })
      })
    });
  } else {
    view = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/product/[pid]",
      as: `/product/${product.id}`,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_lazyload__WEBPACK_IMPORTED_MODULE_2___default.a, {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
            src: "/static/img/not-found.jpg",
            alt: "martfury"
          })
        })
      })
    });
  }

  return view;
}

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "Sz8t":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./components/shared/headers/modules/AccountQuickLinks.jsx
var modules_AccountQuickLinks = __webpack_require__("MJbt");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./store/auth/action.js
var action = __webpack_require__("W80I");

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// CONCATENATED MODULE: ./components/shared/headers/modules/AccountQuickLinksMobile.jsx



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class AccountQuickLinksMobile_AccountQuickLinks extends external_react_["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleLogout", e => {
      e.preventDefault();
      this.props.dispatch(Object(action["b" /* logOut */])());
    });
  }

  render() {
    const accountLinks = [{
      text: 'Account Information',
      url: '/account/user-information'
    }, {
      text: 'Notifications',
      url: '/account/notifications'
    }, {
      text: 'Invoices',
      url: '/account/invoices'
    }, {
      text: 'Address',
      url: '/account/addresses'
    }, {
      text: 'Recent Viewed Product',
      url: '/account/recent-viewed-product'
    }, {
      text: 'Wishlist',
      url: '/account/wishlist'
    }];

    const menu = /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Menu"], {
      children: [accountLinks.map(link => /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Menu"].Item, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: link.url,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            children: link.text
          })
        })
      }, link.url)), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Menu"].Item, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          href: "#",
          onClick: this.handleLogout.bind(this),
          children: "Logout"
        })
      })]
    });

    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Dropdown"], {
      overlay: menu,
      placement: "bottomLeft",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        href: "#",
        className: "header__extra ps-user--mobile",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
          className: "icon-user"
        })
      })
    });
  }

}

const mapStateToProps = state => {
  return state;
};

/* harmony default export */ var AccountQuickLinksMobile = (Object(external_react_redux_["connect"])(mapStateToProps)(AccountQuickLinksMobile_AccountQuickLinks));
// CONCATENATED MODULE: ./components/shared/headers/modules/MobileHeaderActions.jsx



function MobileHeaderActions_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/*import { Drawer } from 'antd';
import PanelCartMobile from '../../panel/PanelCartMobile';*/

class MobileHeaderActions_MobileHeaderActions extends external_react_["Component"] {
  constructor(props) {
    super(props);

    MobileHeaderActions_defineProperty(this, "handleDrawerClose", () => {
      this.setState({
        menuDrawer: false,
        cartDrawer: false,
        searchDrawer: false,
        categoriesDrawer: false
      });
    });

    this.state = {
      menuDrawer: false,
      cartDrawer: false,
      searchDrawer: false,
      categoriesDrawer: false
    };
  }

  render() {
    const {
      auth
    } = this.props;
    const {
      cartTotal
    } = this.props.cart;
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "navigation__right",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/account/shopping-cart",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
          className: "header__extra",
          href: "#",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
            className: "icon-bag2"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
              children: cartTotal ? cartTotal : 0
            })
          })]
        })
      }), auth.isLoggedIn && Boolean(auth.isLoggedIn) === true ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(AccountQuickLinksMobile, {}) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "header__extra",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/account/login",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
            className: "icon-user"
          })
        })
      })]
    });
  }

}

const MobileHeaderActions_mapStateToProps = state => {
  return state;
};

/* harmony default export */ var modules_MobileHeaderActions = __webpack_exports__["a"] = (Object(external_react_redux_["connect"])(MobileHeaderActions_mapStateToProps)(MobileHeaderActions_MobileHeaderActions));

/***/ }),

/***/ "T/WE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionTypes; });
/* unused harmony export getWishlistList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getWishlistListSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addItemToWishlist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return removeWishlistItem; });
/* unused harmony export clearWishlist */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return updateWishlistListSuccess; });
const actionTypes = {
  GET_WISHLIST_LIST: 'GET_WISHLIST_LIST',
  GET_WISHLIST_LIST_SUCCESS: 'GET_WISHLIST_LIST_SUCCESS',
  GET_WISHLIST_LIST_ERROR: 'GET_WISHLIST_LIST_ERROR',
  ADD_ITEM_WISHLISH: 'ADD_ITEM_WISHLISH',
  REMOVE_ITEM_WISHLISH: 'REMOVE_ITEM_WISHLISH',
  UPDATE_WISHLISH_LIST: 'UPDATE_WISHLISH_LIST',
  UPDATE_WISHLISH_LIST_SUCCESS: 'UPDATE_WISHLISH_LIST_SUCCESS',
  UPDATE_WISHLISH_LIST_ERROR: 'UPDATE_WISHLISH_LIST_ERROR',
  CLEAR_WISHLISH_LIST: 'CLEAR_WISHLISH_LIST'
};
function getWishlistList() {
  return {
    type: actionTypes.GET_WISHLIST_LIST
  };
}
function getWishlistListSuccess(data) {
  return {
    type: actionTypes.GET_WISHLIST_LIST_SUCCESS,
    data
  };
}
function addItemToWishlist(product) {
  return {
    type: actionTypes.ADD_ITEM_WISHLISH,
    product
  };
}
function removeWishlistItem(product) {
  return {
    type: actionTypes.REMOVE_ITEM_WISHLISH,
    product
  };
}
function clearWishlist() {
  return {
    type: actionTypes.CLEAR_CART
  };
}
function updateWishlistListSuccess(payload) {
  return {
    type: actionTypes.UPDATE_WISHLISH_LIST_SUCCESS,
    payload
  };
}

/***/ }),

/***/ "Tt/Y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_elements_common_Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MbC5");
/* harmony import */ var _components_shared_headers_modules_SearchHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("coPK");
/* harmony import */ var _components_shared_navigation_NavigationDefault__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("e0C1");
/* harmony import */ var _components_shared_headers_modules_HeaderActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("rUi8");
/* harmony import */ var _utilities_common_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("4lSd");
/* harmony import */ var _components_shared_menus_MenuCategoriesDropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("GrT+");










const HeaderDefault = () => {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (false) {}
  }, []);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("header", {
    className: "header header--1",
    "data-sticky": "true",
    id: "headerSticky",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "header__top",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "ps-container",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "header__left",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_elements_common_Logo__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_shared_menus_MenuCategoriesDropdown__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {})]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "header__center",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_shared_headers_modules_SearchHeader__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {})
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "header__right",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_shared_headers_modules_HeaderActions__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {})
        })]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_shared_navigation_NavigationDefault__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {})]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (HeaderDefault);

/***/ }),

/***/ "URQM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getProductsByCollectionHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getProductsByCategoriesHelper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _repositories_CollectionRepository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Crg1");
/* harmony import */ var _repositories_ProductRepository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Gq6B");
/*
 * React template helpers
 * Author: Nouthemes
 * Developed: diaryforlife
 * */



async function getProductsByCollectionHelper(collectionSlug, pageSize = 12) {
  let products;

  if (collectionSlug) {
    products = await _repositories_CollectionRepository__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].getProductsByCollectionSlug(collectionSlug);
  } else {
    const queries = {
      _limit: pageSize
    };
    products = await _repositories_ProductRepository__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].getRecords(queries);
  }

  if (products) {
    return products;
  } else {
    return null;
  }
}
async function getProductsByCategoriesHelper(slug, pageSize = 12) {
  let products;

  if (slug) {
    products = await _repositories_CollectionRepository__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].getProductsByCategorySlug(slug);
  } else {
    const queries = {
      _limit: pageSize
    };
    products = await _repositories_ProductRepository__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].getRecords(queries);
  }

  if (products) {
    return products;
  } else {
    return null;
  }
}

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "W80I":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return loginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return logOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return logOutSuccess; });
const actionTypes = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGOUT: 'LOGOUT',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  CHECK_AUTHORIZATION: 'CHECK_AUTHORIZATION'
};
function login() {
  return {
    type: actionTypes.LOGIN_REQUEST
  };
}
function loginSuccess() {
  return {
    type: actionTypes.LOGIN_SUCCESS
  };
}
function logOut() {
  return {
    type: actionTypes.LOGOUT
  };
}
function logOutSuccess() {
  return {
    type: actionTypes.LOGOUT_SUCCESS
  };
}

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "ZVHM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("wy2R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);





class CountDownSimple extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      seconds: null,
      minutes: null,
      hours: null,
      days: null
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const {
        timeTillDate,
        timeFormat
      } = this.props;
      const then = moment__WEBPACK_IMPORTED_MODULE_2___default()(timeTillDate, timeFormat);
      const now = moment__WEBPACK_IMPORTED_MODULE_2___default()();
      const countdown = moment__WEBPACK_IMPORTED_MODULE_2___default()(then - now);
      const days = countdown.format('D');
      const hours = countdown.format('HH');
      const minutes = countdown.format('mm');
      const seconds = countdown.format('ss');
      this.setState({
        days,
        hours,
        minutes,
        seconds
      });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    const {
      days,
      hours,
      minutes,
      seconds
    } = this.state;
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
      className: "ps-countdown",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
          className: "days mr-1",
          children: days
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
          className: "hours ml-1 mr-1",
          children: hours
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
          className: "minutes ml-1 mr-1",
          children: minutes
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
          className: "seconds ml-1",
          children: seconds
        })
      })]
    });
  }

}

/* harmony default export */ __webpack_exports__["a"] = (CountDownSimple);

/***/ }),

/***/ "ZzbE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return changeCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return changeCurrencySuccess; });
const actionTypes = {
  CHANGE_CURRENCY: 'CHANGE_CURRENCY',
  CHANGE_CURRENCY_SUCCESS: 'CHANGE_CURRENCY_SUCCESS'
};
function changeCurrency(currency) {
  return {
    type: actionTypes.CHANGE_CURRENCY,
    currency
  };
}
function changeCurrencySuccess(currency) {
  return {
    type: actionTypes.CHANGE_CURRENCY_SUCCESS,
    currency
  };
}

/***/ }),

/***/ "bKgA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_elements_detail_thumbnail_ThumbnailDefault__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("JTMZ");
/* harmony import */ var _components_elements_detail_modules_ModuleDetailTopInformation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("BUgW");
/* harmony import */ var _components_elements_detail_modules_ModuleProductDetailDescription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("JdbH");
/* harmony import */ var _components_elements_detail_modules_ModuleDetailShoppingActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("npkp");
/* harmony import */ var _components_elements_detail_modules_ModuleProductDetailSpecification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("I+XA");
/* harmony import */ var _components_elements_detail_modules_ModuleProductDetailSharing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("mJh6");
/* harmony import */ var _components_elements_detail_modules_ModuleDetailActionsMobile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("hWwc");











const ProductDetailQuickView = ({
  product
}) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
  className: "ps-product--detail ps-product--quickview",
  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: "ps-product__header",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_elements_detail_thumbnail_ThumbnailDefault__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
      product: product,
      vertical: false
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "ps-product__info",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_elements_detail_modules_ModuleDetailTopInformation__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
        product: product
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_elements_detail_modules_ModuleProductDetailDescription__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
        product: product
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_elements_detail_modules_ModuleDetailShoppingActions__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
        product: product,
        extended: true
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_elements_detail_modules_ModuleProductDetailSpecification__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_elements_detail_modules_ModuleProductDetailSharing__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_elements_detail_modules_ModuleDetailActionsMobile__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {})]
    })]
  })
});

/* harmony default export */ __webpack_exports__["a"] = (ProductDetailQuickView);

/***/ }),

/***/ "bd/c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_cart_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("0wdU");
/* harmony import */ var _store_compare_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("q8Yi");
/* harmony import */ var _store_wishlist_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("T/WE");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_elements_detail_ProductDetailQuickView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("bKgA");










const ModuleProductActions = ({
  product
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  const {
    0: isQuickView,
    1: setIsQuickView
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const handleAddItemToCart = e => {
    e.preventDefault();
    dispatch(Object(_store_cart_action__WEBPACK_IMPORTED_MODULE_3__[/* addItem */ "b"])(product));
  };

  const handleAddItemToCompare = e => {
    e.preventDefault();
    dispatch(Object(_store_compare_action__WEBPACK_IMPORTED_MODULE_4__[/* addItemToCompare */ "b"])(product));
  };

  const handleAddItemToWishlist = e => {
    dispatch(Object(_store_wishlist_action__WEBPACK_IMPORTED_MODULE_5__[/* addItemToWishlist */ "b"])(product));
  };

  const handleShowQuickView = e => {
    e.preventDefault();
    setIsQuickView(true);
  };

  const handleHideQuickView = e => {
    e.preventDefault();
    setIsQuickView(false);
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
    className: "ps-product__actions",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
        href: "#",
        "data-toggle": "tooltip",
        "data-placement": "top",
        title: "Add To Cart",
        onClick: handleAddItemToCart,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
          className: "icon-bag2"
        })
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
        href: "#",
        "data-toggle": "tooltip",
        "data-placement": "top",
        title: "Quick View",
        onClick: handleShowQuickView,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
          className: "icon-eye"
        })
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
        href: "#",
        "data-toggle": "tooltip",
        "data-placement": "top",
        title: "Add to wishlist",
        onClick: handleAddItemToWishlist,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
          className: "icon-heart"
        })
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
        href: "#",
        "data-toggle": "tooltip",
        "data-placement": "top",
        title: "Compare",
        onClick: handleAddItemToCompare,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
          className: "icon-chart-bars"
        })
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
      centered: true,
      footer: null,
      width: 1024,
      onCancel: e => handleHideQuickView(e),
      visible: isQuickView,
      closeIcon: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
        className: "icon icon-cross2"
      }),
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h3", {
        children: "Quickview"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_elements_detail_ProductDetailQuickView__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
        product: product
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (ModuleProductActions);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cHt3":
/***/ (function(module, exports) {

module.exports = require("react-image-lightbox");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, typeof locale !== 'undefined' ? locale : router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "coPK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _repositories_ProductRepository__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Gq6B");
/* harmony import */ var _components_elements_products_ProductSearchResult__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("qQUb");








const exampleCategories = ['All', 'Babies & Moms', 'Books & Office', 'Cars & Motocycles', 'Clothing & Apparel', ' Accessories', 'Bags', 'Kid’s Fashion', 'Mens', 'Shoes', 'Sunglasses', 'Womens', 'Computers & Technologies', 'Desktop PC', 'Laptop', 'Smartphones', 'Consumer Electrics', 'Air Conditioners', 'Accessories', 'Type Hanging Cell', 'Audios & Theaters', 'Headphone', 'Home Theater System', 'Speakers', 'Car Electronics', 'Audio & Video', 'Car Security', 'Radar Detector', 'Vehicle GPS', 'Office Electronics', 'Printers', 'Projectors', 'Scanners', 'Store & Business', 'Refrigerators', 'TV Televisions', '4K Ultra HD TVs', 'LED TVs', 'OLED TVs', 'Washing Machines', 'Type Drying Clothes', 'Type Horizontal', 'Type Vertical', 'Garden & Kitchen', 'Cookware', 'Decoration', 'Furniture', 'Garden Tools', 'Home Improvement', 'Powers And Hand Tools', 'Utensil & Gadget', 'Health & Beauty', 'Equipments', 'Hair Care', 'Perfumer', 'Wine Cabinets'];

function useDebounce(value, delay) {
  const {
    0: debouncedValue,
    1: setDebouncedValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(value);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    // Update debounced value after delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}

const SearchHeader = () => {
  const inputEl = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const {
    0: isSearch,
    1: setIsSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: keyword,
    1: setKeyword
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: resultItems,
    1: setResultItems
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const debouncedSearchTerm = useDebounce(keyword, 300);

  function handleClearKeyword() {
    setKeyword('');
    setIsSearch(false);
    setLoading(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push(`/search?keyword=${keyword}`);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (debouncedSearchTerm) {
      setLoading(true);

      if (keyword) {
        const queries = {
          _limit: 5,
          title_contains: keyword
        };
        const products = _repositories_ProductRepository__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].getRecords(queries);
        products.then(result => {
          console.log(result);
          setLoading(false);
          setResultItems(result);
          setIsSearch(true);
        });
      } else {
        setIsSearch(false);
        setKeyword('');
      }

      if (loading) {
        setIsSearch(false);
      }
    } else {
      setLoading(false);
      setIsSearch(false);
    }
  }, [debouncedSearchTerm]); // Views

  let productItemsView, clearTextView, selectOptionView, loadingView, loadMoreView;

  if (!loading) {
    if (resultItems && resultItems.length > 0) {
      if (resultItems.length > 5) {
        loadMoreView = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "ps-panel__footer text-center",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/search",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
              children: "See all results"
            })
          })
        });
      }

      productItemsView = resultItems.map(product => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_elements_products_ProductSearchResult__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
        product: product
      }, product.id));
    } else {
      productItemsView = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "No product found."
      });
    }

    if (keyword !== '') {
      clearTextView = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
        className: "ps-form__action",
        onClick: handleClearKeyword,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
          className: "icon icon-cross2"
        })
      });
    }
  } else {
    loadingView = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
      className: "ps-form__action",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Spin"], {
        size: "small"
      })
    });
  }

  selectOptionView = exampleCategories.map(option => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
    value: option,
    children: option
  }, option));
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("form", {
    className: "ps-form--quick-search",
    method: "get",
    action: "/",
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "ps-form__categories",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("select", {
        className: "form-control",
        children: selectOptionView
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "ps-form__input",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
        ref: inputEl,
        className: "form-control",
        type: "text",
        value: keyword,
        placeholder: "I'm shopping for...",
        onChange: e => setKeyword(e.target.value)
      }), clearTextView, loadingView]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
      onClick: handleSubmit,
      children: "Search"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: `ps-panel--search-result${isSearch ? ' active ' : ''}`,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "ps-panel__content",
        children: productItemsView
      }), loadMoreView]
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (SearchHeader);

/***/ }),

/***/ "dO4C":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("O/hg");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_elements_products_ProductDealOfDay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("9hfV");
/* harmony import */ var _utilities_common_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("4lSd");
/* harmony import */ var _components_elements_skeletons_SkeletonProduct__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("fDE7");
/* harmony import */ var _utilities_strapi_fetch_data_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("URQM");
/* harmony import */ var _utilities_carousel_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("8tnw");
/* harmony import */ var _components_elements_CountDownSimple__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("ZVHM");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const MarketPlaceDealOfDay = ({
  collectionSlug
}) => {
  const {
    0: productItems,
    1: setProductItems
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);

  async function getProducts() {
    setLoading(true);
    const responseData = await Object(_utilities_strapi_fetch_data_helpers__WEBPACK_IMPORTED_MODULE_7__[/* getProductsByCollectionHelper */ "b"])(collectionSlug);

    if (responseData) {
      setProductItems(responseData.items);
      setTimeout(function () {
        setLoading(false);
      }.bind(this), 250);
    }
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    getProducts();
  }, []); // Views

  let productItemsView;

  if (!loading) {
    if (productItems && productItems.length > 0) {
      const slideItems = productItems.map(item => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_elements_products_ProductDealOfDay__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
        product: item
      }, item.id));
      productItemsView = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_slick__WEBPACK_IMPORTED_MODULE_3___default.a, _objectSpread(_objectSpread({}, _utilities_carousel_helpers__WEBPACK_IMPORTED_MODULE_8__[/* carouselStandard */ "c"]), {}, {
        className: "ps-carousel outside",
        children: slideItems
      }));
    } else {
      productItemsView = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "No product(s) found."
      });
    }
  } else {
    const skeletons = Object(_utilities_common_helpers__WEBPACK_IMPORTED_MODULE_5__[/* generateTempArray */ "a"])(6).map(item => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "col-xl-2 col-lg-3 col-sm-3 col-6",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_elements_skeletons_SkeletonProduct__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {})
    }, item));
    productItemsView = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "row",
      children: skeletons
    });
  }

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    className: "ps-deal-of-day",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "ps-container",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "ps-section__header",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "ps-block--countdown-deal",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            className: "ps-block__left",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h3", {
              children: "Deal of the day"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            className: "ps-block__right",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("figure", {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("figcaption", {
                children: "End in:"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_elements_CountDownSimple__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
                timeTillDate: "12 31 2021, 6:00 am",
                timeFormat: "MM DD YYYY, h:mm a"
              })]
            })
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/shop",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            children: "View all"
          })
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "ps-section__content",
        children: productItemsView
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["a"] = (MarketPlaceDealOfDay);

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "e0C1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elements_menu_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("w957");
/* harmony import */ var _public_static_data_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("y2E8");
var _public_static_data_menu__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t("y2E8", 1);
/* harmony import */ var _headers_modules_CurrencyDropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("s/7F");
/* harmony import */ var _headers_modules_LanguageSwicher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("CLZ7");
/* harmony import */ var _components_shared_menus_MenuCategoriesDropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("GrT+");











class NavigationDefault extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
  }

  handleFeatureWillUpdate(e) {
    e.preventDefault();
    antd__WEBPACK_IMPORTED_MODULE_3__["notification"].open({
      message: 'Opp! Something went wrong.',
      description: 'This feature has been updated later!',
      duration: 500
    });
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("nav", {
      className: "navigation",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "ps-container",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "navigation__left",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_shared_menus_MenuCategoriesDropdown__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {})
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "navigation__right",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_elements_menu_Menu__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
            source: _public_static_data_menu__WEBPACK_IMPORTED_MODULE_5__.menuPrimary.menu_1,
            className: "menu"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
            className: "navigation__extra",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/vendor/become-a-vendor",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                  children: "Sell on Martfury"
                })
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/account/order-tracking",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                  children: "Tract your order"
                })
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_headers_modules_CurrencyDropdown__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {})
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_headers_modules_LanguageSwicher__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {})
            })]
          })]
        })]
      })
    });
  }

}

/* harmony default export */ __webpack_exports__["a"] = (NavigationDefault);

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__("fcRV"));

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND_ERROR = 'SSG Data NOT_FOUND';

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        // TODO: handle reloading in development from fallback returning 200
        // to on-demand-entry-handler causing it to reload periodically
        throw new Error(SSG_DATA_NOT_FOUND_ERROR);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages, false);

          if (pages.includes(parsedHref.pathname)) {
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;
      const ssg404 = err.message === SSG_DATA_NOT_FOUND_ERROR;

      if (ssg404) {
        try {
          let mod;
          ({
            page: Component,
            styleSheets,
            mod
          } = await this.fetchComponent('/404')); // TODO: should we tolerate these props missing and still render the
          // page instead of falling back to _error?

          if (mod && mod.__N_SSG) {
            props = await this._getStaticData(this.pageLoader.getDataHref('/404', '/404', true, this.locale));
          }
        } catch (_err) {// non-fatal fallback to _error
        }
      }

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err: ssg404 ? undefined : err,
        error: ssg404 ? undefined : err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const existingRouteInfo = this.components[route];

      if (shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "emho":
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"name\":\"Clothing & Apparel\",\"slug\":\"clothing-and-parel\",\"description\":null,\"created_at\":\"2020-03-14T10:24:42.894Z\",\"updated_at\":\"2020-04-17T08:41:15.412Z\",\"products\":[{\"id\":4,\"title\":\"Herschel Leather Duffle Bag In Brown Color\",\"is_featured\":false,\"is_hot\":false,\"price\":125.3,\"sale_price\":null,\"vendor\":\"Go Pro\",\"review\":4,\"is_out_of_stock\":false,\"depot\":50,\"inventory\":70,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T05:58:54.229Z\",\"updated_at\":\"2020-03-15T05:58:54.229Z\",\"variants\":[],\"images\":[{\"id\":14,\"name\":\"4a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"ff63a2eb476e45b1bfef05ee79115018\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":74.96,\"url\":\"/uploads/ff63a2eb476e45b1bfef05ee79115018.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T05:58:54.276Z\",\"updated_at\":\"2020-03-15T05:58:54.276Z\"},{\"id\":15,\"name\":\"4b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"9b7e71c6299c456baceb165ec185687d\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":76.68,\"url\":\"/uploads/9b7e71c6299c456baceb165ec185687d.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T05:58:54.287Z\",\"updated_at\":\"2020-03-15T05:58:54.287Z\"},{\"id\":16,\"name\":\"4c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"11591497e4ac4779981252032c8b0381\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":92.28,\"url\":\"/uploads/11591497e4ac4779981252032c8b0381.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T05:58:54.300Z\",\"updated_at\":\"2020-03-15T05:58:54.300Z\"},{\"id\":17,\"name\":\"4d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"bbc7b7c8745140e19653bc109965f9f4\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":26.43,\"url\":\"/uploads/bbc7b7c8745140e19653bc109965f9f4.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T05:58:54.311Z\",\"updated_at\":\"2020-03-15T05:58:54.311Z\"}],\"thumbnail\":{\"id\":13,\"name\":\"4a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"b5deb586612e4c808272da9913b8109b\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":74.96,\"url\":\"/uploads/b5deb586612e4c808272da9913b8109b.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T05:58:54.262Z\",\"updated_at\":\"2020-03-15T05:58:54.262Z\"}},{\"id\":9,\"title\":\"Unero Military Classical Backpack\",\"is_featured\":false,\"is_hot\":false,\"price\":42.2,\"sale_price\":35.89,\"vendor\":\"Young shop\",\"review\":3,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-15T06:18:20.414Z\",\"updated_at\":\"2020-03-15T06:18:20.414Z\",\"variants\":[],\"images\":[{\"id\":37,\"name\":\"9a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"13fc9fc391d64652a0139f54cdac5c2b\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":43.02,\"url\":\"/uploads/13fc9fc391d64652a0139f54cdac5c2b.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:18:20.533Z\",\"updated_at\":\"2020-03-15T06:18:20.533Z\"},{\"id\":38,\"name\":\"9b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"3d3ef24143bc473eb75a5721228e1f6d\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":50.61,\"url\":\"/uploads/3d3ef24143bc473eb75a5721228e1f6d.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:18:20.573Z\",\"updated_at\":\"2020-03-15T06:18:20.573Z\"},{\"id\":39,\"name\":\"9c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"7420bed7be764af19c26f762296ff27d\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":44.06,\"url\":\"/uploads/7420bed7be764af19c26f762296ff27d.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:18:20.596Z\",\"updated_at\":\"2020-03-15T06:18:20.596Z\"},{\"id\":40,\"name\":\"9d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"10c4fdf0f6124ab79e5ab46dc2c52e38\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":47.73,\"url\":\"/uploads/10c4fdf0f6124ab79e5ab46dc2c52e38.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:18:20.607Z\",\"updated_at\":\"2020-03-15T06:18:20.607Z\"}],\"thumbnail\":{\"id\":36,\"name\":\"8.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"1e1f0f78e33d4ce7828d21465e84da7d\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":8.13,\"url\":\"/uploads/1e1f0f78e33d4ce7828d21465e84da7d.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:18:20.459Z\",\"updated_at\":\"2020-03-15T06:18:20.459Z\"}},{\"id\":10,\"title\":\"Rayban Rounded Sunglass Brown Color\",\"is_featured\":false,\"is_hot\":false,\"price\":35.89,\"sale_price\":null,\"vendor\":\"Young shop\",\"review\":5,\"is_out_of_stock\":false,\"depot\":50,\"inventory\":60,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T06:20:39.867Z\",\"updated_at\":\"2020-03-15T06:20:39.867Z\",\"variants\":[],\"images\":[{\"id\":42,\"name\":\"10a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"0208616a8daa44cbb20f12eaebf8de53\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":21.67,\"url\":\"/uploads/0208616a8daa44cbb20f12eaebf8de53.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:20:39.908Z\",\"updated_at\":\"2020-03-15T06:20:39.908Z\"},{\"id\":43,\"name\":\"10b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"cba8c25fcf0d41d1aac41f05d8f7ad8e\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":20.16,\"url\":\"/uploads/cba8c25fcf0d41d1aac41f05d8f7ad8e.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:20:39.925Z\",\"updated_at\":\"2020-03-15T06:20:39.925Z\"},{\"id\":44,\"name\":\"10c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"f8f22b0f8be04b559439dd7e7a4b9631\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":14.77,\"url\":\"/uploads/f8f22b0f8be04b559439dd7e7a4b9631.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:20:39.935Z\",\"updated_at\":\"2020-03-15T06:20:39.935Z\"}],\"thumbnail\":{\"id\":41,\"name\":\"9.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"0f04c128bb2945608bed459cdff45b2d\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":4.7,\"url\":\"/uploads/0f04c128bb2945608bed459cdff45b2d.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:20:39.893Z\",\"updated_at\":\"2020-03-15T06:20:39.893Z\"}},{\"id\":11,\"title\":\"Sleeve Linen Blend Caro Pane Shirt\",\"is_featured\":false,\"is_hot\":false,\"price\":29.39,\"sale_price\":null,\"vendor\":\"Go Pro\",\"review\":4,\"is_out_of_stock\":false,\"depot\":65,\"inventory\":80,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T06:22:44.237Z\",\"updated_at\":\"2020-03-15T06:22:44.237Z\",\"variants\":[],\"images\":[{\"id\":46,\"name\":\"11a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"ab27be4989234d5abcfb3f4ecc1af045\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":41.05,\"url\":\"/uploads/ab27be4989234d5abcfb3f4ecc1af045.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:22:44.291Z\",\"updated_at\":\"2020-03-15T06:22:44.291Z\"},{\"id\":47,\"name\":\"11b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"fd27bd22be044fc89915d96cc85184a2\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":90.14,\"url\":\"/uploads/fd27bd22be044fc89915d96cc85184a2.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:22:44.303Z\",\"updated_at\":\"2020-03-15T06:22:44.303Z\"},{\"id\":48,\"name\":\"11c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"d9860fd4f75847b08533072d216520a7\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":20.98,\"url\":\"/uploads/d9860fd4f75847b08533072d216520a7.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:22:44.312Z\",\"updated_at\":\"2020-03-15T06:22:44.312Z\"},{\"id\":49,\"name\":\"11d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"d25af4f6df2448579caf80399f625ec7\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":15.51,\"url\":\"/uploads/d25af4f6df2448579caf80399f625ec7.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:22:44.321Z\",\"updated_at\":\"2020-03-15T06:22:44.321Z\"}],\"thumbnail\":{\"id\":45,\"name\":\"10.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"77ac135e297b416388e2e10be368a898\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":13.67,\"url\":\"/uploads/77ac135e297b416388e2e10be368a898.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:22:44.278Z\",\"updated_at\":\"2020-03-15T06:22:44.278Z\"}},{\"id\":12,\"title\":\"Men’s Sports Runnning Swim Board Shorts\",\"is_featured\":false,\"is_hot\":false,\"price\":13.43,\"sale_price\":null,\"vendor\":\"Robert's Store\",\"review\":5,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T06:24:30.658Z\",\"updated_at\":\"2020-03-18T12:53:44.500Z\",\"variants\":[],\"images\":[{\"id\":51,\"name\":\"12a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"fefc8854e39940d49f828c8035b20f76\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":108.16,\"url\":\"/uploads/fefc8854e39940d49f828c8035b20f76.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:24:30.700Z\",\"updated_at\":\"2020-03-15T06:24:30.700Z\"},{\"id\":52,\"name\":\"12b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"bf24fcb93d8d46e894ddb47dd26dc335\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":38.91,\"url\":\"/uploads/bf24fcb93d8d46e894ddb47dd26dc335.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:24:30.716Z\",\"updated_at\":\"2020-03-15T06:24:30.716Z\"},{\"id\":53,\"name\":\"12c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"f578cf9bb1d24f3c8c898e09796ae503\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":38.08,\"url\":\"/uploads/f578cf9bb1d24f3c8c898e09796ae503.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:24:30.725Z\",\"updated_at\":\"2020-03-15T06:24:30.725Z\"}],\"thumbnail\":{\"id\":50,\"name\":\"11.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"283e9ff36993434c9d228a5f7681e330\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":19.09,\"url\":\"/uploads/283e9ff36993434c9d228a5f7681e330.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:24:30.681Z\",\"updated_at\":\"2020-03-15T06:24:30.681Z\"}},{\"id\":13,\"title\":\"Paul’s Smith Sneaker InWhite Color\",\"is_featured\":false,\"is_hot\":false,\"price\":75.44,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":4,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T06:32:31.147Z\",\"updated_at\":\"2020-03-18T12:54:00.174Z\",\"variants\":[],\"images\":[{\"id\":55,\"name\":\"13a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"58092188da0c46858b8273fe7cfb16c1\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":33.4,\"url\":\"/uploads/58092188da0c46858b8273fe7cfb16c1.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:32:31.197Z\",\"updated_at\":\"2020-03-15T06:32:31.197Z\"},{\"id\":56,\"name\":\"13b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"db91360ae9ac420c9172c2b797540c3f\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":10,\"url\":\"/uploads/db91360ae9ac420c9172c2b797540c3f.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:32:31.215Z\",\"updated_at\":\"2020-03-15T06:32:31.215Z\"},{\"id\":57,\"name\":\"13c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"fd95618bdbc64b9fa835f03d4c992b63\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":23.2,\"url\":\"/uploads/fd95618bdbc64b9fa835f03d4c992b63.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:32:31.223Z\",\"updated_at\":\"2020-03-15T06:32:31.223Z\"},{\"id\":58,\"name\":\"13d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"974d2403fc62442db39bb155902fd6a0\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":13.81,\"url\":\"/uploads/974d2403fc62442db39bb155902fd6a0.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:32:31.232Z\",\"updated_at\":\"2020-03-15T06:32:31.232Z\"}],\"thumbnail\":{\"id\":54,\"name\":\"12.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"d903b17699d842f4ab1327eff18f04d0\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":4.9,\"url\":\"/uploads/d903b17699d842f4ab1327eff18f04d0.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:32:31.177Z\",\"updated_at\":\"2020-03-15T06:32:31.177Z\"}}]},{\"id\":2,\"name\":\"Garden & Kitchen\",\"slug\":\"garden-and-kitchen\",\"description\":null,\"created_at\":\"2020-03-14T10:25:21.611Z\",\"updated_at\":\"2020-03-14T10:25:21.611Z\",\"products\":[{\"id\":8,\"title\":\"Korea Long Sofa Fabric In Blue Navy Color\",\"is_featured\":false,\"is_hot\":false,\"price\":670.2,\"sale_price\":567.8,\"vendor\":\"Youngshop\",\"review\":4,\"is_out_of_stock\":false,\"depot\":85,\"inventory\":79,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-15T06:15:55.939Z\",\"updated_at\":\"2020-03-15T06:15:55.939Z\",\"variants\":[],\"images\":[{\"id\":32,\"name\":\"8a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"caafb8f05561484a97923b235d2603f7\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":20.75,\"url\":\"/uploads/caafb8f05561484a97923b235d2603f7.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:15:56.021Z\",\"updated_at\":\"2020-03-15T06:15:56.021Z\"},{\"id\":33,\"name\":\"8b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"ea26eeafaa1747b5857ee73c93430261\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":26.42,\"url\":\"/uploads/ea26eeafaa1747b5857ee73c93430261.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:15:56.038Z\",\"updated_at\":\"2020-03-15T06:15:56.038Z\"},{\"id\":34,\"name\":\"8c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"97b54a32f4864342bc485c7929de6366\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":19.04,\"url\":\"/uploads/97b54a32f4864342bc485c7929de6366.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:15:56.047Z\",\"updated_at\":\"2020-03-15T06:15:56.047Z\"},{\"id\":35,\"name\":\"8d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"210d685d19f84c8b9e5de231176b4cf2\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":155.83,\"url\":\"/uploads/210d685d19f84c8b9e5de231176b4cf2.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:15:56.057Z\",\"updated_at\":\"2020-03-15T06:15:56.057Z\"}],\"thumbnail\":{\"id\":31,\"name\":\"7.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"04ec8d58423647c98d6dbd3544c1c355\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":3.63,\"url\":\"/uploads/04ec8d58423647c98d6dbd3544c1c355.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:15:55.999Z\",\"updated_at\":\"2020-03-15T06:15:55.999Z\"}},{\"id\":26,\"title\":\"Simple Plastice Chair In White Color\",\"is_featured\":false,\"is_hot\":false,\"price\":60,\"sale_price\":42,\"vendor\":\"Young Shop\",\"review\":2,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-15T07:23:26.180Z\",\"updated_at\":\"2020-03-15T07:23:26.180Z\",\"variants\":[],\"images\":[{\"id\":118,\"name\":\"27a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"e8c3cd4a32bd4baa9772aa080594d756\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":22.57,\"url\":\"/uploads/e8c3cd4a32bd4baa9772aa080594d756.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:23:26.212Z\",\"updated_at\":\"2020-03-15T07:23:26.212Z\"},{\"id\":119,\"name\":\"27b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"4f482d2091c94fe6b2f9216e1652ad11\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":15.18,\"url\":\"/uploads/4f482d2091c94fe6b2f9216e1652ad11.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:23:26.222Z\",\"updated_at\":\"2020-03-15T07:23:26.222Z\"},{\"id\":120,\"name\":\"27c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"fe5b2973ad694105b20eee9917e1491c\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":17.18,\"url\":\"/uploads/fe5b2973ad694105b20eee9917e1491c.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:23:26.237Z\",\"updated_at\":\"2020-03-15T07:23:26.237Z\"},{\"id\":121,\"name\":\"27d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"6b8716a6edc84d0191c9411e84335189\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":46.91,\"url\":\"/uploads/6b8716a6edc84d0191c9411e84335189.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:23:26.251Z\",\"updated_at\":\"2020-03-15T07:23:26.251Z\"}],\"thumbnail\":{\"id\":117,\"name\":\"3.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"c9bc200f332d47e48d4cfa68018c415c\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":4.33,\"url\":\"/uploads/c9bc200f332d47e48d4cfa68018c415c.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:23:26.200Z\",\"updated_at\":\"2020-03-15T07:23:26.200Z\"}},{\"id\":27,\"title\":\"Korea Fabric Chair In Brown Color\",\"is_featured\":false,\"is_hot\":false,\"price\":320,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":1,\"is_out_of_stock\":true,\"depot\":65,\"inventory\":80,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T07:26:02.264Z\",\"updated_at\":\"2020-03-15T07:26:02.264Z\",\"variants\":[],\"images\":[{\"id\":123,\"name\":\"28a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"8d2cd1d8755348b6bbd46c4216599640\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":145.11,\"url\":\"/uploads/8d2cd1d8755348b6bbd46c4216599640.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:26:02.297Z\",\"updated_at\":\"2020-03-15T07:26:02.297Z\"},{\"id\":124,\"name\":\"28b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"925471220e1d47d082cd932b253e6666\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":37.46,\"url\":\"/uploads/925471220e1d47d082cd932b253e6666.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:26:02.305Z\",\"updated_at\":\"2020-03-15T07:26:02.305Z\"},{\"id\":125,\"name\":\"28c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"a92af1e9436d4bdea3c0bef7ab6beccb\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":46.35,\"url\":\"/uploads/a92af1e9436d4bdea3c0bef7ab6beccb.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:26:02.316Z\",\"updated_at\":\"2020-03-15T07:26:02.316Z\"},{\"id\":126,\"name\":\"28d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"43ffb2ae9d3a4fd28097c7ba63dd5b22\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":64.39,\"url\":\"/uploads/43ffb2ae9d3a4fd28097c7ba63dd5b22.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:26:02.324Z\",\"updated_at\":\"2020-03-15T07:26:02.324Z\"}],\"thumbnail\":{\"id\":122,\"name\":\"4.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"afd6ccaff3fe4895903ec49b51b181d0\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":9.48,\"url\":\"/uploads/afd6ccaff3fe4895903ec49b51b181d0.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:26:02.287Z\",\"updated_at\":\"2020-03-15T07:26:02.287Z\"}},{\"id\":28,\"title\":\"Set 14-Piece Knife From KichiKit\",\"is_featured\":false,\"is_hot\":false,\"price\":85,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":3,\"is_out_of_stock\":true,\"depot\":50,\"inventory\":60,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T07:28:12.906Z\",\"updated_at\":\"2020-03-18T13:03:00.440Z\",\"variants\":[],\"images\":[{\"id\":128,\"name\":\"29a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"8570a56296b2470caa2b397e5bc9bf6d\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":42.03,\"url\":\"/uploads/8570a56296b2470caa2b397e5bc9bf6d.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:28:12.949Z\",\"updated_at\":\"2020-03-15T07:28:12.949Z\"},{\"id\":129,\"name\":\"29b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"b271346821b54da68da7abc985db2400\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":16.61,\"url\":\"/uploads/b271346821b54da68da7abc985db2400.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:28:12.958Z\",\"updated_at\":\"2020-03-15T07:28:12.958Z\"},{\"id\":130,\"name\":\"29c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"c5b77535a1754dcb9ccaead467a354e6\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":18.64,\"url\":\"/uploads/c5b77535a1754dcb9ccaead467a354e6.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:28:12.965Z\",\"updated_at\":\"2020-03-15T07:28:12.965Z\"},{\"id\":131,\"name\":\"29d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"d58dd5cc5f824bd5af8e729503867653\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":17.77,\"url\":\"/uploads/d58dd5cc5f824bd5af8e729503867653.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:28:12.977Z\",\"updated_at\":\"2020-03-15T07:28:12.977Z\"}],\"thumbnail\":{\"id\":127,\"name\":\"5.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"e6965d2ab9ef4537ab17517394fe9ce4\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":8.32,\"url\":\"/uploads/e6965d2ab9ef4537ab17517394fe9ce4.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:28:12.939Z\",\"updated_at\":\"2020-03-15T07:28:12.939Z\"}},{\"id\":30,\"title\":\"Letter Printed Cushion Cover Cotton\",\"is_featured\":false,\"is_hot\":false,\"price\":60,\"sale_price\":42,\"vendor\":\"Young Shop\",\"review\":2,\"is_out_of_stock\":false,\"depot\":60,\"inventory\":80,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-15T09:01:33.601Z\",\"updated_at\":\"2020-03-15T09:01:33.601Z\",\"variants\":[],\"images\":[{\"id\":137,\"name\":\"7.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"cca3c5bbc1f4412aad6cf03cf87d81e8\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":11.61,\"url\":\"/uploads/cca3c5bbc1f4412aad6cf03cf87d81e8.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:01:33.634Z\",\"updated_at\":\"2020-03-15T09:01:33.634Z\"}],\"thumbnail\":{\"id\":136,\"name\":\"7.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"aefd853e2fd942bb860b9eb4d8b8d7c0\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":11.61,\"url\":\"/uploads/aefd853e2fd942bb860b9eb4d8b8d7c0.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:01:33.622Z\",\"updated_at\":\"2020-03-15T09:01:33.622Z\"}},{\"id\":45,\"title\":\"Wood Simple Tea Table\",\"is_featured\":false,\"is_hot\":false,\"price\":393.38,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":3,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T12:49:54.993Z\",\"updated_at\":\"2020-03-15T12:49:54.993Z\",\"variants\":[],\"images\":[{\"id\":176,\"name\":\"46a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"21b0d78f72b64f3e8b92cf194e499b7a\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":36.64,\"url\":\"/uploads/21b0d78f72b64f3e8b92cf194e499b7a.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T12:49:55.046Z\",\"updated_at\":\"2020-03-15T12:49:55.046Z\"},{\"id\":177,\"name\":\"46b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"c9c68e1ace634ee69ced00590d3e4aa1\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":13.92,\"url\":\"/uploads/c9c68e1ace634ee69ced00590d3e4aa1.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T12:49:55.055Z\",\"updated_at\":\"2020-03-15T12:49:55.055Z\"},{\"id\":178,\"name\":\"46c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"6ee8e30510df4e88a2807b38e38838ed\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":13.48,\"url\":\"/uploads/6ee8e30510df4e88a2807b38e38838ed.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T12:49:55.065Z\",\"updated_at\":\"2020-03-15T12:49:55.065Z\"},{\"id\":179,\"name\":\"46d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"61f9d89dc3cf4161b157d7b969111cc9\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":93.96,\"url\":\"/uploads/61f9d89dc3cf4161b157d7b969111cc9.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T12:49:55.075Z\",\"updated_at\":\"2020-03-15T12:49:55.075Z\"}],\"thumbnail\":{\"id\":175,\"name\":\"8.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"3192b332d84248d0870b62db15ea79b6\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":3.97,\"url\":\"/uploads/3192b332d84248d0870b62db15ea79b6.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T12:49:55.032Z\",\"updated_at\":\"2020-03-15T12:49:55.032Z\"}},{\"id\":46,\"title\":\"Simple Plastic Chair In Gray Color\",\"is_featured\":false,\"is_hot\":false,\"price\":50,\"sale_price\":25,\"vendor\":\"Young Shop\",\"review\":5,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-15T12:50:58.066Z\",\"updated_at\":\"2020-03-15T12:50:58.066Z\",\"variants\":[],\"images\":[{\"id\":343,\"name\":\"47a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"c34777c27dd44d6ab517cf5e5f0d3e67\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":76.72,\"url\":\"/uploads/c34777c27dd44d6ab517cf5e5f0d3e67.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T12:49:00.500Z\",\"updated_at\":\"2020-03-18T12:49:00.500Z\"},{\"id\":344,\"name\":\"47b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"f5ca8fbda1cd45ccaa57e0dcf1692fb3\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":14.54,\"url\":\"/uploads/f5ca8fbda1cd45ccaa57e0dcf1692fb3.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T12:49:00.510Z\",\"updated_at\":\"2020-03-18T12:49:00.510Z\"},{\"id\":345,\"name\":\"47c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"c3add993354d431c8f96405755a8099c\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":21.15,\"url\":\"/uploads/c3add993354d431c8f96405755a8099c.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T12:49:00.524Z\",\"updated_at\":\"2020-03-18T12:49:00.524Z\"},{\"id\":346,\"name\":\"47d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"b0cefaa6a3d24a82a5e4cb2c1c4bb134\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":66.49,\"url\":\"/uploads/b0cefaa6a3d24a82a5e4cb2c1c4bb134.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T12:49:00.535Z\",\"updated_at\":\"2020-03-18T12:49:00.535Z\"}],\"thumbnail\":{\"id\":342,\"name\":\"10.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"72190536af1245b48cac7925c4318e37\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":6.38,\"url\":\"/uploads/72190536af1245b48cac7925c4318e37.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T12:49:00.488Z\",\"updated_at\":\"2020-03-18T12:49:00.488Z\"}},{\"id\":47,\"title\":\"Korea Small Wood 4 Boxes Storage\",\"is_featured\":false,\"is_hot\":false,\"price\":64,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":4,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":90,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T12:54:01.621Z\",\"updated_at\":\"2020-03-15T12:54:01.621Z\",\"variants\":[],\"images\":[{\"id\":181,\"name\":\"48a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"58cb2976791443a496b80e3cd5d55a4e\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":78.37,\"url\":\"/uploads/58cb2976791443a496b80e3cd5d55a4e.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T12:54:01.663Z\",\"updated_at\":\"2020-03-15T12:54:01.663Z\"},{\"id\":182,\"name\":\"48b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"89cc985082fa4ca7b8cb455f13e7c3eb\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":23.31,\"url\":\"/uploads/89cc985082fa4ca7b8cb455f13e7c3eb.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T12:54:01.676Z\",\"updated_at\":\"2020-03-15T12:54:01.676Z\"},{\"id\":183,\"name\":\"48c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"b51695a23f704bb0bc62a97e154efba5\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":23.12,\"url\":\"/uploads/b51695a23f704bb0bc62a97e154efba5.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T12:54:01.686Z\",\"updated_at\":\"2020-03-15T12:54:01.686Z\"},{\"id\":184,\"name\":\"48d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"05982ca9a3a64d6391366bc6103884e6\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":22.18,\"url\":\"/uploads/05982ca9a3a64d6391366bc6103884e6.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T12:54:01.696Z\",\"updated_at\":\"2020-03-15T12:54:01.696Z\"}],\"thumbnail\":{\"id\":180,\"name\":\"9.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"664f3ea44e7f44b5bb726d0a78a6eaec\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":8.13,\"url\":\"/uploads/664f3ea44e7f44b5bb726d0a78a6eaec.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T12:54:01.652Z\",\"updated_at\":\"2020-03-15T12:54:01.652Z\"}},{\"id\":49,\"title\":\"Claure Austin Lover Round Chair White Wooden\",\"is_featured\":false,\"is_hot\":false,\"price\":99.59,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":5,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T12:57:21.759Z\",\"updated_at\":\"2020-03-15T12:57:21.759Z\",\"variants\":[],\"images\":[{\"id\":191,\"name\":\"50a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"f8bb5ccd1eb5459e9fc33d2f45b74e60\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":33.03,\"url\":\"/uploads/f8bb5ccd1eb5459e9fc33d2f45b74e60.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T12:57:21.788Z\",\"updated_at\":\"2020-03-15T12:57:21.788Z\"},{\"id\":192,\"name\":\"50b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"82c418256f2e4264a3e9aed0c9264335\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":10.77,\"url\":\"/uploads/82c418256f2e4264a3e9aed0c9264335.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T12:57:21.796Z\",\"updated_at\":\"2020-03-15T12:57:21.796Z\"},{\"id\":193,\"name\":\"50c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"65550a2a55ce4f9ea2d4599c9cffd43a\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":12.36,\"url\":\"/uploads/65550a2a55ce4f9ea2d4599c9cffd43a.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T12:57:21.805Z\",\"updated_at\":\"2020-03-15T12:57:21.805Z\"},{\"id\":194,\"name\":\"50d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"a18fd4de58f34496abb40f38d3dacdf9\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":11.28,\"url\":\"/uploads/a18fd4de58f34496abb40f38d3dacdf9.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T12:57:21.812Z\",\"updated_at\":\"2020-03-15T12:57:21.812Z\"}],\"thumbnail\":{\"id\":190,\"name\":\"1.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"d36aa60d7915475abcbb346de7274cac\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":5.79,\"url\":\"/uploads/d36aa60d7915475abcbb346de7274cac.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T12:57:21.777Z\",\"updated_at\":\"2020-03-15T12:57:21.777Z\"}},{\"id\":50,\"title\":\"Letter Printed Cushion Cover Cotton Throw Pillow\",\"is_featured\":false,\"is_hot\":false,\"price\":13.59,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":4,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T12:59:25.253Z\",\"updated_at\":\"2020-03-15T12:59:25.253Z\",\"variants\":[],\"images\":[{\"id\":196,\"name\":\"4.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"5a21858f28fe470bab05f9e839eedbdf\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":11.61,\"url\":\"/uploads/5a21858f28fe470bab05f9e839eedbdf.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T12:59:25.285Z\",\"updated_at\":\"2020-03-15T12:59:25.285Z\"}],\"thumbnail\":{\"id\":195,\"name\":\"4.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"e446cc5b6ed3433f9ef5aa3c1373bf18\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":11.61,\"url\":\"/uploads/e446cc5b6ed3433f9ef5aa3c1373bf18.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T12:59:25.275Z\",\"updated_at\":\"2020-03-15T12:59:25.275Z\"}},{\"id\":51,\"title\":\"Simple Short TV Board Combine Book Shelf\",\"is_featured\":false,\"is_hot\":false,\"price\":13.59,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":5,\"is_out_of_stock\":false,\"depot\":50,\"inventory\":60,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T13:00:41.375Z\",\"updated_at\":\"2020-03-15T13:00:41.375Z\",\"variants\":[],\"images\":[{\"id\":198,\"name\":\"5.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"a1a08a0b292846089662206d92c858bf\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":5.07,\"url\":\"/uploads/a1a08a0b292846089662206d92c858bf.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T13:01:18.571Z\",\"updated_at\":\"2020-03-15T13:01:18.571Z\"}],\"thumbnail\":{\"id\":197,\"name\":\"5.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"2af891b3cc034320b2ef6b792542cba4\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":5.07,\"url\":\"/uploads/2af891b3cc034320b2ef6b792542cba4.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T13:01:18.560Z\",\"updated_at\":\"2020-03-15T13:01:18.560Z\"}},{\"id\":52,\"title\":\"Simple Tea Teable With Glass Surface\",\"is_featured\":false,\"is_hot\":false,\"price\":249.59,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":5,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T13:28:05.503Z\",\"updated_at\":\"2020-03-15T13:28:05.503Z\",\"variants\":[],\"images\":[{\"id\":200,\"name\":\"53a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"4ad7f87094984babac0a22a9f8447eb2\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":24.93,\"url\":\"/uploads/4ad7f87094984babac0a22a9f8447eb2.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T13:28:05.541Z\",\"updated_at\":\"2020-03-15T13:28:05.541Z\"},{\"id\":201,\"name\":\"53b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"8929c017e8324986911ae5b70798728e\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":16.98,\"url\":\"/uploads/8929c017e8324986911ae5b70798728e.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T13:28:05.551Z\",\"updated_at\":\"2020-03-15T13:28:05.551Z\"},{\"id\":202,\"name\":\"53c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"500e7a2bbf424d6ab4c3b7ec70af33e5\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":25.08,\"url\":\"/uploads/500e7a2bbf424d6ab4c3b7ec70af33e5.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T13:28:05.559Z\",\"updated_at\":\"2020-03-15T13:28:05.559Z\"}],\"thumbnail\":{\"id\":199,\"name\":\"6.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"98b96e736fa744a5ab7ed83354d97536\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":3.93,\"url\":\"/uploads/98b96e736fa744a5ab7ed83354d97536.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T13:28:05.531Z\",\"updated_at\":\"2020-03-15T13:28:05.531Z\"}}]},{\"id\":3,\"name\":\"Consumer Electrics\",\"slug\":\"consumer-electrics\",\"description\":null,\"created_at\":\"2020-03-14T10:25:39.408Z\",\"updated_at\":\"2020-03-14T10:25:39.408Z\",\"products\":[{\"id\":3,\"title\":\"Marshall Kilburn Portable Wireless Speaker\",\"is_featured\":false,\"is_hot\":false,\"price\":42.99,\"sale_price\":null,\"vendor\":\"Go Pro\",\"review\":5,\"is_out_of_stock\":false,\"depot\":85,\"inventory\":100,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T05:55:19.349Z\",\"updated_at\":\"2020-03-15T05:55:19.349Z\",\"variants\":[],\"images\":[{\"id\":10,\"name\":\"1.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"3398b7a330154c9390db4495b9e3d413\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":158.75,\"url\":\"/uploads/3398b7a330154c9390db4495b9e3d413.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T05:55:19.403Z\",\"updated_at\":\"2020-03-15T05:55:19.403Z\"},{\"id\":11,\"name\":\"2.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"73b00542e06e4d008945bc701959472b\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":44.03,\"url\":\"/uploads/73b00542e06e4d008945bc701959472b.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T05:55:19.415Z\",\"updated_at\":\"2020-03-15T05:55:19.415Z\"},{\"id\":12,\"name\":\"3.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"f0647af5998446e1a6a1906996014a0a\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":69.23,\"url\":\"/uploads/f0647af5998446e1a6a1906996014a0a.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T05:55:19.425Z\",\"updated_at\":\"2020-03-15T05:55:19.425Z\"}],\"thumbnail\":{\"id\":9,\"name\":\"2.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"feaeaa8c5d24474e943f57a7df55e921\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":15.15,\"url\":\"/uploads/feaeaa8c5d24474e943f57a7df55e921.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T05:55:19.385Z\",\"updated_at\":\"2020-03-15T05:55:19.385Z\"}},{\"id\":19,\"title\":\"EPSION Plaster Printer\",\"is_featured\":false,\"is_hot\":false,\"price\":233.28,\"sale_price\":null,\"vendor\":\"Robert's Store\",\"review\":4,\"is_out_of_stock\":false,\"depot\":40,\"inventory\":50,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T06:46:44.313Z\",\"updated_at\":\"2020-03-15T06:46:44.313Z\",\"variants\":[],\"images\":[{\"id\":85,\"name\":\"19a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"d9a512ac366049e79ed4430f63258646\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":36.78,\"url\":\"/uploads/d9a512ac366049e79ed4430f63258646.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:46:44.345Z\",\"updated_at\":\"2020-03-15T06:46:44.345Z\"},{\"id\":86,\"name\":\"19b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"37e8bc461d034b42886a2f5a675c723b\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":10.65,\"url\":\"/uploads/37e8bc461d034b42886a2f5a675c723b.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:46:44.353Z\",\"updated_at\":\"2020-03-15T06:46:44.353Z\"},{\"id\":87,\"name\":\"19c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"0db1b9f735034ad9927e5544d4c2f916\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":12.91,\"url\":\"/uploads/0db1b9f735034ad9927e5544d4c2f916.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:46:44.361Z\",\"updated_at\":\"2020-03-15T06:46:44.361Z\"},{\"id\":88,\"name\":\"19d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"2d276d5621274050b2126bd8d2c6f3d2\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":14.67,\"url\":\"/uploads/2d276d5621274050b2126bd8d2c6f3d2.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:46:44.369Z\",\"updated_at\":\"2020-03-15T06:46:44.369Z\"}],\"thumbnail\":{\"id\":84,\"name\":\"19.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"6feffd7531c2463f9289a1dbe6cf0eb2\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":8.32,\"url\":\"/uploads/6feffd7531c2463f9289a1dbe6cf0eb2.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:46:44.335Z\",\"updated_at\":\"2020-03-15T06:46:44.335Z\"}},{\"id\":20,\"title\":\"EPSION Plaster Printer 2\",\"is_featured\":false,\"is_hot\":false,\"price\":299.28,\"sale_price\":null,\"vendor\":\"Robert's Store\",\"review\":4,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T06:51:40.586Z\",\"updated_at\":\"2020-03-15T06:51:40.586Z\",\"variants\":[],\"images\":[{\"id\":90,\"name\":\"19a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"c1445934392c4fa2a247db732b39930b\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":36.78,\"url\":\"/uploads/c1445934392c4fa2a247db732b39930b.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:51:40.623Z\",\"updated_at\":\"2020-03-15T06:51:40.623Z\"},{\"id\":91,\"name\":\"19b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"94a5b77dccdc43d79683a092ffa12adc\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":10.65,\"url\":\"/uploads/94a5b77dccdc43d79683a092ffa12adc.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:51:40.643Z\",\"updated_at\":\"2020-03-15T06:51:40.643Z\"},{\"id\":92,\"name\":\"19c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"aea18f347cb34f54add389580fd52e53\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":12.91,\"url\":\"/uploads/aea18f347cb34f54add389580fd52e53.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:51:40.653Z\",\"updated_at\":\"2020-03-15T06:51:40.653Z\"},{\"id\":93,\"name\":\"19d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"c3ed6617023f458d99388ca01f6af619\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":14.67,\"url\":\"/uploads/c3ed6617023f458d99388ca01f6af619.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:51:40.670Z\",\"updated_at\":\"2020-03-15T06:51:40.670Z\"}],\"thumbnail\":{\"id\":89,\"name\":\"19.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"9c3e74c3b8e04684ba6c8cd333bdc8ec\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":8.32,\"url\":\"/uploads/9c3e74c3b8e04684ba6c8cd333bdc8ec.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:51:40.609Z\",\"updated_at\":\"2020-03-15T06:51:40.609Z\"}},{\"id\":21,\"title\":\"LG White Front Load Steam Washer\",\"is_featured\":false,\"is_hot\":false,\"price\":1422.7,\"sale_price\":1025.5,\"vendor\":\"Young Shop\",\"review\":5,\"is_out_of_stock\":false,\"depot\":65,\"inventory\":75,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-15T06:54:51.696Z\",\"updated_at\":\"2020-03-15T06:54:51.696Z\",\"variants\":[],\"images\":[{\"id\":95,\"name\":\"21a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"a88b749bd3bb49a6be93a362099c8295\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":46.36,\"url\":\"/uploads/a88b749bd3bb49a6be93a362099c8295.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:54:51.730Z\",\"updated_at\":\"2020-03-15T06:54:51.730Z\"},{\"id\":96,\"name\":\"22a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"8fcfcb5d0c694660b1906eda13290a82\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":68.23,\"url\":\"/uploads/8fcfcb5d0c694660b1906eda13290a82.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:54:51.739Z\",\"updated_at\":\"2020-03-15T06:54:51.739Z\"}],\"thumbnail\":{\"id\":94,\"name\":\"20.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"95aa7cb09ba04ce2b529ebceabb6f02c\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":8.71,\"url\":\"/uploads/95aa7cb09ba04ce2b529ebceabb6f02c.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:54:51.718Z\",\"updated_at\":\"2020-03-15T06:54:51.718Z\"}},{\"id\":25,\"title\":\"Aroma Rice Cooker\",\"is_featured\":false,\"is_hot\":false,\"price\":101.99,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":1,\"is_out_of_stock\":true,\"depot\":50,\"inventory\":60,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T07:09:29.699Z\",\"updated_at\":\"2020-03-15T07:09:29.699Z\",\"variants\":[],\"images\":[{\"id\":113,\"name\":\"26a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"696dd71cf0fc48dca751de388cc8613f\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":40.83,\"url\":\"/uploads/696dd71cf0fc48dca751de388cc8613f.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:09:29.746Z\",\"updated_at\":\"2020-03-15T07:09:29.746Z\"},{\"id\":114,\"name\":\"26b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"d350a3a6a0044d83bc72c68176dcb5ab\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":25.9,\"url\":\"/uploads/d350a3a6a0044d83bc72c68176dcb5ab.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:09:29.758Z\",\"updated_at\":\"2020-03-15T07:09:29.758Z\"},{\"id\":115,\"name\":\"26c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"fa26ea0d67e846b3af930df9f02c96d1\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":32.9,\"url\":\"/uploads/fa26ea0d67e846b3af930df9f02c96d1.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:09:29.767Z\",\"updated_at\":\"2020-03-15T07:09:29.767Z\"},{\"id\":116,\"name\":\"26d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"c5e80f9757f94639ba6c70a974cddd39\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":16.87,\"url\":\"/uploads/c5e80f9757f94639ba6c70a974cddd39.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:09:29.774Z\",\"updated_at\":\"2020-03-15T07:09:29.774Z\"}],\"thumbnail\":{\"id\":112,\"name\":\"2.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"d5c5d5570e1046f080ad62c7e35fe56d\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":9.06,\"url\":\"/uploads/d5c5d5570e1046f080ad62c7e35fe56d.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:09:29.729Z\",\"updated_at\":\"2020-03-15T07:09:29.729Z\"}},{\"id\":29,\"title\":\"Magic Bullet NutriBullet Pro 900 Series Blender\",\"is_featured\":false,\"is_hot\":false,\"price\":92,\"sale_price\":null,\"vendor\":\"Global Store\",\"review\":1,\"is_out_of_stock\":true,\"depot\":80,\"inventory\":90,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T07:29:47.468Z\",\"updated_at\":\"2020-03-18T12:51:46.229Z\",\"variants\":[],\"images\":[{\"id\":132,\"name\":\"30a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"a6ac678bb7224277b0ba5b57bd274704\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":46.73,\"url\":\"/uploads/a6ac678bb7224277b0ba5b57bd274704.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:29:47.489Z\",\"updated_at\":\"2020-03-15T07:29:47.489Z\"},{\"id\":133,\"name\":\"30b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"9de8de5d5f774d518615bda72a646796\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":10.44,\"url\":\"/uploads/9de8de5d5f774d518615bda72a646796.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:29:47.498Z\",\"updated_at\":\"2020-03-15T07:29:47.498Z\"},{\"id\":134,\"name\":\"30c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"db40275d06b04adc828ba08708062ad8\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":11.1,\"url\":\"/uploads/db40275d06b04adc828ba08708062ad8.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:29:47.507Z\",\"updated_at\":\"2020-03-15T07:29:47.507Z\"},{\"id\":135,\"name\":\"30d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"e4b8c056a206487a8bbf279727e2ed1e\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":8.84,\"url\":\"/uploads/e4b8c056a206487a8bbf279727e2ed1e.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:29:47.523Z\",\"updated_at\":\"2020-03-15T07:29:47.523Z\"}],\"thumbnail\":{\"id\":347,\"name\":\"6.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"20c71a1cecd047928f943f23a58c05f8\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":9.74,\"url\":\"/uploads/20c71a1cecd047928f943f23a58c05f8.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T12:51:46.247Z\",\"updated_at\":\"2020-03-18T12:51:46.247Z\"}},{\"id\":38,\"title\":\"TCL 47-inch 4K Ultra HD Smart TV\",\"is_featured\":false,\"is_hot\":false,\"price\":670,\"sale_price\":567.99,\"vendor\":\"Go Pro\",\"review\":4,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-15T09:43:05.580Z\",\"updated_at\":\"2020-03-18T12:58:10.870Z\",\"variants\":[],\"images\":[{\"id\":158,\"name\":\"12.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"5e0bff934b5d4a958af9122a1ee91d41\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":8.62,\"url\":\"/uploads/5e0bff934b5d4a958af9122a1ee91d41.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:43:05.611Z\",\"updated_at\":\"2020-03-15T09:43:05.611Z\"}],\"thumbnail\":{\"id\":157,\"name\":\"12.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"4e95e8c4956941099aa132a86b0086db\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":8.62,\"url\":\"/uploads/4e95e8c4956941099aa132a86b0086db.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:43:05.600Z\",\"updated_at\":\"2020-03-15T09:43:05.600Z\"}},{\"id\":40,\"title\":\"LG Electrolux 500L Inverte Washing Machine\",\"is_featured\":false,\"is_hot\":false,\"price\":360,\"sale_price\":342,\"vendor\":\"Young Shop\",\"review\":4,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-15T09:46:00.538Z\",\"updated_at\":\"2020-03-15T09:46:00.538Z\",\"variants\":[],\"images\":[{\"id\":162,\"name\":\"7.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"46f0cfa3ec174e42b98e26e000dda8f1\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":8.71,\"url\":\"/uploads/46f0cfa3ec174e42b98e26e000dda8f1.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:46:00.580Z\",\"updated_at\":\"2020-03-15T09:46:00.580Z\"}],\"thumbnail\":{\"id\":161,\"name\":\"7.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"158cc93d2c404e53b93b06c64997d02f\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":8.71,\"url\":\"/uploads/158cc93d2c404e53b93b06c64997d02f.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:46:00.568Z\",\"updated_at\":\"2020-03-15T09:46:00.568Z\"}},{\"id\":41,\"title\":\"Panasonic Invertr 900L Refrigerator\",\"is_featured\":false,\"is_hot\":false,\"price\":720,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":4,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T09:47:24.554Z\",\"updated_at\":\"2020-03-15T09:47:24.554Z\",\"variants\":[],\"images\":[{\"id\":341,\"name\":\"15.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"9778f73b10ad4a939769a79c0a877c43\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":4.09,\"url\":\"/uploads/9778f73b10ad4a939769a79c0a877c43.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T12:47:55.740Z\",\"updated_at\":\"2020-03-18T12:47:55.740Z\"}],\"thumbnail\":{\"id\":340,\"name\":\"15.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"a3381403e8474758922ee65bbf2eea22\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":4.09,\"url\":\"/uploads/a3381403e8474758922ee65bbf2eea22.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T12:47:55.731Z\",\"updated_at\":\"2020-03-18T12:47:55.731Z\"}},{\"id\":53,\"title\":\"Stadler Form Otto African Sapele Wood\",\"is_featured\":false,\"is_hot\":false,\"price\":127.59,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":4,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T13:29:47.964Z\",\"updated_at\":\"2020-03-15T13:29:47.964Z\",\"variants\":[],\"images\":[{\"id\":204,\"name\":\"54a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"0cc34763c9cc4957a77b5578cfd3147b\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":504.06,\"url\":\"/uploads/0cc34763c9cc4957a77b5578cfd3147b.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T13:29:48.003Z\",\"updated_at\":\"2020-03-15T13:29:48.003Z\"},{\"id\":205,\"name\":\"54b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"e4b335c24d1544bfb20410b1f95d7149\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":20.85,\"url\":\"/uploads/e4b335c24d1544bfb20410b1f95d7149.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T13:29:48.012Z\",\"updated_at\":\"2020-03-15T13:29:48.012Z\"},{\"id\":206,\"name\":\"54c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"01d38872ce5a4a51b40f6ab4b3f927ee\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":27.41,\"url\":\"/uploads/01d38872ce5a4a51b40f6ab4b3f927ee.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T13:29:48.020Z\",\"updated_at\":\"2020-03-15T13:29:48.020Z\"}],\"thumbnail\":{\"id\":203,\"name\":\"7.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"acf14989504d4099ac8a56d0b4e2aca9\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":11.5,\"url\":\"/uploads/acf14989504d4099ac8a56d0b4e2aca9.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T13:29:47.988Z\",\"updated_at\":\"2020-03-15T13:29:47.988Z\"}},{\"id\":69,\"title\":\"Apple TV 4k – 32 GB (4th Generation)\",\"is_featured\":false,\"is_hot\":false,\"price\":92.99,\"sale_price\":null,\"vendor\":\"Young Shop\",\"review\":5,\"is_out_of_stock\":false,\"depot\":50,\"inventory\":60,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-18T05:42:14.186Z\",\"updated_at\":\"2020-03-18T05:42:14.186Z\",\"variants\":[],\"images\":[{\"id\":274,\"name\":\"70a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"ae983ce46fc64ec4bc65ca800de5ea56\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":24.59,\"url\":\"/uploads/ae983ce46fc64ec4bc65ca800de5ea56.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:42:14.234Z\",\"updated_at\":\"2020-03-18T05:42:14.234Z\"},{\"id\":275,\"name\":\"70b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"0d1eaad741ce4efba4bba3dfa0bb4a52\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":7.02,\"url\":\"/uploads/0d1eaad741ce4efba4bba3dfa0bb4a52.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:42:14.248Z\",\"updated_at\":\"2020-03-18T05:42:14.248Z\"},{\"id\":276,\"name\":\"70c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"cb1f36ff311c4297ba19ba9f27785fd2\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":8.65,\"url\":\"/uploads/cb1f36ff311c4297ba19ba9f27785fd2.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:42:14.260Z\",\"updated_at\":\"2020-03-18T05:42:14.260Z\"}],\"thumbnail\":{\"id\":273,\"name\":\"15.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"93b647e5138f40d991c4f7d123794b1f\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":4.49,\"url\":\"/uploads/93b647e5138f40d991c4f7d123794b1f.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:42:14.215Z\",\"updated_at\":\"2020-03-18T05:42:14.215Z\"}},{\"id\":70,\"title\":\"GoPro Karman 4 Channels Quadcopter Drone\",\"is_featured\":false,\"is_hot\":false,\"price\":392.99,\"sale_price\":null,\"vendor\":\"Young Shop\",\"review\":4,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-18T05:43:57.333Z\",\"updated_at\":\"2020-03-18T05:43:57.333Z\",\"variants\":[],\"images\":[{\"id\":278,\"name\":\"71a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"997bc2778e25492fbd09c582bc98ad3b\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":33.13,\"url\":\"/uploads/997bc2778e25492fbd09c582bc98ad3b.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:43:57.405Z\",\"updated_at\":\"2020-03-18T05:43:57.405Z\"},{\"id\":279,\"name\":\"71b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"a3da535f76ac43f5bd8fd82201144603\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":29.45,\"url\":\"/uploads/a3da535f76ac43f5bd8fd82201144603.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:43:57.415Z\",\"updated_at\":\"2020-03-18T05:43:57.415Z\"},{\"id\":280,\"name\":\"71c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"1dc6a4b3b1434677be924e53e98297b2\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":19.21,\"url\":\"/uploads/1dc6a4b3b1434677be924e53e98297b2.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:43:57.433Z\",\"updated_at\":\"2020-03-18T05:43:57.433Z\"},{\"id\":281,\"name\":\"71d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"95d0cf75458a480ebc6c684af5dfd38c\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":74.06,\"url\":\"/uploads/95d0cf75458a480ebc6c684af5dfd38c.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:43:57.444Z\",\"updated_at\":\"2020-03-18T05:43:57.444Z\"}],\"thumbnail\":{\"id\":277,\"name\":\"16.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"72b77e04493342ab803b4f6bbc346072\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":5.24,\"url\":\"/uploads/72b77e04493342ab803b4f6bbc346072.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:43:57.386Z\",\"updated_at\":\"2020-03-18T05:43:57.386Z\"}}]},{\"id\":4,\"name\":\"Health & Beauty\",\"slug\":\"health-and-beauty\",\"description\":null,\"created_at\":\"2020-03-14T10:25:51.376Z\",\"updated_at\":\"2020-03-14T10:25:51.376Z\",\"products\":[{\"id\":54,\"title\":\"Aveeno Moisturizing Body Shower 450ml\",\"is_featured\":false,\"is_hot\":false,\"price\":59,\"sale_price\":47.99,\"vendor\":\"Young Shop\",\"review\":5,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-15T13:33:17.935Z\",\"updated_at\":\"2020-03-15T13:33:17.935Z\",\"variants\":[],\"images\":[{\"id\":208,\"name\":\"55a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"383ed28ccd8c43b99de6d4de3031603d\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":49.14,\"url\":\"/uploads/383ed28ccd8c43b99de6d4de3031603d.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T13:33:17.965Z\",\"updated_at\":\"2020-03-15T13:33:17.965Z\"},{\"id\":209,\"name\":\"55b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"be3321593fea4864addd3d73f35a8cee\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":11.5,\"url\":\"/uploads/be3321593fea4864addd3d73f35a8cee.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T13:33:17.978Z\",\"updated_at\":\"2020-03-15T13:33:17.978Z\"},{\"id\":210,\"name\":\"55c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"9d091230599045ed97bcab3d7647127b\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":11.41,\"url\":\"/uploads/9d091230599045ed97bcab3d7647127b.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T13:33:17.986Z\",\"updated_at\":\"2020-03-15T13:33:17.986Z\"},{\"id\":211,\"name\":\"55d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"972459f675fd49c585e52fa5cc1d418e\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":13.43,\"url\":\"/uploads/972459f675fd49c585e52fa5cc1d418e.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T13:33:18.001Z\",\"updated_at\":\"2020-03-15T13:33:18.001Z\"}],\"thumbnail\":{\"id\":207,\"name\":\"1.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"0a029cb7870243c7b36c71922a55701a\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":5.38,\"url\":\"/uploads/0a029cb7870243c7b36c71922a55701a.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T13:33:17.954Z\",\"updated_at\":\"2020-03-15T13:33:17.954Z\"}},{\"id\":55,\"title\":\"Baxter Care Hair Kit For Bearded Mens\",\"is_featured\":false,\"is_hot\":false,\"price\":60,\"sale_price\":42,\"vendor\":\"Young Shop\",\"review\":4,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-15T13:35:28.855Z\",\"updated_at\":\"2020-03-15T13:35:28.855Z\",\"variants\":[],\"images\":[{\"id\":213,\"name\":\"56a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"1ca5fe0793e545669c16a8e7c7b68348\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":58.88,\"url\":\"/uploads/1ca5fe0793e545669c16a8e7c7b68348.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T13:35:28.889Z\",\"updated_at\":\"2020-03-15T13:35:28.889Z\"},{\"id\":214,\"name\":\"56b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"2268da1843334f4c9e0757a16f0b8443\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":11.12,\"url\":\"/uploads/2268da1843334f4c9e0757a16f0b8443.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T13:35:28.898Z\",\"updated_at\":\"2020-03-15T13:35:28.898Z\"},{\"id\":215,\"name\":\"56c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"d55cb74ae9d64a3a9d93ae4328b64475\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":13.79,\"url\":\"/uploads/d55cb74ae9d64a3a9d93ae4328b64475.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T13:35:28.905Z\",\"updated_at\":\"2020-03-15T13:35:28.905Z\"},{\"id\":216,\"name\":\"56d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"aa96424c1a8743929d92003f1f3b92cd\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":24.83,\"url\":\"/uploads/aa96424c1a8743929d92003f1f3b92cd.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T13:35:28.913Z\",\"updated_at\":\"2020-03-15T13:35:28.913Z\"}],\"thumbnail\":{\"id\":212,\"name\":\"3.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"ede2a4fddd3e439c87a0f471267b7838\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":10.03,\"url\":\"/uploads/ede2a4fddd3e439c87a0f471267b7838.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T13:35:28.879Z\",\"updated_at\":\"2020-03-15T13:35:28.879Z\"}},{\"id\":56,\"title\":\"Anna Sui Putty Mask Perfection\",\"is_featured\":false,\"is_hot\":false,\"price\":25,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":5,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T13:37:05.467Z\",\"updated_at\":\"2020-03-15T13:37:05.467Z\",\"variants\":[],\"images\":[{\"id\":218,\"name\":\"57a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"56986b9145c7497dbd31243e9cb48f87\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":53.69,\"url\":\"/uploads/56986b9145c7497dbd31243e9cb48f87.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T13:37:05.508Z\",\"updated_at\":\"2020-03-15T13:37:05.508Z\"},{\"id\":219,\"name\":\"57b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"6ba127ca71074b539221a949ef26e701\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":21.12,\"url\":\"/uploads/6ba127ca71074b539221a949ef26e701.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T13:37:05.520Z\",\"updated_at\":\"2020-03-15T13:37:05.520Z\"},{\"id\":220,\"name\":\"57c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"c378fc8a90004701811b388ce195a957\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":54.25,\"url\":\"/uploads/c378fc8a90004701811b388ce195a957.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T13:37:05.528Z\",\"updated_at\":\"2020-03-15T13:37:05.528Z\"},{\"id\":221,\"name\":\"57d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"2324c56372fc46998df8ce9f8a9cd847\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":12.77,\"url\":\"/uploads/2324c56372fc46998df8ce9f8a9cd847.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T13:37:05.537Z\",\"updated_at\":\"2020-03-15T13:37:05.537Z\"}],\"thumbnail\":{\"id\":217,\"name\":\"4.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"9ccbc5e9220e4768921afcb101c10459\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":8.02,\"url\":\"/uploads/9ccbc5e9220e4768921afcb101c10459.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T13:37:05.487Z\",\"updated_at\":\"2020-03-15T13:37:05.487Z\"}},{\"id\":57,\"title\":\"Set 30 Piece Korea StartSkin Natural Mask\",\"is_featured\":false,\"is_hot\":false,\"price\":85,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":4,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T14:26:12.340Z\",\"updated_at\":\"2020-03-15T14:26:12.340Z\",\"variants\":[],\"images\":[{\"id\":223,\"name\":\"58a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"cca7d31b5a85453ba4145a460f6c283b\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":32.51,\"url\":\"/uploads/cca7d31b5a85453ba4145a460f6c283b.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T14:26:12.368Z\",\"updated_at\":\"2020-03-15T14:26:12.368Z\"},{\"id\":224,\"name\":\"58b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"5841d6e8f7104034935cd493547900ff\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":13.31,\"url\":\"/uploads/5841d6e8f7104034935cd493547900ff.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T14:26:12.377Z\",\"updated_at\":\"2020-03-15T14:26:12.377Z\"},{\"id\":225,\"name\":\"58c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"537289a299f54d3b9ed8fc8763ee7b92\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":33.19,\"url\":\"/uploads/537289a299f54d3b9ed8fc8763ee7b92.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T14:26:12.394Z\",\"updated_at\":\"2020-03-15T14:26:12.394Z\"}],\"thumbnail\":{\"id\":222,\"name\":\"5.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"46e9f0df98c74d03b9089b73d5cb2a57\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":6.48,\"url\":\"/uploads/46e9f0df98c74d03b9089b73d5cb2a57.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T14:26:12.359Z\",\"updated_at\":\"2020-03-15T14:26:12.359Z\"}},{\"id\":58,\"title\":\"Ciate Palemore Lipstick Bold Red Color\",\"is_featured\":false,\"is_hot\":false,\"price\":92,\"sale_price\":null,\"vendor\":\"Global Store\",\"review\":5,\"is_out_of_stock\":false,\"depot\":80,\"inventory\":90,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T14:27:51.518Z\",\"updated_at\":\"2020-03-15T14:27:51.518Z\",\"variants\":[],\"images\":[{\"id\":227,\"name\":\"59a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"918f66e8a4be4029863149bd4c163dd6\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":68.14,\"url\":\"/uploads/918f66e8a4be4029863149bd4c163dd6.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T14:27:51.550Z\",\"updated_at\":\"2020-03-15T14:27:51.550Z\"},{\"id\":228,\"name\":\"59b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"ed4f0cbafb9149138d06bfb72b458893\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":17.37,\"url\":\"/uploads/ed4f0cbafb9149138d06bfb72b458893.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T14:27:51.564Z\",\"updated_at\":\"2020-03-15T14:27:51.564Z\"},{\"id\":229,\"name\":\"59c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"5ba79ea8093645c480eebe7b5083e483\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":48.51,\"url\":\"/uploads/5ba79ea8093645c480eebe7b5083e483.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T14:27:51.572Z\",\"updated_at\":\"2020-03-15T14:27:51.572Z\"},{\"id\":230,\"name\":\"59d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"9c1da7c5f0314c36ae1977c5b6caecab\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":16.61,\"url\":\"/uploads/9c1da7c5f0314c36ae1977c5b6caecab.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T14:27:51.580Z\",\"updated_at\":\"2020-03-15T14:27:51.580Z\"}],\"thumbnail\":{\"id\":226,\"name\":\"6.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"240695414ed64690878e38d7494d4592\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":7.04,\"url\":\"/uploads/240695414ed64690878e38d7494d4592.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T14:27:51.539Z\",\"updated_at\":\"2020-03-15T14:27:51.539Z\"}}]},{\"id\":5,\"name\":\"Computers & Technologies\",\"slug\":\"computers-and-technologies\",\"description\":null,\"created_at\":\"2020-03-14T10:26:11.462Z\",\"updated_at\":\"2020-03-14T10:26:11.462Z\",\"products\":[{\"id\":5,\"title\":\"Xbox One Wireless Controller Black Color\",\"is_featured\":false,\"is_hot\":true,\"price\":55.99,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":5,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T06:02:06.677Z\",\"updated_at\":\"2020-03-15T06:02:06.677Z\",\"variants\":[],\"images\":[{\"id\":19,\"name\":\"5a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"1a15c64eb31a4bc2bbeff1961535519c\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":30.89,\"url\":\"/uploads/1a15c64eb31a4bc2bbeff1961535519c.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:02:06.726Z\",\"updated_at\":\"2020-03-15T06:02:06.726Z\"},{\"id\":20,\"name\":\"5b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"bb6866b289d949338bf655c7351f9df8\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":24.88,\"url\":\"/uploads/bb6866b289d949338bf655c7351f9df8.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:02:06.739Z\",\"updated_at\":\"2020-03-15T06:02:06.739Z\"},{\"id\":21,\"name\":\"5c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"d3a3d44ea16e439c9ff426a90e60acd2\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":21.5,\"url\":\"/uploads/d3a3d44ea16e439c9ff426a90e60acd2.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:02:06.748Z\",\"updated_at\":\"2020-03-15T06:02:06.748Z\"},{\"id\":22,\"name\":\"5d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"faa25ed3c1fd4ba3a904b2b6dd8bdc87\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":39.19,\"url\":\"/uploads/faa25ed3c1fd4ba3a904b2b6dd8bdc87.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:02:06.765Z\",\"updated_at\":\"2020-03-15T06:02:06.765Z\"}],\"thumbnail\":{\"id\":18,\"name\":\"5a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"8e2e4eff27414c719203df4ea88e68be\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":30.89,\"url\":\"/uploads/8e2e4eff27414c719203df4ea88e68be.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:02:06.710Z\",\"updated_at\":\"2020-03-15T06:02:06.710Z\"}},{\"id\":7,\"title\":\"Sound Intone I65 Earphone White Version\",\"is_featured\":false,\"is_hot\":false,\"price\":106.96,\"sale_price\":100.99,\"vendor\":\"Youngshop\",\"review\":5,\"is_out_of_stock\":false,\"depot\":80,\"inventory\":90,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-15T06:12:37.749Z\",\"updated_at\":\"2020-04-14T10:45:51.530Z\",\"variants\":[],\"images\":[{\"id\":27,\"name\":\"7a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"e98492a0c2b24ae5892641009bf21056\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":35.46,\"url\":\"/uploads/e98492a0c2b24ae5892641009bf21056.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:12:37.787Z\",\"updated_at\":\"2020-03-15T06:12:37.787Z\"},{\"id\":28,\"name\":\"7b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"55fbf669c1804ea994ace81b7aa58896\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":44.24,\"url\":\"/uploads/55fbf669c1804ea994ace81b7aa58896.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:12:37.797Z\",\"updated_at\":\"2020-03-15T06:12:37.797Z\"},{\"id\":29,\"name\":\"7c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"b6bf4ec3c620428ca2c3876d31b28252\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":35.55,\"url\":\"/uploads/b6bf4ec3c620428ca2c3876d31b28252.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:12:37.807Z\",\"updated_at\":\"2020-03-15T06:12:37.807Z\"},{\"id\":30,\"name\":\"7d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"dcdfd21d3ea44a6888d983d21852d961\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":30.8,\"url\":\"/uploads/dcdfd21d3ea44a6888d983d21852d961.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:12:37.816Z\",\"updated_at\":\"2020-03-15T06:12:37.816Z\"}],\"thumbnail\":{\"id\":26,\"name\":\"6.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"b097fdfb8b9d40fca83de9180de5a7ab\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":7.03,\"url\":\"/uploads/b097fdfb8b9d40fca83de9180de5a7ab.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:12:37.775Z\",\"updated_at\":\"2020-03-15T06:12:37.775Z\"}},{\"id\":16,\"title\":\"ASUS Chromebook Flip – 10.2 Inch\",\"is_featured\":false,\"is_hot\":false,\"price\":332.38,\"sale_price\":null,\"vendor\":\"Young Shop\",\"review\":4,\"is_out_of_stock\":false,\"depot\":60,\"inventory\":80,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T06:40:02.790Z\",\"updated_at\":\"2020-03-15T06:40:02.790Z\",\"variants\":[],\"images\":[{\"id\":70,\"name\":\"16a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"4ef330f9bd3a4bb1ba9c2b23f70772df\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":29.52,\"url\":\"/uploads/4ef330f9bd3a4bb1ba9c2b23f70772df.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:40:02.823Z\",\"updated_at\":\"2020-03-15T06:40:02.823Z\"},{\"id\":71,\"name\":\"16b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"1eff5ff12c48444dac8ba28ac12c0790\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":14.26,\"url\":\"/uploads/1eff5ff12c48444dac8ba28ac12c0790.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:40:02.833Z\",\"updated_at\":\"2020-03-15T06:40:02.833Z\"},{\"id\":72,\"name\":\"16c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"a25ae077a45444528b12b13c7c7c2b1e\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":13.58,\"url\":\"/uploads/a25ae077a45444528b12b13c7c7c2b1e.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:40:02.843Z\",\"updated_at\":\"2020-03-15T06:40:02.843Z\"},{\"id\":73,\"name\":\"16d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"f71d017b2b3d46ebbacec60d7b63f9ff\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":14.61,\"url\":\"/uploads/f71d017b2b3d46ebbacec60d7b63f9ff.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:40:02.852Z\",\"updated_at\":\"2020-03-15T06:40:02.852Z\"}],\"thumbnail\":{\"id\":69,\"name\":\"15.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"6b2dca15a8f14f3f9b4f95cd6b3a6711\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":6,\"url\":\"/uploads/6b2dca15a8f14f3f9b4f95cd6b3a6711.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:40:02.813Z\",\"updated_at\":\"2020-03-15T06:40:02.813Z\"}},{\"id\":17,\"title\":\"Apple Macbook Retina Display 12\",\"is_featured\":false,\"is_hot\":false,\"price\":1362.99,\"sale_price\":1200,\"vendor\":\"Young Shop\",\"review\":4,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-15T06:42:37.444Z\",\"updated_at\":\"2020-03-18T12:54:14.665Z\",\"variants\":[],\"images\":[{\"id\":75,\"name\":\"17a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"2c1147dfe0994cdb980fcd6f216ac3a9\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":47.41,\"url\":\"/uploads/2c1147dfe0994cdb980fcd6f216ac3a9.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:42:37.506Z\",\"updated_at\":\"2020-03-15T06:42:37.506Z\"},{\"id\":76,\"name\":\"17b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"f403deba2d2f4137bce66171471e896b\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":23.48,\"url\":\"/uploads/f403deba2d2f4137bce66171471e896b.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:42:37.521Z\",\"updated_at\":\"2020-03-15T06:42:37.521Z\"},{\"id\":77,\"name\":\"17c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"c80df855abc949908f9dfb9bf5b96de9\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":14.98,\"url\":\"/uploads/c80df855abc949908f9dfb9bf5b96de9.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:42:37.530Z\",\"updated_at\":\"2020-03-15T06:42:37.530Z\"},{\"id\":78,\"name\":\"17d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"1df60e151e7940059d2949c313bccb84\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":5.54,\"url\":\"/uploads/1df60e151e7940059d2949c313bccb84.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:42:37.539Z\",\"updated_at\":\"2020-03-15T06:42:37.539Z\"}],\"thumbnail\":{\"id\":74,\"name\":\"16.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"a85ac7daaa614747b209894c37a0bdbd\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":7.59,\"url\":\"/uploads/a85ac7daaa614747b209894c37a0bdbd.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:42:37.485Z\",\"updated_at\":\"2020-03-15T06:42:37.485Z\"}},{\"id\":18,\"title\":\"Samsung UHD TV 24inch\",\"is_featured\":false,\"is_hot\":false,\"price\":599,\"sale_price\":null,\"vendor\":\"Robert's Store\",\"review\":4,\"is_out_of_stock\":false,\"depot\":40,\"inventory\":60,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T06:44:46.172Z\",\"updated_at\":\"2020-03-15T06:44:46.172Z\",\"variants\":[],\"images\":[{\"id\":80,\"name\":\"18a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"2fa613328d4e4ef69fb36a281057da25\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":72.3,\"url\":\"/uploads/2fa613328d4e4ef69fb36a281057da25.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:44:46.202Z\",\"updated_at\":\"2020-03-15T06:44:46.202Z\"},{\"id\":81,\"name\":\"18b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"298c7187ba2e4459a4427149fc1c77c5\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":27.69,\"url\":\"/uploads/298c7187ba2e4459a4427149fc1c77c5.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:44:46.211Z\",\"updated_at\":\"2020-03-15T06:44:46.211Z\"},{\"id\":82,\"name\":\"18c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"ecdd5aa1e85146e5b7fe7b07b7fb84f1\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":27.7,\"url\":\"/uploads/ecdd5aa1e85146e5b7fe7b07b7fb84f1.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:44:46.219Z\",\"updated_at\":\"2020-03-15T06:44:46.219Z\"},{\"id\":83,\"name\":\"18d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"bcd5916387a348d592994740de295881\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":4.42,\"url\":\"/uploads/bcd5916387a348d592994740de295881.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:44:46.227Z\",\"updated_at\":\"2020-03-15T06:44:46.227Z\"}],\"thumbnail\":{\"id\":79,\"name\":\"18.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"a48664eaed094c769046b4128dd341e4\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":11.29,\"url\":\"/uploads/a48664eaed094c769046b4128dd341e4.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:44:46.192Z\",\"updated_at\":\"2020-03-15T06:44:46.192Z\"}},{\"id\":23,\"title\":\"Amcrest Security Camera in White Color\",\"is_featured\":false,\"is_hot\":false,\"price\":62.99,\"sale_price\":45.9,\"vendor\":\"Global Office\",\"review\":4,\"is_out_of_stock\":false,\"depot\":60,\"inventory\":80,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-15T07:00:52.871Z\",\"updated_at\":\"2020-03-15T07:00:52.871Z\",\"variants\":[],\"images\":[{\"id\":103,\"name\":\"24a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"4fcbfdb675614342a172da1be483724e\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":38.76,\"url\":\"/uploads/4fcbfdb675614342a172da1be483724e.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:00:52.919Z\",\"updated_at\":\"2020-03-15T07:00:52.919Z\"},{\"id\":104,\"name\":\"24b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"ba0feb269ff041e9ba8489b63c0ad79d\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":19.41,\"url\":\"/uploads/ba0feb269ff041e9ba8489b63c0ad79d.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:00:52.927Z\",\"updated_at\":\"2020-03-15T07:00:52.927Z\"},{\"id\":105,\"name\":\"24c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"7ed9a1fcc0814f78bf3ce9941fffcc5c\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":20.22,\"url\":\"/uploads/7ed9a1fcc0814f78bf3ce9941fffcc5c.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:00:52.935Z\",\"updated_at\":\"2020-03-15T07:00:52.935Z\"},{\"id\":106,\"name\":\"24d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"48f249386e604cb69c56a6dfd893d364\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":15.15,\"url\":\"/uploads/48f249386e604cb69c56a6dfd893d364.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:00:52.943Z\",\"updated_at\":\"2020-03-15T07:00:52.943Z\"}],\"thumbnail\":{\"id\":102,\"name\":\"22.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"bb783d18223044cca198d84a4e0e3191\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":7.24,\"url\":\"/uploads/bb783d18223044cca198d84a4e0e3191.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:00:52.903Z\",\"updated_at\":\"2020-03-15T07:00:52.903Z\"}},{\"id\":24,\"title\":\"DJI Phantom 4 Quadcopter Camera\",\"is_featured\":false,\"is_hot\":false,\"price\":1207.15,\"sale_price\":945.9,\"vendor\":\"Go Pro\",\"review\":5,\"is_out_of_stock\":false,\"depot\":65,\"inventory\":70,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-15T07:06:17.229Z\",\"updated_at\":\"2020-03-15T07:06:17.229Z\",\"variants\":[],\"images\":[{\"id\":108,\"name\":\"25a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"c7f00eff80d744a3b4fbc96918deabb1\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":20.23,\"url\":\"/uploads/c7f00eff80d744a3b4fbc96918deabb1.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:06:17.280Z\",\"updated_at\":\"2020-03-15T07:06:17.280Z\"},{\"id\":109,\"name\":\"25b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"6215cedde8354803817b8d0b46446865\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":7.75,\"url\":\"/uploads/6215cedde8354803817b8d0b46446865.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:06:17.295Z\",\"updated_at\":\"2020-03-15T07:06:17.295Z\"},{\"id\":110,\"name\":\"25c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"8b54c00b8f244b87b9179e402a7639b2\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":6.46,\"url\":\"/uploads/8b54c00b8f244b87b9179e402a7639b2.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:06:17.303Z\",\"updated_at\":\"2020-03-15T07:06:17.303Z\"},{\"id\":111,\"name\":\"25d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"de6cc09f104f456b89c255b450655089\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":16.18,\"url\":\"/uploads/de6cc09f104f456b89c255b450655089.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:06:17.310Z\",\"updated_at\":\"2020-03-15T07:06:17.310Z\"}],\"thumbnail\":{\"id\":107,\"name\":\"23.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"f5e300388365470aae6f894f4f0f5c61\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":3.74,\"url\":\"/uploads/f5e300388365470aae6f894f4f0f5c61.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:06:17.262Z\",\"updated_at\":\"2020-03-15T07:06:17.262Z\"}},{\"id\":31,\"title\":\"Samsung Gear VR Virtual Reality Headset\",\"is_featured\":false,\"is_hot\":false,\"price\":320,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":1,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T09:05:44.603Z\",\"updated_at\":\"2020-03-15T09:05:44.603Z\",\"variants\":[],\"images\":[{\"id\":139,\"name\":\"32a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"30b225eb781448bb96b4eb0e585de1ba\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":33.87,\"url\":\"/uploads/30b225eb781448bb96b4eb0e585de1ba.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:05:44.630Z\",\"updated_at\":\"2020-03-15T09:05:44.630Z\"},{\"id\":140,\"name\":\"32b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"d74002e783b441c4ae0bfd35b16a56fc\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":12.9,\"url\":\"/uploads/d74002e783b441c4ae0bfd35b16a56fc.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:05:44.637Z\",\"updated_at\":\"2020-03-15T09:05:44.637Z\"},{\"id\":141,\"name\":\"32c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"f3f8a64c9ebd4035aa753650a4ed48d0\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":14.25,\"url\":\"/uploads/f3f8a64c9ebd4035aa753650a4ed48d0.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:05:44.650Z\",\"updated_at\":\"2020-03-15T09:05:44.650Z\"},{\"id\":142,\"name\":\"32d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"99e3308b7d1a4bbf814ce67329001c39\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":11.95,\"url\":\"/uploads/99e3308b7d1a4bbf814ce67329001c39.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:05:44.658Z\",\"updated_at\":\"2020-03-15T09:05:44.658Z\"}],\"thumbnail\":{\"id\":138,\"name\":\"4.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"27c756b633404bf6bc734557a90e3baa\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":6.52,\"url\":\"/uploads/27c756b633404bf6bc734557a90e3baa.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:05:44.620Z\",\"updated_at\":\"2020-03-15T09:05:44.620Z\"}},{\"id\":42,\"title\":\"Gopro Hero 4 Sliver Wireless, 4k HD\",\"is_featured\":false,\"is_hot\":false,\"price\":510,\"sale_price\":500.99,\"vendor\":\"Go Pro\",\"review\":4,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-15T09:49:14.357Z\",\"updated_at\":\"2020-03-15T09:49:14.357Z\",\"variants\":[],\"images\":[{\"id\":164,\"name\":\"18.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"c81b5f934b8842a19f80eb94b66dbacf\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":6.09,\"url\":\"/uploads/c81b5f934b8842a19f80eb94b66dbacf.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:49:14.387Z\",\"updated_at\":\"2020-03-15T09:49:14.387Z\"}],\"thumbnail\":{\"id\":163,\"name\":\"18.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"3a99112514724b59a18c48fa6a3569d3\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":6.09,\"url\":\"/uploads/3a99112514724b59a18c48fa6a3569d3.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:49:14.376Z\",\"updated_at\":\"2020-03-15T09:49:14.376Z\"}},{\"id\":61,\"title\":\"Apple MacBook Air Retina 13.3-Inch Laptop\",\"is_featured\":false,\"is_hot\":false,\"price\":1120,\"sale_price\":1020.99,\"vendor\":\"Global Office\",\"review\":4,\"is_out_of_stock\":false,\"depot\":60,\"inventory\":70,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-18T04:29:19.122Z\",\"updated_at\":\"2020-03-18T04:29:19.122Z\",\"variants\":[],\"images\":[{\"id\":240,\"name\":\"3.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"6323ba741e89407abde3c2b813a7b958\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":7.53,\"url\":\"/uploads/6323ba741e89407abde3c2b813a7b958.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T04:29:19.153Z\",\"updated_at\":\"2020-03-18T04:29:19.153Z\"}],\"thumbnail\":{\"id\":239,\"name\":\"3.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"a4dc298d307e401c9f829d269a9a97a4\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":7.53,\"url\":\"/uploads/a4dc298d307e401c9f829d269a9a97a4.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T04:29:19.140Z\",\"updated_at\":\"2020-03-18T04:29:19.140Z\"}},{\"id\":66,\"title\":\"Apple MacBook Air Retina 12-Inch Laptop\",\"is_featured\":false,\"is_hot\":false,\"price\":942.99,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":4,\"is_out_of_stock\":false,\"depot\":50,\"inventory\":60,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-18T05:37:01.843Z\",\"updated_at\":\"2020-03-18T05:37:01.843Z\",\"variants\":[],\"images\":[{\"id\":259,\"name\":\"67a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"6dc62d368b0a4a77803c7abd30ecc540\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":61.32,\"url\":\"/uploads/6dc62d368b0a4a77803c7abd30ecc540.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:37:01.873Z\",\"updated_at\":\"2020-03-18T05:37:01.873Z\"},{\"id\":260,\"name\":\"67b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"69dd0520caba4f14b8630e4db8db4e86\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":4.22,\"url\":\"/uploads/69dd0520caba4f14b8630e4db8db4e86.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:37:01.882Z\",\"updated_at\":\"2020-03-18T05:37:01.882Z\"},{\"id\":261,\"name\":\"67c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"161c3e2cf6b6407aa96e0a7570358146\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":22.04,\"url\":\"/uploads/161c3e2cf6b6407aa96e0a7570358146.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:37:01.890Z\",\"updated_at\":\"2020-03-18T05:37:01.890Z\"},{\"id\":262,\"name\":\"67d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"b4cfc0a8e6f64b96b3f6f5ccf6eac770\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":4.66,\"url\":\"/uploads/b4cfc0a8e6f64b96b3f6f5ccf6eac770.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:37:01.898Z\",\"updated_at\":\"2020-03-18T05:37:01.898Z\"}],\"thumbnail\":{\"id\":258,\"name\":\"12.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"b8c8108591324725abc436cc899df220\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":7.56,\"url\":\"/uploads/b8c8108591324725abc436cc899df220.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:37:01.862Z\",\"updated_at\":\"2020-03-18T05:37:01.862Z\"}},{\"id\":72,\"title\":\"HP Chromebook CB 10014 Desktop\",\"is_featured\":false,\"is_hot\":false,\"price\":820.99,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":4,\"is_out_of_stock\":false,\"depot\":60,\"inventory\":70,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-18T05:49:55.032Z\",\"updated_at\":\"2020-03-18T05:49:55.032Z\",\"variants\":[],\"images\":[{\"id\":287,\"name\":\"73a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"a71fa14e97ef4317ae248c78247720cf\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":25.14,\"url\":\"/uploads/a71fa14e97ef4317ae248c78247720cf.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:49:55.087Z\",\"updated_at\":\"2020-03-18T05:49:55.087Z\"},{\"id\":288,\"name\":\"73b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"280d9fae269246568406ef5aac860795\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":27.11,\"url\":\"/uploads/280d9fae269246568406ef5aac860795.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:49:55.099Z\",\"updated_at\":\"2020-03-18T05:49:55.099Z\"},{\"id\":289,\"name\":\"73c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"33a5e8a71e7841519f62ac215b3a3a50\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":7.13,\"url\":\"/uploads/33a5e8a71e7841519f62ac215b3a3a50.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:49:55.119Z\",\"updated_at\":\"2020-03-18T05:49:55.119Z\"},{\"id\":290,\"name\":\"73d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"ed02ef12245647ecbae125ad1d2c6049\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":6.4,\"url\":\"/uploads/ed02ef12245647ecbae125ad1d2c6049.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:49:55.131Z\",\"updated_at\":\"2020-03-18T05:49:55.131Z\"}],\"thumbnail\":{\"id\":286,\"name\":\"18.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"f73d332d3a074a44af99b073c922b24f\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":4.11,\"url\":\"/uploads/f73d332d3a074a44af99b073c922b24f.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:49:55.070Z\",\"updated_at\":\"2020-03-18T05:49:55.070Z\"}}]},{\"id\":6,\"name\":\"Jewelry & Watches\",\"slug\":\"jewelry-and-watches\",\"description\":null,\"created_at\":\"2020-03-14T10:26:39.769Z\",\"updated_at\":\"2020-03-14T10:26:39.769Z\",\"products\":[{\"id\":14,\"title\":\"MVMTH Classical Leather Watch In Black\",\"is_featured\":false,\"is_hot\":false,\"price\":62.99,\"sale_price\":57.99,\"vendor\":\"Young Shop\",\"review\":5,\"is_out_of_stock\":false,\"depot\":60,\"inventory\":70,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-15T06:34:26.192Z\",\"updated_at\":\"2020-03-15T06:34:26.192Z\",\"variants\":[],\"images\":[{\"id\":60,\"name\":\"14a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"3ac851d95c86433b8fcc50600c917036\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":37.78,\"url\":\"/uploads/3ac851d95c86433b8fcc50600c917036.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:34:26.237Z\",\"updated_at\":\"2020-03-15T06:34:26.237Z\"},{\"id\":61,\"name\":\"14b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"ebe0db165640431d9c8fd683f3258663\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":22.93,\"url\":\"/uploads/ebe0db165640431d9c8fd683f3258663.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:34:26.244Z\",\"updated_at\":\"2020-03-15T06:34:26.244Z\"},{\"id\":62,\"name\":\"14c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"3f385d0f210e4ee88ed91de38d36470e\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":16.68,\"url\":\"/uploads/3f385d0f210e4ee88ed91de38d36470e.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:34:26.262Z\",\"updated_at\":\"2020-03-15T06:34:26.262Z\"}],\"thumbnail\":{\"id\":59,\"name\":\"13.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"5a88e8516a6e44cb86ba41516dca0d56\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":7.62,\"url\":\"/uploads/5a88e8516a6e44cb86ba41516dca0d56.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:34:26.226Z\",\"updated_at\":\"2020-03-15T06:34:26.226Z\"}}]},{\"id\":7,\"name\":\"Phones & Accessories\",\"slug\":\"phones-and-accessories\",\"description\":null,\"created_at\":\"2020-03-14T10:26:54.185Z\",\"updated_at\":\"2020-03-14T10:26:54.185Z\",\"products\":[{\"id\":1,\"title\":\"Apple iPhone Retina 6s Plus 32GB\",\"is_featured\":null,\"is_hot\":null,\"price\":640.5,\"sale_price\":null,\"vendor\":\"ROBERT’S STORE\",\"review\":5,\"is_out_of_stock\":null,\"depot\":80,\"inventory\":100,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-14T10:34:56.811Z\",\"updated_at\":\"2020-03-14T10:39:05.919Z\",\"variants\":[],\"images\":[{\"id\":1,\"name\":\"1a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"114071762b454d09aca0e0a95ad3885d\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":8.78,\"url\":\"/uploads/114071762b454d09aca0e0a95ad3885d.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-14T10:39:17.429Z\",\"updated_at\":\"2020-03-14T10:39:17.429Z\"},{\"id\":2,\"name\":\"1c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"f73c23a548694e8fb0435aa0644cc570\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":10.88,\"url\":\"/uploads/f73c23a548694e8fb0435aa0644cc570.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-14T10:39:17.444Z\",\"updated_at\":\"2020-03-14T10:39:17.444Z\"},{\"id\":3,\"name\":\"1b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"af86c8d6136b4bb8805354995c3e6ed8\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":4.5,\"url\":\"/uploads/af86c8d6136b4bb8805354995c3e6ed8.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-14T10:39:17.458Z\",\"updated_at\":\"2020-03-14T10:39:17.458Z\"}],\"thumbnail\":{\"id\":4,\"name\":\"1a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"5a1586c7d04646fda4575e5af5c16c30\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":8.78,\"url\":\"/uploads/5a1586c7d04646fda4575e5af5c16c30.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-14T10:41:20.970Z\",\"updated_at\":\"2020-03-14T10:41:20.970Z\"}},{\"id\":2,\"title\":\"Apple iPhone Retina 6s Plus 64GB\",\"is_featured\":false,\"is_hot\":false,\"price\":1150,\"sale_price\":null,\"vendor\":\"Young Shop\",\"review\":4,\"is_out_of_stock\":false,\"depot\":80,\"inventory\":100,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T05:47:28.790Z\",\"updated_at\":\"2020-03-15T06:03:15.417Z\",\"variants\":[],\"images\":[{\"id\":6,\"name\":\"1a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"0e9b9750228b421aafe324f6f9b36304\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":8.78,\"url\":\"/uploads/0e9b9750228b421aafe324f6f9b36304.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T05:47:28.833Z\",\"updated_at\":\"2020-03-15T05:47:28.833Z\"},{\"id\":7,\"name\":\"1b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"99cdb1e5a2874365bab8f49ea1fc7070\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":4.5,\"url\":\"/uploads/99cdb1e5a2874365bab8f49ea1fc7070.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T05:47:28.857Z\",\"updated_at\":\"2020-03-15T05:47:28.857Z\"},{\"id\":8,\"name\":\"1c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"2ed1134b99b146feb6245f8e07201ec8\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":10.88,\"url\":\"/uploads/2ed1134b99b146feb6245f8e07201ec8.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T05:47:28.869Z\",\"updated_at\":\"2020-03-15T05:47:28.869Z\"}],\"thumbnail\":{\"id\":5,\"name\":\"1.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"4c07bca3f13444688823a1c099410884\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":9.04,\"url\":\"/uploads/4c07bca3f13444688823a1c099410884.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T05:47:28.819Z\",\"updated_at\":\"2020-03-15T05:47:28.819Z\"}},{\"id\":15,\"title\":\"Beat Spill 2.0 Wireless Speaker – White\",\"is_featured\":false,\"is_hot\":false,\"price\":62.99,\"sale_price\":57.99,\"vendor\":\"Global Office\",\"review\":5,\"is_out_of_stock\":false,\"depot\":50,\"inventory\":80,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-15T06:37:17.824Z\",\"updated_at\":\"2020-03-15T06:37:17.824Z\",\"variants\":[],\"images\":[{\"id\":64,\"name\":\"1.png\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"bbb75430607f4d43ad26e4467ebdc524\",\"ext\":\".png\",\"mime\":\"image/png\",\"size\":2.55,\"url\":\"/uploads/bbb75430607f4d43ad26e4467ebdc524.png\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:37:17.869Z\",\"updated_at\":\"2020-03-15T06:37:17.869Z\"},{\"id\":65,\"name\":\"2.png\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"8df2b7bc798c43e3a56ba6b59c5be53a\",\"ext\":\".png\",\"mime\":\"image/png\",\"size\":2.55,\"url\":\"/uploads/8df2b7bc798c43e3a56ba6b59c5be53a.png\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:37:17.878Z\",\"updated_at\":\"2020-03-15T06:37:17.878Z\"},{\"id\":66,\"name\":\"4.png\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"88eb11d6018e498aa7f97d41d4a434d2\",\"ext\":\".png\",\"mime\":\"image/png\",\"size\":2.55,\"url\":\"/uploads/88eb11d6018e498aa7f97d41d4a434d2.png\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:37:17.887Z\",\"updated_at\":\"2020-03-15T06:37:17.887Z\"},{\"id\":67,\"name\":\"5.png\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"9e94caa14f78425aaaaa699d8412a8cb\",\"ext\":\".png\",\"mime\":\"image/png\",\"size\":2.55,\"url\":\"/uploads/9e94caa14f78425aaaaa699d8412a8cb.png\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:37:17.896Z\",\"updated_at\":\"2020-03-15T06:37:17.896Z\"},{\"id\":68,\"name\":\"3.png\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"35afd31625dc46a48050b0f918897eaf\",\"ext\":\".png\",\"mime\":\"image/png\",\"size\":2.55,\"url\":\"/uploads/35afd31625dc46a48050b0f918897eaf.png\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:37:17.912Z\",\"updated_at\":\"2020-03-15T06:37:17.912Z\"}],\"thumbnail\":{\"id\":63,\"name\":\"14.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"3ca33b80916943f49a5af0a84ab2ef15\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":6.24,\"url\":\"/uploads/3ca33b80916943f49a5af0a84ab2ef15.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:37:17.857Z\",\"updated_at\":\"2020-03-15T06:37:17.857Z\"}},{\"id\":22,\"title\":\"Edifier Powered Bookshelf Speakers\",\"is_featured\":false,\"is_hot\":false,\"price\":96,\"sale_price\":85,\"vendor\":\"Young Shop\",\"review\":5,\"is_out_of_stock\":false,\"depot\":50,\"inventory\":65,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-15T06:57:47.163Z\",\"updated_at\":\"2020-03-15T06:57:47.163Z\",\"variants\":[],\"images\":[{\"id\":98,\"name\":\"22a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"8781ca71d80847979441fe7dc8b94fa9\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":68.23,\"url\":\"/uploads/8781ca71d80847979441fe7dc8b94fa9.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:57:47.213Z\",\"updated_at\":\"2020-03-15T06:57:47.213Z\"},{\"id\":99,\"name\":\"22b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"bde411ee582c4c86812e06dd5252c188\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":24.46,\"url\":\"/uploads/bde411ee582c4c86812e06dd5252c188.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:57:47.230Z\",\"updated_at\":\"2020-03-15T06:57:47.230Z\"},{\"id\":100,\"name\":\"22c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"f2a178431d59495791d2030dc6900304\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":38.11,\"url\":\"/uploads/f2a178431d59495791d2030dc6900304.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:57:47.237Z\",\"updated_at\":\"2020-03-15T06:57:47.237Z\"},{\"id\":101,\"name\":\"22d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"2bb3160bbb234b93b2210ff505090e87\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":18.81,\"url\":\"/uploads/2bb3160bbb234b93b2210ff505090e87.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:57:47.245Z\",\"updated_at\":\"2020-03-15T06:57:47.245Z\"}],\"thumbnail\":{\"id\":97,\"name\":\"21.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"51a0ff71f98649af8b17284ed14f955d\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":10,\"url\":\"/uploads/51a0ff71f98649af8b17284ed14f955d.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:57:47.203Z\",\"updated_at\":\"2020-03-15T06:57:47.203Z\"}},{\"id\":43,\"title\":\"Nikon Coolpix 24 Megapixel Camera\",\"is_featured\":false,\"is_hot\":false,\"price\":393.38,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":5,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T09:51:05.087Z\",\"updated_at\":\"2020-03-15T09:51:05.087Z\",\"variants\":[],\"images\":[{\"id\":166,\"name\":\"44a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"c8ff3afb2eef49b99c8abc0f1bbf3563\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":41.72,\"url\":\"/uploads/c8ff3afb2eef49b99c8abc0f1bbf3563.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:51:05.119Z\",\"updated_at\":\"2020-03-15T09:51:05.119Z\"},{\"id\":167,\"name\":\"44b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"56596cdb7d034c3e99ff9daf3c464128\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":12.31,\"url\":\"/uploads/56596cdb7d034c3e99ff9daf3c464128.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:51:05.129Z\",\"updated_at\":\"2020-03-15T09:51:05.129Z\"},{\"id\":168,\"name\":\"44c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"92d14dc17dbe44169c3daa3c6f8bddd0\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":13.54,\"url\":\"/uploads/92d14dc17dbe44169c3daa3c6f8bddd0.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:51:05.139Z\",\"updated_at\":\"2020-03-15T09:51:05.139Z\"},{\"id\":169,\"name\":\"44d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"d9fdd2a79c1540b68ae3ee84d9523a70\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":13.63,\"url\":\"/uploads/d9fdd2a79c1540b68ae3ee84d9523a70.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:51:05.147Z\",\"updated_at\":\"2020-03-15T09:51:05.147Z\"}],\"thumbnail\":{\"id\":165,\"name\":\"19.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"d8125ce8ae8b46cb926e01daae0c0fb2\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":6.5,\"url\":\"/uploads/d8125ce8ae8b46cb926e01daae0c0fb2.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:51:05.108Z\",\"updated_at\":\"2020-03-15T09:51:05.108Z\"}},{\"id\":44,\"title\":\"Sony HD 1080, 13.5MP, White Version\",\"is_featured\":false,\"is_hot\":false,\"price\":760,\"sale_price\":625,\"vendor\":\"Young Shop\",\"review\":5,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-15T09:55:33.399Z\",\"updated_at\":\"2020-03-15T09:55:33.399Z\",\"variants\":[],\"images\":[{\"id\":171,\"name\":\"45a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"6dab2ac788b04a5cbca7400ec03d8a38\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":28.26,\"url\":\"/uploads/6dab2ac788b04a5cbca7400ec03d8a38.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:55:33.428Z\",\"updated_at\":\"2020-03-15T09:55:33.428Z\"},{\"id\":172,\"name\":\"45b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"1c026df89da0490bbe2a7afc5a99195a\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":9.88,\"url\":\"/uploads/1c026df89da0490bbe2a7afc5a99195a.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:55:33.438Z\",\"updated_at\":\"2020-03-15T09:55:33.438Z\"},{\"id\":173,\"name\":\"45c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"4c1c99e28c794b26a047a0c87a679f98\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":7.65,\"url\":\"/uploads/4c1c99e28c794b26a047a0c87a679f98.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:55:33.446Z\",\"updated_at\":\"2020-03-15T09:55:33.446Z\"},{\"id\":174,\"name\":\"45d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"0de96474e26645699609477fdd64b21e\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":5.76,\"url\":\"/uploads/0de96474e26645699609477fdd64b21e.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:55:33.455Z\",\"updated_at\":\"2020-03-15T09:55:33.455Z\"}],\"thumbnail\":{\"id\":170,\"name\":\"20.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"d8789adf571d46f19ce9065da0cf64a3\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":3.72,\"url\":\"/uploads/d8789adf571d46f19ce9065da0cf64a3.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:55:33.416Z\",\"updated_at\":\"2020-03-15T09:55:33.416Z\"}},{\"id\":59,\"title\":\"Apple iPhone X 256GB T-Mobile – Black\",\"is_featured\":false,\"is_hot\":false,\"price\":1893,\"sale_price\":1389.99,\"vendor\":\"Global Store\",\"review\":5,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-15T18:22:07.656Z\",\"updated_at\":\"2020-03-15T18:22:07.656Z\",\"variants\":[],\"images\":[{\"id\":232,\"name\":\"1a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"addf8765d842420f8ad5f31c9cc6049c\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":8.78,\"url\":\"/uploads/addf8765d842420f8ad5f31c9cc6049c.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T18:22:07.688Z\",\"updated_at\":\"2020-03-15T18:22:07.688Z\"},{\"id\":233,\"name\":\"1b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"91f9481dda1b43059807e01c4d3d0831\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":4.5,\"url\":\"/uploads/91f9481dda1b43059807e01c4d3d0831.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T18:22:07.697Z\",\"updated_at\":\"2020-03-15T18:22:07.697Z\"},{\"id\":234,\"name\":\"1c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"faeb5485d91a4772a0215d19f234a12e\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":10.88,\"url\":\"/uploads/faeb5485d91a4772a0215d19f234a12e.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T18:22:07.708Z\",\"updated_at\":\"2020-03-15T18:22:07.708Z\"}],\"thumbnail\":{\"id\":231,\"name\":\"1.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"b9afa9cf7f8c4ba6a6564db68f2ce90f\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":7.35,\"url\":\"/uploads/b9afa9cf7f8c4ba6a6564db68f2ce90f.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T18:22:07.676Z\",\"updated_at\":\"2020-03-15T18:22:07.676Z\"}},{\"id\":60,\"title\":\"Apple iPhone 7 Plus 128 GB – Red Color\",\"is_featured\":false,\"is_hot\":false,\"price\":893,\"sale_price\":820.99,\"vendor\":\"Global Office\",\"review\":4,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-18T04:27:45.620Z\",\"updated_at\":\"2020-03-18T04:27:45.620Z\",\"variants\":[],\"images\":[{\"id\":236,\"name\":\"1a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"8683d4e9c40f4c3bb003123ad3b3233a\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":8.78,\"url\":\"/uploads/8683d4e9c40f4c3bb003123ad3b3233a.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T04:27:45.663Z\",\"updated_at\":\"2020-03-18T04:27:45.663Z\"},{\"id\":237,\"name\":\"1b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"ef8b92ddea1649d7a708b82b94e1547d\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":4.5,\"url\":\"/uploads/ef8b92ddea1649d7a708b82b94e1547d.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T04:27:45.676Z\",\"updated_at\":\"2020-03-18T04:27:45.676Z\"},{\"id\":238,\"name\":\"1c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"7c4bc2eb18aa467bb5ac730b51a1ca5b\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":10.88,\"url\":\"/uploads/7c4bc2eb18aa467bb5ac730b51a1ca5b.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T04:27:45.688Z\",\"updated_at\":\"2020-03-18T04:27:45.688Z\"}],\"thumbnail\":{\"id\":235,\"name\":\"2.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"490bd709c0be4545b29121b244ff4516\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":6.91,\"url\":\"/uploads/490bd709c0be4545b29121b244ff4516.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T04:27:45.648Z\",\"updated_at\":\"2020-03-18T04:27:45.648Z\"}},{\"id\":63,\"title\":\"Samsung Gallaxy A8 8GB Ram – Sliver Version\",\"is_featured\":false,\"is_hot\":false,\"price\":592,\"sale_price\":542.99,\"vendor\":\"Global Office\",\"review\":5,\"is_out_of_stock\":false,\"depot\":80,\"inventory\":90,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-18T04:32:53.963Z\",\"updated_at\":\"2020-03-18T04:32:53.963Z\",\"variants\":[],\"images\":[{\"id\":244,\"name\":\"64a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"708ee0dd258046cb97c11527cf61e848\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":59.99,\"url\":\"/uploads/708ee0dd258046cb97c11527cf61e848.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T04:32:53.999Z\",\"updated_at\":\"2020-03-18T04:32:53.999Z\"},{\"id\":245,\"name\":\"64b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"f617556918cf46498ed7c6318c48da72\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":17.47,\"url\":\"/uploads/f617556918cf46498ed7c6318c48da72.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T04:32:54.008Z\",\"updated_at\":\"2020-03-18T04:32:54.008Z\"},{\"id\":246,\"name\":\"64c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"f95b63b1115f427db664f2f8095d14c7\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":13.59,\"url\":\"/uploads/f95b63b1115f427db664f2f8095d14c7.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T04:32:54.019Z\",\"updated_at\":\"2020-03-18T04:32:54.019Z\"},{\"id\":247,\"name\":\"64d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"e3a28a9122ad46c0af352e4457aa4534\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":27.08,\"url\":\"/uploads/e3a28a9122ad46c0af352e4457aa4534.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T04:32:54.027Z\",\"updated_at\":\"2020-03-18T04:32:54.027Z\"}],\"thumbnail\":{\"id\":243,\"name\":\"6.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"44f81c8d298740b5b900799971809fea\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":8.74,\"url\":\"/uploads/44f81c8d298740b5b900799971809fea.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T04:32:53.989Z\",\"updated_at\":\"2020-03-18T04:32:53.989Z\"}},{\"id\":64,\"title\":\"Samsung Gallaxy A8 10GB Ram – Sliver Version\",\"is_featured\":false,\"is_hot\":false,\"price\":592,\"sale_price\":642.99,\"vendor\":\"Global Office\",\"review\":4,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-18T05:33:26.161Z\",\"updated_at\":\"2020-03-18T05:33:26.161Z\",\"variants\":[],\"images\":[{\"id\":249,\"name\":\"65a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"0a3c28219fc74e499f3256ad77d94a55\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":59.99,\"url\":\"/uploads/0a3c28219fc74e499f3256ad77d94a55.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:33:26.190Z\",\"updated_at\":\"2020-03-18T05:33:26.190Z\"},{\"id\":250,\"name\":\"65b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"30bd54763a8a4867bd1d5c3d786e26b5\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":17.47,\"url\":\"/uploads/30bd54763a8a4867bd1d5c3d786e26b5.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:33:26.198Z\",\"updated_at\":\"2020-03-18T05:33:26.198Z\"},{\"id\":251,\"name\":\"65c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"4a17b2711b3b422694466bc5492ab828\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":13.59,\"url\":\"/uploads/4a17b2711b3b422694466bc5492ab828.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:33:26.210Z\",\"updated_at\":\"2020-03-18T05:33:26.210Z\"},{\"id\":252,\"name\":\"65d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"48971dad13ae4a4aa765ba6ae56951fa\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":27.08,\"url\":\"/uploads/48971dad13ae4a4aa765ba6ae56951fa.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:33:26.217Z\",\"updated_at\":\"2020-03-18T05:33:26.217Z\"}],\"thumbnail\":{\"id\":248,\"name\":\"7.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"86c8fe9d6d6648e99a6015727d421e27\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":11.72,\"url\":\"/uploads/86c8fe9d6d6648e99a6015727d421e27.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:33:26.180Z\",\"updated_at\":\"2020-03-18T05:33:26.180Z\"}},{\"id\":65,\"title\":\"Yuntab K107 10.1 Inch Quad Core CPU MT6580\",\"is_featured\":false,\"is_hot\":false,\"price\":99.99,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":4,\"is_out_of_stock\":false,\"depot\":50,\"inventory\":60,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-18T05:35:13.796Z\",\"updated_at\":\"2020-03-18T05:35:13.796Z\",\"variants\":[],\"images\":[{\"id\":254,\"name\":\"66a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"bc0584820ba146688921e5df66ef0aa1\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":79.12,\"url\":\"/uploads/bc0584820ba146688921e5df66ef0aa1.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:35:13.827Z\",\"updated_at\":\"2020-03-18T05:35:13.827Z\"},{\"id\":255,\"name\":\"66b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"1838261f7afd46149a41e7b322955b7f\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":19.05,\"url\":\"/uploads/1838261f7afd46149a41e7b322955b7f.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:35:13.835Z\",\"updated_at\":\"2020-03-18T05:35:13.835Z\"},{\"id\":256,\"name\":\"66c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"62ed690a4d744c6fa2a0d62c02159252\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":15.88,\"url\":\"/uploads/62ed690a4d744c6fa2a0d62c02159252.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:35:13.843Z\",\"updated_at\":\"2020-03-18T05:35:13.843Z\"},{\"id\":257,\"name\":\"66d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"ce7ad3a37f3f4acaadf8e5c9cf996792\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":6.33,\"url\":\"/uploads/ce7ad3a37f3f4acaadf8e5c9cf996792.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:35:13.851Z\",\"updated_at\":\"2020-03-18T05:35:13.851Z\"}],\"thumbnail\":{\"id\":253,\"name\":\"7.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"7df00b4c32074b9c85b464f3dbbbab2e\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":11.72,\"url\":\"/uploads/7df00b4c32074b9c85b464f3dbbbab2e.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:35:13.815Z\",\"updated_at\":\"2020-03-18T05:35:13.815Z\"}},{\"id\":67,\"title\":\"Bose Ear-Phone Bluetooth & Wireless\",\"is_featured\":false,\"is_hot\":false,\"price\":392.99,\"sale_price\":null,\"vendor\":\"Young Shop\",\"review\":4,\"is_out_of_stock\":false,\"depot\":60,\"inventory\":70,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-18T05:38:55.759Z\",\"updated_at\":\"2020-03-18T05:38:55.759Z\",\"variants\":[],\"images\":[{\"id\":264,\"name\":\"68a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"20898b1b75ff4fcd9967794e6def5d28\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":47.86,\"url\":\"/uploads/20898b1b75ff4fcd9967794e6def5d28.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:38:55.790Z\",\"updated_at\":\"2020-03-18T05:38:55.790Z\"},{\"id\":265,\"name\":\"68b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"7a5d1d5dfc4e4c7f98dd19899c4da4da\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":8.04,\"url\":\"/uploads/7a5d1d5dfc4e4c7f98dd19899c4da4da.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:38:55.800Z\",\"updated_at\":\"2020-03-18T05:38:55.800Z\"},{\"id\":266,\"name\":\"68c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"05a1dc53fdf6423884f70e1693bb7451\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":14.82,\"url\":\"/uploads/05a1dc53fdf6423884f70e1693bb7451.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:38:55.813Z\",\"updated_at\":\"2020-03-18T05:38:55.813Z\"},{\"id\":267,\"name\":\"68d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"e343e6de894e4428adc482f129f96d8f\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":22.57,\"url\":\"/uploads/e343e6de894e4428adc482f129f96d8f.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:38:55.837Z\",\"updated_at\":\"2020-03-18T05:38:55.837Z\"}],\"thumbnail\":{\"id\":348,\"name\":\"68a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"9807d7efbaba430b9c90fc2aaa9ec175\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":47.86,\"url\":\"/uploads/9807d7efbaba430b9c90fc2aaa9ec175.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-28T12:09:41.868Z\",\"updated_at\":\"2020-03-28T12:09:41.868Z\"}},{\"id\":68,\"title\":\"iQOS 2.4 Plus Kit, Holder & Chargers – White\",\"is_featured\":false,\"is_hot\":false,\"price\":42.99,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":5,\"is_out_of_stock\":false,\"depot\":60,\"inventory\":70,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-18T05:40:48.214Z\",\"updated_at\":\"2020-03-18T05:40:48.214Z\",\"variants\":[],\"images\":[{\"id\":269,\"name\":\"69a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"2a2002069143470c8af739e13e8b8676\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":23.33,\"url\":\"/uploads/2a2002069143470c8af739e13e8b8676.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:40:48.243Z\",\"updated_at\":\"2020-03-18T05:40:48.243Z\"},{\"id\":270,\"name\":\"69b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"5945f90deeef4fbbad27d6a3da5b50bc\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":11.04,\"url\":\"/uploads/5945f90deeef4fbbad27d6a3da5b50bc.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:40:48.251Z\",\"updated_at\":\"2020-03-18T05:40:48.251Z\"},{\"id\":271,\"name\":\"69c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"ae6c8e5e004a4bec904dc500c0690581\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":8.04,\"url\":\"/uploads/ae6c8e5e004a4bec904dc500c0690581.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:40:48.259Z\",\"updated_at\":\"2020-03-18T05:40:48.259Z\"},{\"id\":272,\"name\":\"69d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"e8a4f345960d47eb871a8e95f511b39f\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":6.98,\"url\":\"/uploads/e8a4f345960d47eb871a8e95f511b39f.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:40:48.267Z\",\"updated_at\":\"2020-03-18T05:40:48.267Z\"}],\"thumbnail\":{\"id\":268,\"name\":\"13.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"59a5c64f4d9b4d1c804bd72a1c132d02\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":4.17,\"url\":\"/uploads/59a5c64f4d9b4d1c804bd72a1c132d02.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:40:48.232Z\",\"updated_at\":\"2020-03-18T05:40:48.232Z\"}},{\"id\":73,\"title\":\"Acrylic Cover Case for iPhone X- (Clear)\",\"is_featured\":false,\"is_hot\":false,\"price\":49.99,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":4,\"is_out_of_stock\":false,\"depot\":60,\"inventory\":70,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-18T05:51:16.881Z\",\"updated_at\":\"2020-03-18T05:51:16.881Z\",\"variants\":[],\"images\":[{\"id\":292,\"name\":\"74a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"9060cce18215425cb932cd04807858ea\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":63,\"url\":\"/uploads/9060cce18215425cb932cd04807858ea.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:51:16.944Z\",\"updated_at\":\"2020-03-18T05:51:16.944Z\"},{\"id\":293,\"name\":\"74b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"164c1cb463f040caa92d0206c3dac9e6\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":14.11,\"url\":\"/uploads/164c1cb463f040caa92d0206c3dac9e6.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:51:16.957Z\",\"updated_at\":\"2020-03-18T05:51:16.957Z\"},{\"id\":294,\"name\":\"74c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"9939d662151d49cf8703359034d3e39c\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":21.53,\"url\":\"/uploads/9939d662151d49cf8703359034d3e39c.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:51:16.967Z\",\"updated_at\":\"2020-03-18T05:51:16.967Z\"},{\"id\":295,\"name\":\"74d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"0a20ecfcafde4344b5c84a593f6ee6ed\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":17.9,\"url\":\"/uploads/0a20ecfcafde4344b5c84a593f6ee6ed.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:51:16.977Z\",\"updated_at\":\"2020-03-18T05:51:16.977Z\"}],\"thumbnail\":{\"id\":291,\"name\":\"19.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"2b1781baa5a045cd83c9d1ff5f4882e4\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":8.87,\"url\":\"/uploads/2b1781baa5a045cd83c9d1ff5f4882e4.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:51:16.924Z\",\"updated_at\":\"2020-03-18T05:51:16.924Z\"}},{\"id\":74,\"title\":\"B&O Play Mini Bluetooth Speaker\",\"is_featured\":false,\"is_hot\":false,\"price\":49.99,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":4,\"is_out_of_stock\":false,\"depot\":60,\"inventory\":70,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-18T06:40:57.514Z\",\"updated_at\":\"2020-03-18T06:40:57.514Z\",\"variants\":[],\"images\":[{\"id\":297,\"name\":\"75a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"69ba5505a5c847c5b7f31faaf08ffdea\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":48.55,\"url\":\"/uploads/69ba5505a5c847c5b7f31faaf08ffdea.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:40:57.561Z\",\"updated_at\":\"2020-03-18T06:40:57.561Z\"},{\"id\":298,\"name\":\"75b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"a67765518e384aa484234ef0cc3cdbff\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":32.75,\"url\":\"/uploads/a67765518e384aa484234ef0cc3cdbff.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:40:57.570Z\",\"updated_at\":\"2020-03-18T06:40:57.570Z\"},{\"id\":299,\"name\":\"75c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"2c4a27028a2d4d42914d81d28e1dbad3\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":9.32,\"url\":\"/uploads/2c4a27028a2d4d42914d81d28e1dbad3.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:40:57.580Z\",\"updated_at\":\"2020-03-18T06:40:57.580Z\"}],\"thumbnail\":{\"id\":296,\"name\":\"20.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"3c3189b62d2041418a0ef3c7a12c0c9a\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":5.4,\"url\":\"/uploads/3c3189b62d2041418a0ef3c7a12c0c9a.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:40:57.537Z\",\"updated_at\":\"2020-03-18T06:40:57.537Z\"}},{\"id\":75,\"title\":\"Beats Mini On Ear Bluetooth, Wireless Headphone\",\"is_featured\":false,\"is_hot\":false,\"price\":64.99,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":5,\"is_out_of_stock\":false,\"depot\":60,\"inventory\":70,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-18T06:42:47.008Z\",\"updated_at\":\"2020-03-18T06:42:47.008Z\",\"variants\":[],\"images\":[{\"id\":301,\"name\":\"76a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"fac9d42ab10e40679fa480bab1f25248\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":20.34,\"url\":\"/uploads/fac9d42ab10e40679fa480bab1f25248.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:42:47.047Z\",\"updated_at\":\"2020-03-18T06:42:47.047Z\"},{\"id\":302,\"name\":\"76b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"29c988a8fbf2411eb0acdd827c59a86a\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":10.41,\"url\":\"/uploads/29c988a8fbf2411eb0acdd827c59a86a.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:42:47.061Z\",\"updated_at\":\"2020-03-18T06:42:47.061Z\"},{\"id\":303,\"name\":\"76c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"3a50a259ac0f42cda5affdad8a6ac8b4\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":10.62,\"url\":\"/uploads/3a50a259ac0f42cda5affdad8a6ac8b4.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:42:47.072Z\",\"updated_at\":\"2020-03-18T06:42:47.072Z\"},{\"id\":304,\"name\":\"76d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"0375b08ca4be44f784ed68d9948fe9c2\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":3.65,\"url\":\"/uploads/0375b08ca4be44f784ed68d9948fe9c2.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:42:47.081Z\",\"updated_at\":\"2020-03-18T06:42:47.081Z\"}],\"thumbnail\":{\"id\":300,\"name\":\"21.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"1ed1fb833fc942209c3f289c7cf3bb82\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":2.83,\"url\":\"/uploads/1ed1fb833fc942209c3f289c7cf3bb82.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:42:47.032Z\",\"updated_at\":\"2020-03-18T06:42:47.032Z\"}},{\"id\":76,\"title\":\"Package 2 iClever Bootscube Mini Chargers\",\"is_featured\":false,\"is_hot\":false,\"price\":12.99,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":5,\"is_out_of_stock\":false,\"depot\":60,\"inventory\":70,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-18T06:44:45.187Z\",\"updated_at\":\"2020-03-18T06:44:45.187Z\",\"variants\":[],\"images\":[{\"id\":306,\"name\":\"77a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"5e451ad3b3ed45949e657e7e78fd5372\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":29.83,\"url\":\"/uploads/5e451ad3b3ed45949e657e7e78fd5372.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:44:45.233Z\",\"updated_at\":\"2020-03-18T06:44:45.233Z\"},{\"id\":307,\"name\":\"77b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"e5927c71f40d46a8a28eeb5533513bd0\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":18.88,\"url\":\"/uploads/e5927c71f40d46a8a28eeb5533513bd0.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:44:45.244Z\",\"updated_at\":\"2020-03-18T06:44:45.244Z\"},{\"id\":308,\"name\":\"77c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"500cb33c1b3c412493a8586bb39d007d\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":18.13,\"url\":\"/uploads/500cb33c1b3c412493a8586bb39d007d.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:44:45.255Z\",\"updated_at\":\"2020-03-18T06:44:45.255Z\"},{\"id\":309,\"name\":\"77d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"ee0cf9f8f9404293942532ef7a6b7488\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":57.23,\"url\":\"/uploads/ee0cf9f8f9404293942532ef7a6b7488.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:44:45.268Z\",\"updated_at\":\"2020-03-18T06:44:45.268Z\"}],\"thumbnail\":{\"id\":349,\"name\":\"77a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"51721dacef7c4809af85dde08203a286\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":29.83,\"url\":\"/uploads/51721dacef7c4809af85dde08203a286.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-28T12:15:03.365Z\",\"updated_at\":\"2020-03-28T12:15:03.365Z\"}}]},{\"id\":8,\"name\":\"Sport & Outdoor\",\"slug\":\"sport-and-outdoor\",\"description\":null,\"created_at\":\"2020-03-14T10:27:15.507Z\",\"updated_at\":\"2020-03-14T10:27:15.507Z\",\"products\":[{\"id\":32,\"title\":\"Anderson Composites – Custom Hood\",\"is_featured\":false,\"is_hot\":false,\"price\":1050.5,\"sale_price\":990.99,\"vendor\":\"ROBERT’S STORE\",\"review\":2,\"is_out_of_stock\":false,\"depot\":60,\"inventory\":70,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-15T09:17:42.168Z\",\"updated_at\":\"2020-03-18T12:47:03.124Z\",\"variants\":[],\"images\":[{\"id\":339,\"name\":\"1.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"0272916ed6ed43d0807c545280ee2f32\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":13.97,\"url\":\"/uploads/0272916ed6ed43d0807c545280ee2f32.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T12:47:03.173Z\",\"updated_at\":\"2020-03-18T12:47:03.173Z\"}],\"thumbnail\":{\"id\":338,\"name\":\"1.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"020a68b5cdfe455e88cdd01f7500ed92\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":13.97,\"url\":\"/uploads/020a68b5cdfe455e88cdd01f7500ed92.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T12:47:03.163Z\",\"updated_at\":\"2020-03-18T12:47:03.163Z\"}}]},{\"id\":9,\"name\":\"Babies & Moms\",\"slug\":\"babies-and-moms\",\"description\":null,\"created_at\":\"2020-03-14T10:27:29.618Z\",\"updated_at\":\"2020-03-14T10:27:29.618Z\",\"products\":[]},{\"id\":10,\"name\":\"Books & Office\",\"slug\":\"books-and-office\",\"description\":null,\"created_at\":\"2020-03-14T10:27:46.112Z\",\"updated_at\":\"2020-03-14T10:27:46.112Z\",\"products\":[{\"id\":6,\"title\":\"Grand Slam Indoor Of Show Jumping Novel\",\"is_featured\":false,\"is_hot\":false,\"price\":41.99,\"sale_price\":32.99,\"vendor\":\"Robert's Store\",\"review\":4,\"is_out_of_stock\":false,\"depot\":68,\"inventory\":90,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-15T06:04:35.781Z\",\"updated_at\":\"2020-04-14T10:46:09.145Z\",\"variants\":[],\"images\":[{\"id\":24,\"name\":\"6a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"5c7442b5104545afa78bfe819616d298\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":52.29,\"url\":\"/uploads/5c7442b5104545afa78bfe819616d298.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:07:56.574Z\",\"updated_at\":\"2020-03-15T06:07:56.574Z\"},{\"id\":25,\"name\":\"6a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"0a9100b8791b44ff9629377856bab05a\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":52.29,\"url\":\"/uploads/0a9100b8791b44ff9629377856bab05a.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:07:56.593Z\",\"updated_at\":\"2020-03-15T06:07:56.593Z\"}],\"thumbnail\":{\"id\":23,\"name\":\"5.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"e2132e11d3c34da89511593297697922\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":10.17,\"url\":\"/uploads/e2132e11d3c34da89511593297697922.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:07:56.562Z\",\"updated_at\":\"2020-03-15T06:07:56.562Z\"}}]},{\"id\":11,\"name\":\"Cars & Motocycles\",\"slug\":\"cars-and -motocycles\",\"description\":null,\"created_at\":\"2020-03-14T10:28:06.841Z\",\"updated_at\":\"2020-03-14T10:28:06.841Z\",\"products\":[{\"id\":33,\"title\":\"Evolution Sport Drilled and Slotted Brake Kit\",\"is_featured\":false,\"is_hot\":false,\"price\":50.5,\"sale_price\":45.99,\"vendor\":\"ROBERT’S STORE\",\"review\":4,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-15T09:21:27.133Z\",\"updated_at\":\"2020-03-15T09:21:27.133Z\",\"variants\":[],\"images\":[{\"id\":144,\"name\":\"2.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"7719665337f64edc831081e186aefef4\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":12.38,\"url\":\"/uploads/7719665337f64edc831081e186aefef4.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:21:27.184Z\",\"updated_at\":\"2020-03-15T09:21:27.184Z\"}],\"thumbnail\":{\"id\":143,\"name\":\"2.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"4d89105ae491400eba47e0c4ab805f4b\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":12.38,\"url\":\"/uploads/4d89105ae491400eba47e0c4ab805f4b.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:21:27.159Z\",\"updated_at\":\"2020-03-15T09:21:27.159Z\"}},{\"id\":34,\"title\":\"Depo Black Housing Tail Lights Frs Brz 86\",\"is_featured\":false,\"is_hot\":false,\"price\":120.5,\"sale_price\":100.99,\"vendor\":\"Young Shop\",\"review\":4,\"is_out_of_stock\":false,\"depot\":60,\"inventory\":70,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-15T09:34:41.156Z\",\"updated_at\":\"2020-03-18T12:57:42.304Z\",\"variants\":[],\"images\":[{\"id\":146,\"name\":\"3.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"74575909382f435ab65cd3ea2ab6e390\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":9.03,\"url\":\"/uploads/74575909382f435ab65cd3ea2ab6e390.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:34:41.193Z\",\"updated_at\":\"2020-03-15T09:34:41.193Z\"}],\"thumbnail\":{\"id\":145,\"name\":\"3.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"1dd340948bc0400289c6c03bc644e99e\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":9.03,\"url\":\"/uploads/1dd340948bc0400289c6c03bc644e99e.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:34:41.182Z\",\"updated_at\":\"2020-03-15T09:34:41.182Z\"}},{\"id\":35,\"title\":\"Anderson Composites – Custom Hood\",\"is_featured\":false,\"is_hot\":false,\"price\":442.99,\"sale_price\":null,\"vendor\":\"Go Pro\",\"review\":3,\"is_out_of_stock\":false,\"depot\":40,\"inventory\":50,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T09:37:17.903Z\",\"updated_at\":\"2020-03-15T09:37:17.903Z\",\"variants\":[],\"images\":[{\"id\":148,\"name\":\"36a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"12cfa605c95c48d080be5bfe66d6f091\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":51.22,\"url\":\"/uploads/12cfa605c95c48d080be5bfe66d6f091.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:37:17.942Z\",\"updated_at\":\"2020-03-15T09:37:17.942Z\"},{\"id\":149,\"name\":\"36b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"a999ffaca996462cbd4345b07c6b5571\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":52.83,\"url\":\"/uploads/a999ffaca996462cbd4345b07c6b5571.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:37:17.952Z\",\"updated_at\":\"2020-03-15T09:37:17.952Z\"},{\"id\":150,\"name\":\"36c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"abee37e1ac8b4b05ba620ee1329a5ef0\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":44.91,\"url\":\"/uploads/abee37e1ac8b4b05ba620ee1329a5ef0.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:37:17.961Z\",\"updated_at\":\"2020-03-15T09:37:17.961Z\"}],\"thumbnail\":{\"id\":147,\"name\":\"4.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"70a4149f0f15483b93737b522a0a9a44\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":8.13,\"url\":\"/uploads/70a4149f0f15483b93737b522a0a9a44.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:37:17.924Z\",\"updated_at\":\"2020-03-15T09:37:17.924Z\"}},{\"id\":36,\"title\":\"Simpson Polymer White Racing Helmet\",\"is_featured\":false,\"is_hot\":false,\"price\":770.5,\"sale_price\":625.99,\"vendor\":\"Go Pro\",\"review\":4,\"is_out_of_stock\":false,\"depot\":60,\"inventory\":70,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-15T09:39:12.533Z\",\"updated_at\":\"2020-03-15T09:39:12.533Z\",\"variants\":[],\"images\":[{\"id\":152,\"name\":\"5.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"54405f9aabac40328f3b54205697d2ba\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":7.4,\"url\":\"/uploads/54405f9aabac40328f3b54205697d2ba.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:39:12.574Z\",\"updated_at\":\"2020-03-15T09:39:12.574Z\"}],\"thumbnail\":{\"id\":151,\"name\":\"5.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"d3d6a340ec114211b670de5fb72955e8\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":7.4,\"url\":\"/uploads/d3d6a340ec114211b670de5fb72955e8.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:39:12.563Z\",\"updated_at\":\"2020-03-15T09:39:12.563Z\"}},{\"id\":37,\"title\":\"Gibson – Double Skull Exhaust System\",\"is_featured\":false,\"is_hot\":true,\"price\":1055.99,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":4,\"is_out_of_stock\":false,\"depot\":50,\"inventory\":60,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T09:40:52.204Z\",\"updated_at\":\"2020-03-15T09:40:52.204Z\",\"variants\":[],\"images\":[{\"id\":154,\"name\":\"38a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"6e511bd80804431aadd15aeb29172d2d\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":30.42,\"url\":\"/uploads/6e511bd80804431aadd15aeb29172d2d.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:40:52.241Z\",\"updated_at\":\"2020-03-15T09:40:52.241Z\"},{\"id\":155,\"name\":\"38b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"366848b6e7a343b5bc6dcc2f11672c8b\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":5.49,\"url\":\"/uploads/366848b6e7a343b5bc6dcc2f11672c8b.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:40:52.252Z\",\"updated_at\":\"2020-03-15T09:40:52.252Z\"},{\"id\":156,\"name\":\"38c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"452ecfaa1e3c40d8ad417efe80a297e8\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":19.58,\"url\":\"/uploads/452ecfaa1e3c40d8ad417efe80a297e8.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:40:52.263Z\",\"updated_at\":\"2020-03-15T09:40:52.263Z\"}],\"thumbnail\":{\"id\":153,\"name\":\"6.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"1ebf2224f4724391a3a75a5f4dce4599\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":4.45,\"url\":\"/uploads/1ebf2224f4724391a3a75a5f4dce4599.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:40:52.229Z\",\"updated_at\":\"2020-03-15T09:40:52.229Z\"}}]},{\"id\":12,\"name\":\"Fruits\",\"slug\":\"fruits\",\"description\":null,\"created_at\":\"2020-03-18T06:46:56.197Z\",\"updated_at\":\"2020-04-17T07:04:19.973Z\",\"products\":[{\"id\":77,\"title\":\"Locally Grown Strawberries, 1 Pint\",\"is_featured\":false,\"is_hot\":false,\"price\":26.95,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":3,\"is_out_of_stock\":false,\"depot\":50,\"inventory\":60,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-18T06:46:38.548Z\",\"updated_at\":\"2020-03-18T06:46:38.548Z\",\"variants\":[],\"images\":[{\"id\":311,\"name\":\"78a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"48efb67ec1c743a39e370b43bbbd7c4f\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":583.8,\"url\":\"/uploads/48efb67ec1c743a39e370b43bbbd7c4f.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:46:38.593Z\",\"updated_at\":\"2020-03-18T06:46:38.593Z\"},{\"id\":312,\"name\":\"78b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"39a87fcc433e4e8f95ef6a4f22926482\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":34.87,\"url\":\"/uploads/39a87fcc433e4e8f95ef6a4f22926482.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:46:38.602Z\",\"updated_at\":\"2020-03-18T06:46:38.602Z\"}],\"thumbnail\":{\"id\":310,\"name\":\"78a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"83d058602dee4b2d99ccef21300f8f35\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":583.8,\"url\":\"/uploads/83d058602dee4b2d99ccef21300f8f35.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:46:38.580Z\",\"updated_at\":\"2020-03-18T06:46:38.580Z\"}},{\"id\":78,\"title\":\"Organic Oranges Valencia 1kg\",\"is_featured\":false,\"is_hot\":false,\"price\":25.99,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":5,\"is_out_of_stock\":false,\"depot\":50,\"inventory\":60,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-18T06:49:57.368Z\",\"updated_at\":\"2020-03-18T06:49:57.368Z\",\"variants\":[],\"images\":[{\"id\":314,\"name\":\"79a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"8dc27d339178495793f41446e7e2f5be\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":305.41,\"url\":\"/uploads/8dc27d339178495793f41446e7e2f5be.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:49:57.403Z\",\"updated_at\":\"2020-03-18T06:49:57.403Z\"}],\"thumbnail\":{\"id\":313,\"name\":\"79a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"bbd8f6aa2a2849f3ba80d5c6f9337b51\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":305.41,\"url\":\"/uploads/bbd8f6aa2a2849f3ba80d5c6f9337b51.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:49:57.391Z\",\"updated_at\":\"2020-03-18T06:49:57.391Z\"}},{\"id\":79,\"title\":\"Pineapple (Tropical Gold)\",\"is_featured\":false,\"is_hot\":false,\"price\":2.89,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":4,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-18T06:51:19.973Z\",\"updated_at\":\"2020-03-18T06:51:19.973Z\",\"variants\":[],\"images\":[{\"id\":316,\"name\":\"80a.jpeg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"baef1533117e4781890e15d0271a417a\",\"ext\":\".jpeg\",\"mime\":\"image/jpeg\",\"size\":237.83,\"url\":\"/uploads/baef1533117e4781890e15d0271a417a.jpeg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:51:20.007Z\",\"updated_at\":\"2020-03-18T06:51:20.007Z\"},{\"id\":317,\"name\":\"80b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"4acf953a04e04faf8a487c723d202eef\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":28.27,\"url\":\"/uploads/4acf953a04e04faf8a487c723d202eef.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:51:20.023Z\",\"updated_at\":\"2020-03-18T06:51:20.023Z\"},{\"id\":318,\"name\":\"80c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"b62251ec55be493d987a32806f709d2d\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":41.26,\"url\":\"/uploads/b62251ec55be493d987a32806f709d2d.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:51:20.033Z\",\"updated_at\":\"2020-03-18T06:51:20.033Z\"},{\"id\":319,\"name\":\"80d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"e14ba895134e4f008f9cd5ed0df5a471\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":27.29,\"url\":\"/uploads/e14ba895134e4f008f9cd5ed0df5a471.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:51:20.042Z\",\"updated_at\":\"2020-03-18T06:51:20.042Z\"}],\"thumbnail\":{\"id\":315,\"name\":\"80a.jpeg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"72a1764a51f0415e8d7e8be260848e95\",\"ext\":\".jpeg\",\"mime\":\"image/jpeg\",\"size\":237.83,\"url\":\"/uploads/72a1764a51f0415e8d7e8be260848e95.jpeg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:51:19.995Z\",\"updated_at\":\"2020-03-18T06:51:19.995Z\"}},{\"id\":81,\"title\":\"MariGold 100% Juice Milk 350ml\",\"is_featured\":false,\"is_hot\":false,\"price\":3.95,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":4,\"is_out_of_stock\":false,\"depot\":60,\"inventory\":70,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-18T06:56:10.273Z\",\"updated_at\":\"2020-03-18T06:56:10.273Z\",\"variants\":[],\"images\":[{\"id\":323,\"name\":\"82a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"9e488f0e25cf4501a4fe04838e708be9\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":98.07,\"url\":\"/uploads/9e488f0e25cf4501a4fe04838e708be9.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:56:10.314Z\",\"updated_at\":\"2020-03-18T06:56:10.314Z\"}],\"thumbnail\":{\"id\":322,\"name\":\"82a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"e10a8eeffbaa4bfab8898cb9342bb270\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":98.07,\"url\":\"/uploads/e10a8eeffbaa4bfab8898cb9342bb270.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:56:10.292Z\",\"updated_at\":\"2020-03-18T06:56:10.292Z\"}},{\"id\":82,\"title\":\"HomeSoy Soya Milk Originall\",\"is_featured\":false,\"is_hot\":false,\"price\":9.85,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":4,\"is_out_of_stock\":false,\"depot\":60,\"inventory\":70,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-18T06:57:16.979Z\",\"updated_at\":\"2020-03-18T06:57:16.979Z\",\"variants\":[],\"images\":[{\"id\":325,\"name\":\"83a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"f4fbe84e5b264982af03f806e044a621\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":107.59,\"url\":\"/uploads/f4fbe84e5b264982af03f806e044a621.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:57:17.011Z\",\"updated_at\":\"2020-03-18T06:57:17.011Z\"}],\"thumbnail\":{\"id\":324,\"name\":\"83a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"019276ce1e444623833b0c1808da707c\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":107.59,\"url\":\"/uploads/019276ce1e444623833b0c1808da707c.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:57:17.002Z\",\"updated_at\":\"2020-03-18T06:57:17.002Z\"}},{\"id\":83,\"title\":\"Australia Banana 16 Pack 2.5 kg\",\"is_featured\":false,\"is_hot\":false,\"price\":12.85,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":3,\"is_out_of_stock\":false,\"depot\":60,\"inventory\":70,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-18T06:58:34.168Z\",\"updated_at\":\"2020-03-18T06:58:34.168Z\",\"variants\":[],\"images\":[{\"id\":327,\"name\":\"84a.jpeg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"ffd65dab221a4146b8ddeb0bbf908573\",\"ext\":\".jpeg\",\"mime\":\"image/jpeg\",\"size\":117.79,\"url\":\"/uploads/ffd65dab221a4146b8ddeb0bbf908573.jpeg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:58:34.301Z\",\"updated_at\":\"2020-03-18T06:58:34.301Z\"}],\"thumbnail\":{\"id\":326,\"name\":\"84a.jpeg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"3ea5019caa45409f8a9a770a02181fe2\",\"ext\":\".jpeg\",\"mime\":\"image/jpeg\",\"size\":117.79,\"url\":\"/uploads/3ea5019caa45409f8a9a770a02181fe2.jpeg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:58:34.289Z\",\"updated_at\":\"2020-03-18T06:58:34.289Z\"}},{\"id\":84,\"title\":\"Augason Farms Freeze Dried Beef Chunks\",\"is_featured\":false,\"is_hot\":false,\"price\":67.85,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":5,\"is_out_of_stock\":false,\"depot\":60,\"inventory\":70,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-18T06:59:49.553Z\",\"updated_at\":\"2020-03-18T06:59:49.553Z\",\"variants\":[],\"images\":[{\"id\":329,\"name\":\"85a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"0e603357f01e40b3a3cd871a70ebe142\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":527.02,\"url\":\"/uploads/0e603357f01e40b3a3cd871a70ebe142.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:59:49.615Z\",\"updated_at\":\"2020-03-18T06:59:49.615Z\"},{\"id\":330,\"name\":\"85b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"3c5cf1a734e4463a8332a0a0d908a0fe\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":43.85,\"url\":\"/uploads/3c5cf1a734e4463a8332a0a0d908a0fe.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:59:49.628Z\",\"updated_at\":\"2020-03-18T06:59:49.628Z\"},{\"id\":331,\"name\":\"85c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"130a06e89e18489f997f89adb45df47c\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":61.59,\"url\":\"/uploads/130a06e89e18489f997f89adb45df47c.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:59:49.638Z\",\"updated_at\":\"2020-03-18T06:59:49.638Z\"},{\"id\":332,\"name\":\"85d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"956b710c05964593a93ea91052b7f7fe\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":63.88,\"url\":\"/uploads/956b710c05964593a93ea91052b7f7fe.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:59:49.657Z\",\"updated_at\":\"2020-03-18T06:59:49.657Z\"}],\"thumbnail\":{\"id\":328,\"name\":\"85a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"c57b47015b9a4c37a67b614f16202829\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":527.02,\"url\":\"/uploads/c57b47015b9a4c37a67b614f16202829.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:59:49.590Z\",\"updated_at\":\"2020-03-18T06:59:49.590Z\"}},{\"id\":85,\"title\":\"Vita Coco Coconut Water (Pack of 12)\",\"is_featured\":false,\"is_hot\":false,\"price\":25.89,\"sale_price\":20.08,\"vendor\":\"Global Office\",\"review\":5,\"is_out_of_stock\":false,\"depot\":60,\"inventory\":70,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-18T07:01:10.046Z\",\"updated_at\":\"2020-03-18T07:01:10.046Z\",\"variants\":[],\"images\":[{\"id\":334,\"name\":\"86a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"3ca8ef0cc54d46ff87594b803cef3c43\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":227.87,\"url\":\"/uploads/3ca8ef0cc54d46ff87594b803cef3c43.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T07:01:10.085Z\",\"updated_at\":\"2020-03-18T07:01:10.085Z\"},{\"id\":335,\"name\":\"86b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"6ed164482d6a4693a4e88c2c4ba3aead\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":23.17,\"url\":\"/uploads/6ed164482d6a4693a4e88c2c4ba3aead.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T07:01:10.100Z\",\"updated_at\":\"2020-03-18T07:01:10.100Z\"},{\"id\":336,\"name\":\"86c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"9ca1dd76fe0f43d0aecf9fb2ca719c57\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":51.46,\"url\":\"/uploads/9ca1dd76fe0f43d0aecf9fb2ca719c57.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T07:01:10.109Z\",\"updated_at\":\"2020-03-18T07:01:10.109Z\"},{\"id\":337,\"name\":\"86d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"c56f54eb5103427680789de497ac94cb\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":12.31,\"url\":\"/uploads/c56f54eb5103427680789de497ac94cb.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T07:01:10.117Z\",\"updated_at\":\"2020-03-18T07:01:10.117Z\"}],\"thumbnail\":{\"id\":333,\"name\":\"86a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"39694a8b81124468a5de5e399483bf9e\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":227.87,\"url\":\"/uploads/39694a8b81124468a5de5e399483bf9e.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T07:01:10.073Z\",\"updated_at\":\"2020-03-18T07:01:10.073Z\"}},{\"id\":86,\"title\":\"Vita Coco Coconut Water (Pack of 24)\",\"is_featured\":false,\"is_hot\":false,\"price\":19.22,\"sale_price\":21.99,\"vendor\":\"Young Shop\",\"review\":2,\"is_out_of_stock\":false,\"depot\":100,\"inventory\":200,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-04-18T08:42:13.577Z\",\"updated_at\":\"2020-04-18T08:42:13.577Z\",\"variants\":[],\"images\":[{\"id\":350,\"name\":\"86b\",\"alternativeText\":null,\"caption\":null,\"width\":600,\"height\":600,\"formats\":{\"thumbnail\":{\"hash\":\"thumbnail_86b_81b868f333\",\"ext\":\".jpeg\",\"mime\":\"image/jpeg\",\"width\":156,\"height\":156,\"size\":2.53,\"url\":\"/uploads/thumbnail_86b_81b868f333.jpeg\"},\"small\":{\"hash\":\"small_86b_81b868f333\",\"ext\":\".jpeg\",\"mime\":\"image/jpeg\",\"width\":500,\"height\":500,\"size\":15.08,\"url\":\"/uploads/small_86b_81b868f333.jpeg\"}},\"hash\":\"86b_81b868f333\",\"ext\":\".jpeg\",\"mime\":\"image/jpeg\",\"size\":20.45,\"url\":\"/uploads/86b_81b868f333.jpeg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-04-18T08:42:13.694Z\",\"updated_at\":\"2020-04-18T08:42:13.694Z\"},{\"id\":351,\"name\":\"86a\",\"alternativeText\":null,\"caption\":null,\"width\":800,\"height\":800,\"formats\":{\"thumbnail\":{\"hash\":\"thumbnail_86a_b29949194b\",\"ext\":\".jpeg\",\"mime\":\"image/jpeg\",\"width\":156,\"height\":156,\"size\":3.61,\"url\":\"/uploads/thumbnail_86a_b29949194b.jpeg\"},\"medium\":{\"hash\":\"medium_86a_b29949194b\",\"ext\":\".jpeg\",\"mime\":\"image/jpeg\",\"width\":750,\"height\":750,\"size\":45.53,\"url\":\"/uploads/medium_86a_b29949194b.jpeg\"},\"small\":{\"hash\":\"small_86a_b29949194b\",\"ext\":\".jpeg\",\"mime\":\"image/jpeg\",\"width\":500,\"height\":500,\"size\":24.04,\"url\":\"/uploads/small_86a_b29949194b.jpeg\"}},\"hash\":\"86a_b29949194b\",\"ext\":\".jpeg\",\"mime\":\"image/jpeg\",\"size\":52.58,\"url\":\"/uploads/86a_b29949194b.jpeg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-04-18T08:42:13.713Z\",\"updated_at\":\"2020-04-18T08:42:13.713Z\"},{\"id\":352,\"name\":\"86c\",\"alternativeText\":null,\"caption\":null,\"width\":600,\"height\":600,\"formats\":{\"thumbnail\":{\"hash\":\"thumbnail_86c_fc3738188f\",\"ext\":\".jpeg\",\"mime\":\"image/jpeg\",\"width\":156,\"height\":156,\"size\":4.3,\"url\":\"/uploads/thumbnail_86c_fc3738188f.jpeg\"},\"small\":{\"hash\":\"small_86c_fc3738188f\",\"ext\":\".jpeg\",\"mime\":\"image/jpeg\",\"width\":500,\"height\":500,\"size\":34.07,\"url\":\"/uploads/small_86c_fc3738188f.jpeg\"}},\"hash\":\"86c_fc3738188f\",\"ext\":\".jpeg\",\"mime\":\"image/jpeg\",\"size\":46.83,\"url\":\"/uploads/86c_fc3738188f.jpeg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-04-18T08:42:13.725Z\",\"updated_at\":\"2020-04-18T08:42:13.725Z\"}],\"thumbnail\":{\"id\":353,\"name\":\"86a\",\"alternativeText\":null,\"caption\":null,\"width\":800,\"height\":800,\"formats\":{\"thumbnail\":{\"hash\":\"thumbnail_86a_8cb6df1843\",\"ext\":\".jpeg\",\"mime\":\"image/jpeg\",\"width\":156,\"height\":156,\"size\":3.61,\"url\":\"/uploads/thumbnail_86a_8cb6df1843.jpeg\"},\"medium\":{\"hash\":\"medium_86a_8cb6df1843\",\"ext\":\".jpeg\",\"mime\":\"image/jpeg\",\"width\":750,\"height\":750,\"size\":45.53,\"url\":\"/uploads/medium_86a_8cb6df1843.jpeg\"},\"small\":{\"hash\":\"small_86a_8cb6df1843\",\"ext\":\".jpeg\",\"mime\":\"image/jpeg\",\"width\":500,\"height\":500,\"size\":24.04,\"url\":\"/uploads/small_86a_8cb6df1843.jpeg\"}},\"hash\":\"86a_8cb6df1843\",\"ext\":\".jpeg\",\"mime\":\"image/jpeg\",\"size\":52.58,\"url\":\"/uploads/86a_8cb6df1843.jpeg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-04-18T08:42:13.735Z\",\"updated_at\":\"2020-04-18T08:42:13.735Z\"}}]},{\"id\":13,\"name\":\"Meat\",\"slug\":\"meat\",\"description\":null,\"created_at\":\"2020-03-18T06:54:20.047Z\",\"updated_at\":\"2020-04-12T06:44:14.588Z\",\"products\":[{\"id\":80,\"title\":\"Tesco Eat Fresh Frozen Lamb Bone in Cube\",\"is_featured\":false,\"is_hot\":false,\"price\":21.89,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":4,\"is_out_of_stock\":false,\"depot\":60,\"inventory\":70,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-18T06:54:02.670Z\",\"updated_at\":\"2020-03-18T06:54:02.670Z\",\"variants\":[],\"images\":[{\"id\":321,\"name\":\"81a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"d8e508fc912641f58f58138b16e792ce\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":109.76,\"url\":\"/uploads/d8e508fc912641f58f58138b16e792ce.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:54:02.708Z\",\"updated_at\":\"2020-03-18T06:54:02.708Z\"}],\"thumbnail\":{\"id\":320,\"name\":\"81a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"9f48e963891b43329a100e704a4ae84c\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":109.76,\"url\":\"/uploads/9f48e963891b43329a100e704a4ae84c.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:54:02.693Z\",\"updated_at\":\"2020-03-18T06:54:02.693Z\"}}]},{\"id\":14,\"name\":\"Book\",\"slug\":\"book\",\"description\":null,\"created_at\":\"2020-03-28T10:59:05.002Z\",\"updated_at\":\"2020-03-28T10:59:05.002Z\",\"products\":[{\"id\":6,\"title\":\"Grand Slam Indoor Of Show Jumping Novel\",\"is_featured\":false,\"is_hot\":false,\"price\":41.99,\"sale_price\":32.99,\"vendor\":\"Robert's Store\",\"review\":4,\"is_out_of_stock\":false,\"depot\":68,\"inventory\":90,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-15T06:04:35.781Z\",\"updated_at\":\"2020-04-14T10:46:09.145Z\",\"variants\":[],\"images\":[{\"id\":24,\"name\":\"6a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"5c7442b5104545afa78bfe819616d298\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":52.29,\"url\":\"/uploads/5c7442b5104545afa78bfe819616d298.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:07:56.574Z\",\"updated_at\":\"2020-03-15T06:07:56.574Z\"},{\"id\":25,\"name\":\"6a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"0a9100b8791b44ff9629377856bab05a\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":52.29,\"url\":\"/uploads/0a9100b8791b44ff9629377856bab05a.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:07:56.593Z\",\"updated_at\":\"2020-03-15T06:07:56.593Z\"}],\"thumbnail\":{\"id\":23,\"name\":\"5.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"e2132e11d3c34da89511593297697922\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":10.17,\"url\":\"/uploads/e2132e11d3c34da89511593297697922.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:07:56.562Z\",\"updated_at\":\"2020-03-15T06:07:56.562Z\"}}]}]");

/***/ }),

/***/ "fDE7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);





const SkeletonProduct = () => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: "ps-skeleton ps-skeleton--product",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Skeleton"].Input, {
      active: true,
      size: 350,
      style: {
        height: 160
      }
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Skeleton"], {
      paragraph: {
        rows: 4,
        title: true
      }
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (SkeletonProduct);

/***/ }),

/***/ "fY7M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _MiniCart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("vcs+");
/* harmony import */ var _AccountQuickLinks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("MJbt");








class ElectronicHeaderActions extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      wishlist,
      auth
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "header__actions",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/account/wishlist",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("a", {
          className: "header__extra",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
            className: "icon-heart"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
              children: wishlist.wishlistTotal
            })
          })]
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_MiniCart__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {}), auth.isLoggedIn && Boolean(auth.isLoggedIn) === true ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_AccountQuickLinks__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
        isLoggedIn: true
      }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_AccountQuickLinks__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
        isLoggedIn: false
      })]
    });
  }

}

const mapStateToProps = state => {
  return state;
};

/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(ElectronicHeaderActions));

/***/ }),

/***/ "fcRV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "h18c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./components/shared/headers/HeaderDefault.jsx
var HeaderDefault = __webpack_require__("Tt/Y");

// EXTERNAL MODULE: ./components/shared/headers/HeaderMobile.jsx
var HeaderMobile = __webpack_require__("yUax");

// EXTERNAL MODULE: ./components/shared/navigation/NavigationList.jsx + 4 modules
var NavigationList = __webpack_require__("spCc");

// EXTERNAL MODULE: ./components/shared/footers/FooterDefault.jsx
var FooterDefault = __webpack_require__("/y5a");

// EXTERNAL MODULE: ./components/partials/commons/Newletters.jsx
var Newletters = __webpack_require__("JNwe");

// CONCATENATED MODULE: ./components/partials/homepage/marketplace/MarketPlacePromotionHeader.jsx




const MarketPlacePromotionHeader = () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
  className: "ps-block--promotion-header bg--cover",
  style: {
    backgroundImage: `url(/static/img/promotions/header-promotion.jpg)`
  },
  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "container",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "ps-block__left",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
        children: "20%"
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("figure", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          children: "Discount"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
          children: "For Books Of March"
        })]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "ps-block__center",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
        children: ["Enter Promotion", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          children: "Sale2019"
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
      className: "ps-btn ps-btn--sm",
      href: "#",
      children: "Shop now"
    })]
  })
});

/* harmony default export */ var marketplace_MarketPlacePromotionHeader = (MarketPlacePromotionHeader);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./public/static/data/menu.json
var menu = __webpack_require__("y2E8");

// EXTERNAL MODULE: ./components/shared/headers/modules/CurrencyDropdown.jsx
var CurrencyDropdown = __webpack_require__("s/7F");

// EXTERNAL MODULE: ./components/shared/headers/modules/LanguageSwicher.jsx
var LanguageSwicher = __webpack_require__("CLZ7");

// EXTERNAL MODULE: ./components/shared/headers/modules/SearchHeader.jsx
var SearchHeader = __webpack_require__("coPK");

// EXTERNAL MODULE: ./components/shared/headers/modules/ElectronicHeaderActions.jsx
var ElectronicHeaderActions = __webpack_require__("fY7M");

// EXTERNAL MODULE: ./components/elements/menu/Menu.jsx + 2 modules
var Menu = __webpack_require__("w957");

// EXTERNAL MODULE: ./utilities/common-helpers.js
var common_helpers = __webpack_require__("4lSd");

// CONCATENATED MODULE: ./components/shared/headers/HeaderMarketPlace.jsx












const HeaderMarketPlace = () => {
  Object(external_react_["useEffect"])(() => {
    if (false) {}
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("header", {
    className: "header header--standard header--market-place-1",
    id: "headerSticky",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "header__top",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "container",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "header__left",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            children: "Welcome to Martfury Online Shopping Store !"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "header__right",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
            className: "header__top-links",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "/vendor/store-list",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  children: "Store Location"
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "/page/blank",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  children: "Track Your Order"
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(CurrencyDropdown["a" /* default */], {})
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(LanguageSwicher["a" /* default */], {})
            })]
          })
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "header__content",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "container",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "header__content-left",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/home/market-place",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              className: "ps-logo",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                src: "/static/img/logo.png",
                alt: "martfury"
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "menu--product-categories",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "menu__toggle",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                className: "icon-menu"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                children: " Shop by Department"
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "menu__content",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Menu["a" /* default */], {
                source: menu.product_categories,
                className: "menu--dropdown"
              })
            })]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "header__content-center",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(SearchHeader["a" /* default */], {})
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "header__content-right",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ElectronicHeaderActions["a" /* default */], {})
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("nav", {
      className: "navigation",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "container",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "navigation__left",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "menu--product-categories",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "menu__toggle",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                className: "icon-menu"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                children: " Shop by Department"
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "menu__content",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Menu["a" /* default */], {
                source: menu.product_categories,
                className: "menu--dropdown"
              })
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "navigation__right",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Menu["a" /* default */], {
            source: menu.menuPrimary.menu_1,
            className: "menu"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "ps-block--header-hotline inline",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                className: "icon-telephone"
              }), "Hotline:", /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
                children: " 1-800-234-5678"
              })]
            })
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ var headers_HeaderMarketPlace = (HeaderMarketPlace);
// CONCATENATED MODULE: ./components/layouts/ContainerMarketPlace.jsx












const ContainerMarketPlace = ({
  children,
  title
}) => {
  let titleView;

  if (title !== null) {
    titleView = "Martfury" + ' | ' + title;
  } else {
    titleView = "Martfury" + ' | ' + "Multipurpose Marketplace React Ecommerce Template";
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "martfury",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(head_default.a, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: titleView
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(marketplace_MarketPlacePromotionHeader, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(headers_HeaderMarketPlace, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(HeaderMobile["a" /* default */], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(NavigationList["a" /* default */], {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("main", {
      id: "homepage-3",
      children: [children, /*#__PURE__*/Object(jsx_runtime_["jsx"])(Newletters["a" /* default */], {})]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(FooterDefault["a" /* default */], {})]
  });
};

/* harmony default export */ var layouts_ContainerMarketPlace = (ContainerMarketPlace);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__("O/hg");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);

// EXTERNAL MODULE: ./components/elements/carousel/NextArrow.jsx
var NextArrow = __webpack_require__("s5ri");

// EXTERNAL MODULE: ./components/elements/carousel/PrevArrow.jsx
var PrevArrow = __webpack_require__("3o9y");

// CONCATENATED MODULE: ./components/partials/homepage/marketplace/MartketPlaceHomeBanner.jsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const MarketPlaceHomeBanner = () => {
  const carouselSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: /*#__PURE__*/Object(jsx_runtime_["jsx"])(NextArrow["a" /* default */], {}),
    prevArrow: /*#__PURE__*/Object(jsx_runtime_["jsx"])(PrevArrow["a" /* default */], {})
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("section", {
    className: "ps-home-banner",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_slick_default.a, _objectSpread(_objectSpread({}, carouselSettings), {}, {
      className: "ps-carousel",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "ps-banner--market-1",
        style: {
          backgroundImage: `url(/static/img/slider/home-3/home-banner/1.jpg)`
        },
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: "/static/img/slider/home-3/home-banner/1.jpg",
          alt: "martfury"
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "ps-banner__content",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h5", {
            children: "Mega Sale Nov 2019"
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h3", {
            children: ["Double Combo With ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), " The Body Shop"]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
            children: ["Sale up to ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
              children: "50% Off "
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            className: "ps-btn",
            href: "#",
            children: "Shop Now"
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "ps-banner--market-1",
        style: {
          backgroundImage: `url(/static/img/slider/home-3/home-banner/2.jpg)`
        },
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: "/static/img/slider/home-3/home-banner/2.jpg",
          alt: "martfury"
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "ps-banner__content",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h5", {
            children: "Mega Sale Nov 2017"
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h3", {
            children: ["IKEA Minimalist ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), " Otoman"]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
            children: ["Discount ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
              children: "50% Off "
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            className: "ps-btn",
            href: "#",
            children: "Shop Now"
          })]
        })]
      })]
    }))
  });
};

/* harmony default export */ var MartketPlaceHomeBanner = (MarketPlaceHomeBanner);
// CONCATENATED MODULE: ./components/partials/homepage/marketplace/MarketPlaceSiteFeatures.jsx




const MarketPlaceSiteFeatures = () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
  className: "ps-site-features",
  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: "container",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "ps-block--site-features ps-block--site-features-2",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "ps-block__item",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "ps-block__left",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
            className: "icon-rocket"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "ps-block__right",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
            children: "Free Delivery"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            children: "For all oders over $99"
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "ps-block__item",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "ps-block__left",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
            className: "icon-sync"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "ps-block__right",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
            children: "90 Days Return"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            children: "If goods have problems"
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "ps-block__item",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "ps-block__left",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
            className: "icon-credit-card"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "ps-block__right",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
            children: "Secure Payment"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            children: "100% secure payment"
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "ps-block__item",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "ps-block__left",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
            className: "icon-bubbles"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "ps-block__right",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
            children: "24/7 Support"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            children: "Dedicated support"
          })]
        })]
      })]
    })
  })
});

/* harmony default export */ var marketplace_MarketPlaceSiteFeatures = (MarketPlaceSiteFeatures);
// CONCATENATED MODULE: ./components/partials/homepage/marketplace/MarketPlacePromotions.jsx




const MarketPlacePromotion = () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
  className: "ps-promotions",
  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: "container",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "row",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 ",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          className: "ps-collection",
          href: "#",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "/static/img/promotions/home-3-1.jpg",
            alt: "martfury"
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 ",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          className: "ps-collection",
          href: "#",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "/static/img/promotions/home-3-2.jpg",
            alt: "martfury"
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 ",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          className: "ps-collection",
          href: "#",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "/static/img/promotions/home-3-3.jpg",
            alt: "martfury"
          })
        })
      })]
    })
  })
});

/* harmony default export */ var MarketPlacePromotions = (MarketPlacePromotion);
// EXTERNAL MODULE: ./components/partials/homepage/marketplace/MarketPlaceDealOfDay.jsx
var MarketPlaceDealOfDay = __webpack_require__("dO4C");

// EXTERNAL MODULE: ./utilities/strapi-fetch-data-helpers.jsx
var strapi_fetch_data_helpers = __webpack_require__("URQM");

// EXTERNAL MODULE: ./utilities/product-helper.js
var product_helper = __webpack_require__("OqP1");

// EXTERNAL MODULE: ./components/elements/products/modules/ModuleProductActions.js
var ModuleProductActions = __webpack_require__("bd/c");

// EXTERNAL MODULE: ./components/elements/Rating.jsx
var Rating = __webpack_require__("iAvk");

// CONCATENATED MODULE: ./components/elements/products/ProductSimple.jsx








const ProductSimple = ({
  product
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "ps-product ps-product--simple",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "ps-product__thumbnail",
      children: [Object(product_helper["d" /* StrapiProductThumbnail */])(product), Object(product_helper["a" /* StrapiProductBadge */])(product), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ModuleProductActions["a" /* default */], {})]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "ps-product__container",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "ps-product__content",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/product/[pid]",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            className: "ps-product__title",
            children: product.title
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "ps-product__rating",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Rating["a" /* default */], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            children: product.ratingCount
          })]
        }), Object(product_helper["b" /* StrapiProductPrice */])(product)]
      })
    })]
  });
};

/* harmony default export */ var products_ProductSimple = (ProductSimple);
// EXTERNAL MODULE: ./utilities/carousel-helpers.js
var carousel_helpers = __webpack_require__("8tnw");

// CONCATENATED MODULE: ./components/partials/homepage/marketplace/modules/MarketClothingsAndApparel.jsx



function MarketClothingsAndApparel_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function MarketClothingsAndApparel_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { MarketClothingsAndApparel_ownKeys(Object(source), true).forEach(function (key) { MarketClothingsAndApparel_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { MarketClothingsAndApparel_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function MarketClothingsAndApparel_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const MarketClothingsAndApparel = ({
  collectionSlug
}) => {
  const {
    0: productItems,
    1: setProductItems
  } = Object(external_react_["useState"])(null);
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(true);

  async function getProducts() {
    setLoading(true);
    const responseData = await Object(strapi_fetch_data_helpers["b" /* getProductsByCollectionHelper */])(collectionSlug);

    if (responseData) {
      setProductItems(responseData.items);
      setTimeout(function () {
        setLoading(false);
      }.bind(this), 250);
    }
  }

  Object(external_react_["useEffect"])(() => {
    getProducts();
  }, []); // Views

  let productItemsView;

  if (!loading) {
    if (productItems && productItems.length > 0) {
      productItemsView = productItems.map((item, index) => {
        if (index < 6) {
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(products_ProductSimple, {
            product: item
          }, item.id);
        }
      });
    } else {
      productItemsView = /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        children: "No product found."
      });
    }
  } else {
    productItemsView = productItemsView = /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      children: "Loading..."
    });
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "ps-block--products-of-category",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "ps-block__categories",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("h3", {
        children: ["Clothing & ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), " Apparel"]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/shop",
            as: "/shop/best-seller",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: "Best Seller"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/shop",
            as: "/shop/new-arrivals",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: "New Arrivals"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/shop",
            as: "/shop/women",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: "Women"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/shop",
            as: "/shop/men",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: "Men"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/shop",
            as: "/shop/girls",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: "Girls"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/shop",
            as: "/shop/boys",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: "Boys"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/shop",
            as: "/shop/baby",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: "Baby"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/shop",
            as: "/shop/sale-and-deal",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: "Sales & Deals"
            })
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/shop",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          className: "ps-block__more-link",
          children: "View All"
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "ps-block__slider",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_slick_default.a, MarketClothingsAndApparel_objectSpread(MarketClothingsAndApparel_objectSpread({}, carousel_helpers["b" /* carouselSingle */]), {}, {
        className: "ps-carousel",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "/static/img/slider/home-3/clothing-1.jpg",
            alt: "martfury"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "/static/img/slider/home-3/clothing-2.jpg",
            alt: "martfury"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "/static/img/slider/home-3/clothing-3.jpg",
            alt: "martfury"
          })
        })]
      }))
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "ps-block__product-box",
      children: productItemsView
    })]
  });
};

/* harmony default export */ var modules_MarketClothingsAndApparel = (MarketClothingsAndApparel);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// CONCATENATED MODULE: ./components/partials/homepage/marketplace/modules/MarketConsumerElectronics.jsx



function MarketConsumerElectronics_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function MarketConsumerElectronics_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { MarketConsumerElectronics_ownKeys(Object(source), true).forEach(function (key) { MarketConsumerElectronics_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { MarketConsumerElectronics_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function MarketConsumerElectronics_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const MarketConsumerElectronics = ({
  collectionSlug
}) => {
  const {
    0: productItems,
    1: setProductItems
  } = Object(external_react_["useState"])(null);
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(true);

  async function getProducts() {
    setLoading(true);
    const responseData = await Object(strapi_fetch_data_helpers["b" /* getProductsByCollectionHelper */])(collectionSlug);

    if (responseData) {
      setProductItems(responseData.items);
      setTimeout(function () {
        setLoading(false);
      }.bind(this), 250);
    }
  }

  Object(external_react_["useEffect"])(() => {
    getProducts();
  }, []); // Views

  let productItemsView;

  if (!loading) {
    if (productItems && productItems.length > 0) {
      productItemsView = productItems.map((item, index) => {
        if (index < 6) {
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(products_ProductSimple, {
            product: item
          }, item.id);
        }
      });
    } else {
      productItemsView = /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        children: "No product found."
      });
    }
  } else {
    productItemsView = /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      children: "Loading..."
    });
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "ps-block--products-of-category",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "ps-block__categories",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
        children: "Consumer Electronics"
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/shop",
            as: "/shop/best-seller",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: "Best Seller"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/shop",
            as: "/shop/new-arrivals",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: "New Arrivals"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/shop",
            as: "/shop/tv-television",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: "TV Television"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/shop",
            as: "/shop/air-conditions",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: "Air Condition"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/shop",
            as: "/shop/washing-machine",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: "Washing Machine"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/shop",
            as: "/shop/microware",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: "Microwave"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/shop",
            as: "/shop/refrigerator",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: "Refrigerator"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/shop",
            as: "/shop/office-electronic",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: "Office Electronic"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/shop",
            as: "/shop/car-electronic",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: "Car Electronic"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/shop",
            as: "/shop/sale-and-deal",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: "Sales & Deals"
            })
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/shop",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          className: "ps-block__more-link",
          children: "View All"
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "ps-block__slider",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_slick_default.a, MarketConsumerElectronics_objectSpread(MarketConsumerElectronics_objectSpread({}, carousel_helpers["b" /* carouselSingle */]), {}, {
        className: "ps-carousel",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "/static/img/slider/home-3/electronic-1.jpg",
            alt: "martfury"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "/static/img/slider/home-3/electronic-2.jpg",
            alt: "martfury"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "/static/img/slider/home-3/electronic-3.jpg",
            alt: "martfury"
          })
        })]
      }))
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "ps-block__product-box",
      children: productItemsView
    })]
  });
};

/* harmony default export */ var modules_MarketConsumerElectronics = (Object(external_react_redux_["connect"])(state => state.collection)(MarketConsumerElectronics));
// CONCATENATED MODULE: ./components/partials/homepage/marketplace/modules/MarketComputerAndTechnology.jsx



function MarketComputerAndTechnology_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function MarketComputerAndTechnology_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { MarketComputerAndTechnology_ownKeys(Object(source), true).forEach(function (key) { MarketComputerAndTechnology_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { MarketComputerAndTechnology_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function MarketComputerAndTechnology_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const MarketComputerAndTechnology = ({
  collectionSlug
}) => {
  const {
    0: productItems,
    1: setProductItems
  } = Object(external_react_["useState"])(null);
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(true);

  async function getProducts() {
    setLoading(true);
    const responseData = await Object(strapi_fetch_data_helpers["b" /* getProductsByCollectionHelper */])(collectionSlug);

    if (responseData) {
      setProductItems(responseData.items);
      setTimeout(function () {
        setLoading(false);
      }.bind(this), 250);
    }
  }

  Object(external_react_["useEffect"])(() => {
    getProducts();
  }, []); // Views

  let productItemsView;

  if (!loading) {
    if (productItems && productItems.length > 0) {
      productItemsView = productItems.map((item, index) => {
        if (index < 6) {
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(products_ProductSimple, {
            product: item
          }, item.id);
        }
      });
    } else {
      productItemsView = /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        children: "No product found."
      });
    }
  } else {
    productItemsView = /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      children: "Loading..."
    });
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "ps-block--products-of-category",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "ps-block__categories",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
        children: "Computer & Techologies"
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/shop",
            as: "/shop/best-seller",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: "Best Seller"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/shop",
            as: "/shop/new-arrivals",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: "New Arrivals"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/shop",
            as: "/shop/women",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: "Desktop PC"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/shop",
            as: "/shop/men",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: "Laptop"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/shop",
            as: "/shop/smartphone",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: "Smartphones"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/shop",
            as: "/shop/tablets",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: "Tablets"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/shop",
            as: "/shop/storage-and-memory",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: "Storage & Memory"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/shop",
            as: "/shop/pc-component",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: "PC Component"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/shop",
            as: "/shop/game-accessories",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: "Game Accessories"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/shop",
            as: "/shop/sale-and-deal",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: "Sales & Deals"
            })
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/shop",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          className: "ps-block__more-link",
          children: "View All"
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "ps-block__slider",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_slick_default.a, MarketComputerAndTechnology_objectSpread(MarketComputerAndTechnology_objectSpread({}, carousel_helpers["b" /* carouselSingle */]), {}, {
        className: "ps-carousel",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "/static/img/slider/home-3/technology-1.jpg",
            alt: "martfury"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "/static/img/slider/home-3/technology-2.jpg",
            alt: "martfury"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "/static/img/slider/home-3/technology-3.jpg",
            alt: "martfury"
          })
        })]
      }))
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "ps-block__product-box",
      children: productItemsView
    })]
  });
};

/* harmony default export */ var modules_MarketComputerAndTechnology = (MarketComputerAndTechnology);
// CONCATENATED MODULE: ./components/partials/homepage/marketplace/modules/MarketGardenAndKitchen.jsx



function MarketGardenAndKitchen_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function MarketGardenAndKitchen_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { MarketGardenAndKitchen_ownKeys(Object(source), true).forEach(function (key) { MarketGardenAndKitchen_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { MarketGardenAndKitchen_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function MarketGardenAndKitchen_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const MarketGardenAndKitchen = ({
  collectionSlug
}) => {
  const {
    0: productItems,
    1: setProductItems
  } = Object(external_react_["useState"])(null);
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(true);

  async function getProducts() {
    setLoading(true);
    const responseData = await Object(strapi_fetch_data_helpers["b" /* getProductsByCollectionHelper */])(collectionSlug);

    if (responseData) {
      setProductItems(responseData.items);
      setTimeout(function () {
        setLoading(false);
      }.bind(this), 250);
    }
  }

  Object(external_react_["useEffect"])(() => {
    getProducts();
  }, []); // Views

  let productItemsView;

  if (!loading) {
    if (productItems && productItems.length > 0) {
      productItemsView = productItems.map((item, index) => {
        if (index < 6) {
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(products_ProductSimple, {
            product: item
          }, item.id);
        }
      });
    } else {
      productItemsView = /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        children: "No product found."
      });
    }
  } else {
    productItemsView = /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      children: "Loading..."
    });
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "ps-block--products-of-category",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "ps-block__categories",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("h3", {
        children: ["Home ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), " Garden & Kitchen"]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/shop",
            as: "/shop/best-seller",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: "Best Seller"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/shop",
            as: "/shop/new-arrivals",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: "New Arrivals"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/shop",
            as: "/shop/furniture",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: "Furniture"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/shop",
            as: "/shop/home-decor",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: "Home Decor"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/shop",
            as: "/shop/cookware",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: "Cookware"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/shop",
            as: "/shop/utensils-and-gadget",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: "Utensils & Gadget"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/shop",
            as: "/shop/garden-tools",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: "Garden Tools"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/shop",
            as: "/shop/acessesories",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: "Acessesories"
            })
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/shop",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          className: "ps-block__more-link",
          children: "View All"
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "ps-block__slider",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_slick_default.a, MarketGardenAndKitchen_objectSpread(MarketGardenAndKitchen_objectSpread({}, carousel_helpers["b" /* carouselSingle */]), {}, {
        className: "ps-carousel",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "/static/img/slider/home-3/kitchen-1.jpg",
            alt: "martfury"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "/static/img/slider/home-3/kitchen-2.jpg",
            alt: "martfury"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "/static/img/slider/home-3/kitchen-3.jpg",
            alt: "martfury"
          })
        })]
      }))
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "ps-block__product-box",
      children: productItemsView
    })]
  });
};

/* harmony default export */ var modules_MarketGardenAndKitchen = (MarketGardenAndKitchen);
// CONCATENATED MODULE: ./components/partials/homepage/marketplace/modules/MarketHeathyAndBeauty.jsx



function MarketHeathyAndBeauty_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function MarketHeathyAndBeauty_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { MarketHeathyAndBeauty_ownKeys(Object(source), true).forEach(function (key) { MarketHeathyAndBeauty_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { MarketHeathyAndBeauty_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function MarketHeathyAndBeauty_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const MarketHeathyAndBeauty = ({
  collectionSlug
}) => {
  const {
    0: productItems,
    1: setProductItems
  } = Object(external_react_["useState"])(null);
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(true);

  async function getProducts() {
    setLoading(true);
    const responseData = await Object(strapi_fetch_data_helpers["a" /* getProductsByCategoriesHelper */])(collectionSlug);

    if (responseData) {
      setProductItems(responseData.items);
      setTimeout(function () {
        setLoading(false);
      }.bind(this), 250);
    }
  }

  Object(external_react_["useEffect"])(() => {
    getProducts();
  }, []); // Views

  let productItemsView;

  if (!loading) {
    if (productItems && productItems.length > 0) {
      productItemsView = productItems.map((item, index) => {
        if (index < 6) {
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(products_ProductSimple, {
            product: item
          }, item.id);
        }
      });
    } else {
      productItemsView = /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        children: "No product found."
      });
    }
  } else {
    productItemsView = /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      children: "Loading..."
    });
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "ps-block--products-of-category",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "ps-block__categories",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("h3", {
        children: ["Health & ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), " Beauty"]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/shop",
            as: "/shop/best-seller",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: "Best Seller"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/shop",
            as: "/shop/new-arrivals",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: "New Arrivals"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/shop",
            as: "/shop/women",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: "Women"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/shop",
            as: "/shop/men",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: "Men"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/shop",
            as: "/shop/girls",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: "Girls"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/shop",
            as: "/shop/boys",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: "Boys"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/shop",
            as: "/shop/baby",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: "Baby"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/shop",
            as: "/shop/sale-and-deal",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: "Sales & Deals"
            })
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/shop",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          className: "ps-block__more-link",
          children: "View All"
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "ps-block__slider",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_slick_default.a, MarketHeathyAndBeauty_objectSpread(MarketHeathyAndBeauty_objectSpread({}, carousel_helpers["b" /* carouselSingle */]), {}, {
        className: "ps-carousel",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "/static/img/slider/home-3/healthy-1.jpg",
            alt: "martfury"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "/static/img/slider/home-3/healthy-2.jpg",
            alt: "martfury"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "/static/img/slider/home-3/healthy-3.jpg",
            alt: "martfury"
          })
        })]
      }))
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "ps-block__product-box",
      children: productItemsView
    })]
  });
};

/* harmony default export */ var modules_MarketHeathyAndBeauty = (MarketHeathyAndBeauty);
// CONCATENATED MODULE: ./pages/home/market-place.jsx














const HomeMarketPlacePage = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(layouts_ContainerMarketPlace, {
    title: "Home Market Place",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(MartketPlaceHomeBanner, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(marketplace_MarketPlaceSiteFeatures, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(MarketPlacePromotions, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(MarketPlaceDealOfDay["a" /* default */], {
      collectionSlug: "deal-of-the-day"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "ps-section--gray",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "container",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(modules_MarketClothingsAndApparel, {
          collectionSlug: "clothings"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(modules_MarketConsumerElectronics, {
          collectionSlug: "consumer-electronics"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(modules_MarketComputerAndTechnology, {
          collectionSlug: "customer-bought-products"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(modules_MarketGardenAndKitchen, {
          collectionSlug: "garden-and-kitchen"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(modules_MarketHeathyAndBeauty, {
          collectionSlug: "health-and-beauty"
        })]
      })
    })]
  });
};

/* harmony default export */ var market_place = __webpack_exports__["default"] = (HomeMarketPlacePage);

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "hWwc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_cart_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("0wdU");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);






const ModuleDetailActionsMobile = ({
  product
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  const handleAddItemToCart = e => {
    e.preventDefault();
    let tmp = product;
    tmp.quantity = 1;
    dispatch(Object(_store_cart_action__WEBPACK_IMPORTED_MODULE_2__[/* addItem */ "b"])(tmp));
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: "ps-product__actions-mobile",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
      className: "ps-btn ps-btn--black",
      href: "#",
      onClick: e => handleAddItemToCart(e),
      children: "Add to cart"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
      className: "ps-btn",
      href: "#",
      onClick: e => handleAddItemToCart(e),
      children: "Buy Now"
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (ModuleDetailActionsMobile);

/***/ }),

/***/ "iAvk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




const Rating = () => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("span", {
  className: "ps-rating",
  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
    className: "fa fa-star-o"
  })]
});

/* harmony default export */ __webpack_exports__["a"] = (Rating);

/***/ }),

/***/ "mJh6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




const ModuleProductDetailSharing = () => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
  className: "ps-product__sharing",
  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
    className: "facebook",
    href: "#",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
      className: "fa fa-facebook"
    })
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
    className: "twitter",
    href: "#",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
      className: "fa fa-twitter"
    })
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
    className: "google",
    href: "#",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
      className: "fa fa-google-plus"
    })
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
    className: "linkedin",
    href: "#",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
      className: "fa fa-linkedin"
    })
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
    className: "instagram",
    href: "#",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
      className: "fa fa-instagram"
    })
  })]
});

/* harmony default export */ __webpack_exports__["a"] = (ModuleProductDetailSharing);

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "npkp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_cart_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("0wdU");
/* harmony import */ var _store_compare_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("q8Yi");
/* harmony import */ var _store_wishlist_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("T/WE");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);









const ModuleDetailShoppingActions = ({
  product,
  extended = false
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  const {
    0: quantity,
    1: setQuantity
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1);
  const Router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();

  const handleAddItemToCart = e => {
    e.preventDefault();
    let tmp = product;
    tmp.quantity = quantity;
    dispatch(Object(_store_cart_action__WEBPACK_IMPORTED_MODULE_2__[/* addItem */ "b"])(tmp));
  };

  const handleBuynow = e => {
    e.preventDefault();
    let tmp = product;
    tmp.quantity = quantity;
    dispatch(Object(_store_cart_action__WEBPACK_IMPORTED_MODULE_2__[/* addItem */ "b"])(tmp));
    setTimeout(function () {
      Router.push('/account/checkout');
    }, 1000);
  };

  const handleAddItemToCompare = e => {
    e.preventDefault();
    dispatch(Object(_store_compare_action__WEBPACK_IMPORTED_MODULE_3__[/* addItemToCompare */ "b"])(product));
  };

  const handleAddItemToWishlist = e => {
    e.preventDefault();
    const {
      product
    } = undefined.props;
    dispatch(Object(_store_wishlist_action__WEBPACK_IMPORTED_MODULE_4__[/* addItemToWishlist */ "b"])(product));
  };

  const handleIncreaseItemQty = e => {
    e.preventDefault();
    setQuantity(quantity + 1);
  };

  const handleDecreaseItemQty = e => {
    e.preventDefault();

    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (!extended) {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "ps-product__shopping",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("figure", {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("figcaption", {
          children: "Quantity"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "form-group--number",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
            className: "up",
            onClick: e => handleIncreaseItemQty(e),
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
              className: "fa fa-plus"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
            className: "down",
            onClick: e => handleDecreaseItemQty(e),
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
              className: "fa fa-minus"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
            className: "form-control",
            type: "text",
            placeholder: quantity,
            disabled: true
          })]
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
        className: "ps-btn ps-btn--black",
        href: "#",
        onClick: e => handleAddItemToCart(e),
        children: "Add to cart"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
        className: "ps-btn",
        href: "#",
        onClick: e => handleBuynow(e),
        children: "Buy Now"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "ps-product__actions",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
          href: "#",
          onClick: e => handleAddItemToWishlist(e),
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
            className: "icon-heart"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
          href: "#",
          onClick: e => handleAddItemToCompare(e),
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
            className: "icon-chart-bars"
          })
        })]
      })]
    });
  } else {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "ps-product__shopping extend",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "ps-product__btn-group",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("figure", {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("figcaption", {
            children: "Quantity"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: "form-group--number",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
              className: "up",
              onClick: e => handleIncreaseItemQty(e),
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                className: "fa fa-plus"
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
              className: "down",
              onClick: e => handleDecreaseItemQty(e),
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                className: "fa fa-minus"
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
              className: "form-control",
              type: "text",
              placeholder: quantity,
              disabled: true
            })]
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
          className: "ps-btn ps-btn--black",
          href: "#",
          onClick: e => handleAddItemToCart(e),
          children: "Add to cart"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "ps-product__actions",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            href: "#",
            onClick: e => handleAddItemToWishlist(e),
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
              className: "icon-heart"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            href: "#",
            onClick: e => handleAddItemToCompare(e),
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
              className: "icon-chart-bars"
            })
          })]
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
        className: "ps-btn",
        href: "#",
        onClick: e => handleBuynow(e),
        children: "Buy Now"
      })]
    });
  }
};

/* harmony default export */ __webpack_exports__["a"] = (ModuleDetailShoppingActions);

/***/ }),

/***/ "pU5j":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return basePostUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return baseStoreURL; });
/* unused harmony export customHeaders */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return baseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return serializeQuery; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const baseDomain = 'https://beta.apinouthemes.com'; // API for products

const basePostUrl = 'https://beta.apinouthemes.com'; // API for post

const baseStoreURL = 'https://beta.apinouthemes.com'; // API for vendor(store)

const customHeaders = {
  Accept: 'application/json'
};
const baseUrl = `${baseDomain}`;
/* harmony default export */ __webpack_exports__["d"] = (axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseUrl,
  headers: customHeaders
}));
const serializeQuery = query => {
  return Object.keys(query).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`).join('&');
};

/***/ }),

/***/ "q8Yi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionTypes; });
/* unused harmony export getCompareList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getCompareListSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addItemToCompare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return removeCompareItem; });
/* unused harmony export clearCompare */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return updateCompareListSuccess; });
const actionTypes = {
  GET_COMPARE_LIST: 'GET_COMPARE_LIST',
  GET_COMPARE_LIST_SUCCESS: 'GET_COMPARE_LIST_SUCCESS',
  GET_COMPARE_LIST_ERROR: 'GET_COMPARE_LIST_ERROR',
  ADD_ITEM_COMPARE: 'ADD_ITEM_COMPARE',
  REMOVE_ITEM_COMPARE: 'REMOVE_ITEM_COMPARE',
  UPDATE_COMPARE_LIST: 'UPDATE_COMPARE_LIST',
  UPDATE_COMPARE_LIST_SUCCESS: 'UPDATE_COMPARE_LIST_SUCCESS',
  UPDATE_COMPARE_LIST_ERROR: 'UPDATE_COMPARE_LIST_ERROR',
  CLEAR_COMPARE_LIST: 'CLEAR_COMPARE_LIST'
};
function getCompareList() {
  return {
    type: actionTypes.GET_COMPARE_LIST
  };
}
function getCompareListSuccess(data) {
  return {
    type: actionTypes.GET_COMPARE_LIST_SUCCESS,
    data
  };
}
function addItemToCompare(product) {
  return {
    type: actionTypes.ADD_ITEM_COMPARE,
    product
  };
}
function removeCompareItem(product) {
  return {
    type: actionTypes.REMOVE_ITEM_COMPARE,
    product
  };
}
function clearCompare() {
  return {
    type: actionTypes.CLEAR_CART
  };
}
function updateCompareListSuccess(payload) {
  return {
    type: actionTypes.UPDATE_COMPARE_LIST_SUCCESS,
    payload
  };
}

/***/ }),

/***/ "qQUb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utilities_product_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("OqP1");
/* harmony import */ var _components_elements_Rating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("iAvk");







const ProductSearchResult = ({
  product
}) => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: "ps-product ps-product--wide ps-product--search-result",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "ps-product__thumbnail",
      children: Object(_utilities_product_helper__WEBPACK_IMPORTED_MODULE_3__[/* StrapiProductThumbnail */ "d"])(product)
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "ps-product__content",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/product/[pid]",
        as: `/product/${product.id}`,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
          className: "ps-product__title",
          children: product.title
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "ps-product__rating",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_elements_Rating__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
          children: product.ratingCount
        })]
      }), Object(_utilities_product_helper__WEBPACK_IMPORTED_MODULE_3__[/* StrapiProductPrice */ "b"])(product)]
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (ProductSearchResult);

/***/ }),

/***/ "rUi8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_shared_headers_modules_MiniCart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("vcs+");
/* harmony import */ var _components_shared_headers_modules_AccountQuickLinks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("MJbt");








const HeaderActions = props => {
  const {
    compare,
    wishlist,
    auth
  } = props; // views

  let headerAuthView;

  if (auth.isLoggedIn && Boolean(auth.isLoggedIn) === true) {
    headerAuthView = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_shared_headers_modules_AccountQuickLinks__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      isLoggedIn: true
    });
  } else {
    headerAuthView = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_shared_headers_modules_AccountQuickLinks__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      isLoggedIn: false
    });
  }

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: "header__actions",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/account/compare",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("a", {
        className: "header__extra",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
          className: "icon-chart-bars"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
            children: compare ? compare.compareTotal : 0
          })
        })]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/account/wishlist",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("a", {
        className: "header__extra",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
          className: "icon-heart"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
            children: wishlist ? wishlist.wishlistTotal : 0
          })
        })]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_shared_headers_modules_MiniCart__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {}), headerAuthView]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(state => state)(HeaderActions));

/***/ }),

/***/ "s/7F":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_setting_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ZzbE");



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class CurrencyDropdown extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleChangeCurrency", (e, currency) => {
      e.preventDefault();
      this.props.dispatch(Object(_store_setting_action__WEBPACK_IMPORTED_MODULE_4__[/* changeCurrency */ "b"])(currency));
    });
  }

  handleFeatureWillUpdate(e) {
    e.preventDefault();
    antd__WEBPACK_IMPORTED_MODULE_2__["notification"].open({
      message: 'Opp! Something went wrong.',
      description: 'This feature has been updated later!',
      duration: 500
    });
  }

  render() {
    const {
      currency
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "ps-dropdown",
      children: [currency ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
        href: "/",
        onClick: e => e.preventDefault(),
        children: currency.text
      }) : '', /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
        className: "ps-dropdown-menu",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            href: "/",
            onClick: e => this.handleChangeCurrency(e, {
              symbol: '$',
              text: 'USD'
            }),
            children: "USD"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            href: "/",
            onClick: e => this.handleChangeCurrency(e, {
              symbol: '€',
              text: 'EURO'
            }),
            children: "EURO"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            href: "/",
            onClick: e => this.handleChangeCurrency(e, {
              symbol: '£',
              text: 'GBP'
            }),
            children: "GBP"
          })
        })]
      })]
    });
  }

}

const mapStateToProps = state => {
  return state.setting;
};

/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(CurrencyDropdown));

/***/ }),

/***/ "s5ri":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const NextArrow = props => {
  const {
    className,
    onClick,
    icon
  } = props;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
    className: `slick-arrow slick-next ${className}`,
    onClick: onClick,
    children: icon ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
      className: icon
    }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
      className: "icon-chevron-right"
    })
  });
};

/* harmony default export */ __webpack_exports__["a"] = (NextArrow);

/***/ }),

/***/ "spCc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: ./public/static/data/menu.json
var menu = __webpack_require__("y2E8");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/shared/panel/PanelMenu.jsx



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const {
  SubMenu
} = external_antd_["Menu"];

class PanelMenu_PanelMenu extends external_react_["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "rootSubmenuKeys", ['sub1', 'sub2', 'sub4']);

    _defineProperty(this, "state", {
      openKeys: []
    });

    _defineProperty(this, "onOpenChange", openKeys => {
      const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);

      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.setState({
          openKeys
        });
      } else {
        this.setState({
          openKeys: latestOpenKey ? [latestOpenKey] : []
        });
      }
    });
  }

  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Menu"], {
      mode: "inline",
      openKeys: this.state.openKeys,
      onOpenChange: this.onOpenChange,
      className: "menu--mobile-2",
      children: menu["menuPrimary"].menu_1.map(item => {
        if (item.subMenu) {
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(SubMenu, {
            title: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: item.url,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                children: item.text
              })
            }),
            children: item.subMenu.map(subItem => /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Menu"].Item, {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: subItem.url,
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  children: subItem.text
                })
              })
            }, subItem.text))
          }, item.text);
        } else if (item.megaContent) {
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(SubMenu, {
            title: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: item.url,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                children: item.text
              })
            }),
            children: item.megaContent.map(megaItem => /*#__PURE__*/Object(jsx_runtime_["jsx"])(SubMenu, {
              title: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                children: megaItem.heading
              }),
              children: megaItem.megaItems.map(megaSubItem => /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Menu"].Item, {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  href: item.url,
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    children: megaSubItem.text
                  })
                })
              }, megaSubItem.text))
            }, megaItem.heading))
          }, item.text);
        } else {
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Menu"].Item, {
            children: item.type === 'dynamic' ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])(link_default.a, {
              href: `${item.url}/[pid]`,
              as: `${item.url}/${item.endPoint}`,
              children: ["l", /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                children: item.text
              })]
            }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: item.url,
              as: item.alias,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                children: item.text
              })
            })
          }, item.text);
        }
      })
    });
  }

}

const mapStateToProps = state => {
  return state.setting;
};

/* harmony default export */ var panel_PanelMenu = (Object(external_react_redux_["connect"])(mapStateToProps)(PanelMenu_PanelMenu));
// EXTERNAL MODULE: ./store/cart/action.js
var action = __webpack_require__("0wdU");

// EXTERNAL MODULE: ./repositories/Repository.js
var Repository = __webpack_require__("pU5j");

// CONCATENATED MODULE: ./components/shared/panel/PanelCartMobile.jsx



function PanelCartMobile_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class PanelCartMobile_PanelCartMobile extends external_react_["Component"] {
  constructor(props) {
    super(props);

    PanelCartMobile_defineProperty(this, "handleRemoveCartItem", product => {
      this.props.dispatch(Object(action["h" /* removeItem */])(product));
    });
  }

  componentDidMount() {
    this.props.dispatch(Object(action["d" /* getCart */])());
  }

  render() {
    const {
      amount,
      cartItems
    } = this.props;
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "ps-cart--mobile",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "ps-cart__content",
        children: cartItems && cartItems.length > 0 ? cartItems.map(product => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "ps-product--cart-mobile",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "ps-product__thumbnail",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "/product/[pid]",
              as: `/product/${product.id}`,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                  src: `${Repository["c" /* baseUrl */]}${product.thumbnail.url}`,
                  alt: "martfury"
                })
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "ps-product__content",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              className: "ps-product__remove",
              onClick: this.handleRemoveCartItem.bind(this, product),
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                className: "icon-cross"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "/product/[pid]",
              as: `/product/${product.id}`,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                className: "ps-product__title",
                children: product.title
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
                children: "Sold by:"
              }), ' ', product.vendor]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("small", {
              children: [product.quantity, " x $", product.price]
            })]
          })]
        }, product.id)) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "ps-cart__items",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            children: "No products in cart"
          })
        })
      }), cartItems && cartItems.length > 0 ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "ps-cart__footer",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("h3", {
          children: ["Sub Total:", /*#__PURE__*/Object(jsx_runtime_["jsxs"])("strong", {
            children: ["$", amount]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("figure", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/account/shopping-cart",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              className: "ps-btn",
              children: "View Cart"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/account/checkout",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              className: "ps-btn",
              children: "Checkout"
            })
          })]
        })]
      }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "ps-cart__footer",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/shop",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            className: "ps-btn ps-btn--fullwidth",
            children: "Shop now"
          })
        })
      })]
    });
  }

}

const PanelCartMobile_mapStateToProps = state => {
  return state.cart;
};

/* harmony default export */ var panel_PanelCartMobile = (Object(external_react_redux_["connect"])(PanelCartMobile_mapStateToProps)(PanelCartMobile_PanelCartMobile));
// EXTERNAL MODULE: ./store/product/action.js
var product_action = __webpack_require__("ypqY");

// EXTERNAL MODULE: ./components/elements/products/ProductSearchResult.jsx
var ProductSearchResult = __webpack_require__("qQUb");

// CONCATENATED MODULE: ./components/shared/panel/PanelSearch.jsx



function PanelSearch_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class PanelSearch_PanelSearch extends external_react_["Component"] {
  constructor(props) {
    super(props);

    PanelSearch_defineProperty(this, "searchByProductName", (keyword, object) => {
      let matches = [];
      let regexp = new RegExp(keyword.toLowerCase(), 'g');
      object.forEach(product => {
        if (product.title.toLowerCase().match(regexp)) matches.push(product);
      });
      return matches;
    });

    this.state = {
      searchPanel: false,
      searchProducts: [],
      keyword: ''
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const keyword = this.state.keyword;
    Router.push(`/search?keyword=${keyword}`);
  }

  handleSearch(e) {
    if (e.target.value !== '') {
      const keyword = e.target.value;
      this.props.dispatch(Object(product_action["e" /* getProductsByKeyword */])(keyword));
      this.setState({
        searchPanel: true,
        keyword: e.target.value
      });
    } else {
      this.setState({
        searchPanel: false,
        searchProducts: []
      });
    }
  }

  render() {
    const {
      searchProducts
    } = this.state;
    const {
      searchResults
    } = this.props;
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "ps-panel__search-results",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("form", {
        className: "ps-form--search-mobile",
        action: "/",
        method: "get",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "form-group--nest",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
            className: "form-control",
            type: "text",
            placeholder: "Search something...",
            onChange: this.handleSearch.bind(this)
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
              className: "icon-magnifier"
            })
          })]
        })
      }), searchResults && searchResults.map(product => /*#__PURE__*/Object(jsx_runtime_["jsx"])(ProductSearchResult["a" /* default */], {
        product: product
      }, product.id))]
    });
  }

}

/* harmony default export */ var panel_PanelSearch = (Object(external_react_redux_["connect"])(state => state.product)(PanelSearch_PanelSearch));
// EXTERNAL MODULE: ./public/static/data/static-categories.json
var static_categories = __webpack_require__("emho");

// CONCATENATED MODULE: ./components/shared/panel/PanelCategories.jsx


function PanelCategories_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const {
  SubMenu: PanelCategories_SubMenu
} = external_antd_["Menu"];

class PanelCategories_PanelCategories extends external_react_["Component"] {
  constructor(props) {
    super(props);

    PanelCategories_defineProperty(this, "rootSubmenuKeys", ['sub1', 'sub2', 'sub4']);

    PanelCategories_defineProperty(this, "state", {
      openKeys: ['sub1']
    });

    PanelCategories_defineProperty(this, "onOpenChange", openKeys => {
      const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);

      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.setState({
          openKeys
        });
      } else {
        this.setState({
          openKeys: latestOpenKey ? [latestOpenKey] : []
        });
      }
    });
  }

  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Menu"], {
      mode: "inline",
      openKeys: this.state.openKeys,
      onOpenChange: this.onOpenChange,
      children: static_categories.map(category => /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Menu"].Item, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          href: `/shop?category=${category.slug}`,
          children: category.name
        })
      }, category.id))
    });
  }

}

/* harmony default export */ var panel_PanelCategories = (PanelCategories_PanelCategories);
// CONCATENATED MODULE: ./components/shared/navigation/NavigationList.jsx



function NavigationList_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class NavigationList_NavigationList extends external_react_["Component"] {
  constructor(props) {
    super(props);

    NavigationList_defineProperty(this, "handleDrawerClose", () => {
      this.setState({
        menuDrawer: false,
        cartDrawer: false,
        searchDrawer: false,
        categoriesDrawer: false
      });
    });

    NavigationList_defineProperty(this, "handleShowMenuDrawer", () => {
      this.setState({
        menuDrawer: !this.state.menuDrawer,
        cartDrawer: false,
        searchDrawer: false,
        categoriesDrawer: false
      });
    });

    NavigationList_defineProperty(this, "handleShowCartDrawer", () => {
      this.setState({
        menuDrawer: false,
        cartDrawer: !this.state.cartDrawer,
        searchDrawer: false,
        categoriesDrawer: false
      });
    });

    NavigationList_defineProperty(this, "handleShowSearchDrawer", () => {
      this.setState({
        menuDrawer: false,
        cartDrawer: false,
        searchDrawer: !this.state.searchDrawer,
        categoriesDrawer: false
      });
    });

    NavigationList_defineProperty(this, "handleShowCategoriesDrawer", () => {
      this.setState({
        menuDrawer: false,
        cartDrawer: false,
        searchDrawer: false,
        categoriesDrawer: !this.state.categoriesDrawer
      });
    });

    this.state = {
      menuDrawer: false,
      cartDrawer: false,
      searchDrawer: false,
      categoriesDrawer: false
    };
  }

  render() {
    const {
      menuDrawer,
      searchDrawer,
      cartDrawer,
      categoriesDrawer
    } = this.state;
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "navigation--list",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Drawer"], {
        className: "ps-panel--mobile",
        placement: "right",
        closable: false,
        onClose: this.handleDrawerClose,
        visible: this.state.menuDrawer,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "ps-panel--wrapper",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "ps-panel__header",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
              children: "Menu"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: "ps-panel__close",
              onClick: this.handleDrawerClose,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                className: "icon-cross"
              })
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "ps-panel__content",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(panel_PanelMenu, {})
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Drawer"], {
        className: "ps-panel--mobile",
        placement: "right",
        closable: false,
        onClose: this.handleDrawerClose,
        visible: this.state.cartDrawer,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "ps-panel--wrapper",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "ps-panel__header",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
              children: "Shopping Cart"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: "ps-panel__close",
              onClick: this.handleDrawerClose,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                className: "icon-cross"
              })
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "ps-panel__content",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(panel_PanelCartMobile, {})
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Drawer"], {
        className: "ps-panel--mobile",
        placement: "right",
        closable: false,
        onClose: this.handleDrawerClose,
        visible: this.state.searchDrawer,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "ps-panel--wrapper",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "ps-panel__header",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
              children: "Search"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: "ps-panel__close",
              onClick: this.handleDrawerClose,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                className: "icon-cross"
              })
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "ps-panel__content",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(panel_PanelSearch, {})
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Drawer"], {
        className: "ps-panel--mobile",
        placement: "right",
        closable: false,
        onClose: this.handleDrawerClose,
        visible: this.state.categoriesDrawer,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "ps-panel--wrapper",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "ps-panel__header",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
              children: "Categories"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: "ps-panel__close",
              onClick: this.handleDrawerClose,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                className: "icon-cross"
              })
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "ps-panel__content",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(panel_PanelCategories, {})
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "navigation__content",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
          className: `navigation__item ${menuDrawer === true ? 'active' : ''}`,
          onClick: this.handleShowMenuDrawer,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
            className: "icon-menu"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            children: " Menu"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
          className: `navigation__item ${categoriesDrawer === true ? 'active' : ''}`,
          onClick: this.handleShowCategoriesDrawer,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
            className: "icon-list4"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            children: " Categories"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
          className: `navigation__item ${searchDrawer === true ? 'active' : ''}`,
          onClick: this.handleShowSearchDrawer,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
            className: "icon-magnifier"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            children: " Search"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
          className: `navigation__item ${cartDrawer === true ? 'active' : ''}`,
          onClick: this.handleShowCartDrawer,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
            className: "icon-bag2"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            children: " Cart"
          })]
        })]
      })]
    });
  }

}

const NavigationList_mapStateToProps = state => {
  return state.setting;
};

/* harmony default export */ var navigation_NavigationList = __webpack_exports__["a"] = (Object(external_react_redux_["connect"])(NavigationList_mapStateToProps)(NavigationList_NavigationList));

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "vcs+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./store/cart/action.js
var action = __webpack_require__("0wdU");

// EXTERNAL MODULE: ./utilities/product-helper.js
var product_helper = __webpack_require__("OqP1");

// CONCATENATED MODULE: ./components/elements/products/ProductOnCart.jsx








const ProductOnCart = ({
  product
}) => {
  const dispatch = Object(external_react_redux_["useDispatch"])();

  const handleRemoveCartItem = e => {
    e.preventDefault();
    dispatch(Object(action["h" /* removeItem */])(product));
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "ps-product--cart-mobile",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "ps-product__thumbnail",
      children: Object(product_helper["d" /* StrapiProductThumbnail */])(product)
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "ps-product__content",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        className: "ps-product__remove",
        onClick: e => handleRemoveCartItem(e),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
          className: "icon-cross"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/product/[pid]",
        as: `/product/${product.id}`,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          className: "ps-product__title",
          children: product.title
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("small", {
          children: ["$", product.price, " x ", product.quantity]
        })
      })]
    })]
  });
};

/* harmony default export */ var products_ProductOnCart = (ProductOnCart);
// CONCATENATED MODULE: ./components/shared/headers/modules/MiniCart.jsx








class MiniCart_MiniCart extends external_react_["Component"] {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(Object(action["d" /* getCart */])());
  }

  render() {
    const {
      amount,
      cartTotal,
      cartItems
    } = this.props; // views

    let cartItemsView;

    if (cartItems && cartItems.length > 0) {
      const productItems = cartItems.map(item => {
        return /*#__PURE__*/Object(jsx_runtime_["jsx"])(products_ProductOnCart, {
          product: item
        }, item.id);
      });
      cartItemsView = /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "ps-cart__content",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "ps-cart__items",
          children: productItems
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "ps-cart__footer",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("h3", {
            children: ["Sub Total:", /*#__PURE__*/Object(jsx_runtime_["jsxs"])("strong", {
              children: ["$", amount ? amount : 0]
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("figure", {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "/account/shopping-cart",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                className: "ps-btn",
                children: "View Cart"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "/account/checkout",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                className: "ps-btn",
                children: "Checkout"
              })
            })]
          })]
        })]
      });
    } else {
      cartItemsView = /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "ps-cart__content",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "ps-cart__items",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            children: "No products in cart"
          })
        })
      });
    }

    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "ps-cart--mini",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
        className: "header__extra",
        href: "#",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
          className: "icon-bag2"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
            children: cartTotal ? cartTotal : 0
          })
        })]
      }), cartItemsView]
    });
  }

}

/* harmony default export */ var modules_MiniCart = __webpack_exports__["a"] = (Object(external_react_redux_["connect"])(state => state.cart)(MiniCart_MiniCart));

/***/ }),

/***/ "w957":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/elements/menu/MenuDropdown.jsx





const MenuDropdown = ({
  source
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
    className: "menu-item-has-children dropdown",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
      href: source.url,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        children: source.text
      })
    }), source.subMenu && /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
      className: source.subClass,
      children: source.subMenu.map((subMenuItem, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(MenuDropdown, {
        source: subMenuItem
      }, index))
    })]
  });
};

/* harmony default export */ var menu_MenuDropdown = (MenuDropdown);
// CONCATENATED MODULE: ./components/elements/menu/MegaMenu.jsx





const MegaMenu = ({
  source
}) => {
  let megaContentView;

  if (source) {
    megaContentView = source.megaContent.map(item => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "mega-menu__column",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
        children: item.heading
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
        className: "mega-menu__list",
        children: item.megaItems.map(subItem => /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: subItem.url,
            as: subItem.url,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: subItem.text
            })
          })
        }, subItem.text))
      })]
    }, item.heading));
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
    className: "menu-item-has-children has-mega-menu",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
      href: source.url !== '' ? source.url : '/',
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
        children: [source.icon && /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
          className: source.icon
        }), source.text]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "mega-menu",
      children: megaContentView
    })]
  });
};

/* harmony default export */ var menu_MegaMenu = (MegaMenu);
// CONCATENATED MODULE: ./components/elements/menu/Menu.jsx







const Menu = ({
  source,
  className
}) => {
  // Views
  let menuView;

  if (source) {
    menuView = source.map(item => {
      if (item.subMenu) {
        return /*#__PURE__*/Object(jsx_runtime_["jsx"])(menu_MenuDropdown, {
          source: item
        }, item.text);
      } else if (item.megaContent) {
        return /*#__PURE__*/Object(jsx_runtime_["jsx"])(menu_MegaMenu, {
          source: item
        }, item.text);
      } else {
        return /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: item.url,
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
              children: [item.icon && /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                className: item.icon
              }), item.text]
            })
          })
        }, item.text);
      }
    });
  } else {
    menuView = /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        href: "#",
        onClick: e => e.preventDefault(),
        children: "No menu item."
      })
    });
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
    className: className,
    children: menuView
  });
};

/* harmony default export */ var menu_Menu = __webpack_exports__["a"] = (Menu);

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "y2E8":
/***/ (function(module) {

module.exports = JSON.parse("{\"menuPrimary\":{\"menu_1\":[{\"text\":\"Home\",\"url\":\"/\",\"extraClass\":\"menu-item-has-children\",\"subClass\":\"sub-menu\",\"subMenu\":[{\"text\":\"Marketplace Full Width\",\"url\":\"/\"},{\"text\":\"Home Auto Parts\",\"url\":\"/home/auto-part\"},{\"text\":\"Home Technology\",\"url\":\"/home/technology\"},{\"text\":\"Home Organic\",\"url\":\"/home/organic\"},{\"text\":\"Home Marketplace V1\",\"url\":\"/home/market-place\"},{\"text\":\"Home Marketplace V2\",\"url\":\"/home/market-place-2\"},{\"text\":\"Home Marketplace V3\",\"url\":\"/home/market-place-3\"},{\"text\":\"Home Marketplace V4\",\"url\":\"/home/market-place-4\"},{\"text\":\"Home Electronic\",\"url\":\"/home/electronic\"},{\"text\":\"Home Furniture\",\"url\":\"/home/furniture\"}]},{\"text\":\"Shop\",\"url\":\"/shop\",\"extraClass\":\"menu-item-has-children has-mega-menu\",\"subClass\":\"sub-menu\",\"mega\":\"true\",\"megaContent\":[{\"heading\":\"Catalog Pages\",\"megaItems\":[{\"text\":\"Shop Default\",\"url\":\"/shop\"},{\"text\":\"Shop Fullwidth\",\"url\":\"/shop/shop-fullwidth\"},{\"text\":\"Shop Categories\",\"url\":\"/shop/shop-categories\"},{\"text\":\"Shop Sidebar\",\"url\":\"/shop/shop-sidebar\"},{\"text\":\"Shop Without Banner\",\"url\":\"/shop/shop-sidebar-without-banner\"},{\"text\":\"Shop Carousel\",\"url\":\"/shop/shop-carousel\"}]},{\"heading\":\"Product Layout\",\"megaItems\":[{\"text\":\"Default\",\"url\":\"/product/3\"},{\"text\":\"Extended\",\"url\":\"/product/extended/7\"},{\"text\":\"Full Content\",\"url\":\"/product/full-content/7\"},{\"text\":\"Boxed\",\"url\":\"/product/boxed/7\"},{\"text\":\"Sidebar\",\"url\":\"/product/sidebar/7\"}]},{\"heading\":\"Product Types\",\"megaItems\":[{\"text\":\"Simple\",\"url\":\"/product/3\"},{\"text\":\"Image swatches\",\"url\":\"/product/image-swatches/11\"},{\"text\":\"Countdown\",\"url\":\"/product/countdown/10\"},{\"text\":\"Affiliate\",\"url\":\"/product/affiliate/7\"},{\"text\":\"On sale\",\"url\":\"/product/on-sale/7\"},{\"text\":\"Grouped\",\"url\":\"/product/groupped/22\"},{\"text\":\"Out Of Stock\",\"url\":\"/product/out-of-stock/7\"}]},{\"heading\":\"Ecomerce Pages\",\"megaItems\":[{\"text\":\"Shopping Cart\",\"url\":\"/account/shopping-cart\"},{\"text\":\"Checkout\",\"url\":\"/account/checkout\"},{\"text\":\"Whishlist\",\"url\":\"/account/wishlist\"},{\"text\":\"Compare\",\"url\":\"/account/compare\"},{\"text\":\"Order Tracking\",\"url\":\"/account/order-tracking\"},{\"text\":\"My Account\",\"url\":\"/account/login\"},{\"text\":\"Login / Register\",\"url\":\"/account/login\"}]}]},{\"text\":\"Pages\",\"url\":\"\",\"extraClass\":\"menu-item-has-children has-mega-menu\",\"subClass\":\"sub-menu\",\"mega\":\"true\",\"megaContent\":[{\"heading\":\"Basic Page\",\"megaItems\":[{\"text\":\"About Us\",\"url\":\"/page/about-us\"},{\"text\":\"Contact\",\"url\":\"/page/contact-us\"},{\"text\":\"Faqs\",\"url\":\"/page/faqs\"},{\"text\":\"404 Page\",\"url\":\"/page/page-404\"}]},{\"heading\":\"Vendor Pages\",\"megaItems\":[{\"text\":\"Become a Vendor\",\"url\":\"/vendor/become-a-vendor\"},{\"text\":\"Vendor Store\",\"url\":\"/vendor/vendor-store\"},{\"text\":\"Store List\",\"url\":\"/stores\"}]}]},{\"text\":\"Blogs\",\"url\":\"/blog\",\"current\":\"shop\",\"extraClass\":\"menu-item-has-children has-mega-menu\",\"subClass\":\"sub-menu\",\"mega\":\"true\",\"megaContent\":[{\"heading\":\"Blog Layout\",\"megaItems\":[{\"text\":\"Grid\",\"url\":\"/blog\"},{\"text\":\"Small Thumb\",\"url\":\"/blog/blog-small-thumbnail\"},{\"text\":\"Left Sidebar\",\"url\":\"/blog/blog-left-sidebar\"},{\"text\":\"Right Sidebar\",\"url\":\"/blog/blog-right-sidebar\"}]},{\"heading\":\"Single Blog\",\"megaItems\":[{\"text\":\"Single 1\",\"url\":\"/post/default\"},{\"text\":\"Single 2\",\"url\":\"/post/detail-2\"},{\"text\":\"Single 3\",\"url\":\"/post/detail-3\"}]}]}]},\"product_categories\":[{\"icon\":\"icon-star\",\"text\":\"Hot Promotions\",\"url\":\"/shop\"},{\"icon\":\"icon-laundry\",\"text\":\"Consumer Electronic\",\"url\":\"/shop\",\"extraClass\":\"menu-item-has-children has-mega-menu\",\"subClass\":\"sub-menu\",\"mega\":true,\"megaContent\":[{\"heading\":\"Electronic\",\"megaItems\":[{\"text\":\"Home Audio & Theathers\",\"url\":\"/shop\"},{\"text\":\"TV & Videos\",\"url\":\"/shop\"},{\"text\":\"Camera, Photos & Videos\",\"url\":\"/shop\"},{\"text\":\"Cellphones & Accessories\",\"url\":\"/shop\"},{\"text\":\"Headphones\",\"url\":\"/shop\"},{\"text\":\"Videosgames\",\"url\":\"/shop\"},{\"text\":\"Wireless Speakers\",\"url\":\"/shop\"},{\"text\":\"Office Electronic\",\"url\":\"/shop\"}]},{\"heading\":\"Accessories & Parts\",\"megaItems\":[{\"text\":\"Digital Cables\",\"url\":\"/shop\"},{\"text\":\"Audio & Video Cables\",\"url\":\"/shop\"},{\"text\":\"Batteries\",\"url\":\"/shop\"}]}]},{\"icon\":\"icon-shirt\",\"text\":\"Clothing & Apparel\",\"url\":\"/shop\"},{\"icon\":\"icon-lampshade\",\"text\":\"Home, Garden & Kitchen\",\"url\":\"/shop\"},{\"icon\":\"icon-heart-pulse\",\"text\":\"Health & Beauty\",\"url\":\"/shop\"},{\"icon\":\"icon-diamond2\",\"text\":\"Yewelry & Watches\",\"url\":\"/shop\"},{\"icon\":\"icon-desktop\",\"text\":\"Computer & Technology\",\"url\":\"/shop\",\"extraClass\":\"menu-item-has-children has-mega-menu\",\"subClass\":\"sub-menu\",\"megaContent\":[{\"heading\":\"Computer & Technologies\",\"megaItems\":[{\"text\":\"Computer & Tablets\",\"url\":\"/shop\"},{\"text\":\"Laptop\",\"url\":\"/shop\"},{\"text\":\"Monitors\",\"url\":\"/shop\"},{\"text\":\"Networking\",\"url\":\"/shop\"},{\"text\":\"Drive & Storages\",\"url\":\"/shop\"},{\"text\":\"Computer Components\",\"url\":\"/shop\"},{\"text\":\"Security & Protection\",\"url\":\"/shop\"},{\"text\":\"Gaming Laptop\",\"url\":\"/shop\"},{\"text\":\"Accessories\",\"url\":\"/shop\"}]}]},{\"icon\":\"icon-baby-bottle\",\"text\":\"Babies & Moms\",\"url\":\"/shop\"},{\"icon\":\"icon-baseball\",\"text\":\"Sport & Outdoor\",\"url\":\"/shop\"},{\"icon\":\"icon-smartphone\",\"text\":\"Phones & Accessories\",\"url\":\"/shop\"},{\"icon\":\"icon-book2\",\"text\":\"Books & Office\",\"url\":\"/shop\"},{\"icon\":\"icon-car-siren\",\"text\":\"Cars & Motocycles\",\"url\":\"/shop\"},{\"icon\":\"icon-wrench\",\"text\":\"Home Improments\",\"url\":\"/shop\"},{\"icon\":\"icon-tag\",\"text\":\"Vouchers & Services\",\"url\":\"/shop\"}]}");

/***/ }),

/***/ "yUax":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_CurrencyDropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("s/7F");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_LanguageSwicher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("CLZ7");
/* harmony import */ var _modules_MobileHeaderActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Sz8t");








class HeaderMobile extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor({
    props
  }) {
    super(props);
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("header", {
      className: "header header--mobile",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "header__top",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "header__left",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
            children: "Welcome to Martfury Online Shopping Store !"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "header__right",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
            className: "navigation__extra",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
                href: "/vendor/become-a-vendor",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                  children: "Sell on Martfury"
                })
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
                href: "/account/order-tracking",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                  children: "Tract your order"
                })
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_modules_CurrencyDropdown__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {})
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_modules_LanguageSwicher__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {})
            })]
          })
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "navigation--mobile",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "navigation__left",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
              className: "ps-logo",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                src: "/static/img/logo_light.png",
                alt: "martfury"
              })
            })
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_modules_MobileHeaderActions__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {})]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "ps-search--mobile",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("form", {
          className: "ps-form--search-mobile",
          action: "/",
          method: "get",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: "form-group--nest",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
              className: "form-control",
              type: "text",
              placeholder: "Search something..."
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                className: "icon-magnifier"
              })
            })]
          })
        })
      })]
    });
  }

}

/* harmony default export */ __webpack_exports__["a"] = (HeaderMobile);

/***/ }),

/***/ "ypqY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionTypes; });
/* unused harmony export getProducts */
/* unused harmony export getTotalProducts */
/* unused harmony export getBrands */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getBrandsSuccess; });
/* unused harmony export getProductCategories */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getProductCategoriesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getTotalProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getProductByKeywordsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getSingleProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getProductsError; });
/* unused harmony export getProductsByCategory */
/* unused harmony export getProductsByBrand */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getProductsByKeyword; });
/* unused harmony export getProductsById */
/* unused harmony export getProductsByPrice */
const actionTypes = {
  GET_PRODUCTS: 'GET_PRODUCTS',
  GET_PRODUCTS_SUCCESS: 'GET_PRODUCTS_SUCCESS',
  GET_PRODUCTS_ERROR: 'GET_PRODUCTS_ERROR',
  GET_PRODUCTS_BY_CATEGORY: 'GET_PRODUCTS_BY_CATEGORY',
  GET_PRODUCTS_BY_PRICE_RANGE: 'GET_PRODUCTS_BY_PRICE_RANGE',
  GET_PRODUCTS_BY_BRAND: 'GET_PRODUCTS_BY_BRAND',
  GET_PRODUCTS_BY_KEYWORD: 'GET_PRODUCTS_BY_KEYWORD',
  GET_PRODUCTS_BY_KEYWORD_SUCCESS: 'GET_PRODUCTS_BY_KEYWORD_SUCCESS',
  GET_PRODUCT_BY_ID: 'GET_PRODUCT_BY_ID',
  GET_PRODUCT_BY_ID_SUCCESS: 'GET_PRODUCT_BY_ID_SUCCESS',
  GET_TOTAL_OF_PRODUCTS: 'GET_TOTAL_OF_PRODUCTS',
  GET_TOTAL_OF_PRODUCTS_SUCCESS: 'GET_TOTAL_OF_PRODUCTS_SUCCESS',
  GET_BRANDS: 'GET_BRANDS',
  GET_BRANDS_SUCCESS: 'GET_BRANDS_SUCCESS',
  GET_PRODUCT_CATEGORIES: 'GET_PRODUCT_CATEGORIES',
  GET_PRODUCT_CATEGORIES_SUCCESS: 'GET_PRODUCT_CATEGORIES_SUCCESS'
};
function getProducts(payload) {
  return {
    type: actionTypes.GET_PRODUCTS,
    payload
  };
}
function getTotalProducts() {
  return {
    type: actionTypes.GET_TOTAL_OF_PRODUCTS
  };
}
function getBrands() {
  return {
    type: actionTypes.GET_BRANDS
  };
}
function getBrandsSuccess(payload) {
  return {
    type: actionTypes.GET_BRANDS_SUCCESS,
    payload
  };
}
function getProductCategories() {
  return {
    type: actionTypes.GET_PRODUCT_CATEGORIES
  };
}
function getProductCategoriesSuccess(payload) {
  return {
    type: actionTypes.GET_PRODUCT_CATEGORIES_SUCCESS,
    payload
  };
}
function getTotalProductsSuccess(payload) {
  return {
    type: actionTypes.GET_TOTAL_OF_PRODUCTS_SUCCESS,
    payload
  };
}
function getProductsSuccess(data) {
  return {
    type: actionTypes.GET_PRODUCTS_SUCCESS,
    data
  };
}
function getProductByKeywordsSuccess(payload) {
  return {
    type: actionTypes.GET_PRODUCTS_BY_KEYWORD_SUCCESS,
    payload
  };
}
function getSingleProductsSuccess(data) {
  return {
    type: actionTypes.GET_PRODUCT_BY_ID_SUCCESS,
    data
  };
}
function getProductsError(error) {
  return {
    type: actionTypes.GET_PRODUCTS_ERROR,
    error
  };
}
function getProductsByCategory(category) {
  return {
    type: actionTypes.GET_PRODUCTS_BY_CATEGORY,
    category
  };
}
function getProductsByBrand(payload) {
  return {
    type: actionTypes.GET_PRODUCTS_BY_BRAND,
    payload
  };
}
function getProductsByKeyword(keyword) {
  return {
    type: actionTypes.GET_PRODUCTS_BY_KEYWORD,
    keyword
  };
}
function getProductsById(id) {
  return {
    type: actionTypes.GET_PRODUCT_BY_ID,
    id
  };
}
function getProductsByPrice(payload) {
  return {
    type: actionTypes.GET_PRODUCTS_BY_PRICE_RANGE,
    payload
  };
}

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });