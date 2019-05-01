(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["index"] = factory();
	else
		root["xxx-components"] = root["xxx-components"] || {}, root["xxx-components"]["index"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./CheckEqual.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./CheckEqual.js":
/*!***********************!*\
  !*** ./CheckEqual.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var checkEqual = exports.checkEqual = function checkEqual(objA, objB) {
  if (!objA || !objB) return objA === objB;

  if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== (typeof objB === 'undefined' ? 'undefined' : _typeof(objB))) return false;

  if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) === 'object') {
    var _objectAIsArray = true,
        _objectBIsArray = true;

    if (!objA.hasOwnProperty('length')) _objectAIsArray = false;
    if (!objB.hasOwnProperty('length')) _objectBIsArray = false;

    if (_objectAIsArray !== _objectBIsArray) return false;

    if (_objectAIsArray && _objectBIsArray) {
      return checkArrayEqual(objA, objB);
    } else {
      return checkObjectEqual(objA, objB);
    }
  } else {
    return objA === objB;
  }
};

var checkArrayEqual = function checkArrayEqual(arrA, arrB) {
  if (arrA.length !== arrB.length) return false;
  var _equal = true;

  sortArray(arrA);
  sortArray(arrB);
  for (var i = 0, l = arrA.length; i < l; i++) {
    if (!checkEqual(arrA[i], arrB[i])) {
      _equal = false;
      break;
    }
  }
  return _equal;
};

var checkObjectEqual = function checkObjectEqual(objA, objB) {
  var _keysA = Object.keys(objA),
      _keysB = Object.keys(objB);

  if (_keysA.length !== _keysB.length) return false;
  var _equal = true;
  _keysA.forEach(function (key) {
    if (!checkEqual(objA[key], objB[key])) {
      _equal = false;
    }
  });
  return _equal;
};

var sortArray = function sortArray(arr) {
  arr.sort(function (a, b) {
    if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) !== (typeof b === 'undefined' ? 'undefined' : _typeof(b))) return 0;

    if (typeof a === 'number') return a - b;
    if (typeof a === 'string') {
      var _a = a.toUpperCase(),
          _b = b.toUpperCase();
      if (_a < _b) return -1;
      if (_a > _b) return 1;
      return 0;
    }

    return 0;
  });
};

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map