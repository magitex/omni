module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("8qjm");


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

/***/ "8qjm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_shared_footers_FooterDefault__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("/y5a");
/* harmony import */ var _components_shared_headers_HeaderDefault__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Tt/Y");







function Error({
  statusCode
}) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: "site-content",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_shared_headers_HeaderDefault__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "ps-page--404",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "ps-section__content",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("figure", {
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
              src: "/static/img/404.jpg",
              alt: ""
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h3", {
              children: "Ohh! Page not found"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
              children: ["It seems we can't find what you're looking for.", ' ', /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), "Go back to", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                  children: " Homepage"
                })
              })]
            })]
          })
        })
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_shared_footers_FooterDefault__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {})]
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Error);

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

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

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

/***/ "y2E8":
/***/ (function(module) {

module.exports = JSON.parse("{\"menuPrimary\":{\"menu_1\":[{\"text\":\"Home\",\"url\":\"/\",\"extraClass\":\"menu-item-has-children\",\"subClass\":\"sub-menu\",\"subMenu\":[{\"text\":\"Marketplace Full Width\",\"url\":\"/\"},{\"text\":\"Home Auto Parts\",\"url\":\"/home/auto-part\"},{\"text\":\"Home Technology\",\"url\":\"/home/technology\"},{\"text\":\"Home Organic\",\"url\":\"/home/organic\"},{\"text\":\"Home Marketplace V1\",\"url\":\"/home/market-place\"},{\"text\":\"Home Marketplace V2\",\"url\":\"/home/market-place-2\"},{\"text\":\"Home Marketplace V3\",\"url\":\"/home/market-place-3\"},{\"text\":\"Home Marketplace V4\",\"url\":\"/home/market-place-4\"},{\"text\":\"Home Electronic\",\"url\":\"/home/electronic\"},{\"text\":\"Home Furniture\",\"url\":\"/home/furniture\"}]},{\"text\":\"Shop\",\"url\":\"/shop\",\"extraClass\":\"menu-item-has-children has-mega-menu\",\"subClass\":\"sub-menu\",\"mega\":\"true\",\"megaContent\":[{\"heading\":\"Catalog Pages\",\"megaItems\":[{\"text\":\"Shop Default\",\"url\":\"/shop\"},{\"text\":\"Shop Fullwidth\",\"url\":\"/shop/shop-fullwidth\"},{\"text\":\"Shop Categories\",\"url\":\"/shop/shop-categories\"},{\"text\":\"Shop Sidebar\",\"url\":\"/shop/shop-sidebar\"},{\"text\":\"Shop Without Banner\",\"url\":\"/shop/shop-sidebar-without-banner\"},{\"text\":\"Shop Carousel\",\"url\":\"/shop/shop-carousel\"}]},{\"heading\":\"Product Layout\",\"megaItems\":[{\"text\":\"Default\",\"url\":\"/product/3\"},{\"text\":\"Extended\",\"url\":\"/product/extended/7\"},{\"text\":\"Full Content\",\"url\":\"/product/full-content/7\"},{\"text\":\"Boxed\",\"url\":\"/product/boxed/7\"},{\"text\":\"Sidebar\",\"url\":\"/product/sidebar/7\"}]},{\"heading\":\"Product Types\",\"megaItems\":[{\"text\":\"Simple\",\"url\":\"/product/3\"},{\"text\":\"Image swatches\",\"url\":\"/product/image-swatches/11\"},{\"text\":\"Countdown\",\"url\":\"/product/countdown/10\"},{\"text\":\"Affiliate\",\"url\":\"/product/affiliate/7\"},{\"text\":\"On sale\",\"url\":\"/product/on-sale/7\"},{\"text\":\"Grouped\",\"url\":\"/product/groupped/22\"},{\"text\":\"Out Of Stock\",\"url\":\"/product/out-of-stock/7\"}]},{\"heading\":\"Ecomerce Pages\",\"megaItems\":[{\"text\":\"Shopping Cart\",\"url\":\"/account/shopping-cart\"},{\"text\":\"Checkout\",\"url\":\"/account/checkout\"},{\"text\":\"Whishlist\",\"url\":\"/account/wishlist\"},{\"text\":\"Compare\",\"url\":\"/account/compare\"},{\"text\":\"Order Tracking\",\"url\":\"/account/order-tracking\"},{\"text\":\"My Account\",\"url\":\"/account/login\"},{\"text\":\"Login / Register\",\"url\":\"/account/login\"}]}]},{\"text\":\"Pages\",\"url\":\"\",\"extraClass\":\"menu-item-has-children has-mega-menu\",\"subClass\":\"sub-menu\",\"mega\":\"true\",\"megaContent\":[{\"heading\":\"Basic Page\",\"megaItems\":[{\"text\":\"About Us\",\"url\":\"/page/about-us\"},{\"text\":\"Contact\",\"url\":\"/page/contact-us\"},{\"text\":\"Faqs\",\"url\":\"/page/faqs\"},{\"text\":\"404 Page\",\"url\":\"/page/page-404\"}]},{\"heading\":\"Vendor Pages\",\"megaItems\":[{\"text\":\"Become a Vendor\",\"url\":\"/vendor/become-a-vendor\"},{\"text\":\"Vendor Store\",\"url\":\"/vendor/vendor-store\"},{\"text\":\"Store List\",\"url\":\"/stores\"}]}]},{\"text\":\"Blogs\",\"url\":\"/blog\",\"current\":\"shop\",\"extraClass\":\"menu-item-has-children has-mega-menu\",\"subClass\":\"sub-menu\",\"mega\":\"true\",\"megaContent\":[{\"heading\":\"Blog Layout\",\"megaItems\":[{\"text\":\"Grid\",\"url\":\"/blog\"},{\"text\":\"Small Thumb\",\"url\":\"/blog/blog-small-thumbnail\"},{\"text\":\"Left Sidebar\",\"url\":\"/blog/blog-left-sidebar\"},{\"text\":\"Right Sidebar\",\"url\":\"/blog/blog-right-sidebar\"}]},{\"heading\":\"Single Blog\",\"megaItems\":[{\"text\":\"Single 1\",\"url\":\"/post/default\"},{\"text\":\"Single 2\",\"url\":\"/post/detail-2\"},{\"text\":\"Single 3\",\"url\":\"/post/detail-3\"}]}]}]},\"product_categories\":[{\"icon\":\"icon-star\",\"text\":\"Hot Promotions\",\"url\":\"/shop\"},{\"icon\":\"icon-laundry\",\"text\":\"Consumer Electronic\",\"url\":\"/shop\",\"extraClass\":\"menu-item-has-children has-mega-menu\",\"subClass\":\"sub-menu\",\"mega\":true,\"megaContent\":[{\"heading\":\"Electronic\",\"megaItems\":[{\"text\":\"Home Audio & Theathers\",\"url\":\"/shop\"},{\"text\":\"TV & Videos\",\"url\":\"/shop\"},{\"text\":\"Camera, Photos & Videos\",\"url\":\"/shop\"},{\"text\":\"Cellphones & Accessories\",\"url\":\"/shop\"},{\"text\":\"Headphones\",\"url\":\"/shop\"},{\"text\":\"Videosgames\",\"url\":\"/shop\"},{\"text\":\"Wireless Speakers\",\"url\":\"/shop\"},{\"text\":\"Office Electronic\",\"url\":\"/shop\"}]},{\"heading\":\"Accessories & Parts\",\"megaItems\":[{\"text\":\"Digital Cables\",\"url\":\"/shop\"},{\"text\":\"Audio & Video Cables\",\"url\":\"/shop\"},{\"text\":\"Batteries\",\"url\":\"/shop\"}]}]},{\"icon\":\"icon-shirt\",\"text\":\"Clothing & Apparel\",\"url\":\"/shop\"},{\"icon\":\"icon-lampshade\",\"text\":\"Home, Garden & Kitchen\",\"url\":\"/shop\"},{\"icon\":\"icon-heart-pulse\",\"text\":\"Health & Beauty\",\"url\":\"/shop\"},{\"icon\":\"icon-diamond2\",\"text\":\"Yewelry & Watches\",\"url\":\"/shop\"},{\"icon\":\"icon-desktop\",\"text\":\"Computer & Technology\",\"url\":\"/shop\",\"extraClass\":\"menu-item-has-children has-mega-menu\",\"subClass\":\"sub-menu\",\"megaContent\":[{\"heading\":\"Computer & Technologies\",\"megaItems\":[{\"text\":\"Computer & Tablets\",\"url\":\"/shop\"},{\"text\":\"Laptop\",\"url\":\"/shop\"},{\"text\":\"Monitors\",\"url\":\"/shop\"},{\"text\":\"Networking\",\"url\":\"/shop\"},{\"text\":\"Drive & Storages\",\"url\":\"/shop\"},{\"text\":\"Computer Components\",\"url\":\"/shop\"},{\"text\":\"Security & Protection\",\"url\":\"/shop\"},{\"text\":\"Gaming Laptop\",\"url\":\"/shop\"},{\"text\":\"Accessories\",\"url\":\"/shop\"}]}]},{\"icon\":\"icon-baby-bottle\",\"text\":\"Babies & Moms\",\"url\":\"/shop\"},{\"icon\":\"icon-baseball\",\"text\":\"Sport & Outdoor\",\"url\":\"/shop\"},{\"icon\":\"icon-smartphone\",\"text\":\"Phones & Accessories\",\"url\":\"/shop\"},{\"icon\":\"icon-book2\",\"text\":\"Books & Office\",\"url\":\"/shop\"},{\"icon\":\"icon-car-siren\",\"text\":\"Cars & Motocycles\",\"url\":\"/shop\"},{\"icon\":\"icon-wrench\",\"text\":\"Home Improments\",\"url\":\"/shop\"},{\"icon\":\"icon-tag\",\"text\":\"Vouchers & Services\",\"url\":\"/shop\"}]}");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });