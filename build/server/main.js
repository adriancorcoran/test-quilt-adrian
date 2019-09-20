module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/webpack/assets/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/ui/index.tsx":
/*!**************************!*\
  !*** ./app/ui/index.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);



function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["AppProvider"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Page"], {
    title: "Hello"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    sectioned: true
  }, "Hi there")));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./app/ui/server.js":
/*!**************************!*\
  !*** ./app/ui/server.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_react_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/react-server */ "./node_modules/@shopify/react-server/dist/index.js");
/* harmony import */ var _shopify_react_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_react_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! index */ "./app/ui/index.tsx");
// Generated by @shopify/react-server-webpack-plugin




var render = function render(ctx) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(index__WEBPACK_IMPORTED_MODULE_2__["default"], {
    server: true,
    location: ctx.request.url
  });
};

var app = Object(_shopify_react_server__WEBPACK_IMPORTED_MODULE_1__["createServer"])({
  port: process.env.REACT_SERVER_PORT || 8081,
  ip: process.env.REACT_SERVER_IP || "localhost",
  assetPrefix: "/webpack/assets/",
  render: render
});
/* harmony default export */ __webpack_exports__["default"] = (app);

/***/ }),

/***/ "./node_modules/@shopify/async/dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@shopify/async/dist/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
tslib_1.__exportStar(__webpack_require__(/*! ./types */ "./node_modules/@shopify/async/dist/types.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./resolver */ "./node_modules/@shopify/async/dist/resolver.js"), exports);


/***/ }),

/***/ "./node_modules/@shopify/async/dist/resolver.js":
/*!******************************************************!*\
  !*** ./node_modules/@shopify/async/dist/resolver.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
function createResolver(_a) {
    var _this = this;
    var id = _a.id, load = _a.load;
    var resolved = null;
    var resolvePromise = null;
    var hasTriedSyncResolve = false;
    var resolvedId = id && id();
    return {
        get id() {
            return resolvedId;
        },
        get resolved() {
            if (resolved == null && !hasTriedSyncResolve) {
                hasTriedSyncResolve = true;
                resolved = resolvedId ? trySynchronousResolve(resolvedId) : null;
            }
            return resolved;
        },
        resolve: function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resolvePromise = resolvePromise || resolve(load);
                        return [4 /*yield*/, resolvePromise];
                    case 1:
                        resolved = _a.sent();
                        return [2 /*return*/, resolved];
                }
            });
        }); },
    };
}
exports.createResolver = createResolver;
function resolve(load) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var resolved;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, load()];
                case 1:
                    resolved = _a.sent();
                    return [2 /*return*/, normalize(resolved)];
            }
        });
    });
}
function normalize(module) {
    if (module == null) {
        return null;
    }
    var value = typeof module === 'object' && 'default' in module ? module.default : module;
    return value == null ? null : value;
}
/* eslint-enable babel/camelcase */
// Webpack does not like seeing an explicit require(someVariable) in code
// because that is a dynamic require that it can’t resolve. This code
// obfuscates `require()` for the purpose of fooling Webpack, which is fine
// because we only want to use the `require()` in cases where Webpack
// is not the module bundler.
//
// If we ever reference `require` directly, Webpack complains. So, we first
// check global["require"], which works in Node. However, this doesn’t work
// in Jest when the test is set to simulate a browser, as global in that case
// in a Window object. There, we can only rely on module.require, which is
// actually supposed to be something different but in Jest is the same as
// the global require function.
var requireKey = 'require';
var nodeRequire = (typeof global === 'object' &&
    typeof global[requireKey] === 'function' &&
    global[requireKey]) ||
    ( true &&
        typeof module[requireKey] === 'function' &&
        module[requireKey]) ||
    undefined;
// If we have an ID, we try to first use Webpack’s internal stuff
// to resolve the module. If those don’t exist, we know we aren’t
// inside of a Webpack bundle, so we try to use Node’s native resolution
// (which will work in environments like Jest’s test runner).
function tryRequire(id) {
    if (
    /* eslint-disable babel/camelcase */
     true &&
        __webpack_require__.m[id]
    /* eslint-enable babel/camelcase */
    ) {
        try {
            return normalize(__webpack_require__(id));
        }
        catch (_a) {
            // Just ignore failures
        }
    }
    else if (typeof nodeRequire === 'function') {
        try {
            return normalize(nodeRequire(id));
        }
        catch (_b) {
            // Just ignore failures
        }
    }
    return undefined;
}
function trySynchronousResolve(id) {
    return tryRequire(id) || null;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../sewing-kit/node_modules/webpack/buildin/module.js */ "./node_modules/@shopify/sewing-kit/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/@shopify/async/dist/types.js":
/*!***************************************************!*\
  !*** ./node_modules/@shopify/async/dist/types.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DeferTiming;
(function (DeferTiming) {
    DeferTiming[DeferTiming["Mount"] = 0] = "Mount";
    DeferTiming[DeferTiming["Idle"] = 1] = "Idle";
    DeferTiming[DeferTiming["InViewport"] = 2] = "InViewport";
})(DeferTiming = exports.DeferTiming || (exports.DeferTiming = {}));


/***/ }),

/***/ "./node_modules/@shopify/react-async/dist/EventListener.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@shopify/react-async/dist/EventListener.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
var events_1 = __webpack_require__(/*! @shopify/javascript-utilities/events */ "@shopify/javascript-utilities/events");
// see https://github.com/oliviertassinari/react-event-listener/
var EventListener = /** @class */ (function (_super) {
    tslib_1.__extends(EventListener, _super);
    function EventListener() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EventListener.prototype.componentDidMount = function () {
        this.attachListener();
    };
    EventListener.prototype.componentDidUpdate = function (_a) {
        var passive = _a.passive, detachProps = tslib_1.__rest(_a, ["passive"]);
        this.detachListener(detachProps);
        this.attachListener();
    };
    EventListener.prototype.componentWillUnmount = function () {
        this.detachListener();
    };
    EventListener.prototype.render = function () {
        return null;
    };
    EventListener.prototype.attachListener = function () {
        var _a = this.props, event = _a.event, handler = _a.handler, capture = _a.capture, passive = _a.passive;
        events_1.addEventListener(window, event, handler, { capture: capture, passive: passive });
    };
    EventListener.prototype.detachListener = function (prevProps) {
        var _a = prevProps || this.props, event = _a.event, handler = _a.handler, capture = _a.capture;
        events_1.removeEventListener(window, event, handler, capture);
    };
    return EventListener;
}(react_1.default.PureComponent));
exports.EventListener = EventListener;


/***/ }),

/***/ "./node_modules/@shopify/react-async/dist/PrefetchRoute.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@shopify/react-async/dist/PrefetchRoute.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
var prefetch_1 = __webpack_require__(/*! ./context/prefetch */ "./node_modules/@shopify/react-async/dist/context/prefetch.js");
var ConnectedPrefetchRoute = /** @class */ (function (_super) {
    tslib_1.__extends(ConnectedPrefetchRoute, _super);
    function ConnectedPrefetchRoute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConnectedPrefetchRoute.prototype.componentDidMount = function () {
        var _a = this.props, manager = _a.manager, path = _a.path, render = _a.render;
        this.unregister = manager.register({
            path: path,
            render: render,
        });
    };
    ConnectedPrefetchRoute.prototype.componentWillUnmount = function () {
        if (this.unregister) {
            this.unregister();
        }
    };
    ConnectedPrefetchRoute.prototype.render = function () {
        return null;
    };
    return ConnectedPrefetchRoute;
}(react_1.default.Component));
function PrefetchRoute(props) {
    return (react_1.default.createElement(prefetch_1.PrefetchContext.Consumer, null, function (manager) { return (react_1.default.createElement(ConnectedPrefetchRoute, tslib_1.__assign({ manager: manager }, props))); }));
}
exports.PrefetchRoute = PrefetchRoute;


/***/ }),

