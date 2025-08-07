// Version 2.1.1 three-geojson-geometry - https://github.com/vasturiano/three-geojson-geometry
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('three')) :
  typeof define === 'function' && define.amd ? define(['three'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.GeoJsonGeometry = factory(global.THREE));
})(this, (function (three) { 'use strict';

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

  // turn a polygon in a multi-dimensional array form (e.g. as in GeoJSON) into a form Earcut accepts
  function flatten(data) {
      const vertices = [];
      const holes = [];
      const dimensions = data[0][0].length;
      let holeIndex = 0;
      let prevLen = 0;

      for (const ring of data) {
          for (const p of ring) {
              for (let d = 0; d < dimensions; d++) vertices.push(p[d]);
          }
          if (prevLen) {
              holeIndex += prevLen;
              holes.push(holeIndex);
          }
          prevLen = ring.length;
      }
      return {vertices, holes, dimensions};
  }

  // https://github.com/python/cpython/blob/a74eea238f5baba15797e2e8b570d153bc8690a7/Modules/mathmodule.c#L1423
  class Adder {
    constructor() {
      this._partials = new Float64Array(32);
      this._n = 0;
    }
    add(x) {
      const p = this._partials;
      let i = 0;
      for (let j = 0; j < this._n && j < 32; j++) {
        const y = p[j],
          hi = x + y,
          lo = Math.abs(x) < Math.abs(y) ? x - (hi - y) : y - (hi - x);
        if (lo) p[i++] = lo;
        x = hi;
      }
      p[i] = x;
      this._n = i + 1;
      return this;
    }
    valueOf() {
      const p = this._partials;
      let n = this._n, x, y, lo, hi = 0;
      if (n > 0) {
        hi = p[--n];
        while (n > 0) {
          x = hi;
          y = p[--n];
          hi = x + y;
          lo = y - (hi - x);
          if (lo) break;
        }
        if (n > 0 && ((lo < 0 && p[n - 1] < 0) || (lo > 0 && p[n - 1] > 0))) {
          y = lo * 2;
          x = hi + y;
          if (y == x - hi) hi = x;
        }
      }
      return hi;
    }
  }

  var pi = Math.PI;
  var halfPi = pi / 2;

  var degrees = 180 / pi;
  var radians = pi / 180;

  var abs = Math.abs;
  var atan2 = Math.atan2;
  var cos = Math.cos;
  var sin = Math.sin;
  var sqrt = Math.sqrt;

  function asin(x) {
    return x > 1 ? halfPi : x < -1 ? -halfPi : Math.asin(x);
  }

  function haversin(x) {
    return (x = sin(x / 2)) * x;
  }

  function noop() {}

  function streamGeometry(geometry, stream) {
    if (geometry && streamGeometryType.hasOwnProperty(geometry.type)) {
      streamGeometryType[geometry.type](geometry, stream);
    }
  }

  var streamObjectType = {
    Feature: function(object, stream) {
      streamGeometry(object.geometry, stream);
    },
    FeatureCollection: function(object, stream) {
      var features = object.features, i = -1, n = features.length;
      while (++i < n) streamGeometry(features[i].geometry, stream);
    }
  };

  var streamGeometryType = {
    Sphere: function(object, stream) {
      stream.sphere();
    },
    Point: function(object, stream) {
      object = object.coordinates;
      stream.point(object[0], object[1], object[2]);
    },
    MultiPoint: function(object, stream) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) object = coordinates[i], stream.point(object[0], object[1], object[2]);
    },
    LineString: function(object, stream) {
      streamLine(object.coordinates, stream, 0);
    },
    MultiLineString: function(object, stream) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) streamLine(coordinates[i], stream, 0);
    },
    Polygon: function(object, stream) {
      streamPolygon(object.coordinates, stream);
    },
    MultiPolygon: function(object, stream) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) streamPolygon(coordinates[i], stream);
    },
    GeometryCollection: function(object, stream) {
      var geometries = object.geometries, i = -1, n = geometries.length;
      while (++i < n) streamGeometry(geometries[i], stream);
    }
  };

  function streamLine(coordinates, stream, closed) {
    var i = -1, n = coordinates.length - closed, coordinate;
    stream.lineStart();
    while (++i < n) coordinate = coordinates[i], stream.point(coordinate[0], coordinate[1], coordinate[2]);
    stream.lineEnd();
  }

  function streamPolygon(coordinates, stream) {
    var i = -1, n = coordinates.length;
    stream.polygonStart();
    while (++i < n) streamLine(coordinates[i], stream, 1);
    stream.polygonEnd();
  }

  function geoStream(object, stream) {
    if (streamObjectType.hasOwnProperty(object.type)) {
      streamObjectType[object.type](object, stream);
    } else {
      streamGeometry(object, stream);
    }
  }

  var lengthSum,
      lambda0,
      sinPhi0,
      cosPhi0;

  var lengthStream = {
    sphere: noop,
    point: noop,
    lineStart: lengthLineStart,
    lineEnd: noop,
    polygonStart: noop,
    polygonEnd: noop
  };

  function lengthLineStart() {
    lengthStream.point = lengthPointFirst;
    lengthStream.lineEnd = lengthLineEnd;
  }

  function lengthLineEnd() {
    lengthStream.point = lengthStream.lineEnd = noop;
  }

  function lengthPointFirst(lambda, phi) {
    lambda *= radians, phi *= radians;
    lambda0 = lambda, sinPhi0 = sin(phi), cosPhi0 = cos(phi);
    lengthStream.point = lengthPoint;
  }

  function lengthPoint(lambda, phi) {
    lambda *= radians, phi *= radians;
    var sinPhi = sin(phi),
        cosPhi = cos(phi),
        delta = abs(lambda - lambda0),
        cosDelta = cos(delta),
        sinDelta = sin(delta),
        x = cosPhi * sinDelta,
        y = cosPhi0 * sinPhi - sinPhi0 * cosPhi * cosDelta,
        z = sinPhi0 * sinPhi + cosPhi0 * cosPhi * cosDelta;
    lengthSum.add(atan2(sqrt(x * x + y * y), z));
    lambda0 = lambda, sinPhi0 = sinPhi, cosPhi0 = cosPhi;
  }

  function length(object) {
    lengthSum = new Adder();
    geoStream(object, lengthStream);
    return +lengthSum;
  }

  var coordinates = [null, null],
      object = {type: "LineString", coordinates: coordinates};

  function geoDistance(a, b) {
    coordinates[0] = a;
    coordinates[1] = b;
    return length(object);
  }

  function geoInterpolate(a, b) {
    var x0 = a[0] * radians,
        y0 = a[1] * radians,
        x1 = b[0] * radians,
        y1 = b[1] * radians,
        cy0 = cos(y0),
        sy0 = sin(y0),
        cy1 = cos(y1),
        sy1 = sin(y1),
        kx0 = cy0 * cos(x0),
        ky0 = cy0 * sin(x0),
        kx1 = cy1 * cos(x1),
        ky1 = cy1 * sin(x1),
        d = 2 * asin(sqrt(haversin(y1 - y0) + cy0 * cy1 * haversin(x1 - x0))),
        k = sin(d);

    var interpolate = d ? function(t) {
      var B = sin(t *= d) / k,
          A = sin(d - t) / k,
          x = A * kx0 + B * kx1,
          y = A * ky0 + B * ky1,
          z = A * sy0 + B * sy1;
      return [
        atan2(y, x) * degrees,
        atan2(z, sqrt(x * x + y * y)) * degrees
      ];
    } : function() {
      return [x0 * degrees, y0 * degrees];
    };

    interpolate.distance = d;

    return interpolate;
  }

  function interpolateNumber(a, b) {
    return a = +a, b = +b, function(t) {
      return a * (1 - t) + b * t;
    };
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
    BufferGeometry: three.BufferGeometry,
    Float32BufferAttribute: three.Float32BufferAttribute
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

  return GeoJsonGeometry;

}));
//# sourceMappingURL=three-geojson-geometry.js.map
