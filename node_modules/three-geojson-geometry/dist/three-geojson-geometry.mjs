import { BufferGeometry, Float32BufferAttribute } from 'three';
import { flatten } from 'earcut';
import { geoDistance, geoInterpolate } from 'd3-geo';
import { interpolateNumber } from 'd3-interpolate';

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
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _createClass(e, r, t) {
  return Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e) {
      t && (r = t);
      var n = 0,
        F = function () {};
      return {
        s: F,
        n: function () {
          return n >= r.length ? {
            done: !0
          } : {
            done: !1,
            value: r[n++]
          };
        },
        e: function (r) {
          throw r;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    a = !0,
    u = !1;
  return {
    s: function () {
      t = t.call(r);
    },
    n: function () {
      var r = t.next();
      return a = r.done, r;
    },
    e: function (r) {
      u = !0, o = r;
    },
    f: function () {
      try {
        a || null == t.return || t.return();
      } finally {
        if (u) throw o;
      }
    }
  };
}
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && _setPrototypeOf(t, e);
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function () {
    return !!t;
  })();
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
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
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
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == typeof e || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

var interpolateLine = function interpolateLine() {
  var lineCoords = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var maxDegDistance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var result = [];
  var prevPnt = null;
  lineCoords.forEach(function (pnt) {
    if (prevPnt) {
      var dist = geoDistance(pnt, prevPnt) * 180 / Math.PI;
      if (dist > maxDegDistance) {
        var geoInterpol = geoInterpolate(prevPnt, pnt);
        var altInterpol = prevPnt.length > 2 || pnt.length > 2 ? interpolateNumber(prevPnt[2] || 0, pnt[2] || 0) : null;
        var interpol = altInterpol ? function (t) {
          return [].concat(_toConsumableArray(geoInterpol(t)), [altInterpol(t)]);
        } : geoInterpol;
        var tStep = 1 / Math.ceil(dist / maxDegDistance);
        var t = tStep;
        while (t < 1) {
          result.push(interpol(t));
          t += tStep;
        }
      }
    }
    result.push(prevPnt = pnt);
  });
  return result;
};

var THREE = typeof window !== 'undefined' && window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
: {
  BufferGeometry: BufferGeometry,
  Float32BufferAttribute: Float32BufferAttribute
};

// support both modes for backwards threejs compatibility
var setAttributeFn = new THREE.BufferGeometry().setAttribute ? 'setAttribute' : 'addAttribute';
var GeoJsonGeometry = /*#__PURE__*/function (_THREE$BufferGeometry) {
  function GeoJsonGeometry(geoJson) {
    var _this;
    var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var resolution = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;
    _classCallCheck(this, GeoJsonGeometry);
    _this = _callSuper(this, GeoJsonGeometry);
    _this.type = 'GeoJsonGeometry';
    _this.parameters = {
      geoJson: geoJson,
      radius: radius,
      resolution: resolution
    };

    // process various geometry types
    var groups = ({
      Point: genPoint,
      MultiPoint: genMultiPoint,
      LineString: genLineString,
      MultiLineString: genMultiLineString,
      Polygon: genPolygon,
      MultiPolygon: genMultiPolygon
    }[geoJson.type] || function () {
      return [];
    })(geoJson.coordinates, radius);

    // concat groups
    var indices = [],
      vertices = [];
    var groupCnt = 0;
    groups.forEach(function (newG) {
      var prevIndCnt = indices.length;
      concatGroup({
        indices: indices,
        vertices: vertices
      }, newG);
      _this.addGroup(prevIndCnt, indices.length - prevIndCnt, groupCnt++);
    });

    // build geometry
    indices.length && _this.setIndex(indices);
    vertices.length && _this[setAttributeFn]('position', new THREE.Float32BufferAttribute(vertices, 3));

    //

    function genPoint(coords, r) {
      var vertices = polar2Cartesian(coords[1], coords[0], r + (coords[2] || 0));
      var indices = [];
      return [{
        vertices: vertices,
        indices: indices
      }];
    }
    function genMultiPoint(coords, r) {
      var result = {
        vertices: [],
        indices: []
      };
      coords.map(function (c) {
        return genPoint(c, r);
      }).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 1),
          newPnt = _ref2[0];
        concatGroup(result, newPnt);
      });
      return [result];
    }
    function genLineString(coords, r) {
      var coords3d = interpolateLine(coords, resolution).map(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 3),
          lng = _ref4[0],
          lat = _ref4[1],
          _ref4$ = _ref4[2],
          alt = _ref4$ === void 0 ? 0 : _ref4$;
        return polar2Cartesian(lat, lng, r + alt);
      });
      var _earcutFlatten = flatten([coords3d]),
        vertices = _earcutFlatten.vertices;
      var numPoints = Math.round(vertices.length / 3);
      var indices = [];
      for (var vIdx = 1; vIdx < numPoints; vIdx++) {
        indices.push(vIdx - 1, vIdx);
      }
      return [{
        vertices: vertices,
        indices: indices
      }];
    }
    function genMultiLineString(coords, r) {
      var result = {
        vertices: [],
        indices: []
      };
      coords.map(function (c) {
        return genLineString(c, r);
      }).forEach(function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 1),
          newLine = _ref6[0];
        concatGroup(result, newLine);
      });
      return [result];
    }
    function genPolygon(coords, r) {
      var coords3d = coords.map(function (coordsSegment) {
        return interpolateLine(coordsSegment, resolution).map(function (_ref7) {
          var _ref8 = _slicedToArray(_ref7, 3),
            lng = _ref8[0],
            lat = _ref8[1],
            _ref8$ = _ref8[2],
            alt = _ref8$ === void 0 ? 0 : _ref8$;
          return polar2Cartesian(lat, lng, r + alt);
        });
      });

      // Each point generates 3 vertice items (x,y,z).
      var _earcutFlatten2 = flatten(coords3d),
        vertices = _earcutFlatten2.vertices,
        holes = _earcutFlatten2.holes;
      var firstHoleIdx = holes[0] || Infinity;
      var outerVertices = vertices.slice(0, firstHoleIdx * 3);
      var holeVertices = vertices.slice(firstHoleIdx * 3);
      var holesIdx = new Set(holes);
      var numPoints = Math.round(vertices.length / 3);
      var outerIndices = [],
        holeIndices = [];
      for (var vIdx = 1; vIdx < numPoints; vIdx++) {
        if (!holesIdx.has(vIdx)) {
          if (vIdx < firstHoleIdx) {
            outerIndices.push(vIdx - 1, vIdx);
          } else {
            holeIndices.push(vIdx - 1 - firstHoleIdx, vIdx - firstHoleIdx);
          }
        }
      }
      var groups = [{
        indices: outerIndices,
        vertices: outerVertices
      }];
      if (holes.length) {
        groups.push({
          indices: holeIndices,
          vertices: holeVertices
        });
      }
      return groups;
    }
    function genMultiPolygon(coords, r) {
      var outer = {
        vertices: [],
        indices: []
      };
      var holes = {
        vertices: [],
        indices: []
      };
      coords.map(function (c) {
        return genPolygon(c, r);
      }).forEach(function (_ref9) {
        var _ref10 = _slicedToArray(_ref9, 2),
          newOuter = _ref10[0],
          newHoles = _ref10[1];
        concatGroup(outer, newOuter);
        newHoles && concatGroup(holes, newHoles);
      });
      var groups = [outer];
      holes.vertices.length && groups.push(holes);
      return groups;
    }
    return _this;
  }
  _inherits(GeoJsonGeometry, _THREE$BufferGeometry);
  return _createClass(GeoJsonGeometry);
}(THREE.BufferGeometry); //
function concatGroup(main, extra) {
  var prevVertCnt = Math.round(main.vertices.length / 3);
  concatArr(main.vertices, extra.vertices);
  concatArr(main.indices, extra.indices.map(function (ind) {
    return ind + prevVertCnt;
  }));
}
function concatArr(target, src) {
  var _iterator = _createForOfIteratorHelper(src),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var e = _step.value;
      target.push(e);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
function polar2Cartesian(lat, lng) {
  var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var phi = (90 - lat) * Math.PI / 180;
  var theta = (90 - lng) * Math.PI / 180;
  return [r * Math.sin(phi) * Math.cos(theta),
  // x
  r * Math.cos(phi),
  // y
  r * Math.sin(phi) * Math.sin(theta) // z
  ];
}

export { GeoJsonGeometry as default };