/***/ "./node_modules/@shopify/react-async/dist/Prefetcher.js":
/*!**************************************************************!*\
  !*** ./node_modules/@shopify/react-async/dist/Prefetcher.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
var prefetch_1 = __webpack_require__(/*! ./context/prefetch */ "./node_modules/@shopify/react-async/dist/context/prefetch.js");
var EventListener_1 = __webpack_require__(/*! ./EventListener */ "./node_modules/@shopify/react-async/dist/EventListener.js");
exports.INTENTION_DELAY_MS = 150;
var ConnectedPrefetcher = /** @class */ (function (_super) {
    tslib_1.__extends(ConnectedPrefetcher, _super);
    function ConnectedPrefetcher() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        _this.prefetchAgressively = shouldPrefetchAggressively();
        _this.handlePressStart = function (_a) {
            var target = _a.target;
            _this.clearTimeout();
            if (target == null) {
                return;
            }
            var url = closestUrlFromNode(target);
            if (url != null) {
                _this.setState({ url: url });
            }
        };
        _this.handlePointerLeave = function (_a) {
            var target = _a.target, relatedTarget = _a.relatedTarget;
            var url = _this.state.url;
            var _b = _this, timeout = _b.timeout, timeoutUrl = _b.timeoutUrl;
            if (target == null) {
                if (timeout) {
                    _this.clearTimeout();
                }
                return;
            }
            if (url == null && timeout == null) {
                return;
            }
            var closestUrl = closestUrlFromNode(target);
            var relatedUrl = relatedTarget && closestUrlFromNode(relatedTarget);
            if (timeout != null &&
                urlsEqual(closestUrl, timeoutUrl) &&
                !urlsEqual(relatedUrl, timeoutUrl)) {
                _this.clearTimeout();
            }
            if (urlsEqual(closestUrl, url) && !urlsEqual(relatedUrl, url)) {
                _this.setState({ url: undefined });
            }
        };
        _this.handlePointerEnter = function (_a) {
            var target = _a.target;
            if (target == null) {
                return;
            }
            var _b = _this, timeoutUrl = _b.timeoutUrl, timeout = _b.timeout;
            var url = closestUrlFromNode(target);
            if (url == null) {
                return;
            }
            if (timeout) {
                if (urlsEqual(url, timeoutUrl)) {
                    return;
                }
                else {
                    _this.clearTimeout();
                }
            }
            _this.timeoutUrl = url;
            _this.timeout = setTimeout(function () {
                _this.clearTimeout();
                _this.setState({ url: url });
            }, exports.INTENTION_DELAY_MS);
        };
        return _this;
    }
    ConnectedPrefetcher.prototype.render = function () {
        var url = this.state.url;
        var manager = this.props.manager;
        var preloadMarkup = url ? (react_1.default.createElement("div", { style: { visibility: 'hidden' } }, findMatches(manager.registered, url).map(function (_a, index) {
            var render = _a.render, path = _a.path;
            // eslint-disable-next-line react/no-array-index-key
            return react_1.default.createElement("div", { key: "" + path + index }, render(url));
        }))) : null;
        var expensiveListeners = this.prefetchAgressively ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(EventListener_1.EventListener, { passive: true, event: "mouseover", handler: this.handlePointerEnter }),
            react_1.default.createElement(EventListener_1.EventListener, { passive: true, event: "focusin", handler: this.handlePointerEnter }),
            react_1.default.createElement(EventListener_1.EventListener, { passive: true, event: "mouseout", handler: this.handlePointerLeave }),
            react_1.default.createElement(EventListener_1.EventListener, { passive: true, event: "focusout", handler: this.handlePointerLeave }))) : null;
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(EventListener_1.EventListener, { passive: true, event: "mousedown", handler: this.handlePressStart }),
            react_1.default.createElement(EventListener_1.EventListener, { passive: true, event: "touchstart", handler: this.handlePressStart }),
            expensiveListeners,
            preloadMarkup));
    };
    ConnectedPrefetcher.prototype.clearTimeout = function () {
        if (this.timeout != null) {
            clearTimeout(this.timeout);
            this.timeout = undefined;
            this.timeoutUrl = undefined;
        }
    };
    return ConnectedPrefetcher;
}(react_1.default.PureComponent));
function Prefetcher(props) {
    return (react_1.default.createElement(prefetch_1.PrefetchContext.Consumer, null, function (manager) { return react_1.default.createElement(ConnectedPrefetcher, tslib_1.__assign({}, props, { manager: manager })); }));
}
exports.Prefetcher = Prefetcher;
function shouldPrefetchAggressively() {
    return (typeof navigator === 'undefined' ||
        !('connection' in navigator) ||
        !navigator.connection.saveData);
}
function urlsEqual(first, second) {
    return ((first == null && first === second) ||
        (first != null && second != null && first.href === second.href));
}
function findMatches(records, url) {
    return tslib_1.__spread(records).filter(function (_a) {
        var match = _a.path;
        return matches(url, match);
    });
}
function matches(url, matcher) {
    return typeof matcher === 'string'
        ? matcher === url.pathname
        : matcher.test(url.pathname);
}
function closestUrlFromNode(element) {
    if (!(element instanceof HTMLElement)) {
        return undefined;
    }
    // data-href is a hack for resource list doing the <a> as a sibling
    var closestUrl = element.closest('[href], [data-href]');
    if (closestUrl == null || !(closestUrl instanceof HTMLElement)) {
        return undefined;
    }
    var url = closestUrl.getAttribute('href') || closestUrl.getAttribute('data-href');
    try {
        return url ? new URL(url, window.location.href) : undefined;
    }
    catch (error) {
        return undefined;
    }
}


/***/ }),

/***/ "./node_modules/@shopify/react-async/dist/component.js":
/*!*************************************************************!*\
  !*** ./node_modules/@shopify/react-async/dist/component.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var react_1 = tslib_1.__importStar(__webpack_require__(/*! react */ "react"));
var async_1 = __webpack_require__(/*! @shopify/async */ "./node_modules/@shopify/async/dist/index.js");
var react_idle_1 = __webpack_require__(/*! @shopify/react-idle */ "@shopify/react-idle");
var react_intersection_observer_1 = __webpack_require__(/*! @shopify/react-intersection-observer */ "@shopify/react-intersection-observer");
var react_hydrate_1 = __webpack_require__(/*! @shopify/react-hydrate */ "@shopify/react-hydrate");
var hooks_1 = __webpack_require__(/*! ./hooks */ "./node_modules/@shopify/react-async/dist/hooks.js");
var types_1 = __webpack_require__(/*! ./types */ "./node_modules/@shopify/react-async/dist/types.js");
function createAsyncComponent(_a) {
    var id = _a.id, load = _a.load, defer = _a.defer, deferHydration = _a.deferHydration, displayName = _a.displayName, _b = _a.renderLoading, renderLoading = _b === void 0 ? noopRender : _b, _c = _a.renderError, renderError = _c === void 0 ? defaultRenderError : _c, _d = _a.usePreload, useCustomPreload = _d === void 0 ? noopUse : _d, _e = _a.usePrefetch, useCustomPrefetch = _e === void 0 ? noopUse : _e, _f = _a.useKeepFresh, useCustomKeepFresh = _f === void 0 ? noopUse : _f;
    var resolver = async_1.createResolver({ id: id, load: load });
    var componentName = displayName || displayNameFromId(resolver.id);
    var deferred = defer != null;
    var progressivelyHydrated = deferHydration != null;
    var scriptTiming = deferred || progressivelyHydrated
        ? types_1.AssetTiming.CurrentPage
        : types_1.AssetTiming.Immediate;
    var stylesTiming = deferred
        ? types_1.AssetTiming.CurrentPage
        : types_1.AssetTiming.Immediate;
    function Async(props) {
        var _a = hooks_1.useAsync(resolver, {
            scripts: scriptTiming,
            styles: stylesTiming,
            immediate: !deferred,
        }), Component = _a.resolved, load = _a.load, loading = _a.loading, error = _a.error;
        var startedHydrated = react_1.useRef(react_hydrate_1.useHydrationManager().hydrated).current;
        if (error) {
            return renderError(error);
        }
        var loadingMarkup = null;
        if (progressivelyHydrated && !startedHydrated) {
            loadingMarkup = (react_1.default.createElement(Loader, { defer: deferHydration, load: load, props: props }));
        }
        else if (loading) {
            loadingMarkup = react_1.default.createElement(Loader, { defer: defer, load: load, props: props });
        }
        var contentMarkup = null;
        var rendered = Component ? react_1.default.createElement(Component, tslib_1.__assign({}, props)) : null;
        if (progressivelyHydrated && !startedHydrated) {
            contentMarkup = rendered ? (react_1.default.createElement(react_hydrate_1.Hydrator, { id: resolver.id }, rendered)) : (react_1.default.createElement(react_hydrate_1.Hydrator, { id: resolver.id }));
        }
        else if (loading) {
            contentMarkup = renderLoading(props);
        }
        else {
            contentMarkup = rendered;
        }
        return (react_1.default.createElement(react_1.default.Fragment, null,
            contentMarkup,
            loadingMarkup));
    }
    Async.displayName = "Async(" + componentName + ")";
    function usePreload(props) {
        var load = hooks_1.useAsync(resolver, {
            assets: types_1.AssetTiming.NextPage,
        }).load;
        var customPreload = useCustomPreload(props);
        return react_1.useCallback(function () {
            load();
            if (customPreload) {
                customPreload();
            }
        }, [load, customPreload]);
    }
    function usePrefetch(props) {
        var load = hooks_1.useAsync(resolver, {
            assets: types_1.AssetTiming.NextPage,
        }).load;
        var customPrefetch = useCustomPrefetch(props);
        return react_1.useCallback(function () {
            load();
            if (customPrefetch) {
                customPrefetch();
            }
        }, [load, customPrefetch]);
    }
    function useKeepFresh(props) {
        var load = hooks_1.useAsync(resolver, {
            assets: types_1.AssetTiming.NextPage,
        }).load;
        var customKeepFresh = useCustomKeepFresh(props);
        return react_1.useCallback(function () {
            load();
            if (customKeepFresh) {
                customKeepFresh();
            }
        }, [load, customKeepFresh]);
    }
    function Preload(options) {
        react_idle_1.useIdleCallback(usePreload(options));
        return null;
    }
    Preload.displayName = "Async.Preload(" + displayName + ")";
    function Prefetch(options) {
        var prefetch = usePrefetch(options);
        react_1.useEffect(function () {
            prefetch();
        }, [prefetch]);
        return null;
    }
    Prefetch.displayName = "Async.Prefetch(" + displayName + ")";
    function KeepFresh(options) {
        react_idle_1.useIdleCallback(useKeepFresh(options));
        return null;
    }
    KeepFresh.displayName = "Async.KeepFresh(" + displayName + ")";
    var FinalComponent = Async;
    Reflect.defineProperty(FinalComponent, 'resolver', {
        value: resolver,
        writable: false,
    });
    Reflect.defineProperty(FinalComponent, 'Preload', {
        value: Preload,
        writable: false,
    });
    Reflect.defineProperty(FinalComponent, 'Prefetch', {
        value: Prefetch,
        writable: false,
    });
    Reflect.defineProperty(FinalComponent, 'KeepFresh', {
        value: KeepFresh,
        writable: false,
    });
    Reflect.defineProperty(FinalComponent, 'usePreload', {
        value: usePreload,
        writable: false,
    });
    Reflect.defineProperty(FinalComponent, 'usePrefetch', {
        value: usePrefetch,
        writable: false,
    });
    Reflect.defineProperty(FinalComponent, 'useKeepFresh', {
        value: useKeepFresh,
        writable: false,
    });
    return FinalComponent;
}
exports.createAsyncComponent = createAsyncComponent;
function noopUse() {
    return function () { };
}
function noopRender() {
    return null;
}
var DEFAULT_DISPLAY_NAME = 'Component';
var FILENAME_REGEX = /([^/]*)\.\w+$/;
function displayNameFromId(id) {
    if (!id) {
        return DEFAULT_DISPLAY_NAME;
    }
    var match = id.match(FILENAME_REGEX);
    return match ? match[1] : DEFAULT_DISPLAY_NAME;
}
function defaultRenderError(error) {
    if (error) {
        throw error;
    }
    return null;
}
function Loader(_a) {
    var defer = _a.defer, load = _a.load, props = _a.props;
    var handleIntersection = react_1.useCallback(function (_a) {
        var _b = _a.isIntersecting, isIntersecting = _b === void 0 ? true : _b;
        if (isIntersecting) {
            load();
        }
    }, [load]);
    react_1.useEffect(function () {
        if (defer == null || defer === async_1.DeferTiming.Mount) {
            load();
        }
        else if (typeof defer === 'function' && defer(props)) {
            load();
        }
    }, [defer, load, props]);
    if (typeof defer === 'function') {
        return null;
    }
    switch (defer) {
        case async_1.DeferTiming.Idle:
            return react_1.default.createElement(react_idle_1.OnIdle, { perform: load });
        case async_1.DeferTiming.InViewport:
            return (react_1.default.createElement(react_intersection_observer_1.IntersectionObserver, { threshold: 0, onIntersectionChange: handleIntersection }));
        default:
            return null;
    }
}


