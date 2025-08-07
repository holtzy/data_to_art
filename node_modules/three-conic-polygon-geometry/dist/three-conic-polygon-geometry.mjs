import { BufferGeometry, Float32BufferAttribute } from 'three';
import { merge, extent, mean } from 'd3-array';
import earcut, { flatten } from 'earcut';
import Delaunator from 'delaunator';
import turfPointInPolygon from '@turf/boolean-point-in-polygon';
import { geoBounds, geoContains, geoDistance, geoInterpolate } from 'd3-geo';
import { geoVoronoi } from 'd3-geo-voronoi';
import { scaleLinear } from 'd3-scale';

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
  if (undefined === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
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
    writable: false
  }), e;
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
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(t, "prototype", {
    writable: false
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
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == typeof e || "function" == typeof e)) return e;
  if (undefined !== e) throw new TypeError("Derived constructors may only return object or undefined");
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
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : undefined;
  }
}

function geoPolygonTriangulate(polygon) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref$resolution = _ref.resolution,
    resolution = _ref$resolution === undefined ? Infinity : _ref$resolution;
  var contour = interpolateContourPoints(polygon, resolution);
  var edgePoints = merge(contour);
  var innerPoints = getInnerGeoPoints(polygon, resolution);
  var points = [].concat(_toConsumableArray(edgePoints), _toConsumableArray(innerPoints));
  var boundariesGeojson = {
    type: 'Polygon',
    coordinates: polygon
  };
  var _geoBounds = geoBounds(boundariesGeojson),
    _geoBounds2 = _slicedToArray(_geoBounds, 2),
    _geoBounds2$ = _slicedToArray(_geoBounds2[0], 2),
    minLng = _geoBounds2$[0],
    minLat = _geoBounds2$[1],
    _geoBounds2$2 = _slicedToArray(_geoBounds2[1], 2),
    maxLng = _geoBounds2$2[0],
    maxLat = _geoBounds2$2[1];
  var crossesPoleOrAntimeridian = minLng > maxLng // crosses antimeridian
  || maxLat >= 89 // crosses north pole
  || minLat <= -89; // crosses south pole

  var indices = [];
  if (crossesPoleOrAntimeridian) {
    // Use d3-geo-voronoi. Slowest, but most accurate for polygons that cross poles or anti-meridian
    var vt = geoVoronoi(points).triangles(); // geoDelaunay generates more triangles than needed
    var pntMap = new Map(points.map(function (_ref2, idx) {
      var _ref3 = _slicedToArray(_ref2, 2),
        lng = _ref3[0],
        lat = _ref3[1];
      return ["".concat(lng, "-").concat(lat), idx];
    }));
    vt.features.forEach(function (f) {
      var _indices;
      var triangle = f.geometry.coordinates[0].slice(0, 3).reverse(); // reverse wound to match earcut

      var inds = [];
      triangle.forEach(function (_ref4) {
        var _ref5 = _slicedToArray(_ref4, 2),
          lng = _ref5[0],
          lat = _ref5[1];
        var k = "".concat(lng, "-").concat(lat);
        pntMap.has(k) && inds.push(pntMap.get(k));
      });
      if (inds.length !== 3) return; // triangle malfunction

      // exclude edge triangles outside polygon perimeter or through holes
      if (inds.some(function (ind) {
        return ind < edgePoints.length;
      })) {
        var triangleCentroid = f.properties.circumcenter;
        if (!pointInside(triangleCentroid, boundariesGeojson, crossesPoleOrAntimeridian)) return;
      }
      (_indices = indices).push.apply(_indices, inds);
    });
  } else if (!innerPoints.length) {
    // earcut triangulation slightly more performing if it's only using the polygon perimeter
    var _earcutFlatten = flatten(contour),
      vertices = _earcutFlatten.vertices,
      _earcutFlatten$holes = _earcutFlatten.holes,
      holes = _earcutFlatten$holes === undefined ? [] : _earcutFlatten$holes;
    indices = earcut(vertices, holes, 2);
  } else {
    // use delaunator
    var delaunay = Delaunator.from(points);
    var _loop = function _loop(i) {
      var _indices2;
      var inds = [2, 1, 0].map(function (idx) {
        return delaunay.triangles[i + idx];
      }); // reverse wound to have same orientation as earcut
      var triangle = inds.map(function (indice) {
        return points[indice];
      });

      // exclude edge triangles outside polygon perimeter or through holes
      if (inds.some(function (ind) {
        return ind < edgePoints.length;
      })) {
        var triangleCentroid = [0, 1].map(function (coordIdx) {
          return mean(triangle, function (p) {
            return p[coordIdx];
          });
        });
        if (!pointInside(triangleCentroid, boundariesGeojson, crossesPoleOrAntimeridian)) return 1; // continue
      }
      (_indices2 = indices).push.apply(_indices2, _toConsumableArray(inds));
    };
    for (var i = 0, len = delaunay.triangles.length; i < len; i += 3) {
      if (_loop(i)) continue;
    }
  }

  // calc uvs
  var lngUvScale = scaleLinear(extent(points, function (d) {
    return d[0];
  }), [0, 1]);
  var latUvScale = scaleLinear(extent(points, function (d) {
    return d[1];
  }), [0, 1]);
  var uvs = points.map(function (_ref6) {
    var _ref7 = _slicedToArray(_ref6, 2),
      lng = _ref7[0],
      lat = _ref7[1];
    return [lngUvScale(lng), latUvScale(lat)];
  });
  var triangles = {
    points: points,
    indices: indices,
    uvs: uvs
  };
  return {
    contour: contour,
    triangles: triangles
  };
}
function interpolateContourPoints(polygon, maxDistance) {
  // add interpolated points for segments that are further apart than the max distance
  return polygon.map(function (coords) {
    var pnts = [];
    var prevPnt;
    coords.forEach(function (pnt) {
      if (prevPnt) {
        var dist = geoDistance(pnt, prevPnt) * 180 / Math.PI;
        if (dist > maxDistance) {
          var interpol = geoInterpolate(prevPnt, pnt);
          var tStep = 1 / Math.ceil(dist / maxDistance);
          var t = tStep;
          while (t < 1) {
            pnts.push(interpol(t));
            t += tStep;
          }
        }
      }
      pnts.push(prevPnt = pnt);
    });
    return pnts;
  });
}
function getInnerGeoPoints(polygon, maxDistance) {
  var boundariesGeojson = {
    type: 'Polygon',
    coordinates: polygon
  };
  var _geoBounds3 = geoBounds(boundariesGeojson),
    _geoBounds4 = _slicedToArray(_geoBounds3, 2),
    _geoBounds4$ = _slicedToArray(_geoBounds4[0], 2),
    minLng = _geoBounds4$[0],
    minLat = _geoBounds4$[1],
    _geoBounds4$2 = _slicedToArray(_geoBounds4[1], 2),
    maxLng = _geoBounds4$2[0],
    maxLat = _geoBounds4$2[1];

  // polygon smaller than maxDistance -> no inner points
  if (Math.min(Math.abs(maxLng - minLng), Math.abs(maxLat - minLat)) < maxDistance) return [];
  var crossesPoleOrAntimeridian = minLng > maxLng || maxLat >= 89 || minLat <= -89;
  return getGeoSpiralGrid(maxDistance, {
    minLng: minLng,
    maxLng: maxLng,
    minLat: minLat,
    maxLat: maxLat
  }).filter(function (pnt) {
    return pointInside(pnt, boundariesGeojson, crossesPoleOrAntimeridian);
  });
}
function getGeoSpiralGrid(distanceBetweenPoints) {
  var _ref8 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    minLng = _ref8.minLng,
    maxLng = _ref8.maxLng,
    minLat = _ref8.minLat,
    maxLat = _ref8.maxLat;
  var numPoints = Math.round(Math.pow(360 / distanceBetweenPoints, 2) / Math.PI);

  // https://observablehq.com/@mbostock/spherical-fibonacci-lattice
  var phi = (1 + Math.sqrt(5)) / 2; // golden ratio

  var getPntLng = function getPntLng(idx) {
    return idx / phi * 360 % 360 - 180;
  };
  var getPntLat = function getPntLat(idx) {
    return Math.acos(2 * idx / numPoints - 1) / Math.PI * 180 - 90;
  };
  var getPntIdx = function getPntIdx(lat) {
    return numPoints * (Math.cos((lat + 90) * Math.PI / 180) + 1) / 2;
  };
  var pntIdxRange = [maxLat !== undefined ? Math.ceil(getPntIdx(maxLat)) : 0, minLat !== undefined ? Math.floor(getPntIdx(minLat)) : numPoints - 1];
  var isLngInRange = minLng === undefined && maxLng === undefined ? function () {
    return true;
  } : minLng === undefined ? function (lng) {
    return lng <= maxLng;
  } : maxLng === undefined ? function (lng) {
    return lng >= minLng;
  } : maxLng >= minLng ? function (lng) {
    return lng >= minLng && lng <= maxLng;
  } : function (lng) {
    return lng >= minLng || lng <= maxLng;
  }; // for ranges that cross the anti-meridian

  var pnts = [];
  for (var i = pntIdxRange[0]; i <= pntIdxRange[1]; i++) {
    var lng = getPntLng(i);
    isLngInRange(lng) && pnts.push([lng, getPntLat(i)]);
  }
  return pnts;
}
function pointInside(pnt, polygon) {
  var crossesPoleOrAntimeridian = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // turf method is more performing but malfunctions if polygon includes a pole (lat = 90 | -90) or crosses the antimeridian (lng = 180 | -180)
  return crossesPoleOrAntimeridian ? geoContains(polygon, pnt) : turfPointInPolygon(pnt, polygon);
}

