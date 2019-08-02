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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/node-fetch/browser.js":
/*!********************************************!*\
  !*** ./node_modules/node-fetch/browser.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// ref: https://github.com/tc39/proposal-global\nvar getGlobal = function () {\n\t// the only reliable means to get the global object is\n\t// `Function('return this')()`\n\t// However, this causes CSP violations in Chrome apps.\n\tif (typeof self !== 'undefined') { return self; }\n\tif (typeof window !== 'undefined') { return window; }\n\tif (typeof global !== 'undefined') { return global; }\n\tthrow new Error('unable to locate global object');\n}\n\nvar global = getGlobal();\n\nmodule.exports = exports = global.fetch;\n\n// Needed for TypeScript and Webpack.\nexports.default = global.fetch.bind(global);\n\nexports.Headers = global.Headers;\nexports.Request = global.Request;\nexports.Response = global.Response;\n\n//# sourceURL=webpack:///./node_modules/node-fetch/browser.js?");

/***/ }),

/***/ "./src/enums.js":
/*!**********************!*\
  !*** ./src/enums.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const actions = {}\r\n\r\nconst action = name => actions[name] = {name}\r\n\r\naction('EXISTS')\r\naction('READ')\r\naction('CREATE')\r\naction('UPDATE')\r\naction('DELETE')\r\n\r\nconst httpMethods = {}\r\n\r\nconst method = (name, action, hasBody) => {\r\n\thttpMethods[name] = {\r\n\t\tname,\r\n\t\taction,\r\n\t\thasBody,\r\n\t}\r\n}\r\n\r\nmethod('HEAD', actions.EXISTS, false)\r\nmethod('GET', actions.READ, false)\r\nmethod('POST', actions.CREATE, true)\r\nmethod('PUT', actions.UPDATE, true)\r\nmethod('PATCH', actions.UPDATE, true)\r\nmethod('DELETE', actions.DELETE, false)\r\n\r\nmodule.exports = {\r\n\tactions,\r\n\thttpMethods,\r\n}\r\n\n\n//# sourceURL=webpack:///./src/enums.js?");

/***/ }),