/***/ }),

/***/ "./node_modules/@shopify/react-async/dist/context/assets.js":
/*!******************************************************************!*\
  !*** ./node_modules/@shopify/react-async/dist/context/assets.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
var types_1 = __webpack_require__(/*! ../types */ "./node_modules/@shopify/react-async/dist/types.js");
exports.EFFECT_ID = Symbol('react-async');
var AsyncAssetManager = /** @class */ (function () {
    function AsyncAssetManager() {
        var _this = this;
        this.effect = {
            id: exports.EFFECT_ID,
            betweenEachPass: function () {
                _this.assets.clear();
            },
        };
        this.assets = new Map();
    }
    AsyncAssetManager.prototype.used = function (timing) {
        if (timing === void 0) { timing = types_1.AssetTiming.Immediate; }
        var e_1, _a;
        var timingArray = Array.isArray(timing) ? timing : [timing];
        var assets = [];
        try {
            for (var _b = tslib_1.__values(this.assets), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = tslib_1.__read(_c.value, 2), asset = _d[0], _e = _d[1], scripts = _e.scripts, styles = _e.styles;
                var scriptsMatch = timingArray.includes(scripts);
                var stylesMatch = timingArray.includes(styles);
                if (stylesMatch || scriptsMatch) {
                    assets.push({ id: asset, scripts: scriptsMatch, styles: stylesMatch });
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return assets;
    };
    AsyncAssetManager.prototype.markAsUsed = function (id, timing) {
        if (timing === void 0) { timing = types_1.AssetTiming.Immediate; }
        var current = this.assets.get(id);
        var scripts = typeof timing === 'object' ? timing.scripts : timing;
        var styles = typeof timing === 'object' ? timing.styles : timing;
        if (current == null) {
            this.assets.set(id, {
                scripts: scripts || types_1.AssetTiming.Immediate,
                styles: styles || types_1.AssetTiming.Immediate,
            });
        }
        else {
            this.assets.set(id, {
                // the AssetTiming enum has values where the smallest value is
                // the lowest importance load, and the highest value is for assets
                // needed immediately. So, when a new asset comes in that has
                // already been recorded, we can take the maximum value to
                // keep only the highest priority timing for the asset.
                scripts: Math.max(scripts || current.scripts, current.styles),
                styles: Math.max(styles || current.styles, current.styles),
            });
        }
    };
    return AsyncAssetManager;
}());
exports.AsyncAssetManager = AsyncAssetManager;
exports.AsyncAssetContext = react_1.default.createContext(null);


/***/ }),

/***/ "./node_modules/@shopify/react-async/dist/context/prefetch.js":
/*!********************************************************************!*\
  !*** ./node_modules/@shopify/react-async/dist/context/prefetch.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
var PrefetchManager = /** @class */ (function () {
    function PrefetchManager(registered) {
        this.registered = new Set(registered);
    }
    PrefetchManager.prototype.register = function (registration) {
        var _this = this;
        this.registered.add(registration);
        return function () { return _this.registered.delete(registration); };
    };
    return PrefetchManager;
}());
exports.PrefetchManager = PrefetchManager;
exports.PrefetchContext = react_1.default.createContext(new PrefetchManager());


/***/ }),

/***/ "./node_modules/@shopify/react-async/dist/hooks.js":
/*!*********************************************************!*\
  !*** ./node_modules/@shopify/react-async/dist/hooks.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var react_1 = __webpack_require__(/*! react */ "react");
var react_effect_1 = __webpack_require__(/*! @shopify/react-effect */ "@shopify/react-effect");
var react_hooks_1 = __webpack_require__(/*! @shopify/react-hooks */ "@shopify/react-hooks");
var assets_1 = __webpack_require__(/*! ./context/assets */ "./node_modules/@shopify/react-async/dist/context/assets.js");
function usePreload() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var _a = tslib_1.__read(args, 2), asyncComponent = _a[0], _b = _a[1], options = _b === void 0 ? {} : _b;
    return asyncComponent.usePreload(options);
}
exports.usePreload = usePreload;
function usePrefetch() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var _a = tslib_1.__read(args, 2), asyncComponent = _a[0], _b = _a[1], options = _b === void 0 ? {} : _b;
    return asyncComponent.usePrefetch(options);
}
exports.usePrefetch = usePrefetch;
function useKeepFresh() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var _a = tslib_1.__read(args, 2), asyncComponent = _a[0], _b = _a[1], options = _b === void 0 ? {} : _b;
    return asyncComponent.useKeepFresh(options);
}
exports.useKeepFresh = useKeepFresh;
function useAsync(resolver, _a) {
    var _this = this;
    var _b = _a === void 0 ? {} : _a, assets = _b.assets, _c = _b.scripts, scripts = _c === void 0 ? assets : _c, _d = _b.styles, styles = _d === void 0 ? assets : _d, _e = _b.immediate, immediate = _e === void 0 ? true : _e;
    var _f = tslib_1.__read(react_1.useState(function () {
        return immediate || typeof window !== 'undefined' ? resolver.resolved : null;
    }), 2), value = _f[0], setValue = _f[1];
    var mounted = react_hooks_1.useMountedRef();
    var load = react_1.useCallback(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var resolved_1, error_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (value != null) {
                        return [2 /*return*/, value];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, resolver.resolve()];
                case 2:
                    resolved_1 = _a.sent();
                    if (mounted.current) {
                        // It's important to use the function form of setValue here.
                        // Resolved is going to be a function in most cases, since it's
                        // a React component. If you do not set it using the function form,
                        // React treats the component as the function that returns state,
                        // so it sets state with the result of manually calling the component
                        // (so, usually JSX).
                        setValue(function () { return resolved_1; });
                    }
                    return [2 /*return*/, resolved_1];
                case 3:
                    error_1 = _a.sent();
                    if (mounted.current) {
                        setValue(error_1);
                    }
                    return [2 /*return*/, error_1];
                case 4: return [2 /*return*/];
            }
        });
    }); }, [mounted, resolver, value]);
    var id = resolver.id;
    useAsyncAsset(id, { scripts: scripts, styles: styles });
    return value instanceof Error
        ? { id: id, resolved: null, error: value, loading: false, load: load }
        : {
            id: id,
            resolved: value,
            error: null,
            loading: value == null,
            load: load,
        };
}
exports.useAsync = useAsync;
function useAsyncAsset(id, _a) {
    var _b = _a === void 0 ? {} : _a, scripts = _b.scripts, styles = _b.styles;
    var async = react_1.useContext(assets_1.AsyncAssetContext);
    react_effect_1.useServerEffect(function () {
        if (async && id) {
            async.markAsUsed(id, { scripts: scripts, styles: styles });
        }
    }, async ? async.effect : undefined);
}
exports.useAsyncAsset = useAsyncAsset;