var THREE = window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
: {
  BufferGeometry: BufferGeometry,
  Float32BufferAttribute: Float32BufferAttribute
};

// support both modes for backwards threejs compatibility
var setAttributeFn = new THREE.BufferGeometry().setAttribute ? 'setAttribute' : 'addAttribute';
var ConicPolygonGeometry = /*#__PURE__*/function (_THREE$BufferGeometry) {
  function ConicPolygonGeometry(polygonGeoJson, bottomHeight, topHeight, closedBottom, closedTop, includeSides, curvatureResolution) {
    var _this;
    _classCallCheck(this, ConicPolygonGeometry);
    _this = _callSuper(this, ConicPolygonGeometry);
    _this.type = 'ConicPolygonGeometry';
    _this.parameters = {
      polygonGeoJson: polygonGeoJson,
      bottomHeight: bottomHeight,
      topHeight: topHeight,
      closedBottom: closedBottom,
      closedTop: closedTop,
      includeSides: includeSides,
      curvatureResolution: curvatureResolution
    };

    // defaults
    bottomHeight = bottomHeight || 0;
    topHeight = topHeight || 1;
    closedBottom = closedBottom !== undefined ? closedBottom : true;
    closedTop = closedTop !== undefined ? closedTop : true;
    includeSides = includeSides !== undefined ? includeSides : true;
    curvatureResolution = curvatureResolution || 5; // in angular degrees

    // pre-calculate contour, triangulation and UV maps
    var _geoPolygonTriangulat = geoPolygonTriangulate(polygonGeoJson, {
        resolution: curvatureResolution
      }),
      contour = _geoPolygonTriangulat.contour,
      triangles = _geoPolygonTriangulat.triangles;
    var flatUvs = merge(triangles.uvs);
    var vertices = [];
    var uvs = [];
    var indices = [];
    var groupCnt = 0; // add groups to apply different materials to torso / caps

    var addGroup = function addGroup(groupData) {
      var prevVertCnt = Math.round(vertices.length / 3);
      var prevIndCnt = indices.length;
      vertices = vertices.concat(groupData.vertices);
      uvs = uvs.concat(groupData.uvs);
      indices = indices.concat(!prevVertCnt ? groupData.indices : groupData.indices.map(function (ind) {
        return ind + prevVertCnt;
      }));
      _this.addGroup(prevIndCnt, indices.length - prevIndCnt, groupCnt++);
    };
    includeSides && addGroup(generateTorso());
    closedBottom && addGroup(generateCap(bottomHeight, false));
    closedTop && addGroup(generateCap(topHeight, true));

    // build geometry
    _this.setIndex(indices);
    _this[setAttributeFn]('position', new THREE.Float32BufferAttribute(vertices, 3));
    _this[setAttributeFn]('uv', new THREE.Float32BufferAttribute(uvs, 2));

    // auto-calculate normals
    _this.computeVertexNormals();

    //

    function generateVertices(polygon, altitude) {
      var altFn = typeof altitude === 'function' ? altitude : function () {
        return altitude;
      };
      var coords3d = polygon.map(function (coords) {
        return coords.map(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
            lng = _ref2[0],
            lat = _ref2[1];
          return polar2Cartesian(lat, lng, altFn(lng, lat));
        });
      });
      // returns { vertices, holes, coordinates }. Each point generates 3 vertice items (x,y,z).
      return flatten(coords3d);
    }
    function generateTorso() {
      var _generateVertices = generateVertices(contour, bottomHeight),
        bottomVerts = _generateVertices.vertices,
        holes = _generateVertices.holes;
      var _generateVertices2 = generateVertices(contour, topHeight),
        topVerts = _generateVertices2.vertices;
      var vertices = merge([topVerts, bottomVerts]);
      var numPoints = Math.round(topVerts.length / 3);
      var holesIdx = new Set(holes);
      var lastHoleIdx = 0;
      var indices = [];
      for (var v0Idx = 0; v0Idx < numPoints; v0Idx++) {
        var v1Idx = v0Idx + 1; // next point
        if (v1Idx === numPoints) {
          v1Idx = lastHoleIdx; // close final loop
        } else if (holesIdx.has(v1Idx)) {
          var holeIdx = v1Idx;
          v1Idx = lastHoleIdx; // close hole loop
          lastHoleIdx = holeIdx;
        }

        // Each pair of coords generates two triangles (faces)
        indices.push(v0Idx, v0Idx + numPoints, v1Idx + numPoints);
        indices.push(v1Idx + numPoints, v1Idx, v0Idx);
      }
      var uvs = []; // wrap texture around perimeter (u), with v=1 on top
      for (var v = 1; v >= 0; v--) for (var i = 0; i < numPoints; i += 1) uvs.push(i / (numPoints - 1), v);
      return {
        indices: indices,
        vertices: vertices,
        uvs: uvs
      };
    }
    function generateCap(radius) {
      var isTop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      return {
        // need to reverse-wind the bottom triangles to make them face outwards
        indices: isTop ? triangles.indices : triangles.indices.slice().reverse(),
        vertices: generateVertices([triangles.points], radius).vertices,
        uvs: flatUvs
      };
    }
    return _this;
  }
  _inherits(ConicPolygonGeometry, _THREE$BufferGeometry);
  return _createClass(ConicPolygonGeometry);
}(THREE.BufferGeometry); //
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

export { ConicPolygonGeometry as default };
