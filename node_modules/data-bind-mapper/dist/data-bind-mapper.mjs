import accessorFn from 'accessor-fn';

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _assertClassBrand(e, t, n) {
  if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
function _checkPrivateRedeclaration(e, t) {
  if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _classPrivateFieldGet2(s, a) {
  return s.get(_assertClassBrand(s, a));
}
function _classPrivateFieldInitSpec(e, t, a) {
  _checkPrivateRedeclaration(e, t), t.set(e, a);
}
function _classPrivateFieldSet2(s, a, r) {
  return s.set(_assertClassBrand(s, a), r), r;
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = true,
      o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = true, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (String )(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

var _dataMap = /*#__PURE__*/new WeakMap();
var _objMap = /*#__PURE__*/new WeakMap();
var _id = /*#__PURE__*/new WeakMap();
var _createObj = /*#__PURE__*/new WeakMap();
var _updateObj = /*#__PURE__*/new WeakMap();
var _removeObj = /*#__PURE__*/new WeakMap();
var DataBindMapper = /*#__PURE__*/function () {
  function DataBindMapper() {
    _classCallCheck(this, DataBindMapper);
    _classPrivateFieldInitSpec(this, _dataMap, new Map());
    _classPrivateFieldInitSpec(this, _objMap, new Map());
    _classPrivateFieldInitSpec(this, _id, function (d) {
      return d;
    });
    _classPrivateFieldInitSpec(this, _createObj, function () {
      return {};
    });
    _classPrivateFieldInitSpec(this, _updateObj, function () {});
    _classPrivateFieldInitSpec(this, _removeObj, function () {});
  }
  return _createClass(DataBindMapper, [{
    key: "getObj",
    value: function getObj(d) {
      return _classPrivateFieldGet2(_dataMap, this).get(_classPrivateFieldGet2(_id, this).call(this, d));
    }
  }, {
    key: "getData",
    value: function getData(o) {
      return _classPrivateFieldGet2(_objMap, this).get(o);
    }
  }, {
    key: "entries",
    value: function entries() {
      return _toConsumableArray(_classPrivateFieldGet2(_objMap, this).entries()).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          o = _ref2[0],
          d = _ref2[1];
        return [d, o];
      });
    }
  }, {
    key: "id",
    value: function id(p) {
      _classPrivateFieldSet2(_id, this, accessorFn(p));
      return this;
    }
  }, {
    key: "onCreateObj",
    value: function onCreateObj(fn) {
      _classPrivateFieldSet2(_createObj, this, fn);
      return this;
    }
  }, {
    key: "onUpdateObj",
    value: function onUpdateObj(fn) {
      _classPrivateFieldSet2(_updateObj, this, fn);
      return this;
    }
  }, {
    key: "onRemoveObj",
    value: function onRemoveObj(fn) {
      _classPrivateFieldSet2(_removeObj, this, fn);
      return this;
    }
  }, {
    key: "digest",
    value: function digest(data) {
      var _this = this;
      data.filter(function (d) {
        return !_classPrivateFieldGet2(_dataMap, _this).has(_classPrivateFieldGet2(_id, _this).call(_this, d));
      }).forEach(function (d) {
        var obj = _classPrivateFieldGet2(_createObj, _this).call(_this, d);
        _classPrivateFieldGet2(_dataMap, _this).set(_classPrivateFieldGet2(_id, _this).call(_this, d), obj);
        _classPrivateFieldGet2(_objMap, _this).set(obj, d);
      });
      var dataIdsMap = new Map(data.map(function (d) {
        return [_classPrivateFieldGet2(_id, _this).call(_this, d), d];
      }));
      _classPrivateFieldGet2(_dataMap, this).forEach(function (o, dId) {
        if (!dataIdsMap.has(dId)) {
          _classPrivateFieldGet2(_removeObj, _this).call(_this, o, dId);
          _classPrivateFieldGet2(_dataMap, _this)["delete"](dId);
          _classPrivateFieldGet2(_objMap, _this)["delete"](o);
        } else {
          _classPrivateFieldGet2(_updateObj, _this).call(_this, o, dataIdsMap.get(dId));
        }
      });
      return this;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.digest([]);
      return this;
    }
  }]);
}();

export { DataBindMapper as default };