/***/ }),

/***/ "./node_modules/@shopify/react-async/dist/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@shopify/react-async/dist/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var async_1 = __webpack_require__(/*! @shopify/async */ "./node_modules/@shopify/async/dist/index.js");
exports.DeferTiming = async_1.DeferTiming;
tslib_1.__exportStar(__webpack_require__(/*! ./types */ "./node_modules/@shopify/react-async/dist/types.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./hooks */ "./node_modules/@shopify/react-async/dist/hooks.js"), exports);
var Prefetcher_1 = __webpack_require__(/*! ./Prefetcher */ "./node_modules/@shopify/react-async/dist/Prefetcher.js");
exports.Prefetcher = Prefetcher_1.Prefetcher;
var PrefetchRoute_1 = __webpack_require__(/*! ./PrefetchRoute */ "./node_modules/@shopify/react-async/dist/PrefetchRoute.js");
exports.PrefetchRoute = PrefetchRoute_1.PrefetchRoute;
var component_1 = __webpack_require__(/*! ./component */ "./node_modules/@shopify/react-async/dist/component.js");
exports.createAsyncComponent = component_1.createAsyncComponent;
var provider_1 = __webpack_require__(/*! ./provider */ "./node_modules/@shopify/react-async/dist/provider.js");
exports.createAsyncContext = provider_1.createAsyncContext;
var assets_1 = __webpack_require__(/*! ./context/assets */ "./node_modules/@shopify/react-async/dist/context/assets.js");
exports.AsyncAssetContext = assets_1.AsyncAssetContext;
exports.AsyncAssetManager = assets_1.AsyncAssetManager;
var prefetch_1 = __webpack_require__(/*! ./context/prefetch */ "./node_modules/@shopify/react-async/dist/context/prefetch.js");
exports.PrefetchContext = prefetch_1.PrefetchContext;
exports.PrefetchManager = prefetch_1.PrefetchManager;


/***/ }),

/***/ "./node_modules/@shopify/react-async/dist/provider.js":
/*!************************************************************!*\
  !*** ./node_modules/@shopify/react-async/dist/provider.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var react_1 = tslib_1.__importStar(__webpack_require__(/*! react */ "react"));
var async_1 = __webpack_require__(/*! @shopify/async */ "./node_modules/@shopify/async/dist/index.js");
var react_idle_1 = __webpack_require__(/*! @shopify/react-idle */ "@shopify/react-idle");
var hooks_1 = __webpack_require__(/*! ./hooks */ "./node_modules/@shopify/react-async/dist/hooks.js");
var types_1 = __webpack_require__(/*! ./types */ "./node_modules/@shopify/react-async/dist/types.js");
function createAsyncContext(_a) {
    var id = _a.id, load = _a.load;
    var resolver = async_1.createResolver({ id: id, load: load });
    var Context = react_1.default.createContext(null);
    // Just like a "normal" value returned from `createContext`, rendering
    // the value itself is not supported. This component is just a placeholder
    // to provide a more useful error.
    function Root() {
        throw new Error('Do not attempt to render the result of calling `createAsyncContext()` directly. Render its `.Provider` component instead.');
    }
    function Provider(props) {
        var _a = hooks_1.useAsync(resolver, {
            assets: types_1.AssetTiming.Immediate,
        }), load = _a.load, resolved = _a.resolved;
        react_1.useEffect(function () {
            load();
        }, [load]);
        return react_1.default.createElement(Context.Provider, tslib_1.__assign({ value: resolved }, props));
    }
    function Consumer(props) {
        return react_1.default.createElement(Context.Consumer, tslib_1.__assign({}, props));
    }
    function usePreload() {
        return hooks_1.useAsync(resolver, {
            assets: types_1.AssetTiming.NextPage,
        }).load;
    }
    function Preload() {
        var preload = usePreload();
        react_idle_1.useIdleCallback(preload);
        return null;
    }
    function Prefetch() {
        var preload = usePreload();
        react_1.useEffect(function () {
            preload();
        }, [preload]);
        return null;
    }
    var FinalComponent = Root;
    Reflect.defineProperty(FinalComponent, 'resolver', {
        value: resolver,
        writable: false,
    });
    Reflect.defineProperty(FinalComponent, 'Provider', {
        value: Provider,
        writable: false,
    });
    Reflect.defineProperty(FinalComponent, 'Consumer', {
        value: Consumer,
        writable: false,
    });
    Reflect.defineProperty(FinalComponent, 'Context', {
        value: Context,
        writable: false,
    });
    Reflect.defineProperty(FinalComponent, 'Preload', {
        value: Preload,
        writable: false,
    });
    Reflect.defineProperty(FinalComponent, 'Prefetch', {
        value: Prefetch,
        writable: false,
    });
    Reflect.defineProperty(FinalComponent, 'KeepFresh', {
        value: Preload,
        writable: false,
    });
    Reflect.defineProperty(FinalComponent, 'usePreload', {
        value: usePreload,
        writable: false,
    });
    Reflect.defineProperty(FinalComponent, 'usePrefetch', {
        value: usePreload,
        writable: false,
    });
    Reflect.defineProperty(FinalComponent, 'useKeepFresh', {
        value: usePreload,
        writable: false,
    });
    return FinalComponent;
}
exports.createAsyncContext = createAsyncContext;


/***/ }),

/***/ "./node_modules/@shopify/react-async/dist/types.js":
/*!*********************************************************!*\
  !*** ./node_modules/@shopify/react-async/dist/types.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AssetTiming;
(function (AssetTiming) {
    AssetTiming[AssetTiming["None"] = 1] = "None";
    AssetTiming[AssetTiming["NextPage"] = 2] = "NextPage";
    AssetTiming[AssetTiming["CurrentPage"] = 3] = "CurrentPage";
    AssetTiming[AssetTiming["Immediate"] = 4] = "Immediate";
})(AssetTiming = exports.AssetTiming || (exports.AssetTiming = {}));


/***/ }),

/***/ "./node_modules/@shopify/react-csrf-universal-provider/dist/CsrfUniversalProvider.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@shopify/react-csrf-universal-provider/dist/CsrfUniversalProvider.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_universal_provider_1 = __webpack_require__(/*! @shopify/react-universal-provider */ "@shopify/react-universal-provider");
var react_csrf_1 = __webpack_require__(/*! @shopify/react-csrf */ "./node_modules/@shopify/react-csrf/dist/index.js");
exports.CsrfUniversalProvider = react_universal_provider_1.createUniversalProvider('csrf-token', react_csrf_1.CsrfTokenContext);


/***/ }),

/***/ "./node_modules/@shopify/react-csrf-universal-provider/dist/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@shopify/react-csrf-universal-provider/dist/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CsrfUniversalProvider_1 = __webpack_require__(/*! ./CsrfUniversalProvider */ "./node_modules/@shopify/react-csrf-universal-provider/dist/CsrfUniversalProvider.js");
exports.CsrfUniversalProvider = CsrfUniversalProvider_1.CsrfUniversalProvider;


/***/ }),

/***/ "./node_modules/@shopify/react-csrf/dist/context.js":
/*!**********************************************************!*\
  !*** ./node_modules/@shopify/react-csrf/dist/context.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
exports.CsrfTokenContext = react_1.createContext(null);


/***/ }),

/***/ "./node_modules/@shopify/react-csrf/dist/hooks.js":
/*!********************************************************!*\
  !*** ./node_modules/@shopify/react-csrf/dist/hooks.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var context_1 = __webpack_require__(/*! ./context */ "./node_modules/@shopify/react-csrf/dist/context.js");
function useCsrfToken() {
    var csrf = react_1.useContext(context_1.CsrfTokenContext);
    if (csrf == null) {
        throw new Error('No CSRF token found in context.');
    }
    return csrf;
}
exports.useCsrfToken = useCsrfToken;


/***/ }),

/***/ "./node_modules/@shopify/react-csrf/dist/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@shopify/react-csrf/dist/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var context_1 = __webpack_require__(/*! ./context */ "./node_modules/@shopify/react-csrf/dist/context.js");
exports.CsrfTokenContext = context_1.CsrfTokenContext;
var hooks_1 = __webpack_require__(/*! ./hooks */ "./node_modules/@shopify/react-csrf/dist/hooks.js");
exports.useCsrfToken = hooks_1.useCsrfToken;


/***/ }),

/***/ "./node_modules/@shopify/react-server/dist/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@shopify/react-server/dist/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __webpack_require__(/*! ./server */ "./node_modules/@shopify/react-server/dist/server/index.js");
exports.createServer = server_1.createServer;
var render_1 = __webpack_require__(/*! ./render */ "./node_modules/@shopify/react-server/dist/render/index.js");
exports.createRender = render_1.createRender;
var logger_1 = __webpack_require__(/*! ./logger */ "./node_modules/@shopify/react-server/dist/logger/index.js");
exports.requestLogger = logger_1.requestLogger;
var providers_1 = __webpack_require__(/*! ./providers */ "./node_modules/@shopify/react-server/dist/providers/index.js");
exports.DefaultProvider = providers_1.DefaultProvider;
exports.createCombinedProvider = providers_1.createCombinedProvider;


/***/ }),

/***/ "./node_modules/@shopify/react-server/dist/logger/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@shopify/react-server/dist/logger/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = __webpack_require__(/*! ./logger */ "./node_modules/@shopify/react-server/dist/logger/logger.js");
exports.requestLogger = logger_1.requestLogger;
exports.Logger = logger_1.Logger;
exports.getLogger = logger_1.getLogger;


/***/ }),

/***/ "./node_modules/@shopify/react-server/dist/logger/logger.js":
/*!******************************************************************!*\
  !*** ./node_modules/@shopify/react-server/dist/logger/logger.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var chalk_1 = tslib_1.__importDefault(__webpack_require__(/*! chalk */ "chalk"));
exports.LOGGER = Symbol('logger');
var PREFIX = chalk_1.default.underline('[React Server] ');
var Logger = /** @class */ (function () {
    function Logger() {
        this.buffer = '';
        this.logger = console;
    }
    Logger.prototype.log = function (message) {
        if (true) {
            this.logger.log("" + PREFIX + message);
        }
        else {}
    };
    return Logger;
}());
exports.Logger = Logger;
function setLogger(ctx, logger) {
    ctx.state[exports.LOGGER] = logger;
}
exports.setLogger = setLogger;
function getLogger(ctx) {
    return ctx.state[exports.LOGGER];
}
exports.getLogger = getLogger;
function initialRequestMessage(request) {
    var requestMethod = request.method.toUpperCase() + " \"" + request.url + "\"";
    return "Started " + requestMethod + " at " + new Date().toISOString();
}
function endRequestMessage(ctx, requestDuration) {
    var httpStatus = ctx.status + " " + (ctx.message || '');
    var duration = requestDuration.toFixed(0) + "ms";
    return "Completed " + httpStatus + " at " + new Date().toISOString() + " in " + duration;
}
function endRequest(ctx, requestDuration) {
    var logger = getLogger(ctx);
    logger.log(endRequestMessage(ctx, requestDuration));
    if (true) {
        return;
    }
    /* eslint-disable babel/camelcase */
    var logObject = {
        datetime: new Date().toISOString(),
        http_method: ctx.method.toUpperCase(),
        http_response: ctx.message || '',
        http_status: ctx.status,
        uri: ctx.originalUrl,
        user_agent: ctx.header['User-Agent'],
        payload: logger.buffer,
    };
    /* eslint-enable babel/camelcase */
    // eslint-disable-next-line no-console
    console.log(JSON.stringify(logObject, undefined,  false ? undefined : 2));
}
function requestDuration(requestStartTime) {
    var duration = process.hrtime(requestStartTime);
    var ms = duration[0] * 1000 + duration[1] / 1e6;
    return Math.round(ms);
}
function requestLogger(ctx, next) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var requestStartTime, logger, error_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    requestStartTime = process.hrtime();
                    setLogger(ctx, new Logger());
                    logger = getLogger(ctx);
                    logger.log(initialRequestMessage(ctx.request));
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, next()];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 3:
                    error_1 = _a.sent();
                    logger.log('Error during server execution, see details below.');
                    logger.log("" + (error_1.stack || error_1.message || 'No stack trace was present'));
                    return [3 /*break*/, 5];
                case 4:
                    endRequest(ctx, requestDuration(requestStartTime));
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.requestLogger = requestLogger;


/***/ }),

/***/ "./node_modules/@shopify/react-server/dist/metrics/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@shopify/react-server/dist/metrics/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var metrics_1 = __webpack_require__(/*! ./metrics */ "./node_modules/@shopify/react-server/dist/metrics/metrics.js");
exports.metricsMiddleware = metrics_1.metricsMiddleware;


/***/ }),

/***/ "./node_modules/@shopify/react-server/dist/metrics/metrics.js":
/*!********************************************************************!*\
  !*** ./node_modules/@shopify/react-server/dist/metrics/metrics.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var koa_compose_1 = tslib_1.__importDefault(__webpack_require__(/*! koa-compose */ "koa-compose"));
var MILLIS_PER_SECOND = 1000;
var NANOS_PER_MILLIS = 1e6;
var START_TIME_STATE_KEY = Symbol('startTime');
function startRequestTiming(ctx, next) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ctx.state[START_TIME_STATE_KEY] = process.hrtime();
                    return [4 /*yield*/, next()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function middleware(ctx, next) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var _a, seconds, nanoseconds, ms, requestTime, uiMetrics;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, , 2, 3]);
                    return [4 /*yield*/, next()];
                case 1:
                    _b.sent();
                    return [3 /*break*/, 3];
                case 2:
                    _a = tslib_1.__read(process.hrtime(ctx.state[START_TIME_STATE_KEY]), 2), seconds = _a[0], nanoseconds = _a[1];
                    ms = seconds * MILLIS_PER_SECOND + nanoseconds / NANOS_PER_MILLIS;
                    requestTime = Math.round(ms);
                    uiMetrics = "ui;request_time=" + requestTime;
                    ctx.set('Server-Timing', uiMetrics);
                    return [7 /*endfinally*/];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.metricsMiddleware = koa_compose_1.default([startRequestTiming, middleware]);


/***/ }),

/***/ "./node_modules/@shopify/react-server/dist/ping/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@shopify/react-server/dist/ping/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ping_1 = __webpack_require__(/*! ./ping */ "./node_modules/@shopify/react-server/dist/ping/ping.js");
exports.ping = ping_1.ping;


/***/ }),

/***/ "./node_modules/@shopify/react-server/dist/ping/ping.js":
/*!**************************************************************!*\
  !*** ./node_modules/@shopify/react-server/dist/ping/ping.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var network_1 = __webpack_require__(/*! @shopify/network */ "@shopify/network");
function ping(ctx) {
    ctx.status = network_1.StatusCode.Ok;
    ctx.body = 'Pong';
}
exports.ping = ping;


/***/ }),

/***/ "./node_modules/@shopify/react-server/dist/providers/ConditionalProvider.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@shopify/react-server/dist/providers/ConditionalProvider.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
function ConditionalProvider(_a) {
    var condition = _a.condition, Provider = _a.provider, props = _a.props, children = _a.children;
    if (condition) {
        return react_1.default.createElement(Provider, tslib_1.__assign({}, props), children);
    }
    return children || null;
}
exports.ConditionalProvider = ConditionalProvider;


/***/ }),

/***/ "./node_modules/@shopify/react-server/dist/providers/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@shopify/react-server/dist/providers/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var providers_1 = __webpack_require__(/*! ./providers */ "./node_modules/@shopify/react-server/dist/providers/providers.js");
exports.DefaultProvider = providers_1.DefaultProvider;
exports.createCombinedProvider = providers_1.createCombinedProvider;


/***/ }),

/***/ "./node_modules/@shopify/react-server/dist/providers/providers.js":
/*!************************************************************************!*\
  !*** ./node_modules/@shopify/react-server/dist/providers/providers.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
var react_network_1 = __webpack_require__(/*! @shopify/react-network */ "@shopify/react-network");
var react_csrf_universal_provider_1 = __webpack_require__(/*! @shopify/react-csrf-universal-provider */ "./node_modules/@shopify/react-csrf-universal-provider/dist/index.js");
var ConditionalProvider_1 = __webpack_require__(/*! ./ConditionalProvider */ "./node_modules/@shopify/react-server/dist/providers/ConditionalProvider.js");
function createCombinedProvider(options) {
    var _a = (options || {}).csrf, csrf = _a === void 0 ? true : _a;
    return function CombinedProvider(_a) {
        var children = _a.children;
        var csrfToken = react_network_1.useRequestHeader('x-csrf-token') || '';
        return (react_1.default.createElement(ConditionalProvider_1.ConditionalProvider, { provider: react_csrf_universal_provider_1.CsrfUniversalProvider, condition: csrf, props: { value: csrfToken } }, children));
    };
}
exports.createCombinedProvider = createCombinedProvider;
exports.DefaultProvider = createCombinedProvider();


/***/ }),

/***/ "./node_modules/@shopify/react-server/dist/render/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@shopify/react-server/dist/render/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var render_1 = __webpack_require__(/*! ./render */ "./node_modules/@shopify/react-server/dist/render/render.js");
exports.createRender = render_1.createRender;


/***/ }),

/***/ "./node_modules/@shopify/react-server/dist/render/render.js":
/*!******************************************************************!*\
  !*** ./node_modules/@shopify/react-server/dist/render/render.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
var server_1 = __webpack_require__(/*! @shopify/react-html/server */ "@shopify/react-html/server");
var server_2 = __webpack_require__(/*! @shopify/react-network/server */ "@shopify/react-network/server");
var react_hydrate_1 = __webpack_require__(/*! @shopify/react-hydrate */ "@shopify/react-hydrate");
var server_3 = __webpack_require__(/*! @shopify/react-effect/server */ "@shopify/react-effect/server");
var react_async_1 = __webpack_require__(/*! @shopify/react-async */ "./node_modules/@shopify/react-async/dist/index.js");
var react_network_1 = __webpack_require__(/*! @shopify/react-network */ "@shopify/react-network");
var sewing_kit_koa_1 = __webpack_require__(/*! @shopify/sewing-kit-koa */ "@shopify/sewing-kit-koa");
var logger_1 = __webpack_require__(/*! ../logger */ "./node_modules/@shopify/react-server/dist/logger/index.js");
/**
 * Creates a Koa middleware for rendering an `@shopify/react-html` based React application defined by `options.render`.
 * @param render
 */
function createRender(render, options) {
    if (options === void 0) { options = {}; }
    return function renderFunction(ctx) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            function Providers(_a) {
                var children = _a.children;
                return (react_1.default.createElement(react_async_1.AsyncAssetContext.Provider, { value: asyncAssetManager },
                    react_1.default.createElement(react_hydrate_1.HydrationContext.Provider, { value: hydrationManager },
                        react_1.default.createElement(server_2.NetworkContext.Provider, { value: networkManager }, children))));
            }
            var logger, assets, networkManager, htmlManager, asyncAssetManager, hydrationManager, app, immediateAsyncAssets, _a, styles, scripts, response, error_1, errorMessage;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        logger = logger_1.getLogger(ctx) || console;
                        assets = sewing_kit_koa_1.getAssets(ctx);
                        networkManager = new server_2.NetworkManager({
                            headers: ctx.headers,
                        });
                        htmlManager = new server_1.HtmlManager();
                        asyncAssetManager = new react_async_1.AsyncAssetManager();
                        hydrationManager = new react_hydrate_1.HydrationManager();
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        app = render(ctx);
                        return [4 /*yield*/, server_3.extract(app, tslib_1.__assign({ decorate: function (element) {
                                    return (react_1.default.createElement(server_1.HtmlContext.Provider, { value: htmlManager },
                                        react_1.default.createElement(Providers, null, element)));
                                },
                                afterEachPass: function (_a) {
                                    var renderDuration = _a.renderDuration, resolveDuration = _a.resolveDuration, index = _a.index, finished = _a.finished;
                                    var pass = "Pass number " + index + " " + (finished ? ' (this was the final pass)' : '');
                                    var rendering = "Rendering took " + renderDuration + "ms";
                                    var resolving = "Resolving promises took " + resolveDuration + "ms";
                                    logger.log(pass);
                                    logger.log(rendering);
                                    logger.log(resolving);
                                } }, options))];
                    case 2:
                        _b.sent();
                        server_2.applyToContext(ctx, networkManager);
                        immediateAsyncAssets = asyncAssetManager.used(react_async_1.AssetTiming.Immediate);
                        return [4 /*yield*/, Promise.all([
                                assets.styles({ name: 'main', asyncAssets: immediateAsyncAssets }),
                                assets.scripts({ name: 'main', asyncAssets: immediateAsyncAssets }),
                            ])];
                    case 3:
                        _a = tslib_1.__read.apply(void 0, [_b.sent(), 2]), styles = _a[0], scripts = _a[1];
                        response = server_1.stream(react_1.default.createElement(server_1.Html, { manager: htmlManager, styles: styles, scripts: scripts },
                            react_1.default.createElement(Providers, null, app)));
                        ctx.set(react_network_1.Header.ContentType, 'text/html');
                        ctx.body = response;
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _b.sent();
                        errorMessage = "React server-side rendering error:\n" + (error_1.stack ||
                            error_1.message);
                        logger.log(errorMessage);
                        ctx.status = react_network_1.StatusCode.InternalServerError;
                        // eslint-disable-next-line no-process-env
                        if (true) {
                            ctx.body = errorMessage;
                        }
                        else {}
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
}
exports.createRender = createRender;


/***/ }),

/***/ "./node_modules/@shopify/react-server/dist/server/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@shopify/react-server/dist/server/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __webpack_require__(/*! ./server */ "./node_modules/@shopify/react-server/dist/server/server.js");
exports.createServer = server_1.createServer;


/***/ }),

/***/ "./node_modules/@shopify/react-server/dist/server/server.js":
/*!******************************************************************!*\
  !*** ./node_modules/@shopify/react-server/dist/server/server.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
__webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
var path_1 = __webpack_require__(/*! path */ "path");
var fs_extra_1 = __webpack_require__(/*! fs-extra */ "fs-extra");
var koa_1 = tslib_1.__importDefault(__webpack_require__(/*! koa */ "koa"));
var koa_compose_1 = tslib_1.__importDefault(__webpack_require__(/*! koa-compose */ "koa-compose"));
var koa_mount_1 = tslib_1.__importDefault(__webpack_require__(/*! koa-mount */ "koa-mount"));
var sewing_kit_koa_1 = __webpack_require__(/*! @shopify/sewing-kit-koa */ "@shopify/sewing-kit-koa");
var render_1 = __webpack_require__(/*! ../render */ "./node_modules/@shopify/react-server/dist/render/index.js");
var logger_1 = __webpack_require__(/*! ../logger */ "./node_modules/@shopify/react-server/dist/logger/index.js");
var metrics_1 = __webpack_require__(/*! ../metrics */ "./node_modules/@shopify/react-server/dist/metrics/index.js");
var ping_1 = __webpack_require__(/*! ../ping */ "./node_modules/@shopify/react-server/dist/ping/index.js");
var logger = console;
/**
 * Create a full Koa server for server rendering an `@shopify/react-html` based React application defined by `options.render`
 * @param options
 * @returns a Server instance
 */
function createServer(options) {
    var port = options.port, assetPrefix = options.assetPrefix, render = options.render, serverMiddleware = options.serverMiddleware, ip = options.ip;
    var app = new koa_1.default();
    var manifestPath = getManifestPath(process.cwd());
    app.use(koa_mount_1.default('/services/ping', ping_1.ping));
    app.use(logger_1.requestLogger);
    app.use(metrics_1.metricsMiddleware);
    app.use(sewing_kit_koa_1.middleware({ assetPrefix: assetPrefix, manifestPath: manifestPath }));
    if (serverMiddleware) {
        app.use(koa_compose_1.default(serverMiddleware));
    }
    app.use(render_1.createRender(render));
    return app.listen(port || 3000, function () {
        logger.log("started react-server on " + ip + ":" + port);
    });
}
exports.createServer = createServer;
function getManifestPath(root) {
    var gemFileExists = fs_extra_1.pathExistsSync(path_1.join(root, 'Gemfile'));
    if (!gemFileExists) {
        return;
    }
    // eslint-disable-next-line no-process-env
    return  true
        ? "tmp/sewing-kit/sewing-kit-manifest.json"
        : undefined;
}


/***/ }),

/***/ "./node_modules/@shopify/sewing-kit/node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/source-map-support/register.js":
/*!*****************************************************!*\
  !*** ./node_modules/source-map-support/register.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./ */ "./node_modules/source-map-support/source-map-support.js").install();


/***/ }),

/***/ "./node_modules/source-map-support/source-map-support.js":
/*!***************************************************************!*\
  !*** ./node_modules/source-map-support/source-map-support.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SourceMapConsumer = __webpack_require__(/*! source-map */ "source-map").SourceMapConsumer;
var path = __webpack_require__(/*! path */ "path");

var fs;
try {
  fs = __webpack_require__(/*! fs */ "fs");
  if (!fs.existsSync || !fs.readFileSync) {
    // fs doesn't have all methods we need
    fs = null;
  }
} catch (err) {
  /* nop */
}

var bufferFrom = __webpack_require__(/*! buffer-from */ "buffer-from");

// Only install once if called multiple times
var errorFormatterInstalled = false;
var uncaughtShimInstalled = false;

// If true, the caches are reset before a stack trace formatting operation
var emptyCacheBetweenOperations = false;

// Supports {browser, node, auto}
var environment = "auto";

// Maps a file path to a string containing the file contents
var fileContentsCache = {};

// Maps a file path to a source map for that file
var sourceMapCache = {};

// Regex for detecting source maps
var reSourceMap = /^data:application\/json[^,]+base64,/;

// Priority list of retrieve handlers
var retrieveFileHandlers = [];
var retrieveMapHandlers = [];

function isInBrowser() {
  if (environment === "browser")
    return true;
  if (environment === "node")
    return false;
  return ((typeof window !== 'undefined') && (typeof XMLHttpRequest === 'function') && !(window.require && window.module && window.process && window.process.type === "renderer"));
}

function hasGlobalProcessEventEmitter() {
  return ((typeof process === 'object') && (process !== null) && (typeof process.on === 'function'));
}

function handlerExec(list) {
  return function(arg) {
    for (var i = 0; i < list.length; i++) {
      var ret = list[i](arg);
      if (ret) {
        return ret;
      }
    }
    return null;
  };
}

var retrieveFile = handlerExec(retrieveFileHandlers);

retrieveFileHandlers.push(function(path) {
  // Trim the path to make sure there is no extra whitespace.
  path = path.trim();
  if (/^file:/.test(path)) {
    // existsSync/readFileSync can't handle file protocol, but once stripped, it works
    path = path.replace(/file:\/\/\/(\w:)?/, function(protocol, drive) {
      return drive ?
        '' : // file:///C:/dir/file -> C:/dir/file
        '/'; // file:///root-dir/file -> /root-dir/file
    });
  }
  if (path in fileContentsCache) {
    return fileContentsCache[path];
  }

  var contents = '';
  try {
    if (!fs) {
      // Use SJAX if we are in the browser
      var xhr = new XMLHttpRequest();
      xhr.open('GET', path, /** async */ false);
      xhr.send(null);
      if (xhr.readyState === 4 && xhr.status === 200) {
        contents = xhr.responseText;
      }
    } else if (fs.existsSync(path)) {
      // Otherwise, use the filesystem
      contents = fs.readFileSync(path, 'utf8');
    }
  } catch (er) {
    /* ignore any errors */
  }

  return fileContentsCache[path] = contents;
});