/***/ "./src/hey.js":
/*!********************!*\
  !*** ./src/hey.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const fetch = __webpack_require__(/*! node-fetch */ \"./node_modules/node-fetch/browser.js\")\r\nconst { httpMethods } = __webpack_require__(/*! ./enums */ \"./src/enums.js\")\r\n\r\nclass Hey{\r\n\r\n\tconstructor(url){\r\n\t\tthis.url = url\r\n\t\tthis.method = httpMethods.GET\r\n\t\tthis.headers = {}\r\n\t\tthis.body = this.method.hasBody ? {} : null\r\n\t\tthis.response = null\r\n\t}\r\n\t\r\n\t// Append to header (Note: if you want to replace headers, use forceHeaders\r\n\theaders(newHeaders){\r\n\t\tthis.headers = {...this.headers, ...newHeaders}\r\n\t\treturn this\r\n\t}\r\n\r\n\t// Append to body (Note: if you want to replace body, use forceBody\r\n\tbody(newBody){\r\n\t\tthis.body = {...this.body, ...newBody}\r\n\t\treturn this\r\n\t}\r\n\r\n\t// Set properties directly\t\r\n\turl(to){\r\n\t\tthis.url = to\r\n\t\treturn this\r\n\t}\r\n\turi(to){\r\n\t\treturn this.url(to)\r\n\t}\r\n\r\n\tmethod(m){\r\n\t\tthis.method = m\r\n\t\treturn this\r\n\t}\r\n\r\n\t// Force properties\r\n\tforceHeaders(headers){\r\n\t\tthis.headers = headers\r\n\t\treturn this\r\n\t}\r\n\r\n\tforceBody(body){\r\n\t\tthis.body = body\r\n\t\treturn this\r\n\t}\r\n\r\n\t// Clear properties\r\n\t// MAYBE it should clear everything, TODO: Thinkg 'bout it\r\n\tclear(){\r\n\t\tthis.headers = {}\r\n\t\tthis.body = null\r\n\t\tthis.response = null\r\n\t\treturn this\r\n\t}\r\n\r\n\tclearHeaders(){\r\n\t\tthis.headers = {}\r\n\t\treturn this\r\n\t}\r\n\r\n\tclearBody(){\r\n\t\tthis.body = this.method.hasBody ? {} : null\r\n\t\treturn this\r\n\t}\r\n\r\n\tclearResponse(){\r\n\t\tthis.response = null\r\n\t\treturn this\r\n\t}\r\n\r\n\t// HTTP Methods\r\n\thead(){\r\n\t\tthis.method = httpMethods.HEAD\r\n\t\treturn this\r\n\t}\r\n\r\n\tget(){\r\n\t\tthis.method = httpMethods.GET\t\t\r\n\t\treturn this\r\n\t}\r\n\r\n\tpost(){\r\n\t\tthis.method = httpMethods.POST\r\n\t\treturn this\r\n\t}\r\n\r\n\tput(){\r\n\t\tthis.method = httpMethods.PUT\r\n\t\treturn this\r\n\t}\r\n\r\n\tpatch(){\r\n\t\tthis.method = httpMethods.PATCH\r\n\t\treturn this\r\n\t}\r\n\r\n\tdelete(){\r\n\t\tthis.method = httpMethods.DELETE\r\n\t\treturn this\r\n\t}\r\n\r\n\t// Useful Headers shortcuts\r\n\t// Some of the Headers have alias. Ex: auth(...) and authorization(...)\r\n\t// Header properties are padronized as:\r\n\t// >> 'Header name': `Header properties and ${variables}`\r\n\t// All that just for better reading\r\n\t\r\n\tauth(token){\r\n\t\treturn this.headers({\r\n\t\t\t'Authorization': `${token}`\r\n\t\t})\t\r\n\t}\r\n\tauthorization(token){return this.auth(token)}\r\n\r\n\tcontentType(type){\r\n\t\treturn this.headers({\r\n\t\t\t'Content-Type': `${type}`\r\n\t\t})\r\n\t}\r\n\r\n\taccept(type){\r\n\t\treturn this.headers({\r\n\t\t\t'Accept': `${type}`\r\n\t\t})\r\n\t}\r\n\r\n\t// ... \r\n\t// ... More headers are going to be added eventyally when they're needed.\r\n\t// ...\r\n\r\n\t// Get response from last search\r\n\tres(){\r\n\t\tif(this.response)\r\n\t\t\treturn this.response\r\n\t\tHey.error('Ńo response.')\r\n\t}\r\n\r\n\t// Format configuration and execute request\r\n\tasync do(){\r\n\t\tconsole.log(`The method ${this.method.name} was called on url: ${this.url}`)\r\n\t\ttry{\r\n\t\t\tthis.response = fetch(this.url, this.config())\r\n\t\t\treturn this.res()\r\n\t\t}catch(err){\r\n\t\t\tHey.error('Faied to fetch. :/', err)\r\n\t\t}\r\n\t\treturn this\r\n\t}\r\n\r\n\t// Format configuration\r\n\tconfig(){\r\n\t\tconst options = {}\r\n\t\tconst headers = this.headers\r\n\t\tconst body = this.body\r\n\t\tconst { name: method, hasBody } = this.method\r\n\r\n\t\toptions.method = method\r\n\t\toptions.headers = headers\r\n\r\n\t\tif (hasBody)\r\n\t\t\toptions.body = JSON.stringify(body)\r\n\t\telse if (!hasBody && body)\r\n\t\t\tHey.error(`The method ${method} doesn't allow a body. :/`)\r\n\r\n\t}\r\n\t\r\n\t// Call error logger\r\n\tstatic error(msg, err=null){\r\n\t\t// Logger in the future\r\n\t\tconsole.error(msg)\r\n\t\tconsole.error(err)\r\n\t}\r\n\r\n}\r\n\r\nfunction hey(url){\r\n\treturn new Hey(url)\r\n}\r\n\r\nmodule.exports = hey\r\n\n\n//# sourceURL=webpack:///./src/hey.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./hey */ \"./src/hey.js\")\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });