'use strict';

var obsidian = require('obsidian');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_1(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

var _assocIndexOf = assocIndexOf;

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete;

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet;

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas;

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

var _listCacheSet = listCacheSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear;
ListCache.prototype['delete'] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;

var _ListCache = ListCache;

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new _ListCache;
  this.size = 0;
}

var _stackClear = stackClear;

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

var _stackDelete = stackDelete;

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

var _stackGet = stackGet;

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

var _stackHas = stackHas;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/** Built-in value references. */
var Symbol$1 = _root.Symbol;

var _Symbol = Symbol$1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag$1 && symToStringTag$1 in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject_1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction;

/** Used to detect overreaching core-js shims. */
var coreJsData = _root['__core-js_shared__'];

var _coreJsData = coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked;

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype,
    objectProto$2 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject_1(value) || _isMasked(value)) {
    return false;
  }
  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

var _baseIsNative = baseIsNative;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

var _getNative = getNative;

/* Built-in method references that are verified to be native. */
var Map = _getNative(_root, 'Map');

var _Map = Map;

/* Built-in method references that are verified to be native. */
var nativeCreate = _getNative(Object, 'create');

var _nativeCreate = nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}

var _hashClear = hashClear;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty$2.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet;

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate ? (data[key] !== undefined) : hasOwnProperty$3.call(data, key);
}

var _hashHas = hashHas;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
  return this;
}

var _hashSet = hashSet;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear;
Hash.prototype['delete'] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;

var _Hash = Hash;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash,
    'map': new (_Map || _ListCache),
    'string': new _Hash
  };
}

var _mapCacheClear = mapCacheClear;

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

var _isKeyable = isKeyable;

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return _isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

var _getMapData = getMapData;

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = _getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete;

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}

var _mapCacheGet = mapCacheGet;

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}

var _mapCacheHas = mapCacheHas;

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = _getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype['delete'] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;

var _MapCache = MapCache;

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof _ListCache) {
    var pairs = data.__data__;
    if (!_Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new _MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

var _stackSet = stackSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new _ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = _stackClear;
Stack.prototype['delete'] = _stackDelete;
Stack.prototype.get = _stackGet;
Stack.prototype.has = _stackHas;
Stack.prototype.set = _stackSet;

var _Stack = Stack;

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

var _arrayEach = arrayEach;

var defineProperty = (function() {
  try {
    var func = _getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

var _defineProperty = defineProperty;

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && _defineProperty) {
    _defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

var _baseAssignValue = baseAssignValue;

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$4.call(object, key) && eq_1(objValue, value)) ||
      (value === undefined && !(key in object))) {
    _baseAssignValue(object, key, value);
  }
}

var _assignValue = assignValue;

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      _baseAssignValue(object, key, newValue);
    } else {
      _assignValue(object, key, newValue);
    }
  }
  return object;
}

var _copyObject = copyObject;

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

var _baseTimes = baseTimes;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
}

var _baseIsArguments = baseIsArguments;

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$6.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
  return isObjectLike_1(value) && hasOwnProperty$5.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

var isArguments_1 = isArguments;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

var isArray_1 = isArray;

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;

var isBuffer_1 = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports =  exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse_1;

module.exports = isBuffer;
});

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

var _isIndex = isIndex;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}

var isLength_1 = isLength;

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag$1 = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag$1] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike_1(value) &&
    isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
}

var _baseIsTypedArray = baseIsTypedArray;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

var _baseUnary = baseUnary;

var _nodeUtil = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports =  exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;
});

/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

var isTypedArray_1 = isTypedArray;

/** Used for built-in method references. */
var objectProto$7 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$6 = objectProto$7.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray_1(value),
      isArg = !isArr && isArguments_1(value),
      isBuff = !isArr && !isArg && isBuffer_1(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? _baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$6.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           _isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

var _arrayLikeKeys = arrayLikeKeys;

/** Used for built-in method references. */
var objectProto$8 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$8;

  return value === proto;
}

var _isPrototype = isPrototype;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = _overArg(Object.keys, Object);

var _nativeKeys = nativeKeys;

/** Used for built-in method references. */
var objectProto$9 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$7 = objectProto$9.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!_isPrototype(object)) {
    return _nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$7.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

var _baseKeys = baseKeys;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength_1(value.length) && !isFunction_1(value);
}

var isArrayLike_1 = isArrayLike;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
}

var keys_1 = keys;

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && _copyObject(source, keys_1(source), object);
}

var _baseAssign = baseAssign;

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

var _nativeKeysIn = nativeKeysIn;

/** Used for built-in method references. */
var objectProto$a = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$8 = objectProto$a.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject_1(object)) {
    return _nativeKeysIn(object);
  }
  var isProto = _isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty$8.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

var _baseKeysIn = baseKeysIn;

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
}

var keysIn_1 = keysIn;

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && _copyObject(source, keysIn_1(source), object);
}

var _baseAssignIn = baseAssignIn;

var _cloneBuffer = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports =  exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;
});

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

var _copyArray = copyArray;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

var _arrayFilter = arrayFilter;

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

var stubArray_1 = stubArray;

/** Used for built-in method references. */
var objectProto$b = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable$1 = objectProto$b.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray_1 : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return _arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable$1.call(object, symbol);
  });
};

var _getSymbols = getSymbols;

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return _copyObject(source, _getSymbols(source), object);
}

var _copySymbols = copySymbols;

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

var _arrayPush = arrayPush;

/** Built-in value references. */
var getPrototype = _overArg(Object.getPrototypeOf, Object);

var _getPrototype = getPrototype;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols$1 ? stubArray_1 : function(object) {
  var result = [];
  while (object) {
    _arrayPush(result, _getSymbols(object));
    object = _getPrototype(object);
  }
  return result;
};

var _getSymbolsIn = getSymbolsIn;

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return _copyObject(source, _getSymbolsIn(source), object);
}

var _copySymbolsIn = copySymbolsIn;

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray_1(object) ? result : _arrayPush(result, symbolsFunc(object));
}

var _baseGetAllKeys = baseGetAllKeys;

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return _baseGetAllKeys(object, keys_1, _getSymbols);
}

var _getAllKeys = getAllKeys;

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return _baseGetAllKeys(object, keysIn_1, _getSymbolsIn);
}

var _getAllKeysIn = getAllKeysIn;

/* Built-in method references that are verified to be native. */
var DataView = _getNative(_root, 'DataView');

var _DataView = DataView;

/* Built-in method references that are verified to be native. */
var Promise$1 = _getNative(_root, 'Promise');

var _Promise = Promise$1;

/* Built-in method references that are verified to be native. */
var Set = _getNative(_root, 'Set');

var _Set = Set;

/* Built-in method references that are verified to be native. */
var WeakMap = _getNative(_root, 'WeakMap');

var _WeakMap = WeakMap;

/** `Object#toString` result references. */
var mapTag$1 = '[object Map]',
    objectTag$1 = '[object Object]',
    promiseTag = '[object Promise]',
    setTag$1 = '[object Set]',
    weakMapTag$1 = '[object WeakMap]';

var dataViewTag$1 = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = _toSource(_DataView),
    mapCtorString = _toSource(_Map),
    promiseCtorString = _toSource(_Promise),
    setCtorString = _toSource(_Set),
    weakMapCtorString = _toSource(_WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag$1) ||
    (_Map && getTag(new _Map) != mapTag$1) ||
    (_Promise && getTag(_Promise.resolve()) != promiseTag) ||
    (_Set && getTag(new _Set) != setTag$1) ||
    (_WeakMap && getTag(new _WeakMap) != weakMapTag$1)) {
  getTag = function(value) {
    var result = _baseGetTag(value),
        Ctor = result == objectTag$1 ? value.constructor : undefined,
        ctorString = Ctor ? _toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag$1;
        case mapCtorString: return mapTag$1;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag$1;
        case weakMapCtorString: return weakMapTag$1;
      }
    }
    return result;
  };
}

var _getTag = getTag;

/** Used for built-in method references. */
var objectProto$c = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$9 = objectProto$c.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty$9.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

var _initCloneArray = initCloneArray;

/** Built-in value references. */
var Uint8Array = _root.Uint8Array;

var _Uint8Array = Uint8Array;

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new _Uint8Array(result).set(new _Uint8Array(arrayBuffer));
  return result;
}

var _cloneArrayBuffer = cloneArrayBuffer;

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? _cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

var _cloneDataView = cloneDataView;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

var _cloneRegExp = cloneRegExp;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

var _cloneSymbol = cloneSymbol;

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? _cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

var _cloneTypedArray = cloneTypedArray;

/** `Object#toString` result references. */
var boolTag$1 = '[object Boolean]',
    dateTag$1 = '[object Date]',
    mapTag$2 = '[object Map]',
    numberTag$1 = '[object Number]',
    regexpTag$1 = '[object RegExp]',
    setTag$2 = '[object Set]',
    stringTag$1 = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag$1 = '[object ArrayBuffer]',
    dataViewTag$2 = '[object DataView]',
    float32Tag$1 = '[object Float32Array]',
    float64Tag$1 = '[object Float64Array]',
    int8Tag$1 = '[object Int8Array]',
    int16Tag$1 = '[object Int16Array]',
    int32Tag$1 = '[object Int32Array]',
    uint8Tag$1 = '[object Uint8Array]',
    uint8ClampedTag$1 = '[object Uint8ClampedArray]',
    uint16Tag$1 = '[object Uint16Array]',
    uint32Tag$1 = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$1:
      return _cloneArrayBuffer(object);

    case boolTag$1:
    case dateTag$1:
      return new Ctor(+object);

    case dataViewTag$2:
      return _cloneDataView(object, isDeep);

    case float32Tag$1: case float64Tag$1:
    case int8Tag$1: case int16Tag$1: case int32Tag$1:
    case uint8Tag$1: case uint8ClampedTag$1: case uint16Tag$1: case uint32Tag$1:
      return _cloneTypedArray(object, isDeep);

    case mapTag$2:
      return new Ctor;

    case numberTag$1:
    case stringTag$1:
      return new Ctor(object);

    case regexpTag$1:
      return _cloneRegExp(object);

    case setTag$2:
      return new Ctor;

    case symbolTag:
      return _cloneSymbol(object);
  }
}

var _initCloneByTag = initCloneByTag;

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject_1(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

var _baseCreate = baseCreate;

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !_isPrototype(object))
    ? _baseCreate(_getPrototype(object))
    : {};
}

var _initCloneObject = initCloneObject;

/** `Object#toString` result references. */
var mapTag$3 = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike_1(value) && _getTag(value) == mapTag$3;
}

var _baseIsMap = baseIsMap;

/* Node.js helper references. */
var nodeIsMap = _nodeUtil && _nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? _baseUnary(nodeIsMap) : _baseIsMap;

var isMap_1 = isMap;

/** `Object#toString` result references. */
var setTag$3 = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike_1(value) && _getTag(value) == setTag$3;
}

var _baseIsSet = baseIsSet;

/* Node.js helper references. */
var nodeIsSet = _nodeUtil && _nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? _baseUnary(nodeIsSet) : _baseIsSet;

var isSet_1 = isSet;

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag$2 = '[object Arguments]',
    arrayTag$1 = '[object Array]',
    boolTag$2 = '[object Boolean]',
    dateTag$2 = '[object Date]',
    errorTag$1 = '[object Error]',
    funcTag$2 = '[object Function]',
    genTag$1 = '[object GeneratorFunction]',
    mapTag$4 = '[object Map]',
    numberTag$2 = '[object Number]',
    objectTag$2 = '[object Object]',
    regexpTag$2 = '[object RegExp]',
    setTag$4 = '[object Set]',
    stringTag$2 = '[object String]',
    symbolTag$1 = '[object Symbol]',
    weakMapTag$2 = '[object WeakMap]';

var arrayBufferTag$2 = '[object ArrayBuffer]',
    dataViewTag$3 = '[object DataView]',
    float32Tag$2 = '[object Float32Array]',
    float64Tag$2 = '[object Float64Array]',
    int8Tag$2 = '[object Int8Array]',
    int16Tag$2 = '[object Int16Array]',
    int32Tag$2 = '[object Int32Array]',
    uint8Tag$2 = '[object Uint8Array]',
    uint8ClampedTag$2 = '[object Uint8ClampedArray]',
    uint16Tag$2 = '[object Uint16Array]',
    uint32Tag$2 = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag$2] = cloneableTags[arrayTag$1] =
cloneableTags[arrayBufferTag$2] = cloneableTags[dataViewTag$3] =
cloneableTags[boolTag$2] = cloneableTags[dateTag$2] =
cloneableTags[float32Tag$2] = cloneableTags[float64Tag$2] =
cloneableTags[int8Tag$2] = cloneableTags[int16Tag$2] =
cloneableTags[int32Tag$2] = cloneableTags[mapTag$4] =
cloneableTags[numberTag$2] = cloneableTags[objectTag$2] =
cloneableTags[regexpTag$2] = cloneableTags[setTag$4] =
cloneableTags[stringTag$2] = cloneableTags[symbolTag$1] =
cloneableTags[uint8Tag$2] = cloneableTags[uint8ClampedTag$2] =
cloneableTags[uint16Tag$2] = cloneableTags[uint32Tag$2] = true;
cloneableTags[errorTag$1] = cloneableTags[funcTag$2] =
cloneableTags[weakMapTag$2] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject_1(value)) {
    return value;
  }
  var isArr = isArray_1(value);
  if (isArr) {
    result = _initCloneArray(value);
    if (!isDeep) {
      return _copyArray(value, result);
    }
  } else {
    var tag = _getTag(value),
        isFunc = tag == funcTag$2 || tag == genTag$1;

    if (isBuffer_1(value)) {
      return _cloneBuffer(value, isDeep);
    }
    if (tag == objectTag$2 || tag == argsTag$2 || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : _initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? _copySymbolsIn(value, _baseAssignIn(result, value))
          : _copySymbols(value, _baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = _initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new _Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet_1(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap_1(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? _getAllKeysIn : _getAllKeys)
    : (isFlat ? keysIn_1 : keys_1);

  var props = isArr ? undefined : keysFunc(value);
  _arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    _assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

var _baseClone = baseClone;

/** Used to compose bitmasks for cloning. */
var CLONE_SYMBOLS_FLAG$1 = 4;

/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */
function clone(value) {
  return _baseClone(value, CLONE_SYMBOLS_FLAG$1);
}

var clone_1 = clone;

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

var constant_1 = constant;

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

var _createBaseFor = createBaseFor;

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = _createBaseFor();

var _baseFor = baseFor;

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && _baseFor(object, iteratee, keys_1);
}

var _baseForOwn = baseForOwn;

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike_1(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

var _createBaseEach = createBaseEach;

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = _createBaseEach(_baseForOwn);

var _baseEach = baseEach;

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

var identity_1 = identity;

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity_1;
}

var _castFunction = castFunction;

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray_1(collection) ? _arrayEach : _baseEach;
  return func(collection, _castFunction(iteratee));
}

var forEach_1 = forEach;

var each = forEach_1;

/**
 * The base implementation of `_.filter` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function baseFilter(collection, predicate) {
  var result = [];
  _baseEach(collection, function(value, index, collection) {
    if (predicate(value, index, collection)) {
      result.push(value);
    }
  });
  return result;
}

var _baseFilter = baseFilter;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED$2);
  return this;
}

var _setCacheAdd = setCacheAdd;

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

var _setCacheHas = setCacheHas;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new _MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd;
SetCache.prototype.has = _setCacheHas;

var _SetCache = SetCache;

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

var _arraySome = arraySome;

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

var _cacheHas = cacheHas;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new _SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!_arraySome(other, function(othValue, othIndex) {
            if (!_cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

var _equalArrays = equalArrays;

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

var _mapToArray = mapToArray;

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

var _setToArray = setToArray;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$1 = 1,
    COMPARE_UNORDERED_FLAG$1 = 2;

/** `Object#toString` result references. */
var boolTag$3 = '[object Boolean]',
    dateTag$3 = '[object Date]',
    errorTag$2 = '[object Error]',
    mapTag$5 = '[object Map]',
    numberTag$3 = '[object Number]',
    regexpTag$3 = '[object RegExp]',
    setTag$5 = '[object Set]',
    stringTag$3 = '[object String]',
    symbolTag$2 = '[object Symbol]';

var arrayBufferTag$3 = '[object ArrayBuffer]',
    dataViewTag$4 = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto$1 = _Symbol ? _Symbol.prototype : undefined,
    symbolValueOf$1 = symbolProto$1 ? symbolProto$1.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag$4:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag$3:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new _Uint8Array(object), new _Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag$3:
    case dateTag$3:
    case numberTag$3:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq_1(+object, +other);

    case errorTag$2:
      return object.name == other.name && object.message == other.message;

    case regexpTag$3:
    case stringTag$3:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag$5:
      var convert = _mapToArray;

    case setTag$5:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1;
      convert || (convert = _setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$1;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = _equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag$2:
      if (symbolValueOf$1) {
        return symbolValueOf$1.call(object) == symbolValueOf$1.call(other);
      }
  }
  return false;
}

var _equalByTag = equalByTag;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$2 = 1;

/** Used for built-in method references. */
var objectProto$d = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$a = objectProto$d.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2,
      objProps = _getAllKeys(object),
      objLength = objProps.length,
      othProps = _getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$a.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

var _equalObjects = equalObjects;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$3 = 1;

/** `Object#toString` result references. */
var argsTag$3 = '[object Arguments]',
    arrayTag$2 = '[object Array]',
    objectTag$3 = '[object Object]';

/** Used for built-in method references. */
var objectProto$e = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$b = objectProto$e.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray_1(object),
      othIsArr = isArray_1(other),
      objTag = objIsArr ? arrayTag$2 : _getTag(object),
      othTag = othIsArr ? arrayTag$2 : _getTag(other);

  objTag = objTag == argsTag$3 ? objectTag$3 : objTag;
  othTag = othTag == argsTag$3 ? objectTag$3 : othTag;

  var objIsObj = objTag == objectTag$3,
      othIsObj = othTag == objectTag$3,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer_1(object)) {
    if (!isBuffer_1(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new _Stack);
    return (objIsArr || isTypedArray_1(object))
      ? _equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : _equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$3)) {
    var objIsWrapped = objIsObj && hasOwnProperty$b.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty$b.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new _Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new _Stack);
  return _equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

var _baseIsEqualDeep = baseIsEqualDeep;

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike_1(value) && !isObjectLike_1(other))) {
    return value !== value && other !== other;
  }
  return _baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

var _baseIsEqual = baseIsEqual;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$4 = 1,
    COMPARE_UNORDERED_FLAG$2 = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new _Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$4 | COMPARE_UNORDERED_FLAG$2, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

var _baseIsMatch = baseIsMatch;

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject_1(value);
}

var _isStrictComparable = isStrictComparable;

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys_1(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, _isStrictComparable(value)];
  }
  return result;
}

var _getMatchData = getMatchData;

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

var _matchesStrictComparable = matchesStrictComparable;

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = _getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return _matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || _baseIsMatch(object, source, matchData);
  };
}

var _baseMatches = baseMatches;

/** `Object#toString` result references. */
var symbolTag$3 = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag$3);
}

var isSymbol_1 = isSymbol;

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray_1(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol_1(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

var _isKey = isKey;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || _MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = _MapCache;

var memoize_1 = memoize;

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize_1(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

var _memoizeCapped = memoizeCapped;

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = _memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

var _stringToPath = stringToPath;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

var _arrayMap = arrayMap;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto$2 = _Symbol ? _Symbol.prototype : undefined,
    symbolToString = symbolProto$2 ? symbolProto$2.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray_1(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return _arrayMap(value, baseToString) + '';
  }
  if (isSymbol_1(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

var _baseToString = baseToString;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : _baseToString(value);
}

var toString_1 = toString;

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray_1(value)) {
    return value;
  }
  return _isKey(value, object) ? [value] : _stringToPath(toString_1(value));
}

var _castPath = castPath;

/** Used as references for various `Number` constants. */
var INFINITY$1 = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol_1(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
}

var _toKey = toKey;

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = _castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[_toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

var _baseGet = baseGet;

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : _baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

var get_1 = get;

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

var _baseHasIn = baseHasIn;

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = _castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = _toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength_1(length) && _isIndex(key, length) &&
    (isArray_1(object) || isArguments_1(object));
}

var _hasPath = hasPath;

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && _hasPath(object, path, _baseHasIn);
}

var hasIn_1 = hasIn;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$5 = 1,
    COMPARE_UNORDERED_FLAG$3 = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (_isKey(path) && _isStrictComparable(srcValue)) {
    return _matchesStrictComparable(_toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get_1(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn_1(object, path)
      : _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$5 | COMPARE_UNORDERED_FLAG$3);
  };
}

var _baseMatchesProperty = baseMatchesProperty;

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

var _baseProperty = baseProperty;

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return _baseGet(object, path);
  };
}

var _basePropertyDeep = basePropertyDeep;

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return _isKey(path) ? _baseProperty(_toKey(path)) : _basePropertyDeep(path);
}

var property_1 = property;

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity_1;
  }
  if (typeof value == 'object') {
    return isArray_1(value)
      ? _baseMatchesProperty(value[0], value[1])
      : _baseMatches(value);
  }
  return property_1(value);
}

var _baseIteratee = baseIteratee;

/**
 * Iterates over elements of `collection`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * **Note:** Unlike `_.remove`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see _.reject
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * _.filter(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, { 'age': 36, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.filter(users, 'active');
 * // => objects for ['barney']
 *
 * // Combining several predicates using `_.overEvery` or `_.overSome`.
 * _.filter(users, _.overSome([{ 'age': 36 }, ['age', 40]]));
 * // => objects for ['fred', 'barney']
 */
function filter(collection, predicate) {
  var func = isArray_1(collection) ? _arrayFilter : _baseFilter;
  return func(collection, _baseIteratee(predicate));
}

var filter_1 = filter;

/** Used for built-in method references. */
var objectProto$f = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$c = objectProto$f.hasOwnProperty;

/**
 * The base implementation of `_.has` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHas(object, key) {
  return object != null && hasOwnProperty$c.call(object, key);
}

var _baseHas = baseHas;

/**
 * Checks if `path` is a direct property of `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = { 'a': { 'b': 2 } };
 * var other = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.has(object, 'a');
 * // => true
 *
 * _.has(object, 'a.b');
 * // => true
 *
 * _.has(object, ['a', 'b']);
 * // => true
 *
 * _.has(other, 'a');
 * // => false
 */
function has(object, path) {
  return object != null && _hasPath(object, path, _baseHas);
}

var has_1 = has;

/** `Object#toString` result references. */
var mapTag$6 = '[object Map]',
    setTag$6 = '[object Set]';

/** Used for built-in method references. */
var objectProto$g = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$d = objectProto$g.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike_1(value) &&
      (isArray_1(value) || typeof value == 'string' || typeof value.splice == 'function' ||
        isBuffer_1(value) || isTypedArray_1(value) || isArguments_1(value))) {
    return !value.length;
  }
  var tag = _getTag(value);
  if (tag == mapTag$6 || tag == setTag$6) {
    return !value.size;
  }
  if (_isPrototype(value)) {
    return !_baseKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty$d.call(value, key)) {
      return false;
    }
  }
  return true;
}

var isEmpty_1 = isEmpty;

/**
 * Checks if `value` is `undefined`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * _.isUndefined(void 0);
 * // => true
 *
 * _.isUndefined(null);
 * // => false
 */
function isUndefined(value) {
  return value === undefined;
}

var isUndefined_1 = isUndefined;

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike_1(collection) ? Array(collection.length) : [];

  _baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

var _baseMap = baseMap;

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = isArray_1(collection) ? _arrayMap : _baseMap;
  return func(collection, _baseIteratee(iteratee));
}

var map_1 = map;

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

var _arrayReduce = arrayReduce;

/**
 * The base implementation of `_.reduce` and `_.reduceRight`, without support
 * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} accumulator The initial value.
 * @param {boolean} initAccum Specify using the first or last element of
 *  `collection` as the initial value.
 * @param {Function} eachFunc The function to iterate over `collection`.
 * @returns {*} Returns the accumulated value.
 */
function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
  eachFunc(collection, function(value, index, collection) {
    accumulator = initAccum
      ? (initAccum = false, value)
      : iteratee(accumulator, value, index, collection);
  });
  return accumulator;
}

var _baseReduce = baseReduce;

/**
 * Reduces `collection` to a value which is the accumulated result of running
 * each element in `collection` thru `iteratee`, where each successive
 * invocation is supplied the return value of the previous. If `accumulator`
 * is not given, the first element of `collection` is used as the initial
 * value. The iteratee is invoked with four arguments:
 * (accumulator, value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.reduce`, `_.reduceRight`, and `_.transform`.
 *
 * The guarded methods are:
 * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
 * and `sortBy`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @returns {*} Returns the accumulated value.
 * @see _.reduceRight
 * @example
 *
 * _.reduce([1, 2], function(sum, n) {
 *   return sum + n;
 * }, 0);
 * // => 3
 *
 * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 *   return result;
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
 */
function reduce(collection, iteratee, accumulator) {
  var func = isArray_1(collection) ? _arrayReduce : _baseReduce,
      initAccum = arguments.length < 3;

  return func(collection, _baseIteratee(iteratee), accumulator, initAccum, _baseEach);
}

var reduce_1 = reduce;

/** `Object#toString` result references. */
var stringTag$4 = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray_1(value) && isObjectLike_1(value) && _baseGetTag(value) == stringTag$4);
}

var isString_1 = isString;

/**
 * Gets the size of an ASCII `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
var asciiSize = _baseProperty('length');

var _asciiSize = asciiSize;

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

var _hasUnicode = hasUnicode;

/** Used to compose unicode character classes. */
var rsAstralRange$1 = '\\ud800-\\udfff',
    rsComboMarksRange$1 = '\\u0300-\\u036f',
    reComboHalfMarksRange$1 = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange$1 = '\\u20d0-\\u20ff',
    rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1,
    rsVarRange$1 = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange$1 + ']',
    rsCombo = '[' + rsComboRange$1 + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange$1 + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ$1 = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange$1 + ']?',
    rsOptJoin = '(?:' + rsZWJ$1 + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Gets the size of a Unicode `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
function unicodeSize(string) {
  var result = reUnicode.lastIndex = 0;
  while (reUnicode.test(string)) {
    ++result;
  }
  return result;
}

var _unicodeSize = unicodeSize;

/**
 * Gets the number of symbols in `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the string size.
 */
function stringSize(string) {
  return _hasUnicode(string)
    ? _unicodeSize(string)
    : _asciiSize(string);
}

var _stringSize = stringSize;

/** `Object#toString` result references. */
var mapTag$7 = '[object Map]',
    setTag$7 = '[object Set]';

/**
 * Gets the size of `collection` by returning its length for array-like
 * values or the number of own enumerable string keyed properties for objects.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @returns {number} Returns the collection size.
 * @example
 *
 * _.size([1, 2, 3]);
 * // => 3
 *
 * _.size({ 'a': 1, 'b': 2 });
 * // => 2
 *
 * _.size('pebbles');
 * // => 7
 */
function size(collection) {
  if (collection == null) {
    return 0;
  }
  if (isArrayLike_1(collection)) {
    return isString_1(collection) ? _stringSize(collection) : collection.length;
  }
  var tag = _getTag(collection);
  if (tag == mapTag$7 || tag == setTag$7) {
    return collection.size;
  }
  return _baseKeys(collection).length;
}

var size_1 = size;

/**
 * An alternative to `_.reduce`; this method transforms `object` to a new
 * `accumulator` object which is the result of running each of its own
 * enumerable string keyed properties thru `iteratee`, with each invocation
 * potentially mutating the `accumulator` object. If `accumulator` is not
 * provided, a new object with the same `[[Prototype]]` will be used. The
 * iteratee is invoked with four arguments: (accumulator, value, key, object).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @since 1.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The custom accumulator value.
 * @returns {*} Returns the accumulated value.
 * @example
 *
 * _.transform([2, 3, 4], function(result, n) {
 *   result.push(n *= n);
 *   return n % 2 == 0;
 * }, []);
 * // => [4, 9]
 *
 * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] }
 */
function transform(object, iteratee, accumulator) {
  var isArr = isArray_1(object),
      isArrLike = isArr || isBuffer_1(object) || isTypedArray_1(object);

  iteratee = _baseIteratee(iteratee);
  if (accumulator == null) {
    var Ctor = object && object.constructor;
    if (isArrLike) {
      accumulator = isArr ? new Ctor : [];
    }
    else if (isObject_1(object)) {
      accumulator = isFunction_1(Ctor) ? _baseCreate(_getPrototype(object)) : {};
    }
    else {
      accumulator = {};
    }
  }
  (isArrLike ? _arrayEach : _baseForOwn)(object, function(value, index, object) {
    return iteratee(accumulator, value, index, object);
  });
  return accumulator;
}

var transform_1 = transform;

/** Built-in value references. */
var spreadableSymbol = _Symbol ? _Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray_1(value) || isArguments_1(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

var _isFlattenable = isFlattenable;

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = _isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        _arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

var _baseFlatten = baseFlatten;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

var _apply = apply;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return _apply(func, this, otherArgs);
  };
}

var _overRest = overRest;

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !_defineProperty ? identity_1 : function(func, string) {
  return _defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant_1(string),
    'writable': true
  });
};

var _baseSetToString = baseSetToString;

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

var _shortOut = shortOut;

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = _shortOut(_baseSetToString);

var _setToString = setToString;

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return _setToString(_overRest(func, start, identity_1), func + '');
}

var _baseRest = baseRest;

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

var _baseFindIndex = baseFindIndex;

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

var _baseIsNaN = baseIsNaN;

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

var _strictIndexOf = strictIndexOf;

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? _strictIndexOf(array, value, fromIndex)
    : _baseFindIndex(array, _baseIsNaN, fromIndex);
}

var _baseIndexOf = baseIndexOf;

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && _baseIndexOf(array, value, 0) > -1;
}

var _arrayIncludes = arrayIncludes;

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

var _arrayIncludesWith = arrayIncludesWith;

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

var noop_1 = noop;

/** Used as references for various `Number` constants. */
var INFINITY$2 = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(_Set && (1 / _setToArray(new _Set([,-0]))[1]) == INFINITY$2) ? noop_1 : function(values) {
  return new _Set(values);
};

var _createSet = createSet;

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE$1 = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = _arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = _arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE$1) {
    var set = iteratee ? null : _createSet(array);
    if (set) {
      return _setToArray(set);
    }
    isCommon = false;
    includes = _cacheHas;
    seen = new _SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

var _baseUniq = baseUniq;

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike_1(value) && isArrayLike_1(value);
}

var isArrayLikeObject_1 = isArrayLikeObject;

/**
 * Creates an array of unique values, in order, from all given arrays using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of combined values.
 * @example
 *
 * _.union([2], [1, 2]);
 * // => [2, 1]
 */
var union = _baseRest(function(arrays) {
  return _baseUniq(_baseFlatten(arrays, 1, isArrayLikeObject_1, true));
});

var union_1 = union;

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return _arrayMap(props, function(key) {
    return object[key];
  });
}

var _baseValues = baseValues;

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : _baseValues(object, keys_1(object));
}

var values_1 = values;

/* global window */

var lodash;

if (typeof commonjsRequire === "function") {
  try {
    lodash = {
      clone: clone_1,
      constant: constant_1,
      each: each,
      filter: filter_1,
      has:  has_1,
      isArray: isArray_1,
      isEmpty: isEmpty_1,
      isFunction: isFunction_1,
      isUndefined: isUndefined_1,
      keys: keys_1,
      map: map_1,
      reduce: reduce_1,
      size: size_1,
      transform: transform_1,
      union: union_1,
      values: values_1
    };
  } catch (e) {
    // continue regardless of error
  }
}

if (!lodash) {
  lodash = window._;
}

var lodash_1 = lodash;

var graph = Graph;

var DEFAULT_EDGE_NAME = "\x00";
var GRAPH_NODE = "\x00";
var EDGE_KEY_DELIM = "\x01";

// Implementation notes:
//
//  * Node id query functions should return string ids for the nodes
//  * Edge id query functions should return an "edgeObj", edge object, that is
//    composed of enough information to uniquely identify an edge: {v, w, name}.
//  * Internally we use an "edgeId", a stringified form of the edgeObj, to
//    reference edges. This is because we need a performant way to look these
//    edges up and, object properties, which have string keys, are the closest
//    we're going to get to a performant hashtable in JavaScript.

function Graph(opts) {
  this._isDirected = lodash_1.has(opts, "directed") ? opts.directed : true;
  this._isMultigraph = lodash_1.has(opts, "multigraph") ? opts.multigraph : false;
  this._isCompound = lodash_1.has(opts, "compound") ? opts.compound : false;

  // Label for the graph itself
  this._label = undefined;

  // Defaults to be set when creating a new node
  this._defaultNodeLabelFn = lodash_1.constant(undefined);

  // Defaults to be set when creating a new edge
  this._defaultEdgeLabelFn = lodash_1.constant(undefined);

  // v -> label
  this._nodes = {};

  if (this._isCompound) {
    // v -> parent
    this._parent = {};

    // v -> children
    this._children = {};
    this._children[GRAPH_NODE] = {};
  }

  // v -> edgeObj
  this._in = {};

  // u -> v -> Number
  this._preds = {};

  // v -> edgeObj
  this._out = {};

  // v -> w -> Number
  this._sucs = {};

  // e -> edgeObj
  this._edgeObjs = {};

  // e -> label
  this._edgeLabels = {};
}

/* Number of nodes in the graph. Should only be changed by the implementation. */
Graph.prototype._nodeCount = 0;

/* Number of edges in the graph. Should only be changed by the implementation. */
Graph.prototype._edgeCount = 0;


/* === Graph functions ========= */

Graph.prototype.isDirected = function() {
  return this._isDirected;
};

Graph.prototype.isMultigraph = function() {
  return this._isMultigraph;
};

Graph.prototype.isCompound = function() {
  return this._isCompound;
};

Graph.prototype.setGraph = function(label) {
  this._label = label;
  return this;
};

Graph.prototype.graph = function() {
  return this._label;
};


/* === Node functions ========== */

Graph.prototype.setDefaultNodeLabel = function(newDefault) {
  if (!lodash_1.isFunction(newDefault)) {
    newDefault = lodash_1.constant(newDefault);
  }
  this._defaultNodeLabelFn = newDefault;
  return this;
};

Graph.prototype.nodeCount = function() {
  return this._nodeCount;
};

Graph.prototype.nodes = function() {
  return lodash_1.keys(this._nodes);
};

Graph.prototype.sources = function() {
  var self = this;
  return lodash_1.filter(this.nodes(), function(v) {
    return lodash_1.isEmpty(self._in[v]);
  });
};

Graph.prototype.sinks = function() {
  var self = this;
  return lodash_1.filter(this.nodes(), function(v) {
    return lodash_1.isEmpty(self._out[v]);
  });
};

Graph.prototype.setNodes = function(vs, value) {
  var args = arguments;
  var self = this;
  lodash_1.each(vs, function(v) {
    if (args.length > 1) {
      self.setNode(v, value);
    } else {
      self.setNode(v);
    }
  });
  return this;
};

Graph.prototype.setNode = function(v, value) {
  if (lodash_1.has(this._nodes, v)) {
    if (arguments.length > 1) {
      this._nodes[v] = value;
    }
    return this;
  }

  this._nodes[v] = arguments.length > 1 ? value : this._defaultNodeLabelFn(v);
  if (this._isCompound) {
    this._parent[v] = GRAPH_NODE;
    this._children[v] = {};
    this._children[GRAPH_NODE][v] = true;
  }
  this._in[v] = {};
  this._preds[v] = {};
  this._out[v] = {};
  this._sucs[v] = {};
  ++this._nodeCount;
  return this;
};

Graph.prototype.node = function(v) {
  return this._nodes[v];
};

Graph.prototype.hasNode = function(v) {
  return lodash_1.has(this._nodes, v);
};

Graph.prototype.removeNode =  function(v) {
  var self = this;
  if (lodash_1.has(this._nodes, v)) {
    var removeEdge = function(e) { self.removeEdge(self._edgeObjs[e]); };
    delete this._nodes[v];
    if (this._isCompound) {
      this._removeFromParentsChildList(v);
      delete this._parent[v];
      lodash_1.each(this.children(v), function(child) {
        self.setParent(child);
      });
      delete this._children[v];
    }
    lodash_1.each(lodash_1.keys(this._in[v]), removeEdge);
    delete this._in[v];
    delete this._preds[v];
    lodash_1.each(lodash_1.keys(this._out[v]), removeEdge);
    delete this._out[v];
    delete this._sucs[v];
    --this._nodeCount;
  }
  return this;
};

Graph.prototype.setParent = function(v, parent) {
  if (!this._isCompound) {
    throw new Error("Cannot set parent in a non-compound graph");
  }

  if (lodash_1.isUndefined(parent)) {
    parent = GRAPH_NODE;
  } else {
    // Coerce parent to string
    parent += "";
    for (var ancestor = parent;
      !lodash_1.isUndefined(ancestor);
      ancestor = this.parent(ancestor)) {
      if (ancestor === v) {
        throw new Error("Setting " + parent+ " as parent of " + v +
                        " would create a cycle");
      }
    }

    this.setNode(parent);
  }

  this.setNode(v);
  this._removeFromParentsChildList(v);
  this._parent[v] = parent;
  this._children[parent][v] = true;
  return this;
};

Graph.prototype._removeFromParentsChildList = function(v) {
  delete this._children[this._parent[v]][v];
};

Graph.prototype.parent = function(v) {
  if (this._isCompound) {
    var parent = this._parent[v];
    if (parent !== GRAPH_NODE) {
      return parent;
    }
  }
};

Graph.prototype.children = function(v) {
  if (lodash_1.isUndefined(v)) {
    v = GRAPH_NODE;
  }

  if (this._isCompound) {
    var children = this._children[v];
    if (children) {
      return lodash_1.keys(children);
    }
  } else if (v === GRAPH_NODE) {
    return this.nodes();
  } else if (this.hasNode(v)) {
    return [];
  }
};

Graph.prototype.predecessors = function(v) {
  var predsV = this._preds[v];
  if (predsV) {
    return lodash_1.keys(predsV);
  }
};

Graph.prototype.successors = function(v) {
  var sucsV = this._sucs[v];
  if (sucsV) {
    return lodash_1.keys(sucsV);
  }
};

Graph.prototype.neighbors = function(v) {
  var preds = this.predecessors(v);
  if (preds) {
    return lodash_1.union(preds, this.successors(v));
  }
};

Graph.prototype.isLeaf = function (v) {
  var neighbors;
  if (this.isDirected()) {
    neighbors = this.successors(v);
  } else {
    neighbors = this.neighbors(v);
  }
  return neighbors.length === 0;
};

Graph.prototype.filterNodes = function(filter) {
  var copy = new this.constructor({
    directed: this._isDirected,
    multigraph: this._isMultigraph,
    compound: this._isCompound
  });

  copy.setGraph(this.graph());

  var self = this;
  lodash_1.each(this._nodes, function(value, v) {
    if (filter(v)) {
      copy.setNode(v, value);
    }
  });

  lodash_1.each(this._edgeObjs, function(e) {
    if (copy.hasNode(e.v) && copy.hasNode(e.w)) {
      copy.setEdge(e, self.edge(e));
    }
  });

  var parents = {};
  function findParent(v) {
    var parent = self.parent(v);
    if (parent === undefined || copy.hasNode(parent)) {
      parents[v] = parent;
      return parent;
    } else if (parent in parents) {
      return parents[parent];
    } else {
      return findParent(parent);
    }
  }

  if (this._isCompound) {
    lodash_1.each(copy.nodes(), function(v) {
      copy.setParent(v, findParent(v));
    });
  }

  return copy;
};

/* === Edge functions ========== */

Graph.prototype.setDefaultEdgeLabel = function(newDefault) {
  if (!lodash_1.isFunction(newDefault)) {
    newDefault = lodash_1.constant(newDefault);
  }
  this._defaultEdgeLabelFn = newDefault;
  return this;
};

Graph.prototype.edgeCount = function() {
  return this._edgeCount;
};

Graph.prototype.edges = function() {
  return lodash_1.values(this._edgeObjs);
};

Graph.prototype.setPath = function(vs, value) {
  var self = this;
  var args = arguments;
  lodash_1.reduce(vs, function(v, w) {
    if (args.length > 1) {
      self.setEdge(v, w, value);
    } else {
      self.setEdge(v, w);
    }
    return w;
  });
  return this;
};

/*
 * setEdge(v, w, [value, [name]])
 * setEdge({ v, w, [name] }, [value])
 */
Graph.prototype.setEdge = function() {
  var v, w, name, value;
  var valueSpecified = false;
  var arg0 = arguments[0];

  if (typeof arg0 === "object" && arg0 !== null && "v" in arg0) {
    v = arg0.v;
    w = arg0.w;
    name = arg0.name;
    if (arguments.length === 2) {
      value = arguments[1];
      valueSpecified = true;
    }
  } else {
    v = arg0;
    w = arguments[1];
    name = arguments[3];
    if (arguments.length > 2) {
      value = arguments[2];
      valueSpecified = true;
    }
  }

  v = "" + v;
  w = "" + w;
  if (!lodash_1.isUndefined(name)) {
    name = "" + name;
  }

  var e = edgeArgsToId(this._isDirected, v, w, name);
  if (lodash_1.has(this._edgeLabels, e)) {
    if (valueSpecified) {
      this._edgeLabels[e] = value;
    }
    return this;
  }

  if (!lodash_1.isUndefined(name) && !this._isMultigraph) {
    throw new Error("Cannot set a named edge when isMultigraph = false");
  }

  // It didn't exist, so we need to create it.
  // First ensure the nodes exist.
  this.setNode(v);
  this.setNode(w);

  this._edgeLabels[e] = valueSpecified ? value : this._defaultEdgeLabelFn(v, w, name);

  var edgeObj = edgeArgsToObj(this._isDirected, v, w, name);
  // Ensure we add undirected edges in a consistent way.
  v = edgeObj.v;
  w = edgeObj.w;

  Object.freeze(edgeObj);
  this._edgeObjs[e] = edgeObj;
  incrementOrInitEntry(this._preds[w], v);
  incrementOrInitEntry(this._sucs[v], w);
  this._in[w][e] = edgeObj;
  this._out[v][e] = edgeObj;
  this._edgeCount++;
  return this;
};

Graph.prototype.edge = function(v, w, name) {
  var e = (arguments.length === 1
    ? edgeObjToId(this._isDirected, arguments[0])
    : edgeArgsToId(this._isDirected, v, w, name));
  return this._edgeLabels[e];
};

Graph.prototype.hasEdge = function(v, w, name) {
  var e = (arguments.length === 1
    ? edgeObjToId(this._isDirected, arguments[0])
    : edgeArgsToId(this._isDirected, v, w, name));
  return lodash_1.has(this._edgeLabels, e);
};

Graph.prototype.removeEdge = function(v, w, name) {
  var e = (arguments.length === 1
    ? edgeObjToId(this._isDirected, arguments[0])
    : edgeArgsToId(this._isDirected, v, w, name));
  var edge = this._edgeObjs[e];
  if (edge) {
    v = edge.v;
    w = edge.w;
    delete this._edgeLabels[e];
    delete this._edgeObjs[e];
    decrementOrRemoveEntry(this._preds[w], v);
    decrementOrRemoveEntry(this._sucs[v], w);
    delete this._in[w][e];
    delete this._out[v][e];
    this._edgeCount--;
  }
  return this;
};

Graph.prototype.inEdges = function(v, u) {
  var inV = this._in[v];
  if (inV) {
    var edges = lodash_1.values(inV);
    if (!u) {
      return edges;
    }
    return lodash_1.filter(edges, function(edge) { return edge.v === u; });
  }
};

Graph.prototype.outEdges = function(v, w) {
  var outV = this._out[v];
  if (outV) {
    var edges = lodash_1.values(outV);
    if (!w) {
      return edges;
    }
    return lodash_1.filter(edges, function(edge) { return edge.w === w; });
  }
};

Graph.prototype.nodeEdges = function(v, w) {
  var inEdges = this.inEdges(v, w);
  if (inEdges) {
    return inEdges.concat(this.outEdges(v, w));
  }
};

function incrementOrInitEntry(map, k) {
  if (map[k]) {
    map[k]++;
  } else {
    map[k] = 1;
  }
}

function decrementOrRemoveEntry(map, k) {
  if (!--map[k]) { delete map[k]; }
}

function edgeArgsToId(isDirected, v_, w_, name) {
  var v = "" + v_;
  var w = "" + w_;
  if (!isDirected && v > w) {
    var tmp = v;
    v = w;
    w = tmp;
  }
  return v + EDGE_KEY_DELIM + w + EDGE_KEY_DELIM +
             (lodash_1.isUndefined(name) ? DEFAULT_EDGE_NAME : name);
}

function edgeArgsToObj(isDirected, v_, w_, name) {
  var v = "" + v_;
  var w = "" + w_;
  if (!isDirected && v > w) {
    var tmp = v;
    v = w;
    w = tmp;
  }
  var edgeObj =  { v: v, w: w };
  if (name) {
    edgeObj.name = name;
  }
  return edgeObj;
}

function edgeObjToId(isDirected, edgeObj) {
  return edgeArgsToId(isDirected, edgeObj.v, edgeObj.w, edgeObj.name);
}

var version = '2.1.8';

// Includes only the "core" of graphlib
var lib = {
  Graph: graph,
  version: version
};

var json = {
  write: write,
  read: read
};

function write(g) {
  var json = {
    options: {
      directed: g.isDirected(),
      multigraph: g.isMultigraph(),
      compound: g.isCompound()
    },
    nodes: writeNodes(g),
    edges: writeEdges(g)
  };
  if (!lodash_1.isUndefined(g.graph())) {
    json.value = lodash_1.clone(g.graph());
  }
  return json;
}

function writeNodes(g) {
  return lodash_1.map(g.nodes(), function(v) {
    var nodeValue = g.node(v);
    var parent = g.parent(v);
    var node = { v: v };
    if (!lodash_1.isUndefined(nodeValue)) {
      node.value = nodeValue;
    }
    if (!lodash_1.isUndefined(parent)) {
      node.parent = parent;
    }
    return node;
  });
}

function writeEdges(g) {
  return lodash_1.map(g.edges(), function(e) {
    var edgeValue = g.edge(e);
    var edge = { v: e.v, w: e.w };
    if (!lodash_1.isUndefined(e.name)) {
      edge.name = e.name;
    }
    if (!lodash_1.isUndefined(edgeValue)) {
      edge.value = edgeValue;
    }
    return edge;
  });
}

function read(json) {
  var g = new graph(json.options).setGraph(json.value);
  lodash_1.each(json.nodes, function(entry) {
    g.setNode(entry.v, entry.value);
    if (entry.parent) {
      g.setParent(entry.v, entry.parent);
    }
  });
  lodash_1.each(json.edges, function(entry) {
    g.setEdge({ v: entry.v, w: entry.w, name: entry.name }, entry.value);
  });
  return g;
}

var components_1 = components;

function components(g) {
  var visited = {};
  var cmpts = [];
  var cmpt;

  function dfs(v) {
    if (lodash_1.has(visited, v)) return;
    visited[v] = true;
    cmpt.push(v);
    lodash_1.each(g.successors(v), dfs);
    lodash_1.each(g.predecessors(v), dfs);
  }

  lodash_1.each(g.nodes(), function(v) {
    cmpt = [];
    dfs(v);
    if (cmpt.length) {
      cmpts.push(cmpt);
    }
  });

  return cmpts;
}

var priorityQueue = PriorityQueue;

/**
 * A min-priority queue data structure. This algorithm is derived from Cormen,
 * et al., "Introduction to Algorithms". The basic idea of a min-priority
 * queue is that you can efficiently (in O(1) time) get the smallest key in
 * the queue. Adding and removing elements takes O(log n) time. A key can
 * have its priority decreased in O(log n) time.
 */
function PriorityQueue() {
  this._arr = [];
  this._keyIndices = {};
}

/**
 * Returns the number of elements in the queue. Takes `O(1)` time.
 */
PriorityQueue.prototype.size = function() {
  return this._arr.length;
};

/**
 * Returns the keys that are in the queue. Takes `O(n)` time.
 */
PriorityQueue.prototype.keys = function() {
  return this._arr.map(function(x) { return x.key; });
};

/**
 * Returns `true` if **key** is in the queue and `false` if not.
 */
PriorityQueue.prototype.has = function(key) {
  return lodash_1.has(this._keyIndices, key);
};

/**
 * Returns the priority for **key**. If **key** is not present in the queue
 * then this function returns `undefined`. Takes `O(1)` time.
 *
 * @param {Object} key
 */
PriorityQueue.prototype.priority = function(key) {
  var index = this._keyIndices[key];
  if (index !== undefined) {
    return this._arr[index].priority;
  }
};

/**
 * Returns the key for the minimum element in this queue. If the queue is
 * empty this function throws an Error. Takes `O(1)` time.
 */
PriorityQueue.prototype.min = function() {
  if (this.size() === 0) {
    throw new Error("Queue underflow");
  }
  return this._arr[0].key;
};

/**
 * Inserts a new key into the priority queue. If the key already exists in
 * the queue this function returns `false`; otherwise it will return `true`.
 * Takes `O(n)` time.
 *
 * @param {Object} key the key to add
 * @param {Number} priority the initial priority for the key
 */
PriorityQueue.prototype.add = function(key, priority) {
  var keyIndices = this._keyIndices;
  key = String(key);
  if (!lodash_1.has(keyIndices, key)) {
    var arr = this._arr;
    var index = arr.length;
    keyIndices[key] = index;
    arr.push({key: key, priority: priority});
    this._decrease(index);
    return true;
  }
  return false;
};

/**
 * Removes and returns the smallest key in the queue. Takes `O(log n)` time.
 */
PriorityQueue.prototype.removeMin = function() {
  this._swap(0, this._arr.length - 1);
  var min = this._arr.pop();
  delete this._keyIndices[min.key];
  this._heapify(0);
  return min.key;
};

/**
 * Decreases the priority for **key** to **priority**. If the new priority is
 * greater than the previous priority, this function will throw an Error.
 *
 * @param {Object} key the key for which to raise priority
 * @param {Number} priority the new priority for the key
 */
PriorityQueue.prototype.decrease = function(key, priority) {
  var index = this._keyIndices[key];
  if (priority > this._arr[index].priority) {
    throw new Error("New priority is greater than current priority. " +
        "Key: " + key + " Old: " + this._arr[index].priority + " New: " + priority);
  }
  this._arr[index].priority = priority;
  this._decrease(index);
};

PriorityQueue.prototype._heapify = function(i) {
  var arr = this._arr;
  var l = 2 * i;
  var r = l + 1;
  var largest = i;
  if (l < arr.length) {
    largest = arr[l].priority < arr[largest].priority ? l : largest;
    if (r < arr.length) {
      largest = arr[r].priority < arr[largest].priority ? r : largest;
    }
    if (largest !== i) {
      this._swap(i, largest);
      this._heapify(largest);
    }
  }
};

PriorityQueue.prototype._decrease = function(index) {
  var arr = this._arr;
  var priority = arr[index].priority;
  var parent;
  while (index !== 0) {
    parent = index >> 1;
    if (arr[parent].priority < priority) {
      break;
    }
    this._swap(index, parent);
    index = parent;
  }
};

PriorityQueue.prototype._swap = function(i, j) {
  var arr = this._arr;
  var keyIndices = this._keyIndices;
  var origArrI = arr[i];
  var origArrJ = arr[j];
  arr[i] = origArrJ;
  arr[j] = origArrI;
  keyIndices[origArrJ.key] = i;
  keyIndices[origArrI.key] = j;
};

var dijkstra_1 = dijkstra;

var DEFAULT_WEIGHT_FUNC = lodash_1.constant(1);

function dijkstra(g, source, weightFn, edgeFn) {
  return runDijkstra(g, String(source),
    weightFn || DEFAULT_WEIGHT_FUNC,
    edgeFn || function(v) { return g.outEdges(v); });
}

function runDijkstra(g, source, weightFn, edgeFn) {
  var results = {};
  var pq = new priorityQueue();
  var v, vEntry;

  var updateNeighbors = function(edge) {
    var w = edge.v !== v ? edge.v : edge.w;
    var wEntry = results[w];
    var weight = weightFn(edge);
    var distance = vEntry.distance + weight;

    if (weight < 0) {
      throw new Error("dijkstra does not allow negative edge weights. " +
                      "Bad edge: " + edge + " Weight: " + weight);
    }

    if (distance < wEntry.distance) {
      wEntry.distance = distance;
      wEntry.predecessor = v;
      pq.decrease(w, distance);
    }
  };

  g.nodes().forEach(function(v) {
    var distance = v === source ? 0 : Number.POSITIVE_INFINITY;
    results[v] = { distance: distance };
    pq.add(v, distance);
  });

  while (pq.size() > 0) {
    v = pq.removeMin();
    vEntry = results[v];
    if (vEntry.distance === Number.POSITIVE_INFINITY) {
      break;
    }

    edgeFn(v).forEach(updateNeighbors);
  }

  return results;
}

var dijkstraAll_1 = dijkstraAll;

function dijkstraAll(g, weightFunc, edgeFunc) {
  return lodash_1.transform(g.nodes(), function(acc, v) {
    acc[v] = dijkstra_1(g, v, weightFunc, edgeFunc);
  }, {});
}

var tarjan_1 = tarjan;

function tarjan(g) {
  var index = 0;
  var stack = [];
  var visited = {}; // node id -> { onStack, lowlink, index }
  var results = [];

  function dfs(v) {
    var entry = visited[v] = {
      onStack: true,
      lowlink: index,
      index: index++
    };
    stack.push(v);

    g.successors(v).forEach(function(w) {
      if (!lodash_1.has(visited, w)) {
        dfs(w);
        entry.lowlink = Math.min(entry.lowlink, visited[w].lowlink);
      } else if (visited[w].onStack) {
        entry.lowlink = Math.min(entry.lowlink, visited[w].index);
      }
    });

    if (entry.lowlink === entry.index) {
      var cmpt = [];
      var w;
      do {
        w = stack.pop();
        visited[w].onStack = false;
        cmpt.push(w);
      } while (v !== w);
      results.push(cmpt);
    }
  }

  g.nodes().forEach(function(v) {
    if (!lodash_1.has(visited, v)) {
      dfs(v);
    }
  });

  return results;
}

var findCycles_1 = findCycles;

function findCycles(g) {
  return lodash_1.filter(tarjan_1(g), function(cmpt) {
    return cmpt.length > 1 || (cmpt.length === 1 && g.hasEdge(cmpt[0], cmpt[0]));
  });
}

var floydWarshall_1 = floydWarshall;

var DEFAULT_WEIGHT_FUNC$1 = lodash_1.constant(1);

function floydWarshall(g, weightFn, edgeFn) {
  return runFloydWarshall(g,
    weightFn || DEFAULT_WEIGHT_FUNC$1,
    edgeFn || function(v) { return g.outEdges(v); });
}

function runFloydWarshall(g, weightFn, edgeFn) {
  var results = {};
  var nodes = g.nodes();

  nodes.forEach(function(v) {
    results[v] = {};
    results[v][v] = { distance: 0 };
    nodes.forEach(function(w) {
      if (v !== w) {
        results[v][w] = { distance: Number.POSITIVE_INFINITY };
      }
    });
    edgeFn(v).forEach(function(edge) {
      var w = edge.v === v ? edge.w : edge.v;
      var d = weightFn(edge);
      results[v][w] = { distance: d, predecessor: v };
    });
  });

  nodes.forEach(function(k) {
    var rowK = results[k];
    nodes.forEach(function(i) {
      var rowI = results[i];
      nodes.forEach(function(j) {
        var ik = rowI[k];
        var kj = rowK[j];
        var ij = rowI[j];
        var altDistance = ik.distance + kj.distance;
        if (altDistance < ij.distance) {
          ij.distance = altDistance;
          ij.predecessor = kj.predecessor;
        }
      });
    });
  });

  return results;
}

var topsort_1 = topsort;
topsort.CycleException = CycleException;

function topsort(g) {
  var visited = {};
  var stack = {};
  var results = [];

  function visit(node) {
    if (lodash_1.has(stack, node)) {
      throw new CycleException();
    }

    if (!lodash_1.has(visited, node)) {
      stack[node] = true;
      visited[node] = true;
      lodash_1.each(g.predecessors(node), visit);
      delete stack[node];
      results.push(node);
    }
  }

  lodash_1.each(g.sinks(), visit);

  if (lodash_1.size(visited) !== g.nodeCount()) {
    throw new CycleException();
  }

  return results;
}

function CycleException() {}
CycleException.prototype = new Error(); // must be an instance of Error to pass testing

var isAcyclic_1 = isAcyclic;

function isAcyclic(g) {
  try {
    topsort_1(g);
  } catch (e) {
    if (e instanceof topsort_1.CycleException) {
      return false;
    }
    throw e;
  }
  return true;
}

var dfs_1 = dfs;

/*
 * A helper that preforms a pre- or post-order traversal on the input graph
 * and returns the nodes in the order they were visited. If the graph is
 * undirected then this algorithm will navigate using neighbors. If the graph
 * is directed then this algorithm will navigate using successors.
 *
 * Order must be one of "pre" or "post".
 */
function dfs(g, vs, order) {
  if (!lodash_1.isArray(vs)) {
    vs = [vs];
  }

  var navigation = (g.isDirected() ? g.successors : g.neighbors).bind(g);

  var acc = [];
  var visited = {};
  lodash_1.each(vs, function(v) {
    if (!g.hasNode(v)) {
      throw new Error("Graph does not have node: " + v);
    }

    doDfs(g, v, order === "post", visited, navigation, acc);
  });
  return acc;
}

function doDfs(g, v, postorder, visited, navigation, acc) {
  if (!lodash_1.has(visited, v)) {
    visited[v] = true;

    if (!postorder) { acc.push(v); }
    lodash_1.each(navigation(v), function(w) {
      doDfs(g, w, postorder, visited, navigation, acc);
    });
    if (postorder) { acc.push(v); }
  }
}

var postorder_1 = postorder;

function postorder(g, vs) {
  return dfs_1(g, vs, "post");
}

var preorder_1 = preorder;

function preorder(g, vs) {
  return dfs_1(g, vs, "pre");
}

var prim_1 = prim;

function prim(g, weightFunc) {
  var result = new graph();
  var parents = {};
  var pq = new priorityQueue();
  var v;

  function updateNeighbors(edge) {
    var w = edge.v === v ? edge.w : edge.v;
    var pri = pq.priority(w);
    if (pri !== undefined) {
      var edgeWeight = weightFunc(edge);
      if (edgeWeight < pri) {
        parents[w] = v;
        pq.decrease(w, edgeWeight);
      }
    }
  }

  if (g.nodeCount() === 0) {
    return result;
  }

  lodash_1.each(g.nodes(), function(v) {
    pq.add(v, Number.POSITIVE_INFINITY);
    result.setNode(v);
  });

  // Start from an arbitrary node
  pq.decrease(g.nodes()[0], 0);

  var init = false;
  while (pq.size() > 0) {
    v = pq.removeMin();
    if (lodash_1.has(parents, v)) {
      result.setEdge(v, parents[v]);
    } else if (init) {
      throw new Error("Input graph is not connected: " + g);
    } else {
      init = true;
    }

    g.nodeEdges(v).forEach(updateNeighbors);
  }

  return result;
}

var alg = {
  components: components_1,
  dijkstra: dijkstra_1,
  dijkstraAll: dijkstraAll_1,
  findCycles: findCycles_1,
  floydWarshall: floydWarshall_1,
  isAcyclic: isAcyclic_1,
  postorder: postorder_1,
  preorder: preorder_1,
  prim: prim_1,
  tarjan: tarjan_1,
  topsort: topsort_1
};

/**
 * Copyright (c) 2014, Chris Pettitt
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its contributors
 * may be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */



var graphlib = {
  Graph: lib.Graph,
  json: json,
  alg: alg,
  version: lib.version
};

obsidian.addIcon('journey', '<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '<rect width="100" height="100" fill="white"/>\n' +
    '<rect width="100" height="100" fill="black"/>\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M15.9498 13.9497C14.683 15.2165 12.933 16 11 16C7.13401 16 4 12.866 4 9C4 5.13401 7.13401 2 11 2C14.866 2 18 5.13401 18 9C18 10.5723 17.4816 12.0235 16.6064 13.1921L19.4317 16.0174C21.4036 14.1473 24.0678 13 27 13C30.8296 13 34.2021 14.957 36.172 17.9255L47.2564 10.8838C47.0893 10.2844 47 9.65263 47 9C47 5.13401 50.134 2 54 2C57.866 2 61 5.13401 61 9C61 9.05071 60.9995 9.1013 60.9984 9.15176L69.6848 14.1526C72.4347 10.9954 76.4843 9 81 9C89.2843 9 96 15.7157 96 24C96 32.2843 89.2843 39 81 39C77.6001 39 74.4644 37.8689 71.9487 35.9624L61.0884 46.8227C61.6736 48.0939 62 49.5088 62 51C62 51.3375 61.9833 51.6711 61.9506 52H73.0549C73.5524 47.5 77.3674 44 82 44C86.9706 44 91 48.0294 91 53C91 57.9706 86.9706 62 82 62C77.0294 62 73 57.9706 73 53H61.7999C60.8734 57.5645 56.8379 61 52 61C50.5088 61 49.0939 60.6736 47.8227 60.0884L34.3813 73.5297C35.4934 75.1521 36.2948 77.0041 36.6999 79H73.414C74.7199 74.383 78.9649 71 84 71C90.0751 71 95 75.9249 95 82C95 88.0751 90.0751 93 84 93C78.9649 93 74.7199 89.617 73.414 85H36.6999C35.3101 91.8467 29.2569 97 22 97C13.7157 97 7 90.2843 7 82C7 73.7157 13.7157 67 22 67C24.9714 67 27.741 67.864 30.0713 69.3545L43.3702 56.0556C42.8227 55.1231 42.4221 54.094 42.2 53H32C32 57.9706 27.9706 62 23 62C18.0294 62 14 57.9706 14 53C14 48.0294 18.0294 44 23 44C27.6326 44 31.4476 47.5 31.9451 52H42.0494C42.0167 51.6711 42 51.3375 42 51C42 45.4772 46.4771 41 52 41C53.8444 41 55.5722 41.4993 57.0556 42.3702L67.9771 31.4486C67.1959 30.0857 66.6225 28.5884 66.3001 27H37.5859C36.2801 31.617 32.0351 35 27 35C20.9249 35 16 30.0751 16 24C16 21.2169 17.0336 18.6752 18.7379 16.7378L15.9498 13.9497ZM69.0454 14.9384L60.8899 10.2432C60.3033 13.5161 57.4417 16 54 16C51.1481 16 48.6946 14.2946 47.6036 11.8479L36.6867 18.7833C37.0629 19.4804 37.3661 20.2227 37.5859 21H66.3001C66.7553 18.7572 67.711 16.6961 69.0454 14.9384Z" fill="white" fill-opacity="0.3"/>\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M96 24C96 32.2843 89.2843 39 81 39C77.6001 39 74.4644 37.8689 71.9487 35.9624L61.0884 46.8227C61.6736 48.0939 62 49.5088 62 51C62 56.5228 57.5228 61 52 61C50.5088 61 49.0939 60.6736 47.8227 60.0884L34.3813 73.5297C35.4934 75.1521 36.2948 77.0041 36.6999 79H73.414C74.7199 74.383 78.9649 71 84 71C90.0751 71 95 75.9249 95 82C95 88.0751 90.0751 93 84 93C78.9649 93 74.7199 89.617 73.414 85H36.6999C35.3101 91.8467 29.2569 97 22 97C13.7157 97 7 90.2843 7 82C7 73.7157 13.7157 67 22 67C24.9714 67 27.741 67.864 30.0713 69.3545L43.3702 56.0556C42.4993 54.5722 42 52.8444 42 51C42 45.4772 46.4771 41 52 41C53.8444 41 55.5722 41.4993 57.0556 42.3702L67.9771 31.4486C67.1959 30.0857 66.6225 28.5884 66.3001 27H37.5859C36.2801 31.617 32.0351 35 27 35C20.9249 35 16 30.0751 16 24C16 17.9249 20.9249 13 27 13C32.0351 13 36.2801 16.383 37.5859 21H66.3001C67.6899 14.1533 73.7431 9 81 9C89.2843 9 96 15.7157 96 24Z" fill="white" fill-opacity="0.4"/>\n' +
    '</svg>\n');
var JourneyPlugin = /** @class */ (function (_super) {
    __extends(JourneyPlugin, _super);
    function JourneyPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JourneyPlugin.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.loadSettings();
                this.addSettingTab(new JourneyPluginSettingsTab(this.app, this));
                this.addRibbonIcon('journey', 'Find Journey', function () {
                    _this.startSearch();
                });
                return [2 /*return*/];
            });
        });
    };
    JourneyPlugin.prototype.onunload = function () {
    };
    JourneyPlugin.prototype.findShortestPath = function (start, end) {
        return __awaiter(this, void 0, void 0, function () {
            var startBasename, endBasename, mdFiles, g, _i, mdFiles_1, md, nodeBasename, text, result, r, i, x, target, result_1, ts, i, tag, searchResult, finalList, step;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        startBasename = start;
                        endBasename = end;
                        console.log("Searching for journey between " + startBasename + " and " + endBasename);
                        mdFiles = this.app.vault.getMarkdownFiles();
                        g = new graphlib.Graph({});
                        _i = 0, mdFiles_1 = mdFiles;
                        _a.label = 1;
                    case 1:
                        if (!(_i < mdFiles_1.length)) return [3 /*break*/, 4];
                        md = mdFiles_1[_i];
                        nodeBasename = md.basename;
                        g.setNode(nodeBasename);
                        return [4 /*yield*/, this.app.vault.adapter.read(md.path)];
                    case 2:
                        text = _a.sent();
                        result = text.matchAll(/\[\[(.*)\]\]/gmi);
                        r = Array.from(result);
                        // console.log(this.settings.MOCMaxLinks);
                        if (!this.settings.skipMOCs || !(r.length > this.settings.MOCMaxLinks)) {
                            for (i = 0; i < r.length; i++) {
                                x = r[i];
                                target = x[1];
                                if (target.indexOf("#") != -1)
                                    target = target.substring(0, target.indexOf("#"));
                                if (target.indexOf("|") != -1)
                                    target = target.substring(0, target.indexOf("|"));
                                if (target.indexOf("^") != -1)
                                    target = target.substring(0, target.indexOf("^"));
                                target = target.trim();
                                if (this.settings.useForwardLinks) {
                                    // console.log("     Adding FORWARDLINK edge " + nodeBasename + " -> " + target);
                                    g.setEdge(nodeBasename, target);
                                }
                                // allow backlinks
                                if (this.settings.useBackLinks) {
                                    // console.log("     Adding BACKLINK edge " + target + " -> " + nodeBasename);
                                    g.setEdge(target, nodeBasename);
                                }
                            }
                        }
                        else {
                            console.log("Skipping edge creation for " + nodeBasename + " with too many (" + r.length + "/" + this.settings.MOCMaxLinks + ") links");
                        }
                        if (this.settings.useTags) {
                            result_1 = text.matchAll(/\#\w+/gmi);
                            ts = Array.from(result_1);
                            for (i = 0; i < ts.length; i++) {
                                tag = String(ts[i]);
                                // @ts-ignore
                                tag = tag.trim();
                                if (!g.hasNode(tag)) {
                                    // console.log("Adding Tag node" + tag)
                                    g.setNode(tag);
                                }
                                if (!g.hasEdge(nodeBasename, tag)) {
                                    // console.log("Adding edge " + nodeBasename + " -> " + tag);
                                    g.setEdge(nodeBasename, tag);
                                }
                                if (!g.hasEdge(tag, nodeBasename)) {
                                    // console.log("Adding edge " + tag + " -> " + nodeBasename);
                                    g.setEdge(tag, nodeBasename);
                                }
                            }
                        }
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        searchResult = graphlib.alg.dijkstra(g, startBasename);
                        finalList = new Array();
                        // console.log(searchResult);
                        if (searchResult[endBasename] !== undefined && searchResult[endBasename].distance !== Infinity) {
                            step = searchResult[endBasename];
                            finalList.push(endBasename);
                            while (step.distance != 0) {
                                finalList.push(step.predecessor);
                                step = searchResult[step.predecessor];
                            }
                        }
                        this.searchModal.close();
                        this.searchModal = new SearchModal(this.app, this);
                        this.resultsModal = new ResultsModal(this.app, this);
                        this.resultsModal.results = finalList;
                        this.resultsModal.startBasename = startBasename;
                        this.resultsModal.endBasename = endBasename;
                        this.resultsModal.open();
                        return [2 /*return*/];
                }
            });
        });
    };
    JourneyPlugin.prototype.startSearch = function () {
        this.searchModal = new SearchModal(this.app, this);
        this.searchModal.open();
    };
    JourneyPlugin.prototype.loadSettings = function () {
        var _this = this;
        this.settings = new JourneyPluginSettings();
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var loadedSettings;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadData()];
                    case 1:
                        loadedSettings = _a.sent();
                        if (loadedSettings) {
                            this.settings.useForwardLinks = loadedSettings.useForwardLinks;
                            this.settings.useBackLinks = loadedSettings.useBackLinks;
                            this.settings.useTags = loadedSettings.useTags;
                            this.settings.skipMOCs = loadedSettings.skipMOCs;
                            this.settings.MOCMaxLinks = loadedSettings.MOCMaxLinks;
                            this.settings.enableHighContrast = loadedSettings.enableHighContrast;
                        }
                        else {
                            this.saveData(this.settings);
                        }
                        return [2 /*return*/];
                }
            });
        }); })();
    };
    return JourneyPlugin;
}(obsidian.Plugin));
var SearchModal = /** @class */ (function (_super) {
    __extends(SearchModal, _super);
    function SearchModal(app, plugin) {
        var _this = _super.call(this, app) || this;
        _this.plugin = plugin;
        return _this;
    }
    SearchModal.prototype.findRandomNoteBasename = function () {
        var rand = Math.floor(Math.random() * this.markdownFiles.length) + 1;
        return this.markdownFiles[rand].basename;
    };
    SearchModal.prototype.onOpen = function () {
        var contentEl = this.contentEl;
        contentEl.createEl("h2", { text: "Find the Story Between Two Notes" });
        var formDiv = contentEl.createDiv({ cls: 'journey-search-form' });
        this.markdownFiles = this.app.vault.getMarkdownFiles();
        this.dropdownStart = new obsidian.DropdownComponent(formDiv);
        this.dropdownStart.addOption("", "Select your Starting Note");
        this.dropdownEnd = new obsidian.DropdownComponent(formDiv);
        this.dropdownEnd.addOption("", "Select your Ending Note");
        for (var i = 0; i < this.markdownFiles.length; i++) {
            var x = this.markdownFiles[i];
            this.dropdownStart.addOption(x.basename, x.basename);
            this.dropdownEnd.addOption(x.basename, x.basename);
        }
        formDiv.createEl("br");
        var button = formDiv.createEl('input', { type: 'submit', cls: 'journey-input-button', value: 'Find Journey' });
        var searchFunction = (function () {
            contentEl.replaceWith(contentEl.createEl("h2", { text: "Searching..." }));
            this.plugin.findShortestPath(this.dropdownStart.getValue(), this.dropdownEnd.getValue());
        }).bind(this);
        button.onclick = searchFunction;
        var lucky = formDiv.createEl('p', { cls: 'journey-search-lucky', text: 'I feel lucky' });
        var luckyFunction = (function () {
            this.dropdownStart.setValue(this.findRandomNoteBasename());
            this.dropdownEnd.setValue(this.findRandomNoteBasename());
        }).bind(this);
        lucky.onclick = luckyFunction;
        // add showing which settings are on
        formDiv.createEl("br");
        var via = "";
        if (this.plugin.settings.useForwardLinks) {
            via += "✔ Forwardlinks ";
        }
        if (this.plugin.settings.useBackLinks) {
            via += "✔ Backlinks ";
        }
        if (this.plugin.settings.useTags) {
            via += "✔ Tags";
        }
        var avoid = "";
        if (this.plugin.settings.skipMOCs) {
            avoid = "✔ MOCs with " + this.plugin.settings.MOCMaxLinks + " or more links ";
        }
        var visual = "";
        if (this.plugin.settings.enableHighContrast) {
            visual = "✔ High-Contrast ";
        }
        formDiv.createEl("p", { text: via + " " + avoid + " " + visual, cls: 'discovery-settings' });
    };
    SearchModal.prototype.onClose = function () {
        var contentEl = this.contentEl;
        contentEl.empty();
    };
    return SearchModal;
}(obsidian.Modal));
var ResultsModal = /** @class */ (function (_super) {
    __extends(ResultsModal, _super);
    function ResultsModal(app, plugin) {
        var _this = _super.call(this, app) || this;
        _this.plugin = plugin;
        return _this;
    }
    ResultsModal.prototype.onOpen = function () {
        // console.log(this.results);
        var contentEl = this.contentEl;
        var anotherSearch = contentEl.createEl("p", { text: "Start another search", cls: 'journey-result-list-reset-link' });
        var boundFunctionAnotherSearch = (function () {
            this.close();
            this.plugin.startSearch();
        }).bind(this);
        anotherSearch.onclick = boundFunctionAnotherSearch;
        if (this.results.length <= 0) {
            var noSearchResult = createDiv();
            noSearchResult.appendChild(createEl("h2", { text: "No Journey Found between " + this.startBasename + " and " + this.endBasename }));
            noSearchResult.appendChild(createEl("p", { text: "Here are some possible reasons why:" }));
            var explanationList = createEl('ul');
            if (!this.plugin.settings.useForwardLinks) {
                explanationList.createEl('li', { text: 'You currently have forward-links disabled in your settings' });
            }
            if (!this.plugin.settings.useBackLinks) {
                explanationList.createEl('li', { text: 'You currently have back-links disabled in your settings' });
            }
            if (!this.plugin.settings.useTags) {
                explanationList.createEl('li', { text: 'You currently have tags disabled in your settings' });
            }
            if (this.plugin.settings.skipMOCs) {
                explanationList.createEl('li', { text: 'You currently have skipping MOCs with more than ' + this.plugin.settings.MOCMaxLinks + ' outbound links enabled' });
            }
            explanationList.createEl('li', { text: 'The two notes may not be in the same network.' });
            noSearchResult.appendChild(explanationList);
            noSearchResult.appendChild(anotherSearch);
            contentEl.replaceWith(noSearchResult);
        }
        else {
            var listClass = 'journey-result-list';
            if (this.plugin.settings.enableHighContrast) {
                listClass = 'journey-result-list-high-contrast';
            }
            var list = createDiv({ cls: listClass });
            var reversedResults = this.results.reverse();
            for (var i = 0; i < reversedResults.length; i++) {
                var text = reversedResults[i];
                var cls = "journey-result-list-item-note";
                if (i == 0)
                    cls = "journey-result-list-item-start";
                if (i == reversedResults.length - 1)
                    cls = "journey-result-list-item-end";
                if (text.match(/^\#\w+/))
                    cls = "journey-result-list-item-tag";
                list.appendChild(createDiv({ text: text, cls: cls }));
            }
            contentEl.appendChild(list);
            var button = contentEl.createEl('input', { type: 'submit', cls: 'journey-input-button', value: 'Copy to Clipboard' });
            var boundFunctionButton = (function () {
                this.saveToClipboard();
            }).bind(this);
            button.onclick = boundFunctionButton;
            contentEl.appendChild(contentEl.createEl("hr"));
            contentEl.appendChild(button);
            contentEl.appendChild(anotherSearch);
        }
    };
    ResultsModal.prototype.onClose = function () {
        var contentEl = this.contentEl;
        contentEl.empty();
    };
    ResultsModal.prototype.saveToClipboard = function () {
        if (this.results.length > 0) {
            navigator.clipboard.writeText(this.createClipboardContent());
            new obsidian.Notice("Journey copied to clipboard!");
        }
    };
    ResultsModal.prototype.createClipboardContent = function () {
        var result = "## The Journey Between " + this.results.first() + " and " + this.results.last() + "\n";
        // @ts-ignore
        this.results.forEach(function (x) {
            result += "- " + x + "\n";
        });
        return result;
    };
    return ResultsModal;
}(obsidian.Modal));
var JourneyPluginSettings = /** @class */ (function () {
    function JourneyPluginSettings() {
        this.useForwardLinks = true;
        this.useBackLinks = true;
        this.useTags = true;
        this.skipMOCs = false;
        this.MOCMaxLinks = 30;
        this.enableHighContrast = false;
    }
    return JourneyPluginSettings;
}());
var JourneyPluginSettingsTab = /** @class */ (function (_super) {
    __extends(JourneyPluginSettingsTab, _super);
    function JourneyPluginSettingsTab(app, plugin) {
        var _this = _super.call(this, app, plugin) || this;
        _this.plugin = plugin;
        return _this;
    }
    JourneyPluginSettingsTab.prototype.display = function () {
        var _this = this;
        var containerEl = this.containerEl;
        containerEl.empty();
        containerEl.createEl("h2", { text: "Journey Plugin Settings" });
        new obsidian.Setting(containerEl)
            .setName("Use Forward-links")
            .setDesc("If set, allows to travel using forward-links. If you have a graph like this: A -> B -> C and you ask about the story between A and C, it will give you 'A, B, C' since A forward-links to B and B forward-links to C")
            .addToggle(function (toggle) {
            return toggle.setValue(_this.plugin.settings.useForwardLinks).onChange(function (value) {
                _this.plugin.settings.useForwardLinks = value;
                _this.plugin.saveData(_this.plugin.settings);
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Use Back-links")
            .setDesc("If set, allows to travel using back-links. If you have a graph like this: A -> B -> C and you ask about the story between C and A, it will give you 'C, B, A' since C has a back-link from B and B has a back-link from A")
            .addToggle(function (toggle) {
            return toggle.setValue(_this.plugin.settings.useBackLinks).onChange(function (value) {
                _this.plugin.settings.useBackLinks = value;
                _this.plugin.saveData(_this.plugin.settings);
            });
        });
        containerEl.createEl("h3", { text: "Include Tags" });
        new obsidian.Setting(containerEl)
            .setName("Use Tags")
            .setDesc("If set, allows to travel using tags. ")
            .addToggle(function (toggle) {
            return toggle.setValue(_this.plugin.settings.useTags).onChange(function (value) {
                _this.plugin.settings.useTags = value;
                _this.plugin.saveData(_this.plugin.settings);
            });
        });
        containerEl.createEl("h3", { text: "Avoid traveling via certain notes" });
        new obsidian.Setting(containerEl)
            .setName("Take the scenic route")
            .setDesc("If set, will skip 'hub' notes with too many links (MOCs). Configure exactly how many links make a MOC below.")
            .addToggle(function (toggle) {
            return toggle.setValue(_this.plugin.settings.skipMOCs).onChange(function (value) {
                _this.plugin.settings.skipMOCs = value;
                _this.plugin.saveData(_this.plugin.settings);
            });
        });
        new obsidian.Setting(containerEl)
            .setName("How many links make a MOC?")
            .setDesc("Configure at which point to skip a note because it contains too many out-bound links. Applies only if 'Take the scenic route' above is set.")
            .addSlider(function (toggle) {
            return toggle.setValue(_this.plugin.settings.MOCMaxLinks).onChange(function (value) {
                _this.MOCMaxLinksCounter.setText("Max link count: " + String(value));
                _this.plugin.settings.MOCMaxLinks = value;
                _this.plugin.saveData(_this.plugin.settings);
            });
        });
        this.MOCMaxLinksCounter = containerEl.createDiv({ cls: 'moc-max-links-counter', text: "Max link count: " + this.plugin.settings.MOCMaxLinks });
        containerEl.createEl("h3", { text: "Visual Settings" });
        new obsidian.Setting(containerEl)
            .setName("Enable High Contrast")
            .setDesc("If set, will increase the contrast to make the result-list easier to read.")
            .addToggle(function (toggle) {
            return toggle.setValue(_this.plugin.settings.enableHighContrast).onChange(function (value) {
                _this.plugin.settings.enableHighContrast = value;
                _this.plugin.saveData(_this.plugin.settings);
            });
        });
    };
    return JourneyPluginSettingsTab;
}(obsidian.PluginSettingTab));

module.exports = JourneyPlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUNsZWFyLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9lcS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2Fzc29jSW5kZXhPZi5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZURlbGV0ZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUhhcy5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZVNldC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX0xpc3RDYWNoZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0YWNrQ2xlYXIuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19zdGFja0RlbGV0ZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0YWNrR2V0LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tIYXMuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fcm9vdC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX1N5bWJvbC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFJhd1RhZy5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldFRhZy5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3QuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19jb3JlSnNEYXRhLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9faXNNYXNrZWQuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL190b1NvdXJjZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc05hdGl2ZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFZhbHVlLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TmF0aXZlLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fTWFwLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlQ3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaENsZWFyLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaERlbGV0ZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hHZXQuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoSGFzLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaFNldC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX0hhc2guanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUNsZWFyLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9faXNLZXlhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TWFwRGF0YS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlRGVsZXRlLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVHZXQuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUhhcy5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlU2V0LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fTWFwQ2FjaGUuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19zdGFja1NldC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX1N0YWNrLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlFYWNoLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fZGVmaW5lUHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlQXNzaWduVmFsdWUuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19hc3NpZ25WYWx1ZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2NvcHlPYmplY3QuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlVGltZXMuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0TGlrZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc0FyZ3VtZW50cy5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcmd1bWVudHMuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJyYXkuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL3N0dWJGYWxzZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaXNCdWZmZXIuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19pc0luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pc0xlbmd0aC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc1R5cGVkQXJyYXkuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlVW5hcnkuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19ub2RlVXRpbC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaXNUeXBlZEFycmF5LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlMaWtlS2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fb3ZlckFyZy5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX25hdGl2ZUtleXMuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlS2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcnJheUxpa2UuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2tleXMuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlQXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlS2V5c0luLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUtleXNJbi5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gva2V5c0luLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUFzc2lnbkluLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fY2xvbmVCdWZmZXIuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19jb3B5QXJyYXkuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheUZpbHRlci5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvc3R1YkFycmF5LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0U3ltYm9scy5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2NvcHlTeW1ib2xzLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlQdXNoLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0UHJvdG90eXBlLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0U3ltYm9sc0luLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fY29weVN5bWJvbHNJbi5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRBbGxLZXlzLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0QWxsS2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldEFsbEtleXNJbi5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX0RhdGFWaWV3LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fUHJvbWlzZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX1NldC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX1dlYWtNYXAuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19nZXRUYWcuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19pbml0Q2xvbmVBcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX1VpbnQ4QXJyYXkuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19jbG9uZUFycmF5QnVmZmVyLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fY2xvbmVEYXRhVmlldy5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nsb25lUmVnRXhwLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fY2xvbmVTeW1ib2wuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19jbG9uZVR5cGVkQXJyYXkuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19pbml0Q2xvbmVCeVRhZy5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VDcmVhdGUuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19pbml0Q2xvbmVPYmplY3QuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNNYXAuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2lzTWFwLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzU2V0LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pc1NldC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VDbG9uZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvY2xvbmUuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2NvbnN0YW50LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fY3JlYXRlQmFzZUZvci5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VGb3IuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlRm9yT3duLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fY3JlYXRlQmFzZUVhY2guanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlRWFjaC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaWRlbnRpdHkuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19jYXN0RnVuY3Rpb24uanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ZvckVhY2guanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2VhY2guanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlRmlsdGVyLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fc2V0Q2FjaGVBZGQuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19zZXRDYWNoZUhhcy5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX1NldENhY2hlLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlTb21lLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fY2FjaGVIYXMuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19lcXVhbEFycmF5cy5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcFRvQXJyYXkuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19zZXRUb0FycmF5LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fZXF1YWxCeVRhZy5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2VxdWFsT2JqZWN0cy5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc0VxdWFsRGVlcC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc0VxdWFsLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzTWF0Y2guanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19pc1N0cmljdENvbXBhcmFibGUuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19nZXRNYXRjaERhdGEuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19tYXRjaGVzU3RyaWN0Q29tcGFyYWJsZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VNYXRjaGVzLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pc1N5bWJvbC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzS2V5LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9tZW1vaXplLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fbWVtb2l6ZUNhcHBlZC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0cmluZ1RvUGF0aC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5TWFwLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVRvU3RyaW5nLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC90b1N0cmluZy5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nhc3RQYXRoLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fdG9LZXkuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9nZXQuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSGFzSW4uanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19oYXNQYXRoLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9oYXNJbi5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VNYXRjaGVzUHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlUHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlUHJvcGVydHlEZWVwLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9wcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJdGVyYXRlZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvZmlsdGVyLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUhhcy5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaGFzLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pc0VtcHR5LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pc1VuZGVmaW5lZC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VNYXAuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL21hcC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5UmVkdWNlLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVJlZHVjZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvcmVkdWNlLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pc1N0cmluZy5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2FzY2lpU2l6ZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc1VuaWNvZGUuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL191bmljb2RlU2l6ZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0cmluZ1NpemUuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL3NpemUuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL3RyYW5zZm9ybS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzRmxhdHRlbmFibGUuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlRmxhdHRlbi5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2FwcGx5LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fb3ZlclJlc3QuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlU2V0VG9TdHJpbmcuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19zaG9ydE91dC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX3NldFRvU3RyaW5nLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVJlc3QuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlRmluZEluZGV4LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzTmFOLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RyaWN0SW5kZXhPZi5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJbmRleE9mLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlJbmNsdWRlcy5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5SW5jbHVkZXNXaXRoLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9ub29wLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fY3JlYXRlU2V0LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVVuaXEuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJyYXlMaWtlT2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC91bmlvbi5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VWYWx1ZXMuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL3ZhbHVlcy5qcyIsIm5vZGVfbW9kdWxlcy9ncmFwaGxpYi9saWIvbG9kYXNoLmpzIiwibm9kZV9tb2R1bGVzL2dyYXBobGliL2xpYi9ncmFwaC5qcyIsIm5vZGVfbW9kdWxlcy9ncmFwaGxpYi9saWIvdmVyc2lvbi5qcyIsIm5vZGVfbW9kdWxlcy9ncmFwaGxpYi9saWIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZ3JhcGhsaWIvbGliL2pzb24uanMiLCJub2RlX21vZHVsZXMvZ3JhcGhsaWIvbGliL2FsZy9jb21wb25lbnRzLmpzIiwibm9kZV9tb2R1bGVzL2dyYXBobGliL2xpYi9kYXRhL3ByaW9yaXR5LXF1ZXVlLmpzIiwibm9kZV9tb2R1bGVzL2dyYXBobGliL2xpYi9hbGcvZGlqa3N0cmEuanMiLCJub2RlX21vZHVsZXMvZ3JhcGhsaWIvbGliL2FsZy9kaWprc3RyYS1hbGwuanMiLCJub2RlX21vZHVsZXMvZ3JhcGhsaWIvbGliL2FsZy90YXJqYW4uanMiLCJub2RlX21vZHVsZXMvZ3JhcGhsaWIvbGliL2FsZy9maW5kLWN5Y2xlcy5qcyIsIm5vZGVfbW9kdWxlcy9ncmFwaGxpYi9saWIvYWxnL2Zsb3lkLXdhcnNoYWxsLmpzIiwibm9kZV9tb2R1bGVzL2dyYXBobGliL2xpYi9hbGcvdG9wc29ydC5qcyIsIm5vZGVfbW9kdWxlcy9ncmFwaGxpYi9saWIvYWxnL2lzLWFjeWNsaWMuanMiLCJub2RlX21vZHVsZXMvZ3JhcGhsaWIvbGliL2FsZy9kZnMuanMiLCJub2RlX21vZHVsZXMvZ3JhcGhsaWIvbGliL2FsZy9wb3N0b3JkZXIuanMiLCJub2RlX21vZHVsZXMvZ3JhcGhsaWIvbGliL2FsZy9wcmVvcmRlci5qcyIsIm5vZGVfbW9kdWxlcy9ncmFwaGxpYi9saWIvYWxnL3ByaW0uanMiLCJub2RlX21vZHVsZXMvZ3JhcGhsaWIvbGliL2FsZy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9ncmFwaGxpYi9pbmRleC5qcyIsInNyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwKSkgX19jcmVhdGVCaW5kaW5nKG8sIG0sIHApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMCwgaWwgPSBmcm9tLmxlbmd0aCwgaiA9IHRvLmxlbmd0aDsgaSA8IGlsOyBpKyssIGorKylcclxuICAgICAgICB0b1tqXSA9IGZyb21baV07XHJcbiAgICByZXR1cm4gdG87XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBnZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBzZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlTWFwLnNldChyZWNlaXZlciwgdmFsdWUpO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcbiIsIi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBbXTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVDbGVhcjtcbiIsIi8qKlxuICogUGVyZm9ybXMgYVxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxO1xuIiwidmFyIGVxID0gcmVxdWlyZSgnLi9lcScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc29jSW5kZXhPZjtcbiIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHNwbGljZSA9IGFycmF5UHJvdG8uc3BsaWNlO1xuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgLS10aGlzLnNpemU7XG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZURlbGV0ZTtcbiIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIHJldHVybiBpbmRleCA8IDAgPyB1bmRlZmluZWQgOiBkYXRhW2luZGV4XVsxXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVHZXQ7XG4iLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUhhcztcbiIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBsaXN0IGNhY2hlIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBsaXN0IGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICArK3RoaXMuc2l6ZTtcbiAgICBkYXRhLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRhW2luZGV4XVsxXSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZVNldDtcbiIsInZhciBsaXN0Q2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUNsZWFyJyksXG4gICAgbGlzdENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlRGVsZXRlJyksXG4gICAgbGlzdENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlR2V0JyksXG4gICAgbGlzdENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlSGFzJyksXG4gICAgbGlzdENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBsaXN0IGNhY2hlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTGlzdENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYExpc3RDYWNoZWAuXG5MaXN0Q2FjaGUucHJvdG90eXBlLmNsZWFyID0gbGlzdENhY2hlQ2xlYXI7XG5MaXN0Q2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IGxpc3RDYWNoZURlbGV0ZTtcbkxpc3RDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbGlzdENhY2hlR2V0O1xuTGlzdENhY2hlLnByb3RvdHlwZS5oYXMgPSBsaXN0Q2FjaGVIYXM7XG5MaXN0Q2FjaGUucHJvdG90eXBlLnNldCA9IGxpc3RDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBMaXN0Q2FjaGU7XG4iLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqL1xuZnVuY3Rpb24gc3RhY2tDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGU7XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tDbGVhcjtcbiIsIi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICByZXN1bHQgPSBkYXRhWydkZWxldGUnXShrZXkpO1xuXG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0RlbGV0ZTtcbiIsIi8qKlxuICogR2V0cyB0aGUgc3RhY2sgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrR2V0KGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5nZXQoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0dldDtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGEgc3RhY2sgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0hhcyhrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tIYXM7XG4iLCIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyZWVHbG9iYWw7XG4iLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3Q7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmF3VGFnO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgZ2V0UmF3VGFnID0gcmVxdWlyZSgnLi9fZ2V0UmF3VGFnJyksXG4gICAgb2JqZWN0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19vYmplY3RUb1N0cmluZycpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0VGFnO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFzeW5jVGFnID0gJ1tvYmplY3QgQXN5bmNGdW5jdGlvbl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgcHJveHlUYWcgPSAnW29iamVjdCBQcm94eV0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXlzIGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBiYXNlR2V0VGFnKHZhbHVlKTtcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWcgfHwgdGFnID09IGFzeW5jVGFnIHx8IHRhZyA9PSBwcm94eVRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0Z1bmN0aW9uO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvdmVycmVhY2hpbmcgY29yZS1qcyBzaGltcy4gKi9cbnZhciBjb3JlSnNEYXRhID0gcm9vdFsnX19jb3JlLWpzX3NoYXJlZF9fJ107XG5cbm1vZHVsZS5leHBvcnRzID0gY29yZUpzRGF0YTtcbiIsInZhciBjb3JlSnNEYXRhID0gcmVxdWlyZSgnLi9fY29yZUpzRGF0YScpO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTWFza2VkO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvU291cmNlO1xuIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc01hc2tlZCA9IHJlcXVpcmUoJy4vX2lzTWFza2VkJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgdG9Tb3VyY2UgPSByZXF1aXJlKCcuL190b1NvdXJjZScpO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGBcbiAqIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcGF0dGVybnMpLlxuICovXG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBmdW5jVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZShyZVJlZ0V4cENoYXIsICdcXFxcJCYnKVxuICAucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZywgJyQxLio/JykgKyAnJCdcbik7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYXRpdmVgIHdpdGhvdXQgYmFkIHNoaW0gY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpIHx8IGlzTWFza2VkKHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcGF0dGVybiA9IGlzRnVuY3Rpb24odmFsdWUpID8gcmVJc05hdGl2ZSA6IHJlSXNIb3N0Q3RvcjtcbiAgcmV0dXJuIHBhdHRlcm4udGVzdCh0b1NvdXJjZSh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc05hdGl2ZTtcbiIsIi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFZhbHVlO1xuIiwidmFyIGJhc2VJc05hdGl2ZSA9IHJlcXVpcmUoJy4vX2Jhc2VJc05hdGl2ZScpLFxuICAgIGdldFZhbHVlID0gcmVxdWlyZSgnLi9fZ2V0VmFsdWUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXROYXRpdmU7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwO1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgbmF0aXZlQ3JlYXRlID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2NyZWF0ZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUNyZWF0ZTtcbiIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaENsZWFyO1xuIiwiLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtPYmplY3R9IGhhc2ggVGhlIGhhc2ggdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSB0aGlzLmhhcyhrZXkpICYmIGRlbGV0ZSB0aGlzLl9fZGF0YV9fW2tleV07XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoRGVsZXRlO1xuIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogR2V0cyB0aGUgaGFzaCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBoYXNoR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChuYXRpdmVDcmVhdGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZGF0YVtrZXldO1xuICAgIHJldHVybiByZXN1bHQgPT09IEhBU0hfVU5ERUZJTkVEID8gdW5kZWZpbmVkIDogcmVzdWx0O1xuICB9XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSkgPyBkYXRhW2tleV0gOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEdldDtcbiIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBoYXNoIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoSGFzKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHJldHVybiBuYXRpdmVDcmVhdGUgPyAoZGF0YVtrZXldICE9PSB1bmRlZmluZWQpIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hIYXM7XG4iLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqXG4gKiBTZXRzIHRoZSBoYXNoIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaGFzaCBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gaGFzaFNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgdGhpcy5zaXplICs9IHRoaXMuaGFzKGtleSkgPyAwIDogMTtcbiAgZGF0YVtrZXldID0gKG5hdGl2ZUNyZWF0ZSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSA/IEhBU0hfVU5ERUZJTkVEIDogdmFsdWU7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hTZXQ7XG4iLCJ2YXIgaGFzaENsZWFyID0gcmVxdWlyZSgnLi9faGFzaENsZWFyJyksXG4gICAgaGFzaERlbGV0ZSA9IHJlcXVpcmUoJy4vX2hhc2hEZWxldGUnKSxcbiAgICBoYXNoR2V0ID0gcmVxdWlyZSgnLi9faGFzaEdldCcpLFxuICAgIGhhc2hIYXMgPSByZXF1aXJlKCcuL19oYXNoSGFzJyksXG4gICAgaGFzaFNldCA9IHJlcXVpcmUoJy4vX2hhc2hTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgSGFzaGAuXG5IYXNoLnByb3RvdHlwZS5jbGVhciA9IGhhc2hDbGVhcjtcbkhhc2gucHJvdG90eXBlWydkZWxldGUnXSA9IGhhc2hEZWxldGU7XG5IYXNoLnByb3RvdHlwZS5nZXQgPSBoYXNoR2V0O1xuSGFzaC5wcm90b3R5cGUuaGFzID0gaGFzaEhhcztcbkhhc2gucHJvdG90eXBlLnNldCA9IGhhc2hTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gSGFzaDtcbiIsInZhciBIYXNoID0gcmVxdWlyZSgnLi9fSGFzaCcpLFxuICAgIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLnNpemUgPSAwO1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVDbGVhcjtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyB1bmlxdWUgb2JqZWN0IGtleS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleWFibGUodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAodHlwZSA9PSAnc3RyaW5nJyB8fCB0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicpXG4gICAgPyAodmFsdWUgIT09ICdfX3Byb3RvX18nKVxuICAgIDogKHZhbHVlID09PSBudWxsKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0tleWFibGU7XG4iLCJ2YXIgaXNLZXlhYmxlID0gcmVxdWlyZSgnLi9faXNLZXlhYmxlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRNYXBEYXRhO1xuIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlRGVsZXRlO1xuIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbWFwIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUdldChrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5nZXQoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUdldDtcbiIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlSGFzO1xuIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbWFwIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG1hcCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IGdldE1hcERhdGEodGhpcywga2V5KSxcbiAgICAgIHNpemUgPSBkYXRhLnNpemU7XG5cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSArPSBkYXRhLnNpemUgPT0gc2l6ZSA/IDAgOiAxO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZVNldDtcbiIsInZhciBtYXBDYWNoZUNsZWFyID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVDbGVhcicpLFxuICAgIG1hcENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVEZWxldGUnKSxcbiAgICBtYXBDYWNoZUdldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlR2V0JyksXG4gICAgbWFwQ2FjaGVIYXMgPSByZXF1aXJlKCcuL19tYXBDYWNoZUhhcycpLFxuICAgIG1hcENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWFwIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIE1hcENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYE1hcENhY2hlYC5cbk1hcENhY2hlLnByb3RvdHlwZS5jbGVhciA9IG1hcENhY2hlQ2xlYXI7XG5NYXBDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbWFwQ2FjaGVEZWxldGU7XG5NYXBDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbWFwQ2FjaGVHZXQ7XG5NYXBDYWNoZS5wcm90b3R5cGUuaGFzID0gbWFwQ2FjaGVIYXM7XG5NYXBDYWNoZS5wcm90b3R5cGUuc2V0ID0gbWFwQ2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwQ2FjaGU7XG4iLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyksXG4gICAgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpO1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKipcbiAqIFNldHMgdGhlIHN0YWNrIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIHN0YWNrIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzdGFja1NldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKGRhdGEgaW5zdGFuY2VvZiBMaXN0Q2FjaGUpIHtcbiAgICB2YXIgcGFpcnMgPSBkYXRhLl9fZGF0YV9fO1xuICAgIGlmICghTWFwIHx8IChwYWlycy5sZW5ndGggPCBMQVJHRV9BUlJBWV9TSVpFIC0gMSkpIHtcbiAgICAgIHBhaXJzLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgICAgIHRoaXMuc2l6ZSA9ICsrZGF0YS5zaXplO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlKHBhaXJzKTtcbiAgfVxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja1NldDtcbiIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBzdGFja0NsZWFyID0gcmVxdWlyZSgnLi9fc3RhY2tDbGVhcicpLFxuICAgIHN0YWNrRGVsZXRlID0gcmVxdWlyZSgnLi9fc3RhY2tEZWxldGUnKSxcbiAgICBzdGFja0dldCA9IHJlcXVpcmUoJy4vX3N0YWNrR2V0JyksXG4gICAgc3RhY2tIYXMgPSByZXF1aXJlKCcuL19zdGFja0hhcycpLFxuICAgIHN0YWNrU2V0ID0gcmVxdWlyZSgnLi9fc3RhY2tTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RhY2sgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU3RhY2soZW50cmllcykge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlKGVudHJpZXMpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTdGFja2AuXG5TdGFjay5wcm90b3R5cGUuY2xlYXIgPSBzdGFja0NsZWFyO1xuU3RhY2sucHJvdG90eXBlWydkZWxldGUnXSA9IHN0YWNrRGVsZXRlO1xuU3RhY2sucHJvdG90eXBlLmdldCA9IHN0YWNrR2V0O1xuU3RhY2sucHJvdG90eXBlLmhhcyA9IHN0YWNrSGFzO1xuU3RhY2sucHJvdG90eXBlLnNldCA9IHN0YWNrU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YWNrO1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uZm9yRWFjaGAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5RWFjaChhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChpdGVyYXRlZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkgPT09IGZhbHNlKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5RWFjaDtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKTtcblxudmFyIGRlZmluZVByb3BlcnR5ID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIHZhciBmdW5jID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2RlZmluZVByb3BlcnR5Jyk7XG4gICAgZnVuYyh7fSwgJycsIHt9KTtcbiAgICByZXR1cm4gZnVuYztcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmaW5lUHJvcGVydHk7XG4iLCJ2YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19kZWZpbmVQcm9wZXJ0eScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBhc3NpZ25WYWx1ZWAgYW5kIGBhc3NpZ25NZXJnZVZhbHVlYCB3aXRob3V0XG4gKiB2YWx1ZSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGFzc2lnbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFzc2lnbi5cbiAqL1xuZnVuY3Rpb24gYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5ID09ICdfX3Byb3RvX18nICYmIGRlZmluZVByb3BlcnR5KSB7XG4gICAgZGVmaW5lUHJvcGVydHkob2JqZWN0LCBrZXksIHtcbiAgICAgICdjb25maWd1cmFibGUnOiB0cnVlLFxuICAgICAgJ2VudW1lcmFibGUnOiB0cnVlLFxuICAgICAgJ3ZhbHVlJzogdmFsdWUsXG4gICAgICAnd3JpdGFibGUnOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VBc3NpZ25WYWx1ZTtcbiIsInZhciBiYXNlQXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19iYXNlQXNzaWduVmFsdWUnKSxcbiAgICBlcSA9IHJlcXVpcmUoJy4vZXEnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBc3NpZ25zIGB2YWx1ZWAgdG8gYGtleWAgb2YgYG9iamVjdGAgaWYgdGhlIGV4aXN0aW5nIHZhbHVlIGlzIG5vdCBlcXVpdmFsZW50XG4gKiB1c2luZyBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogZm9yIGVxdWFsaXR5IGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XTtcbiAgaWYgKCEoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYgZXEob2JqVmFsdWUsIHZhbHVlKSkgfHxcbiAgICAgICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpKSB7XG4gICAgYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NpZ25WYWx1ZTtcbiIsInZhciBhc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Fzc2lnblZhbHVlJyksXG4gICAgYmFzZUFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYmFzZUFzc2lnblZhbHVlJyk7XG5cbi8qKlxuICogQ29waWVzIHByb3BlcnRpZXMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IHByb3BzIFRoZSBwcm9wZXJ0eSBpZGVudGlmaWVycyB0byBjb3B5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIHRvLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29waWVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlPYmplY3Qoc291cmNlLCBwcm9wcywgb2JqZWN0LCBjdXN0b21pemVyKSB7XG4gIHZhciBpc05ldyA9ICFvYmplY3Q7XG4gIG9iamVjdCB8fCAob2JqZWN0ID0ge30pO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHByb3BzW2luZGV4XTtcblxuICAgIHZhciBuZXdWYWx1ZSA9IGN1c3RvbWl6ZXJcbiAgICAgID8gY3VzdG9taXplcihvYmplY3Rba2V5XSwgc291cmNlW2tleV0sIGtleSwgb2JqZWN0LCBzb3VyY2UpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBuZXdWYWx1ZSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgICBpZiAoaXNOZXcpIHtcbiAgICAgIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcHlPYmplY3Q7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRpbWVzYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHNcbiAqIG9yIG1heCBhcnJheSBsZW5ndGggY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGludm9rZSBgaXRlcmF0ZWVgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRpbWVzKG4sIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobik7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBuKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGluZGV4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUaW1lcztcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNBcmd1bWVudHNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqL1xuZnVuY3Rpb24gYmFzZUlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IGFyZ3NUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzQXJndW1lbnRzO1xuIiwidmFyIGJhc2VJc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vX2Jhc2VJc0FyZ3VtZW50cycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FyZ3VtZW50cyA9IGJhc2VJc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA/IGJhc2VJc0FyZ3VtZW50cyA6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJndW1lbnRzO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheTtcbiIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLnN0dWJGYWxzZSk7XG4gKiAvLyA9PiBbZmFsc2UsIGZhbHNlXVxuICovXG5mdW5jdGlvbiBzdHViRmFsc2UoKSB7XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHViRmFsc2U7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKSxcbiAgICBzdHViRmFsc2UgPSByZXF1aXJlKCcuL3N0dWJGYWxzZScpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUlzQnVmZmVyID0gQnVmZmVyID8gQnVmZmVyLmlzQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IEJ1ZmZlcigyKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgVWludDhBcnJheSgyKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNCdWZmZXIgPSBuYXRpdmVJc0J1ZmZlciB8fCBzdHViRmFsc2U7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNCdWZmZXI7XG4iLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xudmFyIHJlSXNVaW50ID0gL14oPzowfFsxLTldXFxkKikkLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgaW5kZXguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9TUFYX1NBRkVfSU5URUdFUl0gVGhlIHVwcGVyIGJvdW5kcyBvZiBhIHZhbGlkIGluZGV4LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBpbmRleCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIGxlbmd0aCA9IGxlbmd0aCA9PSBudWxsID8gTUFYX1NBRkVfSU5URUdFUiA6IGxlbmd0aDtcblxuICByZXR1cm4gISFsZW5ndGggJiZcbiAgICAodHlwZSA9PSAnbnVtYmVyJyB8fFxuICAgICAgKHR5cGUgIT0gJ3N5bWJvbCcgJiYgcmVJc1VpbnQudGVzdCh2YWx1ZSkpKSAmJlxuICAgICAgICAodmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8IGxlbmd0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNJbmRleDtcbiIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb25cbiAqIFtgVG9MZW5ndGhgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0xlbmd0aCgzKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTGVuZ3RoKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKEluZmluaXR5KTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aCgnMycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJlxuICAgIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0xlbmd0aDtcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIG9mIHR5cGVkIGFycmF5cy4gKi9cbnZhciB0eXBlZEFycmF5VGFncyA9IHt9O1xudHlwZWRBcnJheVRhZ3NbZmxvYXQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1tmbG9hdDY0VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQ4VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2ludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50OFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG50eXBlZEFycmF5VGFnc1thcmdzVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2FycmF5VGFnXSA9XG50eXBlZEFycmF5VGFnc1thcnJheUJ1ZmZlclRhZ10gPSB0eXBlZEFycmF5VGFnc1tib29sVGFnXSA9XG50eXBlZEFycmF5VGFnc1tkYXRhVmlld1RhZ10gPSB0eXBlZEFycmF5VGFnc1tkYXRlVGFnXSA9XG50eXBlZEFycmF5VGFnc1tlcnJvclRhZ10gPSB0eXBlZEFycmF5VGFnc1tmdW5jVGFnXSA9XG50eXBlZEFycmF5VGFnc1ttYXBUYWddID0gdHlwZWRBcnJheVRhZ3NbbnVtYmVyVGFnXSA9XG50eXBlZEFycmF5VGFnc1tvYmplY3RUYWddID0gdHlwZWRBcnJheVRhZ3NbcmVnZXhwVGFnXSA9XG50eXBlZEFycmF5VGFnc1tzZXRUYWddID0gdHlwZWRBcnJheVRhZ3Nbc3RyaW5nVGFnXSA9XG50eXBlZEFycmF5VGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzVHlwZWRBcnJheWAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNUeXBlZEFycmF5KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmXG4gICAgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhIXR5cGVkQXJyYXlUYWdzW2Jhc2VHZXRUYWcodmFsdWUpXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNUeXBlZEFycmF5O1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmFyeWAgd2l0aG91dCBzdXBwb3J0IGZvciBzdG9yaW5nIG1ldGFkYXRhLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYXAgYXJndW1lbnRzIGZvci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNhcHBlZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVVuYXJ5KGZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmModmFsdWUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VVbmFyeTtcbiIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgcHJvY2Vzc2AgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVQcm9jZXNzID0gbW9kdWxlRXhwb3J0cyAmJiBmcmVlR2xvYmFsLnByb2Nlc3M7XG5cbi8qKiBVc2VkIHRvIGFjY2VzcyBmYXN0ZXIgTm9kZS5qcyBoZWxwZXJzLiAqL1xudmFyIG5vZGVVdGlsID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIC8vIFVzZSBgdXRpbC50eXBlc2AgZm9yIE5vZGUuanMgMTArLlxuICAgIHZhciB0eXBlcyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5yZXF1aXJlICYmIGZyZWVNb2R1bGUucmVxdWlyZSgndXRpbCcpLnR5cGVzO1xuXG4gICAgaWYgKHR5cGVzKSB7XG4gICAgICByZXR1cm4gdHlwZXM7XG4gICAgfVxuXG4gICAgLy8gTGVnYWN5IGBwcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKWAgZm9yIE5vZGUuanMgPCAxMC5cbiAgICByZXR1cm4gZnJlZVByb2Nlc3MgJiYgZnJlZVByb2Nlc3MuYmluZGluZyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nKCd1dGlsJyk7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5vZGVVdGlsO1xuIiwidmFyIGJhc2VJc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL19iYXNlSXNUeXBlZEFycmF5JyksXG4gICAgYmFzZVVuYXJ5ID0gcmVxdWlyZSgnLi9fYmFzZVVuYXJ5JyksXG4gICAgbm9kZVV0aWwgPSByZXF1aXJlKCcuL19ub2RlVXRpbCcpO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc1R5cGVkQXJyYXkgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc1R5cGVkQXJyYXk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIHR5cGVkIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkobmV3IFVpbnQ4QXJyYXkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KFtdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1R5cGVkQXJyYXkgPSBub2RlSXNUeXBlZEFycmF5ID8gYmFzZVVuYXJ5KG5vZGVJc1R5cGVkQXJyYXkpIDogYmFzZUlzVHlwZWRBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc1R5cGVkQXJyYXk7XG4iLCJ2YXIgYmFzZVRpbWVzID0gcmVxdWlyZSgnLi9fYmFzZVRpbWVzJyksXG4gICAgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnLi9pc0J1ZmZlcicpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuL19pc0luZGV4JyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9pc1R5cGVkQXJyYXknKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIHRoZSBhcnJheS1saWtlIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtib29sZWFufSBpbmhlcml0ZWQgU3BlY2lmeSByZXR1cm5pbmcgaW5oZXJpdGVkIHByb3BlcnR5IG5hbWVzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYXJyYXlMaWtlS2V5cyh2YWx1ZSwgaW5oZXJpdGVkKSB7XG4gIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpLFxuICAgICAgaXNBcmcgPSAhaXNBcnIgJiYgaXNBcmd1bWVudHModmFsdWUpLFxuICAgICAgaXNCdWZmID0gIWlzQXJyICYmICFpc0FyZyAmJiBpc0J1ZmZlcih2YWx1ZSksXG4gICAgICBpc1R5cGUgPSAhaXNBcnIgJiYgIWlzQXJnICYmICFpc0J1ZmYgJiYgaXNUeXBlZEFycmF5KHZhbHVlKSxcbiAgICAgIHNraXBJbmRleGVzID0gaXNBcnIgfHwgaXNBcmcgfHwgaXNCdWZmIHx8IGlzVHlwZSxcbiAgICAgIHJlc3VsdCA9IHNraXBJbmRleGVzID8gYmFzZVRpbWVzKHZhbHVlLmxlbmd0aCwgU3RyaW5nKSA6IFtdLFxuICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcblxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAoKGluaGVyaXRlZCB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSAmJlxuICAgICAgICAhKHNraXBJbmRleGVzICYmIChcbiAgICAgICAgICAgLy8gU2FmYXJpIDkgaGFzIGVudW1lcmFibGUgYGFyZ3VtZW50cy5sZW5ndGhgIGluIHN0cmljdCBtb2RlLlxuICAgICAgICAgICBrZXkgPT0gJ2xlbmd0aCcgfHxcbiAgICAgICAgICAgLy8gTm9kZS5qcyAwLjEwIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIGJ1ZmZlcnMuXG4gICAgICAgICAgIChpc0J1ZmYgJiYgKGtleSA9PSAnb2Zmc2V0JyB8fCBrZXkgPT0gJ3BhcmVudCcpKSB8fFxuICAgICAgICAgICAvLyBQaGFudG9tSlMgMiBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiB0eXBlZCBhcnJheXMuXG4gICAgICAgICAgIChpc1R5cGUgJiYgKGtleSA9PSAnYnVmZmVyJyB8fCBrZXkgPT0gJ2J5dGVMZW5ndGgnIHx8IGtleSA9PSAnYnl0ZU9mZnNldCcpKSB8fFxuICAgICAgICAgICAvLyBTa2lwIGluZGV4IHByb3BlcnRpZXMuXG4gICAgICAgICAgIGlzSW5kZXgoa2V5LCBsZW5ndGgpXG4gICAgICAgICkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5TGlrZUtleXM7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhIHByb3RvdHlwZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm90b3R5cGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNQcm90b3R5cGUodmFsdWUpIHtcbiAgdmFyIEN0b3IgPSB2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvcixcbiAgICAgIHByb3RvID0gKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUpIHx8IG9iamVjdFByb3RvO1xuXG4gIHJldHVybiB2YWx1ZSA9PT0gcHJvdG87XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNQcm90b3R5cGU7XG4iLCIvKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvdmVyQXJnO1xuIiwidmFyIG92ZXJBcmcgPSByZXF1aXJlKCcuL19vdmVyQXJnJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVLZXlzID0gb3ZlckFyZyhPYmplY3Qua2V5cywgT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVLZXlzO1xuIiwidmFyIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKSxcbiAgICBuYXRpdmVLZXlzID0gcmVxdWlyZSgnLi9fbmF0aXZlS2V5cycpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNgIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXMob2JqZWN0KSB7XG4gIGlmICghaXNQcm90b3R5cGUob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKG9iamVjdCk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYga2V5ICE9ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUtleXM7XG4iLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5TGlrZTtcbiIsInZhciBhcnJheUxpa2VLZXlzID0gcmVxdWlyZSgnLi9fYXJyYXlMaWtlS2V5cycpLFxuICAgIGJhc2VLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUtleXMnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy4gU2VlIHRoZVxuICogW0VTIHNwZWNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogXy5rZXlzKCdoaScpO1xuICogLy8gPT4gWycwJywgJzEnXVxuICovXG5mdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0KSA6IGJhc2VLZXlzKG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5cztcbiIsInZhciBjb3B5T2JqZWN0ID0gcmVxdWlyZSgnLi9fY29weU9iamVjdCcpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5hc3NpZ25gIHdpdGhvdXQgc3VwcG9ydCBmb3IgbXVsdGlwbGUgc291cmNlc1xuICogb3IgYGN1c3RvbWl6ZXJgIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgc291cmNlIG9iamVjdC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VBc3NpZ24ob2JqZWN0LCBzb3VyY2UpIHtcbiAgcmV0dXJuIG9iamVjdCAmJiBjb3B5T2JqZWN0KHNvdXJjZSwga2V5cyhzb3VyY2UpLCBvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VBc3NpZ247XG4iLCIvKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgbGlrZVxuICogW2BPYmplY3Qua2V5c2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZXhjZXB0IHRoYXQgaXQgaW5jbHVkZXMgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydGllcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gbmF0aXZlS2V5c0luKG9iamVjdCkge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGlmIChvYmplY3QgIT0gbnVsbCkge1xuICAgIGZvciAodmFyIGtleSBpbiBPYmplY3Qob2JqZWN0KSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVLZXlzSW47XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgaXNQcm90b3R5cGUgPSByZXF1aXJlKCcuL19pc1Byb3RvdHlwZScpLFxuICAgIG5hdGl2ZUtleXNJbiA9IHJlcXVpcmUoJy4vX25hdGl2ZUtleXNJbicpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNJbmAgd2hpY2ggZG9lc24ndCB0cmVhdCBzcGFyc2UgYXJyYXlzIGFzIGRlbnNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBiYXNlS2V5c0luKG9iamVjdCkge1xuICBpZiAoIWlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5c0luKG9iamVjdCk7XG4gIH1cbiAgdmFyIGlzUHJvdG8gPSBpc1Byb3RvdHlwZShvYmplY3QpLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmICghKGtleSA9PSAnY29uc3RydWN0b3InICYmIChpc1Byb3RvIHx8ICFoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VLZXlzSW47XG4iLCJ2YXIgYXJyYXlMaWtlS2V5cyA9IHJlcXVpcmUoJy4vX2FycmF5TGlrZUtleXMnKSxcbiAgICBiYXNlS2V5c0luID0gcmVxdWlyZSgnLi9fYmFzZUtleXNJbicpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBhbmQgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzSW4obmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYicsICdjJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqL1xuZnVuY3Rpb24ga2V5c0luKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0LCB0cnVlKSA6IGJhc2VLZXlzSW4ob2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzSW47XG4iLCJ2YXIgY29weU9iamVjdCA9IHJlcXVpcmUoJy4vX2NvcHlPYmplY3QnKSxcbiAgICBrZXlzSW4gPSByZXF1aXJlKCcuL2tleXNJbicpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmFzc2lnbkluYCB3aXRob3V0IHN1cHBvcnQgZm9yIG11bHRpcGxlIHNvdXJjZXNcbiAqIG9yIGBjdXN0b21pemVyYCBmdW5jdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBiYXNlQXNzaWduSW4ob2JqZWN0LCBzb3VyY2UpIHtcbiAgcmV0dXJuIG9iamVjdCAmJiBjb3B5T2JqZWN0KHNvdXJjZSwga2V5c0luKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUFzc2lnbkluO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkLFxuICAgIGFsbG9jVW5zYWZlID0gQnVmZmVyID8gQnVmZmVyLmFsbG9jVW5zYWZlIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiAgYGJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBjbG9uZUJ1ZmZlcihidWZmZXIsIGlzRGVlcCkge1xuICBpZiAoaXNEZWVwKSB7XG4gICAgcmV0dXJuIGJ1ZmZlci5zbGljZSgpO1xuICB9XG4gIHZhciBsZW5ndGggPSBidWZmZXIubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gYWxsb2NVbnNhZmUgPyBhbGxvY1Vuc2FmZShsZW5ndGgpIDogbmV3IGJ1ZmZlci5jb25zdHJ1Y3RvcihsZW5ndGgpO1xuXG4gIGJ1ZmZlci5jb3B5KHJlc3VsdCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVCdWZmZXI7XG4iLCIvKipcbiAqIENvcGllcyB0aGUgdmFsdWVzIG9mIGBzb3VyY2VgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IHNvdXJjZSBUaGUgYXJyYXkgdG8gY29weSB2YWx1ZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheT1bXV0gVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIHRvLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlBcnJheShzb3VyY2UsIGFycmF5KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gc291cmNlLmxlbmd0aDtcblxuICBhcnJheSB8fCAoYXJyYXkgPSBBcnJheShsZW5ndGgpKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtpbmRleF0gPSBzb3VyY2VbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb3B5QXJyYXk7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5maWx0ZXJgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBmaWx0ZXJlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlGaWx0ZXIoYXJyYXksIHByZWRpY2F0ZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzSW5kZXggPSAwLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF07XG4gICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmVzdWx0W3Jlc0luZGV4KytdID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlGaWx0ZXI7XG4iLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYSBuZXcgZW1wdHkgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBlbXB0eSBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIGFycmF5cyA9IF8udGltZXMoMiwgXy5zdHViQXJyYXkpO1xuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5cyk7XG4gKiAvLyA9PiBbW10sIFtdXVxuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5c1swXSA9PT0gYXJyYXlzWzFdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIHN0dWJBcnJheSgpIHtcbiAgcmV0dXJuIFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJBcnJheTtcbiIsInZhciBhcnJheUZpbHRlciA9IHJlcXVpcmUoJy4vX2FycmF5RmlsdGVyJyksXG4gICAgc3R1YkFycmF5ID0gcmVxdWlyZSgnLi9zdHViQXJyYXknKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUdldFN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2Ygc3ltYm9scy5cbiAqL1xudmFyIGdldFN5bWJvbHMgPSAhbmF0aXZlR2V0U3ltYm9scyA/IHN0dWJBcnJheSA6IGZ1bmN0aW9uKG9iamVjdCkge1xuICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gIHJldHVybiBhcnJheUZpbHRlcihuYXRpdmVHZXRTeW1ib2xzKG9iamVjdCksIGZ1bmN0aW9uKHN5bWJvbCkge1xuICAgIHJldHVybiBwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKG9iamVjdCwgc3ltYm9sKTtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFN5bWJvbHM7XG4iLCJ2YXIgY29weU9iamVjdCA9IHJlcXVpcmUoJy4vX2NvcHlPYmplY3QnKSxcbiAgICBnZXRTeW1ib2xzID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9scycpO1xuXG4vKipcbiAqIENvcGllcyBvd24gc3ltYm9scyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyBmcm9tLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBzeW1ib2xzIHRvLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weVN5bWJvbHMoc291cmNlLCBvYmplY3QpIHtcbiAgcmV0dXJuIGNvcHlPYmplY3Qoc291cmNlLCBnZXRTeW1ib2xzKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weVN5bWJvbHM7XG4iLCIvKipcbiAqIEFwcGVuZHMgdGhlIGVsZW1lbnRzIG9mIGB2YWx1ZXNgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0FycmF5fSB2YWx1ZXMgVGhlIHZhbHVlcyB0byBhcHBlbmQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlQdXNoKGFycmF5LCB2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMubGVuZ3RoLFxuICAgICAgb2Zmc2V0ID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbb2Zmc2V0ICsgaW5kZXhdID0gdmFsdWVzW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlQdXNoO1xuIiwidmFyIG92ZXJBcmcgPSByZXF1aXJlKCcuL19vdmVyQXJnJyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIGdldFByb3RvdHlwZSA9IG92ZXJBcmcoT2JqZWN0LmdldFByb3RvdHlwZU9mLCBPYmplY3QpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFByb3RvdHlwZTtcbiIsInZhciBhcnJheVB1c2ggPSByZXF1aXJlKCcuL19hcnJheVB1c2gnKSxcbiAgICBnZXRQcm90b3R5cGUgPSByZXF1aXJlKCcuL19nZXRQcm90b3R5cGUnKSxcbiAgICBnZXRTeW1ib2xzID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9scycpLFxuICAgIHN0dWJBcnJheSA9IHJlcXVpcmUoJy4vc3R1YkFycmF5Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVHZXRTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2Ygc3ltYm9scy5cbiAqL1xudmFyIGdldFN5bWJvbHNJbiA9ICFuYXRpdmVHZXRTeW1ib2xzID8gc3R1YkFycmF5IDogZnVuY3Rpb24ob2JqZWN0KSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgd2hpbGUgKG9iamVjdCkge1xuICAgIGFycmF5UHVzaChyZXN1bHQsIGdldFN5bWJvbHMob2JqZWN0KSk7XG4gICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlKG9iamVjdCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0U3ltYm9sc0luO1xuIiwidmFyIGNvcHlPYmplY3QgPSByZXF1aXJlKCcuL19jb3B5T2JqZWN0JyksXG4gICAgZ2V0U3ltYm9sc0luID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9sc0luJyk7XG5cbi8qKlxuICogQ29waWVzIG93biBhbmQgaW5oZXJpdGVkIHN5bWJvbHMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgZnJvbS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyB0by5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlTeW1ib2xzSW4oc291cmNlLCBvYmplY3QpIHtcbiAgcmV0dXJuIGNvcHlPYmplY3Qoc291cmNlLCBnZXRTeW1ib2xzSW4oc291cmNlKSwgb2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb3B5U3ltYm9sc0luO1xuIiwidmFyIGFycmF5UHVzaCA9IHJlcXVpcmUoJy4vX2FycmF5UHVzaCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0QWxsS2V5c2AgYW5kIGBnZXRBbGxLZXlzSW5gIHdoaWNoIHVzZXNcbiAqIGBrZXlzRnVuY2AgYW5kIGBzeW1ib2xzRnVuY2AgdG8gZ2V0IHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZFxuICogc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5c0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUga2V5cyBvZiBgb2JqZWN0YC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN5bWJvbHNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXNGdW5jLCBzeW1ib2xzRnVuYykge1xuICB2YXIgcmVzdWx0ID0ga2V5c0Z1bmMob2JqZWN0KTtcbiAgcmV0dXJuIGlzQXJyYXkob2JqZWN0KSA/IHJlc3VsdCA6IGFycmF5UHVzaChyZXN1bHQsIHN5bWJvbHNGdW5jKG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRBbGxLZXlzO1xuIiwidmFyIGJhc2VHZXRBbGxLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUdldEFsbEtleXMnKSxcbiAgICBnZXRTeW1ib2xzID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9scycpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBnZXRBbGxLZXlzKG9iamVjdCkge1xuICByZXR1cm4gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzLCBnZXRTeW1ib2xzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRBbGxLZXlzO1xuIiwidmFyIGJhc2VHZXRBbGxLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUdldEFsbEtleXMnKSxcbiAgICBnZXRTeW1ib2xzSW4gPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzSW4nKSxcbiAgICBrZXlzSW4gPSByZXF1aXJlKCcuL2tleXNJbicpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2Ygb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmRcbiAqIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGdldEFsbEtleXNJbihvYmplY3QpIHtcbiAgcmV0dXJuIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5c0luLCBnZXRTeW1ib2xzSW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEFsbEtleXNJbjtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgRGF0YVZpZXcgPSBnZXROYXRpdmUocm9vdCwgJ0RhdGFWaWV3Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGF0YVZpZXc7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFByb21pc2UgPSBnZXROYXRpdmUocm9vdCwgJ1Byb21pc2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlO1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBTZXQgPSBnZXROYXRpdmUocm9vdCwgJ1NldCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNldDtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgV2Vha01hcCA9IGdldE5hdGl2ZShyb290LCAnV2Vha01hcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdlYWtNYXA7XG4iLCJ2YXIgRGF0YVZpZXcgPSByZXF1aXJlKCcuL19EYXRhVmlldycpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpLFxuICAgIFByb21pc2UgPSByZXF1aXJlKCcuL19Qcm9taXNlJyksXG4gICAgU2V0ID0gcmVxdWlyZSgnLi9fU2V0JyksXG4gICAgV2Vha01hcCA9IHJlcXVpcmUoJy4vX1dlYWtNYXAnKSxcbiAgICBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHByb21pc2VUYWcgPSAnW29iamVjdCBQcm9taXNlXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1hcHMsIHNldHMsIGFuZCB3ZWFrbWFwcy4gKi9cbnZhciBkYXRhVmlld0N0b3JTdHJpbmcgPSB0b1NvdXJjZShEYXRhVmlldyksXG4gICAgbWFwQ3RvclN0cmluZyA9IHRvU291cmNlKE1hcCksXG4gICAgcHJvbWlzZUN0b3JTdHJpbmcgPSB0b1NvdXJjZShQcm9taXNlKSxcbiAgICBzZXRDdG9yU3RyaW5nID0gdG9Tb3VyY2UoU2V0KSxcbiAgICB3ZWFrTWFwQ3RvclN0cmluZyA9IHRvU291cmNlKFdlYWtNYXApO1xuXG4vKipcbiAqIEdldHMgdGhlIGB0b1N0cmluZ1RhZ2Agb2YgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG52YXIgZ2V0VGFnID0gYmFzZUdldFRhZztcblxuLy8gRmFsbGJhY2sgZm9yIGRhdGEgdmlld3MsIG1hcHMsIHNldHMsIGFuZCB3ZWFrIG1hcHMgaW4gSUUgMTEgYW5kIHByb21pc2VzIGluIE5vZGUuanMgPCA2LlxuaWYgKChEYXRhVmlldyAmJiBnZXRUYWcobmV3IERhdGFWaWV3KG5ldyBBcnJheUJ1ZmZlcigxKSkpICE9IGRhdGFWaWV3VGFnKSB8fFxuICAgIChNYXAgJiYgZ2V0VGFnKG5ldyBNYXApICE9IG1hcFRhZykgfHxcbiAgICAoUHJvbWlzZSAmJiBnZXRUYWcoUHJvbWlzZS5yZXNvbHZlKCkpICE9IHByb21pc2VUYWcpIHx8XG4gICAgKFNldCAmJiBnZXRUYWcobmV3IFNldCkgIT0gc2V0VGFnKSB8fFxuICAgIChXZWFrTWFwICYmIGdldFRhZyhuZXcgV2Vha01hcCkgIT0gd2Vha01hcFRhZykpIHtcbiAgZ2V0VGFnID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gYmFzZUdldFRhZyh2YWx1ZSksXG4gICAgICAgIEN0b3IgPSByZXN1bHQgPT0gb2JqZWN0VGFnID8gdmFsdWUuY29uc3RydWN0b3IgOiB1bmRlZmluZWQsXG4gICAgICAgIGN0b3JTdHJpbmcgPSBDdG9yID8gdG9Tb3VyY2UoQ3RvcikgOiAnJztcblxuICAgIGlmIChjdG9yU3RyaW5nKSB7XG4gICAgICBzd2l0Y2ggKGN0b3JTdHJpbmcpIHtcbiAgICAgICAgY2FzZSBkYXRhVmlld0N0b3JTdHJpbmc6IHJldHVybiBkYXRhVmlld1RhZztcbiAgICAgICAgY2FzZSBtYXBDdG9yU3RyaW5nOiByZXR1cm4gbWFwVGFnO1xuICAgICAgICBjYXNlIHByb21pc2VDdG9yU3RyaW5nOiByZXR1cm4gcHJvbWlzZVRhZztcbiAgICAgICAgY2FzZSBzZXRDdG9yU3RyaW5nOiByZXR1cm4gc2V0VGFnO1xuICAgICAgICBjYXNlIHdlYWtNYXBDdG9yU3RyaW5nOiByZXR1cm4gd2Vha01hcFRhZztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRUYWc7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIGFycmF5IGNsb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVBcnJheShhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gbmV3IGFycmF5LmNvbnN0cnVjdG9yKGxlbmd0aCk7XG5cbiAgLy8gQWRkIHByb3BlcnRpZXMgYXNzaWduZWQgYnkgYFJlZ0V4cCNleGVjYC5cbiAgaWYgKGxlbmd0aCAmJiB0eXBlb2YgYXJyYXlbMF0gPT0gJ3N0cmluZycgJiYgaGFzT3duUHJvcGVydHkuY2FsbChhcnJheSwgJ2luZGV4JykpIHtcbiAgICByZXN1bHQuaW5kZXggPSBhcnJheS5pbmRleDtcbiAgICByZXN1bHQuaW5wdXQgPSBhcnJheS5pbnB1dDtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXRDbG9uZUFycmF5O1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFVpbnQ4QXJyYXkgPSByb290LlVpbnQ4QXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gVWludDhBcnJheTtcbiIsInZhciBVaW50OEFycmF5ID0gcmVxdWlyZSgnLi9fVWludDhBcnJheScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgYXJyYXlCdWZmZXJgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBhcnJheUJ1ZmZlciBUaGUgYXJyYXkgYnVmZmVyIHRvIGNsb25lLlxuICogQHJldHVybnMge0FycmF5QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYXJyYXkgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBjbG9uZUFycmF5QnVmZmVyKGFycmF5QnVmZmVyKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgYXJyYXlCdWZmZXIuY29uc3RydWN0b3IoYXJyYXlCdWZmZXIuYnl0ZUxlbmd0aCk7XG4gIG5ldyBVaW50OEFycmF5KHJlc3VsdCkuc2V0KG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVBcnJheUJ1ZmZlcjtcbiIsInZhciBjbG9uZUFycmF5QnVmZmVyID0gcmVxdWlyZSgnLi9fY2xvbmVBcnJheUJ1ZmZlcicpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgZGF0YVZpZXdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YVZpZXcgVGhlIGRhdGEgdmlldyB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgZGF0YSB2aWV3LlxuICovXG5mdW5jdGlvbiBjbG9uZURhdGFWaWV3KGRhdGFWaWV3LCBpc0RlZXApIHtcbiAgdmFyIGJ1ZmZlciA9IGlzRGVlcCA/IGNsb25lQXJyYXlCdWZmZXIoZGF0YVZpZXcuYnVmZmVyKSA6IGRhdGFWaWV3LmJ1ZmZlcjtcbiAgcmV0dXJuIG5ldyBkYXRhVmlldy5jb25zdHJ1Y3RvcihidWZmZXIsIGRhdGFWaWV3LmJ5dGVPZmZzZXQsIGRhdGFWaWV3LmJ5dGVMZW5ndGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lRGF0YVZpZXc7XG4iLCIvKiogVXNlZCB0byBtYXRjaCBgUmVnRXhwYCBmbGFncyBmcm9tIHRoZWlyIGNvZXJjZWQgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUZsYWdzID0gL1xcdyokLztcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYHJlZ2V4cGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSByZWdleHAgVGhlIHJlZ2V4cCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGNsb25lUmVnRXhwKHJlZ2V4cCkge1xuICB2YXIgcmVzdWx0ID0gbmV3IHJlZ2V4cC5jb25zdHJ1Y3RvcihyZWdleHAuc291cmNlLCByZUZsYWdzLmV4ZWMocmVnZXhwKSk7XG4gIHJlc3VsdC5sYXN0SW5kZXggPSByZWdleHAubGFzdEluZGV4O1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lUmVnRXhwO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVmFsdWVPZiA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udmFsdWVPZiA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgdGhlIGBzeW1ib2xgIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHN5bWJvbCBUaGUgc3ltYm9sIG9iamVjdCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCBzeW1ib2wgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBjbG9uZVN5bWJvbChzeW1ib2wpIHtcbiAgcmV0dXJuIHN5bWJvbFZhbHVlT2YgPyBPYmplY3Qoc3ltYm9sVmFsdWVPZi5jYWxsKHN5bWJvbCkpIDoge307XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVTeW1ib2w7XG4iLCJ2YXIgY2xvbmVBcnJheUJ1ZmZlciA9IHJlcXVpcmUoJy4vX2Nsb25lQXJyYXlCdWZmZXInKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYHR5cGVkQXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gdHlwZWRBcnJheSBUaGUgdHlwZWQgYXJyYXkgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHR5cGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBjbG9uZVR5cGVkQXJyYXkodHlwZWRBcnJheSwgaXNEZWVwKSB7XG4gIHZhciBidWZmZXIgPSBpc0RlZXAgPyBjbG9uZUFycmF5QnVmZmVyKHR5cGVkQXJyYXkuYnVmZmVyKSA6IHR5cGVkQXJyYXkuYnVmZmVyO1xuICByZXR1cm4gbmV3IHR5cGVkQXJyYXkuY29uc3RydWN0b3IoYnVmZmVyLCB0eXBlZEFycmF5LmJ5dGVPZmZzZXQsIHR5cGVkQXJyYXkubGVuZ3RoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZVR5cGVkQXJyYXk7XG4iLCJ2YXIgY2xvbmVBcnJheUJ1ZmZlciA9IHJlcXVpcmUoJy4vX2Nsb25lQXJyYXlCdWZmZXInKSxcbiAgICBjbG9uZURhdGFWaWV3ID0gcmVxdWlyZSgnLi9fY2xvbmVEYXRhVmlldycpLFxuICAgIGNsb25lUmVnRXhwID0gcmVxdWlyZSgnLi9fY2xvbmVSZWdFeHAnKSxcbiAgICBjbG9uZVN5bWJvbCA9IHJlcXVpcmUoJy4vX2Nsb25lU3ltYm9sJyksXG4gICAgY2xvbmVUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9fY2xvbmVUeXBlZEFycmF5Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIG9iamVjdCBjbG9uZSBiYXNlZCBvbiBpdHMgYHRvU3RyaW5nVGFnYC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBvbmx5IHN1cHBvcnRzIGNsb25pbmcgdmFsdWVzIHdpdGggdGFncyBvZlxuICogYEJvb2xlYW5gLCBgRGF0ZWAsIGBFcnJvcmAsIGBNYXBgLCBgTnVtYmVyYCwgYFJlZ0V4cGAsIGBTZXRgLCBvciBgU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHBhcmFtIHtzdHJpbmd9IHRhZyBUaGUgYHRvU3RyaW5nVGFnYCBvZiB0aGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVCeVRhZyhvYmplY3QsIHRhZywgaXNEZWVwKSB7XG4gIHZhciBDdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yO1xuICBzd2l0Y2ggKHRhZykge1xuICAgIGNhc2UgYXJyYXlCdWZmZXJUYWc6XG4gICAgICByZXR1cm4gY2xvbmVBcnJheUJ1ZmZlcihvYmplY3QpO1xuXG4gICAgY2FzZSBib29sVGFnOlxuICAgIGNhc2UgZGF0ZVRhZzpcbiAgICAgIHJldHVybiBuZXcgQ3Rvcigrb2JqZWN0KTtcblxuICAgIGNhc2UgZGF0YVZpZXdUYWc6XG4gICAgICByZXR1cm4gY2xvbmVEYXRhVmlldyhvYmplY3QsIGlzRGVlcCk7XG5cbiAgICBjYXNlIGZsb2F0MzJUYWc6IGNhc2UgZmxvYXQ2NFRhZzpcbiAgICBjYXNlIGludDhUYWc6IGNhc2UgaW50MTZUYWc6IGNhc2UgaW50MzJUYWc6XG4gICAgY2FzZSB1aW50OFRhZzogY2FzZSB1aW50OENsYW1wZWRUYWc6IGNhc2UgdWludDE2VGFnOiBjYXNlIHVpbnQzMlRhZzpcbiAgICAgIHJldHVybiBjbG9uZVR5cGVkQXJyYXkob2JqZWN0LCBpc0RlZXApO1xuXG4gICAgY2FzZSBtYXBUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3I7XG5cbiAgICBjYXNlIG51bWJlclRhZzpcbiAgICBjYXNlIHN0cmluZ1RhZzpcbiAgICAgIHJldHVybiBuZXcgQ3RvcihvYmplY3QpO1xuXG4gICAgY2FzZSByZWdleHBUYWc6XG4gICAgICByZXR1cm4gY2xvbmVSZWdFeHAob2JqZWN0KTtcblxuICAgIGNhc2Ugc2V0VGFnOlxuICAgICAgcmV0dXJuIG5ldyBDdG9yO1xuXG4gICAgY2FzZSBzeW1ib2xUYWc6XG4gICAgICByZXR1cm4gY2xvbmVTeW1ib2wob2JqZWN0KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXRDbG9uZUJ5VGFnO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RDcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmNyZWF0ZWAgd2l0aG91dCBzdXBwb3J0IGZvciBhc3NpZ25pbmdcbiAqIHByb3BlcnRpZXMgdG8gdGhlIGNyZWF0ZWQgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvdG8gVGhlIG9iamVjdCB0byBpbmhlcml0IGZyb20uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBuZXcgb2JqZWN0LlxuICovXG52YXIgYmFzZUNyZWF0ZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gb2JqZWN0KCkge31cbiAgcmV0dXJuIGZ1bmN0aW9uKHByb3RvKSB7XG4gICAgaWYgKCFpc09iamVjdChwcm90bykpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgaWYgKG9iamVjdENyZWF0ZSkge1xuICAgICAgcmV0dXJuIG9iamVjdENyZWF0ZShwcm90byk7XG4gICAgfVxuICAgIG9iamVjdC5wcm90b3R5cGUgPSBwcm90bztcbiAgICB2YXIgcmVzdWx0ID0gbmV3IG9iamVjdDtcbiAgICBvYmplY3QucHJvdG90eXBlID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VDcmVhdGU7XG4iLCJ2YXIgYmFzZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX2Jhc2VDcmVhdGUnKSxcbiAgICBnZXRQcm90b3R5cGUgPSByZXF1aXJlKCcuL19nZXRQcm90b3R5cGUnKSxcbiAgICBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgYW4gb2JqZWN0IGNsb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lT2JqZWN0KG9iamVjdCkge1xuICByZXR1cm4gKHR5cGVvZiBvYmplY3QuY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNQcm90b3R5cGUob2JqZWN0KSlcbiAgICA/IGJhc2VDcmVhdGUoZ2V0UHJvdG90eXBlKG9iamVjdCkpXG4gICAgOiB7fTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbml0Q2xvbmVPYmplY3Q7XG4iLCJ2YXIgZ2V0VGFnID0gcmVxdWlyZSgnLi9fZ2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTWFwYCB3aXRob3V0IE5vZGUuanMgb3B0aW1pemF0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG1hcCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNNYXAodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgZ2V0VGFnKHZhbHVlKSA9PSBtYXBUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTWFwO1xuIiwidmFyIGJhc2VJc01hcCA9IHJlcXVpcmUoJy4vX2Jhc2VJc01hcCcpLFxuICAgIGJhc2VVbmFyeSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmFyeScpLFxuICAgIG5vZGVVdGlsID0gcmVxdWlyZSgnLi9fbm9kZVV0aWwnKTtcblxuLyogTm9kZS5qcyBoZWxwZXIgcmVmZXJlbmNlcy4gKi9cbnZhciBub2RlSXNNYXAgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc01hcDtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYE1hcGAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbWFwLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNNYXAobmV3IE1hcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc01hcChuZXcgV2Vha01hcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNNYXAgPSBub2RlSXNNYXAgPyBiYXNlVW5hcnkobm9kZUlzTWFwKSA6IGJhc2VJc01hcDtcblxubW9kdWxlLmV4cG9ydHMgPSBpc01hcDtcbiIsInZhciBnZXRUYWcgPSByZXF1aXJlKCcuL19nZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc2V0VGFnID0gJ1tvYmplY3QgU2V0XSc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNTZXRgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc2V0LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc1NldCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBnZXRUYWcodmFsdWUpID09IHNldFRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNTZXQ7XG4iLCJ2YXIgYmFzZUlzU2V0ID0gcmVxdWlyZSgnLi9fYmFzZUlzU2V0JyksXG4gICAgYmFzZVVuYXJ5ID0gcmVxdWlyZSgnLi9fYmFzZVVuYXJ5JyksXG4gICAgbm9kZVV0aWwgPSByZXF1aXJlKCcuL19ub2RlVXRpbCcpO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc1NldCA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzU2V0O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU2V0YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzZXQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1NldChuZXcgU2V0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU2V0KG5ldyBXZWFrU2V0KTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1NldCA9IG5vZGVJc1NldCA/IGJhc2VVbmFyeShub2RlSXNTZXQpIDogYmFzZUlzU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU2V0O1xuIiwidmFyIFN0YWNrID0gcmVxdWlyZSgnLi9fU3RhY2snKSxcbiAgICBhcnJheUVhY2ggPSByZXF1aXJlKCcuL19hcnJheUVhY2gnKSxcbiAgICBhc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Fzc2lnblZhbHVlJyksXG4gICAgYmFzZUFzc2lnbiA9IHJlcXVpcmUoJy4vX2Jhc2VBc3NpZ24nKSxcbiAgICBiYXNlQXNzaWduSW4gPSByZXF1aXJlKCcuL19iYXNlQXNzaWduSW4nKSxcbiAgICBjbG9uZUJ1ZmZlciA9IHJlcXVpcmUoJy4vX2Nsb25lQnVmZmVyJyksXG4gICAgY29weUFycmF5ID0gcmVxdWlyZSgnLi9fY29weUFycmF5JyksXG4gICAgY29weVN5bWJvbHMgPSByZXF1aXJlKCcuL19jb3B5U3ltYm9scycpLFxuICAgIGNvcHlTeW1ib2xzSW4gPSByZXF1aXJlKCcuL19jb3B5U3ltYm9sc0luJyksXG4gICAgZ2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2dldEFsbEtleXMnKSxcbiAgICBnZXRBbGxLZXlzSW4gPSByZXF1aXJlKCcuL19nZXRBbGxLZXlzSW4nKSxcbiAgICBnZXRUYWcgPSByZXF1aXJlKCcuL19nZXRUYWcnKSxcbiAgICBpbml0Q2xvbmVBcnJheSA9IHJlcXVpcmUoJy4vX2luaXRDbG9uZUFycmF5JyksXG4gICAgaW5pdENsb25lQnlUYWcgPSByZXF1aXJlKCcuL19pbml0Q2xvbmVCeVRhZycpLFxuICAgIGluaXRDbG9uZU9iamVjdCA9IHJlcXVpcmUoJy4vX2luaXRDbG9uZU9iamVjdCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc01hcCA9IHJlcXVpcmUoJy4vaXNNYXAnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBpc1NldCA9IHJlcXVpcmUoJy4vaXNTZXQnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyksXG4gICAga2V5c0luID0gcmVxdWlyZSgnLi9rZXlzSW4nKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgY2xvbmluZy4gKi9cbnZhciBDTE9ORV9ERUVQX0ZMQUcgPSAxLFxuICAgIENMT05FX0ZMQVRfRkxBRyA9IDIsXG4gICAgQ0xPTkVfU1lNQk9MU19GTEFHID0gNDtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBzdXBwb3J0ZWQgYnkgYF8uY2xvbmVgLiAqL1xudmFyIGNsb25lYWJsZVRhZ3MgPSB7fTtcbmNsb25lYWJsZVRhZ3NbYXJnc1RhZ10gPSBjbG9uZWFibGVUYWdzW2FycmF5VGFnXSA9XG5jbG9uZWFibGVUYWdzW2FycmF5QnVmZmVyVGFnXSA9IGNsb25lYWJsZVRhZ3NbZGF0YVZpZXdUYWddID1cbmNsb25lYWJsZVRhZ3NbYm9vbFRhZ10gPSBjbG9uZWFibGVUYWdzW2RhdGVUYWddID1cbmNsb25lYWJsZVRhZ3NbZmxvYXQzMlRhZ10gPSBjbG9uZWFibGVUYWdzW2Zsb2F0NjRUYWddID1cbmNsb25lYWJsZVRhZ3NbaW50OFRhZ10gPSBjbG9uZWFibGVUYWdzW2ludDE2VGFnXSA9XG5jbG9uZWFibGVUYWdzW2ludDMyVGFnXSA9IGNsb25lYWJsZVRhZ3NbbWFwVGFnXSA9XG5jbG9uZWFibGVUYWdzW251bWJlclRhZ10gPSBjbG9uZWFibGVUYWdzW29iamVjdFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tyZWdleHBUYWddID0gY2xvbmVhYmxlVGFnc1tzZXRUYWddID1cbmNsb25lYWJsZVRhZ3Nbc3RyaW5nVGFnXSA9IGNsb25lYWJsZVRhZ3Nbc3ltYm9sVGFnXSA9XG5jbG9uZWFibGVUYWdzW3VpbnQ4VGFnXSA9IGNsb25lYWJsZVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9XG5jbG9uZWFibGVUYWdzW3VpbnQxNlRhZ10gPSBjbG9uZWFibGVUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xuY2xvbmVhYmxlVGFnc1tlcnJvclRhZ10gPSBjbG9uZWFibGVUYWdzW2Z1bmNUYWddID1cbmNsb25lYWJsZVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5jbG9uZWAgYW5kIGBfLmNsb25lRGVlcGAgd2hpY2ggdHJhY2tzXG4gKiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuXG4gKiAgMSAtIERlZXAgY2xvbmVcbiAqICAyIC0gRmxhdHRlbiBpbmhlcml0ZWQgcHJvcGVydGllc1xuICogIDQgLSBDbG9uZSBzeW1ib2xzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjbG9uaW5nLlxuICogQHBhcmFtIHtzdHJpbmd9IFtrZXldIFRoZSBrZXkgb2YgYHZhbHVlYC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgcGFyZW50IG9iamVjdCBvZiBgdmFsdWVgLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzIGFuZCB0aGVpciBjbG9uZSBjb3VudGVycGFydHMuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgY2xvbmVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBiYXNlQ2xvbmUodmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGtleSwgb2JqZWN0LCBzdGFjaykge1xuICB2YXIgcmVzdWx0LFxuICAgICAgaXNEZWVwID0gYml0bWFzayAmIENMT05FX0RFRVBfRkxBRyxcbiAgICAgIGlzRmxhdCA9IGJpdG1hc2sgJiBDTE9ORV9GTEFUX0ZMQUcsXG4gICAgICBpc0Z1bGwgPSBiaXRtYXNrICYgQ0xPTkVfU1lNQk9MU19GTEFHO1xuXG4gIGlmIChjdXN0b21pemVyKSB7XG4gICAgcmVzdWx0ID0gb2JqZWN0ID8gY3VzdG9taXplcih2YWx1ZSwga2V5LCBvYmplY3QsIHN0YWNrKSA6IGN1c3RvbWl6ZXIodmFsdWUpO1xuICB9XG4gIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgdmFyIGlzQXJyID0gaXNBcnJheSh2YWx1ZSk7XG4gIGlmIChpc0Fycikge1xuICAgIHJlc3VsdCA9IGluaXRDbG9uZUFycmF5KHZhbHVlKTtcbiAgICBpZiAoIWlzRGVlcCkge1xuICAgICAgcmV0dXJuIGNvcHlBcnJheSh2YWx1ZSwgcmVzdWx0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhZyA9IGdldFRhZyh2YWx1ZSksXG4gICAgICAgIGlzRnVuYyA9IHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWc7XG5cbiAgICBpZiAoaXNCdWZmZXIodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY2xvbmVCdWZmZXIodmFsdWUsIGlzRGVlcCk7XG4gICAgfVxuICAgIGlmICh0YWcgPT0gb2JqZWN0VGFnIHx8IHRhZyA9PSBhcmdzVGFnIHx8IChpc0Z1bmMgJiYgIW9iamVjdCkpIHtcbiAgICAgIHJlc3VsdCA9IChpc0ZsYXQgfHwgaXNGdW5jKSA/IHt9IDogaW5pdENsb25lT2JqZWN0KHZhbHVlKTtcbiAgICAgIGlmICghaXNEZWVwKSB7XG4gICAgICAgIHJldHVybiBpc0ZsYXRcbiAgICAgICAgICA/IGNvcHlTeW1ib2xzSW4odmFsdWUsIGJhc2VBc3NpZ25JbihyZXN1bHQsIHZhbHVlKSlcbiAgICAgICAgICA6IGNvcHlTeW1ib2xzKHZhbHVlLCBiYXNlQXNzaWduKHJlc3VsdCwgdmFsdWUpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFjbG9uZWFibGVUYWdzW3RhZ10pIHtcbiAgICAgICAgcmV0dXJuIG9iamVjdCA/IHZhbHVlIDoge307XG4gICAgICB9XG4gICAgICByZXN1bHQgPSBpbml0Q2xvbmVCeVRhZyh2YWx1ZSwgdGFnLCBpc0RlZXApO1xuICAgIH1cbiAgfVxuICAvLyBDaGVjayBmb3IgY2lyY3VsYXIgcmVmZXJlbmNlcyBhbmQgcmV0dXJuIGl0cyBjb3JyZXNwb25kaW5nIGNsb25lLlxuICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldCh2YWx1ZSk7XG4gIGlmIChzdGFja2VkKSB7XG4gICAgcmV0dXJuIHN0YWNrZWQ7XG4gIH1cbiAgc3RhY2suc2V0KHZhbHVlLCByZXN1bHQpO1xuXG4gIGlmIChpc1NldCh2YWx1ZSkpIHtcbiAgICB2YWx1ZS5mb3JFYWNoKGZ1bmN0aW9uKHN1YlZhbHVlKSB7XG4gICAgICByZXN1bHQuYWRkKGJhc2VDbG9uZShzdWJWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3ViVmFsdWUsIHZhbHVlLCBzdGFjaykpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKGlzTWFwKHZhbHVlKSkge1xuICAgIHZhbHVlLmZvckVhY2goZnVuY3Rpb24oc3ViVmFsdWUsIGtleSkge1xuICAgICAgcmVzdWx0LnNldChrZXksIGJhc2VDbG9uZShzdWJWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwga2V5LCB2YWx1ZSwgc3RhY2spKTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBrZXlzRnVuYyA9IGlzRnVsbFxuICAgID8gKGlzRmxhdCA/IGdldEFsbEtleXNJbiA6IGdldEFsbEtleXMpXG4gICAgOiAoaXNGbGF0ID8ga2V5c0luIDoga2V5cyk7XG5cbiAgdmFyIHByb3BzID0gaXNBcnIgPyB1bmRlZmluZWQgOiBrZXlzRnVuYyh2YWx1ZSk7XG4gIGFycmF5RWFjaChwcm9wcyB8fCB2YWx1ZSwgZnVuY3Rpb24oc3ViVmFsdWUsIGtleSkge1xuICAgIGlmIChwcm9wcykge1xuICAgICAga2V5ID0gc3ViVmFsdWU7XG4gICAgICBzdWJWYWx1ZSA9IHZhbHVlW2tleV07XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IHBvcHVsYXRlIGNsb25lIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgYXNzaWduVmFsdWUocmVzdWx0LCBrZXksIGJhc2VDbG9uZShzdWJWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwga2V5LCB2YWx1ZSwgc3RhY2spKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUNsb25lO1xuIiwidmFyIGJhc2VDbG9uZSA9IHJlcXVpcmUoJy4vX2Jhc2VDbG9uZScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciBjbG9uaW5nLiAqL1xudmFyIENMT05FX1NZTUJPTFNfRkxBRyA9IDQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHNoYWxsb3cgY2xvbmUgb2YgYHZhbHVlYC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvbiB0aGVcbiAqIFtzdHJ1Y3R1cmVkIGNsb25lIGFsZ29yaXRobV0oaHR0cHM6Ly9tZG4uaW8vU3RydWN0dXJlZF9jbG9uZV9hbGdvcml0aG0pXG4gKiBhbmQgc3VwcG9ydHMgY2xvbmluZyBhcnJheXMsIGFycmF5IGJ1ZmZlcnMsIGJvb2xlYW5zLCBkYXRlIG9iamVjdHMsIG1hcHMsXG4gKiBudW1iZXJzLCBgT2JqZWN0YCBvYmplY3RzLCByZWdleGVzLCBzZXRzLCBzdHJpbmdzLCBzeW1ib2xzLCBhbmQgdHlwZWRcbiAqIGFycmF5cy4gVGhlIG93biBlbnVtZXJhYmxlIHByb3BlcnRpZXMgb2YgYGFyZ3VtZW50c2Agb2JqZWN0cyBhcmUgY2xvbmVkXG4gKiBhcyBwbGFpbiBvYmplY3RzLiBBbiBlbXB0eSBvYmplY3QgaXMgcmV0dXJuZWQgZm9yIHVuY2xvbmVhYmxlIHZhbHVlcyBzdWNoXG4gKiBhcyBlcnJvciBvYmplY3RzLCBmdW5jdGlvbnMsIERPTSBub2RlcywgYW5kIFdlYWtNYXBzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBjbG9uZWQgdmFsdWUuXG4gKiBAc2VlIF8uY2xvbmVEZWVwXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gW3sgJ2EnOiAxIH0sIHsgJ2InOiAyIH1dO1xuICpcbiAqIHZhciBzaGFsbG93ID0gXy5jbG9uZShvYmplY3RzKTtcbiAqIGNvbnNvbGUubG9nKHNoYWxsb3dbMF0gPT09IG9iamVjdHNbMF0pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBjbG9uZSh2YWx1ZSkge1xuICByZXR1cm4gYmFzZUNsb25lKHZhbHVlLCBDTE9ORV9TWU1CT0xTX0ZMQUcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lO1xuIiwiLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGB2YWx1ZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHJldHVybiBmcm9tIHRoZSBuZXcgZnVuY3Rpb24uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjb25zdGFudCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdHMgPSBfLnRpbWVzKDIsIF8uY29uc3RhbnQoeyAnYSc6IDEgfSkpO1xuICpcbiAqIGNvbnNvbGUubG9nKG9iamVjdHMpO1xuICogLy8gPT4gW3sgJ2EnOiAxIH0sIHsgJ2EnOiAxIH1dXG4gKlxuICogY29uc29sZS5sb2cob2JqZWN0c1swXSA9PT0gb2JqZWN0c1sxXSk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGNvbnN0YW50KHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29uc3RhbnQ7XG4iLCIvKipcbiAqIENyZWF0ZXMgYSBiYXNlIGZ1bmN0aW9uIGZvciBtZXRob2RzIGxpa2UgYF8uZm9ySW5gIGFuZCBgXy5mb3JPd25gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtmcm9tUmlnaHRdIFNwZWNpZnkgaXRlcmF0aW5nIGZyb20gcmlnaHQgdG8gbGVmdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGJhc2UgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VGb3IoZnJvbVJpZ2h0KSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QsIGl0ZXJhdGVlLCBrZXlzRnVuYykge1xuICAgIHZhciBpbmRleCA9IC0xLFxuICAgICAgICBpdGVyYWJsZSA9IE9iamVjdChvYmplY3QpLFxuICAgICAgICBwcm9wcyA9IGtleXNGdW5jKG9iamVjdCksXG4gICAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgdmFyIGtleSA9IHByb3BzW2Zyb21SaWdodCA/IGxlbmd0aCA6ICsraW5kZXhdO1xuICAgICAgaWYgKGl0ZXJhdGVlKGl0ZXJhYmxlW2tleV0sIGtleSwgaXRlcmFibGUpID09PSBmYWxzZSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVCYXNlRm9yO1xuIiwidmFyIGNyZWF0ZUJhc2VGb3IgPSByZXF1aXJlKCcuL19jcmVhdGVCYXNlRm9yJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGJhc2VGb3JPd25gIHdoaWNoIGl0ZXJhdGVzIG92ZXIgYG9iamVjdGBcbiAqIHByb3BlcnRpZXMgcmV0dXJuZWQgYnkgYGtleXNGdW5jYCBhbmQgaW52b2tlcyBgaXRlcmF0ZWVgIGZvciBlYWNoIHByb3BlcnR5LlxuICogSXRlcmF0ZWUgZnVuY3Rpb25zIG1heSBleGl0IGl0ZXJhdGlvbiBlYXJseSBieSBleHBsaWNpdGx5IHJldHVybmluZyBgZmFsc2VgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGtleXNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIGtleXMgb2YgYG9iamVjdGAuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG52YXIgYmFzZUZvciA9IGNyZWF0ZUJhc2VGb3IoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRm9yO1xuIiwidmFyIGJhc2VGb3IgPSByZXF1aXJlKCcuL19iYXNlRm9yJyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZvck93bmAgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VGb3JPd24ob2JqZWN0LCBpdGVyYXRlZSkge1xuICByZXR1cm4gb2JqZWN0ICYmIGJhc2VGb3Iob2JqZWN0LCBpdGVyYXRlZSwga2V5cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUZvck93bjtcbiIsInZhciBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgYGJhc2VFYWNoYCBvciBgYmFzZUVhY2hSaWdodGAgZnVuY3Rpb24uXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVhY2hGdW5jIFRoZSBmdW5jdGlvbiB0byBpdGVyYXRlIG92ZXIgYSBjb2xsZWN0aW9uLlxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBiYXNlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVCYXNlRWFjaChlYWNoRnVuYywgZnJvbVJpZ2h0KSB7XG4gIHJldHVybiBmdW5jdGlvbihjb2xsZWN0aW9uLCBpdGVyYXRlZSkge1xuICAgIGlmIChjb2xsZWN0aW9uID09IG51bGwpIHtcbiAgICAgIHJldHVybiBjb2xsZWN0aW9uO1xuICAgIH1cbiAgICBpZiAoIWlzQXJyYXlMaWtlKGNvbGxlY3Rpb24pKSB7XG4gICAgICByZXR1cm4gZWFjaEZ1bmMoY29sbGVjdGlvbiwgaXRlcmF0ZWUpO1xuICAgIH1cbiAgICB2YXIgbGVuZ3RoID0gY29sbGVjdGlvbi5sZW5ndGgsXG4gICAgICAgIGluZGV4ID0gZnJvbVJpZ2h0ID8gbGVuZ3RoIDogLTEsXG4gICAgICAgIGl0ZXJhYmxlID0gT2JqZWN0KGNvbGxlY3Rpb24pO1xuXG4gICAgd2hpbGUgKChmcm9tUmlnaHQgPyBpbmRleC0tIDogKytpbmRleCA8IGxlbmd0aCkpIHtcbiAgICAgIGlmIChpdGVyYXRlZShpdGVyYWJsZVtpbmRleF0sIGluZGV4LCBpdGVyYWJsZSkgPT09IGZhbHNlKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY29sbGVjdGlvbjtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVCYXNlRWFjaDtcbiIsInZhciBiYXNlRm9yT3duID0gcmVxdWlyZSgnLi9fYmFzZUZvck93bicpLFxuICAgIGNyZWF0ZUJhc2VFYWNoID0gcmVxdWlyZSgnLi9fY3JlYXRlQmFzZUVhY2gnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5mb3JFYWNoYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBjb2xsZWN0aW9uIFRoZSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl8T2JqZWN0fSBSZXR1cm5zIGBjb2xsZWN0aW9uYC5cbiAqL1xudmFyIGJhc2VFYWNoID0gY3JlYXRlQmFzZUVhY2goYmFzZUZvck93bik7XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUVhY2g7XG4iLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIGZpcnN0IGFyZ3VtZW50IGl0IHJlY2VpdmVzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIEFueSB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIGB2YWx1ZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICpcbiAqIGNvbnNvbGUubG9nKF8uaWRlbnRpdHkob2JqZWN0KSA9PT0gb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaWRlbnRpdHkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlkZW50aXR5O1xuIiwidmFyIGlkZW50aXR5ID0gcmVxdWlyZSgnLi9pZGVudGl0eScpO1xuXG4vKipcbiAqIENhc3RzIGB2YWx1ZWAgdG8gYGlkZW50aXR5YCBpZiBpdCdzIG5vdCBhIGZ1bmN0aW9uLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBpbnNwZWN0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIGNhc3QgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNhc3RGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicgPyB2YWx1ZSA6IGlkZW50aXR5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhc3RGdW5jdGlvbjtcbiIsInZhciBhcnJheUVhY2ggPSByZXF1aXJlKCcuL19hcnJheUVhY2gnKSxcbiAgICBiYXNlRWFjaCA9IHJlcXVpcmUoJy4vX2Jhc2VFYWNoJyksXG4gICAgY2FzdEZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fY2FzdEZ1bmN0aW9uJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpO1xuXG4vKipcbiAqIEl0ZXJhdGVzIG92ZXIgZWxlbWVudHMgb2YgYGNvbGxlY3Rpb25gIGFuZCBpbnZva2VzIGBpdGVyYXRlZWAgZm9yIGVhY2ggZWxlbWVudC5cbiAqIFRoZSBpdGVyYXRlZSBpcyBpbnZva2VkIHdpdGggdGhyZWUgYXJndW1lbnRzOiAodmFsdWUsIGluZGV4fGtleSwgY29sbGVjdGlvbikuXG4gKiBJdGVyYXRlZSBmdW5jdGlvbnMgbWF5IGV4aXQgaXRlcmF0aW9uIGVhcmx5IGJ5IGV4cGxpY2l0bHkgcmV0dXJuaW5nIGBmYWxzZWAuXG4gKlxuICogKipOb3RlOioqIEFzIHdpdGggb3RoZXIgXCJDb2xsZWN0aW9uc1wiIG1ldGhvZHMsIG9iamVjdHMgd2l0aCBhIFwibGVuZ3RoXCJcbiAqIHByb3BlcnR5IGFyZSBpdGVyYXRlZCBsaWtlIGFycmF5cy4gVG8gYXZvaWQgdGhpcyBiZWhhdmlvciB1c2UgYF8uZm9ySW5gXG4gKiBvciBgXy5mb3JPd25gIGZvciBvYmplY3QgaXRlcmF0aW9uLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBhbGlhcyBlYWNoXG4gKiBAY2F0ZWdvcnkgQ29sbGVjdGlvblxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlPV8uaWRlbnRpdHldIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl8T2JqZWN0fSBSZXR1cm5zIGBjb2xsZWN0aW9uYC5cbiAqIEBzZWUgXy5mb3JFYWNoUmlnaHRcbiAqIEBleGFtcGxlXG4gKlxuICogXy5mb3JFYWNoKFsxLCAyXSwgZnVuY3Rpb24odmFsdWUpIHtcbiAqICAgY29uc29sZS5sb2codmFsdWUpO1xuICogfSk7XG4gKiAvLyA9PiBMb2dzIGAxYCB0aGVuIGAyYC5cbiAqXG4gKiBfLmZvckVhY2goeyAnYSc6IDEsICdiJzogMiB9LCBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gKiAgIGNvbnNvbGUubG9nKGtleSk7XG4gKiB9KTtcbiAqIC8vID0+IExvZ3MgJ2EnIHRoZW4gJ2InIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpLlxuICovXG5mdW5jdGlvbiBmb3JFYWNoKGNvbGxlY3Rpb24sIGl0ZXJhdGVlKSB7XG4gIHZhciBmdW5jID0gaXNBcnJheShjb2xsZWN0aW9uKSA/IGFycmF5RWFjaCA6IGJhc2VFYWNoO1xuICByZXR1cm4gZnVuYyhjb2xsZWN0aW9uLCBjYXN0RnVuY3Rpb24oaXRlcmF0ZWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmb3JFYWNoO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZvckVhY2gnKTtcbiIsInZhciBiYXNlRWFjaCA9IHJlcXVpcmUoJy4vX2Jhc2VFYWNoJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZmlsdGVyYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBjb2xsZWN0aW9uIFRoZSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmlsdGVyZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGJhc2VGaWx0ZXIoY29sbGVjdGlvbiwgcHJlZGljYXRlKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgYmFzZUVhY2goY29sbGVjdGlvbiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKSB7XG4gICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pKSB7XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRmlsdGVyO1xuIiwiLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKipcbiAqIEFkZHMgYHZhbHVlYCB0byB0aGUgYXJyYXkgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGFkZFxuICogQG1lbWJlck9mIFNldENhY2hlXG4gKiBAYWxpYXMgcHVzaFxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2FjaGUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc2V0Q2FjaGVBZGQodmFsdWUpIHtcbiAgdGhpcy5fX2RhdGFfXy5zZXQodmFsdWUsIEhBU0hfVU5ERUZJTkVEKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0Q2FjaGVBZGQ7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGluIHRoZSBhcnJheSBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU2V0Q2FjaGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHNldENhY2hlSGFzKHZhbHVlKSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0Q2FjaGVIYXM7XG4iLCJ2YXIgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpLFxuICAgIHNldENhY2hlQWRkID0gcmVxdWlyZSgnLi9fc2V0Q2FjaGVBZGQnKSxcbiAgICBzZXRDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX3NldENhY2hlSGFzJyk7XG5cbi8qKlxuICpcbiAqIENyZWF0ZXMgYW4gYXJyYXkgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIHVuaXF1ZSB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW3ZhbHVlc10gVGhlIHZhbHVlcyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU2V0Q2FjaGUodmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzID09IG51bGwgPyAwIDogdmFsdWVzLmxlbmd0aDtcblxuICB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHRoaXMuYWRkKHZhbHVlc1tpbmRleF0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTZXRDYWNoZWAuXG5TZXRDYWNoZS5wcm90b3R5cGUuYWRkID0gU2V0Q2FjaGUucHJvdG90eXBlLnB1c2ggPSBzZXRDYWNoZUFkZDtcblNldENhY2hlLnByb3RvdHlwZS5oYXMgPSBzZXRDYWNoZUhhcztcblxubW9kdWxlLmV4cG9ydHMgPSBTZXRDYWNoZTtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLnNvbWVgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZVxuICogc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW55IGVsZW1lbnQgcGFzc2VzIHRoZSBwcmVkaWNhdGUgY2hlY2ssXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBhcnJheVNvbWUoYXJyYXksIHByZWRpY2F0ZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlTb21lO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYSBgY2FjaGVgIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBjYWNoZSBUaGUgY2FjaGUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gY2FjaGVIYXMoY2FjaGUsIGtleSkge1xuICByZXR1cm4gY2FjaGUuaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FjaGVIYXM7XG4iLCJ2YXIgU2V0Q2FjaGUgPSByZXF1aXJlKCcuL19TZXRDYWNoZScpLFxuICAgIGFycmF5U29tZSA9IHJlcXVpcmUoJy4vX2FycmF5U29tZScpLFxuICAgIGNhY2hlSGFzID0gcmVxdWlyZSgnLi9fY2FjaGVIYXMnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxLFxuICAgIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcgPSAyO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3IgYXJyYXlzIHdpdGggc3VwcG9ydCBmb3JcbiAqIHBhcnRpYWwgZGVlcCBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge0FycmF5fSBvdGhlciBUaGUgb3RoZXIgYXJyYXkgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYGFycmF5YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBhcnJheXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gZXF1YWxBcnJheXMoYXJyYXksIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUcsXG4gICAgICBhcnJMZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICBvdGhMZW5ndGggPSBvdGhlci5sZW5ndGg7XG5cbiAgaWYgKGFyckxlbmd0aCAhPSBvdGhMZW5ndGggJiYgIShpc1BhcnRpYWwgJiYgb3RoTGVuZ3RoID4gYXJyTGVuZ3RoKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBDaGVjayB0aGF0IGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICB2YXIgYXJyU3RhY2tlZCA9IHN0YWNrLmdldChhcnJheSk7XG4gIHZhciBvdGhTdGFja2VkID0gc3RhY2suZ2V0KG90aGVyKTtcbiAgaWYgKGFyclN0YWNrZWQgJiYgb3RoU3RhY2tlZCkge1xuICAgIHJldHVybiBhcnJTdGFja2VkID09IG90aGVyICYmIG90aFN0YWNrZWQgPT0gYXJyYXk7XG4gIH1cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSB0cnVlLFxuICAgICAgc2VlbiA9IChiaXRtYXNrICYgQ09NUEFSRV9VTk9SREVSRURfRkxBRykgPyBuZXcgU2V0Q2FjaGUgOiB1bmRlZmluZWQ7XG5cbiAgc3RhY2suc2V0KGFycmF5LCBvdGhlcik7XG4gIHN0YWNrLnNldChvdGhlciwgYXJyYXkpO1xuXG4gIC8vIElnbm9yZSBub24taW5kZXggcHJvcGVydGllcy5cbiAgd2hpbGUgKCsraW5kZXggPCBhcnJMZW5ndGgpIHtcbiAgICB2YXIgYXJyVmFsdWUgPSBhcnJheVtpbmRleF0sXG4gICAgICAgIG90aFZhbHVlID0gb3RoZXJbaW5kZXhdO1xuXG4gICAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICAgIHZhciBjb21wYXJlZCA9IGlzUGFydGlhbFxuICAgICAgICA/IGN1c3RvbWl6ZXIob3RoVmFsdWUsIGFyclZhbHVlLCBpbmRleCwgb3RoZXIsIGFycmF5LCBzdGFjaylcbiAgICAgICAgOiBjdXN0b21pemVyKGFyclZhbHVlLCBvdGhWYWx1ZSwgaW5kZXgsIGFycmF5LCBvdGhlciwgc3RhY2spO1xuICAgIH1cbiAgICBpZiAoY29tcGFyZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKGNvbXBhcmVkKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBhcnJheXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBpZiAoc2Vlbikge1xuICAgICAgaWYgKCFhcnJheVNvbWUob3RoZXIsIGZ1bmN0aW9uKG90aFZhbHVlLCBvdGhJbmRleCkge1xuICAgICAgICAgICAgaWYgKCFjYWNoZUhhcyhzZWVuLCBvdGhJbmRleCkgJiZcbiAgICAgICAgICAgICAgICAoYXJyVmFsdWUgPT09IG90aFZhbHVlIHx8IGVxdWFsRnVuYyhhcnJWYWx1ZSwgb3RoVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNlZW4ucHVzaChvdGhJbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkpIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIShcbiAgICAgICAgICBhcnJWYWx1ZSA9PT0gb3RoVmFsdWUgfHxcbiAgICAgICAgICAgIGVxdWFsRnVuYyhhcnJWYWx1ZSwgb3RoVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKVxuICAgICAgICApKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBzdGFja1snZGVsZXRlJ10oYXJyYXkpO1xuICBzdGFja1snZGVsZXRlJ10ob3RoZXIpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxdWFsQXJyYXlzO1xuIiwiLyoqXG4gKiBDb252ZXJ0cyBgbWFwYCB0byBpdHMga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUga2V5LXZhbHVlIHBhaXJzLlxuICovXG5mdW5jdGlvbiBtYXBUb0FycmF5KG1hcCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG1hcC5zaXplKTtcblxuICBtYXAuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gW2tleSwgdmFsdWVdO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBUb0FycmF5O1xuIiwiLyoqXG4gKiBDb252ZXJ0cyBgc2V0YCB0byBhbiBhcnJheSBvZiBpdHMgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBzZXRUb0FycmF5KHNldCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KHNldC5zaXplKTtcblxuICBzZXQuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRUb0FycmF5O1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIFVpbnQ4QXJyYXkgPSByZXF1aXJlKCcuL19VaW50OEFycmF5JyksXG4gICAgZXEgPSByZXF1aXJlKCcuL2VxJyksXG4gICAgZXF1YWxBcnJheXMgPSByZXF1aXJlKCcuL19lcXVhbEFycmF5cycpLFxuICAgIG1hcFRvQXJyYXkgPSByZXF1aXJlKCcuL19tYXBUb0FycmF5JyksXG4gICAgc2V0VG9BcnJheSA9IHJlcXVpcmUoJy4vX3NldFRvQXJyYXknKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxLFxuICAgIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcgPSAyO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XSc7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xWYWx1ZU9mID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by52YWx1ZU9mIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3IgY29tcGFyaW5nIG9iamVjdHMgb2ZcbiAqIHRoZSBzYW1lIGB0b1N0cmluZ1RhZ2AuXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gb25seSBzdXBwb3J0cyBjb21wYXJpbmcgdmFsdWVzIHdpdGggdGFncyBvZlxuICogYEJvb2xlYW5gLCBgRGF0ZWAsIGBFcnJvcmAsIGBOdW1iZXJgLCBgUmVnRXhwYCwgb3IgYFN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgVGhlIGB0b1N0cmluZ1RhZ2Agb2YgdGhlIG9iamVjdHMgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbEJ5VGFnKG9iamVjdCwgb3RoZXIsIHRhZywgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICBzd2l0Y2ggKHRhZykge1xuICAgIGNhc2UgZGF0YVZpZXdUYWc6XG4gICAgICBpZiAoKG9iamVjdC5ieXRlTGVuZ3RoICE9IG90aGVyLmJ5dGVMZW5ndGgpIHx8XG4gICAgICAgICAgKG9iamVjdC5ieXRlT2Zmc2V0ICE9IG90aGVyLmJ5dGVPZmZzZXQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIG9iamVjdCA9IG9iamVjdC5idWZmZXI7XG4gICAgICBvdGhlciA9IG90aGVyLmJ1ZmZlcjtcblxuICAgIGNhc2UgYXJyYXlCdWZmZXJUYWc6XG4gICAgICBpZiAoKG9iamVjdC5ieXRlTGVuZ3RoICE9IG90aGVyLmJ5dGVMZW5ndGgpIHx8XG4gICAgICAgICAgIWVxdWFsRnVuYyhuZXcgVWludDhBcnJheShvYmplY3QpLCBuZXcgVWludDhBcnJheShvdGhlcikpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgY2FzZSBib29sVGFnOlxuICAgIGNhc2UgZGF0ZVRhZzpcbiAgICBjYXNlIG51bWJlclRhZzpcbiAgICAgIC8vIENvZXJjZSBib29sZWFucyB0byBgMWAgb3IgYDBgIGFuZCBkYXRlcyB0byBtaWxsaXNlY29uZHMuXG4gICAgICAvLyBJbnZhbGlkIGRhdGVzIGFyZSBjb2VyY2VkIHRvIGBOYU5gLlxuICAgICAgcmV0dXJuIGVxKCtvYmplY3QsICtvdGhlcik7XG5cbiAgICBjYXNlIGVycm9yVGFnOlxuICAgICAgcmV0dXJuIG9iamVjdC5uYW1lID09IG90aGVyLm5hbWUgJiYgb2JqZWN0Lm1lc3NhZ2UgPT0gb3RoZXIubWVzc2FnZTtcblxuICAgIGNhc2UgcmVnZXhwVGFnOlxuICAgIGNhc2Ugc3RyaW5nVGFnOlxuICAgICAgLy8gQ29lcmNlIHJlZ2V4ZXMgdG8gc3RyaW5ncyBhbmQgdHJlYXQgc3RyaW5ncywgcHJpbWl0aXZlcyBhbmQgb2JqZWN0cyxcbiAgICAgIC8vIGFzIGVxdWFsLiBTZWUgaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXJlZ2V4cC5wcm90b3R5cGUudG9zdHJpbmdcbiAgICAgIC8vIGZvciBtb3JlIGRldGFpbHMuXG4gICAgICByZXR1cm4gb2JqZWN0ID09IChvdGhlciArICcnKTtcblxuICAgIGNhc2UgbWFwVGFnOlxuICAgICAgdmFyIGNvbnZlcnQgPSBtYXBUb0FycmF5O1xuXG4gICAgY2FzZSBzZXRUYWc6XG4gICAgICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHO1xuICAgICAgY29udmVydCB8fCAoY29udmVydCA9IHNldFRvQXJyYXkpO1xuXG4gICAgICBpZiAob2JqZWN0LnNpemUgIT0gb3RoZXIuc2l6ZSAmJiAhaXNQYXJ0aWFsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIC8vIEFzc3VtZSBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgICAgIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KG9iamVjdCk7XG4gICAgICBpZiAoc3RhY2tlZCkge1xuICAgICAgICByZXR1cm4gc3RhY2tlZCA9PSBvdGhlcjtcbiAgICAgIH1cbiAgICAgIGJpdG1hc2sgfD0gQ09NUEFSRV9VTk9SREVSRURfRkxBRztcblxuICAgICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgICBzdGFjay5zZXQob2JqZWN0LCBvdGhlcik7XG4gICAgICB2YXIgcmVzdWx0ID0gZXF1YWxBcnJheXMoY29udmVydChvYmplY3QpLCBjb252ZXJ0KG90aGVyKSwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG4gICAgICBzdGFja1snZGVsZXRlJ10ob2JqZWN0KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICBjYXNlIHN5bWJvbFRhZzpcbiAgICAgIGlmIChzeW1ib2xWYWx1ZU9mKSB7XG4gICAgICAgIHJldHVybiBzeW1ib2xWYWx1ZU9mLmNhbGwob2JqZWN0KSA9PSBzeW1ib2xWYWx1ZU9mLmNhbGwob3RoZXIpO1xuICAgICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbEJ5VGFnO1xuIiwidmFyIGdldEFsbEtleXMgPSByZXF1aXJlKCcuL19nZXRBbGxLZXlzJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIG9iamVjdHMgd2l0aCBzdXBwb3J0IGZvclxuICogcGFydGlhbCBkZWVwIGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBvYmplY3RgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gZXF1YWxPYmplY3RzKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgdmFyIGlzUGFydGlhbCA9IGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRyxcbiAgICAgIG9ialByb3BzID0gZ2V0QWxsS2V5cyhvYmplY3QpLFxuICAgICAgb2JqTGVuZ3RoID0gb2JqUHJvcHMubGVuZ3RoLFxuICAgICAgb3RoUHJvcHMgPSBnZXRBbGxLZXlzKG90aGVyKSxcbiAgICAgIG90aExlbmd0aCA9IG90aFByb3BzLmxlbmd0aDtcblxuICBpZiAob2JqTGVuZ3RoICE9IG90aExlbmd0aCAmJiAhaXNQYXJ0aWFsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBpbmRleCA9IG9iakxlbmd0aDtcbiAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICB2YXIga2V5ID0gb2JqUHJvcHNbaW5kZXhdO1xuICAgIGlmICghKGlzUGFydGlhbCA/IGtleSBpbiBvdGhlciA6IGhhc093blByb3BlcnR5LmNhbGwob3RoZXIsIGtleSkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIC8vIENoZWNrIHRoYXQgY3ljbGljIHZhbHVlcyBhcmUgZXF1YWwuXG4gIHZhciBvYmpTdGFja2VkID0gc3RhY2suZ2V0KG9iamVjdCk7XG4gIHZhciBvdGhTdGFja2VkID0gc3RhY2suZ2V0KG90aGVyKTtcbiAgaWYgKG9ialN0YWNrZWQgJiYgb3RoU3RhY2tlZCkge1xuICAgIHJldHVybiBvYmpTdGFja2VkID09IG90aGVyICYmIG90aFN0YWNrZWQgPT0gb2JqZWN0O1xuICB9XG4gIHZhciByZXN1bHQgPSB0cnVlO1xuICBzdGFjay5zZXQob2JqZWN0LCBvdGhlcik7XG4gIHN0YWNrLnNldChvdGhlciwgb2JqZWN0KTtcblxuICB2YXIgc2tpcEN0b3IgPSBpc1BhcnRpYWw7XG4gIHdoaWxlICgrK2luZGV4IDwgb2JqTGVuZ3RoKSB7XG4gICAga2V5ID0gb2JqUHJvcHNbaW5kZXhdO1xuICAgIHZhciBvYmpWYWx1ZSA9IG9iamVjdFtrZXldLFxuICAgICAgICBvdGhWYWx1ZSA9IG90aGVyW2tleV07XG5cbiAgICBpZiAoY3VzdG9taXplcikge1xuICAgICAgdmFyIGNvbXBhcmVkID0gaXNQYXJ0aWFsXG4gICAgICAgID8gY3VzdG9taXplcihvdGhWYWx1ZSwgb2JqVmFsdWUsIGtleSwgb3RoZXIsIG9iamVjdCwgc3RhY2spXG4gICAgICAgIDogY3VzdG9taXplcihvYmpWYWx1ZSwgb3RoVmFsdWUsIGtleSwgb2JqZWN0LCBvdGhlciwgc3RhY2spO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBpZiAoIShjb21wYXJlZCA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyAob2JqVmFsdWUgPT09IG90aFZhbHVlIHx8IGVxdWFsRnVuYyhvYmpWYWx1ZSwgb3RoVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKSlcbiAgICAgICAgICA6IGNvbXBhcmVkXG4gICAgICAgICkpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHNraXBDdG9yIHx8IChza2lwQ3RvciA9IGtleSA9PSAnY29uc3RydWN0b3InKTtcbiAgfVxuICBpZiAocmVzdWx0ICYmICFza2lwQ3Rvcikge1xuICAgIHZhciBvYmpDdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yLFxuICAgICAgICBvdGhDdG9yID0gb3RoZXIuY29uc3RydWN0b3I7XG5cbiAgICAvLyBOb24gYE9iamVjdGAgb2JqZWN0IGluc3RhbmNlcyB3aXRoIGRpZmZlcmVudCBjb25zdHJ1Y3RvcnMgYXJlIG5vdCBlcXVhbC5cbiAgICBpZiAob2JqQ3RvciAhPSBvdGhDdG9yICYmXG4gICAgICAgICgnY29uc3RydWN0b3InIGluIG9iamVjdCAmJiAnY29uc3RydWN0b3InIGluIG90aGVyKSAmJlxuICAgICAgICAhKHR5cGVvZiBvYmpDdG9yID09ICdmdW5jdGlvbicgJiYgb2JqQ3RvciBpbnN0YW5jZW9mIG9iakN0b3IgJiZcbiAgICAgICAgICB0eXBlb2Ygb3RoQ3RvciA9PSAnZnVuY3Rpb24nICYmIG90aEN0b3IgaW5zdGFuY2VvZiBvdGhDdG9yKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHN0YWNrWydkZWxldGUnXShvYmplY3QpO1xuICBzdGFja1snZGVsZXRlJ10ob3RoZXIpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxdWFsT2JqZWN0cztcbiIsInZhciBTdGFjayA9IHJlcXVpcmUoJy4vX1N0YWNrJyksXG4gICAgZXF1YWxBcnJheXMgPSByZXF1aXJlKCcuL19lcXVhbEFycmF5cycpLFxuICAgIGVxdWFsQnlUYWcgPSByZXF1aXJlKCcuL19lcXVhbEJ5VGFnJyksXG4gICAgZXF1YWxPYmplY3RzID0gcmVxdWlyZSgnLi9fZXF1YWxPYmplY3RzJyksXG4gICAgZ2V0VGFnID0gcmVxdWlyZSgnLi9fZ2V0VGFnJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnLi9pc0J1ZmZlcicpLFxuICAgIGlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vaXNUeXBlZEFycmF5Jyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XSc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbGAgZm9yIGFycmF5cyBhbmQgb2JqZWN0cyB3aGljaCBwZXJmb3Jtc1xuICogZGVlcCBjb21wYXJpc29ucyBhbmQgdHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzIGVuYWJsaW5nIG9iamVjdHMgd2l0aCBjaXJjdWxhclxuICogcmVmZXJlbmNlcyB0byBiZSBjb21wYXJlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIGBvYmplY3RgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzRXF1YWxEZWVwKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgdmFyIG9iaklzQXJyID0gaXNBcnJheShvYmplY3QpLFxuICAgICAgb3RoSXNBcnIgPSBpc0FycmF5KG90aGVyKSxcbiAgICAgIG9ialRhZyA9IG9iaklzQXJyID8gYXJyYXlUYWcgOiBnZXRUYWcob2JqZWN0KSxcbiAgICAgIG90aFRhZyA9IG90aElzQXJyID8gYXJyYXlUYWcgOiBnZXRUYWcob3RoZXIpO1xuXG4gIG9ialRhZyA9IG9ialRhZyA9PSBhcmdzVGFnID8gb2JqZWN0VGFnIDogb2JqVGFnO1xuICBvdGhUYWcgPSBvdGhUYWcgPT0gYXJnc1RhZyA/IG9iamVjdFRhZyA6IG90aFRhZztcblxuICB2YXIgb2JqSXNPYmogPSBvYmpUYWcgPT0gb2JqZWN0VGFnLFxuICAgICAgb3RoSXNPYmogPSBvdGhUYWcgPT0gb2JqZWN0VGFnLFxuICAgICAgaXNTYW1lVGFnID0gb2JqVGFnID09IG90aFRhZztcblxuICBpZiAoaXNTYW1lVGFnICYmIGlzQnVmZmVyKG9iamVjdCkpIHtcbiAgICBpZiAoIWlzQnVmZmVyKG90aGVyKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBvYmpJc0FyciA9IHRydWU7XG4gICAgb2JqSXNPYmogPSBmYWxzZTtcbiAgfVxuICBpZiAoaXNTYW1lVGFnICYmICFvYmpJc09iaikge1xuICAgIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gICAgcmV0dXJuIChvYmpJc0FyciB8fCBpc1R5cGVkQXJyYXkob2JqZWN0KSlcbiAgICAgID8gZXF1YWxBcnJheXMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaylcbiAgICAgIDogZXF1YWxCeVRhZyhvYmplY3QsIG90aGVyLCBvYmpUYWcsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spO1xuICB9XG4gIGlmICghKGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRykpIHtcbiAgICB2YXIgb2JqSXNXcmFwcGVkID0gb2JqSXNPYmogJiYgaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsICdfX3dyYXBwZWRfXycpLFxuICAgICAgICBvdGhJc1dyYXBwZWQgPSBvdGhJc09iaiAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG90aGVyLCAnX193cmFwcGVkX18nKTtcblxuICAgIGlmIChvYmpJc1dyYXBwZWQgfHwgb3RoSXNXcmFwcGVkKSB7XG4gICAgICB2YXIgb2JqVW53cmFwcGVkID0gb2JqSXNXcmFwcGVkID8gb2JqZWN0LnZhbHVlKCkgOiBvYmplY3QsXG4gICAgICAgICAgb3RoVW53cmFwcGVkID0gb3RoSXNXcmFwcGVkID8gb3RoZXIudmFsdWUoKSA6IG90aGVyO1xuXG4gICAgICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICAgICAgcmV0dXJuIGVxdWFsRnVuYyhvYmpVbndyYXBwZWQsIG90aFVud3JhcHBlZCwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spO1xuICAgIH1cbiAgfVxuICBpZiAoIWlzU2FtZVRhZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICByZXR1cm4gZXF1YWxPYmplY3RzKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0VxdWFsRGVlcDtcbiIsInZhciBiYXNlSXNFcXVhbERlZXAgPSByZXF1aXJlKCcuL19iYXNlSXNFcXVhbERlZXAnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzRXF1YWxgIHdoaWNoIHN1cHBvcnRzIHBhcnRpYWwgY29tcGFyaXNvbnNcbiAqIGFuZCB0cmFja3MgdHJhdmVyc2VkIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtib29sZWFufSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLlxuICogIDEgLSBVbm9yZGVyZWQgY29tcGFyaXNvblxuICogIDIgLSBQYXJ0aWFsIGNvbXBhcmlzb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBgdmFsdWVgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNFcXVhbCh2YWx1ZSwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKSB7XG4gIGlmICh2YWx1ZSA9PT0gb3RoZXIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAodmFsdWUgPT0gbnVsbCB8fCBvdGhlciA9PSBudWxsIHx8ICghaXNPYmplY3RMaWtlKHZhbHVlKSAmJiAhaXNPYmplY3RMaWtlKG90aGVyKSkpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcjtcbiAgfVxuICByZXR1cm4gYmFzZUlzRXF1YWxEZWVwKHZhbHVlLCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgYmFzZUlzRXF1YWwsIHN0YWNrKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNFcXVhbDtcbiIsInZhciBTdGFjayA9IHJlcXVpcmUoJy4vX1N0YWNrJyksXG4gICAgYmFzZUlzRXF1YWwgPSByZXF1aXJlKCcuL19iYXNlSXNFcXVhbCcpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNNYXRjaGAgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCBvZiBwcm9wZXJ0eSB2YWx1ZXMgdG8gbWF0Y2guXG4gKiBAcGFyYW0ge0FycmF5fSBtYXRjaERhdGEgVGhlIHByb3BlcnR5IG5hbWVzLCB2YWx1ZXMsIGFuZCBjb21wYXJlIGZsYWdzIHRvIG1hdGNoLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYG9iamVjdGAgaXMgYSBtYXRjaCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNNYXRjaChvYmplY3QsIHNvdXJjZSwgbWF0Y2hEYXRhLCBjdXN0b21pemVyKSB7XG4gIHZhciBpbmRleCA9IG1hdGNoRGF0YS5sZW5ndGgsXG4gICAgICBsZW5ndGggPSBpbmRleCxcbiAgICAgIG5vQ3VzdG9taXplciA9ICFjdXN0b21pemVyO1xuXG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiAhbGVuZ3RoO1xuICB9XG4gIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIHZhciBkYXRhID0gbWF0Y2hEYXRhW2luZGV4XTtcbiAgICBpZiAoKG5vQ3VzdG9taXplciAmJiBkYXRhWzJdKVxuICAgICAgICAgID8gZGF0YVsxXSAhPT0gb2JqZWN0W2RhdGFbMF1dXG4gICAgICAgICAgOiAhKGRhdGFbMF0gaW4gb2JqZWN0KVxuICAgICAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBkYXRhID0gbWF0Y2hEYXRhW2luZGV4XTtcbiAgICB2YXIga2V5ID0gZGF0YVswXSxcbiAgICAgICAgb2JqVmFsdWUgPSBvYmplY3Rba2V5XSxcbiAgICAgICAgc3JjVmFsdWUgPSBkYXRhWzFdO1xuXG4gICAgaWYgKG5vQ3VzdG9taXplciAmJiBkYXRhWzJdKSB7XG4gICAgICBpZiAob2JqVmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHN0YWNrID0gbmV3IFN0YWNrO1xuICAgICAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGN1c3RvbWl6ZXIob2JqVmFsdWUsIHNyY1ZhbHVlLCBrZXksIG9iamVjdCwgc291cmNlLCBzdGFjayk7XG4gICAgICB9XG4gICAgICBpZiAoIShyZXN1bHQgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBiYXNlSXNFcXVhbChzcmNWYWx1ZSwgb2JqVmFsdWUsIENPTVBBUkVfUEFSVElBTF9GTEFHIHwgQ09NUEFSRV9VTk9SREVSRURfRkxBRywgY3VzdG9taXplciwgc3RhY2spXG4gICAgICAgICAgICA6IHJlc3VsdFxuICAgICAgICAgICkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNNYXRjaDtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3Igc3RyaWN0IGVxdWFsaXR5IGNvbXBhcmlzb25zLCBpLmUuIGA9PT1gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlmIHN1aXRhYmxlIGZvciBzdHJpY3RcbiAqICBlcXVhbGl0eSBjb21wYXJpc29ucywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1N0cmljdENvbXBhcmFibGUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZSAmJiAhaXNPYmplY3QodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3RyaWN0Q29tcGFyYWJsZTtcbiIsInZhciBpc1N0cmljdENvbXBhcmFibGUgPSByZXF1aXJlKCcuL19pc1N0cmljdENvbXBhcmFibGUnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgcHJvcGVydHkgbmFtZXMsIHZhbHVlcywgYW5kIGNvbXBhcmUgZmxhZ3Mgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbWF0Y2ggZGF0YSBvZiBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gZ2V0TWF0Y2hEYXRhKG9iamVjdCkge1xuICB2YXIgcmVzdWx0ID0ga2V5cyhvYmplY3QpLFxuICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcblxuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICB2YXIga2V5ID0gcmVzdWx0W2xlbmd0aF0sXG4gICAgICAgIHZhbHVlID0gb2JqZWN0W2tleV07XG5cbiAgICByZXN1bHRbbGVuZ3RoXSA9IFtrZXksIHZhbHVlLCBpc1N0cmljdENvbXBhcmFibGUodmFsdWUpXTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE1hdGNoRGF0YTtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBtYXRjaGVzUHJvcGVydHlgIGZvciBzb3VyY2UgdmFsdWVzIHN1aXRhYmxlXG4gKiBmb3Igc3RyaWN0IGVxdWFsaXR5IGNvbXBhcmlzb25zLCBpLmUuIGA9PT1gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEBwYXJhbSB7Kn0gc3JjVmFsdWUgVGhlIHZhbHVlIHRvIG1hdGNoLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgc3BlYyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gbWF0Y2hlc1N0cmljdENvbXBhcmFibGUoa2V5LCBzcmNWYWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Rba2V5XSA9PT0gc3JjVmFsdWUgJiZcbiAgICAgIChzcmNWYWx1ZSAhPT0gdW5kZWZpbmVkIHx8IChrZXkgaW4gT2JqZWN0KG9iamVjdCkpKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZTtcbiIsInZhciBiYXNlSXNNYXRjaCA9IHJlcXVpcmUoJy4vX2Jhc2VJc01hdGNoJyksXG4gICAgZ2V0TWF0Y2hEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWF0Y2hEYXRhJyksXG4gICAgbWF0Y2hlc1N0cmljdENvbXBhcmFibGUgPSByZXF1aXJlKCcuL19tYXRjaGVzU3RyaWN0Q29tcGFyYWJsZScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLm1hdGNoZXNgIHdoaWNoIGRvZXNuJ3QgY2xvbmUgYHNvdXJjZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCBvZiBwcm9wZXJ0eSB2YWx1ZXMgdG8gbWF0Y2guXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBzcGVjIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlTWF0Y2hlcyhzb3VyY2UpIHtcbiAgdmFyIG1hdGNoRGF0YSA9IGdldE1hdGNoRGF0YShzb3VyY2UpO1xuICBpZiAobWF0Y2hEYXRhLmxlbmd0aCA9PSAxICYmIG1hdGNoRGF0YVswXVsyXSkge1xuICAgIHJldHVybiBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZShtYXRjaERhdGFbMF1bMF0sIG1hdGNoRGF0YVswXVsxXSk7XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3QgPT09IHNvdXJjZSB8fCBiYXNlSXNNYXRjaChvYmplY3QsIHNvdXJjZSwgbWF0Y2hEYXRhKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlTWF0Y2hlcztcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1N5bWJvbDtcbiIsInZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIHByb3BlcnR5IG5hbWVzIHdpdGhpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUlzRGVlcFByb3AgPSAvXFwufFxcWyg/OlteW1xcXV0qfChbXCInXSkoPzooPyFcXDEpW15cXFxcXXxcXFxcLikqP1xcMSlcXF0vLFxuICAgIHJlSXNQbGFpblByb3AgPSAvXlxcdyokLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHByb3BlcnR5IG5hbWUgYW5kIG5vdCBhIHByb3BlcnR5IHBhdGguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkga2V5cyBvbi5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvcGVydHkgbmFtZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleSh2YWx1ZSwgb2JqZWN0KSB7XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgaWYgKHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJyB8fFxuICAgICAgdmFsdWUgPT0gbnVsbCB8fCBpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gcmVJc1BsYWluUHJvcC50ZXN0KHZhbHVlKSB8fCAhcmVJc0RlZXBQcm9wLnRlc3QodmFsdWUpIHx8XG4gICAgKG9iamVjdCAhPSBudWxsICYmIHZhbHVlIGluIE9iamVjdChvYmplY3QpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0tleTtcbiIsInZhciBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyk7XG5cbi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgbWVtb2l6ZXMgdGhlIHJlc3VsdCBvZiBgZnVuY2AuIElmIGByZXNvbHZlcmAgaXNcbiAqIHByb3ZpZGVkLCBpdCBkZXRlcm1pbmVzIHRoZSBjYWNoZSBrZXkgZm9yIHN0b3JpbmcgdGhlIHJlc3VsdCBiYXNlZCBvbiB0aGVcbiAqIGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24uIEJ5IGRlZmF1bHQsIHRoZSBmaXJzdCBhcmd1bWVudFxuICogcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uIGlzIHVzZWQgYXMgdGhlIG1hcCBjYWNoZSBrZXkuIFRoZSBgZnVuY2BcbiAqIGlzIGludm9rZWQgd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgdGhlIG1lbW9pemVkIGZ1bmN0aW9uLlxuICpcbiAqICoqTm90ZToqKiBUaGUgY2FjaGUgaXMgZXhwb3NlZCBhcyB0aGUgYGNhY2hlYCBwcm9wZXJ0eSBvbiB0aGUgbWVtb2l6ZWRcbiAqIGZ1bmN0aW9uLiBJdHMgY3JlYXRpb24gbWF5IGJlIGN1c3RvbWl6ZWQgYnkgcmVwbGFjaW5nIHRoZSBgXy5tZW1vaXplLkNhY2hlYFxuICogY29uc3RydWN0b3Igd2l0aCBvbmUgd2hvc2UgaW5zdGFuY2VzIGltcGxlbWVudCB0aGVcbiAqIFtgTWFwYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcHJvcGVydGllcy1vZi10aGUtbWFwLXByb3RvdHlwZS1vYmplY3QpXG4gKiBtZXRob2QgaW50ZXJmYWNlIG9mIGBjbGVhcmAsIGBkZWxldGVgLCBgZ2V0YCwgYGhhc2AsIGFuZCBgc2V0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGhhdmUgaXRzIG91dHB1dCBtZW1vaXplZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtyZXNvbHZlcl0gVGhlIGZ1bmN0aW9uIHRvIHJlc29sdmUgdGhlIGNhY2hlIGtleS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IG1lbW9pemVkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEsICdiJzogMiB9O1xuICogdmFyIG90aGVyID0geyAnYyc6IDMsICdkJzogNCB9O1xuICpcbiAqIHZhciB2YWx1ZXMgPSBfLm1lbW9pemUoXy52YWx1ZXMpO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqXG4gKiB2YWx1ZXMob3RoZXIpO1xuICogLy8gPT4gWzMsIDRdXG4gKlxuICogb2JqZWN0LmEgPSAyO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqXG4gKiAvLyBNb2RpZnkgdGhlIHJlc3VsdCBjYWNoZS5cbiAqIHZhbHVlcy5jYWNoZS5zZXQob2JqZWN0LCBbJ2EnLCAnYiddKTtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWydhJywgJ2InXVxuICpcbiAqIC8vIFJlcGxhY2UgYF8ubWVtb2l6ZS5DYWNoZWAuXG4gKiBfLm1lbW9pemUuQ2FjaGUgPSBXZWFrTWFwO1xuICovXG5mdW5jdGlvbiBtZW1vaXplKGZ1bmMsIHJlc29sdmVyKSB7XG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nIHx8IChyZXNvbHZlciAhPSBudWxsICYmIHR5cGVvZiByZXNvbHZlciAhPSAnZnVuY3Rpb24nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB2YXIgbWVtb2l6ZWQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAga2V5ID0gcmVzb2x2ZXIgPyByZXNvbHZlci5hcHBseSh0aGlzLCBhcmdzKSA6IGFyZ3NbMF0sXG4gICAgICAgIGNhY2hlID0gbWVtb2l6ZWQuY2FjaGU7XG5cbiAgICBpZiAoY2FjaGUuaGFzKGtleSkpIHtcbiAgICAgIHJldHVybiBjYWNoZS5nZXQoa2V5KTtcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG4gICAgbWVtb2l6ZWQuY2FjaGUgPSBjYWNoZS5zZXQoa2V5LCByZXN1bHQpIHx8IGNhY2hlO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIG1lbW9pemVkLmNhY2hlID0gbmV3IChtZW1vaXplLkNhY2hlIHx8IE1hcENhY2hlKTtcbiAgcmV0dXJuIG1lbW9pemVkO1xufVxuXG4vLyBFeHBvc2UgYE1hcENhY2hlYC5cbm1lbW9pemUuQ2FjaGUgPSBNYXBDYWNoZTtcblxubW9kdWxlLmV4cG9ydHMgPSBtZW1vaXplO1xuIiwidmFyIG1lbW9pemUgPSByZXF1aXJlKCcuL21lbW9pemUnKTtcblxuLyoqIFVzZWQgYXMgdGhlIG1heGltdW0gbWVtb2l6ZSBjYWNoZSBzaXplLiAqL1xudmFyIE1BWF9NRU1PSVpFX1NJWkUgPSA1MDA7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLm1lbW9pemVgIHdoaWNoIGNsZWFycyB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24nc1xuICogY2FjaGUgd2hlbiBpdCBleGNlZWRzIGBNQVhfTUVNT0laRV9TSVpFYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaGF2ZSBpdHMgb3V0cHV0IG1lbW9pemVkLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgbWVtb2l6ZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG1lbW9pemVDYXBwZWQoZnVuYykge1xuICB2YXIgcmVzdWx0ID0gbWVtb2l6ZShmdW5jLCBmdW5jdGlvbihrZXkpIHtcbiAgICBpZiAoY2FjaGUuc2l6ZSA9PT0gTUFYX01FTU9JWkVfU0laRSkge1xuICAgICAgY2FjaGUuY2xlYXIoKTtcbiAgICB9XG4gICAgcmV0dXJuIGtleTtcbiAgfSk7XG5cbiAgdmFyIGNhY2hlID0gcmVzdWx0LmNhY2hlO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1lbW9pemVDYXBwZWQ7XG4iLCJ2YXIgbWVtb2l6ZUNhcHBlZCA9IHJlcXVpcmUoJy4vX21lbW9pemVDYXBwZWQnKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggcHJvcGVydHkgbmFtZXMgd2l0aGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlUHJvcE5hbWUgPSAvW14uW1xcXV0rfFxcWyg/OigtP1xcZCsoPzpcXC5cXGQrKT8pfChbXCInXSkoKD86KD8hXFwyKVteXFxcXF18XFxcXC4pKj8pXFwyKVxcXXwoPz0oPzpcXC58XFxbXFxdKSg/OlxcLnxcXFtcXF18JCkpL2c7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGJhY2tzbGFzaGVzIGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlRXNjYXBlQ2hhciA9IC9cXFxcKFxcXFwpPy9nO1xuXG4vKipcbiAqIENvbnZlcnRzIGBzdHJpbmdgIHRvIGEgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKi9cbnZhciBzdHJpbmdUb1BhdGggPSBtZW1vaXplQ2FwcGVkKGZ1bmN0aW9uKHN0cmluZykge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGlmIChzdHJpbmcuY2hhckNvZGVBdCgwKSA9PT0gNDYgLyogLiAqLykge1xuICAgIHJlc3VsdC5wdXNoKCcnKTtcbiAgfVxuICBzdHJpbmcucmVwbGFjZShyZVByb3BOYW1lLCBmdW5jdGlvbihtYXRjaCwgbnVtYmVyLCBxdW90ZSwgc3ViU3RyaW5nKSB7XG4gICAgcmVzdWx0LnB1c2gocXVvdGUgPyBzdWJTdHJpbmcucmVwbGFjZShyZUVzY2FwZUNoYXIsICckMScpIDogKG51bWJlciB8fCBtYXRjaCkpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmluZ1RvUGF0aDtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLm1hcGAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlXG4gKiBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgbWFwcGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheU1hcChhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlNYXA7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgYXJyYXlNYXAgPSByZXF1aXJlKCcuL19hcnJheU1hcCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMDtcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFRvU3RyaW5nID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by50b1N0cmluZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50b1N0cmluZ2Agd2hpY2ggZG9lc24ndCBjb252ZXJ0IG51bGxpc2hcbiAqIHZhbHVlcyB0byBlbXB0eSBzdHJpbmdzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBiYXNlVG9TdHJpbmcodmFsdWUpIHtcbiAgLy8gRXhpdCBlYXJseSBmb3Igc3RyaW5ncyB0byBhdm9pZCBhIHBlcmZvcm1hbmNlIGhpdCBpbiBzb21lIGVudmlyb25tZW50cy5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAvLyBSZWN1cnNpdmVseSBjb252ZXJ0IHZhbHVlcyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIHJldHVybiBhcnJheU1hcCh2YWx1ZSwgYmFzZVRvU3RyaW5nKSArICcnO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gc3ltYm9sVG9TdHJpbmcgPyBzeW1ib2xUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICB9XG4gIHZhciByZXN1bHQgPSAodmFsdWUgKyAnJyk7XG4gIHJldHVybiAocmVzdWx0ID09ICcwJyAmJiAoMSAvIHZhbHVlKSA9PSAtSU5GSU5JVFkpID8gJy0wJyA6IHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVG9TdHJpbmc7XG4iLCJ2YXIgYmFzZVRvU3RyaW5nID0gcmVxdWlyZSgnLi9fYmFzZVRvU3RyaW5nJyk7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZy4gQW4gZW1wdHkgc3RyaW5nIGlzIHJldHVybmVkIGZvciBgbnVsbGBcbiAqIGFuZCBgdW5kZWZpbmVkYCB2YWx1ZXMuIFRoZSBzaWduIG9mIGAtMGAgaXMgcHJlc2VydmVkLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b1N0cmluZyhudWxsKTtcbiAqIC8vID0+ICcnXG4gKlxuICogXy50b1N0cmluZygtMCk7XG4gKiAvLyA9PiAnLTAnXG4gKlxuICogXy50b1N0cmluZyhbMSwgMiwgM10pO1xuICogLy8gPT4gJzEsMiwzJ1xuICovXG5mdW5jdGlvbiB0b1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogYmFzZVRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1N0cmluZztcbiIsInZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNLZXkgPSByZXF1aXJlKCcuL19pc0tleScpLFxuICAgIHN0cmluZ1RvUGF0aCA9IHJlcXVpcmUoJy4vX3N0cmluZ1RvUGF0aCcpLFxuICAgIHRvU3RyaW5nID0gcmVxdWlyZSgnLi90b1N0cmluZycpO1xuXG4vKipcbiAqIENhc3RzIGB2YWx1ZWAgdG8gYSBwYXRoIGFycmF5IGlmIGl0J3Mgbm90IG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5IGtleXMgb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGNhc3QgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gY2FzdFBhdGgodmFsdWUsIG9iamVjdCkge1xuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIGlzS2V5KHZhbHVlLCBvYmplY3QpID8gW3ZhbHVlXSA6IHN0cmluZ1RvUGF0aCh0b1N0cmluZyh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhc3RQYXRoO1xuIiwidmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcga2V5IGlmIGl0J3Mgbm90IGEgc3RyaW5nIG9yIHN5bWJvbC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtzdHJpbmd8c3ltYm9sfSBSZXR1cm5zIHRoZSBrZXkuXG4gKi9cbmZ1bmN0aW9uIHRvS2V5KHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycgfHwgaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHZhciByZXN1bHQgPSAodmFsdWUgKyAnJyk7XG4gIHJldHVybiAocmVzdWx0ID09ICcwJyAmJiAoMSAvIHZhbHVlKSA9PSAtSU5GSU5JVFkpID8gJy0wJyA6IHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b0tleTtcbiIsInZhciBjYXN0UGF0aCA9IHJlcXVpcmUoJy4vX2Nhc3RQYXRoJyksXG4gICAgdG9LZXkgPSByZXF1aXJlKCcuL190b0tleScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmdldGAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWZhdWx0IHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXNvbHZlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldChvYmplY3QsIHBhdGgpIHtcbiAgcGF0aCA9IGNhc3RQYXRoKHBhdGgsIG9iamVjdCk7XG5cbiAgdmFyIGluZGV4ID0gMCxcbiAgICAgIGxlbmd0aCA9IHBhdGgubGVuZ3RoO1xuXG4gIHdoaWxlIChvYmplY3QgIT0gbnVsbCAmJiBpbmRleCA8IGxlbmd0aCkge1xuICAgIG9iamVjdCA9IG9iamVjdFt0b0tleShwYXRoW2luZGV4KytdKV07XG4gIH1cbiAgcmV0dXJuIChpbmRleCAmJiBpbmRleCA9PSBsZW5ndGgpID8gb2JqZWN0IDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXQ7XG4iLCJ2YXIgYmFzZUdldCA9IHJlcXVpcmUoJy4vX2Jhc2VHZXQnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBgcGF0aGAgb2YgYG9iamVjdGAuIElmIHRoZSByZXNvbHZlZCB2YWx1ZSBpc1xuICogYHVuZGVmaW5lZGAsIHRoZSBgZGVmYXVsdFZhbHVlYCBpcyByZXR1cm5lZCBpbiBpdHMgcGxhY2UuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjcuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEBwYXJhbSB7Kn0gW2RlZmF1bHRWYWx1ZV0gVGhlIHZhbHVlIHJldHVybmVkIGZvciBgdW5kZWZpbmVkYCByZXNvbHZlZCB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzb2x2ZWQgdmFsdWUuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogW3sgJ2InOiB7ICdjJzogMyB9IH1dIH07XG4gKlxuICogXy5nZXQob2JqZWN0LCAnYVswXS5iLmMnKTtcbiAqIC8vID0+IDNcbiAqXG4gKiBfLmdldChvYmplY3QsIFsnYScsICcwJywgJ2InLCAnYyddKTtcbiAqIC8vID0+IDNcbiAqXG4gKiBfLmdldChvYmplY3QsICdhLmIuYycsICdkZWZhdWx0Jyk7XG4gKiAvLyA9PiAnZGVmYXVsdCdcbiAqL1xuZnVuY3Rpb24gZ2V0KG9iamVjdCwgcGF0aCwgZGVmYXVsdFZhbHVlKSB7XG4gIHZhciByZXN1bHQgPSBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IGJhc2VHZXQob2JqZWN0LCBwYXRoKTtcbiAgcmV0dXJuIHJlc3VsdCA9PT0gdW5kZWZpbmVkID8gZGVmYXVsdFZhbHVlIDogcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldDtcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaGFzSW5gIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30ga2V5IFRoZSBrZXkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VIYXNJbihvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ICE9IG51bGwgJiYga2V5IGluIE9iamVjdChvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VIYXNJbjtcbiIsInZhciBjYXN0UGF0aCA9IHJlcXVpcmUoJy4vX2Nhc3RQYXRoJyksXG4gICAgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuL19pc0luZGV4JyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyksXG4gICAgdG9LZXkgPSByZXF1aXJlKCcuL190b0tleScpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgcGF0aGAgZXhpc3RzIG9uIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCB0byBjaGVjay5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGhhc0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrIHByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHBhdGhgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNQYXRoKG9iamVjdCwgcGF0aCwgaGFzRnVuYykge1xuICBwYXRoID0gY2FzdFBhdGgocGF0aCwgb2JqZWN0KTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHBhdGgubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gZmFsc2U7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gdG9LZXkocGF0aFtpbmRleF0pO1xuICAgIGlmICghKHJlc3VsdCA9IG9iamVjdCAhPSBudWxsICYmIGhhc0Z1bmMob2JqZWN0LCBrZXkpKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIG9iamVjdCA9IG9iamVjdFtrZXldO1xuICB9XG4gIGlmIChyZXN1bHQgfHwgKytpbmRleCAhPSBsZW5ndGgpIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGxlbmd0aCA9IG9iamVjdCA9PSBudWxsID8gMCA6IG9iamVjdC5sZW5ndGg7XG4gIHJldHVybiAhIWxlbmd0aCAmJiBpc0xlbmd0aChsZW5ndGgpICYmIGlzSW5kZXgoa2V5LCBsZW5ndGgpICYmXG4gICAgKGlzQXJyYXkob2JqZWN0KSB8fCBpc0FyZ3VtZW50cyhvYmplY3QpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNQYXRoO1xuIiwidmFyIGJhc2VIYXNJbiA9IHJlcXVpcmUoJy4vX2Jhc2VIYXNJbicpLFxuICAgIGhhc1BhdGggPSByZXF1aXJlKCcuL19oYXNQYXRoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBwYXRoYCBpcyBhIGRpcmVjdCBvciBpbmhlcml0ZWQgcHJvcGVydHkgb2YgYG9iamVjdGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHBhdGhgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0gXy5jcmVhdGUoeyAnYSc6IF8uY3JlYXRlKHsgJ2InOiAyIH0pIH0pO1xuICpcbiAqIF8uaGFzSW4ob2JqZWN0LCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaGFzSW4ob2JqZWN0LCAnYS5iJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5oYXNJbihvYmplY3QsIFsnYScsICdiJ10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaGFzSW4ob2JqZWN0LCAnYicpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaGFzSW4ob2JqZWN0LCBwYXRoKSB7XG4gIHJldHVybiBvYmplY3QgIT0gbnVsbCAmJiBoYXNQYXRoKG9iamVjdCwgcGF0aCwgYmFzZUhhc0luKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNJbjtcbiIsInZhciBiYXNlSXNFcXVhbCA9IHJlcXVpcmUoJy4vX2Jhc2VJc0VxdWFsJyksXG4gICAgZ2V0ID0gcmVxdWlyZSgnLi9nZXQnKSxcbiAgICBoYXNJbiA9IHJlcXVpcmUoJy4vaGFzSW4nKSxcbiAgICBpc0tleSA9IHJlcXVpcmUoJy4vX2lzS2V5JyksXG4gICAgaXNTdHJpY3RDb21wYXJhYmxlID0gcmVxdWlyZSgnLi9faXNTdHJpY3RDb21wYXJhYmxlJyksXG4gICAgbWF0Y2hlc1N0cmljdENvbXBhcmFibGUgPSByZXF1aXJlKCcuL19tYXRjaGVzU3RyaWN0Q29tcGFyYWJsZScpLFxuICAgIHRvS2V5ID0gcmVxdWlyZSgnLi9fdG9LZXknKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxLFxuICAgIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcgPSAyO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLm1hdGNoZXNQcm9wZXJ0eWAgd2hpY2ggZG9lc24ndCBjbG9uZSBgc3JjVmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHBhcmFtIHsqfSBzcmNWYWx1ZSBUaGUgdmFsdWUgdG8gbWF0Y2guXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBzcGVjIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlTWF0Y2hlc1Byb3BlcnR5KHBhdGgsIHNyY1ZhbHVlKSB7XG4gIGlmIChpc0tleShwYXRoKSAmJiBpc1N0cmljdENvbXBhcmFibGUoc3JjVmFsdWUpKSB7XG4gICAgcmV0dXJuIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlKHRvS2V5KHBhdGgpLCBzcmNWYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBvYmpWYWx1ZSA9IGdldChvYmplY3QsIHBhdGgpO1xuICAgIHJldHVybiAob2JqVmFsdWUgPT09IHVuZGVmaW5lZCAmJiBvYmpWYWx1ZSA9PT0gc3JjVmFsdWUpXG4gICAgICA/IGhhc0luKG9iamVjdCwgcGF0aClcbiAgICAgIDogYmFzZUlzRXF1YWwoc3JjVmFsdWUsIG9ialZhbHVlLCBDT01QQVJFX1BBUlRJQUxfRkxBRyB8IENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VNYXRjaGVzUHJvcGVydHk7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnByb3BlcnR5YCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYWNjZXNzb3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VQcm9wZXJ0eShrZXkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VQcm9wZXJ0eTtcbiIsInZhciBiYXNlR2V0ID0gcmVxdWlyZSgnLi9fYmFzZUdldCcpO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZVByb3BlcnR5YCB3aGljaCBzdXBwb3J0cyBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYWNjZXNzb3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VQcm9wZXJ0eURlZXAocGF0aCkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIGJhc2VHZXQob2JqZWN0LCBwYXRoKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlUHJvcGVydHlEZWVwO1xuIiwidmFyIGJhc2VQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2Jhc2VQcm9wZXJ0eScpLFxuICAgIGJhc2VQcm9wZXJ0eURlZXAgPSByZXF1aXJlKCcuL19iYXNlUHJvcGVydHlEZWVwJyksXG4gICAgaXNLZXkgPSByZXF1aXJlKCcuL19pc0tleScpLFxuICAgIHRvS2V5ID0gcmVxdWlyZSgnLi9fdG9LZXknKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSB2YWx1ZSBhdCBgcGF0aGAgb2YgYSBnaXZlbiBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhY2Nlc3NvciBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdHMgPSBbXG4gKiAgIHsgJ2EnOiB7ICdiJzogMiB9IH0sXG4gKiAgIHsgJ2EnOiB7ICdiJzogMSB9IH1cbiAqIF07XG4gKlxuICogXy5tYXAob2JqZWN0cywgXy5wcm9wZXJ0eSgnYS5iJykpO1xuICogLy8gPT4gWzIsIDFdXG4gKlxuICogXy5tYXAoXy5zb3J0Qnkob2JqZWN0cywgXy5wcm9wZXJ0eShbJ2EnLCAnYiddKSksICdhLmInKTtcbiAqIC8vID0+IFsxLCAyXVxuICovXG5mdW5jdGlvbiBwcm9wZXJ0eShwYXRoKSB7XG4gIHJldHVybiBpc0tleShwYXRoKSA/IGJhc2VQcm9wZXJ0eSh0b0tleShwYXRoKSkgOiBiYXNlUHJvcGVydHlEZWVwKHBhdGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHByb3BlcnR5O1xuIiwidmFyIGJhc2VNYXRjaGVzID0gcmVxdWlyZSgnLi9fYmFzZU1hdGNoZXMnKSxcbiAgICBiYXNlTWF0Y2hlc1Byb3BlcnR5ID0gcmVxdWlyZSgnLi9fYmFzZU1hdGNoZXNQcm9wZXJ0eScpLFxuICAgIGlkZW50aXR5ID0gcmVxdWlyZSgnLi9pZGVudGl0eScpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBwcm9wZXJ0eSA9IHJlcXVpcmUoJy4vcHJvcGVydHknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pdGVyYXRlZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gW3ZhbHVlPV8uaWRlbnRpdHldIFRoZSB2YWx1ZSB0byBjb252ZXJ0IHRvIGFuIGl0ZXJhdGVlLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBpdGVyYXRlZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUl0ZXJhdGVlKHZhbHVlKSB7XG4gIC8vIERvbid0IHN0b3JlIHRoZSBgdHlwZW9mYCByZXN1bHQgaW4gYSB2YXJpYWJsZSB0byBhdm9pZCBhIEpJVCBidWcgaW4gU2FmYXJpIDkuXG4gIC8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTU2MDM0IGZvciBtb3JlIGRldGFpbHMuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiBpZGVudGl0eTtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodmFsdWUpXG4gICAgICA/IGJhc2VNYXRjaGVzUHJvcGVydHkodmFsdWVbMF0sIHZhbHVlWzFdKVxuICAgICAgOiBiYXNlTWF0Y2hlcyh2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHByb3BlcnR5KHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXRlcmF0ZWU7XG4iLCJ2YXIgYXJyYXlGaWx0ZXIgPSByZXF1aXJlKCcuL19hcnJheUZpbHRlcicpLFxuICAgIGJhc2VGaWx0ZXIgPSByZXF1aXJlKCcuL19iYXNlRmlsdGVyJyksXG4gICAgYmFzZUl0ZXJhdGVlID0gcmVxdWlyZSgnLi9fYmFzZUl0ZXJhdGVlJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpO1xuXG4vKipcbiAqIEl0ZXJhdGVzIG92ZXIgZWxlbWVudHMgb2YgYGNvbGxlY3Rpb25gLCByZXR1cm5pbmcgYW4gYXJyYXkgb2YgYWxsIGVsZW1lbnRzXG4gKiBgcHJlZGljYXRlYCByZXR1cm5zIHRydXRoeSBmb3IuIFRoZSBwcmVkaWNhdGUgaXMgaW52b2tlZCB3aXRoIHRocmVlXG4gKiBhcmd1bWVudHM6ICh2YWx1ZSwgaW5kZXh8a2V5LCBjb2xsZWN0aW9uKS5cbiAqXG4gKiAqKk5vdGU6KiogVW5saWtlIGBfLnJlbW92ZWAsIHRoaXMgbWV0aG9kIHJldHVybnMgYSBuZXcgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBjb2xsZWN0aW9uIFRoZSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtwcmVkaWNhdGU9Xy5pZGVudGl0eV0gVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGZpbHRlcmVkIGFycmF5LlxuICogQHNlZSBfLnJlamVjdFxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgdXNlcnMgPSBbXG4gKiAgIHsgJ3VzZXInOiAnYmFybmV5JywgJ2FnZSc6IDM2LCAnYWN0aXZlJzogdHJ1ZSB9LFxuICogICB7ICd1c2VyJzogJ2ZyZWQnLCAgICdhZ2UnOiA0MCwgJ2FjdGl2ZSc6IGZhbHNlIH1cbiAqIF07XG4gKlxuICogXy5maWx0ZXIodXNlcnMsIGZ1bmN0aW9uKG8pIHsgcmV0dXJuICFvLmFjdGl2ZTsgfSk7XG4gKiAvLyA9PiBvYmplY3RzIGZvciBbJ2ZyZWQnXVxuICpcbiAqIC8vIFRoZSBgXy5tYXRjaGVzYCBpdGVyYXRlZSBzaG9ydGhhbmQuXG4gKiBfLmZpbHRlcih1c2VycywgeyAnYWdlJzogMzYsICdhY3RpdmUnOiB0cnVlIH0pO1xuICogLy8gPT4gb2JqZWN0cyBmb3IgWydiYXJuZXknXVxuICpcbiAqIC8vIFRoZSBgXy5tYXRjaGVzUHJvcGVydHlgIGl0ZXJhdGVlIHNob3J0aGFuZC5cbiAqIF8uZmlsdGVyKHVzZXJzLCBbJ2FjdGl2ZScsIGZhbHNlXSk7XG4gKiAvLyA9PiBvYmplY3RzIGZvciBbJ2ZyZWQnXVxuICpcbiAqIC8vIFRoZSBgXy5wcm9wZXJ0eWAgaXRlcmF0ZWUgc2hvcnRoYW5kLlxuICogXy5maWx0ZXIodXNlcnMsICdhY3RpdmUnKTtcbiAqIC8vID0+IG9iamVjdHMgZm9yIFsnYmFybmV5J11cbiAqXG4gKiAvLyBDb21iaW5pbmcgc2V2ZXJhbCBwcmVkaWNhdGVzIHVzaW5nIGBfLm92ZXJFdmVyeWAgb3IgYF8ub3ZlclNvbWVgLlxuICogXy5maWx0ZXIodXNlcnMsIF8ub3ZlclNvbWUoW3sgJ2FnZSc6IDM2IH0sIFsnYWdlJywgNDBdXSkpO1xuICogLy8gPT4gb2JqZWN0cyBmb3IgWydmcmVkJywgJ2Jhcm5leSddXG4gKi9cbmZ1bmN0aW9uIGZpbHRlcihjb2xsZWN0aW9uLCBwcmVkaWNhdGUpIHtcbiAgdmFyIGZ1bmMgPSBpc0FycmF5KGNvbGxlY3Rpb24pID8gYXJyYXlGaWx0ZXIgOiBiYXNlRmlsdGVyO1xuICByZXR1cm4gZnVuYyhjb2xsZWN0aW9uLCBiYXNlSXRlcmF0ZWUocHJlZGljYXRlLCAzKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZmlsdGVyO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5oYXNgIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30ga2V5IFRoZSBrZXkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VIYXMob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCAhPSBudWxsICYmIGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VIYXM7XG4iLCJ2YXIgYmFzZUhhcyA9IHJlcXVpcmUoJy4vX2Jhc2VIYXMnKSxcbiAgICBoYXNQYXRoID0gcmVxdWlyZSgnLi9faGFzUGF0aCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgcGF0aGAgaXMgYSBkaXJlY3QgcHJvcGVydHkgb2YgYG9iamVjdGAuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHBhdGhgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IHsgJ2InOiAyIH0gfTtcbiAqIHZhciBvdGhlciA9IF8uY3JlYXRlKHsgJ2EnOiBfLmNyZWF0ZSh7ICdiJzogMiB9KSB9KTtcbiAqXG4gKiBfLmhhcyhvYmplY3QsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5oYXMob2JqZWN0LCAnYS5iJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5oYXMob2JqZWN0LCBbJ2EnLCAnYiddKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmhhcyhvdGhlciwgJ2EnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGhhcyhvYmplY3QsIHBhdGgpIHtcbiAgcmV0dXJuIG9iamVjdCAhPSBudWxsICYmIGhhc1BhdGgob2JqZWN0LCBwYXRoLCBiYXNlSGFzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXM7XG4iLCJ2YXIgYmFzZUtleXMgPSByZXF1aXJlKCcuL19iYXNlS2V5cycpLFxuICAgIGdldFRhZyA9IHJlcXVpcmUoJy4vX2dldFRhZycpLFxuICAgIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9pc1R5cGVkQXJyYXknKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFuIGVtcHR5IG9iamVjdCwgY29sbGVjdGlvbiwgbWFwLCBvciBzZXQuXG4gKlxuICogT2JqZWN0cyBhcmUgY29uc2lkZXJlZCBlbXB0eSBpZiB0aGV5IGhhdmUgbm8gb3duIGVudW1lcmFibGUgc3RyaW5nIGtleWVkXG4gKiBwcm9wZXJ0aWVzLlxuICpcbiAqIEFycmF5LWxpa2UgdmFsdWVzIHN1Y2ggYXMgYGFyZ3VtZW50c2Agb2JqZWN0cywgYXJyYXlzLCBidWZmZXJzLCBzdHJpbmdzLCBvclxuICogalF1ZXJ5LWxpa2UgY29sbGVjdGlvbnMgYXJlIGNvbnNpZGVyZWQgZW1wdHkgaWYgdGhleSBoYXZlIGEgYGxlbmd0aGAgb2YgYDBgLlxuICogU2ltaWxhcmx5LCBtYXBzIGFuZCBzZXRzIGFyZSBjb25zaWRlcmVkIGVtcHR5IGlmIHRoZXkgaGF2ZSBhIGBzaXplYCBvZiBgMGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgZW1wdHksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0VtcHR5KG51bGwpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNFbXB0eSh0cnVlKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRW1wdHkoMSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0VtcHR5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNFbXB0eSh7ICdhJzogMSB9KTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRW1wdHkodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAoaXNBcnJheUxpa2UodmFsdWUpICYmXG4gICAgICAoaXNBcnJheSh2YWx1ZSkgfHwgdHlwZW9mIHZhbHVlID09ICdzdHJpbmcnIHx8IHR5cGVvZiB2YWx1ZS5zcGxpY2UgPT0gJ2Z1bmN0aW9uJyB8fFxuICAgICAgICBpc0J1ZmZlcih2YWx1ZSkgfHwgaXNUeXBlZEFycmF5KHZhbHVlKSB8fCBpc0FyZ3VtZW50cyh2YWx1ZSkpKSB7XG4gICAgcmV0dXJuICF2YWx1ZS5sZW5ndGg7XG4gIH1cbiAgdmFyIHRhZyA9IGdldFRhZyh2YWx1ZSk7XG4gIGlmICh0YWcgPT0gbWFwVGFnIHx8IHRhZyA9PSBzZXRUYWcpIHtcbiAgICByZXR1cm4gIXZhbHVlLnNpemU7XG4gIH1cbiAgaWYgKGlzUHJvdG90eXBlKHZhbHVlKSkge1xuICAgIHJldHVybiAhYmFzZUtleXModmFsdWUpLmxlbmd0aDtcbiAgfVxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0VtcHR5O1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBgdW5kZWZpbmVkYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBgdW5kZWZpbmVkYCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzVW5kZWZpbmVkKHZvaWQgMCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1VuZGVmaW5lZChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVW5kZWZpbmVkO1xuIiwidmFyIGJhc2VFYWNoID0gcmVxdWlyZSgnLi9fYmFzZUVhY2gnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5tYXBgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IG1hcHBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYmFzZU1hcChjb2xsZWN0aW9uLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IGlzQXJyYXlMaWtlKGNvbGxlY3Rpb24pID8gQXJyYXkoY29sbGVjdGlvbi5sZW5ndGgpIDogW107XG5cbiAgYmFzZUVhY2goY29sbGVjdGlvbiwgZnVuY3Rpb24odmFsdWUsIGtleSwgY29sbGVjdGlvbikge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IGl0ZXJhdGVlKHZhbHVlLCBrZXksIGNvbGxlY3Rpb24pO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlTWFwO1xuIiwidmFyIGFycmF5TWFwID0gcmVxdWlyZSgnLi9fYXJyYXlNYXAnKSxcbiAgICBiYXNlSXRlcmF0ZWUgPSByZXF1aXJlKCcuL19iYXNlSXRlcmF0ZWUnKSxcbiAgICBiYXNlTWFwID0gcmVxdWlyZSgnLi9fYmFzZU1hcCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHZhbHVlcyBieSBydW5uaW5nIGVhY2ggZWxlbWVudCBpbiBgY29sbGVjdGlvbmAgdGhydVxuICogYGl0ZXJhdGVlYC4gVGhlIGl0ZXJhdGVlIGlzIGludm9rZWQgd2l0aCB0aHJlZSBhcmd1bWVudHM6XG4gKiAodmFsdWUsIGluZGV4fGtleSwgY29sbGVjdGlvbikuXG4gKlxuICogTWFueSBsb2Rhc2ggbWV0aG9kcyBhcmUgZ3VhcmRlZCB0byB3b3JrIGFzIGl0ZXJhdGVlcyBmb3IgbWV0aG9kcyBsaWtlXG4gKiBgXy5ldmVyeWAsIGBfLmZpbHRlcmAsIGBfLm1hcGAsIGBfLm1hcFZhbHVlc2AsIGBfLnJlamVjdGAsIGFuZCBgXy5zb21lYC5cbiAqXG4gKiBUaGUgZ3VhcmRlZCBtZXRob2RzIGFyZTpcbiAqIGBhcnlgLCBgY2h1bmtgLCBgY3VycnlgLCBgY3VycnlSaWdodGAsIGBkcm9wYCwgYGRyb3BSaWdodGAsIGBldmVyeWAsXG4gKiBgZmlsbGAsIGBpbnZlcnRgLCBgcGFyc2VJbnRgLCBgcmFuZG9tYCwgYHJhbmdlYCwgYHJhbmdlUmlnaHRgLCBgcmVwZWF0YCxcbiAqIGBzYW1wbGVTaXplYCwgYHNsaWNlYCwgYHNvbWVgLCBgc29ydEJ5YCwgYHNwbGl0YCwgYHRha2VgLCBgdGFrZVJpZ2h0YCxcbiAqIGB0ZW1wbGF0ZWAsIGB0cmltYCwgYHRyaW1FbmRgLCBgdHJpbVN0YXJ0YCwgYW5kIGB3b3Jkc2BcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgQ29sbGVjdGlvblxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlPV8uaWRlbnRpdHldIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBtYXBwZWQgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIHNxdWFyZShuKSB7XG4gKiAgIHJldHVybiBuICogbjtcbiAqIH1cbiAqXG4gKiBfLm1hcChbNCwgOF0sIHNxdWFyZSk7XG4gKiAvLyA9PiBbMTYsIDY0XVxuICpcbiAqIF8ubWFwKHsgJ2EnOiA0LCAnYic6IDggfSwgc3F1YXJlKTtcbiAqIC8vID0+IFsxNiwgNjRdIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogdmFyIHVzZXJzID0gW1xuICogICB7ICd1c2VyJzogJ2Jhcm5leScgfSxcbiAqICAgeyAndXNlcic6ICdmcmVkJyB9XG4gKiBdO1xuICpcbiAqIC8vIFRoZSBgXy5wcm9wZXJ0eWAgaXRlcmF0ZWUgc2hvcnRoYW5kLlxuICogXy5tYXAodXNlcnMsICd1c2VyJyk7XG4gKiAvLyA9PiBbJ2Jhcm5leScsICdmcmVkJ11cbiAqL1xuZnVuY3Rpb24gbWFwKGNvbGxlY3Rpb24sIGl0ZXJhdGVlKSB7XG4gIHZhciBmdW5jID0gaXNBcnJheShjb2xsZWN0aW9uKSA/IGFycmF5TWFwIDogYmFzZU1hcDtcbiAgcmV0dXJuIGZ1bmMoY29sbGVjdGlvbiwgYmFzZUl0ZXJhdGVlKGl0ZXJhdGVlLCAzKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwO1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ucmVkdWNlYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0geyp9IFthY2N1bXVsYXRvcl0gVGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpbml0QWNjdW1dIFNwZWNpZnkgdXNpbmcgdGhlIGZpcnN0IGVsZW1lbnQgb2YgYGFycmF5YCBhc1xuICogIHRoZSBpbml0aWFsIHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGFjY3VtdWxhdGVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBhcnJheVJlZHVjZShhcnJheSwgaXRlcmF0ZWUsIGFjY3VtdWxhdG9yLCBpbml0QWNjdW0pIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcblxuICBpZiAoaW5pdEFjY3VtICYmIGxlbmd0aCkge1xuICAgIGFjY3VtdWxhdG9yID0gYXJyYXlbKytpbmRleF07XG4gIH1cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhY2N1bXVsYXRvciA9IGl0ZXJhdGVlKGFjY3VtdWxhdG9yLCBhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSk7XG4gIH1cbiAgcmV0dXJuIGFjY3VtdWxhdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5UmVkdWNlO1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5yZWR1Y2VgIGFuZCBgXy5yZWR1Y2VSaWdodGAsIHdpdGhvdXQgc3VwcG9ydFxuICogZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMsIHdoaWNoIGl0ZXJhdGVzIG92ZXIgYGNvbGxlY3Rpb25gIHVzaW5nIGBlYWNoRnVuY2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBjb2xsZWN0aW9uIFRoZSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0geyp9IGFjY3VtdWxhdG9yIFRoZSBpbml0aWFsIHZhbHVlLlxuICogQHBhcmFtIHtib29sZWFufSBpbml0QWNjdW0gU3BlY2lmeSB1c2luZyB0aGUgZmlyc3Qgb3IgbGFzdCBlbGVtZW50IG9mXG4gKiAgYGNvbGxlY3Rpb25gIGFzIHRoZSBpbml0aWFsIHZhbHVlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZWFjaEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGl0ZXJhdGUgb3ZlciBgY29sbGVjdGlvbmAuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgYWNjdW11bGF0ZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGJhc2VSZWR1Y2UoY29sbGVjdGlvbiwgaXRlcmF0ZWUsIGFjY3VtdWxhdG9yLCBpbml0QWNjdW0sIGVhY2hGdW5jKSB7XG4gIGVhY2hGdW5jKGNvbGxlY3Rpb24sIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbikge1xuICAgIGFjY3VtdWxhdG9yID0gaW5pdEFjY3VtXG4gICAgICA/IChpbml0QWNjdW0gPSBmYWxzZSwgdmFsdWUpXG4gICAgICA6IGl0ZXJhdGVlKGFjY3VtdWxhdG9yLCB2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pO1xuICB9KTtcbiAgcmV0dXJuIGFjY3VtdWxhdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VSZWR1Y2U7XG4iLCJ2YXIgYXJyYXlSZWR1Y2UgPSByZXF1aXJlKCcuL19hcnJheVJlZHVjZScpLFxuICAgIGJhc2VFYWNoID0gcmVxdWlyZSgnLi9fYmFzZUVhY2gnKSxcbiAgICBiYXNlSXRlcmF0ZWUgPSByZXF1aXJlKCcuL19iYXNlSXRlcmF0ZWUnKSxcbiAgICBiYXNlUmVkdWNlID0gcmVxdWlyZSgnLi9fYmFzZVJlZHVjZScpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKTtcblxuLyoqXG4gKiBSZWR1Y2VzIGBjb2xsZWN0aW9uYCB0byBhIHZhbHVlIHdoaWNoIGlzIHRoZSBhY2N1bXVsYXRlZCByZXN1bHQgb2YgcnVubmluZ1xuICogZWFjaCBlbGVtZW50IGluIGBjb2xsZWN0aW9uYCB0aHJ1IGBpdGVyYXRlZWAsIHdoZXJlIGVhY2ggc3VjY2Vzc2l2ZVxuICogaW52b2NhdGlvbiBpcyBzdXBwbGllZCB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBwcmV2aW91cy4gSWYgYGFjY3VtdWxhdG9yYFxuICogaXMgbm90IGdpdmVuLCB0aGUgZmlyc3QgZWxlbWVudCBvZiBgY29sbGVjdGlvbmAgaXMgdXNlZCBhcyB0aGUgaW5pdGlhbFxuICogdmFsdWUuIFRoZSBpdGVyYXRlZSBpcyBpbnZva2VkIHdpdGggZm91ciBhcmd1bWVudHM6XG4gKiAoYWNjdW11bGF0b3IsIHZhbHVlLCBpbmRleHxrZXksIGNvbGxlY3Rpb24pLlxuICpcbiAqIE1hbnkgbG9kYXNoIG1ldGhvZHMgYXJlIGd1YXJkZWQgdG8gd29yayBhcyBpdGVyYXRlZXMgZm9yIG1ldGhvZHMgbGlrZVxuICogYF8ucmVkdWNlYCwgYF8ucmVkdWNlUmlnaHRgLCBhbmQgYF8udHJhbnNmb3JtYC5cbiAqXG4gKiBUaGUgZ3VhcmRlZCBtZXRob2RzIGFyZTpcbiAqIGBhc3NpZ25gLCBgZGVmYXVsdHNgLCBgZGVmYXVsdHNEZWVwYCwgYGluY2x1ZGVzYCwgYG1lcmdlYCwgYG9yZGVyQnlgLFxuICogYW5kIGBzb3J0QnlgXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBjb2xsZWN0aW9uIFRoZSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtpdGVyYXRlZT1fLmlkZW50aXR5XSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHsqfSBbYWNjdW11bGF0b3JdIFRoZSBpbml0aWFsIHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGFjY3VtdWxhdGVkIHZhbHVlLlxuICogQHNlZSBfLnJlZHVjZVJpZ2h0XG4gKiBAZXhhbXBsZVxuICpcbiAqIF8ucmVkdWNlKFsxLCAyXSwgZnVuY3Rpb24oc3VtLCBuKSB7XG4gKiAgIHJldHVybiBzdW0gKyBuO1xuICogfSwgMCk7XG4gKiAvLyA9PiAzXG4gKlxuICogXy5yZWR1Y2UoeyAnYSc6IDEsICdiJzogMiwgJ2MnOiAxIH0sIGZ1bmN0aW9uKHJlc3VsdCwgdmFsdWUsIGtleSkge1xuICogICAocmVzdWx0W3ZhbHVlXSB8fCAocmVzdWx0W3ZhbHVlXSA9IFtdKSkucHVzaChrZXkpO1xuICogICByZXR1cm4gcmVzdWx0O1xuICogfSwge30pO1xuICogLy8gPT4geyAnMSc6IFsnYScsICdjJ10sICcyJzogWydiJ10gfSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICovXG5mdW5jdGlvbiByZWR1Y2UoY29sbGVjdGlvbiwgaXRlcmF0ZWUsIGFjY3VtdWxhdG9yKSB7XG4gIHZhciBmdW5jID0gaXNBcnJheShjb2xsZWN0aW9uKSA/IGFycmF5UmVkdWNlIDogYmFzZVJlZHVjZSxcbiAgICAgIGluaXRBY2N1bSA9IGFyZ3VtZW50cy5sZW5ndGggPCAzO1xuXG4gIHJldHVybiBmdW5jKGNvbGxlY3Rpb24sIGJhc2VJdGVyYXRlZShpdGVyYXRlZSwgNCksIGFjY3VtdWxhdG9yLCBpbml0QWNjdW0sIGJhc2VFYWNoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZWR1Y2U7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3RyaW5nYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3RyaW5nLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTdHJpbmcoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTdHJpbmcoMSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzdHJpbmcnIHx8XG4gICAgKCFpc0FycmF5KHZhbHVlKSAmJiBpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IHN0cmluZ1RhZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTdHJpbmc7XG4iLCJ2YXIgYmFzZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fYmFzZVByb3BlcnR5Jyk7XG5cbi8qKlxuICogR2V0cyB0aGUgc2l6ZSBvZiBhbiBBU0NJSSBgc3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBzdHJpbmcgc2l6ZS5cbiAqL1xudmFyIGFzY2lpU2l6ZSA9IGJhc2VQcm9wZXJ0eSgnbGVuZ3RoJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXNjaWlTaXplO1xuIiwiLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNoYXJhY3RlciBjbGFzc2VzLiAqL1xudmFyIHJzQXN0cmFsUmFuZ2UgPSAnXFxcXHVkODAwLVxcXFx1ZGZmZicsXG4gICAgcnNDb21ib01hcmtzUmFuZ2UgPSAnXFxcXHUwMzAwLVxcXFx1MDM2ZicsXG4gICAgcmVDb21ib0hhbGZNYXJrc1JhbmdlID0gJ1xcXFx1ZmUyMC1cXFxcdWZlMmYnLFxuICAgIHJzQ29tYm9TeW1ib2xzUmFuZ2UgPSAnXFxcXHUyMGQwLVxcXFx1MjBmZicsXG4gICAgcnNDb21ib1JhbmdlID0gcnNDb21ib01hcmtzUmFuZ2UgKyByZUNvbWJvSGFsZk1hcmtzUmFuZ2UgKyByc0NvbWJvU3ltYm9sc1JhbmdlLFxuICAgIHJzVmFyUmFuZ2UgPSAnXFxcXHVmZTBlXFxcXHVmZTBmJztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNhcHR1cmUgZ3JvdXBzLiAqL1xudmFyIHJzWldKID0gJ1xcXFx1MjAwZCc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBzdHJpbmdzIHdpdGggW3plcm8td2lkdGggam9pbmVycyBvciBjb2RlIHBvaW50cyBmcm9tIHRoZSBhc3RyYWwgcGxhbmVzXShodHRwOi8vZWV2LmVlL2Jsb2cvMjAxNS8wOS8xMi9kYXJrLWNvcm5lcnMtb2YtdW5pY29kZS8pLiAqL1xudmFyIHJlSGFzVW5pY29kZSA9IFJlZ0V4cCgnWycgKyByc1pXSiArIHJzQXN0cmFsUmFuZ2UgICsgcnNDb21ib1JhbmdlICsgcnNWYXJSYW5nZSArICddJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBzdHJpbmdgIGNvbnRhaW5zIFVuaWNvZGUgc3ltYm9scy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYSBzeW1ib2wgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzVW5pY29kZShzdHJpbmcpIHtcbiAgcmV0dXJuIHJlSGFzVW5pY29kZS50ZXN0KHN0cmluZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzVW5pY29kZTtcbiIsIi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjaGFyYWN0ZXIgY2xhc3Nlcy4gKi9cbnZhciByc0FzdHJhbFJhbmdlID0gJ1xcXFx1ZDgwMC1cXFxcdWRmZmYnLFxuICAgIHJzQ29tYm9NYXJrc1JhbmdlID0gJ1xcXFx1MDMwMC1cXFxcdTAzNmYnLFxuICAgIHJlQ29tYm9IYWxmTWFya3NSYW5nZSA9ICdcXFxcdWZlMjAtXFxcXHVmZTJmJyxcbiAgICByc0NvbWJvU3ltYm9sc1JhbmdlID0gJ1xcXFx1MjBkMC1cXFxcdTIwZmYnLFxuICAgIHJzQ29tYm9SYW5nZSA9IHJzQ29tYm9NYXJrc1JhbmdlICsgcmVDb21ib0hhbGZNYXJrc1JhbmdlICsgcnNDb21ib1N5bWJvbHNSYW5nZSxcbiAgICByc1ZhclJhbmdlID0gJ1xcXFx1ZmUwZVxcXFx1ZmUwZic7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjYXB0dXJlIGdyb3Vwcy4gKi9cbnZhciByc0FzdHJhbCA9ICdbJyArIHJzQXN0cmFsUmFuZ2UgKyAnXScsXG4gICAgcnNDb21ibyA9ICdbJyArIHJzQ29tYm9SYW5nZSArICddJyxcbiAgICByc0ZpdHogPSAnXFxcXHVkODNjW1xcXFx1ZGZmYi1cXFxcdWRmZmZdJyxcbiAgICByc01vZGlmaWVyID0gJyg/OicgKyByc0NvbWJvICsgJ3wnICsgcnNGaXR6ICsgJyknLFxuICAgIHJzTm9uQXN0cmFsID0gJ1teJyArIHJzQXN0cmFsUmFuZ2UgKyAnXScsXG4gICAgcnNSZWdpb25hbCA9ICcoPzpcXFxcdWQ4M2NbXFxcXHVkZGU2LVxcXFx1ZGRmZl0pezJ9JyxcbiAgICByc1N1cnJQYWlyID0gJ1tcXFxcdWQ4MDAtXFxcXHVkYmZmXVtcXFxcdWRjMDAtXFxcXHVkZmZmXScsXG4gICAgcnNaV0ogPSAnXFxcXHUyMDBkJztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIHJlZ2V4ZXMuICovXG52YXIgcmVPcHRNb2QgPSByc01vZGlmaWVyICsgJz8nLFxuICAgIHJzT3B0VmFyID0gJ1snICsgcnNWYXJSYW5nZSArICddPycsXG4gICAgcnNPcHRKb2luID0gJyg/OicgKyByc1pXSiArICcoPzonICsgW3JzTm9uQXN0cmFsLCByc1JlZ2lvbmFsLCByc1N1cnJQYWlyXS5qb2luKCd8JykgKyAnKScgKyByc09wdFZhciArIHJlT3B0TW9kICsgJykqJyxcbiAgICByc1NlcSA9IHJzT3B0VmFyICsgcmVPcHRNb2QgKyByc09wdEpvaW4sXG4gICAgcnNTeW1ib2wgPSAnKD86JyArIFtyc05vbkFzdHJhbCArIHJzQ29tYm8gKyAnPycsIHJzQ29tYm8sIHJzUmVnaW9uYWwsIHJzU3VyclBhaXIsIHJzQXN0cmFsXS5qb2luKCd8JykgKyAnKSc7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIFtzdHJpbmcgc3ltYm9sc10oaHR0cHM6Ly9tYXRoaWFzYnluZW5zLmJlL25vdGVzL2phdmFzY3JpcHQtdW5pY29kZSkuICovXG52YXIgcmVVbmljb2RlID0gUmVnRXhwKHJzRml0eiArICcoPz0nICsgcnNGaXR6ICsgJyl8JyArIHJzU3ltYm9sICsgcnNTZXEsICdnJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgc2l6ZSBvZiBhIFVuaWNvZGUgYHN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyBpbnNwZWN0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgc3RyaW5nIHNpemUuXG4gKi9cbmZ1bmN0aW9uIHVuaWNvZGVTaXplKHN0cmluZykge1xuICB2YXIgcmVzdWx0ID0gcmVVbmljb2RlLmxhc3RJbmRleCA9IDA7XG4gIHdoaWxlIChyZVVuaWNvZGUudGVzdChzdHJpbmcpKSB7XG4gICAgKytyZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB1bmljb2RlU2l6ZTtcbiIsInZhciBhc2NpaVNpemUgPSByZXF1aXJlKCcuL19hc2NpaVNpemUnKSxcbiAgICBoYXNVbmljb2RlID0gcmVxdWlyZSgnLi9faGFzVW5pY29kZScpLFxuICAgIHVuaWNvZGVTaXplID0gcmVxdWlyZSgnLi9fdW5pY29kZVNpemUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBudW1iZXIgb2Ygc3ltYm9scyBpbiBgc3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBzdHJpbmcgc2l6ZS5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nU2l6ZShzdHJpbmcpIHtcbiAgcmV0dXJuIGhhc1VuaWNvZGUoc3RyaW5nKVxuICAgID8gdW5pY29kZVNpemUoc3RyaW5nKVxuICAgIDogYXNjaWlTaXplKHN0cmluZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RyaW5nU2l6ZTtcbiIsInZhciBiYXNlS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VLZXlzJyksXG4gICAgZ2V0VGFnID0gcmVxdWlyZSgnLi9fZ2V0VGFnJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyksXG4gICAgaXNTdHJpbmcgPSByZXF1aXJlKCcuL2lzU3RyaW5nJyksXG4gICAgc3RyaW5nU2l6ZSA9IHJlcXVpcmUoJy4vX3N0cmluZ1NpemUnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nO1xuXG4vKipcbiAqIEdldHMgdGhlIHNpemUgb2YgYGNvbGxlY3Rpb25gIGJ5IHJldHVybmluZyBpdHMgbGVuZ3RoIGZvciBhcnJheS1saWtlXG4gKiB2YWx1ZXMgb3IgdGhlIG51bWJlciBvZiBvd24gZW51bWVyYWJsZSBzdHJpbmcga2V5ZWQgcHJvcGVydGllcyBmb3Igb2JqZWN0cy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgQ29sbGVjdGlvblxuICogQHBhcmFtIHtBcnJheXxPYmplY3R8c3RyaW5nfSBjb2xsZWN0aW9uIFRoZSBjb2xsZWN0aW9uIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBjb2xsZWN0aW9uIHNpemUuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uc2l6ZShbMSwgMiwgM10pO1xuICogLy8gPT4gM1xuICpcbiAqIF8uc2l6ZSh7ICdhJzogMSwgJ2InOiAyIH0pO1xuICogLy8gPT4gMlxuICpcbiAqIF8uc2l6ZSgncGViYmxlcycpO1xuICogLy8gPT4gN1xuICovXG5mdW5jdGlvbiBzaXplKGNvbGxlY3Rpb24pIHtcbiAgaWYgKGNvbGxlY3Rpb24gPT0gbnVsbCkge1xuICAgIHJldHVybiAwO1xuICB9XG4gIGlmIChpc0FycmF5TGlrZShjb2xsZWN0aW9uKSkge1xuICAgIHJldHVybiBpc1N0cmluZyhjb2xsZWN0aW9uKSA/IHN0cmluZ1NpemUoY29sbGVjdGlvbikgOiBjb2xsZWN0aW9uLmxlbmd0aDtcbiAgfVxuICB2YXIgdGFnID0gZ2V0VGFnKGNvbGxlY3Rpb24pO1xuICBpZiAodGFnID09IG1hcFRhZyB8fCB0YWcgPT0gc2V0VGFnKSB7XG4gICAgcmV0dXJuIGNvbGxlY3Rpb24uc2l6ZTtcbiAgfVxuICByZXR1cm4gYmFzZUtleXMoY29sbGVjdGlvbikubGVuZ3RoO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNpemU7XG4iLCJ2YXIgYXJyYXlFYWNoID0gcmVxdWlyZSgnLi9fYXJyYXlFYWNoJyksXG4gICAgYmFzZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX2Jhc2VDcmVhdGUnKSxcbiAgICBiYXNlRm9yT3duID0gcmVxdWlyZSgnLi9fYmFzZUZvck93bicpLFxuICAgIGJhc2VJdGVyYXRlZSA9IHJlcXVpcmUoJy4vX2Jhc2VJdGVyYXRlZScpLFxuICAgIGdldFByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2dldFByb3RvdHlwZScpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9pc1R5cGVkQXJyYXknKTtcblxuLyoqXG4gKiBBbiBhbHRlcm5hdGl2ZSB0byBgXy5yZWR1Y2VgOyB0aGlzIG1ldGhvZCB0cmFuc2Zvcm1zIGBvYmplY3RgIHRvIGEgbmV3XG4gKiBgYWNjdW11bGF0b3JgIG9iamVjdCB3aGljaCBpcyB0aGUgcmVzdWx0IG9mIHJ1bm5pbmcgZWFjaCBvZiBpdHMgb3duXG4gKiBlbnVtZXJhYmxlIHN0cmluZyBrZXllZCBwcm9wZXJ0aWVzIHRocnUgYGl0ZXJhdGVlYCwgd2l0aCBlYWNoIGludm9jYXRpb25cbiAqIHBvdGVudGlhbGx5IG11dGF0aW5nIHRoZSBgYWNjdW11bGF0b3JgIG9iamVjdC4gSWYgYGFjY3VtdWxhdG9yYCBpcyBub3RcbiAqIHByb3ZpZGVkLCBhIG5ldyBvYmplY3Qgd2l0aCB0aGUgc2FtZSBgW1tQcm90b3R5cGVdXWAgd2lsbCBiZSB1c2VkLiBUaGVcbiAqIGl0ZXJhdGVlIGlzIGludm9rZWQgd2l0aCBmb3VyIGFyZ3VtZW50czogKGFjY3VtdWxhdG9yLCB2YWx1ZSwga2V5LCBvYmplY3QpLlxuICogSXRlcmF0ZWUgZnVuY3Rpb25zIG1heSBleGl0IGl0ZXJhdGlvbiBlYXJseSBieSBleHBsaWNpdGx5IHJldHVybmluZyBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMS4zLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaXRlcmF0ZWU9Xy5pZGVudGl0eV0gVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7Kn0gW2FjY3VtdWxhdG9yXSBUaGUgY3VzdG9tIGFjY3VtdWxhdG9yIHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGFjY3VtdWxhdGVkIHZhbHVlLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRyYW5zZm9ybShbMiwgMywgNF0sIGZ1bmN0aW9uKHJlc3VsdCwgbikge1xuICogICByZXN1bHQucHVzaChuICo9IG4pO1xuICogICByZXR1cm4gbiAlIDIgPT0gMDtcbiAqIH0sIFtdKTtcbiAqIC8vID0+IFs0LCA5XVxuICpcbiAqIF8udHJhbnNmb3JtKHsgJ2EnOiAxLCAnYic6IDIsICdjJzogMSB9LCBmdW5jdGlvbihyZXN1bHQsIHZhbHVlLCBrZXkpIHtcbiAqICAgKHJlc3VsdFt2YWx1ZV0gfHwgKHJlc3VsdFt2YWx1ZV0gPSBbXSkpLnB1c2goa2V5KTtcbiAqIH0sIHt9KTtcbiAqIC8vID0+IHsgJzEnOiBbJ2EnLCAnYyddLCAnMic6IFsnYiddIH1cbiAqL1xuZnVuY3Rpb24gdHJhbnNmb3JtKG9iamVjdCwgaXRlcmF0ZWUsIGFjY3VtdWxhdG9yKSB7XG4gIHZhciBpc0FyciA9IGlzQXJyYXkob2JqZWN0KSxcbiAgICAgIGlzQXJyTGlrZSA9IGlzQXJyIHx8IGlzQnVmZmVyKG9iamVjdCkgfHwgaXNUeXBlZEFycmF5KG9iamVjdCk7XG5cbiAgaXRlcmF0ZWUgPSBiYXNlSXRlcmF0ZWUoaXRlcmF0ZWUsIDQpO1xuICBpZiAoYWNjdW11bGF0b3IgPT0gbnVsbCkge1xuICAgIHZhciBDdG9yID0gb2JqZWN0ICYmIG9iamVjdC5jb25zdHJ1Y3RvcjtcbiAgICBpZiAoaXNBcnJMaWtlKSB7XG4gICAgICBhY2N1bXVsYXRvciA9IGlzQXJyID8gbmV3IEN0b3IgOiBbXTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNPYmplY3Qob2JqZWN0KSkge1xuICAgICAgYWNjdW11bGF0b3IgPSBpc0Z1bmN0aW9uKEN0b3IpID8gYmFzZUNyZWF0ZShnZXRQcm90b3R5cGUob2JqZWN0KSkgOiB7fTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBhY2N1bXVsYXRvciA9IHt9O1xuICAgIH1cbiAgfVxuICAoaXNBcnJMaWtlID8gYXJyYXlFYWNoIDogYmFzZUZvck93bikob2JqZWN0LCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIG9iamVjdCkge1xuICAgIHJldHVybiBpdGVyYXRlZShhY2N1bXVsYXRvciwgdmFsdWUsIGluZGV4LCBvYmplY3QpO1xuICB9KTtcbiAgcmV0dXJuIGFjY3VtdWxhdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRyYW5zZm9ybTtcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHNwcmVhZGFibGVTeW1ib2wgPSBTeW1ib2wgPyBTeW1ib2wuaXNDb25jYXRTcHJlYWRhYmxlIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgZmxhdHRlbmFibGUgYGFyZ3VtZW50c2Agb2JqZWN0IG9yIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGZsYXR0ZW5hYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzRmxhdHRlbmFibGUodmFsdWUpIHtcbiAgcmV0dXJuIGlzQXJyYXkodmFsdWUpIHx8IGlzQXJndW1lbnRzKHZhbHVlKSB8fFxuICAgICEhKHNwcmVhZGFibGVTeW1ib2wgJiYgdmFsdWUgJiYgdmFsdWVbc3ByZWFkYWJsZVN5bWJvbF0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRmxhdHRlbmFibGU7XG4iLCJ2YXIgYXJyYXlQdXNoID0gcmVxdWlyZSgnLi9fYXJyYXlQdXNoJyksXG4gICAgaXNGbGF0dGVuYWJsZSA9IHJlcXVpcmUoJy4vX2lzRmxhdHRlbmFibGUnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5mbGF0dGVuYCB3aXRoIHN1cHBvcnQgZm9yIHJlc3RyaWN0aW5nIGZsYXR0ZW5pbmcuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBmbGF0dGVuLlxuICogQHBhcmFtIHtudW1iZXJ9IGRlcHRoIFRoZSBtYXhpbXVtIHJlY3Vyc2lvbiBkZXB0aC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3ByZWRpY2F0ZT1pc0ZsYXR0ZW5hYmxlXSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNTdHJpY3RdIFJlc3RyaWN0IHRvIHZhbHVlcyB0aGF0IHBhc3MgYHByZWRpY2F0ZWAgY2hlY2tzLlxuICogQHBhcmFtIHtBcnJheX0gW3Jlc3VsdD1bXV0gVGhlIGluaXRpYWwgcmVzdWx0IHZhbHVlLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmxhdHRlbmVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBiYXNlRmxhdHRlbihhcnJheSwgZGVwdGgsIHByZWRpY2F0ZSwgaXNTdHJpY3QsIHJlc3VsdCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBwcmVkaWNhdGUgfHwgKHByZWRpY2F0ZSA9IGlzRmxhdHRlbmFibGUpO1xuICByZXN1bHQgfHwgKHJlc3VsdCA9IFtdKTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XTtcbiAgICBpZiAoZGVwdGggPiAwICYmIHByZWRpY2F0ZSh2YWx1ZSkpIHtcbiAgICAgIGlmIChkZXB0aCA+IDEpIHtcbiAgICAgICAgLy8gUmVjdXJzaXZlbHkgZmxhdHRlbiBhcnJheXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICAgICAgYmFzZUZsYXR0ZW4odmFsdWUsIGRlcHRoIC0gMSwgcHJlZGljYXRlLCBpc1N0cmljdCwgcmVzdWx0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFycmF5UHVzaChyZXN1bHQsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFpc1N0cmljdCkge1xuICAgICAgcmVzdWx0W3Jlc3VsdC5sZW5ndGhdID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUZsYXR0ZW47XG4iLCIvKipcbiAqIEEgZmFzdGVyIGFsdGVybmF0aXZlIHRvIGBGdW5jdGlvbiNhcHBseWAsIHRoaXMgZnVuY3Rpb24gaW52b2tlcyBgZnVuY2BcbiAqIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIGB0aGlzQXJnYCBhbmQgdGhlIGFyZ3VtZW50cyBvZiBgYXJnc2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGludm9rZS5cbiAqIEBwYXJhbSB7Kn0gdGhpc0FyZyBUaGUgYHRoaXNgIGJpbmRpbmcgb2YgYGZ1bmNgLlxuICogQHBhcmFtIHtBcnJheX0gYXJncyBUaGUgYXJndW1lbnRzIHRvIGludm9rZSBgZnVuY2Agd2l0aC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXN1bHQgb2YgYGZ1bmNgLlxuICovXG5mdW5jdGlvbiBhcHBseShmdW5jLCB0aGlzQXJnLCBhcmdzKSB7XG4gIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZyk7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gIH1cbiAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXBwbHk7XG4iLCJ2YXIgYXBwbHkgPSByZXF1aXJlKCcuL19hcHBseScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXg7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlUmVzdGAgd2hpY2ggdHJhbnNmb3JtcyB0aGUgcmVzdCBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gYXBwbHkgYSByZXN0IHBhcmFtZXRlciB0by5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9ZnVuYy5sZW5ndGgtMV0gVGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSByZXN0IHBhcmFtZXRlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgcmVzdCBhcnJheSB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlclJlc3QoZnVuYywgc3RhcnQsIHRyYW5zZm9ybSkge1xuICBzdGFydCA9IG5hdGl2ZU1heChzdGFydCA9PT0gdW5kZWZpbmVkID8gKGZ1bmMubGVuZ3RoIC0gMSkgOiBzdGFydCwgMCk7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAgaW5kZXggPSAtMSxcbiAgICAgICAgbGVuZ3RoID0gbmF0aXZlTWF4KGFyZ3MubGVuZ3RoIC0gc3RhcnQsIDApLFxuICAgICAgICBhcnJheSA9IEFycmF5KGxlbmd0aCk7XG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgYXJyYXlbaW5kZXhdID0gYXJnc1tzdGFydCArIGluZGV4XTtcbiAgICB9XG4gICAgaW5kZXggPSAtMTtcbiAgICB2YXIgb3RoZXJBcmdzID0gQXJyYXkoc3RhcnQgKyAxKTtcbiAgICB3aGlsZSAoKytpbmRleCA8IHN0YXJ0KSB7XG4gICAgICBvdGhlckFyZ3NbaW5kZXhdID0gYXJnc1tpbmRleF07XG4gICAgfVxuICAgIG90aGVyQXJnc1tzdGFydF0gPSB0cmFuc2Zvcm0oYXJyYXkpO1xuICAgIHJldHVybiBhcHBseShmdW5jLCB0aGlzLCBvdGhlckFyZ3MpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG92ZXJSZXN0O1xuIiwidmFyIGNvbnN0YW50ID0gcmVxdWlyZSgnLi9jb25zdGFudCcpLFxuICAgIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fZGVmaW5lUHJvcGVydHknKSxcbiAgICBpZGVudGl0eSA9IHJlcXVpcmUoJy4vaWRlbnRpdHknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgc2V0VG9TdHJpbmdgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaG90IGxvb3Agc2hvcnRpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN0cmluZyBUaGUgYHRvU3RyaW5nYCByZXN1bHQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgYGZ1bmNgLlxuICovXG52YXIgYmFzZVNldFRvU3RyaW5nID0gIWRlZmluZVByb3BlcnR5ID8gaWRlbnRpdHkgOiBmdW5jdGlvbihmdW5jLCBzdHJpbmcpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5KGZ1bmMsICd0b1N0cmluZycsIHtcbiAgICAnY29uZmlndXJhYmxlJzogdHJ1ZSxcbiAgICAnZW51bWVyYWJsZSc6IGZhbHNlLFxuICAgICd2YWx1ZSc6IGNvbnN0YW50KHN0cmluZyksXG4gICAgJ3dyaXRhYmxlJzogdHJ1ZVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVNldFRvU3RyaW5nO1xuIiwiLyoqIFVzZWQgdG8gZGV0ZWN0IGhvdCBmdW5jdGlvbnMgYnkgbnVtYmVyIG9mIGNhbGxzIHdpdGhpbiBhIHNwYW4gb2YgbWlsbGlzZWNvbmRzLiAqL1xudmFyIEhPVF9DT1VOVCA9IDgwMCxcbiAgICBIT1RfU1BBTiA9IDE2O1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTm93ID0gRGF0ZS5ub3c7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQnbGwgc2hvcnQgb3V0IGFuZCBpbnZva2UgYGlkZW50aXR5YCBpbnN0ZWFkXG4gKiBvZiBgZnVuY2Agd2hlbiBpdCdzIGNhbGxlZCBgSE9UX0NPVU5UYCBvciBtb3JlIHRpbWVzIGluIGBIT1RfU1BBTmBcbiAqIG1pbGxpc2Vjb25kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gcmVzdHJpY3QuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBzaG9ydGFibGUgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHNob3J0T3V0KGZ1bmMpIHtcbiAgdmFyIGNvdW50ID0gMCxcbiAgICAgIGxhc3RDYWxsZWQgPSAwO1xuXG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RhbXAgPSBuYXRpdmVOb3coKSxcbiAgICAgICAgcmVtYWluaW5nID0gSE9UX1NQQU4gLSAoc3RhbXAgLSBsYXN0Q2FsbGVkKTtcblxuICAgIGxhc3RDYWxsZWQgPSBzdGFtcDtcbiAgICBpZiAocmVtYWluaW5nID4gMCkge1xuICAgICAgaWYgKCsrY291bnQgPj0gSE9UX0NPVU5UKSB7XG4gICAgICAgIHJldHVybiBhcmd1bWVudHNbMF07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvdW50ID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmMuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3J0T3V0O1xuIiwidmFyIGJhc2VTZXRUb1N0cmluZyA9IHJlcXVpcmUoJy4vX2Jhc2VTZXRUb1N0cmluZycpLFxuICAgIHNob3J0T3V0ID0gcmVxdWlyZSgnLi9fc2hvcnRPdXQnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBgdG9TdHJpbmdgIG1ldGhvZCBvZiBgZnVuY2AgdG8gcmV0dXJuIGBzdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdHJpbmcgVGhlIGB0b1N0cmluZ2AgcmVzdWx0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIGBmdW5jYC5cbiAqL1xudmFyIHNldFRvU3RyaW5nID0gc2hvcnRPdXQoYmFzZVNldFRvU3RyaW5nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBzZXRUb1N0cmluZztcbiIsInZhciBpZGVudGl0eSA9IHJlcXVpcmUoJy4vaWRlbnRpdHknKSxcbiAgICBvdmVyUmVzdCA9IHJlcXVpcmUoJy4vX292ZXJSZXN0JyksXG4gICAgc2V0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19zZXRUb1N0cmluZycpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnJlc3RgIHdoaWNoIGRvZXNuJ3QgdmFsaWRhdGUgb3IgY29lcmNlIGFyZ3VtZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gYXBwbHkgYSByZXN0IHBhcmFtZXRlciB0by5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9ZnVuYy5sZW5ndGgtMV0gVGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSByZXN0IHBhcmFtZXRlci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUmVzdChmdW5jLCBzdGFydCkge1xuICByZXR1cm4gc2V0VG9TdHJpbmcob3ZlclJlc3QoZnVuYywgc3RhcnQsIGlkZW50aXR5KSwgZnVuYyArICcnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlUmVzdDtcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZmluZEluZGV4YCBhbmQgYF8uZmluZExhc3RJbmRleGAgd2l0aG91dFxuICogc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tSW5kZXggVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBiYXNlRmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUsIGZyb21JbmRleCwgZnJvbVJpZ2h0KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICBpbmRleCA9IGZyb21JbmRleCArIChmcm9tUmlnaHQgPyAxIDogLTEpO1xuXG4gIHdoaWxlICgoZnJvbVJpZ2h0ID8gaW5kZXgtLSA6ICsraW5kZXggPCBsZW5ndGgpKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VGaW5kSW5kZXg7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmFOYCB3aXRob3V0IHN1cHBvcnQgZm9yIG51bWJlciBvYmplY3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGBOYU5gLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hTih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc05hTjtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmluZGV4T2ZgIHdoaWNoIHBlcmZvcm1zIHN0cmljdCBlcXVhbGl0eVxuICogY29tcGFyaXNvbnMgb2YgdmFsdWVzLCBpLmUuIGA9PT1gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcGFyYW0ge251bWJlcn0gZnJvbUluZGV4IFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIHN0cmljdEluZGV4T2YoYXJyYXksIHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgdmFyIGluZGV4ID0gZnJvbUluZGV4IC0gMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChhcnJheVtpbmRleF0gPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpY3RJbmRleE9mO1xuIiwidmFyIGJhc2VGaW5kSW5kZXggPSByZXF1aXJlKCcuL19iYXNlRmluZEluZGV4JyksXG4gICAgYmFzZUlzTmFOID0gcmVxdWlyZSgnLi9fYmFzZUlzTmFOJyksXG4gICAgc3RyaWN0SW5kZXhPZiA9IHJlcXVpcmUoJy4vX3N0cmljdEluZGV4T2YnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pbmRleE9mYCB3aXRob3V0IGBmcm9tSW5kZXhgIGJvdW5kcyBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tSW5kZXggVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUluZGV4T2YoYXJyYXksIHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZVxuICAgID8gc3RyaWN0SW5kZXhPZihhcnJheSwgdmFsdWUsIGZyb21JbmRleClcbiAgICA6IGJhc2VGaW5kSW5kZXgoYXJyYXksIGJhc2VJc05hTiwgZnJvbUluZGV4KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSW5kZXhPZjtcbiIsInZhciBiYXNlSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Jhc2VJbmRleE9mJyk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmluY2x1ZGVzYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIHNwZWNpZnlpbmcgYW4gaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IHRhcmdldCBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdGFyZ2V0YCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBhcnJheUluY2x1ZGVzKGFycmF5LCB2YWx1ZSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG4gIHJldHVybiAhIWxlbmd0aCAmJiBiYXNlSW5kZXhPZihhcnJheSwgdmFsdWUsIDApID4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlJbmNsdWRlcztcbiIsIi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyBsaWtlIGBhcnJheUluY2x1ZGVzYCBleGNlcHQgdGhhdCBpdCBhY2NlcHRzIGEgY29tcGFyYXRvci5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0gdGFyZ2V0IFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29tcGFyYXRvciBUaGUgY29tcGFyYXRvciBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB0YXJnZXRgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5SW5jbHVkZXNXaXRoKGFycmF5LCB2YWx1ZSwgY29tcGFyYXRvcikge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGNvbXBhcmF0b3IodmFsdWUsIGFycmF5W2luZGV4XSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlJbmNsdWRlc1dpdGg7XG4iLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYHVuZGVmaW5lZGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLm5vb3ApO1xuICogLy8gPT4gW3VuZGVmaW5lZCwgdW5kZWZpbmVkXVxuICovXG5mdW5jdGlvbiBub29wKCkge1xuICAvLyBObyBvcGVyYXRpb24gcGVyZm9ybWVkLlxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5vb3A7XG4iLCJ2YXIgU2V0ID0gcmVxdWlyZSgnLi9fU2V0JyksXG4gICAgbm9vcCA9IHJlcXVpcmUoJy4vbm9vcCcpLFxuICAgIHNldFRvQXJyYXkgPSByZXF1aXJlKCcuL19zZXRUb0FycmF5Jyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDA7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHNldCBvYmplY3Qgb2YgYHZhbHVlc2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGFkZCB0byB0aGUgc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IHNldC5cbiAqL1xudmFyIGNyZWF0ZVNldCA9ICEoU2V0ICYmICgxIC8gc2V0VG9BcnJheShuZXcgU2V0KFssLTBdKSlbMV0pID09IElORklOSVRZKSA/IG5vb3AgOiBmdW5jdGlvbih2YWx1ZXMpIHtcbiAgcmV0dXJuIG5ldyBTZXQodmFsdWVzKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlU2V0O1xuIiwidmFyIFNldENhY2hlID0gcmVxdWlyZSgnLi9fU2V0Q2FjaGUnKSxcbiAgICBhcnJheUluY2x1ZGVzID0gcmVxdWlyZSgnLi9fYXJyYXlJbmNsdWRlcycpLFxuICAgIGFycmF5SW5jbHVkZXNXaXRoID0gcmVxdWlyZSgnLi9fYXJyYXlJbmNsdWRlc1dpdGgnKSxcbiAgICBjYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2NhY2hlSGFzJyksXG4gICAgY3JlYXRlU2V0ID0gcmVxdWlyZSgnLi9fY3JlYXRlU2V0JyksXG4gICAgc2V0VG9BcnJheSA9IHJlcXVpcmUoJy4vX3NldFRvQXJyYXknKTtcblxuLyoqIFVzZWQgYXMgdGhlIHNpemUgdG8gZW5hYmxlIGxhcmdlIGFycmF5IG9wdGltaXphdGlvbnMuICovXG52YXIgTEFSR0VfQVJSQVlfU0laRSA9IDIwMDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmlxQnlgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaXRlcmF0ZWVdIFRoZSBpdGVyYXRlZSBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NvbXBhcmF0b3JdIFRoZSBjb21wYXJhdG9yIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBkdXBsaWNhdGUgZnJlZSBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYmFzZVVuaXEoYXJyYXksIGl0ZXJhdGVlLCBjb21wYXJhdG9yKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgaW5jbHVkZXMgPSBhcnJheUluY2x1ZGVzLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgaXNDb21tb24gPSB0cnVlLFxuICAgICAgcmVzdWx0ID0gW10sXG4gICAgICBzZWVuID0gcmVzdWx0O1xuXG4gIGlmIChjb21wYXJhdG9yKSB7XG4gICAgaXNDb21tb24gPSBmYWxzZTtcbiAgICBpbmNsdWRlcyA9IGFycmF5SW5jbHVkZXNXaXRoO1xuICB9XG4gIGVsc2UgaWYgKGxlbmd0aCA+PSBMQVJHRV9BUlJBWV9TSVpFKSB7XG4gICAgdmFyIHNldCA9IGl0ZXJhdGVlID8gbnVsbCA6IGNyZWF0ZVNldChhcnJheSk7XG4gICAgaWYgKHNldCkge1xuICAgICAgcmV0dXJuIHNldFRvQXJyYXkoc2V0KTtcbiAgICB9XG4gICAgaXNDb21tb24gPSBmYWxzZTtcbiAgICBpbmNsdWRlcyA9IGNhY2hlSGFzO1xuICAgIHNlZW4gPSBuZXcgU2V0Q2FjaGU7XG4gIH1cbiAgZWxzZSB7XG4gICAgc2VlbiA9IGl0ZXJhdGVlID8gW10gOiByZXN1bHQ7XG4gIH1cbiAgb3V0ZXI6XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICBjb21wdXRlZCA9IGl0ZXJhdGVlID8gaXRlcmF0ZWUodmFsdWUpIDogdmFsdWU7XG5cbiAgICB2YWx1ZSA9IChjb21wYXJhdG9yIHx8IHZhbHVlICE9PSAwKSA/IHZhbHVlIDogMDtcbiAgICBpZiAoaXNDb21tb24gJiYgY29tcHV0ZWQgPT09IGNvbXB1dGVkKSB7XG4gICAgICB2YXIgc2VlbkluZGV4ID0gc2Vlbi5sZW5ndGg7XG4gICAgICB3aGlsZSAoc2VlbkluZGV4LS0pIHtcbiAgICAgICAgaWYgKHNlZW5bc2VlbkluZGV4XSA9PT0gY29tcHV0ZWQpIHtcbiAgICAgICAgICBjb250aW51ZSBvdXRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGl0ZXJhdGVlKSB7XG4gICAgICAgIHNlZW4ucHVzaChjb21wdXRlZCk7XG4gICAgICB9XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKCFpbmNsdWRlcyhzZWVuLCBjb21wdXRlZCwgY29tcGFyYXRvcikpIHtcbiAgICAgIGlmIChzZWVuICE9PSByZXN1bHQpIHtcbiAgICAgICAgc2Vlbi5wdXNoKGNvbXB1dGVkKTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVW5pcTtcbiIsInZhciBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uaXNBcnJheUxpa2VgIGV4Y2VwdCB0aGF0IGl0IGFsc28gY2hlY2tzIGlmIGB2YWx1ZWBcbiAqIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheS1saWtlIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZU9iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBpc0FycmF5TGlrZSh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheUxpa2VPYmplY3Q7XG4iLCJ2YXIgYmFzZUZsYXR0ZW4gPSByZXF1aXJlKCcuL19iYXNlRmxhdHRlbicpLFxuICAgIGJhc2VSZXN0ID0gcmVxdWlyZSgnLi9fYmFzZVJlc3QnKSxcbiAgICBiYXNlVW5pcSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmlxJyksXG4gICAgaXNBcnJheUxpa2VPYmplY3QgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlT2JqZWN0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB1bmlxdWUgdmFsdWVzLCBpbiBvcmRlciwgZnJvbSBhbGwgZ2l2ZW4gYXJyYXlzIHVzaW5nXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogZm9yIGVxdWFsaXR5IGNvbXBhcmlzb25zLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBBcnJheVxuICogQHBhcmFtIHsuLi5BcnJheX0gW2FycmF5c10gVGhlIGFycmF5cyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgYXJyYXkgb2YgY29tYmluZWQgdmFsdWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnVuaW9uKFsyXSwgWzEsIDJdKTtcbiAqIC8vID0+IFsyLCAxXVxuICovXG52YXIgdW5pb24gPSBiYXNlUmVzdChmdW5jdGlvbihhcnJheXMpIHtcbiAgcmV0dXJuIGJhc2VVbmlxKGJhc2VGbGF0dGVuKGFycmF5cywgMSwgaXNBcnJheUxpa2VPYmplY3QsIHRydWUpKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVuaW9uO1xuIiwidmFyIGFycmF5TWFwID0gcmVxdWlyZSgnLi9fYXJyYXlNYXAnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy52YWx1ZXNgIGFuZCBgXy52YWx1ZXNJbmAgd2hpY2ggY3JlYXRlcyBhblxuICogYXJyYXkgb2YgYG9iamVjdGAgcHJvcGVydHkgdmFsdWVzIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHByb3BlcnR5IG5hbWVzXG4gKiBvZiBgcHJvcHNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fSBwcm9wcyBUaGUgcHJvcGVydHkgbmFtZXMgdG8gZ2V0IHZhbHVlcyBmb3IuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VWYWx1ZXMob2JqZWN0LCBwcm9wcykge1xuICByZXR1cm4gYXJyYXlNYXAocHJvcHMsIGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiBvYmplY3Rba2V5XTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVZhbHVlcztcbiIsInZhciBiYXNlVmFsdWVzID0gcmVxdWlyZSgnLi9fYmFzZVZhbHVlcycpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBzdHJpbmcga2V5ZWQgcHJvcGVydHkgdmFsdWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgdmFsdWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLnZhbHVlcyhuZXcgRm9vKTtcbiAqIC8vID0+IFsxLCAyXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICpcbiAqIF8udmFsdWVzKCdoaScpO1xuICogLy8gPT4gWydoJywgJ2knXVxuICovXG5mdW5jdGlvbiB2YWx1ZXMob2JqZWN0KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IFtdIDogYmFzZVZhbHVlcyhvYmplY3QsIGtleXMob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdmFsdWVzO1xuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuXG52YXIgbG9kYXNoO1xuXG5pZiAodHlwZW9mIHJlcXVpcmUgPT09IFwiZnVuY3Rpb25cIikge1xuICB0cnkge1xuICAgIGxvZGFzaCA9IHtcbiAgICAgIGNsb25lOiByZXF1aXJlKFwibG9kYXNoL2Nsb25lXCIpLFxuICAgICAgY29uc3RhbnQ6IHJlcXVpcmUoXCJsb2Rhc2gvY29uc3RhbnRcIiksXG4gICAgICBlYWNoOiByZXF1aXJlKFwibG9kYXNoL2VhY2hcIiksXG4gICAgICBmaWx0ZXI6IHJlcXVpcmUoXCJsb2Rhc2gvZmlsdGVyXCIpLFxuICAgICAgaGFzOiAgcmVxdWlyZShcImxvZGFzaC9oYXNcIiksXG4gICAgICBpc0FycmF5OiByZXF1aXJlKFwibG9kYXNoL2lzQXJyYXlcIiksXG4gICAgICBpc0VtcHR5OiByZXF1aXJlKFwibG9kYXNoL2lzRW1wdHlcIiksXG4gICAgICBpc0Z1bmN0aW9uOiByZXF1aXJlKFwibG9kYXNoL2lzRnVuY3Rpb25cIiksXG4gICAgICBpc1VuZGVmaW5lZDogcmVxdWlyZShcImxvZGFzaC9pc1VuZGVmaW5lZFwiKSxcbiAgICAgIGtleXM6IHJlcXVpcmUoXCJsb2Rhc2gva2V5c1wiKSxcbiAgICAgIG1hcDogcmVxdWlyZShcImxvZGFzaC9tYXBcIiksXG4gICAgICByZWR1Y2U6IHJlcXVpcmUoXCJsb2Rhc2gvcmVkdWNlXCIpLFxuICAgICAgc2l6ZTogcmVxdWlyZShcImxvZGFzaC9zaXplXCIpLFxuICAgICAgdHJhbnNmb3JtOiByZXF1aXJlKFwibG9kYXNoL3RyYW5zZm9ybVwiKSxcbiAgICAgIHVuaW9uOiByZXF1aXJlKFwibG9kYXNoL3VuaW9uXCIpLFxuICAgICAgdmFsdWVzOiByZXF1aXJlKFwibG9kYXNoL3ZhbHVlc1wiKVxuICAgIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBjb250aW51ZSByZWdhcmRsZXNzIG9mIGVycm9yXG4gIH1cbn1cblxuaWYgKCFsb2Rhc2gpIHtcbiAgbG9kYXNoID0gd2luZG93Ll87XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbG9kYXNoO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfID0gcmVxdWlyZShcIi4vbG9kYXNoXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEdyYXBoO1xuXG52YXIgREVGQVVMVF9FREdFX05BTUUgPSBcIlxceDAwXCI7XG52YXIgR1JBUEhfTk9ERSA9IFwiXFx4MDBcIjtcbnZhciBFREdFX0tFWV9ERUxJTSA9IFwiXFx4MDFcIjtcblxuLy8gSW1wbGVtZW50YXRpb24gbm90ZXM6XG4vL1xuLy8gICogTm9kZSBpZCBxdWVyeSBmdW5jdGlvbnMgc2hvdWxkIHJldHVybiBzdHJpbmcgaWRzIGZvciB0aGUgbm9kZXNcbi8vICAqIEVkZ2UgaWQgcXVlcnkgZnVuY3Rpb25zIHNob3VsZCByZXR1cm4gYW4gXCJlZGdlT2JqXCIsIGVkZ2Ugb2JqZWN0LCB0aGF0IGlzXG4vLyAgICBjb21wb3NlZCBvZiBlbm91Z2ggaW5mb3JtYXRpb24gdG8gdW5pcXVlbHkgaWRlbnRpZnkgYW4gZWRnZToge3YsIHcsIG5hbWV9LlxuLy8gICogSW50ZXJuYWxseSB3ZSB1c2UgYW4gXCJlZGdlSWRcIiwgYSBzdHJpbmdpZmllZCBmb3JtIG9mIHRoZSBlZGdlT2JqLCB0b1xuLy8gICAgcmVmZXJlbmNlIGVkZ2VzLiBUaGlzIGlzIGJlY2F1c2Ugd2UgbmVlZCBhIHBlcmZvcm1hbnQgd2F5IHRvIGxvb2sgdGhlc2Vcbi8vICAgIGVkZ2VzIHVwIGFuZCwgb2JqZWN0IHByb3BlcnRpZXMsIHdoaWNoIGhhdmUgc3RyaW5nIGtleXMsIGFyZSB0aGUgY2xvc2VzdFxuLy8gICAgd2UncmUgZ29pbmcgdG8gZ2V0IHRvIGEgcGVyZm9ybWFudCBoYXNodGFibGUgaW4gSmF2YVNjcmlwdC5cblxuZnVuY3Rpb24gR3JhcGgob3B0cykge1xuICB0aGlzLl9pc0RpcmVjdGVkID0gXy5oYXMob3B0cywgXCJkaXJlY3RlZFwiKSA/IG9wdHMuZGlyZWN0ZWQgOiB0cnVlO1xuICB0aGlzLl9pc011bHRpZ3JhcGggPSBfLmhhcyhvcHRzLCBcIm11bHRpZ3JhcGhcIikgPyBvcHRzLm11bHRpZ3JhcGggOiBmYWxzZTtcbiAgdGhpcy5faXNDb21wb3VuZCA9IF8uaGFzKG9wdHMsIFwiY29tcG91bmRcIikgPyBvcHRzLmNvbXBvdW5kIDogZmFsc2U7XG5cbiAgLy8gTGFiZWwgZm9yIHRoZSBncmFwaCBpdHNlbGZcbiAgdGhpcy5fbGFiZWwgPSB1bmRlZmluZWQ7XG5cbiAgLy8gRGVmYXVsdHMgdG8gYmUgc2V0IHdoZW4gY3JlYXRpbmcgYSBuZXcgbm9kZVxuICB0aGlzLl9kZWZhdWx0Tm9kZUxhYmVsRm4gPSBfLmNvbnN0YW50KHVuZGVmaW5lZCk7XG5cbiAgLy8gRGVmYXVsdHMgdG8gYmUgc2V0IHdoZW4gY3JlYXRpbmcgYSBuZXcgZWRnZVxuICB0aGlzLl9kZWZhdWx0RWRnZUxhYmVsRm4gPSBfLmNvbnN0YW50KHVuZGVmaW5lZCk7XG5cbiAgLy8gdiAtPiBsYWJlbFxuICB0aGlzLl9ub2RlcyA9IHt9O1xuXG4gIGlmICh0aGlzLl9pc0NvbXBvdW5kKSB7XG4gICAgLy8gdiAtPiBwYXJlbnRcbiAgICB0aGlzLl9wYXJlbnQgPSB7fTtcblxuICAgIC8vIHYgLT4gY2hpbGRyZW5cbiAgICB0aGlzLl9jaGlsZHJlbiA9IHt9O1xuICAgIHRoaXMuX2NoaWxkcmVuW0dSQVBIX05PREVdID0ge307XG4gIH1cblxuICAvLyB2IC0+IGVkZ2VPYmpcbiAgdGhpcy5faW4gPSB7fTtcblxuICAvLyB1IC0+IHYgLT4gTnVtYmVyXG4gIHRoaXMuX3ByZWRzID0ge307XG5cbiAgLy8gdiAtPiBlZGdlT2JqXG4gIHRoaXMuX291dCA9IHt9O1xuXG4gIC8vIHYgLT4gdyAtPiBOdW1iZXJcbiAgdGhpcy5fc3VjcyA9IHt9O1xuXG4gIC8vIGUgLT4gZWRnZU9ialxuICB0aGlzLl9lZGdlT2JqcyA9IHt9O1xuXG4gIC8vIGUgLT4gbGFiZWxcbiAgdGhpcy5fZWRnZUxhYmVscyA9IHt9O1xufVxuXG4vKiBOdW1iZXIgb2Ygbm9kZXMgaW4gdGhlIGdyYXBoLiBTaG91bGQgb25seSBiZSBjaGFuZ2VkIGJ5IHRoZSBpbXBsZW1lbnRhdGlvbi4gKi9cbkdyYXBoLnByb3RvdHlwZS5fbm9kZUNvdW50ID0gMDtcblxuLyogTnVtYmVyIG9mIGVkZ2VzIGluIHRoZSBncmFwaC4gU2hvdWxkIG9ubHkgYmUgY2hhbmdlZCBieSB0aGUgaW1wbGVtZW50YXRpb24uICovXG5HcmFwaC5wcm90b3R5cGUuX2VkZ2VDb3VudCA9IDA7XG5cblxuLyogPT09IEdyYXBoIGZ1bmN0aW9ucyA9PT09PT09PT0gKi9cblxuR3JhcGgucHJvdG90eXBlLmlzRGlyZWN0ZWQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuX2lzRGlyZWN0ZWQ7XG59O1xuXG5HcmFwaC5wcm90b3R5cGUuaXNNdWx0aWdyYXBoID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLl9pc011bHRpZ3JhcGg7XG59O1xuXG5HcmFwaC5wcm90b3R5cGUuaXNDb21wb3VuZCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5faXNDb21wb3VuZDtcbn07XG5cbkdyYXBoLnByb3RvdHlwZS5zZXRHcmFwaCA9IGZ1bmN0aW9uKGxhYmVsKSB7XG4gIHRoaXMuX2xhYmVsID0gbGFiZWw7XG4gIHJldHVybiB0aGlzO1xufTtcblxuR3JhcGgucHJvdG90eXBlLmdyYXBoID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLl9sYWJlbDtcbn07XG5cblxuLyogPT09IE5vZGUgZnVuY3Rpb25zID09PT09PT09PT0gKi9cblxuR3JhcGgucHJvdG90eXBlLnNldERlZmF1bHROb2RlTGFiZWwgPSBmdW5jdGlvbihuZXdEZWZhdWx0KSB7XG4gIGlmICghXy5pc0Z1bmN0aW9uKG5ld0RlZmF1bHQpKSB7XG4gICAgbmV3RGVmYXVsdCA9IF8uY29uc3RhbnQobmV3RGVmYXVsdCk7XG4gIH1cbiAgdGhpcy5fZGVmYXVsdE5vZGVMYWJlbEZuID0gbmV3RGVmYXVsdDtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5HcmFwaC5wcm90b3R5cGUubm9kZUNvdW50ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLl9ub2RlQ291bnQ7XG59O1xuXG5HcmFwaC5wcm90b3R5cGUubm9kZXMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIF8ua2V5cyh0aGlzLl9ub2Rlcyk7XG59O1xuXG5HcmFwaC5wcm90b3R5cGUuc291cmNlcyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHJldHVybiBfLmZpbHRlcih0aGlzLm5vZGVzKCksIGZ1bmN0aW9uKHYpIHtcbiAgICByZXR1cm4gXy5pc0VtcHR5KHNlbGYuX2luW3ZdKTtcbiAgfSk7XG59O1xuXG5HcmFwaC5wcm90b3R5cGUuc2lua3MgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICByZXR1cm4gXy5maWx0ZXIodGhpcy5ub2RlcygpLCBmdW5jdGlvbih2KSB7XG4gICAgcmV0dXJuIF8uaXNFbXB0eShzZWxmLl9vdXRbdl0pO1xuICB9KTtcbn07XG5cbkdyYXBoLnByb3RvdHlwZS5zZXROb2RlcyA9IGZ1bmN0aW9uKHZzLCB2YWx1ZSkge1xuICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBfLmVhY2godnMsIGZ1bmN0aW9uKHYpIHtcbiAgICBpZiAoYXJncy5sZW5ndGggPiAxKSB7XG4gICAgICBzZWxmLnNldE5vZGUodiwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxmLnNldE5vZGUodik7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5HcmFwaC5wcm90b3R5cGUuc2V0Tm9kZSA9IGZ1bmN0aW9uKHYsIHZhbHVlKSB7XG4gIGlmIChfLmhhcyh0aGlzLl9ub2RlcywgdikpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHRoaXMuX25vZGVzW3ZdID0gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdGhpcy5fbm9kZXNbdl0gPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IHZhbHVlIDogdGhpcy5fZGVmYXVsdE5vZGVMYWJlbEZuKHYpO1xuICBpZiAodGhpcy5faXNDb21wb3VuZCkge1xuICAgIHRoaXMuX3BhcmVudFt2XSA9IEdSQVBIX05PREU7XG4gICAgdGhpcy5fY2hpbGRyZW5bdl0gPSB7fTtcbiAgICB0aGlzLl9jaGlsZHJlbltHUkFQSF9OT0RFXVt2XSA9IHRydWU7XG4gIH1cbiAgdGhpcy5faW5bdl0gPSB7fTtcbiAgdGhpcy5fcHJlZHNbdl0gPSB7fTtcbiAgdGhpcy5fb3V0W3ZdID0ge307XG4gIHRoaXMuX3N1Y3Nbdl0gPSB7fTtcbiAgKyt0aGlzLl9ub2RlQ291bnQ7XG4gIHJldHVybiB0aGlzO1xufTtcblxuR3JhcGgucHJvdG90eXBlLm5vZGUgPSBmdW5jdGlvbih2KSB7XG4gIHJldHVybiB0aGlzLl9ub2Rlc1t2XTtcbn07XG5cbkdyYXBoLnByb3RvdHlwZS5oYXNOb2RlID0gZnVuY3Rpb24odikge1xuICByZXR1cm4gXy5oYXModGhpcy5fbm9kZXMsIHYpO1xufTtcblxuR3JhcGgucHJvdG90eXBlLnJlbW92ZU5vZGUgPSAgZnVuY3Rpb24odikge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIGlmIChfLmhhcyh0aGlzLl9ub2RlcywgdikpIHtcbiAgICB2YXIgcmVtb3ZlRWRnZSA9IGZ1bmN0aW9uKGUpIHsgc2VsZi5yZW1vdmVFZGdlKHNlbGYuX2VkZ2VPYmpzW2VdKTsgfTtcbiAgICBkZWxldGUgdGhpcy5fbm9kZXNbdl07XG4gICAgaWYgKHRoaXMuX2lzQ29tcG91bmQpIHtcbiAgICAgIHRoaXMuX3JlbW92ZUZyb21QYXJlbnRzQ2hpbGRMaXN0KHYpO1xuICAgICAgZGVsZXRlIHRoaXMuX3BhcmVudFt2XTtcbiAgICAgIF8uZWFjaCh0aGlzLmNoaWxkcmVuKHYpLCBmdW5jdGlvbihjaGlsZCkge1xuICAgICAgICBzZWxmLnNldFBhcmVudChjaGlsZCk7XG4gICAgICB9KTtcbiAgICAgIGRlbGV0ZSB0aGlzLl9jaGlsZHJlblt2XTtcbiAgICB9XG4gICAgXy5lYWNoKF8ua2V5cyh0aGlzLl9pblt2XSksIHJlbW92ZUVkZ2UpO1xuICAgIGRlbGV0ZSB0aGlzLl9pblt2XTtcbiAgICBkZWxldGUgdGhpcy5fcHJlZHNbdl07XG4gICAgXy5lYWNoKF8ua2V5cyh0aGlzLl9vdXRbdl0pLCByZW1vdmVFZGdlKTtcbiAgICBkZWxldGUgdGhpcy5fb3V0W3ZdO1xuICAgIGRlbGV0ZSB0aGlzLl9zdWNzW3ZdO1xuICAgIC0tdGhpcy5fbm9kZUNvdW50O1xuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuR3JhcGgucHJvdG90eXBlLnNldFBhcmVudCA9IGZ1bmN0aW9uKHYsIHBhcmVudCkge1xuICBpZiAoIXRoaXMuX2lzQ29tcG91bmQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3Qgc2V0IHBhcmVudCBpbiBhIG5vbi1jb21wb3VuZCBncmFwaFwiKTtcbiAgfVxuXG4gIGlmIChfLmlzVW5kZWZpbmVkKHBhcmVudCkpIHtcbiAgICBwYXJlbnQgPSBHUkFQSF9OT0RFO1xuICB9IGVsc2Uge1xuICAgIC8vIENvZXJjZSBwYXJlbnQgdG8gc3RyaW5nXG4gICAgcGFyZW50ICs9IFwiXCI7XG4gICAgZm9yICh2YXIgYW5jZXN0b3IgPSBwYXJlbnQ7XG4gICAgICAhXy5pc1VuZGVmaW5lZChhbmNlc3Rvcik7XG4gICAgICBhbmNlc3RvciA9IHRoaXMucGFyZW50KGFuY2VzdG9yKSkge1xuICAgICAgaWYgKGFuY2VzdG9yID09PSB2KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNldHRpbmcgXCIgKyBwYXJlbnQrIFwiIGFzIHBhcmVudCBvZiBcIiArIHYgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCIgd291bGQgY3JlYXRlIGEgY3ljbGVcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXROb2RlKHBhcmVudCk7XG4gIH1cblxuICB0aGlzLnNldE5vZGUodik7XG4gIHRoaXMuX3JlbW92ZUZyb21QYXJlbnRzQ2hpbGRMaXN0KHYpO1xuICB0aGlzLl9wYXJlbnRbdl0gPSBwYXJlbnQ7XG4gIHRoaXMuX2NoaWxkcmVuW3BhcmVudF1bdl0gPSB0cnVlO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkdyYXBoLnByb3RvdHlwZS5fcmVtb3ZlRnJvbVBhcmVudHNDaGlsZExpc3QgPSBmdW5jdGlvbih2KSB7XG4gIGRlbGV0ZSB0aGlzLl9jaGlsZHJlblt0aGlzLl9wYXJlbnRbdl1dW3ZdO1xufTtcblxuR3JhcGgucHJvdG90eXBlLnBhcmVudCA9IGZ1bmN0aW9uKHYpIHtcbiAgaWYgKHRoaXMuX2lzQ29tcG91bmQpIHtcbiAgICB2YXIgcGFyZW50ID0gdGhpcy5fcGFyZW50W3ZdO1xuICAgIGlmIChwYXJlbnQgIT09IEdSQVBIX05PREUpIHtcbiAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgfVxuICB9XG59O1xuXG5HcmFwaC5wcm90b3R5cGUuY2hpbGRyZW4gPSBmdW5jdGlvbih2KSB7XG4gIGlmIChfLmlzVW5kZWZpbmVkKHYpKSB7XG4gICAgdiA9IEdSQVBIX05PREU7XG4gIH1cblxuICBpZiAodGhpcy5faXNDb21wb3VuZCkge1xuICAgIHZhciBjaGlsZHJlbiA9IHRoaXMuX2NoaWxkcmVuW3ZdO1xuICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgcmV0dXJuIF8ua2V5cyhjaGlsZHJlbik7XG4gICAgfVxuICB9IGVsc2UgaWYgKHYgPT09IEdSQVBIX05PREUpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlcygpO1xuICB9IGVsc2UgaWYgKHRoaXMuaGFzTm9kZSh2KSkge1xuICAgIHJldHVybiBbXTtcbiAgfVxufTtcblxuR3JhcGgucHJvdG90eXBlLnByZWRlY2Vzc29ycyA9IGZ1bmN0aW9uKHYpIHtcbiAgdmFyIHByZWRzViA9IHRoaXMuX3ByZWRzW3ZdO1xuICBpZiAocHJlZHNWKSB7XG4gICAgcmV0dXJuIF8ua2V5cyhwcmVkc1YpO1xuICB9XG59O1xuXG5HcmFwaC5wcm90b3R5cGUuc3VjY2Vzc29ycyA9IGZ1bmN0aW9uKHYpIHtcbiAgdmFyIHN1Y3NWID0gdGhpcy5fc3Vjc1t2XTtcbiAgaWYgKHN1Y3NWKSB7XG4gICAgcmV0dXJuIF8ua2V5cyhzdWNzVik7XG4gIH1cbn07XG5cbkdyYXBoLnByb3RvdHlwZS5uZWlnaGJvcnMgPSBmdW5jdGlvbih2KSB7XG4gIHZhciBwcmVkcyA9IHRoaXMucHJlZGVjZXNzb3JzKHYpO1xuICBpZiAocHJlZHMpIHtcbiAgICByZXR1cm4gXy51bmlvbihwcmVkcywgdGhpcy5zdWNjZXNzb3JzKHYpKTtcbiAgfVxufTtcblxuR3JhcGgucHJvdG90eXBlLmlzTGVhZiA9IGZ1bmN0aW9uICh2KSB7XG4gIHZhciBuZWlnaGJvcnM7XG4gIGlmICh0aGlzLmlzRGlyZWN0ZWQoKSkge1xuICAgIG5laWdoYm9ycyA9IHRoaXMuc3VjY2Vzc29ycyh2KTtcbiAgfSBlbHNlIHtcbiAgICBuZWlnaGJvcnMgPSB0aGlzLm5laWdoYm9ycyh2KTtcbiAgfVxuICByZXR1cm4gbmVpZ2hib3JzLmxlbmd0aCA9PT0gMDtcbn07XG5cbkdyYXBoLnByb3RvdHlwZS5maWx0ZXJOb2RlcyA9IGZ1bmN0aW9uKGZpbHRlcikge1xuICB2YXIgY29weSA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKHtcbiAgICBkaXJlY3RlZDogdGhpcy5faXNEaXJlY3RlZCxcbiAgICBtdWx0aWdyYXBoOiB0aGlzLl9pc011bHRpZ3JhcGgsXG4gICAgY29tcG91bmQ6IHRoaXMuX2lzQ29tcG91bmRcbiAgfSk7XG5cbiAgY29weS5zZXRHcmFwaCh0aGlzLmdyYXBoKCkpO1xuXG4gIHZhciBzZWxmID0gdGhpcztcbiAgXy5lYWNoKHRoaXMuX25vZGVzLCBmdW5jdGlvbih2YWx1ZSwgdikge1xuICAgIGlmIChmaWx0ZXIodikpIHtcbiAgICAgIGNvcHkuc2V0Tm9kZSh2LCB2YWx1ZSk7XG4gICAgfVxuICB9KTtcblxuICBfLmVhY2godGhpcy5fZWRnZU9ianMsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoY29weS5oYXNOb2RlKGUudikgJiYgY29weS5oYXNOb2RlKGUudykpIHtcbiAgICAgIGNvcHkuc2V0RWRnZShlLCBzZWxmLmVkZ2UoZSkpO1xuICAgIH1cbiAgfSk7XG5cbiAgdmFyIHBhcmVudHMgPSB7fTtcbiAgZnVuY3Rpb24gZmluZFBhcmVudCh2KSB7XG4gICAgdmFyIHBhcmVudCA9IHNlbGYucGFyZW50KHYpO1xuICAgIGlmIChwYXJlbnQgPT09IHVuZGVmaW5lZCB8fCBjb3B5Lmhhc05vZGUocGFyZW50KSkge1xuICAgICAgcGFyZW50c1t2XSA9IHBhcmVudDtcbiAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgfSBlbHNlIGlmIChwYXJlbnQgaW4gcGFyZW50cykge1xuICAgICAgcmV0dXJuIHBhcmVudHNbcGFyZW50XTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZpbmRQYXJlbnQocGFyZW50KTtcbiAgICB9XG4gIH1cblxuICBpZiAodGhpcy5faXNDb21wb3VuZCkge1xuICAgIF8uZWFjaChjb3B5Lm5vZGVzKCksIGZ1bmN0aW9uKHYpIHtcbiAgICAgIGNvcHkuc2V0UGFyZW50KHYsIGZpbmRQYXJlbnQodikpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGNvcHk7XG59O1xuXG4vKiA9PT0gRWRnZSBmdW5jdGlvbnMgPT09PT09PT09PSAqL1xuXG5HcmFwaC5wcm90b3R5cGUuc2V0RGVmYXVsdEVkZ2VMYWJlbCA9IGZ1bmN0aW9uKG5ld0RlZmF1bHQpIHtcbiAgaWYgKCFfLmlzRnVuY3Rpb24obmV3RGVmYXVsdCkpIHtcbiAgICBuZXdEZWZhdWx0ID0gXy5jb25zdGFudChuZXdEZWZhdWx0KTtcbiAgfVxuICB0aGlzLl9kZWZhdWx0RWRnZUxhYmVsRm4gPSBuZXdEZWZhdWx0O1xuICByZXR1cm4gdGhpcztcbn07XG5cbkdyYXBoLnByb3RvdHlwZS5lZGdlQ291bnQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuX2VkZ2VDb3VudDtcbn07XG5cbkdyYXBoLnByb3RvdHlwZS5lZGdlcyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gXy52YWx1ZXModGhpcy5fZWRnZU9ianMpO1xufTtcblxuR3JhcGgucHJvdG90eXBlLnNldFBhdGggPSBmdW5jdGlvbih2cywgdmFsdWUpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgXy5yZWR1Y2UodnMsIGZ1bmN0aW9uKHYsIHcpIHtcbiAgICBpZiAoYXJncy5sZW5ndGggPiAxKSB7XG4gICAgICBzZWxmLnNldEVkZ2UodiwgdywgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxmLnNldEVkZ2Uodiwgdyk7XG4gICAgfVxuICAgIHJldHVybiB3O1xuICB9KTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKlxuICogc2V0RWRnZSh2LCB3LCBbdmFsdWUsIFtuYW1lXV0pXG4gKiBzZXRFZGdlKHsgdiwgdywgW25hbWVdIH0sIFt2YWx1ZV0pXG4gKi9cbkdyYXBoLnByb3RvdHlwZS5zZXRFZGdlID0gZnVuY3Rpb24oKSB7XG4gIHZhciB2LCB3LCBuYW1lLCB2YWx1ZTtcbiAgdmFyIHZhbHVlU3BlY2lmaWVkID0gZmFsc2U7XG4gIHZhciBhcmcwID0gYXJndW1lbnRzWzBdO1xuXG4gIGlmICh0eXBlb2YgYXJnMCA9PT0gXCJvYmplY3RcIiAmJiBhcmcwICE9PSBudWxsICYmIFwidlwiIGluIGFyZzApIHtcbiAgICB2ID0gYXJnMC52O1xuICAgIHcgPSBhcmcwLnc7XG4gICAgbmFtZSA9IGFyZzAubmFtZTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgdmFsdWUgPSBhcmd1bWVudHNbMV07XG4gICAgICB2YWx1ZVNwZWNpZmllZCA9IHRydWU7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHYgPSBhcmcwO1xuICAgIHcgPSBhcmd1bWVudHNbMV07XG4gICAgbmFtZSA9IGFyZ3VtZW50c1szXTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpIHtcbiAgICAgIHZhbHVlID0gYXJndW1lbnRzWzJdO1xuICAgICAgdmFsdWVTcGVjaWZpZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHYgPSBcIlwiICsgdjtcbiAgdyA9IFwiXCIgKyB3O1xuICBpZiAoIV8uaXNVbmRlZmluZWQobmFtZSkpIHtcbiAgICBuYW1lID0gXCJcIiArIG5hbWU7XG4gIH1cblxuICB2YXIgZSA9IGVkZ2VBcmdzVG9JZCh0aGlzLl9pc0RpcmVjdGVkLCB2LCB3LCBuYW1lKTtcbiAgaWYgKF8uaGFzKHRoaXMuX2VkZ2VMYWJlbHMsIGUpKSB7XG4gICAgaWYgKHZhbHVlU3BlY2lmaWVkKSB7XG4gICAgICB0aGlzLl9lZGdlTGFiZWxzW2VdID0gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaWYgKCFfLmlzVW5kZWZpbmVkKG5hbWUpICYmICF0aGlzLl9pc011bHRpZ3JhcGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3Qgc2V0IGEgbmFtZWQgZWRnZSB3aGVuIGlzTXVsdGlncmFwaCA9IGZhbHNlXCIpO1xuICB9XG5cbiAgLy8gSXQgZGlkbid0IGV4aXN0LCBzbyB3ZSBuZWVkIHRvIGNyZWF0ZSBpdC5cbiAgLy8gRmlyc3QgZW5zdXJlIHRoZSBub2RlcyBleGlzdC5cbiAgdGhpcy5zZXROb2RlKHYpO1xuICB0aGlzLnNldE5vZGUodyk7XG5cbiAgdGhpcy5fZWRnZUxhYmVsc1tlXSA9IHZhbHVlU3BlY2lmaWVkID8gdmFsdWUgOiB0aGlzLl9kZWZhdWx0RWRnZUxhYmVsRm4odiwgdywgbmFtZSk7XG5cbiAgdmFyIGVkZ2VPYmogPSBlZGdlQXJnc1RvT2JqKHRoaXMuX2lzRGlyZWN0ZWQsIHYsIHcsIG5hbWUpO1xuICAvLyBFbnN1cmUgd2UgYWRkIHVuZGlyZWN0ZWQgZWRnZXMgaW4gYSBjb25zaXN0ZW50IHdheS5cbiAgdiA9IGVkZ2VPYmoudjtcbiAgdyA9IGVkZ2VPYmoudztcblxuICBPYmplY3QuZnJlZXplKGVkZ2VPYmopO1xuICB0aGlzLl9lZGdlT2Jqc1tlXSA9IGVkZ2VPYmo7XG4gIGluY3JlbWVudE9ySW5pdEVudHJ5KHRoaXMuX3ByZWRzW3ddLCB2KTtcbiAgaW5jcmVtZW50T3JJbml0RW50cnkodGhpcy5fc3Vjc1t2XSwgdyk7XG4gIHRoaXMuX2luW3ddW2VdID0gZWRnZU9iajtcbiAgdGhpcy5fb3V0W3ZdW2VdID0gZWRnZU9iajtcbiAgdGhpcy5fZWRnZUNvdW50Kys7XG4gIHJldHVybiB0aGlzO1xufTtcblxuR3JhcGgucHJvdG90eXBlLmVkZ2UgPSBmdW5jdGlvbih2LCB3LCBuYW1lKSB7XG4gIHZhciBlID0gKGFyZ3VtZW50cy5sZW5ndGggPT09IDFcbiAgICA/IGVkZ2VPYmpUb0lkKHRoaXMuX2lzRGlyZWN0ZWQsIGFyZ3VtZW50c1swXSlcbiAgICA6IGVkZ2VBcmdzVG9JZCh0aGlzLl9pc0RpcmVjdGVkLCB2LCB3LCBuYW1lKSk7XG4gIHJldHVybiB0aGlzLl9lZGdlTGFiZWxzW2VdO1xufTtcblxuR3JhcGgucHJvdG90eXBlLmhhc0VkZ2UgPSBmdW5jdGlvbih2LCB3LCBuYW1lKSB7XG4gIHZhciBlID0gKGFyZ3VtZW50cy5sZW5ndGggPT09IDFcbiAgICA/IGVkZ2VPYmpUb0lkKHRoaXMuX2lzRGlyZWN0ZWQsIGFyZ3VtZW50c1swXSlcbiAgICA6IGVkZ2VBcmdzVG9JZCh0aGlzLl9pc0RpcmVjdGVkLCB2LCB3LCBuYW1lKSk7XG4gIHJldHVybiBfLmhhcyh0aGlzLl9lZGdlTGFiZWxzLCBlKTtcbn07XG5cbkdyYXBoLnByb3RvdHlwZS5yZW1vdmVFZGdlID0gZnVuY3Rpb24odiwgdywgbmFtZSkge1xuICB2YXIgZSA9IChhcmd1bWVudHMubGVuZ3RoID09PSAxXG4gICAgPyBlZGdlT2JqVG9JZCh0aGlzLl9pc0RpcmVjdGVkLCBhcmd1bWVudHNbMF0pXG4gICAgOiBlZGdlQXJnc1RvSWQodGhpcy5faXNEaXJlY3RlZCwgdiwgdywgbmFtZSkpO1xuICB2YXIgZWRnZSA9IHRoaXMuX2VkZ2VPYmpzW2VdO1xuICBpZiAoZWRnZSkge1xuICAgIHYgPSBlZGdlLnY7XG4gICAgdyA9IGVkZ2UudztcbiAgICBkZWxldGUgdGhpcy5fZWRnZUxhYmVsc1tlXTtcbiAgICBkZWxldGUgdGhpcy5fZWRnZU9ianNbZV07XG4gICAgZGVjcmVtZW50T3JSZW1vdmVFbnRyeSh0aGlzLl9wcmVkc1t3XSwgdik7XG4gICAgZGVjcmVtZW50T3JSZW1vdmVFbnRyeSh0aGlzLl9zdWNzW3ZdLCB3KTtcbiAgICBkZWxldGUgdGhpcy5faW5bd11bZV07XG4gICAgZGVsZXRlIHRoaXMuX291dFt2XVtlXTtcbiAgICB0aGlzLl9lZGdlQ291bnQtLTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cbkdyYXBoLnByb3RvdHlwZS5pbkVkZ2VzID0gZnVuY3Rpb24odiwgdSkge1xuICB2YXIgaW5WID0gdGhpcy5faW5bdl07XG4gIGlmIChpblYpIHtcbiAgICB2YXIgZWRnZXMgPSBfLnZhbHVlcyhpblYpO1xuICAgIGlmICghdSkge1xuICAgICAgcmV0dXJuIGVkZ2VzO1xuICAgIH1cbiAgICByZXR1cm4gXy5maWx0ZXIoZWRnZXMsIGZ1bmN0aW9uKGVkZ2UpIHsgcmV0dXJuIGVkZ2UudiA9PT0gdTsgfSk7XG4gIH1cbn07XG5cbkdyYXBoLnByb3RvdHlwZS5vdXRFZGdlcyA9IGZ1bmN0aW9uKHYsIHcpIHtcbiAgdmFyIG91dFYgPSB0aGlzLl9vdXRbdl07XG4gIGlmIChvdXRWKSB7XG4gICAgdmFyIGVkZ2VzID0gXy52YWx1ZXMob3V0Vik7XG4gICAgaWYgKCF3KSB7XG4gICAgICByZXR1cm4gZWRnZXM7XG4gICAgfVxuICAgIHJldHVybiBfLmZpbHRlcihlZGdlcywgZnVuY3Rpb24oZWRnZSkgeyByZXR1cm4gZWRnZS53ID09PSB3OyB9KTtcbiAgfVxufTtcblxuR3JhcGgucHJvdG90eXBlLm5vZGVFZGdlcyA9IGZ1bmN0aW9uKHYsIHcpIHtcbiAgdmFyIGluRWRnZXMgPSB0aGlzLmluRWRnZXModiwgdyk7XG4gIGlmIChpbkVkZ2VzKSB7XG4gICAgcmV0dXJuIGluRWRnZXMuY29uY2F0KHRoaXMub3V0RWRnZXModiwgdykpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBpbmNyZW1lbnRPckluaXRFbnRyeShtYXAsIGspIHtcbiAgaWYgKG1hcFtrXSkge1xuICAgIG1hcFtrXSsrO1xuICB9IGVsc2Uge1xuICAgIG1hcFtrXSA9IDE7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVjcmVtZW50T3JSZW1vdmVFbnRyeShtYXAsIGspIHtcbiAgaWYgKCEtLW1hcFtrXSkgeyBkZWxldGUgbWFwW2tdOyB9XG59XG5cbmZ1bmN0aW9uIGVkZ2VBcmdzVG9JZChpc0RpcmVjdGVkLCB2Xywgd18sIG5hbWUpIHtcbiAgdmFyIHYgPSBcIlwiICsgdl87XG4gIHZhciB3ID0gXCJcIiArIHdfO1xuICBpZiAoIWlzRGlyZWN0ZWQgJiYgdiA+IHcpIHtcbiAgICB2YXIgdG1wID0gdjtcbiAgICB2ID0gdztcbiAgICB3ID0gdG1wO1xuICB9XG4gIHJldHVybiB2ICsgRURHRV9LRVlfREVMSU0gKyB3ICsgRURHRV9LRVlfREVMSU0gK1xuICAgICAgICAgICAgIChfLmlzVW5kZWZpbmVkKG5hbWUpID8gREVGQVVMVF9FREdFX05BTUUgOiBuYW1lKTtcbn1cblxuZnVuY3Rpb24gZWRnZUFyZ3NUb09iaihpc0RpcmVjdGVkLCB2Xywgd18sIG5hbWUpIHtcbiAgdmFyIHYgPSBcIlwiICsgdl87XG4gIHZhciB3ID0gXCJcIiArIHdfO1xuICBpZiAoIWlzRGlyZWN0ZWQgJiYgdiA+IHcpIHtcbiAgICB2YXIgdG1wID0gdjtcbiAgICB2ID0gdztcbiAgICB3ID0gdG1wO1xuICB9XG4gIHZhciBlZGdlT2JqID0gIHsgdjogdiwgdzogdyB9O1xuICBpZiAobmFtZSkge1xuICAgIGVkZ2VPYmoubmFtZSA9IG5hbWU7XG4gIH1cbiAgcmV0dXJuIGVkZ2VPYmo7XG59XG5cbmZ1bmN0aW9uIGVkZ2VPYmpUb0lkKGlzRGlyZWN0ZWQsIGVkZ2VPYmopIHtcbiAgcmV0dXJuIGVkZ2VBcmdzVG9JZChpc0RpcmVjdGVkLCBlZGdlT2JqLnYsIGVkZ2VPYmoudywgZWRnZU9iai5uYW1lKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gJzIuMS44JztcbiIsIi8vIEluY2x1ZGVzIG9ubHkgdGhlIFwiY29yZVwiIG9mIGdyYXBobGliXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgR3JhcGg6IHJlcXVpcmUoXCIuL2dyYXBoXCIpLFxuICB2ZXJzaW9uOiByZXF1aXJlKFwiLi92ZXJzaW9uXCIpXG59O1xuIiwidmFyIF8gPSByZXF1aXJlKFwiLi9sb2Rhc2hcIik7XG52YXIgR3JhcGggPSByZXF1aXJlKFwiLi9ncmFwaFwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHdyaXRlOiB3cml0ZSxcbiAgcmVhZDogcmVhZFxufTtcblxuZnVuY3Rpb24gd3JpdGUoZykge1xuICB2YXIganNvbiA9IHtcbiAgICBvcHRpb25zOiB7XG4gICAgICBkaXJlY3RlZDogZy5pc0RpcmVjdGVkKCksXG4gICAgICBtdWx0aWdyYXBoOiBnLmlzTXVsdGlncmFwaCgpLFxuICAgICAgY29tcG91bmQ6IGcuaXNDb21wb3VuZCgpXG4gICAgfSxcbiAgICBub2Rlczogd3JpdGVOb2RlcyhnKSxcbiAgICBlZGdlczogd3JpdGVFZGdlcyhnKVxuICB9O1xuICBpZiAoIV8uaXNVbmRlZmluZWQoZy5ncmFwaCgpKSkge1xuICAgIGpzb24udmFsdWUgPSBfLmNsb25lKGcuZ3JhcGgoKSk7XG4gIH1cbiAgcmV0dXJuIGpzb247XG59XG5cbmZ1bmN0aW9uIHdyaXRlTm9kZXMoZykge1xuICByZXR1cm4gXy5tYXAoZy5ub2RlcygpLCBmdW5jdGlvbih2KSB7XG4gICAgdmFyIG5vZGVWYWx1ZSA9IGcubm9kZSh2KTtcbiAgICB2YXIgcGFyZW50ID0gZy5wYXJlbnQodik7XG4gICAgdmFyIG5vZGUgPSB7IHY6IHYgfTtcbiAgICBpZiAoIV8uaXNVbmRlZmluZWQobm9kZVZhbHVlKSkge1xuICAgICAgbm9kZS52YWx1ZSA9IG5vZGVWYWx1ZTtcbiAgICB9XG4gICAgaWYgKCFfLmlzVW5kZWZpbmVkKHBhcmVudCkpIHtcbiAgICAgIG5vZGUucGFyZW50ID0gcGFyZW50O1xuICAgIH1cbiAgICByZXR1cm4gbm9kZTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHdyaXRlRWRnZXMoZykge1xuICByZXR1cm4gXy5tYXAoZy5lZGdlcygpLCBmdW5jdGlvbihlKSB7XG4gICAgdmFyIGVkZ2VWYWx1ZSA9IGcuZWRnZShlKTtcbiAgICB2YXIgZWRnZSA9IHsgdjogZS52LCB3OiBlLncgfTtcbiAgICBpZiAoIV8uaXNVbmRlZmluZWQoZS5uYW1lKSkge1xuICAgICAgZWRnZS5uYW1lID0gZS5uYW1lO1xuICAgIH1cbiAgICBpZiAoIV8uaXNVbmRlZmluZWQoZWRnZVZhbHVlKSkge1xuICAgICAgZWRnZS52YWx1ZSA9IGVkZ2VWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGVkZ2U7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZWFkKGpzb24pIHtcbiAgdmFyIGcgPSBuZXcgR3JhcGgoanNvbi5vcHRpb25zKS5zZXRHcmFwaChqc29uLnZhbHVlKTtcbiAgXy5lYWNoKGpzb24ubm9kZXMsIGZ1bmN0aW9uKGVudHJ5KSB7XG4gICAgZy5zZXROb2RlKGVudHJ5LnYsIGVudHJ5LnZhbHVlKTtcbiAgICBpZiAoZW50cnkucGFyZW50KSB7XG4gICAgICBnLnNldFBhcmVudChlbnRyeS52LCBlbnRyeS5wYXJlbnQpO1xuICAgIH1cbiAgfSk7XG4gIF8uZWFjaChqc29uLmVkZ2VzLCBmdW5jdGlvbihlbnRyeSkge1xuICAgIGcuc2V0RWRnZSh7IHY6IGVudHJ5LnYsIHc6IGVudHJ5LncsIG5hbWU6IGVudHJ5Lm5hbWUgfSwgZW50cnkudmFsdWUpO1xuICB9KTtcbiAgcmV0dXJuIGc7XG59XG4iLCJ2YXIgXyA9IHJlcXVpcmUoXCIuLi9sb2Rhc2hcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gY29tcG9uZW50cztcblxuZnVuY3Rpb24gY29tcG9uZW50cyhnKSB7XG4gIHZhciB2aXNpdGVkID0ge307XG4gIHZhciBjbXB0cyA9IFtdO1xuICB2YXIgY21wdDtcblxuICBmdW5jdGlvbiBkZnModikge1xuICAgIGlmIChfLmhhcyh2aXNpdGVkLCB2KSkgcmV0dXJuO1xuICAgIHZpc2l0ZWRbdl0gPSB0cnVlO1xuICAgIGNtcHQucHVzaCh2KTtcbiAgICBfLmVhY2goZy5zdWNjZXNzb3JzKHYpLCBkZnMpO1xuICAgIF8uZWFjaChnLnByZWRlY2Vzc29ycyh2KSwgZGZzKTtcbiAgfVxuXG4gIF8uZWFjaChnLm5vZGVzKCksIGZ1bmN0aW9uKHYpIHtcbiAgICBjbXB0ID0gW107XG4gICAgZGZzKHYpO1xuICAgIGlmIChjbXB0Lmxlbmd0aCkge1xuICAgICAgY21wdHMucHVzaChjbXB0KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjbXB0cztcbn1cbiIsInZhciBfID0gcmVxdWlyZShcIi4uL2xvZGFzaFwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcmlvcml0eVF1ZXVlO1xuXG4vKipcbiAqIEEgbWluLXByaW9yaXR5IHF1ZXVlIGRhdGEgc3RydWN0dXJlLiBUaGlzIGFsZ29yaXRobSBpcyBkZXJpdmVkIGZyb20gQ29ybWVuLFxuICogZXQgYWwuLCBcIkludHJvZHVjdGlvbiB0byBBbGdvcml0aG1zXCIuIFRoZSBiYXNpYyBpZGVhIG9mIGEgbWluLXByaW9yaXR5XG4gKiBxdWV1ZSBpcyB0aGF0IHlvdSBjYW4gZWZmaWNpZW50bHkgKGluIE8oMSkgdGltZSkgZ2V0IHRoZSBzbWFsbGVzdCBrZXkgaW5cbiAqIHRoZSBxdWV1ZS4gQWRkaW5nIGFuZCByZW1vdmluZyBlbGVtZW50cyB0YWtlcyBPKGxvZyBuKSB0aW1lLiBBIGtleSBjYW5cbiAqIGhhdmUgaXRzIHByaW9yaXR5IGRlY3JlYXNlZCBpbiBPKGxvZyBuKSB0aW1lLlxuICovXG5mdW5jdGlvbiBQcmlvcml0eVF1ZXVlKCkge1xuICB0aGlzLl9hcnIgPSBbXTtcbiAgdGhpcy5fa2V5SW5kaWNlcyA9IHt9O1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiB0aGUgcXVldWUuIFRha2VzIGBPKDEpYCB0aW1lLlxuICovXG5Qcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5zaXplID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLl9hcnIubGVuZ3RoO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBrZXlzIHRoYXQgYXJlIGluIHRoZSBxdWV1ZS4gVGFrZXMgYE8obilgIHRpbWUuXG4gKi9cblByaW9yaXR5UXVldWUucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuX2Fyci5tYXAoZnVuY3Rpb24oeCkgeyByZXR1cm4geC5rZXk7IH0pO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiAqKmtleSoqIGlzIGluIHRoZSBxdWV1ZSBhbmQgYGZhbHNlYCBpZiBub3QuXG4gKi9cblByaW9yaXR5UXVldWUucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uKGtleSkge1xuICByZXR1cm4gXy5oYXModGhpcy5fa2V5SW5kaWNlcywga2V5KTtcbn07XG5cbi8qKlxuICogUmV0dXJucyB0aGUgcHJpb3JpdHkgZm9yICoqa2V5KiouIElmICoqa2V5KiogaXMgbm90IHByZXNlbnQgaW4gdGhlIHF1ZXVlXG4gKiB0aGVuIHRoaXMgZnVuY3Rpb24gcmV0dXJucyBgdW5kZWZpbmVkYC4gVGFrZXMgYE8oMSlgIHRpbWUuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGtleVxuICovXG5Qcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5wcmlvcml0eSA9IGZ1bmN0aW9uKGtleSkge1xuICB2YXIgaW5kZXggPSB0aGlzLl9rZXlJbmRpY2VzW2tleV07XG4gIGlmIChpbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FycltpbmRleF0ucHJpb3JpdHk7XG4gIH1cbn07XG5cbi8qKlxuICogUmV0dXJucyB0aGUga2V5IGZvciB0aGUgbWluaW11bSBlbGVtZW50IGluIHRoaXMgcXVldWUuIElmIHRoZSBxdWV1ZSBpc1xuICogZW1wdHkgdGhpcyBmdW5jdGlvbiB0aHJvd3MgYW4gRXJyb3IuIFRha2VzIGBPKDEpYCB0aW1lLlxuICovXG5Qcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5taW4gPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMuc2l6ZSgpID09PSAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUXVldWUgdW5kZXJmbG93XCIpO1xuICB9XG4gIHJldHVybiB0aGlzLl9hcnJbMF0ua2V5O1xufTtcblxuLyoqXG4gKiBJbnNlcnRzIGEgbmV3IGtleSBpbnRvIHRoZSBwcmlvcml0eSBxdWV1ZS4gSWYgdGhlIGtleSBhbHJlYWR5IGV4aXN0cyBpblxuICogdGhlIHF1ZXVlIHRoaXMgZnVuY3Rpb24gcmV0dXJucyBgZmFsc2VgOyBvdGhlcndpc2UgaXQgd2lsbCByZXR1cm4gYHRydWVgLlxuICogVGFrZXMgYE8obilgIHRpbWUuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGtleSB0aGUga2V5IHRvIGFkZFxuICogQHBhcmFtIHtOdW1iZXJ9IHByaW9yaXR5IHRoZSBpbml0aWFsIHByaW9yaXR5IGZvciB0aGUga2V5XG4gKi9cblByaW9yaXR5UXVldWUucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKGtleSwgcHJpb3JpdHkpIHtcbiAgdmFyIGtleUluZGljZXMgPSB0aGlzLl9rZXlJbmRpY2VzO1xuICBrZXkgPSBTdHJpbmcoa2V5KTtcbiAgaWYgKCFfLmhhcyhrZXlJbmRpY2VzLCBrZXkpKSB7XG4gICAgdmFyIGFyciA9IHRoaXMuX2FycjtcbiAgICB2YXIgaW5kZXggPSBhcnIubGVuZ3RoO1xuICAgIGtleUluZGljZXNba2V5XSA9IGluZGV4O1xuICAgIGFyci5wdXNoKHtrZXk6IGtleSwgcHJpb3JpdHk6IHByaW9yaXR5fSk7XG4gICAgdGhpcy5fZGVjcmVhc2UoaW5kZXgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogUmVtb3ZlcyBhbmQgcmV0dXJucyB0aGUgc21hbGxlc3Qga2V5IGluIHRoZSBxdWV1ZS4gVGFrZXMgYE8obG9nIG4pYCB0aW1lLlxuICovXG5Qcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5yZW1vdmVNaW4gPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fc3dhcCgwLCB0aGlzLl9hcnIubGVuZ3RoIC0gMSk7XG4gIHZhciBtaW4gPSB0aGlzLl9hcnIucG9wKCk7XG4gIGRlbGV0ZSB0aGlzLl9rZXlJbmRpY2VzW21pbi5rZXldO1xuICB0aGlzLl9oZWFwaWZ5KDApO1xuICByZXR1cm4gbWluLmtleTtcbn07XG5cbi8qKlxuICogRGVjcmVhc2VzIHRoZSBwcmlvcml0eSBmb3IgKiprZXkqKiB0byAqKnByaW9yaXR5KiouIElmIHRoZSBuZXcgcHJpb3JpdHkgaXNcbiAqIGdyZWF0ZXIgdGhhbiB0aGUgcHJldmlvdXMgcHJpb3JpdHksIHRoaXMgZnVuY3Rpb24gd2lsbCB0aHJvdyBhbiBFcnJvci5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0ga2V5IHRoZSBrZXkgZm9yIHdoaWNoIHRvIHJhaXNlIHByaW9yaXR5XG4gKiBAcGFyYW0ge051bWJlcn0gcHJpb3JpdHkgdGhlIG5ldyBwcmlvcml0eSBmb3IgdGhlIGtleVxuICovXG5Qcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5kZWNyZWFzZSA9IGZ1bmN0aW9uKGtleSwgcHJpb3JpdHkpIHtcbiAgdmFyIGluZGV4ID0gdGhpcy5fa2V5SW5kaWNlc1trZXldO1xuICBpZiAocHJpb3JpdHkgPiB0aGlzLl9hcnJbaW5kZXhdLnByaW9yaXR5KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTmV3IHByaW9yaXR5IGlzIGdyZWF0ZXIgdGhhbiBjdXJyZW50IHByaW9yaXR5LiBcIiArXG4gICAgICAgIFwiS2V5OiBcIiArIGtleSArIFwiIE9sZDogXCIgKyB0aGlzLl9hcnJbaW5kZXhdLnByaW9yaXR5ICsgXCIgTmV3OiBcIiArIHByaW9yaXR5KTtcbiAgfVxuICB0aGlzLl9hcnJbaW5kZXhdLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIHRoaXMuX2RlY3JlYXNlKGluZGV4KTtcbn07XG5cblByaW9yaXR5UXVldWUucHJvdG90eXBlLl9oZWFwaWZ5ID0gZnVuY3Rpb24oaSkge1xuICB2YXIgYXJyID0gdGhpcy5fYXJyO1xuICB2YXIgbCA9IDIgKiBpO1xuICB2YXIgciA9IGwgKyAxO1xuICB2YXIgbGFyZ2VzdCA9IGk7XG4gIGlmIChsIDwgYXJyLmxlbmd0aCkge1xuICAgIGxhcmdlc3QgPSBhcnJbbF0ucHJpb3JpdHkgPCBhcnJbbGFyZ2VzdF0ucHJpb3JpdHkgPyBsIDogbGFyZ2VzdDtcbiAgICBpZiAociA8IGFyci5sZW5ndGgpIHtcbiAgICAgIGxhcmdlc3QgPSBhcnJbcl0ucHJpb3JpdHkgPCBhcnJbbGFyZ2VzdF0ucHJpb3JpdHkgPyByIDogbGFyZ2VzdDtcbiAgICB9XG4gICAgaWYgKGxhcmdlc3QgIT09IGkpIHtcbiAgICAgIHRoaXMuX3N3YXAoaSwgbGFyZ2VzdCk7XG4gICAgICB0aGlzLl9oZWFwaWZ5KGxhcmdlc3QpO1xuICAgIH1cbiAgfVxufTtcblxuUHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUuX2RlY3JlYXNlID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgdmFyIGFyciA9IHRoaXMuX2FycjtcbiAgdmFyIHByaW9yaXR5ID0gYXJyW2luZGV4XS5wcmlvcml0eTtcbiAgdmFyIHBhcmVudDtcbiAgd2hpbGUgKGluZGV4ICE9PSAwKSB7XG4gICAgcGFyZW50ID0gaW5kZXggPj4gMTtcbiAgICBpZiAoYXJyW3BhcmVudF0ucHJpb3JpdHkgPCBwcmlvcml0eSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMuX3N3YXAoaW5kZXgsIHBhcmVudCk7XG4gICAgaW5kZXggPSBwYXJlbnQ7XG4gIH1cbn07XG5cblByaW9yaXR5UXVldWUucHJvdG90eXBlLl9zd2FwID0gZnVuY3Rpb24oaSwgaikge1xuICB2YXIgYXJyID0gdGhpcy5fYXJyO1xuICB2YXIga2V5SW5kaWNlcyA9IHRoaXMuX2tleUluZGljZXM7XG4gIHZhciBvcmlnQXJySSA9IGFycltpXTtcbiAgdmFyIG9yaWdBcnJKID0gYXJyW2pdO1xuICBhcnJbaV0gPSBvcmlnQXJySjtcbiAgYXJyW2pdID0gb3JpZ0Fyckk7XG4gIGtleUluZGljZXNbb3JpZ0Fyckoua2V5XSA9IGk7XG4gIGtleUluZGljZXNbb3JpZ0Fyckkua2V5XSA9IGo7XG59O1xuIiwidmFyIF8gPSByZXF1aXJlKFwiLi4vbG9kYXNoXCIpO1xudmFyIFByaW9yaXR5UXVldWUgPSByZXF1aXJlKFwiLi4vZGF0YS9wcmlvcml0eS1xdWV1ZVwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBkaWprc3RyYTtcblxudmFyIERFRkFVTFRfV0VJR0hUX0ZVTkMgPSBfLmNvbnN0YW50KDEpO1xuXG5mdW5jdGlvbiBkaWprc3RyYShnLCBzb3VyY2UsIHdlaWdodEZuLCBlZGdlRm4pIHtcbiAgcmV0dXJuIHJ1bkRpamtzdHJhKGcsIFN0cmluZyhzb3VyY2UpLFxuICAgIHdlaWdodEZuIHx8IERFRkFVTFRfV0VJR0hUX0ZVTkMsXG4gICAgZWRnZUZuIHx8IGZ1bmN0aW9uKHYpIHsgcmV0dXJuIGcub3V0RWRnZXModik7IH0pO1xufVxuXG5mdW5jdGlvbiBydW5EaWprc3RyYShnLCBzb3VyY2UsIHdlaWdodEZuLCBlZGdlRm4pIHtcbiAgdmFyIHJlc3VsdHMgPSB7fTtcbiAgdmFyIHBxID0gbmV3IFByaW9yaXR5UXVldWUoKTtcbiAgdmFyIHYsIHZFbnRyeTtcblxuICB2YXIgdXBkYXRlTmVpZ2hib3JzID0gZnVuY3Rpb24oZWRnZSkge1xuICAgIHZhciB3ID0gZWRnZS52ICE9PSB2ID8gZWRnZS52IDogZWRnZS53O1xuICAgIHZhciB3RW50cnkgPSByZXN1bHRzW3ddO1xuICAgIHZhciB3ZWlnaHQgPSB3ZWlnaHRGbihlZGdlKTtcbiAgICB2YXIgZGlzdGFuY2UgPSB2RW50cnkuZGlzdGFuY2UgKyB3ZWlnaHQ7XG5cbiAgICBpZiAod2VpZ2h0IDwgMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZGlqa3N0cmEgZG9lcyBub3QgYWxsb3cgbmVnYXRpdmUgZWRnZSB3ZWlnaHRzLiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgXCJCYWQgZWRnZTogXCIgKyBlZGdlICsgXCIgV2VpZ2h0OiBcIiArIHdlaWdodCk7XG4gICAgfVxuXG4gICAgaWYgKGRpc3RhbmNlIDwgd0VudHJ5LmRpc3RhbmNlKSB7XG4gICAgICB3RW50cnkuZGlzdGFuY2UgPSBkaXN0YW5jZTtcbiAgICAgIHdFbnRyeS5wcmVkZWNlc3NvciA9IHY7XG4gICAgICBwcS5kZWNyZWFzZSh3LCBkaXN0YW5jZSk7XG4gICAgfVxuICB9O1xuXG4gIGcubm9kZXMoKS5mb3JFYWNoKGZ1bmN0aW9uKHYpIHtcbiAgICB2YXIgZGlzdGFuY2UgPSB2ID09PSBzb3VyY2UgPyAwIDogTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgIHJlc3VsdHNbdl0gPSB7IGRpc3RhbmNlOiBkaXN0YW5jZSB9O1xuICAgIHBxLmFkZCh2LCBkaXN0YW5jZSk7XG4gIH0pO1xuXG4gIHdoaWxlIChwcS5zaXplKCkgPiAwKSB7XG4gICAgdiA9IHBxLnJlbW92ZU1pbigpO1xuICAgIHZFbnRyeSA9IHJlc3VsdHNbdl07XG4gICAgaWYgKHZFbnRyeS5kaXN0YW5jZSA9PT0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBlZGdlRm4odikuZm9yRWFjaCh1cGRhdGVOZWlnaGJvcnMpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdHM7XG59XG4iLCJ2YXIgZGlqa3N0cmEgPSByZXF1aXJlKFwiLi9kaWprc3RyYVwiKTtcbnZhciBfID0gcmVxdWlyZShcIi4uL2xvZGFzaFwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBkaWprc3RyYUFsbDtcblxuZnVuY3Rpb24gZGlqa3N0cmFBbGwoZywgd2VpZ2h0RnVuYywgZWRnZUZ1bmMpIHtcbiAgcmV0dXJuIF8udHJhbnNmb3JtKGcubm9kZXMoKSwgZnVuY3Rpb24oYWNjLCB2KSB7XG4gICAgYWNjW3ZdID0gZGlqa3N0cmEoZywgdiwgd2VpZ2h0RnVuYywgZWRnZUZ1bmMpO1xuICB9LCB7fSk7XG59XG4iLCJ2YXIgXyA9IHJlcXVpcmUoXCIuLi9sb2Rhc2hcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gdGFyamFuO1xuXG5mdW5jdGlvbiB0YXJqYW4oZykge1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgc3RhY2sgPSBbXTtcbiAgdmFyIHZpc2l0ZWQgPSB7fTsgLy8gbm9kZSBpZCAtPiB7IG9uU3RhY2ssIGxvd2xpbmssIGluZGV4IH1cbiAgdmFyIHJlc3VsdHMgPSBbXTtcblxuICBmdW5jdGlvbiBkZnModikge1xuICAgIHZhciBlbnRyeSA9IHZpc2l0ZWRbdl0gPSB7XG4gICAgICBvblN0YWNrOiB0cnVlLFxuICAgICAgbG93bGluazogaW5kZXgsXG4gICAgICBpbmRleDogaW5kZXgrK1xuICAgIH07XG4gICAgc3RhY2sucHVzaCh2KTtcblxuICAgIGcuc3VjY2Vzc29ycyh2KS5mb3JFYWNoKGZ1bmN0aW9uKHcpIHtcbiAgICAgIGlmICghXy5oYXModmlzaXRlZCwgdykpIHtcbiAgICAgICAgZGZzKHcpO1xuICAgICAgICBlbnRyeS5sb3dsaW5rID0gTWF0aC5taW4oZW50cnkubG93bGluaywgdmlzaXRlZFt3XS5sb3dsaW5rKTtcbiAgICAgIH0gZWxzZSBpZiAodmlzaXRlZFt3XS5vblN0YWNrKSB7XG4gICAgICAgIGVudHJ5Lmxvd2xpbmsgPSBNYXRoLm1pbihlbnRyeS5sb3dsaW5rLCB2aXNpdGVkW3ddLmluZGV4KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChlbnRyeS5sb3dsaW5rID09PSBlbnRyeS5pbmRleCkge1xuICAgICAgdmFyIGNtcHQgPSBbXTtcbiAgICAgIHZhciB3O1xuICAgICAgZG8ge1xuICAgICAgICB3ID0gc3RhY2sucG9wKCk7XG4gICAgICAgIHZpc2l0ZWRbd10ub25TdGFjayA9IGZhbHNlO1xuICAgICAgICBjbXB0LnB1c2godyk7XG4gICAgICB9IHdoaWxlICh2ICE9PSB3KTtcbiAgICAgIHJlc3VsdHMucHVzaChjbXB0KTtcbiAgICB9XG4gIH1cblxuICBnLm5vZGVzKCkuZm9yRWFjaChmdW5jdGlvbih2KSB7XG4gICAgaWYgKCFfLmhhcyh2aXNpdGVkLCB2KSkge1xuICAgICAgZGZzKHYpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdHM7XG59XG4iLCJ2YXIgXyA9IHJlcXVpcmUoXCIuLi9sb2Rhc2hcIik7XG52YXIgdGFyamFuID0gcmVxdWlyZShcIi4vdGFyamFuXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZpbmRDeWNsZXM7XG5cbmZ1bmN0aW9uIGZpbmRDeWNsZXMoZykge1xuICByZXR1cm4gXy5maWx0ZXIodGFyamFuKGcpLCBmdW5jdGlvbihjbXB0KSB7XG4gICAgcmV0dXJuIGNtcHQubGVuZ3RoID4gMSB8fCAoY21wdC5sZW5ndGggPT09IDEgJiYgZy5oYXNFZGdlKGNtcHRbMF0sIGNtcHRbMF0pKTtcbiAgfSk7XG59XG4iLCJ2YXIgXyA9IHJlcXVpcmUoXCIuLi9sb2Rhc2hcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZmxveWRXYXJzaGFsbDtcblxudmFyIERFRkFVTFRfV0VJR0hUX0ZVTkMgPSBfLmNvbnN0YW50KDEpO1xuXG5mdW5jdGlvbiBmbG95ZFdhcnNoYWxsKGcsIHdlaWdodEZuLCBlZGdlRm4pIHtcbiAgcmV0dXJuIHJ1bkZsb3lkV2Fyc2hhbGwoZyxcbiAgICB3ZWlnaHRGbiB8fCBERUZBVUxUX1dFSUdIVF9GVU5DLFxuICAgIGVkZ2VGbiB8fCBmdW5jdGlvbih2KSB7IHJldHVybiBnLm91dEVkZ2VzKHYpOyB9KTtcbn1cblxuZnVuY3Rpb24gcnVuRmxveWRXYXJzaGFsbChnLCB3ZWlnaHRGbiwgZWRnZUZuKSB7XG4gIHZhciByZXN1bHRzID0ge307XG4gIHZhciBub2RlcyA9IGcubm9kZXMoKTtcblxuICBub2Rlcy5mb3JFYWNoKGZ1bmN0aW9uKHYpIHtcbiAgICByZXN1bHRzW3ZdID0ge307XG4gICAgcmVzdWx0c1t2XVt2XSA9IHsgZGlzdGFuY2U6IDAgfTtcbiAgICBub2Rlcy5mb3JFYWNoKGZ1bmN0aW9uKHcpIHtcbiAgICAgIGlmICh2ICE9PSB3KSB7XG4gICAgICAgIHJlc3VsdHNbdl1bd10gPSB7IGRpc3RhbmNlOiBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkgfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBlZGdlRm4odikuZm9yRWFjaChmdW5jdGlvbihlZGdlKSB7XG4gICAgICB2YXIgdyA9IGVkZ2UudiA9PT0gdiA/IGVkZ2UudyA6IGVkZ2UudjtcbiAgICAgIHZhciBkID0gd2VpZ2h0Rm4oZWRnZSk7XG4gICAgICByZXN1bHRzW3ZdW3ddID0geyBkaXN0YW5jZTogZCwgcHJlZGVjZXNzb3I6IHYgfTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgbm9kZXMuZm9yRWFjaChmdW5jdGlvbihrKSB7XG4gICAgdmFyIHJvd0sgPSByZXN1bHRzW2tdO1xuICAgIG5vZGVzLmZvckVhY2goZnVuY3Rpb24oaSkge1xuICAgICAgdmFyIHJvd0kgPSByZXN1bHRzW2ldO1xuICAgICAgbm9kZXMuZm9yRWFjaChmdW5jdGlvbihqKSB7XG4gICAgICAgIHZhciBpayA9IHJvd0lba107XG4gICAgICAgIHZhciBraiA9IHJvd0tbal07XG4gICAgICAgIHZhciBpaiA9IHJvd0lbal07XG4gICAgICAgIHZhciBhbHREaXN0YW5jZSA9IGlrLmRpc3RhbmNlICsga2ouZGlzdGFuY2U7XG4gICAgICAgIGlmIChhbHREaXN0YW5jZSA8IGlqLmRpc3RhbmNlKSB7XG4gICAgICAgICAgaWouZGlzdGFuY2UgPSBhbHREaXN0YW5jZTtcbiAgICAgICAgICBpai5wcmVkZWNlc3NvciA9IGtqLnByZWRlY2Vzc29yO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdHM7XG59XG4iLCJ2YXIgXyA9IHJlcXVpcmUoXCIuLi9sb2Rhc2hcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gdG9wc29ydDtcbnRvcHNvcnQuQ3ljbGVFeGNlcHRpb24gPSBDeWNsZUV4Y2VwdGlvbjtcblxuZnVuY3Rpb24gdG9wc29ydChnKSB7XG4gIHZhciB2aXNpdGVkID0ge307XG4gIHZhciBzdGFjayA9IHt9O1xuICB2YXIgcmVzdWx0cyA9IFtdO1xuXG4gIGZ1bmN0aW9uIHZpc2l0KG5vZGUpIHtcbiAgICBpZiAoXy5oYXMoc3RhY2ssIG5vZGUpKSB7XG4gICAgICB0aHJvdyBuZXcgQ3ljbGVFeGNlcHRpb24oKTtcbiAgICB9XG5cbiAgICBpZiAoIV8uaGFzKHZpc2l0ZWQsIG5vZGUpKSB7XG4gICAgICBzdGFja1tub2RlXSA9IHRydWU7XG4gICAgICB2aXNpdGVkW25vZGVdID0gdHJ1ZTtcbiAgICAgIF8uZWFjaChnLnByZWRlY2Vzc29ycyhub2RlKSwgdmlzaXQpO1xuICAgICAgZGVsZXRlIHN0YWNrW25vZGVdO1xuICAgICAgcmVzdWx0cy5wdXNoKG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIF8uZWFjaChnLnNpbmtzKCksIHZpc2l0KTtcblxuICBpZiAoXy5zaXplKHZpc2l0ZWQpICE9PSBnLm5vZGVDb3VudCgpKSB7XG4gICAgdGhyb3cgbmV3IEN5Y2xlRXhjZXB0aW9uKCk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0cztcbn1cblxuZnVuY3Rpb24gQ3ljbGVFeGNlcHRpb24oKSB7fVxuQ3ljbGVFeGNlcHRpb24ucHJvdG90eXBlID0gbmV3IEVycm9yKCk7IC8vIG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgRXJyb3IgdG8gcGFzcyB0ZXN0aW5nIiwidmFyIHRvcHNvcnQgPSByZXF1aXJlKFwiLi90b3Bzb3J0XCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQWN5Y2xpYztcblxuZnVuY3Rpb24gaXNBY3ljbGljKGcpIHtcbiAgdHJ5IHtcbiAgICB0b3Bzb3J0KGcpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaWYgKGUgaW5zdGFuY2VvZiB0b3Bzb3J0LkN5Y2xlRXhjZXB0aW9uKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRocm93IGU7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG4iLCJ2YXIgXyA9IHJlcXVpcmUoXCIuLi9sb2Rhc2hcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZGZzO1xuXG4vKlxuICogQSBoZWxwZXIgdGhhdCBwcmVmb3JtcyBhIHByZS0gb3IgcG9zdC1vcmRlciB0cmF2ZXJzYWwgb24gdGhlIGlucHV0IGdyYXBoXG4gKiBhbmQgcmV0dXJucyB0aGUgbm9kZXMgaW4gdGhlIG9yZGVyIHRoZXkgd2VyZSB2aXNpdGVkLiBJZiB0aGUgZ3JhcGggaXNcbiAqIHVuZGlyZWN0ZWQgdGhlbiB0aGlzIGFsZ29yaXRobSB3aWxsIG5hdmlnYXRlIHVzaW5nIG5laWdoYm9ycy4gSWYgdGhlIGdyYXBoXG4gKiBpcyBkaXJlY3RlZCB0aGVuIHRoaXMgYWxnb3JpdGhtIHdpbGwgbmF2aWdhdGUgdXNpbmcgc3VjY2Vzc29ycy5cbiAqXG4gKiBPcmRlciBtdXN0IGJlIG9uZSBvZiBcInByZVwiIG9yIFwicG9zdFwiLlxuICovXG5mdW5jdGlvbiBkZnMoZywgdnMsIG9yZGVyKSB7XG4gIGlmICghXy5pc0FycmF5KHZzKSkge1xuICAgIHZzID0gW3ZzXTtcbiAgfVxuXG4gIHZhciBuYXZpZ2F0aW9uID0gKGcuaXNEaXJlY3RlZCgpID8gZy5zdWNjZXNzb3JzIDogZy5uZWlnaGJvcnMpLmJpbmQoZyk7XG5cbiAgdmFyIGFjYyA9IFtdO1xuICB2YXIgdmlzaXRlZCA9IHt9O1xuICBfLmVhY2godnMsIGZ1bmN0aW9uKHYpIHtcbiAgICBpZiAoIWcuaGFzTm9kZSh2KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR3JhcGggZG9lcyBub3QgaGF2ZSBub2RlOiBcIiArIHYpO1xuICAgIH1cblxuICAgIGRvRGZzKGcsIHYsIG9yZGVyID09PSBcInBvc3RcIiwgdmlzaXRlZCwgbmF2aWdhdGlvbiwgYWNjKTtcbiAgfSk7XG4gIHJldHVybiBhY2M7XG59XG5cbmZ1bmN0aW9uIGRvRGZzKGcsIHYsIHBvc3RvcmRlciwgdmlzaXRlZCwgbmF2aWdhdGlvbiwgYWNjKSB7XG4gIGlmICghXy5oYXModmlzaXRlZCwgdikpIHtcbiAgICB2aXNpdGVkW3ZdID0gdHJ1ZTtcblxuICAgIGlmICghcG9zdG9yZGVyKSB7IGFjYy5wdXNoKHYpOyB9XG4gICAgXy5lYWNoKG5hdmlnYXRpb24odiksIGZ1bmN0aW9uKHcpIHtcbiAgICAgIGRvRGZzKGcsIHcsIHBvc3RvcmRlciwgdmlzaXRlZCwgbmF2aWdhdGlvbiwgYWNjKTtcbiAgICB9KTtcbiAgICBpZiAocG9zdG9yZGVyKSB7IGFjYy5wdXNoKHYpOyB9XG4gIH1cbn1cbiIsInZhciBkZnMgPSByZXF1aXJlKFwiLi9kZnNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gcG9zdG9yZGVyO1xuXG5mdW5jdGlvbiBwb3N0b3JkZXIoZywgdnMpIHtcbiAgcmV0dXJuIGRmcyhnLCB2cywgXCJwb3N0XCIpO1xufVxuIiwidmFyIGRmcyA9IHJlcXVpcmUoXCIuL2Rmc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBwcmVvcmRlcjtcblxuZnVuY3Rpb24gcHJlb3JkZXIoZywgdnMpIHtcbiAgcmV0dXJuIGRmcyhnLCB2cywgXCJwcmVcIik7XG59XG4iLCJ2YXIgXyA9IHJlcXVpcmUoXCIuLi9sb2Rhc2hcIik7XG52YXIgR3JhcGggPSByZXF1aXJlKFwiLi4vZ3JhcGhcIik7XG52YXIgUHJpb3JpdHlRdWV1ZSA9IHJlcXVpcmUoXCIuLi9kYXRhL3ByaW9yaXR5LXF1ZXVlXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHByaW07XG5cbmZ1bmN0aW9uIHByaW0oZywgd2VpZ2h0RnVuYykge1xuICB2YXIgcmVzdWx0ID0gbmV3IEdyYXBoKCk7XG4gIHZhciBwYXJlbnRzID0ge307XG4gIHZhciBwcSA9IG5ldyBQcmlvcml0eVF1ZXVlKCk7XG4gIHZhciB2O1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZU5laWdoYm9ycyhlZGdlKSB7XG4gICAgdmFyIHcgPSBlZGdlLnYgPT09IHYgPyBlZGdlLncgOiBlZGdlLnY7XG4gICAgdmFyIHByaSA9IHBxLnByaW9yaXR5KHcpO1xuICAgIGlmIChwcmkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIGVkZ2VXZWlnaHQgPSB3ZWlnaHRGdW5jKGVkZ2UpO1xuICAgICAgaWYgKGVkZ2VXZWlnaHQgPCBwcmkpIHtcbiAgICAgICAgcGFyZW50c1t3XSA9IHY7XG4gICAgICAgIHBxLmRlY3JlYXNlKHcsIGVkZ2VXZWlnaHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChnLm5vZGVDb3VudCgpID09PSAwKSB7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIF8uZWFjaChnLm5vZGVzKCksIGZ1bmN0aW9uKHYpIHtcbiAgICBwcS5hZGQodiwgTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZKTtcbiAgICByZXN1bHQuc2V0Tm9kZSh2KTtcbiAgfSk7XG5cbiAgLy8gU3RhcnQgZnJvbSBhbiBhcmJpdHJhcnkgbm9kZVxuICBwcS5kZWNyZWFzZShnLm5vZGVzKClbMF0sIDApO1xuXG4gIHZhciBpbml0ID0gZmFsc2U7XG4gIHdoaWxlIChwcS5zaXplKCkgPiAwKSB7XG4gICAgdiA9IHBxLnJlbW92ZU1pbigpO1xuICAgIGlmIChfLmhhcyhwYXJlbnRzLCB2KSkge1xuICAgICAgcmVzdWx0LnNldEVkZ2UodiwgcGFyZW50c1t2XSk7XG4gICAgfSBlbHNlIGlmIChpbml0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnB1dCBncmFwaCBpcyBub3QgY29ubmVjdGVkOiBcIiArIGcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbml0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBnLm5vZGVFZGdlcyh2KS5mb3JFYWNoKHVwZGF0ZU5laWdoYm9ycyk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNvbXBvbmVudHM6IHJlcXVpcmUoXCIuL2NvbXBvbmVudHNcIiksXG4gIGRpamtzdHJhOiByZXF1aXJlKFwiLi9kaWprc3RyYVwiKSxcbiAgZGlqa3N0cmFBbGw6IHJlcXVpcmUoXCIuL2RpamtzdHJhLWFsbFwiKSxcbiAgZmluZEN5Y2xlczogcmVxdWlyZShcIi4vZmluZC1jeWNsZXNcIiksXG4gIGZsb3lkV2Fyc2hhbGw6IHJlcXVpcmUoXCIuL2Zsb3lkLXdhcnNoYWxsXCIpLFxuICBpc0FjeWNsaWM6IHJlcXVpcmUoXCIuL2lzLWFjeWNsaWNcIiksXG4gIHBvc3RvcmRlcjogcmVxdWlyZShcIi4vcG9zdG9yZGVyXCIpLFxuICBwcmVvcmRlcjogcmVxdWlyZShcIi4vcHJlb3JkZXJcIiksXG4gIHByaW06IHJlcXVpcmUoXCIuL3ByaW1cIiksXG4gIHRhcmphbjogcmVxdWlyZShcIi4vdGFyamFuXCIpLFxuICB0b3Bzb3J0OiByZXF1aXJlKFwiLi90b3Bzb3J0XCIpXG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQsIENocmlzIFBldHRpdHRcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4gKiBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqXG4gKiAxLiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcbiAqIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICpcbiAqIDIuIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcbiAqIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb25cbiAqIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuICpcbiAqIDMuIE5laXRoZXIgdGhlIG5hbWUgb2YgdGhlIGNvcHlyaWdodCBob2xkZXIgbm9yIHRoZSBuYW1lcyBvZiBpdHMgY29udHJpYnV0b3JzXG4gKiBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dFxuICogc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICpcbiAqIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiIEFORFxuICogQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRURcbiAqIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkVcbiAqIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEVcbiAqIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMXG4gKiBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUlxuICogU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVJcbiAqIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksXG4gKiBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRVxuICogT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqL1xuXG52YXIgbGliID0gcmVxdWlyZShcIi4vbGliXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgR3JhcGg6IGxpYi5HcmFwaCxcbiAganNvbjogcmVxdWlyZShcIi4vbGliL2pzb25cIiksXG4gIGFsZzogcmVxdWlyZShcIi4vbGliL2FsZ1wiKSxcbiAgdmVyc2lvbjogbGliLnZlcnNpb25cbn07XG4iLCJpbXBvcnQge2FkZEljb24sIEFwcCwgRHJvcGRvd25Db21wb25lbnQsIE1vZGFsLCBOb3RpY2UsIFBsdWdpbiwgUGx1Z2luU2V0dGluZ1RhYiwgU2V0dGluZ30gZnJvbSAnb2JzaWRpYW4nO1xyXG5pbXBvcnQgeyBHcmFwaCB9IGZyb20gJ2dyYXBobGliJztcclxuaW1wb3J0ICogYXMgZ3JhcGhsaWIgZnJvbSBcImdyYXBobGliXCI7XHJcbmltcG9ydCB7a01heExlbmd0aH0gZnJvbSBcImJ1ZmZlclwiO1xyXG5cclxuYWRkSWNvbignam91cm5leScsICc8c3ZnIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XFxuJyArXHJcblx0JzxyZWN0IHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgZmlsbD1cIndoaXRlXCIvPlxcbicgK1xyXG5cdCc8cmVjdCB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGZpbGw9XCJibGFja1wiLz5cXG4nICtcclxuXHQnPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTE1Ljk0OTggMTMuOTQ5N0MxNC42ODMgMTUuMjE2NSAxMi45MzMgMTYgMTEgMTZDNy4xMzQwMSAxNiA0IDEyLjg2NiA0IDlDNCA1LjEzNDAxIDcuMTM0MDEgMiAxMSAyQzE0Ljg2NiAyIDE4IDUuMTM0MDEgMTggOUMxOCAxMC41NzIzIDE3LjQ4MTYgMTIuMDIzNSAxNi42MDY0IDEzLjE5MjFMMTkuNDMxNyAxNi4wMTc0QzIxLjQwMzYgMTQuMTQ3MyAyNC4wNjc4IDEzIDI3IDEzQzMwLjgyOTYgMTMgMzQuMjAyMSAxNC45NTcgMzYuMTcyIDE3LjkyNTVMNDcuMjU2NCAxMC44ODM4QzQ3LjA4OTMgMTAuMjg0NCA0NyA5LjY1MjYzIDQ3IDlDNDcgNS4xMzQwMSA1MC4xMzQgMiA1NCAyQzU3Ljg2NiAyIDYxIDUuMTM0MDEgNjEgOUM2MSA5LjA1MDcxIDYwLjk5OTUgOS4xMDEzIDYwLjk5ODQgOS4xNTE3Nkw2OS42ODQ4IDE0LjE1MjZDNzIuNDM0NyAxMC45OTU0IDc2LjQ4NDMgOSA4MSA5Qzg5LjI4NDMgOSA5NiAxNS43MTU3IDk2IDI0Qzk2IDMyLjI4NDMgODkuMjg0MyAzOSA4MSAzOUM3Ny42MDAxIDM5IDc0LjQ2NDQgMzcuODY4OSA3MS45NDg3IDM1Ljk2MjRMNjEuMDg4NCA0Ni44MjI3QzYxLjY3MzYgNDguMDkzOSA2MiA0OS41MDg4IDYyIDUxQzYyIDUxLjMzNzUgNjEuOTgzMyA1MS42NzExIDYxLjk1MDYgNTJINzMuMDU0OUM3My41NTI0IDQ3LjUgNzcuMzY3NCA0NCA4MiA0NEM4Ni45NzA2IDQ0IDkxIDQ4LjAyOTQgOTEgNTNDOTEgNTcuOTcwNiA4Ni45NzA2IDYyIDgyIDYyQzc3LjAyOTQgNjIgNzMgNTcuOTcwNiA3MyA1M0g2MS43OTk5QzYwLjg3MzQgNTcuNTY0NSA1Ni44Mzc5IDYxIDUyIDYxQzUwLjUwODggNjEgNDkuMDkzOSA2MC42NzM2IDQ3LjgyMjcgNjAuMDg4NEwzNC4zODEzIDczLjUyOTdDMzUuNDkzNCA3NS4xNTIxIDM2LjI5NDggNzcuMDA0MSAzNi42OTk5IDc5SDczLjQxNEM3NC43MTk5IDc0LjM4MyA3OC45NjQ5IDcxIDg0IDcxQzkwLjA3NTEgNzEgOTUgNzUuOTI0OSA5NSA4MkM5NSA4OC4wNzUxIDkwLjA3NTEgOTMgODQgOTNDNzguOTY0OSA5MyA3NC43MTk5IDg5LjYxNyA3My40MTQgODVIMzYuNjk5OUMzNS4zMTAxIDkxLjg0NjcgMjkuMjU2OSA5NyAyMiA5N0MxMy43MTU3IDk3IDcgOTAuMjg0MyA3IDgyQzcgNzMuNzE1NyAxMy43MTU3IDY3IDIyIDY3QzI0Ljk3MTQgNjcgMjcuNzQxIDY3Ljg2NCAzMC4wNzEzIDY5LjM1NDVMNDMuMzcwMiA1Ni4wNTU2QzQyLjgyMjcgNTUuMTIzMSA0Mi40MjIxIDU0LjA5NCA0Mi4yIDUzSDMyQzMyIDU3Ljk3MDYgMjcuOTcwNiA2MiAyMyA2MkMxOC4wMjk0IDYyIDE0IDU3Ljk3MDYgMTQgNTNDMTQgNDguMDI5NCAxOC4wMjk0IDQ0IDIzIDQ0QzI3LjYzMjYgNDQgMzEuNDQ3NiA0Ny41IDMxLjk0NTEgNTJINDIuMDQ5NEM0Mi4wMTY3IDUxLjY3MTEgNDIgNTEuMzM3NSA0MiA1MUM0MiA0NS40NzcyIDQ2LjQ3NzEgNDEgNTIgNDFDNTMuODQ0NCA0MSA1NS41NzIyIDQxLjQ5OTMgNTcuMDU1NiA0Mi4zNzAyTDY3Ljk3NzEgMzEuNDQ4NkM2Ny4xOTU5IDMwLjA4NTcgNjYuNjIyNSAyOC41ODg0IDY2LjMwMDEgMjdIMzcuNTg1OUMzNi4yODAxIDMxLjYxNyAzMi4wMzUxIDM1IDI3IDM1QzIwLjkyNDkgMzUgMTYgMzAuMDc1MSAxNiAyNEMxNiAyMS4yMTY5IDE3LjAzMzYgMTguNjc1MiAxOC43Mzc5IDE2LjczNzhMMTUuOTQ5OCAxMy45NDk3Wk02OS4wNDU0IDE0LjkzODRMNjAuODg5OSAxMC4yNDMyQzYwLjMwMzMgMTMuNTE2MSA1Ny40NDE3IDE2IDU0IDE2QzUxLjE0ODEgMTYgNDguNjk0NiAxNC4yOTQ2IDQ3LjYwMzYgMTEuODQ3OUwzNi42ODY3IDE4Ljc4MzNDMzcuMDYyOSAxOS40ODA0IDM3LjM2NjEgMjAuMjIyNyAzNy41ODU5IDIxSDY2LjMwMDFDNjYuNzU1MyAxOC43NTcyIDY3LjcxMSAxNi42OTYxIDY5LjA0NTQgMTQuOTM4NFpcIiBmaWxsPVwid2hpdGVcIiBmaWxsLW9wYWNpdHk9XCIwLjNcIi8+XFxuJyArXHJcblx0JzxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk05NiAyNEM5NiAzMi4yODQzIDg5LjI4NDMgMzkgODEgMzlDNzcuNjAwMSAzOSA3NC40NjQ0IDM3Ljg2ODkgNzEuOTQ4NyAzNS45NjI0TDYxLjA4ODQgNDYuODIyN0M2MS42NzM2IDQ4LjA5MzkgNjIgNDkuNTA4OCA2MiA1MUM2MiA1Ni41MjI4IDU3LjUyMjggNjEgNTIgNjFDNTAuNTA4OCA2MSA0OS4wOTM5IDYwLjY3MzYgNDcuODIyNyA2MC4wODg0TDM0LjM4MTMgNzMuNTI5N0MzNS40OTM0IDc1LjE1MjEgMzYuMjk0OCA3Ny4wMDQxIDM2LjY5OTkgNzlINzMuNDE0Qzc0LjcxOTkgNzQuMzgzIDc4Ljk2NDkgNzEgODQgNzFDOTAuMDc1MSA3MSA5NSA3NS45MjQ5IDk1IDgyQzk1IDg4LjA3NTEgOTAuMDc1MSA5MyA4NCA5M0M3OC45NjQ5IDkzIDc0LjcxOTkgODkuNjE3IDczLjQxNCA4NUgzNi42OTk5QzM1LjMxMDEgOTEuODQ2NyAyOS4yNTY5IDk3IDIyIDk3QzEzLjcxNTcgOTcgNyA5MC4yODQzIDcgODJDNyA3My43MTU3IDEzLjcxNTcgNjcgMjIgNjdDMjQuOTcxNCA2NyAyNy43NDEgNjcuODY0IDMwLjA3MTMgNjkuMzU0NUw0My4zNzAyIDU2LjA1NTZDNDIuNDk5MyA1NC41NzIyIDQyIDUyLjg0NDQgNDIgNTFDNDIgNDUuNDc3MiA0Ni40NzcxIDQxIDUyIDQxQzUzLjg0NDQgNDEgNTUuNTcyMiA0MS40OTkzIDU3LjA1NTYgNDIuMzcwMkw2Ny45NzcxIDMxLjQ0ODZDNjcuMTk1OSAzMC4wODU3IDY2LjYyMjUgMjguNTg4NCA2Ni4zMDAxIDI3SDM3LjU4NTlDMzYuMjgwMSAzMS42MTcgMzIuMDM1MSAzNSAyNyAzNUMyMC45MjQ5IDM1IDE2IDMwLjA3NTEgMTYgMjRDMTYgMTcuOTI0OSAyMC45MjQ5IDEzIDI3IDEzQzMyLjAzNTEgMTMgMzYuMjgwMSAxNi4zODMgMzcuNTg1OSAyMUg2Ni4zMDAxQzY3LjY4OTkgMTQuMTUzMyA3My43NDMxIDkgODEgOUM4OS4yODQzIDkgOTYgMTUuNzE1NyA5NiAyNFpcIiBmaWxsPVwid2hpdGVcIiBmaWxsLW9wYWNpdHk9XCIwLjRcIi8+XFxuJyArXHJcblx0Jzwvc3ZnPlxcbicpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSm91cm5leVBsdWdpbiBleHRlbmRzIFBsdWdpbiB7XHJcblx0cHJpdmF0ZSBzZWFyY2hNb2RhbDogU2VhcmNoTW9kYWw7XHJcblx0cHJpdmF0ZSByZXN1bHRzTW9kYWw6IFJlc3VsdHNNb2RhbDtcclxuXHRwdWJsaWMgc2V0dGluZ3M6IEpvdXJuZXlQbHVnaW5TZXR0aW5ncztcclxuXHJcblx0YXN5bmMgb25sb2FkKCkge1xyXG5cdFx0dGhpcy5sb2FkU2V0dGluZ3MoKTtcclxuXHRcdHRoaXMuYWRkU2V0dGluZ1RhYihuZXcgSm91cm5leVBsdWdpblNldHRpbmdzVGFiKHRoaXMuYXBwLCB0aGlzKSk7XHJcblxyXG5cdFx0dGhpcy5hZGRSaWJib25JY29uKCdqb3VybmV5JywgJ0ZpbmQgSm91cm5leScsICgpID0+IHtcclxuXHRcdFx0dGhpcy5zdGFydFNlYXJjaCgpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRvbnVubG9hZCgpIHtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBhc3luYyBmaW5kU2hvcnRlc3RQYXRoKHN0YXJ0OiBzdHJpbmcsIGVuZDogc3RyaW5nKSB7XHJcblxyXG5cdFx0Y29uc3Qgc3RhcnRCYXNlbmFtZSA9IHN0YXJ0O1xyXG5cdFx0Y29uc3QgZW5kQmFzZW5hbWUgPSBlbmQ7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coXCJTZWFyY2hpbmcgZm9yIGpvdXJuZXkgYmV0d2VlbiBcIiArIHN0YXJ0QmFzZW5hbWUgKyBcIiBhbmQgXCIgKyBlbmRCYXNlbmFtZSk7XHJcblxyXG5cdFx0Ly8gZ2V0IG1kIGZpbGVzXHJcblx0XHRsZXQgbWRGaWxlcyA9IHRoaXMuYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMoKTtcclxuXHJcblx0XHQvLyBjb25maWd1cmUgZGlyZWN0ZWQgdHJ1ZS9mYWxzZVxyXG5cdFx0dmFyIGcgPSBuZXcgR3JhcGgoeyB9KTtcclxuXHJcblx0XHRmb3IgKGNvbnN0IG1kIG9mIG1kRmlsZXMpIHtcclxuXHRcdFx0Y29uc3Qgbm9kZUJhc2VuYW1lID0gbWQuYmFzZW5hbWU7XHJcblx0XHRcdGcuc2V0Tm9kZShub2RlQmFzZW5hbWUpO1xyXG5cclxuXHRcdFx0Ly8gY29uc29sZS5sb2coXCJDcmVhdGluZyBub2RlIFwiICsgbm9kZUJhc2VuYW1lKTtcclxuXHRcdFx0bGV0IHRleHQgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5hZGFwdGVyLnJlYWQobWQucGF0aCk7XHJcblxyXG5cdFx0XHQvLyBAdHMtaWdub3JlXHJcblx0XHRcdGNvbnN0IHJlc3VsdCA9IHRleHQubWF0Y2hBbGwoL1xcW1xcWyguKilcXF1cXF0vZ21pKTsgLy8gb25seSBjbGVhbiBsaW5rcyBmb3Igbm93XHJcblxyXG5cdFx0XHRjb25zdCByID0gQXJyYXkuZnJvbShyZXN1bHQpO1xyXG5cclxuXHRcdFx0Ly8gY29uc29sZS5sb2codGhpcy5zZXR0aW5ncy5NT0NNYXhMaW5rcyk7XHJcblxyXG5cdFx0XHRpZighdGhpcy5zZXR0aW5ncy5za2lwTU9DcyB8fCAhKHIubGVuZ3RoID4gdGhpcy5zZXR0aW5ncy5NT0NNYXhMaW5rcykpIHtcclxuXHJcblx0XHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IHIubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdGxldCB4ID0gcltpXTtcclxuXHJcblx0XHRcdFx0XHQvLyBAdHMtaWdub3JlXHJcblx0XHRcdFx0XHRsZXQgdGFyZ2V0ID0geFsxXTtcclxuXHJcblx0XHRcdFx0XHRpZih0YXJnZXQuaW5kZXhPZihcIiNcIikgIT0gLTEpIHRhcmdldCA9IHRhcmdldC5zdWJzdHJpbmcoMCwgdGFyZ2V0LmluZGV4T2YoXCIjXCIpKVxyXG5cdFx0XHRcdFx0aWYodGFyZ2V0LmluZGV4T2YoXCJ8XCIpICE9IC0xKSB0YXJnZXQgPSB0YXJnZXQuc3Vic3RyaW5nKDAsIHRhcmdldC5pbmRleE9mKFwifFwiKSlcclxuXHRcdFx0XHRcdGlmKHRhcmdldC5pbmRleE9mKFwiXlwiKSAhPSAtMSkgdGFyZ2V0ID0gdGFyZ2V0LnN1YnN0cmluZygwLCB0YXJnZXQuaW5kZXhPZihcIl5cIikpXHJcblxyXG5cdFx0XHRcdFx0dGFyZ2V0ID0gdGFyZ2V0LnRyaW0oKTtcclxuXHJcblx0XHRcdFx0XHRpZih0aGlzLnNldHRpbmdzLnVzZUZvcndhcmRMaW5rcykge1xyXG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhcIiAgICAgQWRkaW5nIEZPUldBUkRMSU5LIGVkZ2UgXCIgKyBub2RlQmFzZW5hbWUgKyBcIiAtPiBcIiArIHRhcmdldCk7XHJcblx0XHRcdFx0XHRcdGcuc2V0RWRnZShub2RlQmFzZW5hbWUsIHRhcmdldCk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly8gYWxsb3cgYmFja2xpbmtzXHJcblx0XHRcdFx0XHRpZih0aGlzLnNldHRpbmdzLnVzZUJhY2tMaW5rcykge1xyXG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhcIiAgICAgQWRkaW5nIEJBQ0tMSU5LIGVkZ2UgXCIgKyB0YXJnZXQgKyBcIiAtPiBcIiArIG5vZGVCYXNlbmFtZSk7XHJcblx0XHRcdFx0XHRcdGcuc2V0RWRnZSh0YXJnZXQsIG5vZGVCYXNlbmFtZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiU2tpcHBpbmcgZWRnZSBjcmVhdGlvbiBmb3IgXCIgKyBub2RlQmFzZW5hbWUgKyBcIiB3aXRoIHRvbyBtYW55IChcIiArIHIubGVuZ3RoICsgXCIvXCIgKyB0aGlzLnNldHRpbmdzLk1PQ01heExpbmtzICsgXCIpIGxpbmtzXCIpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZih0aGlzLnNldHRpbmdzLnVzZVRhZ3MpIHtcclxuXHRcdFx0XHQvLyBAdHMtaWdub3JlXHJcblx0XHRcdFx0Y29uc3QgcmVzdWx0ID0gdGV4dC5tYXRjaEFsbCgvXFwjXFx3Ky9nbWkpO1xyXG5cdFx0XHRcdGNvbnN0IHRzID0gQXJyYXkuZnJvbShyZXN1bHQpO1xyXG5cclxuXHRcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdGxldCB0YWcgPSBTdHJpbmcodHNbaV0pO1xyXG5cdFx0XHRcdFx0Ly8gQHRzLWlnbm9yZVxyXG5cdFx0XHRcdFx0dGFnID0gdGFnLnRyaW0oKTtcclxuXHJcblx0XHRcdFx0XHRpZighZy5oYXNOb2RlKHRhZykpIHtcclxuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coXCJBZGRpbmcgVGFnIG5vZGVcIiArIHRhZylcclxuXHRcdFx0XHRcdFx0Zy5zZXROb2RlKHRhZyk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYoIWcuaGFzRWRnZShub2RlQmFzZW5hbWUsIHRhZykpIHtcclxuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coXCJBZGRpbmcgZWRnZSBcIiArIG5vZGVCYXNlbmFtZSArIFwiIC0+IFwiICsgdGFnKTtcclxuXHRcdFx0XHRcdFx0Zy5zZXRFZGdlKG5vZGVCYXNlbmFtZSwgdGFnKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmKCFnLmhhc0VkZ2UodGFnLCBub2RlQmFzZW5hbWUpKSB7XHJcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKFwiQWRkaW5nIGVkZ2UgXCIgKyB0YWcgKyBcIiAtPiBcIiArIG5vZGVCYXNlbmFtZSk7XHJcblx0XHRcdFx0XHRcdGcuc2V0RWRnZSh0YWcsIG5vZGVCYXNlbmFtZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gY29uc3QgY29tcG9uZW50cyA9IGdyYXBobGliLmFsZy5jb21wb25lbnRzKGcpO1xyXG5cdFx0Ly8gY29uc29sZS5sb2coY29tcG9uZW50cyk7XHJcblxyXG5cdFx0Y29uc3Qgc2VhcmNoUmVzdWx0ID0gZ3JhcGhsaWIuYWxnLmRpamtzdHJhKGcsIHN0YXJ0QmFzZW5hbWUpO1xyXG5cclxuXHRcdGxldCBmaW5hbExpc3QgPSBuZXcgQXJyYXkoKTtcclxuXHJcblx0XHQvLyBjb25zb2xlLmxvZyhzZWFyY2hSZXN1bHQpO1xyXG5cclxuXHRcdGlmKHNlYXJjaFJlc3VsdFtlbmRCYXNlbmFtZV0gIT09IHVuZGVmaW5lZCAmJiBzZWFyY2hSZXN1bHRbZW5kQmFzZW5hbWVdLmRpc3RhbmNlICE9PSBJbmZpbml0eSkge1xyXG5cdFx0XHRsZXQgc3RlcCA9IHNlYXJjaFJlc3VsdFtlbmRCYXNlbmFtZV07XHJcblx0XHRcdGZpbmFsTGlzdC5wdXNoKGVuZEJhc2VuYW1lKTtcclxuXHJcblx0XHRcdHdoaWxlKHN0ZXAuZGlzdGFuY2UgIT0gMCkge1xyXG5cdFx0XHRcdGZpbmFsTGlzdC5wdXNoKHN0ZXAucHJlZGVjZXNzb3IpO1xyXG5cdFx0XHRcdHN0ZXAgPSBcdHNlYXJjaFJlc3VsdFtzdGVwLnByZWRlY2Vzc29yXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0dGhpcy5zZWFyY2hNb2RhbC5jbG9zZSgpO1xyXG5cdFx0dGhpcy5zZWFyY2hNb2RhbCA9IG5ldyBTZWFyY2hNb2RhbCh0aGlzLmFwcCwgdGhpcyk7XHJcblx0XHR0aGlzLnJlc3VsdHNNb2RhbCA9IG5ldyBSZXN1bHRzTW9kYWwodGhpcy5hcHAsIHRoaXMpO1xyXG5cdFx0dGhpcy5yZXN1bHRzTW9kYWwucmVzdWx0cyA9IGZpbmFsTGlzdDtcclxuXHRcdHRoaXMucmVzdWx0c01vZGFsLnN0YXJ0QmFzZW5hbWUgPSBzdGFydEJhc2VuYW1lO1xyXG5cdFx0dGhpcy5yZXN1bHRzTW9kYWwuZW5kQmFzZW5hbWUgPSBlbmRCYXNlbmFtZTtcclxuXHRcdHRoaXMucmVzdWx0c01vZGFsLm9wZW4oKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGFydFNlYXJjaCgpIHtcclxuXHRcdHRoaXMuc2VhcmNoTW9kYWwgPSBuZXcgU2VhcmNoTW9kYWwodGhpcy5hcHAsIHRoaXMpO1xyXG5cdFx0dGhpcy5zZWFyY2hNb2RhbC5vcGVuKCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGxvYWRTZXR0aW5ncygpIHtcclxuXHRcdHRoaXMuc2V0dGluZ3MgPSBuZXcgSm91cm5leVBsdWdpblNldHRpbmdzKCk7XHJcblx0XHQoYXN5bmMgKCkgPT4ge1xyXG5cdFx0XHRjb25zdCBsb2FkZWRTZXR0aW5ncyA9IGF3YWl0IHRoaXMubG9hZERhdGEoKTtcclxuXHRcdFx0aWYgKGxvYWRlZFNldHRpbmdzKSB7XHJcblx0XHRcdFx0dGhpcy5zZXR0aW5ncy51c2VGb3J3YXJkTGlua3MgPSBsb2FkZWRTZXR0aW5ncy51c2VGb3J3YXJkTGlua3M7XHJcblx0XHRcdFx0dGhpcy5zZXR0aW5ncy51c2VCYWNrTGlua3MgPSBsb2FkZWRTZXR0aW5ncy51c2VCYWNrTGlua3M7XHJcblx0XHRcdFx0dGhpcy5zZXR0aW5ncy51c2VUYWdzID0gbG9hZGVkU2V0dGluZ3MudXNlVGFncztcclxuXHRcdFx0XHR0aGlzLnNldHRpbmdzLnNraXBNT0NzID0gbG9hZGVkU2V0dGluZ3Muc2tpcE1PQ3M7XHJcblx0XHRcdFx0dGhpcy5zZXR0aW5ncy5NT0NNYXhMaW5rcyA9IGxvYWRlZFNldHRpbmdzLk1PQ01heExpbmtzO1xyXG5cdFx0XHRcdHRoaXMuc2V0dGluZ3MuZW5hYmxlSGlnaENvbnRyYXN0ID0gbG9hZGVkU2V0dGluZ3MuZW5hYmxlSGlnaENvbnRyYXN0O1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuc2F2ZURhdGEodGhpcy5zZXR0aW5ncyk7XHJcblx0XHRcdH1cclxuXHRcdH0pKCk7XHJcblx0fVxyXG59XHJcblxyXG5jbGFzcyBTZWFyY2hNb2RhbCBleHRlbmRzIE1vZGFsIHtcclxuXHRwcml2YXRlIHBsdWdpbjogSm91cm5leVBsdWdpbjtcclxuXHRwcml2YXRlIGRyb3Bkb3duU3RhcnQ6IERyb3Bkb3duQ29tcG9uZW50O1xyXG5cdHByaXZhdGUgZHJvcGRvd25FbmQ6IERyb3Bkb3duQ29tcG9uZW50O1xyXG5cdHByaXZhdGUgbWFya2Rvd25GaWxlczogYW55W107XHJcblxyXG5cdGNvbnN0cnVjdG9yKGFwcDogQXBwLCBwbHVnaW46IEpvdXJuZXlQbHVnaW4pIHtcclxuXHRcdHN1cGVyKGFwcCk7XHJcblx0XHR0aGlzLnBsdWdpbiA9IHBsdWdpbjtcclxuXHR9XHJcblxyXG5cdGZpbmRSYW5kb21Ob3RlQmFzZW5hbWUoKSB7XHJcblx0XHRjb25zdCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5tYXJrZG93bkZpbGVzLmxlbmd0aCkgKyAxXHJcblx0XHRyZXR1cm4gdGhpcy5tYXJrZG93bkZpbGVzW3JhbmRdLmJhc2VuYW1lO1xyXG5cdH1cclxuXHJcblx0b25PcGVuKCkge1xyXG5cdFx0bGV0IHtjb250ZW50RWx9ID0gdGhpcztcclxuXHRcdGNvbnRlbnRFbC5jcmVhdGVFbChcImgyXCIsIHt0ZXh0OiBcIkZpbmQgdGhlIFN0b3J5IEJldHdlZW4gVHdvIE5vdGVzXCJ9KTtcclxuXHJcblx0XHRsZXQgZm9ybURpdiA9IGNvbnRlbnRFbC5jcmVhdGVEaXYoe2NsczogJ2pvdXJuZXktc2VhcmNoLWZvcm0nfSlcclxuXHJcblx0XHR0aGlzLm1hcmtkb3duRmlsZXMgPSB0aGlzLmFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzKCk7XHJcblx0XHR0aGlzLmRyb3Bkb3duU3RhcnQgPSBuZXcgRHJvcGRvd25Db21wb25lbnQoZm9ybURpdik7XHJcblx0XHR0aGlzLmRyb3Bkb3duU3RhcnQuYWRkT3B0aW9uKFwiXCIsIFwiU2VsZWN0IHlvdXIgU3RhcnRpbmcgTm90ZVwiKVxyXG5cdFx0dGhpcy5kcm9wZG93bkVuZCA9IG5ldyBEcm9wZG93bkNvbXBvbmVudChmb3JtRGl2KTtcclxuXHRcdHRoaXMuZHJvcGRvd25FbmQuYWRkT3B0aW9uKFwiXCIsIFwiU2VsZWN0IHlvdXIgRW5kaW5nIE5vdGVcIilcclxuXHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5tYXJrZG93bkZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGxldCB4ID0gdGhpcy5tYXJrZG93bkZpbGVzW2ldO1xyXG5cdFx0XHR0aGlzLmRyb3Bkb3duU3RhcnQuYWRkT3B0aW9uKHguYmFzZW5hbWUsIHguYmFzZW5hbWUpO1xyXG5cdFx0XHR0aGlzLmRyb3Bkb3duRW5kLmFkZE9wdGlvbih4LmJhc2VuYW1lLCB4LmJhc2VuYW1lKTtcclxuXHRcdH1cclxuXHJcblx0XHRmb3JtRGl2LmNyZWF0ZUVsKFwiYnJcIik7XHJcblx0XHRsZXQgYnV0dG9uID0gZm9ybURpdi5jcmVhdGVFbCgnaW5wdXQnLCB7dHlwZTogJ3N1Ym1pdCcsIGNsczogJ2pvdXJuZXktaW5wdXQtYnV0dG9uJywgdmFsdWU6ICdGaW5kIEpvdXJuZXknfSk7XHJcblxyXG5cdFx0dmFyIHNlYXJjaEZ1bmN0aW9uID0gKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRjb250ZW50RWwucmVwbGFjZVdpdGgoY29udGVudEVsLmNyZWF0ZUVsKFwiaDJcIiwge3RleHQ6IFwiU2VhcmNoaW5nLi4uXCJ9KSk7XHJcblx0XHRcdHRoaXMucGx1Z2luLmZpbmRTaG9ydGVzdFBhdGgodGhpcy5kcm9wZG93blN0YXJ0LmdldFZhbHVlKCksIHRoaXMuZHJvcGRvd25FbmQuZ2V0VmFsdWUoKSk7XHJcblx0XHR9KS5iaW5kKHRoaXMpO1xyXG5cclxuXHRcdGJ1dHRvbi5vbmNsaWNrID0gc2VhcmNoRnVuY3Rpb247XHJcblxyXG5cdFx0bGV0IGx1Y2t5ID0gZm9ybURpdi5jcmVhdGVFbCgncCcsIHtjbHM6ICdqb3VybmV5LXNlYXJjaC1sdWNreScsIHRleHQ6ICdJIGZlZWwgbHVja3knfSk7XHJcblx0XHR2YXIgbHVja3lGdW5jdGlvbiA9IChmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy5kcm9wZG93blN0YXJ0LnNldFZhbHVlKHRoaXMuZmluZFJhbmRvbU5vdGVCYXNlbmFtZSgpKTtcclxuXHRcdFx0dGhpcy5kcm9wZG93bkVuZC5zZXRWYWx1ZSh0aGlzLmZpbmRSYW5kb21Ob3RlQmFzZW5hbWUoKSk7XHJcblx0XHR9KS5iaW5kKHRoaXMpO1xyXG5cclxuXHRcdGx1Y2t5Lm9uY2xpY2sgPSBsdWNreUZ1bmN0aW9uO1xyXG5cclxuXHRcdC8vIGFkZCBzaG93aW5nIHdoaWNoIHNldHRpbmdzIGFyZSBvblxyXG5cdFx0Zm9ybURpdi5jcmVhdGVFbChcImJyXCIpO1xyXG5cdFx0bGV0IHZpYTpzdHJpbmcgPSBcIlwiO1xyXG5cdFx0aWYodGhpcy5wbHVnaW4uc2V0dGluZ3MudXNlRm9yd2FyZExpbmtzKSB7XHJcblx0XHRcdHZpYSArPSBcIuKclCBGb3J3YXJkbGlua3MgXCI7XHJcblx0XHR9XHJcblx0XHRpZih0aGlzLnBsdWdpbi5zZXR0aW5ncy51c2VCYWNrTGlua3MpIHtcclxuXHRcdFx0dmlhICs9IFwi4pyUIEJhY2tsaW5rcyBcIjtcclxuXHRcdH1cclxuXHRcdGlmKHRoaXMucGx1Z2luLnNldHRpbmdzLnVzZVRhZ3MpIHtcclxuXHRcdFx0dmlhICs9IFwi4pyUIFRhZ3NcIjtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgYXZvaWQgPSBcIlwiO1xyXG5cdFx0aWYodGhpcy5wbHVnaW4uc2V0dGluZ3Muc2tpcE1PQ3MpIHtcclxuXHRcdFx0YXZvaWQgPSBcIuKclCBNT0NzIHdpdGggXCIgKyB0aGlzLnBsdWdpbi5zZXR0aW5ncy5NT0NNYXhMaW5rcyArIFwiIG9yIG1vcmUgbGlua3MgXCJcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgdmlzdWFsID0gXCJcIjtcclxuXHRcdGlmKHRoaXMucGx1Z2luLnNldHRpbmdzLmVuYWJsZUhpZ2hDb250cmFzdCkge1xyXG5cdFx0XHR2aXN1YWwgPSBcIuKclCBIaWdoLUNvbnRyYXN0IFwiO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvcm1EaXYuY3JlYXRlRWwoXCJwXCIsIHt0ZXh0OiB2aWEgKyBcIiBcIiArIGF2b2lkICsgXCIgXCIgKyB2aXN1YWwsIGNsczogJ2Rpc2NvdmVyeS1zZXR0aW5ncycgfSk7XHJcblxyXG5cdH1cclxuXHJcblx0b25DbG9zZSgpIHtcclxuXHRcdGxldCB7Y29udGVudEVsfSA9IHRoaXM7XHJcblx0XHRjb250ZW50RWwuZW1wdHkoKTtcclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIFJlc3VsdHNNb2RhbCBleHRlbmRzIE1vZGFsIHtcclxuXHRwcml2YXRlIHBsdWdpbjtcclxuXHQvLyBAdHMtaWdub3JlXHJcblx0cHVibGljIHJlc3VsdHM7XHJcblx0cHVibGljIHN0YXJ0QmFzZW5hbWU6IHN0cmluZztcclxuXHRwdWJsaWMgZW5kQmFzZW5hbWU6IHN0cmluZztcclxuXHJcblx0Y29uc3RydWN0b3IoYXBwOiBBcHAsIHBsdWdpbjogSm91cm5leVBsdWdpbikge1xyXG5cdFx0c3VwZXIoYXBwKTtcclxuXHRcdHRoaXMucGx1Z2luID0gcGx1Z2luO1xyXG5cdH1cclxuXHJcblx0b25PcGVuKCkge1xyXG5cdFx0Ly8gY29uc29sZS5sb2codGhpcy5yZXN1bHRzKTtcclxuXHRcdGxldCB7Y29udGVudEVsfSA9IHRoaXM7XHJcblxyXG5cdFx0bGV0IGFub3RoZXJTZWFyY2ggPSBjb250ZW50RWwuY3JlYXRlRWwoXCJwXCIsIHt0ZXh0OiBcIlN0YXJ0IGFub3RoZXIgc2VhcmNoXCIsIGNsczogJ2pvdXJuZXktcmVzdWx0LWxpc3QtcmVzZXQtbGluayd9KTtcclxuXHJcblx0XHR2YXIgYm91bmRGdW5jdGlvbkFub3RoZXJTZWFyY2ggPSAoZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMuY2xvc2UoKTtcclxuXHRcdFx0dGhpcy5wbHVnaW4uc3RhcnRTZWFyY2goKTtcclxuXHRcdH0pLmJpbmQodGhpcyk7XHJcblxyXG5cdFx0YW5vdGhlclNlYXJjaC5vbmNsaWNrID0gYm91bmRGdW5jdGlvbkFub3RoZXJTZWFyY2g7XHJcblxyXG5cdFx0aWYodGhpcy5yZXN1bHRzLmxlbmd0aCA8PSAwKSB7XHJcblx0XHRcdGxldCBub1NlYXJjaFJlc3VsdCA9IGNyZWF0ZURpdigpO1xyXG5cdFx0XHRub1NlYXJjaFJlc3VsdC5hcHBlbmRDaGlsZChjcmVhdGVFbChcImgyXCIsIHt0ZXh0OiBcIk5vIEpvdXJuZXkgRm91bmQgYmV0d2VlbiBcIiArIHRoaXMuc3RhcnRCYXNlbmFtZSArIFwiIGFuZCBcIiArIHRoaXMuZW5kQmFzZW5hbWV9KSk7XHJcblx0XHRcdG5vU2VhcmNoUmVzdWx0LmFwcGVuZENoaWxkKGNyZWF0ZUVsKFwicFwiLCB7dGV4dDogXCJIZXJlIGFyZSBzb21lIHBvc3NpYmxlIHJlYXNvbnMgd2h5OlwiIH0pKTtcclxuXHRcdFx0bGV0IGV4cGxhbmF0aW9uTGlzdCA9IGNyZWF0ZUVsKCd1bCcpO1xyXG5cclxuXHRcdFx0aWYoIXRoaXMucGx1Z2luLnNldHRpbmdzLnVzZUZvcndhcmRMaW5rcykge1xyXG5cdFx0XHRcdGV4cGxhbmF0aW9uTGlzdC5jcmVhdGVFbCgnbGknLCB7dGV4dDogJ1lvdSBjdXJyZW50bHkgaGF2ZSBmb3J3YXJkLWxpbmtzIGRpc2FibGVkIGluIHlvdXIgc2V0dGluZ3MnfSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKCF0aGlzLnBsdWdpbi5zZXR0aW5ncy51c2VCYWNrTGlua3MpIHtcclxuXHRcdFx0XHRleHBsYW5hdGlvbkxpc3QuY3JlYXRlRWwoJ2xpJywge3RleHQ6ICdZb3UgY3VycmVudGx5IGhhdmUgYmFjay1saW5rcyBkaXNhYmxlZCBpbiB5b3VyIHNldHRpbmdzJ30pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZighdGhpcy5wbHVnaW4uc2V0dGluZ3MudXNlVGFncykge1xyXG5cdFx0XHRcdGV4cGxhbmF0aW9uTGlzdC5jcmVhdGVFbCgnbGknLCB7dGV4dDogJ1lvdSBjdXJyZW50bHkgaGF2ZSB0YWdzIGRpc2FibGVkIGluIHlvdXIgc2V0dGluZ3MnfSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKHRoaXMucGx1Z2luLnNldHRpbmdzLnNraXBNT0NzKSB7XHJcblx0XHRcdFx0ZXhwbGFuYXRpb25MaXN0LmNyZWF0ZUVsKCdsaScsIHt0ZXh0OiAnWW91IGN1cnJlbnRseSBoYXZlIHNraXBwaW5nIE1PQ3Mgd2l0aCBtb3JlIHRoYW4gJyArIHRoaXMucGx1Z2luLnNldHRpbmdzLk1PQ01heExpbmtzICsgJyBvdXRib3VuZCBsaW5rcyBlbmFibGVkJ30pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRleHBsYW5hdGlvbkxpc3QuY3JlYXRlRWwoJ2xpJywge3RleHQ6ICdUaGUgdHdvIG5vdGVzIG1heSBub3QgYmUgaW4gdGhlIHNhbWUgbmV0d29yay4nfSk7XHJcblxyXG5cdFx0XHRub1NlYXJjaFJlc3VsdC5hcHBlbmRDaGlsZChleHBsYW5hdGlvbkxpc3QpO1xyXG5cdFx0XHRub1NlYXJjaFJlc3VsdC5hcHBlbmRDaGlsZChhbm90aGVyU2VhcmNoKTtcclxuXHRcdFx0Y29udGVudEVsLnJlcGxhY2VXaXRoKG5vU2VhcmNoUmVzdWx0KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGxldCBsaXN0Q2xhc3MgPSAnam91cm5leS1yZXN1bHQtbGlzdCc7XHJcblx0XHRcdGlmKHRoaXMucGx1Z2luLnNldHRpbmdzLmVuYWJsZUhpZ2hDb250cmFzdCkge1xyXG5cdFx0XHRcdGxpc3RDbGFzcyA9ICdqb3VybmV5LXJlc3VsdC1saXN0LWhpZ2gtY29udHJhc3QnO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRsZXQgbGlzdCA9IGNyZWF0ZURpdih7Y2xzOiBsaXN0Q2xhc3N9KTtcclxuXHJcblx0XHRcdGxldCByZXZlcnNlZFJlc3VsdHMgPSB0aGlzLnJlc3VsdHMucmV2ZXJzZSgpO1xyXG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgcmV2ZXJzZWRSZXN1bHRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0bGV0IHRleHQgPSByZXZlcnNlZFJlc3VsdHNbaV07XHJcblx0XHRcdFx0bGV0IGNscyA9IFwiam91cm5leS1yZXN1bHQtbGlzdC1pdGVtLW5vdGVcIjtcclxuXHJcblx0XHRcdFx0aWYoaSA9PSAwKSBjbHMgPSBcImpvdXJuZXktcmVzdWx0LWxpc3QtaXRlbS1zdGFydFwiO1xyXG5cdFx0XHRcdGlmKGkgPT0gcmV2ZXJzZWRSZXN1bHRzLmxlbmd0aCAtIDEpIGNscyA9IFwiam91cm5leS1yZXN1bHQtbGlzdC1pdGVtLWVuZFwiO1xyXG5cdFx0XHRcdGlmKHRleHQubWF0Y2goL15cXCNcXHcrLykpIGNscyA9IFwiam91cm5leS1yZXN1bHQtbGlzdC1pdGVtLXRhZ1wiXHJcblxyXG5cdFx0XHRcdGxpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlRGl2KHt0ZXh0OiB0ZXh0LCBjbHM6IGNsc30pKVxyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnRlbnRFbC5hcHBlbmRDaGlsZChsaXN0KTtcclxuXHJcblx0XHRcdGxldCBidXR0b24gPSBjb250ZW50RWwuY3JlYXRlRWwoJ2lucHV0Jywge3R5cGU6ICdzdWJtaXQnLCBjbHM6ICdqb3VybmV5LWlucHV0LWJ1dHRvbicsIHZhbHVlOiAnQ29weSB0byBDbGlwYm9hcmQnfSk7XHJcblx0XHRcdHZhciBib3VuZEZ1bmN0aW9uQnV0dG9uID0gKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHRoaXMuc2F2ZVRvQ2xpcGJvYXJkKCk7XHJcblx0XHRcdH0pLmJpbmQodGhpcyk7XHJcblxyXG5cdFx0XHRidXR0b24ub25jbGljayA9IGJvdW5kRnVuY3Rpb25CdXR0b247XHJcblxyXG5cdFx0XHRjb250ZW50RWwuYXBwZW5kQ2hpbGQoY29udGVudEVsLmNyZWF0ZUVsKFwiaHJcIikpO1xyXG5cclxuXHRcdFx0Y29udGVudEVsLmFwcGVuZENoaWxkKGJ1dHRvbilcclxuXHJcblx0XHRcdGNvbnRlbnRFbC5hcHBlbmRDaGlsZChhbm90aGVyU2VhcmNoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG9uQ2xvc2UoKSB7XHJcblx0XHRsZXQge2NvbnRlbnRFbH0gPSB0aGlzO1xyXG5cdFx0Y29udGVudEVsLmVtcHR5KCk7XHJcblx0fVxyXG5cclxuXHRzYXZlVG9DbGlwYm9hcmQoKSB7XHJcblx0XHRpZiAodGhpcy5yZXN1bHRzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0bmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGhpcy5jcmVhdGVDbGlwYm9hcmRDb250ZW50KCkpO1xyXG5cdFx0XHRuZXcgTm90aWNlKFwiSm91cm5leSBjb3BpZWQgdG8gY2xpcGJvYXJkIVwiKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNyZWF0ZUNsaXBib2FyZENvbnRlbnQoKTogc3RyaW5nIHtcclxuXHRcdGxldCByZXN1bHQgPSBcIiMjIFRoZSBKb3VybmV5IEJldHdlZW4gXCIgKyB0aGlzLnJlc3VsdHMuZmlyc3QoKSAgKyBcIiBhbmQgXCIgKyB0aGlzLnJlc3VsdHMubGFzdCgpICsgXCJcXG5cIjtcclxuXHJcblx0XHQvLyBAdHMtaWdub3JlXHJcblx0XHR0aGlzLnJlc3VsdHMuZm9yRWFjaChmdW5jdGlvbih4KSB7XHJcblx0XHRcdHJlc3VsdCArPSBcIi0gXCIgKyB4ICsgXCJcXG5cIjtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHJldHVybiByZXN1bHQ7XHJcblx0fVxyXG59XHJcblxyXG5jbGFzcyBKb3VybmV5UGx1Z2luU2V0dGluZ3Mge1xyXG5cdHB1YmxpYyB1c2VGb3J3YXJkTGlua3M6IGJvb2xlYW47XHJcblx0cHVibGljIHVzZUJhY2tMaW5rczogYm9vbGVhbjtcclxuXHRwdWJsaWMgdXNlVGFnczogYm9vbGVhbjtcclxuXHRwdWJsaWMgc2tpcE1PQ3M6IGJvb2xlYW47XHJcblx0cHVibGljIE1PQ01heExpbmtzOiBudW1iZXI7XHJcblx0cHVibGljIGVuYWJsZUhpZ2hDb250cmFzdDogYm9vbGVhbjtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLnVzZUZvcndhcmRMaW5rcyA9IHRydWU7XHJcblx0XHR0aGlzLnVzZUJhY2tMaW5rcyA9IHRydWU7XHJcblx0XHR0aGlzLnVzZVRhZ3MgPSB0cnVlO1xyXG5cdFx0dGhpcy5za2lwTU9DcyA9IGZhbHNlO1xyXG5cdFx0dGhpcy5NT0NNYXhMaW5rcyA9IDMwO1xyXG5cdFx0dGhpcy5lbmFibGVIaWdoQ29udHJhc3QgPSBmYWxzZTtcclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIEpvdXJuZXlQbHVnaW5TZXR0aW5nc1RhYiBleHRlbmRzIFBsdWdpblNldHRpbmdUYWIge1xyXG5cdHByaXZhdGUgcmVhZG9ubHkgcGx1Z2luOiBKb3VybmV5UGx1Z2luO1xyXG5cdHB1YmxpYyBNT0NNYXhMaW5rc0NvdW50ZXI6IEhUTUxEaXZFbGVtZW50O1xyXG5cclxuXHRjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBKb3VybmV5UGx1Z2luKSB7XHJcblx0XHRzdXBlcihhcHAsIHBsdWdpbik7XHJcblx0XHR0aGlzLnBsdWdpbiA9IHBsdWdpbjtcclxuXHR9XHJcblxyXG5cdGRpc3BsYXkoKTogdm9pZCB7XHJcblx0XHRjb25zdCB7Y29udGFpbmVyRWx9ID0gdGhpcztcclxuXHJcblx0XHRjb250YWluZXJFbC5lbXB0eSgpO1xyXG5cclxuXHRcdGNvbnRhaW5lckVsLmNyZWF0ZUVsKFwiaDJcIiwge3RleHQ6IFwiSm91cm5leSBQbHVnaW4gU2V0dGluZ3NcIn0pO1xyXG5cclxuXHRcdG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG5cdFx0XHQuc2V0TmFtZShcIlVzZSBGb3J3YXJkLWxpbmtzXCIpXHJcblx0XHRcdC5zZXREZXNjKFwiSWYgc2V0LCBhbGxvd3MgdG8gdHJhdmVsIHVzaW5nIGZvcndhcmQtbGlua3MuIElmIHlvdSBoYXZlIGEgZ3JhcGggbGlrZSB0aGlzOiBBIC0+IEIgLT4gQyBhbmQgeW91IGFzayBhYm91dCB0aGUgc3RvcnkgYmV0d2VlbiBBIGFuZCBDLCBpdCB3aWxsIGdpdmUgeW91ICdBLCBCLCBDJyBzaW5jZSBBIGZvcndhcmQtbGlua3MgdG8gQiBhbmQgQiBmb3J3YXJkLWxpbmtzIHRvIENcIilcclxuXHRcdFx0LmFkZFRvZ2dsZSgodG9nZ2xlKSA9PlxyXG5cdFx0XHRcdHRvZ2dsZS5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy51c2VGb3J3YXJkTGlua3MpLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2V0dGluZ3MudXNlRm9yd2FyZExpbmtzID0gdmFsdWU7XHJcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zYXZlRGF0YSh0aGlzLnBsdWdpbi5zZXR0aW5ncyk7XHJcblx0XHRcdFx0fSksXHJcblx0XHRcdCk7XHJcblxyXG5cdFx0bmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcblx0XHRcdC5zZXROYW1lKFwiVXNlIEJhY2stbGlua3NcIilcclxuXHRcdFx0LnNldERlc2MoXCJJZiBzZXQsIGFsbG93cyB0byB0cmF2ZWwgdXNpbmcgYmFjay1saW5rcy4gSWYgeW91IGhhdmUgYSBncmFwaCBsaWtlIHRoaXM6IEEgLT4gQiAtPiBDIGFuZCB5b3UgYXNrIGFib3V0IHRoZSBzdG9yeSBiZXR3ZWVuIEMgYW5kIEEsIGl0IHdpbGwgZ2l2ZSB5b3UgJ0MsIEIsIEEnIHNpbmNlIEMgaGFzIGEgYmFjay1saW5rIGZyb20gQiBhbmQgQiBoYXMgYSBiYWNrLWxpbmsgZnJvbSBBXCIpXHJcblx0XHRcdC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT5cclxuXHRcdFx0XHR0b2dnbGUuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MudXNlQmFja0xpbmtzKS5vbkNoYW5nZSgodmFsdWUpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNldHRpbmdzLnVzZUJhY2tMaW5rcyA9IHZhbHVlO1xyXG5cdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2F2ZURhdGEodGhpcy5wbHVnaW4uc2V0dGluZ3MpO1xyXG5cdFx0XHRcdH0pLFxyXG5cdFx0XHQpO1xyXG5cclxuXHRcdGNvbnRhaW5lckVsLmNyZWF0ZUVsKFwiaDNcIiwge3RleHQ6IFwiSW5jbHVkZSBUYWdzXCJ9KTtcclxuXHJcblx0XHRuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuXHRcdFx0LnNldE5hbWUoXCJVc2UgVGFnc1wiKVxyXG5cdFx0XHQuc2V0RGVzYyhcIklmIHNldCwgYWxsb3dzIHRvIHRyYXZlbCB1c2luZyB0YWdzLiBcIilcclxuXHRcdFx0LmFkZFRvZ2dsZSgodG9nZ2xlKSA9PlxyXG5cdFx0XHRcdHRvZ2dsZS5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy51c2VUYWdzKS5vbkNoYW5nZSgodmFsdWUpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNldHRpbmdzLnVzZVRhZ3MgPSB2YWx1ZTtcclxuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNhdmVEYXRhKHRoaXMucGx1Z2luLnNldHRpbmdzKTtcclxuXHRcdFx0XHR9KSxcclxuXHRcdFx0KTtcclxuXHJcblx0XHRjb250YWluZXJFbC5jcmVhdGVFbChcImgzXCIsIHt0ZXh0OiBcIkF2b2lkIHRyYXZlbGluZyB2aWEgY2VydGFpbiBub3Rlc1wifSk7XHJcblxyXG5cdFx0bmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcblx0XHRcdC5zZXROYW1lKFwiVGFrZSB0aGUgc2NlbmljIHJvdXRlXCIpXHJcblx0XHRcdC5zZXREZXNjKFwiSWYgc2V0LCB3aWxsIHNraXAgJ2h1Yicgbm90ZXMgd2l0aCB0b28gbWFueSBsaW5rcyAoTU9DcykuIENvbmZpZ3VyZSBleGFjdGx5IGhvdyBtYW55IGxpbmtzIG1ha2UgYSBNT0MgYmVsb3cuXCIpXHJcblx0XHRcdC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT5cclxuXHRcdFx0XHR0b2dnbGUuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3Muc2tpcE1PQ3MpLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2V0dGluZ3Muc2tpcE1PQ3MgPSB2YWx1ZTtcclxuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNhdmVEYXRhKHRoaXMucGx1Z2luLnNldHRpbmdzKTtcclxuXHRcdFx0XHR9KSxcclxuXHRcdFx0KTtcclxuXHJcblx0XHRuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuXHRcdFx0LnNldE5hbWUoXCJIb3cgbWFueSBsaW5rcyBtYWtlIGEgTU9DP1wiKVxyXG5cdFx0XHQuc2V0RGVzYyhcIkNvbmZpZ3VyZSBhdCB3aGljaCBwb2ludCB0byBza2lwIGEgbm90ZSBiZWNhdXNlIGl0IGNvbnRhaW5zIHRvbyBtYW55IG91dC1ib3VuZCBsaW5rcy4gQXBwbGllcyBvbmx5IGlmICdUYWtlIHRoZSBzY2VuaWMgcm91dGUnIGFib3ZlIGlzIHNldC5cIilcclxuXHRcdFx0LmFkZFNsaWRlcigodG9nZ2xlKSA9PlxyXG5cdFx0XHRcdHRvZ2dsZS5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5NT0NNYXhMaW5rcykub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLk1PQ01heExpbmtzQ291bnRlci5zZXRUZXh0KFwiTWF4IGxpbmsgY291bnQ6IFwiICsgU3RyaW5nKHZhbHVlKSk7XHJcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zZXR0aW5ncy5NT0NNYXhMaW5rcyA9IHZhbHVlO1xyXG5cdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2F2ZURhdGEodGhpcy5wbHVnaW4uc2V0dGluZ3MpO1xyXG5cdFx0XHRcdH0pLFxyXG5cdFx0XHQpO1xyXG5cdFx0dGhpcy5NT0NNYXhMaW5rc0NvdW50ZXIgPSBjb250YWluZXJFbC5jcmVhdGVEaXYoe2NsczogJ21vYy1tYXgtbGlua3MtY291bnRlcicsIHRleHQ6IFwiTWF4IGxpbmsgY291bnQ6IFwiICsgdGhpcy5wbHVnaW4uc2V0dGluZ3MuTU9DTWF4TGlua3N9KTtcclxuXHJcblx0XHRjb250YWluZXJFbC5jcmVhdGVFbChcImgzXCIsIHt0ZXh0OiBcIlZpc3VhbCBTZXR0aW5nc1wifSk7XHJcblxyXG5cdFx0bmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcblx0XHRcdC5zZXROYW1lKFwiRW5hYmxlIEhpZ2ggQ29udHJhc3RcIilcclxuXHRcdFx0LnNldERlc2MoXCJJZiBzZXQsIHdpbGwgaW5jcmVhc2UgdGhlIGNvbnRyYXN0IHRvIG1ha2UgdGhlIHJlc3VsdC1saXN0IGVhc2llciB0byByZWFkLlwiKVxyXG5cdFx0XHQuYWRkVG9nZ2xlKCh0b2dnbGUpID0+XHJcblx0XHRcdFx0dG9nZ2xlLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmVuYWJsZUhpZ2hDb250cmFzdCkub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zZXR0aW5ncy5lbmFibGVIaWdoQ29udHJhc3QgPSB2YWx1ZTtcclxuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNhdmVEYXRhKHRoaXMucGx1Z2luLnNldHRpbmdzKTtcclxuXHRcdFx0XHR9KSxcclxuXHRcdFx0KTtcclxuXHJcblxyXG5cdH1cclxufVxyXG4iXSwibmFtZXMiOlsiZXEiLCJhc3NvY0luZGV4T2YiLCJsaXN0Q2FjaGVDbGVhciIsImxpc3RDYWNoZURlbGV0ZSIsImxpc3RDYWNoZUdldCIsImxpc3RDYWNoZUhhcyIsImxpc3RDYWNoZVNldCIsIkxpc3RDYWNoZSIsImdsb2JhbCIsImZyZWVHbG9iYWwiLCJTeW1ib2wiLCJyb290Iiwib2JqZWN0UHJvdG8iLCJuYXRpdmVPYmplY3RUb1N0cmluZyIsInN5bVRvU3RyaW5nVGFnIiwiZ2V0UmF3VGFnIiwib2JqZWN0VG9TdHJpbmciLCJpc09iamVjdCIsImJhc2VHZXRUYWciLCJjb3JlSnNEYXRhIiwiZnVuY1Byb3RvIiwiZnVuY1RvU3RyaW5nIiwiaGFzT3duUHJvcGVydHkiLCJpc01hc2tlZCIsImlzRnVuY3Rpb24iLCJ0b1NvdXJjZSIsImdldFZhbHVlIiwiYmFzZUlzTmF0aXZlIiwiZ2V0TmF0aXZlIiwibmF0aXZlQ3JlYXRlIiwiSEFTSF9VTkRFRklORUQiLCJoYXNoQ2xlYXIiLCJoYXNoRGVsZXRlIiwiaGFzaEdldCIsImhhc2hIYXMiLCJoYXNoU2V0IiwiSGFzaCIsIk1hcCIsImlzS2V5YWJsZSIsImdldE1hcERhdGEiLCJtYXBDYWNoZUNsZWFyIiwibWFwQ2FjaGVEZWxldGUiLCJtYXBDYWNoZUdldCIsIm1hcENhY2hlSGFzIiwibWFwQ2FjaGVTZXQiLCJNYXBDYWNoZSIsInN0YWNrQ2xlYXIiLCJzdGFja0RlbGV0ZSIsInN0YWNrR2V0Iiwic3RhY2tIYXMiLCJzdGFja1NldCIsImRlZmluZVByb3BlcnR5IiwiYmFzZUFzc2lnblZhbHVlIiwiYXNzaWduVmFsdWUiLCJpc09iamVjdExpa2UiLCJiYXNlSXNBcmd1bWVudHMiLCJzdHViRmFsc2UiLCJNQVhfU0FGRV9JTlRFR0VSIiwiYXJnc1RhZyIsImZ1bmNUYWciLCJpc0xlbmd0aCIsIm5vZGVVdGlsIiwiYmFzZVVuYXJ5IiwiYmFzZUlzVHlwZWRBcnJheSIsImlzQXJyYXkiLCJpc0FyZ3VtZW50cyIsImlzQnVmZmVyIiwiaXNUeXBlZEFycmF5IiwiYmFzZVRpbWVzIiwiaXNJbmRleCIsIm92ZXJBcmciLCJpc1Byb3RvdHlwZSIsIm5hdGl2ZUtleXMiLCJpc0FycmF5TGlrZSIsImFycmF5TGlrZUtleXMiLCJiYXNlS2V5cyIsImNvcHlPYmplY3QiLCJrZXlzIiwibmF0aXZlS2V5c0luIiwiYmFzZUtleXNJbiIsImtleXNJbiIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwic3R1YkFycmF5IiwiYXJyYXlGaWx0ZXIiLCJnZXRTeW1ib2xzIiwibmF0aXZlR2V0U3ltYm9scyIsImFycmF5UHVzaCIsImdldFByb3RvdHlwZSIsImdldFN5bWJvbHNJbiIsImJhc2VHZXRBbGxLZXlzIiwiUHJvbWlzZSIsIm1hcFRhZyIsIm9iamVjdFRhZyIsInNldFRhZyIsIndlYWtNYXBUYWciLCJkYXRhVmlld1RhZyIsIkRhdGFWaWV3IiwiU2V0IiwiV2Vha01hcCIsIlVpbnQ4QXJyYXkiLCJjbG9uZUFycmF5QnVmZmVyIiwiYm9vbFRhZyIsImRhdGVUYWciLCJudW1iZXJUYWciLCJyZWdleHBUYWciLCJzdHJpbmdUYWciLCJhcnJheUJ1ZmZlclRhZyIsImZsb2F0MzJUYWciLCJmbG9hdDY0VGFnIiwiaW50OFRhZyIsImludDE2VGFnIiwiaW50MzJUYWciLCJ1aW50OFRhZyIsInVpbnQ4Q2xhbXBlZFRhZyIsInVpbnQxNlRhZyIsInVpbnQzMlRhZyIsImNsb25lRGF0YVZpZXciLCJjbG9uZVR5cGVkQXJyYXkiLCJjbG9uZVJlZ0V4cCIsImNsb25lU3ltYm9sIiwiYmFzZUNyZWF0ZSIsImdldFRhZyIsImJhc2VJc01hcCIsImJhc2VJc1NldCIsImFycmF5VGFnIiwiZXJyb3JUYWciLCJnZW5UYWciLCJzeW1ib2xUYWciLCJpbml0Q2xvbmVBcnJheSIsImNvcHlBcnJheSIsImNsb25lQnVmZmVyIiwiaW5pdENsb25lT2JqZWN0IiwiY29weVN5bWJvbHNJbiIsImJhc2VBc3NpZ25JbiIsImNvcHlTeW1ib2xzIiwiYmFzZUFzc2lnbiIsImluaXRDbG9uZUJ5VGFnIiwiU3RhY2siLCJpc1NldCIsImlzTWFwIiwiZ2V0QWxsS2V5c0luIiwiZ2V0QWxsS2V5cyIsImFycmF5RWFjaCIsIkNMT05FX1NZTUJPTFNfRkxBRyIsImJhc2VDbG9uZSIsImNyZWF0ZUJhc2VGb3IiLCJiYXNlRm9yIiwiY3JlYXRlQmFzZUVhY2giLCJiYXNlRm9yT3duIiwiaWRlbnRpdHkiLCJiYXNlRWFjaCIsImNhc3RGdW5jdGlvbiIsInJlcXVpcmUkJDAiLCJzZXRDYWNoZUFkZCIsInNldENhY2hlSGFzIiwiU2V0Q2FjaGUiLCJhcnJheVNvbWUiLCJjYWNoZUhhcyIsIkNPTVBBUkVfUEFSVElBTF9GTEFHIiwiQ09NUEFSRV9VTk9SREVSRURfRkxBRyIsInN5bWJvbFByb3RvIiwic3ltYm9sVmFsdWVPZiIsIm1hcFRvQXJyYXkiLCJzZXRUb0FycmF5IiwiZXF1YWxBcnJheXMiLCJlcXVhbEJ5VGFnIiwiZXF1YWxPYmplY3RzIiwiYmFzZUlzRXF1YWxEZWVwIiwiYmFzZUlzRXF1YWwiLCJpc1N0cmljdENvbXBhcmFibGUiLCJnZXRNYXRjaERhdGEiLCJtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZSIsImJhc2VJc01hdGNoIiwiaXNTeW1ib2wiLCJtZW1vaXplIiwibWVtb2l6ZUNhcHBlZCIsImFycmF5TWFwIiwiYmFzZVRvU3RyaW5nIiwiaXNLZXkiLCJzdHJpbmdUb1BhdGgiLCJ0b1N0cmluZyIsIklORklOSVRZIiwiY2FzdFBhdGgiLCJ0b0tleSIsImJhc2VHZXQiLCJoYXNQYXRoIiwiYmFzZUhhc0luIiwiZ2V0IiwiaGFzSW4iLCJiYXNlUHJvcGVydHkiLCJiYXNlUHJvcGVydHlEZWVwIiwiYmFzZU1hdGNoZXNQcm9wZXJ0eSIsImJhc2VNYXRjaGVzIiwicHJvcGVydHkiLCJiYXNlRmlsdGVyIiwiYmFzZUl0ZXJhdGVlIiwiYmFzZUhhcyIsImJhc2VNYXAiLCJhcnJheVJlZHVjZSIsImJhc2VSZWR1Y2UiLCJyc0FzdHJhbFJhbmdlIiwicnNDb21ib01hcmtzUmFuZ2UiLCJyZUNvbWJvSGFsZk1hcmtzUmFuZ2UiLCJyc0NvbWJvU3ltYm9sc1JhbmdlIiwicnNDb21ib1JhbmdlIiwicnNWYXJSYW5nZSIsInJzWldKIiwiaGFzVW5pY29kZSIsInVuaWNvZGVTaXplIiwiYXNjaWlTaXplIiwiaXNTdHJpbmciLCJzdHJpbmdTaXplIiwiaXNGbGF0dGVuYWJsZSIsImFwcGx5IiwiY29uc3RhbnQiLCJzaG9ydE91dCIsImJhc2VTZXRUb1N0cmluZyIsInNldFRvU3RyaW5nIiwib3ZlclJlc3QiLCJzdHJpY3RJbmRleE9mIiwiYmFzZUZpbmRJbmRleCIsImJhc2VJc05hTiIsImJhc2VJbmRleE9mIiwibm9vcCIsIkxBUkdFX0FSUkFZX1NJWkUiLCJhcnJheUluY2x1ZGVzIiwiYXJyYXlJbmNsdWRlc1dpdGgiLCJjcmVhdGVTZXQiLCJiYXNlUmVzdCIsImJhc2VVbmlxIiwiYmFzZUZsYXR0ZW4iLCJpc0FycmF5TGlrZU9iamVjdCIsImJhc2VWYWx1ZXMiLCJyZXF1aXJlIiwicmVxdWlyZSQkMSIsInJlcXVpcmUkJDIiLCJyZXF1aXJlJCQzIiwicmVxdWlyZSQkNCIsInJlcXVpcmUkJDUiLCJyZXF1aXJlJCQ2IiwicmVxdWlyZSQkNyIsInJlcXVpcmUkJDgiLCJyZXF1aXJlJCQ5IiwicmVxdWlyZSQkMTAiLCJyZXF1aXJlJCQxMSIsInJlcXVpcmUkJDEyIiwicmVxdWlyZSQkMTMiLCJyZXF1aXJlJCQxNCIsInJlcXVpcmUkJDE1IiwiXyIsIkdyYXBoIiwiUHJpb3JpdHlRdWV1ZSIsImRpamtzdHJhIiwidGFyamFuIiwiREVGQVVMVF9XRUlHSFRfRlVOQyIsInRvcHNvcnQiLCJkZnMiLCJhZGRJY29uIiwiZ3JhcGhsaWIuYWxnIiwiUGx1Z2luIiwiRHJvcGRvd25Db21wb25lbnQiLCJNb2RhbCIsIk5vdGljZSIsIlNldHRpbmciLCJQbHVnaW5TZXR0aW5nVGFiIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGFBQWEsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDbkMsSUFBSSxhQUFhLEdBQUcsTUFBTSxDQUFDLGNBQWM7QUFDekMsU0FBUyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsWUFBWSxLQUFLLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ3BGLFFBQVEsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQzFHLElBQUksT0FBTyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQy9CLENBQUMsQ0FBQztBQUNGO0FBQ08sU0FBUyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNoQyxJQUFJLElBQUksT0FBTyxDQUFDLEtBQUssVUFBVSxJQUFJLENBQUMsS0FBSyxJQUFJO0FBQzdDLFFBQVEsTUFBTSxJQUFJLFNBQVMsQ0FBQyxzQkFBc0IsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsK0JBQStCLENBQUMsQ0FBQztBQUNsRyxJQUFJLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDeEIsSUFBSSxTQUFTLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQUU7QUFDM0MsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBSyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pGLENBQUM7QUF1Q0Q7QUFDTyxTQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUU7QUFDN0QsSUFBSSxTQUFTLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLEtBQUssWUFBWSxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLFVBQVUsT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7QUFDaEgsSUFBSSxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRSxVQUFVLE9BQU8sRUFBRSxNQUFNLEVBQUU7QUFDL0QsUUFBUSxTQUFTLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0FBQ25HLFFBQVEsU0FBUyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0FBQ3RHLFFBQVEsU0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFO0FBQ3RILFFBQVEsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFVBQVUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlFLEtBQUssQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUNEO0FBQ08sU0FBUyxXQUFXLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRTtBQUMzQyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDckgsSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxNQUFNLEtBQUssVUFBVSxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsV0FBVyxFQUFFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUM3SixJQUFJLFNBQVMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sVUFBVSxDQUFDLEVBQUUsRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ3RFLElBQUksU0FBUyxJQUFJLENBQUMsRUFBRSxFQUFFO0FBQ3RCLFFBQVEsSUFBSSxDQUFDLEVBQUUsTUFBTSxJQUFJLFNBQVMsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0FBQ3RFLFFBQVEsT0FBTyxDQUFDLEVBQUUsSUFBSTtBQUN0QixZQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFD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LEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFO0FBQzdCLElBQUksSUFBSSxVQUFVLEdBQUcsU0FBUyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDekUsSUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDMUIsSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7QUFDMUIsTUFBTSxJQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDMUMsTUFBTSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0IsTUFBTUEsUUFBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsS0FBSyxFQUFFO0FBQy9DLFFBQVEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM5QixPQUFPLENBQUMsQ0FBQztBQUNULE1BQU0sT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQy9CLEtBQUs7QUFDTCxJQUFJQSxRQUFDLENBQUMsSUFBSSxDQUFDQSxRQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUM1QyxJQUFJLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN2QixJQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMxQixJQUFJQSxRQUFDLENBQUMsSUFBSSxDQUFDQSxRQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUM3QyxJQUFJLE9BQU8sSUFBSSxDQUFD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Q0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDOUIsS0FBSztBQUNMLEdBQUcsTUFBTSxJQUFJLENBQUMsS0FBSyxVQUFVLEVBQUU7QUFDL0IsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUN4QixHQUFHLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO0FBQzlCLElBQUksT0FBTyxFQUFFLENBQUM7QUFDZCxHQUFHO0FBQ0gsQ0FBQyxDQUFDO0FBQ0Y7QUFDQSxLQUFLLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUMsRUFBRTtBQUMzQyxFQUFFLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUIsRUFBRSxJQUFJLE1BQU0sRUFBRTtBQUNkLElBQUksT0FBT0EsUUFBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMxQixHQUFHO0FBQ0gsQ0FBQyxDQUFDO0FBQ0Y7QUFDQSxLQUFLLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUMsRUFBRTtBQUN6QyxFQUFFLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDNUIsRUFBRSxJQUFJLEtBQUssRUFBRTtBQUNiLElBQUksT0FBT0EsUUFBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN6QixHQUFHO0FBQ0gsQ0FBQyxDQUFDO0FBQ0Y7QUFDQSxLQUFLLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsRUFBRTtBQUN4QyxFQUFFLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkMsRUFBRSxJQUFJLEtBQUssRUFBRTtBQUNiLElBQUksT0FBT0EsUUFBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzlD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