// Support URLs relative to a directory, but be careful about a protocol prefix
// in case we are in the browser (i.e. directories may start with "http://" or "file:///")
function supportRelativeURL(file, url) {
  if (!file) return url;
  var dir = path.dirname(file);
  var match = /^\w+:\/\/[^\/]*/.exec(dir);
  var protocol = match ? match[0] : '';
  var startPath = dir.slice(protocol.length);
  if (protocol && /^\/\w\:/.test(startPath)) {
    // handle file:///C:/ paths
    protocol += '/';
    return protocol + path.resolve(dir.slice(protocol.length), url).replace(/\\/g, '/');
  }
  return protocol + path.resolve(dir.slice(protocol.length), url);
}

function retrieveSourceMapURL(source) {
  var fileData;

  if (isInBrowser()) {
     try {
       var xhr = new XMLHttpRequest();
       xhr.open('GET', source, false);
       xhr.send(null);
       fileData = xhr.readyState === 4 ? xhr.responseText : null;

       // Support providing a sourceMappingURL via the SourceMap header
       var sourceMapHeader = xhr.getResponseHeader("SourceMap") ||
                             xhr.getResponseHeader("X-SourceMap");
       if (sourceMapHeader) {
         return sourceMapHeader;
       }
     } catch (e) {
     }
  }

  // Get the URL of the source map
  fileData = retrieveFile(source);
  var re = /(?:\/\/[@#][\s]*sourceMappingURL=([^\s'"]+)[\s]*$)|(?:\/\*[@#][\s]*sourceMappingURL=([^\s*'"]+)[\s]*(?:\*\/)[\s]*$)/mg;
  // Keep executing the search to find the *last* sourceMappingURL to avoid
  // picking up sourceMappingURLs from comments, strings, etc.
  var lastMatch, match;
  while (match = re.exec(fileData)) lastMatch = match;
  if (!lastMatch) return null;
  return lastMatch[1];
};

// Can be overridden by the retrieveSourceMap option to install. Takes a
// generated source filename; returns a {map, optional url} object, or null if
// there is no source map.  The map field may be either a string or the parsed
// JSON object (ie, it must be a valid argument to the SourceMapConsumer
// constructor).
var retrieveSourceMap = handlerExec(retrieveMapHandlers);
retrieveMapHandlers.push(function(source) {
  var sourceMappingURL = retrieveSourceMapURL(source);
  if (!sourceMappingURL) return null;

  // Read the contents of the source map
  var sourceMapData;
  if (reSourceMap.test(sourceMappingURL)) {
    // Support source map URL as a data url
    var rawData = sourceMappingURL.slice(sourceMappingURL.indexOf(',') + 1);
    sourceMapData = bufferFrom(rawData, "base64").toString();
    sourceMappingURL = source;
  } else {
    // Support source map URLs relative to the source URL
    sourceMappingURL = supportRelativeURL(source, sourceMappingURL);
    sourceMapData = retrieveFile(sourceMappingURL);
  }

  if (!sourceMapData) {
    return null;
  }

  return {
    url: sourceMappingURL,
    map: sourceMapData
  };
});

function mapSourcePosition(position) {
  var sourceMap = sourceMapCache[position.source];
  if (!sourceMap) {
    // Call the (overrideable) retrieveSourceMap function to get the source map.
    var urlAndMap = retrieveSourceMap(position.source);
    if (urlAndMap) {
      sourceMap = sourceMapCache[position.source] = {
        url: urlAndMap.url,
        map: new SourceMapConsumer(urlAndMap.map)
      };

      // Load all sources stored inline with the source map into the file cache
      // to pretend like they are already loaded. They may not exist on disk.
      if (sourceMap.map.sourcesContent) {
        sourceMap.map.sources.forEach(function(source, i) {
          var contents = sourceMap.map.sourcesContent[i];
          if (contents) {
            var url = supportRelativeURL(sourceMap.url, source);
            fileContentsCache[url] = contents;
          }
        });
      }
    } else {
      sourceMap = sourceMapCache[position.source] = {
        url: null,
        map: null
      };
    }
  }

  // Resolve the source URL relative to the URL of the source map
  if (sourceMap && sourceMap.map && typeof sourceMap.map.originalPositionFor === 'function') {
    var originalPosition = sourceMap.map.originalPositionFor(position);

    // Only return the original position if a matching line was found. If no
    // matching line is found then we return position instead, which will cause
    // the stack trace to print the path and line for the compiled file. It is
    // better to give a precise location in the compiled file than a vague
    // location in the original file.
    if (originalPosition.source !== null) {
      originalPosition.source = supportRelativeURL(
        sourceMap.url, originalPosition.source);
      return originalPosition;
    }
  }

  return position;
}

// Parses code generated by FormatEvalOrigin(), a function inside V8:
// https://code.google.com/p/v8/source/browse/trunk/src/messages.js
function mapEvalOrigin(origin) {
  // Most eval() calls are in this format
  var match = /^eval at ([^(]+) \((.+):(\d+):(\d+)\)$/.exec(origin);
  if (match) {
    var position = mapSourcePosition({
      source: match[2],
      line: +match[3],
      column: match[4] - 1
    });
    return 'eval at ' + match[1] + ' (' + position.source + ':' +
      position.line + ':' + (position.column + 1) + ')';
  }

  // Parse nested eval() calls using recursion
  match = /^eval at ([^(]+) \((.+)\)$/.exec(origin);
  if (match) {
    return 'eval at ' + match[1] + ' (' + mapEvalOrigin(match[2]) + ')';
  }

  // Make sure we still return useful information if we didn't find anything
  return origin;
}

// This is copied almost verbatim from the V8 source code at
// https://code.google.com/p/v8/source/browse/trunk/src/messages.js. The
// implementation of wrapCallSite() used to just forward to the actual source
// code of CallSite.prototype.toString but unfortunately a new release of V8
// did something to the prototype chain and broke the shim. The only fix I
// could find was copy/paste.
function CallSiteToString() {
  var fileName;
  var fileLocation = "";
  if (this.isNative()) {
    fileLocation = "native";
  } else {
    fileName = this.getScriptNameOrSourceURL();
    if (!fileName && this.isEval()) {
      fileLocation = this.getEvalOrigin();
      fileLocation += ", ";  // Expecting source position to follow.
    }

    if (fileName) {
      fileLocation += fileName;
    } else {
      // Source code does not originate from a file and is not native, but we
      // can still get the source position inside the source string, e.g. in
      // an eval string.
      fileLocation += "<anonymous>";
    }
    var lineNumber = this.getLineNumber();
    if (lineNumber != null) {
      fileLocation += ":" + lineNumber;
      var columnNumber = this.getColumnNumber();
      if (columnNumber) {
        fileLocation += ":" + columnNumber;
      }
    }
  }

  var line = "";
  var functionName = this.getFunctionName();
  var addSuffix = true;
  var isConstructor = this.isConstructor();
  var isMethodCall = !(this.isToplevel() || isConstructor);
  if (isMethodCall) {
    var typeName = this.getTypeName();
    // Fixes shim to be backward compatable with Node v0 to v4
    if (typeName === "[object Object]") {
      typeName = "null";
    }
    var methodName = this.getMethodName();
    if (functionName) {
      if (typeName && functionName.indexOf(typeName) != 0) {
        line += typeName + ".";
      }
      line += functionName;
      if (methodName && functionName.indexOf("." + methodName) != functionName.length - methodName.length - 1) {
        line += " [as " + methodName + "]";
      }
    } else {
      line += typeName + "." + (methodName || "<anonymous>");
    }
  } else if (isConstructor) {
    line += "new " + (functionName || "<anonymous>");
  } else if (functionName) {
    line += functionName;
  } else {
    line += fileLocation;
    addSuffix = false;
  }
  if (addSuffix) {
    line += " (" + fileLocation + ")";
  }
  return line;
}

function cloneCallSite(frame) {
  var object = {};
  Object.getOwnPropertyNames(Object.getPrototypeOf(frame)).forEach(function(name) {
    object[name] = /^(?:is|get)/.test(name) ? function() { return frame[name].call(frame); } : frame[name];
  });
  object.toString = CallSiteToString;
  return object;
}

function wrapCallSite(frame) {
  if(frame.isNative()) {
    return frame;
  }

  // Most call sites will return the source file from getFileName(), but code
  // passed to eval() ending in "//# sourceURL=..." will return the source file
  // from getScriptNameOrSourceURL() instead
  var source = frame.getFileName() || frame.getScriptNameOrSourceURL();
  if (source) {
    var line = frame.getLineNumber();
    var column = frame.getColumnNumber() - 1;

    // Fix position in Node where some (internal) code is prepended.
    // See https://github.com/evanw/node-source-map-support/issues/36
    var headerLength = 62;
    if (line === 1 && column > headerLength && !isInBrowser() && !frame.isEval()) {
      column -= headerLength;
    }

    var position = mapSourcePosition({
      source: source,
      line: line,
      column: column
    });
    frame = cloneCallSite(frame);
    var originalFunctionName = frame.getFunctionName;
    frame.getFunctionName = function() { return position.name || originalFunctionName(); };
    frame.getFileName = function() { return position.source; };
    frame.getLineNumber = function() { return position.line; };
    frame.getColumnNumber = function() { return position.column + 1; };
    frame.getScriptNameOrSourceURL = function() { return position.source; };
    return frame;
  }

  // Code called using eval() needs special handling
  var origin = frame.isEval() && frame.getEvalOrigin();
  if (origin) {
    origin = mapEvalOrigin(origin);
    frame = cloneCallSite(frame);
    frame.getEvalOrigin = function() { return origin; };
    return frame;
  }

  // If we get here then we were unable to change the source position
  return frame;
}

// This function is part of the V8 stack trace API, for more info see:
// https://v8.dev/docs/stack-trace-api
function prepareStackTrace(error, stack) {
  if (emptyCacheBetweenOperations) {
    fileContentsCache = {};
    sourceMapCache = {};
  }

  var name = error.name || 'Error';
  var message = error.message || '';
  var errorString = name + ": " + message;

  return errorString + stack.map(function(frame) {
    return '\n    at ' + wrapCallSite(frame);
  }).join('');
}

// Generate position and snippet of original source with pointer
function getErrorSource(error) {
  var match = /\n    at [^(]+ \((.*):(\d+):(\d+)\)/.exec(error.stack);
  if (match) {
    var source = match[1];
    var line = +match[2];
    var column = +match[3];

    // Support the inline sourceContents inside the source map
    var contents = fileContentsCache[source];

    // Support files on disk
    if (!contents && fs && fs.existsSync(source)) {
      try {
        contents = fs.readFileSync(source, 'utf8');
      } catch (er) {
        contents = '';
      }
    }

    // Format the line from the original source code like node does
    if (contents) {
      var code = contents.split(/(?:\r\n|\r|\n)/)[line - 1];
      if (code) {
        return source + ':' + line + '\n' + code + '\n' +
          new Array(column).join(' ') + '^';
      }
    }
  }
  return null;
}

function printErrorAndExit (error) {
  var source = getErrorSource(error);

  // Ensure error is printed synchronously and not truncated
  if (process.stderr._handle && process.stderr._handle.setBlocking) {
    process.stderr._handle.setBlocking(true);
  }

  if (source) {
    console.error();
    console.error(source);
  }

  console.error(error.stack);
  process.exit(1);
}

function shimEmitUncaughtException () {
  var origEmit = process.emit;

  process.emit = function (type) {
    if (type === 'uncaughtException') {
      var hasStack = (arguments[1] && arguments[1].stack);
      var hasListeners = (this.listeners(type).length > 0);

      if (hasStack && !hasListeners) {
        return printErrorAndExit(arguments[1]);
      }
    }

    return origEmit.apply(this, arguments);
  };
}

var originalRetrieveFileHandlers = retrieveFileHandlers.slice(0);
var originalRetrieveMapHandlers = retrieveMapHandlers.slice(0);

exports.wrapCallSite = wrapCallSite;
exports.getErrorSource = getErrorSource;
exports.mapSourcePosition = mapSourcePosition;
exports.retrieveSourceMap = retrieveSourceMap;

exports.install = function(options) {
  options = options || {};

  if (options.environment) {
    environment = options.environment;
    if (["node", "browser", "auto"].indexOf(environment) === -1) {
      throw new Error("environment " + environment + " was unknown. Available options are {auto, browser, node}")
    }
  }

  // Allow sources to be found by methods other than reading the files
  // directly from disk.
  if (options.retrieveFile) {
    if (options.overrideRetrieveFile) {
      retrieveFileHandlers.length = 0;
    }

    retrieveFileHandlers.unshift(options.retrieveFile);
  }

  // Allow source maps to be found by methods other than reading the files
  // directly from disk.
  if (options.retrieveSourceMap) {
    if (options.overrideRetrieveSourceMap) {
      retrieveMapHandlers.length = 0;
    }

    retrieveMapHandlers.unshift(options.retrieveSourceMap);
  }

  // Support runtime transpilers that include inline source maps
  if (options.hookRequire && !isInBrowser()) {
    var Module;
    try {
      Module = __webpack_require__(/*! module */ "module");
    } catch (err) {
      // NOP: Loading in catch block to convert webpack error to warning.
    }
    var $compile = Module.prototype._compile;

    if (!$compile.__sourceMapSupport) {
      Module.prototype._compile = function(content, filename) {
        fileContentsCache[filename] = content;
        sourceMapCache[filename] = undefined;
        return $compile.call(this, content, filename);
      };

      Module.prototype._compile.__sourceMapSupport = true;
    }
  }

  // Configure options
  if (!emptyCacheBetweenOperations) {
    emptyCacheBetweenOperations = 'emptyCacheBetweenOperations' in options ?
      options.emptyCacheBetweenOperations : false;
  }

  // Install the error reformatter
  if (!errorFormatterInstalled) {
    errorFormatterInstalled = true;
    Error.prepareStackTrace = prepareStackTrace;
  }

  if (!uncaughtShimInstalled) {
    var installHandler = 'handleUncaughtExceptions' in options ?
      options.handleUncaughtExceptions : true;

    // Provide the option to not install the uncaught exception handler. This is
    // to support other uncaught exception handlers (in test frameworks, for
    // example). If this handler is not installed and there are no other uncaught
    // exception handlers, uncaught exceptions will be caught by node's built-in
    // exception handler and the process will still be terminated. However, the
    // generated JavaScript code will be shown above the stack trace instead of
    // the original source code.
    if (installHandler && hasGlobalProcessEventEmitter()) {
      uncaughtShimInstalled = true;
      shimEmitUncaughtException();
    }
  }
};

exports.resetRetrieveHandlers = function() {
  retrieveFileHandlers.length = 0;
  retrieveMapHandlers.length = 0;

  retrieveFileHandlers = originalRetrieveFileHandlers.slice(0);
  retrieveMapHandlers = originalRetrieveMapHandlers.slice(0);
  
  retrieveSourceMap = handlerExec(retrieveMapHandlers);
  retrieveFile = handlerExec(retrieveFileHandlers);
}


/***/ }),

/***/ 0:
/*!*********************************************************!*\
  !*** multi source-map-support/register ./app/ui/server ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! source-map-support/register */"./node_modules/source-map-support/register.js");
module.exports = __webpack_require__(/*! /Users/adriancorcoran/Repos/github.com/AdrianCorcoran/test-quilt-adrian/app/ui/server */"./app/ui/server.js");


/***/ }),

/***/ "@shopify/javascript-utilities/events":
/*!*******************************************************!*\
  !*** external "@shopify/javascript-utilities/events" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/javascript-utilities/events");

/***/ }),

/***/ "@shopify/network":
/*!***********************************!*\
  !*** external "@shopify/network" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/network");

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris");

/***/ }),

/***/ "@shopify/react-effect":
/*!****************************************!*\
  !*** external "@shopify/react-effect" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/react-effect");

/***/ }),

/***/ "@shopify/react-effect/server":
/*!***********************************************!*\
  !*** external "@shopify/react-effect/server" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/react-effect/server");

/***/ }),

/***/ "@shopify/react-hooks":
/*!***************************************!*\
  !*** external "@shopify/react-hooks" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/react-hooks");

/***/ }),

/***/ "@shopify/react-html/server":
/*!*********************************************!*\
  !*** external "@shopify/react-html/server" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/react-html/server");

/***/ }),

/***/ "@shopify/react-hydrate":
/*!*****************************************!*\
  !*** external "@shopify/react-hydrate" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/react-hydrate");

/***/ }),

/***/ "@shopify/react-idle":
/*!**************************************!*\
  !*** external "@shopify/react-idle" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/react-idle");

/***/ }),

/***/ "@shopify/react-intersection-observer":
/*!*******************************************************!*\
  !*** external "@shopify/react-intersection-observer" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/react-intersection-observer");

/***/ }),

/***/ "@shopify/react-network":
/*!*****************************************!*\
  !*** external "@shopify/react-network" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/react-network");

/***/ }),

/***/ "@shopify/react-network/server":
/*!************************************************!*\
  !*** external "@shopify/react-network/server" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/react-network/server");

/***/ }),

/***/ "@shopify/react-universal-provider":
/*!****************************************************!*\
  !*** external "@shopify/react-universal-provider" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/react-universal-provider");

/***/ }),

/***/ "@shopify/sewing-kit-koa":
/*!******************************************!*\
  !*** external "@shopify/sewing-kit-koa" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/sewing-kit-koa");

/***/ }),

/***/ "buffer-from":
/*!******************************!*\
  !*** external "buffer-from" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("buffer-from");

/***/ }),

/***/ "chalk":
/*!************************!*\
  !*** external "chalk" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "fs-extra":
/*!***************************!*\
  !*** external "fs-extra" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs-extra");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),

/***/ "koa-compose":
/*!******************************!*\
  !*** external "koa-compose" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-compose");

/***/ }),

/***/ "koa-mount":
/*!****************************!*\
  !*** external "koa-mount" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-mount");

/***/ }),

/***/ "module":
/*!*************************!*\
  !*** external "module" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("module");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "source-map":
/*!*****************************!*\
  !*** external "source-map" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("source-map");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ })

/******/ });