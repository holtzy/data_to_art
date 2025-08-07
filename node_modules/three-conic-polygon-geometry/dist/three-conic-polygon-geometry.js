// Version 2.1.2 three-conic-polygon-geometry - https://github.com/vasturiano/three-conic-polygon-geometry
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('three')) :
  typeof define === 'function' && define.amd ? define(['three'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.ConicPolygonGeometry = factory(global.THREE));
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

  function ascending(a, b) {
    return a == null || b == null ? NaN : a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
  }

  function descending(a, b) {
    return a == null || b == null ? NaN
      : b < a ? -1
      : b > a ? 1
      : b >= a ? 0
      : NaN;
  }

  function bisector(f) {
    let compare1, compare2, delta;

    // If an accessor is specified, promote it to a comparator. In this case we
    // can test whether the search value is (self-) comparable. We can’t do this
    // for a comparator (except for specific, known comparators) because we can’t
    // tell if the comparator is symmetric, and an asymmetric comparator can’t be
    // used to test whether a single value is comparable.
    if (f.length !== 2) {
      compare1 = ascending;
      compare2 = (d, x) => ascending(f(d), x);
      delta = (d, x) => f(d) - x;
    } else {
      compare1 = f === ascending || f === descending ? f : zero$1;
      compare2 = f;
      delta = f;
    }

    function left(a, x, lo = 0, hi = a.length) {
      if (lo < hi) {
        if (compare1(x, x) !== 0) return hi;
        do {
          const mid = (lo + hi) >>> 1;
          if (compare2(a[mid], x) < 0) lo = mid + 1;
          else hi = mid;
        } while (lo < hi);
      }
      return lo;
    }

    function right(a, x, lo = 0, hi = a.length) {
      if (lo < hi) {
        if (compare1(x, x) !== 0) return hi;
        do {
          const mid = (lo + hi) >>> 1;
          if (compare2(a[mid], x) <= 0) lo = mid + 1;
          else hi = mid;
        } while (lo < hi);
      }
      return lo;
    }

    function center(a, x, lo = 0, hi = a.length) {
      const i = left(a, x, lo, hi - 1);
      return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
    }

    return {left, center, right};
  }

  function zero$1() {
    return 0;
  }

  function number$1(x) {
    return x === null ? NaN : +x;
  }

  const ascendingBisect = bisector(ascending);
  const bisectRight = ascendingBisect.right;
  bisector(number$1).center;

  function extent(values, valueof) {
    let min;
    let max;
    if (valueof === undefined) {
      for (const value of values) {
        if (value != null) {
          if (min === undefined) {
            if (value >= value) min = max = value;
          } else {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    } else {
      let index = -1;
      for (let value of values) {
        if ((value = valueof(value, ++index, values)) != null) {
          if (min === undefined) {
            if (value >= value) min = max = value;
          } else {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
    return [min, max];
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

  const e10 = Math.sqrt(50),
      e5 = Math.sqrt(10),
      e2 = Math.sqrt(2);

  function tickSpec(start, stop, count) {
    const step = (stop - start) / Math.max(0, count),
        power = Math.floor(Math.log10(step)),
        error = step / Math.pow(10, power),
        factor = error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1;
    let i1, i2, inc;
    if (power < 0) {
      inc = Math.pow(10, -power) / factor;
      i1 = Math.round(start * inc);
      i2 = Math.round(stop * inc);
      if (i1 / inc < start) ++i1;
      if (i2 / inc > stop) --i2;
      inc = -inc;
    } else {
      inc = Math.pow(10, power) * factor;
      i1 = Math.round(start / inc);
      i2 = Math.round(stop / inc);
      if (i1 * inc < start) ++i1;
      if (i2 * inc > stop) --i2;
    }
    if (i2 < i1 && 0.5 <= count && count < 2) return tickSpec(start, stop, count * 2);
    return [i1, i2, inc];
  }

  function ticks(start, stop, count) {
    stop = +stop, start = +start, count = +count;
    if (!(count > 0)) return [];
    if (start === stop) return [start];
    const reverse = stop < start, [i1, i2, inc] = reverse ? tickSpec(stop, start, count) : tickSpec(start, stop, count);
    if (!(i2 >= i1)) return [];
    const n = i2 - i1 + 1, ticks = new Array(n);
    if (reverse) {
      if (inc < 0) for (let i = 0; i < n; ++i) ticks[i] = (i2 - i) / -inc;
      else for (let i = 0; i < n; ++i) ticks[i] = (i2 - i) * inc;
    } else {
      if (inc < 0) for (let i = 0; i < n; ++i) ticks[i] = (i1 + i) / -inc;
      else for (let i = 0; i < n; ++i) ticks[i] = (i1 + i) * inc;
    }
    return ticks;
  }

  function tickIncrement(start, stop, count) {
    stop = +stop, start = +start, count = +count;
    return tickSpec(start, stop, count)[2];
  }

  function tickStep(start, stop, count) {
    stop = +stop, start = +start, count = +count;
    const reverse = stop < start, inc = reverse ? tickIncrement(stop, start, count) : tickIncrement(start, stop, count);
    return (reverse ? -1 : 1) * (inc < 0 ? 1 / -inc : inc);
  }

  function mean(values, valueof) {
    let count = 0;
    let sum = 0;
    if (valueof === undefined) {
      for (let value of values) {
        if (value != null && (value = +value) >= value) {
          ++count, sum += value;
        }
      }
    } else {
      let index = -1;
      for (let value of values) {
        if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
          ++count, sum += value;
        }
      }
    }
    if (count) return sum / count;
  }

  function* flatten$1(arrays) {
    for (const array of arrays) {
      yield* array;
    }
  }

  function merge(arrays) {
    return Array.from(flatten$1(arrays));
  }

  function earcut(data, holeIndices, dim = 2) {

      const hasHoles = holeIndices && holeIndices.length;
      const outerLen = hasHoles ? holeIndices[0] * dim : data.length;
      let outerNode = linkedList(data, 0, outerLen, dim, true);
      const triangles = [];

      if (!outerNode || outerNode.next === outerNode.prev) return triangles;

      let minX, minY, invSize;

      if (hasHoles) outerNode = eliminateHoles(data, holeIndices, outerNode, dim);

      // if the shape is not too simple, we'll use z-order curve hash later; calculate polygon bbox
      if (data.length > 80 * dim) {
          minX = Infinity;
          minY = Infinity;
          let maxX = -Infinity;
          let maxY = -Infinity;

          for (let i = dim; i < outerLen; i += dim) {
              const x = data[i];
              const y = data[i + 1];
              if (x < minX) minX = x;
              if (y < minY) minY = y;
              if (x > maxX) maxX = x;
              if (y > maxY) maxY = y;
          }

          // minX, minY and invSize are later used to transform coords into integers for z-order calculation
          invSize = Math.max(maxX - minX, maxY - minY);
          invSize = invSize !== 0 ? 32767 / invSize : 0;
      }

      earcutLinked(outerNode, triangles, dim, minX, minY, invSize, 0);

      return triangles;
  }

  // create a circular doubly linked list from polygon points in the specified winding order
  function linkedList(data, start, end, dim, clockwise) {
      let last;

      if (clockwise === (signedArea(data, start, end, dim) > 0)) {
          for (let i = start; i < end; i += dim) last = insertNode(i / dim | 0, data[i], data[i + 1], last);
      } else {
          for (let i = end - dim; i >= start; i -= dim) last = insertNode(i / dim | 0, data[i], data[i + 1], last);
      }

      if (last && equals(last, last.next)) {
          removeNode(last);
          last = last.next;
      }

      return last;
  }

  // eliminate colinear or duplicate points
  function filterPoints(start, end) {
      if (!start) return start;
      if (!end) end = start;

      let p = start,
          again;
      do {
          again = false;

          if (!p.steiner && (equals(p, p.next) || area(p.prev, p, p.next) === 0)) {
              removeNode(p);
              p = end = p.prev;
              if (p === p.next) break;
              again = true;

          } else {
              p = p.next;
          }
      } while (again || p !== end);

      return end;
  }

  // main ear slicing loop which triangulates a polygon (given as a linked list)
  function earcutLinked(ear, triangles, dim, minX, minY, invSize, pass) {
      if (!ear) return;

      // interlink polygon nodes in z-order
      if (!pass && invSize) indexCurve(ear, minX, minY, invSize);

      let stop = ear;

      // iterate through ears, slicing them one by one
      while (ear.prev !== ear.next) {
          const prev = ear.prev;
          const next = ear.next;

          if (invSize ? isEarHashed(ear, minX, minY, invSize) : isEar(ear)) {
              triangles.push(prev.i, ear.i, next.i); // cut off the triangle

              removeNode(ear);

              // skipping the next vertex leads to less sliver triangles
              ear = next.next;
              stop = next.next;

              continue;
          }

          ear = next;

          // if we looped through the whole remaining polygon and can't find any more ears
          if (ear === stop) {
              // try filtering points and slicing again
              if (!pass) {
                  earcutLinked(filterPoints(ear), triangles, dim, minX, minY, invSize, 1);

              // if this didn't work, try curing all small self-intersections locally
              } else if (pass === 1) {
                  ear = cureLocalIntersections(filterPoints(ear), triangles);
                  earcutLinked(ear, triangles, dim, minX, minY, invSize, 2);

              // as a last resort, try splitting the remaining polygon into two
              } else if (pass === 2) {
                  splitEarcut(ear, triangles, dim, minX, minY, invSize);
              }

              break;
          }
      }
  }

  // check whether a polygon node forms a valid ear with adjacent nodes
  function isEar(ear) {
      const a = ear.prev,
          b = ear,
          c = ear.next;

      if (area(a, b, c) >= 0) return false; // reflex, can't be an ear

      // now make sure we don't have other points inside the potential ear
      const ax = a.x, bx = b.x, cx = c.x, ay = a.y, by = b.y, cy = c.y;

      // triangle bbox
      const x0 = Math.min(ax, bx, cx),
          y0 = Math.min(ay, by, cy),
          x1 = Math.max(ax, bx, cx),
          y1 = Math.max(ay, by, cy);

      let p = c.next;
      while (p !== a) {
          if (p.x >= x0 && p.x <= x1 && p.y >= y0 && p.y <= y1 &&
              pointInTriangleExceptFirst(ax, ay, bx, by, cx, cy, p.x, p.y) &&
              area(p.prev, p, p.next) >= 0) return false;
          p = p.next;
      }

      return true;
  }

  function isEarHashed(ear, minX, minY, invSize) {
      const a = ear.prev,
          b = ear,
          c = ear.next;

      if (area(a, b, c) >= 0) return false; // reflex, can't be an ear

      const ax = a.x, bx = b.x, cx = c.x, ay = a.y, by = b.y, cy = c.y;

      // triangle bbox
      const x0 = Math.min(ax, bx, cx),
          y0 = Math.min(ay, by, cy),
          x1 = Math.max(ax, bx, cx),
          y1 = Math.max(ay, by, cy);

      // z-order range for the current triangle bbox;
      const minZ = zOrder(x0, y0, minX, minY, invSize),
          maxZ = zOrder(x1, y1, minX, minY, invSize);

      let p = ear.prevZ,
          n = ear.nextZ;

      // look for points inside the triangle in both directions
      while (p && p.z >= minZ && n && n.z <= maxZ) {
          if (p.x >= x0 && p.x <= x1 && p.y >= y0 && p.y <= y1 && p !== a && p !== c &&
              pointInTriangleExceptFirst(ax, ay, bx, by, cx, cy, p.x, p.y) && area(p.prev, p, p.next) >= 0) return false;
          p = p.prevZ;

          if (n.x >= x0 && n.x <= x1 && n.y >= y0 && n.y <= y1 && n !== a && n !== c &&
              pointInTriangleExceptFirst(ax, ay, bx, by, cx, cy, n.x, n.y) && area(n.prev, n, n.next) >= 0) return false;
          n = n.nextZ;
      }

      // look for remaining points in decreasing z-order
      while (p && p.z >= minZ) {
          if (p.x >= x0 && p.x <= x1 && p.y >= y0 && p.y <= y1 && p !== a && p !== c &&
              pointInTriangleExceptFirst(ax, ay, bx, by, cx, cy, p.x, p.y) && area(p.prev, p, p.next) >= 0) return false;
          p = p.prevZ;
      }

      // look for remaining points in increasing z-order
      while (n && n.z <= maxZ) {
          if (n.x >= x0 && n.x <= x1 && n.y >= y0 && n.y <= y1 && n !== a && n !== c &&
              pointInTriangleExceptFirst(ax, ay, bx, by, cx, cy, n.x, n.y) && area(n.prev, n, n.next) >= 0) return false;
          n = n.nextZ;
      }

      return true;
  }

  // go through all polygon nodes and cure small local self-intersections
  function cureLocalIntersections(start, triangles) {
      let p = start;
      do {
          const a = p.prev,
              b = p.next.next;

          if (!equals(a, b) && intersects(a, p, p.next, b) && locallyInside(a, b) && locallyInside(b, a)) {

              triangles.push(a.i, p.i, b.i);

              // remove two nodes involved
              removeNode(p);
              removeNode(p.next);

              p = start = b;
          }
          p = p.next;
      } while (p !== start);

      return filterPoints(p);
  }

  // try splitting polygon into two and triangulate them independently
  function splitEarcut(start, triangles, dim, minX, minY, invSize) {
      // look for a valid diagonal that divides the polygon into two
      let a = start;
      do {
          let b = a.next.next;
          while (b !== a.prev) {
              if (a.i !== b.i && isValidDiagonal(a, b)) {
                  // split the polygon in two by the diagonal
                  let c = splitPolygon(a, b);

                  // filter colinear points around the cuts
                  a = filterPoints(a, a.next);
                  c = filterPoints(c, c.next);

                  // run earcut on each half
                  earcutLinked(a, triangles, dim, minX, minY, invSize, 0);
                  earcutLinked(c, triangles, dim, minX, minY, invSize, 0);
                  return;
              }
              b = b.next;
          }
          a = a.next;
      } while (a !== start);
  }

  // link every hole into the outer loop, producing a single-ring polygon without holes
  function eliminateHoles(data, holeIndices, outerNode, dim) {
      const queue = [];

      for (let i = 0, len = holeIndices.length; i < len; i++) {
          const start = holeIndices[i] * dim;
          const end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
          const list = linkedList(data, start, end, dim, false);
          if (list === list.next) list.steiner = true;
          queue.push(getLeftmost(list));
      }

      queue.sort(compareXYSlope);

      // process holes from left to right
      for (let i = 0; i < queue.length; i++) {
          outerNode = eliminateHole(queue[i], outerNode);
      }

      return outerNode;
  }

  function compareXYSlope(a, b) {
      let result = a.x - b.x;
      // when the left-most point of 2 holes meet at a vertex, sort the holes counterclockwise so that when we find
      // the bridge to the outer shell is always the point that they meet at.
      if (result === 0) {
          result = a.y - b.y;
          if (result === 0) {
              const aSlope = (a.next.y - a.y) / (a.next.x - a.x);
              const bSlope = (b.next.y - b.y) / (b.next.x - b.x);
              result = aSlope - bSlope;
          }
      }
      return result;
  }

  // find a bridge between vertices that connects hole with an outer ring and and link it
  function eliminateHole(hole, outerNode) {
      const bridge = findHoleBridge(hole, outerNode);
      if (!bridge) {
          return outerNode;
      }

      const bridgeReverse = splitPolygon(bridge, hole);

      // filter collinear points around the cuts
      filterPoints(bridgeReverse, bridgeReverse.next);
      return filterPoints(bridge, bridge.next);
  }

  // David Eberly's algorithm for finding a bridge between hole and outer polygon
  function findHoleBridge(hole, outerNode) {
      let p = outerNode;
      const hx = hole.x;
      const hy = hole.y;
      let qx = -Infinity;
      let m;

      // find a segment intersected by a ray from the hole's leftmost point to the left;
      // segment's endpoint with lesser x will be potential connection point
      // unless they intersect at a vertex, then choose the vertex
      if (equals(hole, p)) return p;
      do {
          if (equals(hole, p.next)) return p.next;
          else if (hy <= p.y && hy >= p.next.y && p.next.y !== p.y) {
              const x = p.x + (hy - p.y) * (p.next.x - p.x) / (p.next.y - p.y);
              if (x <= hx && x > qx) {
                  qx = x;
                  m = p.x < p.next.x ? p : p.next;
                  if (x === hx) return m; // hole touches outer segment; pick leftmost endpoint
              }
          }
          p = p.next;
      } while (p !== outerNode);

      if (!m) return null;

      // look for points inside the triangle of hole point, segment intersection and endpoint;
      // if there are no points found, we have a valid connection;
      // otherwise choose the point of the minimum angle with the ray as connection point

      const stop = m;
      const mx = m.x;
      const my = m.y;
      let tanMin = Infinity;

      p = m;

      do {
          if (hx >= p.x && p.x >= mx && hx !== p.x &&
                  pointInTriangle(hy < my ? hx : qx, hy, mx, my, hy < my ? qx : hx, hy, p.x, p.y)) {

              const tan = Math.abs(hy - p.y) / (hx - p.x); // tangential

              if (locallyInside(p, hole) &&
                  (tan < tanMin || (tan === tanMin && (p.x > m.x || (p.x === m.x && sectorContainsSector(m, p)))))) {
                  m = p;
                  tanMin = tan;
              }
          }

          p = p.next;
      } while (p !== stop);

      return m;
  }

  // whether sector in vertex m contains sector in vertex p in the same coordinates
  function sectorContainsSector(m, p) {
      return area(m.prev, m, p.prev) < 0 && area(p.next, m, m.next) < 0;
  }

  // interlink polygon nodes in z-order
  function indexCurve(start, minX, minY, invSize) {
      let p = start;
      do {
          if (p.z === 0) p.z = zOrder(p.x, p.y, minX, minY, invSize);
          p.prevZ = p.prev;
          p.nextZ = p.next;
          p = p.next;
      } while (p !== start);

      p.prevZ.nextZ = null;
      p.prevZ = null;

      sortLinked(p);
  }

  // Simon Tatham's linked list merge sort algorithm
  // http://www.chiark.greenend.org.uk/~sgtatham/algorithms/listsort.html
  function sortLinked(list) {
      let numMerges;
      let inSize = 1;

      do {
          let p = list;
          let e;
          list = null;
          let tail = null;
          numMerges = 0;

          while (p) {
              numMerges++;
              let q = p;
              let pSize = 0;
              for (let i = 0; i < inSize; i++) {
                  pSize++;
                  q = q.nextZ;
                  if (!q) break;
              }
              let qSize = inSize;

              while (pSize > 0 || (qSize > 0 && q)) {

                  if (pSize !== 0 && (qSize === 0 || !q || p.z <= q.z)) {
                      e = p;
                      p = p.nextZ;
                      pSize--;
                  } else {
                      e = q;
                      q = q.nextZ;
                      qSize--;
                  }

                  if (tail) tail.nextZ = e;
                  else list = e;

                  e.prevZ = tail;
                  tail = e;
              }

              p = q;
          }

          tail.nextZ = null;
          inSize *= 2;

      } while (numMerges > 1);

      return list;
  }

  // z-order of a point given coords and inverse of the longer side of data bbox
  function zOrder(x, y, minX, minY, invSize) {
      // coords are transformed into non-negative 15-bit integer range
      x = (x - minX) * invSize | 0;
      y = (y - minY) * invSize | 0;

      x = (x | (x << 8)) & 0x00FF00FF;
      x = (x | (x << 4)) & 0x0F0F0F0F;
      x = (x | (x << 2)) & 0x33333333;
      x = (x | (x << 1)) & 0x55555555;

      y = (y | (y << 8)) & 0x00FF00FF;
      y = (y | (y << 4)) & 0x0F0F0F0F;
      y = (y | (y << 2)) & 0x33333333;
      y = (y | (y << 1)) & 0x55555555;

      return x | (y << 1);
  }

  // find the leftmost node of a polygon ring
  function getLeftmost(start) {
      let p = start,
          leftmost = start;
      do {
          if (p.x < leftmost.x || (p.x === leftmost.x && p.y < leftmost.y)) leftmost = p;
          p = p.next;
      } while (p !== start);

      return leftmost;
  }

  // check if a point lies within a convex triangle
  function pointInTriangle(ax, ay, bx, by, cx, cy, px, py) {
      return (cx - px) * (ay - py) >= (ax - px) * (cy - py) &&
             (ax - px) * (by - py) >= (bx - px) * (ay - py) &&
             (bx - px) * (cy - py) >= (cx - px) * (by - py);
  }

  // check if a point lies within a convex triangle but false if its equal to the first point of the triangle
  function pointInTriangleExceptFirst(ax, ay, bx, by, cx, cy, px, py) {
      return !(ax === px && ay === py) && pointInTriangle(ax, ay, bx, by, cx, cy, px, py);
  }

  // check if a diagonal between two polygon nodes is valid (lies in polygon interior)
  function isValidDiagonal(a, b) {
      return a.next.i !== b.i && a.prev.i !== b.i && !intersectsPolygon(a, b) && // dones't intersect other edges
             (locallyInside(a, b) && locallyInside(b, a) && middleInside(a, b) && // locally visible
              (area(a.prev, a, b.prev) || area(a, b.prev, b)) || // does not create opposite-facing sectors
              equals(a, b) && area(a.prev, a, a.next) > 0 && area(b.prev, b, b.next) > 0); // special zero-length case
  }

  // signed area of a triangle
  function area(p, q, r) {
      return (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
  }

  // check if two points are equal
  function equals(p1, p2) {
      return p1.x === p2.x && p1.y === p2.y;
  }

  // check if two segments intersect
  function intersects(p1, q1, p2, q2) {
      const o1 = sign$2(area(p1, q1, p2));
      const o2 = sign$2(area(p1, q1, q2));
      const o3 = sign$2(area(p2, q2, p1));
      const o4 = sign$2(area(p2, q2, q1));

      if (o1 !== o2 && o3 !== o4) return true; // general case

      if (o1 === 0 && onSegment(p1, p2, q1)) return true; // p1, q1 and p2 are collinear and p2 lies on p1q1
      if (o2 === 0 && onSegment(p1, q2, q1)) return true; // p1, q1 and q2 are collinear and q2 lies on p1q1
      if (o3 === 0 && onSegment(p2, p1, q2)) return true; // p2, q2 and p1 are collinear and p1 lies on p2q2
      if (o4 === 0 && onSegment(p2, q1, q2)) return true; // p2, q2 and q1 are collinear and q1 lies on p2q2

      return false;
  }

  // for collinear points p, q, r, check if point q lies on segment pr
  function onSegment(p, q, r) {
      return q.x <= Math.max(p.x, r.x) && q.x >= Math.min(p.x, r.x) && q.y <= Math.max(p.y, r.y) && q.y >= Math.min(p.y, r.y);
  }

  function sign$2(num) {
      return num > 0 ? 1 : num < 0 ? -1 : 0;
  }

  // check if a polygon diagonal intersects any polygon segments
  function intersectsPolygon(a, b) {
      let p = a;
      do {
          if (p.i !== a.i && p.next.i !== a.i && p.i !== b.i && p.next.i !== b.i &&
                  intersects(p, p.next, a, b)) return true;
          p = p.next;
      } while (p !== a);

      return false;
  }

  // check if a polygon diagonal is locally inside the polygon
  function locallyInside(a, b) {
      return area(a.prev, a, a.next) < 0 ?
          area(a, b, a.next) >= 0 && area(a, a.prev, b) >= 0 :
          area(a, b, a.prev) < 0 || area(a, a.next, b) < 0;
  }

  // check if the middle point of a polygon diagonal is inside the polygon
  function middleInside(a, b) {
      let p = a;
      let inside = false;
      const px = (a.x + b.x) / 2;
      const py = (a.y + b.y) / 2;
      do {
          if (((p.y > py) !== (p.next.y > py)) && p.next.y !== p.y &&
                  (px < (p.next.x - p.x) * (py - p.y) / (p.next.y - p.y) + p.x))
              inside = !inside;
          p = p.next;
      } while (p !== a);

      return inside;
  }

  // link two polygon vertices with a bridge; if the vertices belong to the same ring, it splits polygon into two;
  // if one belongs to the outer ring and another to a hole, it merges it into a single ring
  function splitPolygon(a, b) {
      const a2 = createNode(a.i, a.x, a.y),
          b2 = createNode(b.i, b.x, b.y),
          an = a.next,
          bp = b.prev;

      a.next = b;
      b.prev = a;

      a2.next = an;
      an.prev = a2;

      b2.next = a2;
      a2.prev = b2;

      bp.next = b2;
      b2.prev = bp;

      return b2;
  }

  // create a node and optionally link it with previous one (in a circular doubly linked list)
  function insertNode(i, x, y, last) {
      const p = createNode(i, x, y);

      if (!last) {
          p.prev = p;
          p.next = p;

      } else {
          p.next = last.next;
          p.prev = last;
          last.next.prev = p;
          last.next = p;
      }
      return p;
  }

  function removeNode(p) {
      p.next.prev = p.prev;
      p.prev.next = p.next;

      if (p.prevZ) p.prevZ.nextZ = p.nextZ;
      if (p.nextZ) p.nextZ.prevZ = p.prevZ;
  }

  function createNode(i, x, y) {
      return {
          i, // vertex index in coordinates array
          x, y, // vertex coordinates
          prev: null, // previous and next vertex nodes in a polygon ring
          next: null,
          z: 0, // z-order curve value
          prevZ: null, // previous and next nodes in z-order
          nextZ: null,
          steiner: false // indicates whether this is a steiner point
      };
  }

  function signedArea(data, start, end, dim) {
      let sum = 0;
      for (let i = start, j = end - dim; i < end; i += dim) {
          sum += (data[j] - data[i]) * (data[i + 1] + data[j + 1]);
          j = i;
      }
      return sum;
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

  const epsilon$2 = 1.1102230246251565e-16;
  const splitter = 134217729;
  const resulterrbound = (3 + 8 * epsilon$2) * epsilon$2;

  // fast_expansion_sum_zeroelim routine from oritinal code
  function sum(elen, e, flen, f, h) {
      let Q, Qnew, hh, bvirt;
      let enow = e[0];
      let fnow = f[0];
      let eindex = 0;
      let findex = 0;
      if ((fnow > enow) === (fnow > -enow)) {
          Q = enow;
          enow = e[++eindex];
      } else {
          Q = fnow;
          fnow = f[++findex];
      }
      let hindex = 0;
      if (eindex < elen && findex < flen) {
          if ((fnow > enow) === (fnow > -enow)) {
              Qnew = enow + Q;
              hh = Q - (Qnew - enow);
              enow = e[++eindex];
          } else {
              Qnew = fnow + Q;
              hh = Q - (Qnew - fnow);
              fnow = f[++findex];
          }
          Q = Qnew;
          if (hh !== 0) {
              h[hindex++] = hh;
          }
          while (eindex < elen && findex < flen) {
              if ((fnow > enow) === (fnow > -enow)) {
                  Qnew = Q + enow;
                  bvirt = Qnew - Q;
                  hh = Q - (Qnew - bvirt) + (enow - bvirt);
                  enow = e[++eindex];
              } else {
                  Qnew = Q + fnow;
                  bvirt = Qnew - Q;
                  hh = Q - (Qnew - bvirt) + (fnow - bvirt);
                  fnow = f[++findex];
              }
              Q = Qnew;
              if (hh !== 0) {
                  h[hindex++] = hh;
              }
          }
      }
      while (eindex < elen) {
          Qnew = Q + enow;
          bvirt = Qnew - Q;
          hh = Q - (Qnew - bvirt) + (enow - bvirt);
          enow = e[++eindex];
          Q = Qnew;
          if (hh !== 0) {
              h[hindex++] = hh;
          }
      }
      while (findex < flen) {
          Qnew = Q + fnow;
          bvirt = Qnew - Q;
          hh = Q - (Qnew - bvirt) + (fnow - bvirt);
          fnow = f[++findex];
          Q = Qnew;
          if (hh !== 0) {
              h[hindex++] = hh;
          }
      }
      if (Q !== 0 || hindex === 0) {
          h[hindex++] = Q;
      }
      return hindex;
  }

  function estimate(elen, e) {
      let Q = e[0];
      for (let i = 1; i < elen; i++) Q += e[i];
      return Q;
  }

  function vec(n) {
      return new Float64Array(n);
  }

  const ccwerrboundA = (3 + 16 * epsilon$2) * epsilon$2;
  const ccwerrboundB = (2 + 12 * epsilon$2) * epsilon$2;
  const ccwerrboundC = (9 + 64 * epsilon$2) * epsilon$2 * epsilon$2;

  const B = vec(4);
  const C1 = vec(8);
  const C2 = vec(12);
  const D = vec(16);
  const u = vec(4);

  function orient2dadapt(ax, ay, bx, by, cx, cy, detsum) {
      let acxtail, acytail, bcxtail, bcytail;
      let bvirt, c, ahi, alo, bhi, blo, _i, _j, _0, s1, s0, t1, t0, u3;

      const acx = ax - cx;
      const bcx = bx - cx;
      const acy = ay - cy;
      const bcy = by - cy;

      s1 = acx * bcy;
      c = splitter * acx;
      ahi = c - (c - acx);
      alo = acx - ahi;
      c = splitter * bcy;
      bhi = c - (c - bcy);
      blo = bcy - bhi;
      s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
      t1 = acy * bcx;
      c = splitter * acy;
      ahi = c - (c - acy);
      alo = acy - ahi;
      c = splitter * bcx;
      bhi = c - (c - bcx);
      blo = bcx - bhi;
      t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
      _i = s0 - t0;
      bvirt = s0 - _i;
      B[0] = s0 - (_i + bvirt) + (bvirt - t0);
      _j = s1 + _i;
      bvirt = _j - s1;
      _0 = s1 - (_j - bvirt) + (_i - bvirt);
      _i = _0 - t1;
      bvirt = _0 - _i;
      B[1] = _0 - (_i + bvirt) + (bvirt - t1);
      u3 = _j + _i;
      bvirt = u3 - _j;
      B[2] = _j - (u3 - bvirt) + (_i - bvirt);
      B[3] = u3;

      let det = estimate(4, B);
      let errbound = ccwerrboundB * detsum;
      if (det >= errbound || -det >= errbound) {
          return det;
      }

      bvirt = ax - acx;
      acxtail = ax - (acx + bvirt) + (bvirt - cx);
      bvirt = bx - bcx;
      bcxtail = bx - (bcx + bvirt) + (bvirt - cx);
      bvirt = ay - acy;
      acytail = ay - (acy + bvirt) + (bvirt - cy);
      bvirt = by - bcy;
      bcytail = by - (bcy + bvirt) + (bvirt - cy);

      if (acxtail === 0 && acytail === 0 && bcxtail === 0 && bcytail === 0) {
          return det;
      }

      errbound = ccwerrboundC * detsum + resulterrbound * Math.abs(det);
      det += (acx * bcytail + bcy * acxtail) - (acy * bcxtail + bcx * acytail);
      if (det >= errbound || -det >= errbound) return det;

      s1 = acxtail * bcy;
      c = splitter * acxtail;
      ahi = c - (c - acxtail);
      alo = acxtail - ahi;
      c = splitter * bcy;
      bhi = c - (c - bcy);
      blo = bcy - bhi;
      s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
      t1 = acytail * bcx;
      c = splitter * acytail;
      ahi = c - (c - acytail);
      alo = acytail - ahi;
      c = splitter * bcx;
      bhi = c - (c - bcx);
      blo = bcx - bhi;
      t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
      _i = s0 - t0;
      bvirt = s0 - _i;
      u[0] = s0 - (_i + bvirt) + (bvirt - t0);
      _j = s1 + _i;
      bvirt = _j - s1;
      _0 = s1 - (_j - bvirt) + (_i - bvirt);
      _i = _0 - t1;
      bvirt = _0 - _i;
      u[1] = _0 - (_i + bvirt) + (bvirt - t1);
      u3 = _j + _i;
      bvirt = u3 - _j;
      u[2] = _j - (u3 - bvirt) + (_i - bvirt);
      u[3] = u3;
      const C1len = sum(4, B, 4, u, C1);

      s1 = acx * bcytail;
      c = splitter * acx;
      ahi = c - (c - acx);
      alo = acx - ahi;
      c = splitter * bcytail;
      bhi = c - (c - bcytail);
      blo = bcytail - bhi;
      s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
      t1 = acy * bcxtail;
      c = splitter * acy;
      ahi = c - (c - acy);
      alo = acy - ahi;
      c = splitter * bcxtail;
      bhi = c - (c - bcxtail);
      blo = bcxtail - bhi;
      t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
      _i = s0 - t0;
      bvirt = s0 - _i;
      u[0] = s0 - (_i + bvirt) + (bvirt - t0);
      _j = s1 + _i;
      bvirt = _j - s1;
      _0 = s1 - (_j - bvirt) + (_i - bvirt);
      _i = _0 - t1;
      bvirt = _0 - _i;
      u[1] = _0 - (_i + bvirt) + (bvirt - t1);
      u3 = _j + _i;
      bvirt = u3 - _j;
      u[2] = _j - (u3 - bvirt) + (_i - bvirt);
      u[3] = u3;
      const C2len = sum(C1len, C1, 4, u, C2);

      s1 = acxtail * bcytail;
      c = splitter * acxtail;
      ahi = c - (c - acxtail);
      alo = acxtail - ahi;
      c = splitter * bcytail;
      bhi = c - (c - bcytail);
      blo = bcytail - bhi;
      s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
      t1 = acytail * bcxtail;
      c = splitter * acytail;
      ahi = c - (c - acytail);
      alo = acytail - ahi;
      c = splitter * bcxtail;
      bhi = c - (c - bcxtail);
      blo = bcxtail - bhi;
      t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
      _i = s0 - t0;
      bvirt = s0 - _i;
      u[0] = s0 - (_i + bvirt) + (bvirt - t0);
      _j = s1 + _i;
      bvirt = _j - s1;
      _0 = s1 - (_j - bvirt) + (_i - bvirt);
      _i = _0 - t1;
      bvirt = _0 - _i;
      u[1] = _0 - (_i + bvirt) + (bvirt - t1);
      u3 = _j + _i;
      bvirt = u3 - _j;
      u[2] = _j - (u3 - bvirt) + (_i - bvirt);
      u[3] = u3;
      const Dlen = sum(C2len, C2, 4, u, D);

      return D[Dlen - 1];
  }

  function orient2d(ax, ay, bx, by, cx, cy) {
      const detleft = (ay - cy) * (bx - cx);
      const detright = (ax - cx) * (by - cy);
      const det = detleft - detright;

      const detsum = Math.abs(detleft + detright);
      if (Math.abs(det) >= ccwerrboundA * detsum) return det;

      return -orient2dadapt(ax, ay, bx, by, cx, cy, detsum);
  }

  const EPSILON = Math.pow(2, -52);
  const EDGE_STACK = new Uint32Array(512);

  class Delaunator {

      static from(points, getX = defaultGetX, getY = defaultGetY) {
          const n = points.length;
          const coords = new Float64Array(n * 2);

          for (let i = 0; i < n; i++) {
              const p = points[i];
              coords[2 * i] = getX(p);
              coords[2 * i + 1] = getY(p);
          }

          return new Delaunator(coords);
      }

      constructor(coords) {
          const n = coords.length >> 1;
          if (n > 0 && typeof coords[0] !== 'number') throw new Error('Expected coords to contain numbers.');

          this.coords = coords;

          // arrays that will store the triangulation graph
          const maxTriangles = Math.max(2 * n - 5, 0);
          this._triangles = new Uint32Array(maxTriangles * 3);
          this._halfedges = new Int32Array(maxTriangles * 3);

          // temporary arrays for tracking the edges of the advancing convex hull
          this._hashSize = Math.ceil(Math.sqrt(n));
          this._hullPrev = new Uint32Array(n); // edge to prev edge
          this._hullNext = new Uint32Array(n); // edge to next edge
          this._hullTri = new Uint32Array(n); // edge to adjacent triangle
          this._hullHash = new Int32Array(this._hashSize); // angular edge hash

          // temporary arrays for sorting points
          this._ids = new Uint32Array(n);
          this._dists = new Float64Array(n);

          this.update();
      }

      update() {
          const {coords, _hullPrev: hullPrev, _hullNext: hullNext, _hullTri: hullTri, _hullHash: hullHash} =  this;
          const n = coords.length >> 1;

          // populate an array of point indices; calculate input data bbox
          let minX = Infinity;
          let minY = Infinity;
          let maxX = -Infinity;
          let maxY = -Infinity;

          for (let i = 0; i < n; i++) {
              const x = coords[2 * i];
              const y = coords[2 * i + 1];
              if (x < minX) minX = x;
              if (y < minY) minY = y;
              if (x > maxX) maxX = x;
              if (y > maxY) maxY = y;
              this._ids[i] = i;
          }
          const cx = (minX + maxX) / 2;
          const cy = (minY + maxY) / 2;

          let i0, i1, i2;

          // pick a seed point close to the center
          for (let i = 0, minDist = Infinity; i < n; i++) {
              const d = dist(cx, cy, coords[2 * i], coords[2 * i + 1]);
              if (d < minDist) {
                  i0 = i;
                  minDist = d;
              }
          }
          const i0x = coords[2 * i0];
          const i0y = coords[2 * i0 + 1];

          // find the point closest to the seed
          for (let i = 0, minDist = Infinity; i < n; i++) {
              if (i === i0) continue;
              const d = dist(i0x, i0y, coords[2 * i], coords[2 * i + 1]);
              if (d < minDist && d > 0) {
                  i1 = i;
                  minDist = d;
              }
          }
          let i1x = coords[2 * i1];
          let i1y = coords[2 * i1 + 1];

          let minRadius = Infinity;

          // find the third point which forms the smallest circumcircle with the first two
          for (let i = 0; i < n; i++) {
              if (i === i0 || i === i1) continue;
              const r = circumradius(i0x, i0y, i1x, i1y, coords[2 * i], coords[2 * i + 1]);
              if (r < minRadius) {
                  i2 = i;
                  minRadius = r;
              }
          }
          let i2x = coords[2 * i2];
          let i2y = coords[2 * i2 + 1];

          if (minRadius === Infinity) {
              // order collinear points by dx (or dy if all x are identical)
              // and return the list as a hull
              for (let i = 0; i < n; i++) {
                  this._dists[i] = (coords[2 * i] - coords[0]) || (coords[2 * i + 1] - coords[1]);
              }
              quicksort(this._ids, this._dists, 0, n - 1);
              const hull = new Uint32Array(n);
              let j = 0;
              for (let i = 0, d0 = -Infinity; i < n; i++) {
                  const id = this._ids[i];
                  const d = this._dists[id];
                  if (d > d0) {
                      hull[j++] = id;
                      d0 = d;
                  }
              }
              this.hull = hull.subarray(0, j);
              this.triangles = new Uint32Array(0);
              this.halfedges = new Uint32Array(0);
              return;
          }

          // swap the order of the seed points for counter-clockwise orientation
          if (orient2d(i0x, i0y, i1x, i1y, i2x, i2y) < 0) {
              const i = i1;
              const x = i1x;
              const y = i1y;
              i1 = i2;
              i1x = i2x;
              i1y = i2y;
              i2 = i;
              i2x = x;
              i2y = y;
          }

          const center = circumcenter(i0x, i0y, i1x, i1y, i2x, i2y);
          this._cx = center.x;
          this._cy = center.y;

          for (let i = 0; i < n; i++) {
              this._dists[i] = dist(coords[2 * i], coords[2 * i + 1], center.x, center.y);
          }

          // sort the points by distance from the seed triangle circumcenter
          quicksort(this._ids, this._dists, 0, n - 1);

          // set up the seed triangle as the starting hull
          this._hullStart = i0;
          let hullSize = 3;

          hullNext[i0] = hullPrev[i2] = i1;
          hullNext[i1] = hullPrev[i0] = i2;
          hullNext[i2] = hullPrev[i1] = i0;

          hullTri[i0] = 0;
          hullTri[i1] = 1;
          hullTri[i2] = 2;

          hullHash.fill(-1);
          hullHash[this._hashKey(i0x, i0y)] = i0;
          hullHash[this._hashKey(i1x, i1y)] = i1;
          hullHash[this._hashKey(i2x, i2y)] = i2;

          this.trianglesLen = 0;
          this._addTriangle(i0, i1, i2, -1, -1, -1);

          for (let k = 0, xp, yp; k < this._ids.length; k++) {
              const i = this._ids[k];
              const x = coords[2 * i];
              const y = coords[2 * i + 1];

              // skip near-duplicate points
              if (k > 0 && Math.abs(x - xp) <= EPSILON && Math.abs(y - yp) <= EPSILON) continue;
              xp = x;
              yp = y;

              // skip seed triangle points
              if (i === i0 || i === i1 || i === i2) continue;

              // find a visible edge on the convex hull using edge hash
              let start = 0;
              for (let j = 0, key = this._hashKey(x, y); j < this._hashSize; j++) {
                  start = hullHash[(key + j) % this._hashSize];
                  if (start !== -1 && start !== hullNext[start]) break;
              }

              start = hullPrev[start];
              let e = start, q;
              while (q = hullNext[e], orient2d(x, y, coords[2 * e], coords[2 * e + 1], coords[2 * q], coords[2 * q + 1]) >= 0) {
                  e = q;
                  if (e === start) {
                      e = -1;
                      break;
                  }
              }
              if (e === -1) continue; // likely a near-duplicate point; skip it

              // add the first triangle from the point
              let t = this._addTriangle(e, i, hullNext[e], -1, -1, hullTri[e]);

              // recursively flip triangles from the point until they satisfy the Delaunay condition
              hullTri[i] = this._legalize(t + 2);
              hullTri[e] = t; // keep track of boundary triangles on the hull
              hullSize++;

              // walk forward through the hull, adding more triangles and flipping recursively
              let n = hullNext[e];
              while (q = hullNext[n], orient2d(x, y, coords[2 * n], coords[2 * n + 1], coords[2 * q], coords[2 * q + 1]) < 0) {
                  t = this._addTriangle(n, i, q, hullTri[i], -1, hullTri[n]);
                  hullTri[i] = this._legalize(t + 2);
                  hullNext[n] = n; // mark as removed
                  hullSize--;
                  n = q;
              }

              // walk backward from the other side, adding more triangles and flipping
              if (e === start) {
                  while (q = hullPrev[e], orient2d(x, y, coords[2 * q], coords[2 * q + 1], coords[2 * e], coords[2 * e + 1]) < 0) {
                      t = this._addTriangle(q, i, e, -1, hullTri[e], hullTri[q]);
                      this._legalize(t + 2);
                      hullTri[q] = t;
                      hullNext[e] = e; // mark as removed
                      hullSize--;
                      e = q;
                  }
              }

              // update the hull indices
              this._hullStart = hullPrev[i] = e;
              hullNext[e] = hullPrev[n] = i;
              hullNext[i] = n;

              // save the two new edges in the hash table
              hullHash[this._hashKey(x, y)] = i;
              hullHash[this._hashKey(coords[2 * e], coords[2 * e + 1])] = e;
          }

          this.hull = new Uint32Array(hullSize);
          for (let i = 0, e = this._hullStart; i < hullSize; i++) {
              this.hull[i] = e;
              e = hullNext[e];
          }

          // trim typed triangle mesh arrays
          this.triangles = this._triangles.subarray(0, this.trianglesLen);
          this.halfedges = this._halfedges.subarray(0, this.trianglesLen);
      }

      _hashKey(x, y) {
          return Math.floor(pseudoAngle(x - this._cx, y - this._cy) * this._hashSize) % this._hashSize;
      }

      _legalize(a) {
          const {_triangles: triangles, _halfedges: halfedges, coords} = this;

          let i = 0;
          let ar = 0;

          // recursion eliminated with a fixed-size stack
          while (true) {
              const b = halfedges[a];

              /* if the pair of triangles doesn't satisfy the Delaunay condition
               * (p1 is inside the circumcircle of [p0, pl, pr]), flip them,
               * then do the same check/flip recursively for the new pair of triangles
               *
               *           pl                    pl
               *          /||\                  /  \
               *       al/ || \bl            al/    \a
               *        /  ||  \              /      \
               *       /  a||b  \    flip    /___ar___\
               *     p0\   ||   /p1   =>   p0\---bl---/p1
               *        \  ||  /              \      /
               *       ar\ || /br             b\    /br
               *          \||/                  \  /
               *           pr                    pr
               */
              const a0 = a - a % 3;
              ar = a0 + (a + 2) % 3;

              if (b === -1) { // convex hull edge
                  if (i === 0) break;
                  a = EDGE_STACK[--i];
                  continue;
              }

              const b0 = b - b % 3;
              const al = a0 + (a + 1) % 3;
              const bl = b0 + (b + 2) % 3;

              const p0 = triangles[ar];
              const pr = triangles[a];
              const pl = triangles[al];
              const p1 = triangles[bl];

              const illegal = inCircle(
                  coords[2 * p0], coords[2 * p0 + 1],
                  coords[2 * pr], coords[2 * pr + 1],
                  coords[2 * pl], coords[2 * pl + 1],
                  coords[2 * p1], coords[2 * p1 + 1]);

              if (illegal) {
                  triangles[a] = p1;
                  triangles[b] = p0;

                  const hbl = halfedges[bl];

                  // edge swapped on the other side of the hull (rare); fix the halfedge reference
                  if (hbl === -1) {
                      let e = this._hullStart;
                      do {
                          if (this._hullTri[e] === bl) {
                              this._hullTri[e] = a;
                              break;
                          }
                          e = this._hullPrev[e];
                      } while (e !== this._hullStart);
                  }
                  this._link(a, hbl);
                  this._link(b, halfedges[ar]);
                  this._link(ar, bl);

                  const br = b0 + (b + 1) % 3;

                  // don't worry about hitting the cap: it can only happen on extremely degenerate input
                  if (i < EDGE_STACK.length) {
                      EDGE_STACK[i++] = br;
                  }
              } else {
                  if (i === 0) break;
                  a = EDGE_STACK[--i];
              }
          }

          return ar;
      }

      _link(a, b) {
          this._halfedges[a] = b;
          if (b !== -1) this._halfedges[b] = a;
      }

      // add a new triangle given vertex indices and adjacent half-edge ids
      _addTriangle(i0, i1, i2, a, b, c) {
          const t = this.trianglesLen;

          this._triangles[t] = i0;
          this._triangles[t + 1] = i1;
          this._triangles[t + 2] = i2;

          this._link(t, a);
          this._link(t + 1, b);
          this._link(t + 2, c);

          this.trianglesLen += 3;

          return t;
      }
  }

  // monotonically increases with real angle, but doesn't need expensive trigonometry
  function pseudoAngle(dx, dy) {
      const p = dx / (Math.abs(dx) + Math.abs(dy));
      return (dy > 0 ? 3 - p : 1 + p) / 4; // [0..1]
  }

  function dist(ax, ay, bx, by) {
      const dx = ax - bx;
      const dy = ay - by;
      return dx * dx + dy * dy;
  }

  function inCircle(ax, ay, bx, by, cx, cy, px, py) {
      const dx = ax - px;
      const dy = ay - py;
      const ex = bx - px;
      const ey = by - py;
      const fx = cx - px;
      const fy = cy - py;

      const ap = dx * dx + dy * dy;
      const bp = ex * ex + ey * ey;
      const cp = fx * fx + fy * fy;

      return dx * (ey * cp - bp * fy) -
             dy * (ex * cp - bp * fx) +
             ap * (ex * fy - ey * fx) < 0;
  }

  function circumradius(ax, ay, bx, by, cx, cy) {
      const dx = bx - ax;
      const dy = by - ay;
      const ex = cx - ax;
      const ey = cy - ay;

      const bl = dx * dx + dy * dy;
      const cl = ex * ex + ey * ey;
      const d = 0.5 / (dx * ey - dy * ex);

      const x = (ey * bl - dy * cl) * d;
      const y = (dx * cl - ex * bl) * d;

      return x * x + y * y;
  }

  function circumcenter(ax, ay, bx, by, cx, cy) {
      const dx = bx - ax;
      const dy = by - ay;
      const ex = cx - ax;
      const ey = cy - ay;

      const bl = dx * dx + dy * dy;
      const cl = ex * ex + ey * ey;
      const d = 0.5 / (dx * ey - dy * ex);

      const x = ax + (ey * bl - dy * cl) * d;
      const y = ay + (dx * cl - ex * bl) * d;

      return {x, y};
  }

  function quicksort(ids, dists, left, right) {
      if (right - left <= 20) {
          for (let i = left + 1; i <= right; i++) {
              const temp = ids[i];
              const tempDist = dists[temp];
              let j = i - 1;
              while (j >= left && dists[ids[j]] > tempDist) ids[j + 1] = ids[j--];
              ids[j + 1] = temp;
          }
      } else {
          const median = (left + right) >> 1;
          let i = left + 1;
          let j = right;
          swap(ids, median, i);
          if (dists[ids[left]] > dists[ids[right]]) swap(ids, left, right);
          if (dists[ids[i]] > dists[ids[right]]) swap(ids, i, right);
          if (dists[ids[left]] > dists[ids[i]]) swap(ids, left, i);

          const temp = ids[i];
          const tempDist = dists[temp];
          while (true) {
              do i++; while (dists[ids[i]] < tempDist);
              do j--; while (dists[ids[j]] > tempDist);
              if (j < i) break;
              swap(ids, i, j);
          }
          ids[left + 1] = ids[j];
          ids[j] = temp;

          if (right - i + 1 >= j - left) {
              quicksort(ids, dists, i, right);
              quicksort(ids, dists, left, j - 1);
          } else {
              quicksort(ids, dists, left, j - 1);
              quicksort(ids, dists, i, right);
          }
      }
  }

  function swap(arr, i, j) {
      const tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
  }

  function defaultGetX(p) {
      return p[0];
  }
  function defaultGetY(p) {
      return p[1];
  }

  function pointInPolygon(p, polygon) {
      var i;
      var ii;
      var k = 0;
      var f;
      var u1;
      var v1;
      var u2;
      var v2;
      var currentP;
      var nextP;

      var x = p[0];
      var y = p[1];

      var numContours = polygon.length;
      for (i = 0; i < numContours; i++) {
          ii = 0;
          var contour = polygon[i];
          var contourLen = contour.length - 1;

          currentP = contour[0];
          if (currentP[0] !== contour[contourLen][0] &&
              currentP[1] !== contour[contourLen][1]) {
              throw new Error('First and last coordinates in a ring must be the same')
          }

          u1 = currentP[0] - x;
          v1 = currentP[1] - y;

          for (ii; ii < contourLen; ii++) {
              nextP = contour[ii + 1];

              u2 = nextP[0] - x;
              v2 = nextP[1] - y;

              if (v1 === 0 && v2 === 0) {
                  if ((u2 <= 0 && u1 >= 0) || (u1 <= 0 && u2 >= 0)) { return 0 }
              } else if ((v2 >= 0 && v1 <= 0) || (v2 <= 0 && v1 >= 0)) {
                  f = orient2d(u1, u2, v1, v2, 0, 0);
                  if (f === 0) { return 0 }
                  if ((f > 0 && v2 > 0 && v1 <= 0) || (f < 0 && v2 <= 0 && v1 > 0)) { k++; }
              }
              currentP = nextP;
              v1 = v2;
              u1 = u2;
          }
      }

      if (k % 2 === 0) { return false }
      return true
  }

  // index.ts
  function getCoord(coord) {
    if (!coord) {
      throw new Error("coord is required");
    }
    if (!Array.isArray(coord)) {
      if (coord.type === "Feature" && coord.geometry !== null && coord.geometry.type === "Point") {
        return [...coord.geometry.coordinates];
      }
      if (coord.type === "Point") {
        return [...coord.coordinates];
      }
    }
    if (Array.isArray(coord) && coord.length >= 2 && !Array.isArray(coord[0]) && !Array.isArray(coord[1])) {
      return [...coord];
    }
    throw new Error("coord must be GeoJSON Point or an Array of numbers");
  }
  function getGeom(geojson) {
    if (geojson.type === "Feature") {
      return geojson.geometry;
    }
    return geojson;
  }

  // index.ts
  function booleanPointInPolygon(point, polygon, options = {}) {
    if (!point) {
      throw new Error("point is required");
    }
    if (!polygon) {
      throw new Error("polygon is required");
    }
    const pt = getCoord(point);
    const geom = getGeom(polygon);
    const type = geom.type;
    const bbox = polygon.bbox;
    let polys = geom.coordinates;
    if (bbox && inBBox(pt, bbox) === false) {
      return false;
    }
    if (type === "Polygon") {
      polys = [polys];
    }
    let result = false;
    for (var i = 0; i < polys.length; ++i) {
      const polyResult = pointInPolygon(pt, polys[i]);
      if (polyResult === 0) return options.ignoreBoundary ? false : true;
      else if (polyResult) result = true;
    }
    return result;
  }
  function inBBox(pt, bbox) {
    return bbox[0] <= pt[0] && bbox[1] <= pt[1] && bbox[2] >= pt[0] && bbox[3] >= pt[1];
  }
  var turf_boolean_point_in_polygon_default = booleanPointInPolygon;

  var epsilon$1 = 1e-6;
  var epsilon2 = 1e-12;
  var pi$1 = Math.PI;
  var halfPi$1 = pi$1 / 2;
  var quarterPi = pi$1 / 4;
  var tau$1 = pi$1 * 2;

  var degrees$1 = 180 / pi$1;
  var radians$1 = pi$1 / 180;

  var abs = Math.abs;
  var atan = Math.atan;
  var atan2$1 = Math.atan2;
  var cos$1 = Math.cos;
  var hypot = Math.hypot;
  var sin$1 = Math.sin;
  var sign$1 = Math.sign || function(x) { return x > 0 ? 1 : x < 0 ? -1 : 0; };
  var sqrt$1 = Math.sqrt;

  function acos(x) {
    return x > 1 ? 0 : x < -1 ? pi$1 : Math.acos(x);
  }

  function asin$1(x) {
    return x > 1 ? halfPi$1 : x < -1 ? -halfPi$1 : Math.asin(x);
  }

  function haversin(x) {
    return (x = sin$1(x / 2)) * x;
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
    if (object && streamObjectType.hasOwnProperty(object.type)) {
      streamObjectType[object.type](object, stream);
    } else {
      streamGeometry(object, stream);
    }
  }

  var areaRingSum = new Adder();

  // hello?

  var areaSum = new Adder(),
      lambda00$2,
      phi00$2,
      lambda0$2,
      cosPhi0$1,
      sinPhi0$1;

  var areaStream = {
    point: noop,
    lineStart: noop,
    lineEnd: noop,
    polygonStart: function() {
      areaRingSum = new Adder();
      areaStream.lineStart = areaRingStart;
      areaStream.lineEnd = areaRingEnd;
    },
    polygonEnd: function() {
      var areaRing = +areaRingSum;
      areaSum.add(areaRing < 0 ? tau$1 + areaRing : areaRing);
      this.lineStart = this.lineEnd = this.point = noop;
    },
    sphere: function() {
      areaSum.add(tau$1);
    }
  };

  function areaRingStart() {
    areaStream.point = areaPointFirst;
  }

  function areaRingEnd() {
    areaPoint(lambda00$2, phi00$2);
  }

  function areaPointFirst(lambda, phi) {
    areaStream.point = areaPoint;
    lambda00$2 = lambda, phi00$2 = phi;
    lambda *= radians$1, phi *= radians$1;
    lambda0$2 = lambda, cosPhi0$1 = cos$1(phi = phi / 2 + quarterPi), sinPhi0$1 = sin$1(phi);
  }

  function areaPoint(lambda, phi) {
    lambda *= radians$1, phi *= radians$1;
    phi = phi / 2 + quarterPi; // half the angular distance from south pole

    // Spherical excess E for a spherical triangle with vertices: south pole,
    // previous point, current point.  Uses a formula derived from Cagnoli’s
    // theorem.  See Todhunter, Spherical Trig. (1871), Sec. 103, Eq. (2).
    var dLambda = lambda - lambda0$2,
        sdLambda = dLambda >= 0 ? 1 : -1,
        adLambda = sdLambda * dLambda,
        cosPhi = cos$1(phi),
        sinPhi = sin$1(phi),
        k = sinPhi0$1 * sinPhi,
        u = cosPhi0$1 * cosPhi + k * cos$1(adLambda),
        v = k * sdLambda * sin$1(adLambda);
    areaRingSum.add(atan2$1(v, u));

    // Advance the previous points.
    lambda0$2 = lambda, cosPhi0$1 = cosPhi, sinPhi0$1 = sinPhi;
  }

  function spherical$1(cartesian) {
    return [atan2$1(cartesian[1], cartesian[0]), asin$1(cartesian[2])];
  }

  function cartesian$1(spherical) {
    var lambda = spherical[0], phi = spherical[1], cosPhi = cos$1(phi);
    return [cosPhi * cos$1(lambda), cosPhi * sin$1(lambda), sin$1(phi)];
  }

  function cartesianDot$1(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  }

  function cartesianCross$1(a, b) {
    return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  }

  // TODO return a
  function cartesianAddInPlace(a, b) {
    a[0] += b[0], a[1] += b[1], a[2] += b[2];
  }

  function cartesianScale(vector, k) {
    return [vector[0] * k, vector[1] * k, vector[2] * k];
  }

  // TODO return d
  function cartesianNormalizeInPlace(d) {
    var l = sqrt$1(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
    d[0] /= l, d[1] /= l, d[2] /= l;
  }

  var lambda0$1, phi0, lambda1, phi1, // bounds
      lambda2, // previous lambda-coordinate
      lambda00$1, phi00$1, // first point
      p0, // previous 3D point
      deltaSum,
      ranges,
      range;

  var boundsStream$1 = {
    point: boundsPoint$1,
    lineStart: boundsLineStart,
    lineEnd: boundsLineEnd,
    polygonStart: function() {
      boundsStream$1.point = boundsRingPoint;
      boundsStream$1.lineStart = boundsRingStart;
      boundsStream$1.lineEnd = boundsRingEnd;
      deltaSum = new Adder();
      areaStream.polygonStart();
    },
    polygonEnd: function() {
      areaStream.polygonEnd();
      boundsStream$1.point = boundsPoint$1;
      boundsStream$1.lineStart = boundsLineStart;
      boundsStream$1.lineEnd = boundsLineEnd;
      if (areaRingSum < 0) lambda0$1 = -(lambda1 = 180), phi0 = -(phi1 = 90);
      else if (deltaSum > epsilon$1) phi1 = 90;
      else if (deltaSum < -1e-6) phi0 = -90;
      range[0] = lambda0$1, range[1] = lambda1;
    },
    sphere: function() {
      lambda0$1 = -(lambda1 = 180), phi0 = -(phi1 = 90);
    }
  };

  function boundsPoint$1(lambda, phi) {
    ranges.push(range = [lambda0$1 = lambda, lambda1 = lambda]);
    if (phi < phi0) phi0 = phi;
    if (phi > phi1) phi1 = phi;
  }

  function linePoint(lambda, phi) {
    var p = cartesian$1([lambda * radians$1, phi * radians$1]);
    if (p0) {
      var normal = cartesianCross$1(p0, p),
          equatorial = [normal[1], -normal[0], 0],
          inflection = cartesianCross$1(equatorial, normal);
      cartesianNormalizeInPlace(inflection);
      inflection = spherical$1(inflection);
      var delta = lambda - lambda2,
          sign = delta > 0 ? 1 : -1,
          lambdai = inflection[0] * degrees$1 * sign,
          phii,
          antimeridian = abs(delta) > 180;
      if (antimeridian ^ (sign * lambda2 < lambdai && lambdai < sign * lambda)) {
        phii = inflection[1] * degrees$1;
        if (phii > phi1) phi1 = phii;
      } else if (lambdai = (lambdai + 360) % 360 - 180, antimeridian ^ (sign * lambda2 < lambdai && lambdai < sign * lambda)) {
        phii = -inflection[1] * degrees$1;
        if (phii < phi0) phi0 = phii;
      } else {
        if (phi < phi0) phi0 = phi;
        if (phi > phi1) phi1 = phi;
      }
      if (antimeridian) {
        if (lambda < lambda2) {
          if (angle(lambda0$1, lambda) > angle(lambda0$1, lambda1)) lambda1 = lambda;
        } else {
          if (angle(lambda, lambda1) > angle(lambda0$1, lambda1)) lambda0$1 = lambda;
        }
      } else {
        if (lambda1 >= lambda0$1) {
          if (lambda < lambda0$1) lambda0$1 = lambda;
          if (lambda > lambda1) lambda1 = lambda;
        } else {
          if (lambda > lambda2) {
            if (angle(lambda0$1, lambda) > angle(lambda0$1, lambda1)) lambda1 = lambda;
          } else {
            if (angle(lambda, lambda1) > angle(lambda0$1, lambda1)) lambda0$1 = lambda;
          }
        }
      }
    } else {
      ranges.push(range = [lambda0$1 = lambda, lambda1 = lambda]);
    }
    if (phi < phi0) phi0 = phi;
    if (phi > phi1) phi1 = phi;
    p0 = p, lambda2 = lambda;
  }

  function boundsLineStart() {
    boundsStream$1.point = linePoint;
  }

  function boundsLineEnd() {
    range[0] = lambda0$1, range[1] = lambda1;
    boundsStream$1.point = boundsPoint$1;
    p0 = null;
  }

  function boundsRingPoint(lambda, phi) {
    if (p0) {
      var delta = lambda - lambda2;
      deltaSum.add(abs(delta) > 180 ? delta + (delta > 0 ? 360 : -360) : delta);
    } else {
      lambda00$1 = lambda, phi00$1 = phi;
    }
    areaStream.point(lambda, phi);
    linePoint(lambda, phi);
  }

  function boundsRingStart() {
    areaStream.lineStart();
  }

  function boundsRingEnd() {
    boundsRingPoint(lambda00$1, phi00$1);
    areaStream.lineEnd();
    if (abs(deltaSum) > epsilon$1) lambda0$1 = -(lambda1 = 180);
    range[0] = lambda0$1, range[1] = lambda1;
    p0 = null;
  }

  // Finds the left-right distance between two longitudes.
  // This is almost the same as (lambda1 - lambda0 + 360°) % 360°, except that we want
  // the distance between ±180° to be 360°.
  function angle(lambda0, lambda1) {
    return (lambda1 -= lambda0) < 0 ? lambda1 + 360 : lambda1;
  }

  function rangeCompare(a, b) {
    return a[0] - b[0];
  }

  function rangeContains(range, x) {
    return range[0] <= range[1] ? range[0] <= x && x <= range[1] : x < range[0] || range[1] < x;
  }

  function geoBounds(feature) {
    var i, n, a, b, merged, deltaMax, delta;

    phi1 = lambda1 = -(lambda0$1 = phi0 = Infinity);
    ranges = [];
    geoStream(feature, boundsStream$1);

    // First, sort ranges by their minimum longitudes.
    if (n = ranges.length) {
      ranges.sort(rangeCompare);

      // Then, merge any ranges that overlap.
      for (i = 1, a = ranges[0], merged = [a]; i < n; ++i) {
        b = ranges[i];
        if (rangeContains(a, b[0]) || rangeContains(a, b[1])) {
          if (angle(a[0], b[1]) > angle(a[0], a[1])) a[1] = b[1];
          if (angle(b[0], a[1]) > angle(a[0], a[1])) a[0] = b[0];
        } else {
          merged.push(a = b);
        }
      }

      // Finally, find the largest gap between the merged ranges.
      // The final bounding box will be the inverse of this gap.
      for (deltaMax = -Infinity, n = merged.length - 1, i = 0, a = merged[n]; i <= n; a = b, ++i) {
        b = merged[i];
        if ((delta = angle(a[1], b[0])) > deltaMax) deltaMax = delta, lambda0$1 = b[0], lambda1 = a[1];
      }
    }

    ranges = range = null;

    return lambda0$1 === Infinity || phi0 === Infinity
        ? [[NaN, NaN], [NaN, NaN]]
        : [[lambda0$1, phi0], [lambda1, phi1]];
  }

  var W0, W1,
      X0, Y0, Z0,
      X1, Y1, Z1,
      X2, Y2, Z2,
      lambda00, phi00, // first point
      x0$1, y0$1, z0; // previous point

  var centroidStream = {
    sphere: noop,
    point: centroidPoint,
    lineStart: centroidLineStart,
    lineEnd: centroidLineEnd,
    polygonStart: function() {
      centroidStream.lineStart = centroidRingStart;
      centroidStream.lineEnd = centroidRingEnd;
    },
    polygonEnd: function() {
      centroidStream.lineStart = centroidLineStart;
      centroidStream.lineEnd = centroidLineEnd;
    }
  };

  // Arithmetic mean of Cartesian vectors.
  function centroidPoint(lambda, phi) {
    lambda *= radians$1, phi *= radians$1;
    var cosPhi = cos$1(phi);
    centroidPointCartesian(cosPhi * cos$1(lambda), cosPhi * sin$1(lambda), sin$1(phi));
  }

  function centroidPointCartesian(x, y, z) {
    ++W0;
    X0 += (x - X0) / W0;
    Y0 += (y - Y0) / W0;
    Z0 += (z - Z0) / W0;
  }

  function centroidLineStart() {
    centroidStream.point = centroidLinePointFirst;
  }

  function centroidLinePointFirst(lambda, phi) {
    lambda *= radians$1, phi *= radians$1;
    var cosPhi = cos$1(phi);
    x0$1 = cosPhi * cos$1(lambda);
    y0$1 = cosPhi * sin$1(lambda);
    z0 = sin$1(phi);
    centroidStream.point = centroidLinePoint;
    centroidPointCartesian(x0$1, y0$1, z0);
  }

  function centroidLinePoint(lambda, phi) {
    lambda *= radians$1, phi *= radians$1;
    var cosPhi = cos$1(phi),
        x = cosPhi * cos$1(lambda),
        y = cosPhi * sin$1(lambda),
        z = sin$1(phi),
        w = atan2$1(sqrt$1((w = y0$1 * z - z0 * y) * w + (w = z0 * x - x0$1 * z) * w + (w = x0$1 * y - y0$1 * x) * w), x0$1 * x + y0$1 * y + z0 * z);
    W1 += w;
    X1 += w * (x0$1 + (x0$1 = x));
    Y1 += w * (y0$1 + (y0$1 = y));
    Z1 += w * (z0 + (z0 = z));
    centroidPointCartesian(x0$1, y0$1, z0);
  }

  function centroidLineEnd() {
    centroidStream.point = centroidPoint;
  }

  // See J. E. Brock, The Inertia Tensor for a Spherical Triangle,
  // J. Applied Mechanics 42, 239 (1975).
  function centroidRingStart() {
    centroidStream.point = centroidRingPointFirst;
  }

  function centroidRingEnd() {
    centroidRingPoint(lambda00, phi00);
    centroidStream.point = centroidPoint;
  }

  function centroidRingPointFirst(lambda, phi) {
    lambda00 = lambda, phi00 = phi;
    lambda *= radians$1, phi *= radians$1;
    centroidStream.point = centroidRingPoint;
    var cosPhi = cos$1(phi);
    x0$1 = cosPhi * cos$1(lambda);
    y0$1 = cosPhi * sin$1(lambda);
    z0 = sin$1(phi);
    centroidPointCartesian(x0$1, y0$1, z0);
  }

  function centroidRingPoint(lambda, phi) {
    lambda *= radians$1, phi *= radians$1;
    var cosPhi = cos$1(phi),
        x = cosPhi * cos$1(lambda),
        y = cosPhi * sin$1(lambda),
        z = sin$1(phi),
        cx = y0$1 * z - z0 * y,
        cy = z0 * x - x0$1 * z,
        cz = x0$1 * y - y0$1 * x,
        m = hypot(cx, cy, cz),
        w = asin$1(m), // line weight = angle
        v = m && -w / m; // area weight multiplier
    X2.add(v * cx);
    Y2.add(v * cy);
    Z2.add(v * cz);
    W1 += w;
    X1 += w * (x0$1 + (x0$1 = x));
    Y1 += w * (y0$1 + (y0$1 = y));
    Z1 += w * (z0 + (z0 = z));
    centroidPointCartesian(x0$1, y0$1, z0);
  }

  function geoCentroid(object) {
    W0 = W1 =
    X0 = Y0 = Z0 =
    X1 = Y1 = Z1 = 0;
    X2 = new Adder();
    Y2 = new Adder();
    Z2 = new Adder();
    geoStream(object, centroidStream);

    var x = +X2,
        y = +Y2,
        z = +Z2,
        m = hypot(x, y, z);

    // If the area-weighted ccentroid is undefined, fall back to length-weighted ccentroid.
    if (m < epsilon2) {
      x = X1, y = Y1, z = Z1;
      // If the feature has zero length, fall back to arithmetic mean of point vectors.
      if (W1 < epsilon$1) x = X0, y = Y0, z = Z0;
      m = hypot(x, y, z);
      // If the feature still has an undefined ccentroid, then return.
      if (m < epsilon2) return [NaN, NaN];
    }

    return [atan2$1(y, x) * degrees$1, asin$1(z / m) * degrees$1];
  }

  function compose(a, b) {

    function compose(x, y) {
      return x = a(x, y), b(x[0], x[1]);
    }

    if (a.invert && b.invert) compose.invert = function(x, y) {
      return x = b.invert(x, y), x && a.invert(x[0], x[1]);
    };

    return compose;
  }

  function rotationIdentity(lambda, phi) {
    if (abs(lambda) > pi$1) lambda -= Math.round(lambda / tau$1) * tau$1;
    return [lambda, phi];
  }

  rotationIdentity.invert = rotationIdentity;

  function rotateRadians(deltaLambda, deltaPhi, deltaGamma) {
    return (deltaLambda %= tau$1) ? (deltaPhi || deltaGamma ? compose(rotationLambda(deltaLambda), rotationPhiGamma(deltaPhi, deltaGamma))
      : rotationLambda(deltaLambda))
      : (deltaPhi || deltaGamma ? rotationPhiGamma(deltaPhi, deltaGamma)
      : rotationIdentity);
  }

  function forwardRotationLambda(deltaLambda) {
    return function(lambda, phi) {
      lambda += deltaLambda;
      if (abs(lambda) > pi$1) lambda -= Math.round(lambda / tau$1) * tau$1;
      return [lambda, phi];
    };
  }

  function rotationLambda(deltaLambda) {
    var rotation = forwardRotationLambda(deltaLambda);
    rotation.invert = forwardRotationLambda(-deltaLambda);
    return rotation;
  }

  function rotationPhiGamma(deltaPhi, deltaGamma) {
    var cosDeltaPhi = cos$1(deltaPhi),
        sinDeltaPhi = sin$1(deltaPhi),
        cosDeltaGamma = cos$1(deltaGamma),
        sinDeltaGamma = sin$1(deltaGamma);

    function rotation(lambda, phi) {
      var cosPhi = cos$1(phi),
          x = cos$1(lambda) * cosPhi,
          y = sin$1(lambda) * cosPhi,
          z = sin$1(phi),
          k = z * cosDeltaPhi + x * sinDeltaPhi;
      return [
        atan2$1(y * cosDeltaGamma - k * sinDeltaGamma, x * cosDeltaPhi - z * sinDeltaPhi),
        asin$1(k * cosDeltaGamma + y * sinDeltaGamma)
      ];
    }

    rotation.invert = function(lambda, phi) {
      var cosPhi = cos$1(phi),
          x = cos$1(lambda) * cosPhi,
          y = sin$1(lambda) * cosPhi,
          z = sin$1(phi),
          k = z * cosDeltaGamma - y * sinDeltaGamma;
      return [
        atan2$1(y * cosDeltaGamma + z * sinDeltaGamma, x * cosDeltaPhi + k * sinDeltaPhi),
        asin$1(k * cosDeltaPhi - x * sinDeltaPhi)
      ];
    };

    return rotation;
  }

  function geoRotation(rotate) {
    rotate = rotateRadians(rotate[0] * radians$1, rotate[1] * radians$1, rotate.length > 2 ? rotate[2] * radians$1 : 0);

    function forward(coordinates) {
      coordinates = rotate(coordinates[0] * radians$1, coordinates[1] * radians$1);
      return coordinates[0] *= degrees$1, coordinates[1] *= degrees$1, coordinates;
    }

    forward.invert = function(coordinates) {
      coordinates = rotate.invert(coordinates[0] * radians$1, coordinates[1] * radians$1);
      return coordinates[0] *= degrees$1, coordinates[1] *= degrees$1, coordinates;
    };

    return forward;
  }

  // Generates a circle centered at [0°, 0°], with a given radius and precision.
  function circleStream(stream, radius, delta, direction, t0, t1) {
    if (!delta) return;
    var cosRadius = cos$1(radius),
        sinRadius = sin$1(radius),
        step = direction * delta;
    if (t0 == null) {
      t0 = radius + direction * tau$1;
      t1 = radius - step / 2;
    } else {
      t0 = circleRadius(cosRadius, t0);
      t1 = circleRadius(cosRadius, t1);
      if (direction > 0 ? t0 < t1 : t0 > t1) t0 += direction * tau$1;
    }
    for (var point, t = t0; direction > 0 ? t > t1 : t < t1; t -= step) {
      point = spherical$1([cosRadius, -sinRadius * cos$1(t), -sinRadius * sin$1(t)]);
      stream.point(point[0], point[1]);
    }
  }

  // Returns the signed angle of a cartesian point relative to [cosRadius, 0, 0].
  function circleRadius(cosRadius, point) {
    point = cartesian$1(point), point[0] -= cosRadius;
    cartesianNormalizeInPlace(point);
    var radius = acos(-point[1]);
    return ((-point[2] < 0 ? -radius : radius) + tau$1 - epsilon$1) % tau$1;
  }

  function clipBuffer() {
    var lines = [],
        line;
    return {
      point: function(x, y, m) {
        line.push([x, y, m]);
      },
      lineStart: function() {
        lines.push(line = []);
      },
      lineEnd: noop,
      rejoin: function() {
        if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
      },
      result: function() {
        var result = lines;
        lines = [];
        line = null;
        return result;
      }
    };
  }

  function pointEqual(a, b) {
    return abs(a[0] - b[0]) < epsilon$1 && abs(a[1] - b[1]) < epsilon$1;
  }

  function Intersection(point, points, other, entry) {
    this.x = point;
    this.z = points;
    this.o = other; // another intersection
    this.e = entry; // is an entry?
    this.v = false; // visited
    this.n = this.p = null; // next & previous
  }

  // A generalized polygon clipping algorithm: given a polygon that has been cut
  // into its visible line segments, and rejoins the segments by interpolating
  // along the clip edge.
  function clipRejoin(segments, compareIntersection, startInside, interpolate, stream) {
    var subject = [],
        clip = [],
        i,
        n;

    segments.forEach(function(segment) {
      if ((n = segment.length - 1) <= 0) return;
      var n, p0 = segment[0], p1 = segment[n], x;

      if (pointEqual(p0, p1)) {
        if (!p0[2] && !p1[2]) {
          stream.lineStart();
          for (i = 0; i < n; ++i) stream.point((p0 = segment[i])[0], p0[1]);
          stream.lineEnd();
          return;
        }
        // handle degenerate cases by moving the point
        p1[0] += 2 * epsilon$1;
      }

      subject.push(x = new Intersection(p0, segment, null, true));
      clip.push(x.o = new Intersection(p0, null, x, false));
      subject.push(x = new Intersection(p1, segment, null, false));
      clip.push(x.o = new Intersection(p1, null, x, true));
    });

    if (!subject.length) return;

    clip.sort(compareIntersection);
    link(subject);
    link(clip);

    for (i = 0, n = clip.length; i < n; ++i) {
      clip[i].e = startInside = !startInside;
    }

    var start = subject[0],
        points,
        point;

    while (1) {
      // Find first unvisited intersection.
      var current = start,
          isSubject = true;
      while (current.v) if ((current = current.n) === start) return;
      points = current.z;
      stream.lineStart();
      do {
        current.v = current.o.v = true;
        if (current.e) {
          if (isSubject) {
            for (i = 0, n = points.length; i < n; ++i) stream.point((point = points[i])[0], point[1]);
          } else {
            interpolate(current.x, current.n.x, 1, stream);
          }
          current = current.n;
        } else {
          if (isSubject) {
            points = current.p.z;
            for (i = points.length - 1; i >= 0; --i) stream.point((point = points[i])[0], point[1]);
          } else {
            interpolate(current.x, current.p.x, -1, stream);
          }
          current = current.p;
        }
        current = current.o;
        points = current.z;
        isSubject = !isSubject;
      } while (!current.v);
      stream.lineEnd();
    }
  }

  function link(array) {
    if (!(n = array.length)) return;
    var n,
        i = 0,
        a = array[0],
        b;
    while (++i < n) {
      a.n = b = array[i];
      b.p = a;
      a = b;
    }
    a.n = b = array[0];
    b.p = a;
  }

  function longitude(point) {
    return abs(point[0]) <= pi$1 ? point[0] : sign$1(point[0]) * ((abs(point[0]) + pi$1) % tau$1 - pi$1);
  }

  function polygonContains(polygon, point) {
    var lambda = longitude(point),
        phi = point[1],
        sinPhi = sin$1(phi),
        normal = [sin$1(lambda), -cos$1(lambda), 0],
        angle = 0,
        winding = 0;

    var sum = new Adder();

    if (sinPhi === 1) phi = halfPi$1 + epsilon$1;
    else if (sinPhi === -1) phi = -halfPi$1 - epsilon$1;

    for (var i = 0, n = polygon.length; i < n; ++i) {
      if (!(m = (ring = polygon[i]).length)) continue;
      var ring,
          m,
          point0 = ring[m - 1],
          lambda0 = longitude(point0),
          phi0 = point0[1] / 2 + quarterPi,
          sinPhi0 = sin$1(phi0),
          cosPhi0 = cos$1(phi0);

      for (var j = 0; j < m; ++j, lambda0 = lambda1, sinPhi0 = sinPhi1, cosPhi0 = cosPhi1, point0 = point1) {
        var point1 = ring[j],
            lambda1 = longitude(point1),
            phi1 = point1[1] / 2 + quarterPi,
            sinPhi1 = sin$1(phi1),
            cosPhi1 = cos$1(phi1),
            delta = lambda1 - lambda0,
            sign = delta >= 0 ? 1 : -1,
            absDelta = sign * delta,
            antimeridian = absDelta > pi$1,
            k = sinPhi0 * sinPhi1;

        sum.add(atan2$1(k * sign * sin$1(absDelta), cosPhi0 * cosPhi1 + k * cos$1(absDelta)));
        angle += antimeridian ? delta + sign * tau$1 : delta;

        // Are the longitudes either side of the point’s meridian (lambda),
        // and are the latitudes smaller than the parallel (phi)?
        if (antimeridian ^ lambda0 >= lambda ^ lambda1 >= lambda) {
          var arc = cartesianCross$1(cartesian$1(point0), cartesian$1(point1));
          cartesianNormalizeInPlace(arc);
          var intersection = cartesianCross$1(normal, arc);
          cartesianNormalizeInPlace(intersection);
          var phiArc = (antimeridian ^ delta >= 0 ? -1 : 1) * asin$1(intersection[2]);
          if (phi > phiArc || phi === phiArc && (arc[0] || arc[1])) {
            winding += antimeridian ^ delta >= 0 ? 1 : -1;
          }
        }
      }
    }

    // First, determine whether the South pole is inside or outside:
    //
    // It is inside if:
    // * the polygon winds around it in a clockwise direction.
    // * the polygon does not (cumulatively) wind around it, but has a negative
    //   (counter-clockwise) area.
    //
    // Second, count the (signed) number of times a segment crosses a lambda
    // from the point to the South pole.  If it is zero, then the point is the
    // same side as the South pole.

    return (angle < -1e-6 || angle < epsilon$1 && sum < -1e-12) ^ (winding & 1);
  }

  function clip(pointVisible, clipLine, interpolate, start) {
    return function(sink) {
      var line = clipLine(sink),
          ringBuffer = clipBuffer(),
          ringSink = clipLine(ringBuffer),
          polygonStarted = false,
          polygon,
          segments,
          ring;

      var clip = {
        point: point,
        lineStart: lineStart,
        lineEnd: lineEnd,
        polygonStart: function() {
          clip.point = pointRing;
          clip.lineStart = ringStart;
          clip.lineEnd = ringEnd;
          segments = [];
          polygon = [];
        },
        polygonEnd: function() {
          clip.point = point;
          clip.lineStart = lineStart;
          clip.lineEnd = lineEnd;
          segments = merge(segments);
          var startInside = polygonContains(polygon, start);
          if (segments.length) {
            if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
            clipRejoin(segments, compareIntersection, startInside, interpolate, sink);
          } else if (startInside) {
            if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
            sink.lineStart();
            interpolate(null, null, 1, sink);
            sink.lineEnd();
          }
          if (polygonStarted) sink.polygonEnd(), polygonStarted = false;
          segments = polygon = null;
        },
        sphere: function() {
          sink.polygonStart();
          sink.lineStart();
          interpolate(null, null, 1, sink);
          sink.lineEnd();
          sink.polygonEnd();
        }
      };

      function point(lambda, phi) {
        if (pointVisible(lambda, phi)) sink.point(lambda, phi);
      }

      function pointLine(lambda, phi) {
        line.point(lambda, phi);
      }

      function lineStart() {
        clip.point = pointLine;
        line.lineStart();
      }

      function lineEnd() {
        clip.point = point;
        line.lineEnd();
      }

      function pointRing(lambda, phi) {
        ring.push([lambda, phi]);
        ringSink.point(lambda, phi);
      }

      function ringStart() {
        ringSink.lineStart();
        ring = [];
      }

      function ringEnd() {
        pointRing(ring[0][0], ring[0][1]);
        ringSink.lineEnd();

        var clean = ringSink.clean(),
            ringSegments = ringBuffer.result(),
            i, n = ringSegments.length, m,
            segment,
            point;

        ring.pop();
        polygon.push(ring);
        ring = null;

        if (!n) return;

        // No intersections.
        if (clean & 1) {
          segment = ringSegments[0];
          if ((m = segment.length - 1) > 0) {
            if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
            sink.lineStart();
            for (i = 0; i < m; ++i) sink.point((point = segment[i])[0], point[1]);
            sink.lineEnd();
          }
          return;
        }

        // Rejoin connected segments.
        // TODO reuse ringBuffer.rejoin()?
        if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));

        segments.push(ringSegments.filter(validSegment));
      }

      return clip;
    };
  }

  function validSegment(segment) {
    return segment.length > 1;
  }

  // Intersections are sorted along the clip edge. For both antimeridian cutting
  // and circle clipping, the same comparison is used.
  function compareIntersection(a, b) {
    return ((a = a.x)[0] < 0 ? a[1] - halfPi$1 - epsilon$1 : halfPi$1 - a[1])
         - ((b = b.x)[0] < 0 ? b[1] - halfPi$1 - epsilon$1 : halfPi$1 - b[1]);
  }

  var clipAntimeridian = clip(
    function() { return true; },
    clipAntimeridianLine,
    clipAntimeridianInterpolate,
    [-pi$1, -halfPi$1]
  );

  // Takes a line and cuts into visible segments. Return values: 0 - there were
  // intersections or the line was empty; 1 - no intersections; 2 - there were
  // intersections, and the first and last segments should be rejoined.
  function clipAntimeridianLine(stream) {
    var lambda0 = NaN,
        phi0 = NaN,
        sign0 = NaN,
        clean; // no intersections

    return {
      lineStart: function() {
        stream.lineStart();
        clean = 1;
      },
      point: function(lambda1, phi1) {
        var sign1 = lambda1 > 0 ? pi$1 : -pi$1,
            delta = abs(lambda1 - lambda0);
        if (abs(delta - pi$1) < epsilon$1) { // line crosses a pole
          stream.point(lambda0, phi0 = (phi0 + phi1) / 2 > 0 ? halfPi$1 : -halfPi$1);
          stream.point(sign0, phi0);
          stream.lineEnd();
          stream.lineStart();
          stream.point(sign1, phi0);
          stream.point(lambda1, phi0);
          clean = 0;
        } else if (sign0 !== sign1 && delta >= pi$1) { // line crosses antimeridian
          if (abs(lambda0 - sign0) < epsilon$1) lambda0 -= sign0 * epsilon$1; // handle degeneracies
          if (abs(lambda1 - sign1) < epsilon$1) lambda1 -= sign1 * epsilon$1;
          phi0 = clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1);
          stream.point(sign0, phi0);
          stream.lineEnd();
          stream.lineStart();
          stream.point(sign1, phi0);
          clean = 0;
        }
        stream.point(lambda0 = lambda1, phi0 = phi1);
        sign0 = sign1;
      },
      lineEnd: function() {
        stream.lineEnd();
        lambda0 = phi0 = NaN;
      },
      clean: function() {
        return 2 - clean; // if intersections, rejoin first and last segments
      }
    };
  }

  function clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1) {
    var cosPhi0,
        cosPhi1,
        sinLambda0Lambda1 = sin$1(lambda0 - lambda1);
    return abs(sinLambda0Lambda1) > epsilon$1
        ? atan((sin$1(phi0) * (cosPhi1 = cos$1(phi1)) * sin$1(lambda1)
            - sin$1(phi1) * (cosPhi0 = cos$1(phi0)) * sin$1(lambda0))
            / (cosPhi0 * cosPhi1 * sinLambda0Lambda1))
        : (phi0 + phi1) / 2;
  }

  function clipAntimeridianInterpolate(from, to, direction, stream) {
    var phi;
    if (from == null) {
      phi = direction * halfPi$1;
      stream.point(-pi$1, phi);
      stream.point(0, phi);
      stream.point(pi$1, phi);
      stream.point(pi$1, 0);
      stream.point(pi$1, -phi);
      stream.point(0, -phi);
      stream.point(-pi$1, -phi);
      stream.point(-pi$1, 0);
      stream.point(-pi$1, phi);
    } else if (abs(from[0] - to[0]) > epsilon$1) {
      var lambda = from[0] < to[0] ? pi$1 : -pi$1;
      phi = direction * lambda / 2;
      stream.point(-lambda, phi);
      stream.point(0, phi);
      stream.point(lambda, phi);
    } else {
      stream.point(to[0], to[1]);
    }
  }

  function clipCircle(radius) {
    var cr = cos$1(radius),
        delta = 2 * radians$1,
        smallRadius = cr > 0,
        notHemisphere = abs(cr) > epsilon$1; // TODO optimise for this common case

    function interpolate(from, to, direction, stream) {
      circleStream(stream, radius, delta, direction, from, to);
    }

    function visible(lambda, phi) {
      return cos$1(lambda) * cos$1(phi) > cr;
    }

    // Takes a line and cuts into visible segments. Return values used for polygon
    // clipping: 0 - there were intersections or the line was empty; 1 - no
    // intersections 2 - there were intersections, and the first and last segments
    // should be rejoined.
    function clipLine(stream) {
      var point0, // previous point
          c0, // code for previous point
          v0, // visibility of previous point
          v00, // visibility of first point
          clean; // no intersections
      return {
        lineStart: function() {
          v00 = v0 = false;
          clean = 1;
        },
        point: function(lambda, phi) {
          var point1 = [lambda, phi],
              point2,
              v = visible(lambda, phi),
              c = smallRadius
                ? v ? 0 : code(lambda, phi)
                : v ? code(lambda + (lambda < 0 ? pi$1 : -pi$1), phi) : 0;
          if (!point0 && (v00 = v0 = v)) stream.lineStart();
          if (v !== v0) {
            point2 = intersect(point0, point1);
            if (!point2 || pointEqual(point0, point2) || pointEqual(point1, point2))
              point1[2] = 1;
          }
          if (v !== v0) {
            clean = 0;
            if (v) {
              // outside going in
              stream.lineStart();
              point2 = intersect(point1, point0);
              stream.point(point2[0], point2[1]);
            } else {
              // inside going out
              point2 = intersect(point0, point1);
              stream.point(point2[0], point2[1], 2);
              stream.lineEnd();
            }
            point0 = point2;
          } else if (notHemisphere && point0 && smallRadius ^ v) {
            var t;
            // If the codes for two points are different, or are both zero,
            // and there this segment intersects with the small circle.
            if (!(c & c0) && (t = intersect(point1, point0, true))) {
              clean = 0;
              if (smallRadius) {
                stream.lineStart();
                stream.point(t[0][0], t[0][1]);
                stream.point(t[1][0], t[1][1]);
                stream.lineEnd();
              } else {
                stream.point(t[1][0], t[1][1]);
                stream.lineEnd();
                stream.lineStart();
                stream.point(t[0][0], t[0][1], 3);
              }
            }
          }
          if (v && (!point0 || !pointEqual(point0, point1))) {
            stream.point(point1[0], point1[1]);
          }
          point0 = point1, v0 = v, c0 = c;
        },
        lineEnd: function() {
          if (v0) stream.lineEnd();
          point0 = null;
        },
        // Rejoin first and last segments if there were intersections and the first
        // and last points were visible.
        clean: function() {
          return clean | ((v00 && v0) << 1);
        }
      };
    }

    // Intersects the great circle between a and b with the clip circle.
    function intersect(a, b, two) {
      var pa = cartesian$1(a),
          pb = cartesian$1(b);

      // We have two planes, n1.p = d1 and n2.p = d2.
      // Find intersection line p(t) = c1 n1 + c2 n2 + t (n1 ⨯ n2).
      var n1 = [1, 0, 0], // normal
          n2 = cartesianCross$1(pa, pb),
          n2n2 = cartesianDot$1(n2, n2),
          n1n2 = n2[0], // cartesianDot(n1, n2),
          determinant = n2n2 - n1n2 * n1n2;

      // Two polar points.
      if (!determinant) return !two && a;

      var c1 =  cr * n2n2 / determinant,
          c2 = -cr * n1n2 / determinant,
          n1xn2 = cartesianCross$1(n1, n2),
          A = cartesianScale(n1, c1),
          B = cartesianScale(n2, c2);
      cartesianAddInPlace(A, B);

      // Solve |p(t)|^2 = 1.
      var u = n1xn2,
          w = cartesianDot$1(A, u),
          uu = cartesianDot$1(u, u),
          t2 = w * w - uu * (cartesianDot$1(A, A) - 1);

      if (t2 < 0) return;

      var t = sqrt$1(t2),
          q = cartesianScale(u, (-w - t) / uu);
      cartesianAddInPlace(q, A);
      q = spherical$1(q);

      if (!two) return q;

      // Two intersection points.
      var lambda0 = a[0],
          lambda1 = b[0],
          phi0 = a[1],
          phi1 = b[1],
          z;

      if (lambda1 < lambda0) z = lambda0, lambda0 = lambda1, lambda1 = z;

      var delta = lambda1 - lambda0,
          polar = abs(delta - pi$1) < epsilon$1,
          meridian = polar || delta < epsilon$1;

      if (!polar && phi1 < phi0) z = phi0, phi0 = phi1, phi1 = z;

      // Check that the first point is between a and b.
      if (meridian
          ? polar
            ? phi0 + phi1 > 0 ^ q[1] < (abs(q[0] - lambda0) < epsilon$1 ? phi0 : phi1)
            : phi0 <= q[1] && q[1] <= phi1
          : delta > pi$1 ^ (lambda0 <= q[0] && q[0] <= lambda1)) {
        var q1 = cartesianScale(u, (-w + t) / uu);
        cartesianAddInPlace(q1, A);
        return [q, spherical$1(q1)];
      }
    }

    // Generates a 4-bit vector representing the location of a point relative to
    // the small circle's bounding box.
    function code(lambda, phi) {
      var r = smallRadius ? radius : pi$1 - radius,
          code = 0;
      if (lambda < -r) code |= 1; // left
      else if (lambda > r) code |= 2; // right
      if (phi < -r) code |= 4; // below
      else if (phi > r) code |= 8; // above
      return code;
    }

    return clip(visible, clipLine, interpolate, smallRadius ? [0, -radius] : [-pi$1, radius - pi$1]);
  }

  function clipLine(a, b, x0, y0, x1, y1) {
    var ax = a[0],
        ay = a[1],
        bx = b[0],
        by = b[1],
        t0 = 0,
        t1 = 1,
        dx = bx - ax,
        dy = by - ay,
        r;

    r = x0 - ax;
    if (!dx && r > 0) return;
    r /= dx;
    if (dx < 0) {
      if (r < t0) return;
      if (r < t1) t1 = r;
    } else if (dx > 0) {
      if (r > t1) return;
      if (r > t0) t0 = r;
    }

    r = x1 - ax;
    if (!dx && r < 0) return;
    r /= dx;
    if (dx < 0) {
      if (r > t1) return;
      if (r > t0) t0 = r;
    } else if (dx > 0) {
      if (r < t0) return;
      if (r < t1) t1 = r;
    }

    r = y0 - ay;
    if (!dy && r > 0) return;
    r /= dy;
    if (dy < 0) {
      if (r < t0) return;
      if (r < t1) t1 = r;
    } else if (dy > 0) {
      if (r > t1) return;
      if (r > t0) t0 = r;
    }

    r = y1 - ay;
    if (!dy && r < 0) return;
    r /= dy;
    if (dy < 0) {
      if (r > t1) return;
      if (r > t0) t0 = r;
    } else if (dy > 0) {
      if (r < t0) return;
      if (r < t1) t1 = r;
    }

    if (t0 > 0) a[0] = ax + t0 * dx, a[1] = ay + t0 * dy;
    if (t1 < 1) b[0] = ax + t1 * dx, b[1] = ay + t1 * dy;
    return true;
  }

  var clipMax = 1e9, clipMin = -1e9;

  // TODO Use d3-polygon’s polygonContains here for the ring check?
  // TODO Eliminate duplicate buffering in clipBuffer and polygon.push?

  function clipRectangle(x0, y0, x1, y1) {

    function visible(x, y) {
      return x0 <= x && x <= x1 && y0 <= y && y <= y1;
    }

    function interpolate(from, to, direction, stream) {
      var a = 0, a1 = 0;
      if (from == null
          || (a = corner(from, direction)) !== (a1 = corner(to, direction))
          || comparePoint(from, to) < 0 ^ direction > 0) {
        do stream.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0);
        while ((a = (a + direction + 4) % 4) !== a1);
      } else {
        stream.point(to[0], to[1]);
      }
    }

    function corner(p, direction) {
      return abs(p[0] - x0) < epsilon$1 ? direction > 0 ? 0 : 3
          : abs(p[0] - x1) < epsilon$1 ? direction > 0 ? 2 : 1
          : abs(p[1] - y0) < epsilon$1 ? direction > 0 ? 1 : 0
          : direction > 0 ? 3 : 2; // abs(p[1] - y1) < epsilon
    }

    function compareIntersection(a, b) {
      return comparePoint(a.x, b.x);
    }

    function comparePoint(a, b) {
      var ca = corner(a, 1),
          cb = corner(b, 1);
      return ca !== cb ? ca - cb
          : ca === 0 ? b[1] - a[1]
          : ca === 1 ? a[0] - b[0]
          : ca === 2 ? a[1] - b[1]
          : b[0] - a[0];
    }

    return function(stream) {
      var activeStream = stream,
          bufferStream = clipBuffer(),
          segments,
          polygon,
          ring,
          x__, y__, v__, // first point
          x_, y_, v_, // previous point
          first,
          clean;

      var clipStream = {
        point: point,
        lineStart: lineStart,
        lineEnd: lineEnd,
        polygonStart: polygonStart,
        polygonEnd: polygonEnd
      };

      function point(x, y) {
        if (visible(x, y)) activeStream.point(x, y);
      }

      function polygonInside() {
        var winding = 0;

        for (var i = 0, n = polygon.length; i < n; ++i) {
          for (var ring = polygon[i], j = 1, m = ring.length, point = ring[0], a0, a1, b0 = point[0], b1 = point[1]; j < m; ++j) {
            a0 = b0, a1 = b1, point = ring[j], b0 = point[0], b1 = point[1];
            if (a1 <= y1) { if (b1 > y1 && (b0 - a0) * (y1 - a1) > (b1 - a1) * (x0 - a0)) ++winding; }
            else { if (b1 <= y1 && (b0 - a0) * (y1 - a1) < (b1 - a1) * (x0 - a0)) --winding; }
          }
        }

        return winding;
      }

      // Buffer geometry within a polygon and then clip it en masse.
      function polygonStart() {
        activeStream = bufferStream, segments = [], polygon = [], clean = true;
      }

      function polygonEnd() {
        var startInside = polygonInside(),
            cleanInside = clean && startInside,
            visible = (segments = merge(segments)).length;
        if (cleanInside || visible) {
          stream.polygonStart();
          if (cleanInside) {
            stream.lineStart();
            interpolate(null, null, 1, stream);
            stream.lineEnd();
          }
          if (visible) {
            clipRejoin(segments, compareIntersection, startInside, interpolate, stream);
          }
          stream.polygonEnd();
        }
        activeStream = stream, segments = polygon = ring = null;
      }

      function lineStart() {
        clipStream.point = linePoint;
        if (polygon) polygon.push(ring = []);
        first = true;
        v_ = false;
        x_ = y_ = NaN;
      }

      // TODO rather than special-case polygons, simply handle them separately.
      // Ideally, coincident intersection points should be jittered to avoid
      // clipping issues.
      function lineEnd() {
        if (segments) {
          linePoint(x__, y__);
          if (v__ && v_) bufferStream.rejoin();
          segments.push(bufferStream.result());
        }
        clipStream.point = point;
        if (v_) activeStream.lineEnd();
      }

      function linePoint(x, y) {
        var v = visible(x, y);
        if (polygon) ring.push([x, y]);
        if (first) {
          x__ = x, y__ = y, v__ = v;
          first = false;
          if (v) {
            activeStream.lineStart();
            activeStream.point(x, y);
          }
        } else {
          if (v && v_) activeStream.point(x, y);
          else {
            var a = [x_ = Math.max(clipMin, Math.min(clipMax, x_)), y_ = Math.max(clipMin, Math.min(clipMax, y_))],
                b = [x = Math.max(clipMin, Math.min(clipMax, x)), y = Math.max(clipMin, Math.min(clipMax, y))];
            if (clipLine(a, b, x0, y0, x1, y1)) {
              if (!v_) {
                activeStream.lineStart();
                activeStream.point(a[0], a[1]);
              }
              activeStream.point(b[0], b[1]);
              if (!v) activeStream.lineEnd();
              clean = false;
            } else if (v) {
              activeStream.lineStart();
              activeStream.point(x, y);
              clean = false;
            }
          }
        }
        x_ = x, y_ = y, v_ = v;
      }

      return clipStream;
    };
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
    lambda *= radians$1, phi *= radians$1;
    lambda0 = lambda, sinPhi0 = sin$1(phi), cosPhi0 = cos$1(phi);
    lengthStream.point = lengthPoint;
  }

  function lengthPoint(lambda, phi) {
    lambda *= radians$1, phi *= radians$1;
    var sinPhi = sin$1(phi),
        cosPhi = cos$1(phi),
        delta = abs(lambda - lambda0),
        cosDelta = cos$1(delta),
        sinDelta = sin$1(delta),
        x = cosPhi * sinDelta,
        y = cosPhi0 * sinPhi - sinPhi0 * cosPhi * cosDelta,
        z = sinPhi0 * sinPhi + cosPhi0 * cosPhi * cosDelta;
    lengthSum.add(atan2$1(sqrt$1(x * x + y * y), z));
    lambda0 = lambda, sinPhi0 = sinPhi, cosPhi0 = cosPhi;
  }

  function length(object) {
    lengthSum = new Adder();
    geoStream(object, lengthStream);
    return +lengthSum;
  }

  var coordinates = [null, null],
      object$1 = {type: "LineString", coordinates: coordinates};

  function geoDistance(a, b) {
    coordinates[0] = a;
    coordinates[1] = b;
    return length(object$1);
  }

  var containsObjectType = {
    Feature: function(object, point) {
      return containsGeometry(object.geometry, point);
    },
    FeatureCollection: function(object, point) {
      var features = object.features, i = -1, n = features.length;
      while (++i < n) if (containsGeometry(features[i].geometry, point)) return true;
      return false;
    }
  };

  var containsGeometryType = {
    Sphere: function() {
      return true;
    },
    Point: function(object, point) {
      return containsPoint(object.coordinates, point);
    },
    MultiPoint: function(object, point) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) if (containsPoint(coordinates[i], point)) return true;
      return false;
    },
    LineString: function(object, point) {
      return containsLine(object.coordinates, point);
    },
    MultiLineString: function(object, point) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) if (containsLine(coordinates[i], point)) return true;
      return false;
    },
    Polygon: function(object, point) {
      return containsPolygon(object.coordinates, point);
    },
    MultiPolygon: function(object, point) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) if (containsPolygon(coordinates[i], point)) return true;
      return false;
    },
    GeometryCollection: function(object, point) {
      var geometries = object.geometries, i = -1, n = geometries.length;
      while (++i < n) if (containsGeometry(geometries[i], point)) return true;
      return false;
    }
  };

  function containsGeometry(geometry, point) {
    return geometry && containsGeometryType.hasOwnProperty(geometry.type)
        ? containsGeometryType[geometry.type](geometry, point)
        : false;
  }

  function containsPoint(coordinates, point) {
    return geoDistance(coordinates, point) === 0;
  }

  function containsLine(coordinates, point) {
    var ao, bo, ab;
    for (var i = 0, n = coordinates.length; i < n; i++) {
      bo = geoDistance(coordinates[i], point);
      if (bo === 0) return true;
      if (i > 0) {
        ab = geoDistance(coordinates[i], coordinates[i - 1]);
        if (
          ab > 0 &&
          ao <= ab &&
          bo <= ab &&
          (ao + bo - ab) * (1 - Math.pow((ao - bo) / ab, 2)) < epsilon2 * ab
        )
          return true;
      }
      ao = bo;
    }
    return false;
  }

  function containsPolygon(coordinates, point) {
    return !!polygonContains(coordinates.map(ringRadians), pointRadians(point));
  }

  function ringRadians(ring) {
    return ring = ring.map(pointRadians), ring.pop(), ring;
  }

  function pointRadians(point) {
    return [point[0] * radians$1, point[1] * radians$1];
  }

  function geoContains(object, point) {
    return (object && containsObjectType.hasOwnProperty(object.type)
        ? containsObjectType[object.type]
        : containsGeometry)(object, point);
  }

  function geoInterpolate(a, b) {
    var x0 = a[0] * radians$1,
        y0 = a[1] * radians$1,
        x1 = b[0] * radians$1,
        y1 = b[1] * radians$1,
        cy0 = cos$1(y0),
        sy0 = sin$1(y0),
        cy1 = cos$1(y1),
        sy1 = sin$1(y1),
        kx0 = cy0 * cos$1(x0),
        ky0 = cy0 * sin$1(x0),
        kx1 = cy1 * cos$1(x1),
        ky1 = cy1 * sin$1(x1),
        d = 2 * asin$1(sqrt$1(haversin(y1 - y0) + cy0 * cy1 * haversin(x1 - x0))),
        k = sin$1(d);

    var interpolate = d ? function(t) {
      var B = sin$1(t *= d) / k,
          A = sin$1(d - t) / k,
          x = A * kx0 + B * kx1,
          y = A * ky0 + B * ky1,
          z = A * sy0 + B * sy1;
      return [
        atan2$1(y, x) * degrees$1,
        atan2$1(z, sqrt$1(x * x + y * y)) * degrees$1
      ];
    } : function() {
      return [x0 * degrees$1, y0 * degrees$1];
    };

    interpolate.distance = d;

    return interpolate;
  }

  var identity$2 = x => x;

  var x0 = Infinity,
      y0 = x0,
      x1 = -x0,
      y1 = x1;

  var boundsStream = {
    point: boundsPoint,
    lineStart: noop,
    lineEnd: noop,
    polygonStart: noop,
    polygonEnd: noop,
    result: function() {
      var bounds = [[x0, y0], [x1, y1]];
      x1 = y1 = -(y0 = x0 = Infinity);
      return bounds;
    }
  };

  function boundsPoint(x, y) {
    if (x < x0) x0 = x;
    if (x > x1) x1 = x;
    if (y < y0) y0 = y;
    if (y > y1) y1 = y;
  }

  function transformer$1(methods) {
    return function(stream) {
      var s = new TransformStream;
      for (var key in methods) s[key] = methods[key];
      s.stream = stream;
      return s;
    };
  }

  function TransformStream() {}

  TransformStream.prototype = {
    constructor: TransformStream,
    point: function(x, y) { this.stream.point(x, y); },
    sphere: function() { this.stream.sphere(); },
    lineStart: function() { this.stream.lineStart(); },
    lineEnd: function() { this.stream.lineEnd(); },
    polygonStart: function() { this.stream.polygonStart(); },
    polygonEnd: function() { this.stream.polygonEnd(); }
  };

  function fit(projection, fitBounds, object) {
    var clip = projection.clipExtent && projection.clipExtent();
    projection.scale(150).translate([0, 0]);
    if (clip != null) projection.clipExtent(null);
    geoStream(object, projection.stream(boundsStream));
    fitBounds(boundsStream.result());
    if (clip != null) projection.clipExtent(clip);
    return projection;
  }

  function fitExtent(projection, extent, object) {
    return fit(projection, function(b) {
      var w = extent[1][0] - extent[0][0],
          h = extent[1][1] - extent[0][1],
          k = Math.min(w / (b[1][0] - b[0][0]), h / (b[1][1] - b[0][1])),
          x = +extent[0][0] + (w - k * (b[1][0] + b[0][0])) / 2,
          y = +extent[0][1] + (h - k * (b[1][1] + b[0][1])) / 2;
      projection.scale(150 * k).translate([x, y]);
    }, object);
  }

  function fitSize(projection, size, object) {
    return fitExtent(projection, [[0, 0], size], object);
  }

  function fitWidth(projection, width, object) {
    return fit(projection, function(b) {
      var w = +width,
          k = w / (b[1][0] - b[0][0]),
          x = (w - k * (b[1][0] + b[0][0])) / 2,
          y = -k * b[0][1];
      projection.scale(150 * k).translate([x, y]);
    }, object);
  }

  function fitHeight(projection, height, object) {
    return fit(projection, function(b) {
      var h = +height,
          k = h / (b[1][1] - b[0][1]),
          x = -k * b[0][0],
          y = (h - k * (b[1][1] + b[0][1])) / 2;
      projection.scale(150 * k).translate([x, y]);
    }, object);
  }

  var maxDepth = 16, // maximum depth of subdivision
      cosMinDistance = cos$1(30 * radians$1); // cos(minimum angular distance)

  function resample(project, delta2) {
    return +delta2 ? resample$1(project, delta2) : resampleNone(project);
  }

  function resampleNone(project) {
    return transformer$1({
      point: function(x, y) {
        x = project(x, y);
        this.stream.point(x[0], x[1]);
      }
    });
  }

  function resample$1(project, delta2) {

    function resampleLineTo(x0, y0, lambda0, a0, b0, c0, x1, y1, lambda1, a1, b1, c1, depth, stream) {
      var dx = x1 - x0,
          dy = y1 - y0,
          d2 = dx * dx + dy * dy;
      if (d2 > 4 * delta2 && depth--) {
        var a = a0 + a1,
            b = b0 + b1,
            c = c0 + c1,
            m = sqrt$1(a * a + b * b + c * c),
            phi2 = asin$1(c /= m),
            lambda2 = abs(abs(c) - 1) < epsilon$1 || abs(lambda0 - lambda1) < epsilon$1 ? (lambda0 + lambda1) / 2 : atan2$1(b, a),
            p = project(lambda2, phi2),
            x2 = p[0],
            y2 = p[1],
            dx2 = x2 - x0,
            dy2 = y2 - y0,
            dz = dy * dx2 - dx * dy2;
        if (dz * dz / d2 > delta2 // perpendicular projected distance
            || abs((dx * dx2 + dy * dy2) / d2 - 0.5) > 0.3 // midpoint close to an end
            || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) { // angular distance
          resampleLineTo(x0, y0, lambda0, a0, b0, c0, x2, y2, lambda2, a /= m, b /= m, c, depth, stream);
          stream.point(x2, y2);
          resampleLineTo(x2, y2, lambda2, a, b, c, x1, y1, lambda1, a1, b1, c1, depth, stream);
        }
      }
    }
    return function(stream) {
      var lambda00, x00, y00, a00, b00, c00, // first point
          lambda0, x0, y0, a0, b0, c0; // previous point

      var resampleStream = {
        point: point,
        lineStart: lineStart,
        lineEnd: lineEnd,
        polygonStart: function() { stream.polygonStart(); resampleStream.lineStart = ringStart; },
        polygonEnd: function() { stream.polygonEnd(); resampleStream.lineStart = lineStart; }
      };

      function point(x, y) {
        x = project(x, y);
        stream.point(x[0], x[1]);
      }

      function lineStart() {
        x0 = NaN;
        resampleStream.point = linePoint;
        stream.lineStart();
      }

      function linePoint(lambda, phi) {
        var c = cartesian$1([lambda, phi]), p = project(lambda, phi);
        resampleLineTo(x0, y0, lambda0, a0, b0, c0, x0 = p[0], y0 = p[1], lambda0 = lambda, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
        stream.point(x0, y0);
      }

      function lineEnd() {
        resampleStream.point = point;
        stream.lineEnd();
      }

      function ringStart() {
        lineStart();
        resampleStream.point = ringPoint;
        resampleStream.lineEnd = ringEnd;
      }

      function ringPoint(lambda, phi) {
        linePoint(lambda00 = lambda, phi), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
        resampleStream.point = linePoint;
      }

      function ringEnd() {
        resampleLineTo(x0, y0, lambda0, a0, b0, c0, x00, y00, lambda00, a00, b00, c00, maxDepth, stream);
        resampleStream.lineEnd = lineEnd;
        lineEnd();
      }

      return resampleStream;
    };
  }

  var transformRadians = transformer$1({
    point: function(x, y) {
      this.stream.point(x * radians$1, y * radians$1);
    }
  });

  function transformRotate(rotate) {
    return transformer$1({
      point: function(x, y) {
        var r = rotate(x, y);
        return this.stream.point(r[0], r[1]);
      }
    });
  }

  function scaleTranslate(k, dx, dy, sx, sy) {
    function transform(x, y) {
      x *= sx; y *= sy;
      return [dx + k * x, dy - k * y];
    }
    transform.invert = function(x, y) {
      return [(x - dx) / k * sx, (dy - y) / k * sy];
    };
    return transform;
  }

  function scaleTranslateRotate(k, dx, dy, sx, sy, alpha) {
    if (!alpha) return scaleTranslate(k, dx, dy, sx, sy);
    var cosAlpha = cos$1(alpha),
        sinAlpha = sin$1(alpha),
        a = cosAlpha * k,
        b = sinAlpha * k,
        ai = cosAlpha / k,
        bi = sinAlpha / k,
        ci = (sinAlpha * dy - cosAlpha * dx) / k,
        fi = (sinAlpha * dx + cosAlpha * dy) / k;
    function transform(x, y) {
      x *= sx; y *= sy;
      return [a * x - b * y + dx, dy - b * x - a * y];
    }
    transform.invert = function(x, y) {
      return [sx * (ai * x - bi * y + ci), sy * (fi - bi * x - ai * y)];
    };
    return transform;
  }

  function projection(project) {
    return projectionMutator(function() { return project; })();
  }

  function projectionMutator(projectAt) {
    var project,
        k = 150, // scale
        x = 480, y = 250, // translate
        lambda = 0, phi = 0, // center
        deltaLambda = 0, deltaPhi = 0, deltaGamma = 0, rotate, // pre-rotate
        alpha = 0, // post-rotate angle
        sx = 1, // reflectX
        sy = 1, // reflectX
        theta = null, preclip = clipAntimeridian, // pre-clip angle
        x0 = null, y0, x1, y1, postclip = identity$2, // post-clip extent
        delta2 = 0.5, // precision
        projectResample,
        projectTransform,
        projectRotateTransform,
        cache,
        cacheStream;

    function projection(point) {
      return projectRotateTransform(point[0] * radians$1, point[1] * radians$1);
    }

    function invert(point) {
      point = projectRotateTransform.invert(point[0], point[1]);
      return point && [point[0] * degrees$1, point[1] * degrees$1];
    }

    projection.stream = function(stream) {
      return cache && cacheStream === stream ? cache : cache = transformRadians(transformRotate(rotate)(preclip(projectResample(postclip(cacheStream = stream)))));
    };

    projection.preclip = function(_) {
      return arguments.length ? (preclip = _, theta = undefined, reset()) : preclip;
    };

    projection.postclip = function(_) {
      return arguments.length ? (postclip = _, x0 = y0 = x1 = y1 = null, reset()) : postclip;
    };

    projection.clipAngle = function(_) {
      return arguments.length ? (preclip = +_ ? clipCircle(theta = _ * radians$1) : (theta = null, clipAntimeridian), reset()) : theta * degrees$1;
    };

    projection.clipExtent = function(_) {
      return arguments.length ? (postclip = _ == null ? (x0 = y0 = x1 = y1 = null, identity$2) : clipRectangle(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [[x0, y0], [x1, y1]];
    };

    projection.scale = function(_) {
      return arguments.length ? (k = +_, recenter()) : k;
    };

    projection.translate = function(_) {
      return arguments.length ? (x = +_[0], y = +_[1], recenter()) : [x, y];
    };

    projection.center = function(_) {
      return arguments.length ? (lambda = _[0] % 360 * radians$1, phi = _[1] % 360 * radians$1, recenter()) : [lambda * degrees$1, phi * degrees$1];
    };

    projection.rotate = function(_) {
      return arguments.length ? (deltaLambda = _[0] % 360 * radians$1, deltaPhi = _[1] % 360 * radians$1, deltaGamma = _.length > 2 ? _[2] % 360 * radians$1 : 0, recenter()) : [deltaLambda * degrees$1, deltaPhi * degrees$1, deltaGamma * degrees$1];
    };

    projection.angle = function(_) {
      return arguments.length ? (alpha = _ % 360 * radians$1, recenter()) : alpha * degrees$1;
    };

    projection.reflectX = function(_) {
      return arguments.length ? (sx = _ ? -1 : 1, recenter()) : sx < 0;
    };

    projection.reflectY = function(_) {
      return arguments.length ? (sy = _ ? -1 : 1, recenter()) : sy < 0;
    };

    projection.precision = function(_) {
      return arguments.length ? (projectResample = resample(projectTransform, delta2 = _ * _), reset()) : sqrt$1(delta2);
    };

    projection.fitExtent = function(extent, object) {
      return fitExtent(projection, extent, object);
    };

    projection.fitSize = function(size, object) {
      return fitSize(projection, size, object);
    };

    projection.fitWidth = function(width, object) {
      return fitWidth(projection, width, object);
    };

    projection.fitHeight = function(height, object) {
      return fitHeight(projection, height, object);
    };

    function recenter() {
      var center = scaleTranslateRotate(k, 0, 0, sx, sy, alpha).apply(null, project(lambda, phi)),
          transform = scaleTranslateRotate(k, x - center[0], y - center[1], sx, sy, alpha);
      rotate = rotateRadians(deltaLambda, deltaPhi, deltaGamma);
      projectTransform = compose(project, transform);
      projectRotateTransform = compose(rotate, projectTransform);
      projectResample = resample(projectTransform, delta2);
      return reset();
    }

    function reset() {
      cache = cacheStream = null;
      return projection;
    }

    return function() {
      project = projectAt.apply(this, arguments);
      projection.invert = project.invert && invert;
      return recenter();
    };
  }

  function azimuthalInvert(angle) {
    return function(x, y) {
      var z = sqrt$1(x * x + y * y),
          c = angle(z),
          sc = sin$1(c),
          cc = cos$1(c);
      return [
        atan2$1(x * sc, z * cc),
        asin$1(z && y * sc / z)
      ];
    }
  }

  function stereographicRaw(x, y) {
    var cy = cos$1(y), k = 1 + cos$1(x) * cy;
    return [cy * sin$1(x) / k, sin$1(y) / k];
  }

  stereographicRaw.invert = azimuthalInvert(function(z) {
    return 2 * atan(z);
  });

  function geoStereographic() {
    return projection(stereographicRaw)
        .scale(250)
        .clipAngle(142);
  }

  const epsilon = 1e-6;

  class Path {
    constructor() {
      this._x0 = this._y0 = // start of current subpath
      this._x1 = this._y1 = null; // end of current subpath
      this._ = "";
    }
    moveTo(x, y) {
      this._ += `M${this._x0 = this._x1 = +x},${this._y0 = this._y1 = +y}`;
    }
    closePath() {
      if (this._x1 !== null) {
        this._x1 = this._x0, this._y1 = this._y0;
        this._ += "Z";
      }
    }
    lineTo(x, y) {
      this._ += `L${this._x1 = +x},${this._y1 = +y}`;
    }
    arc(x, y, r) {
      x = +x, y = +y, r = +r;
      const x0 = x + r;
      const y0 = y;
      if (r < 0) throw new Error("negative radius");
      if (this._x1 === null) this._ += `M${x0},${y0}`;
      else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) this._ += "L" + x0 + "," + y0;
      if (!r) return;
      this._ += `A${r},${r},0,1,1,${x - r},${y}A${r},${r},0,1,1,${this._x1 = x0},${this._y1 = y0}`;
    }
    rect(x, y, w, h) {
      this._ += `M${this._x0 = this._x1 = +x},${this._y0 = this._y1 = +y}h${+w}v${+h}h${-w}Z`;
    }
    value() {
      return this._ || null;
    }
  }

  class Polygon {
    constructor() {
      this._ = [];
    }
    moveTo(x, y) {
      this._.push([x, y]);
    }
    closePath() {
      this._.push(this._[0].slice());
    }
    lineTo(x, y) {
      this._.push([x, y]);
    }
    value() {
      return this._.length ? this._ : null;
    }
  }

  class Voronoi {
    constructor(delaunay, [xmin, ymin, xmax, ymax] = [0, 0, 960, 500]) {
      if (!((xmax = +xmax) >= (xmin = +xmin)) || !((ymax = +ymax) >= (ymin = +ymin))) throw new Error("invalid bounds");
      this.delaunay = delaunay;
      this._circumcenters = new Float64Array(delaunay.points.length * 2);
      this.vectors = new Float64Array(delaunay.points.length * 2);
      this.xmax = xmax, this.xmin = xmin;
      this.ymax = ymax, this.ymin = ymin;
      this._init();
    }
    update() {
      this.delaunay.update();
      this._init();
      return this;
    }
    _init() {
      const {delaunay: {points, hull, triangles}, vectors} = this;
      let bx, by; // lazily computed barycenter of the hull

      // Compute circumcenters.
      const circumcenters = this.circumcenters = this._circumcenters.subarray(0, triangles.length / 3 * 2);
      for (let i = 0, j = 0, n = triangles.length, x, y; i < n; i += 3, j += 2) {
        const t1 = triangles[i] * 2;
        const t2 = triangles[i + 1] * 2;
        const t3 = triangles[i + 2] * 2;
        const x1 = points[t1];
        const y1 = points[t1 + 1];
        const x2 = points[t2];
        const y2 = points[t2 + 1];
        const x3 = points[t3];
        const y3 = points[t3 + 1];

        const dx = x2 - x1;
        const dy = y2 - y1;
        const ex = x3 - x1;
        const ey = y3 - y1;
        const ab = (dx * ey - dy * ex) * 2;

        if (Math.abs(ab) < 1e-9) {
          // For a degenerate triangle, the circumcenter is at the infinity, in a
          // direction orthogonal to the halfedge and away from the “center” of
          // the diagram <bx, by>, defined as the hull’s barycenter.
          if (bx === undefined) {
            bx = by = 0;
            for (const i of hull) bx += points[i * 2], by += points[i * 2 + 1];
            bx /= hull.length, by /= hull.length;
          }
          const a = 1e9 * Math.sign((bx - x1) * ey - (by - y1) * ex);
          x = (x1 + x3) / 2 - a * ey;
          y = (y1 + y3) / 2 + a * ex;
        } else {
          const d = 1 / ab;
          const bl = dx * dx + dy * dy;
          const cl = ex * ex + ey * ey;
          x = x1 + (ey * bl - dy * cl) * d;
          y = y1 + (dx * cl - ex * bl) * d;
        }
        circumcenters[j] = x;
        circumcenters[j + 1] = y;
      }

      // Compute exterior cell rays.
      let h = hull[hull.length - 1];
      let p0, p1 = h * 4;
      let x0, x1 = points[2 * h];
      let y0, y1 = points[2 * h + 1];
      vectors.fill(0);
      for (let i = 0; i < hull.length; ++i) {
        h = hull[i];
        p0 = p1, x0 = x1, y0 = y1;
        p1 = h * 4, x1 = points[2 * h], y1 = points[2 * h + 1];
        vectors[p0 + 2] = vectors[p1] = y0 - y1;
        vectors[p0 + 3] = vectors[p1 + 1] = x1 - x0;
      }
    }
    render(context) {
      const buffer = context == null ? context = new Path : undefined;
      const {delaunay: {halfedges, inedges, hull}, circumcenters, vectors} = this;
      if (hull.length <= 1) return null;
      for (let i = 0, n = halfedges.length; i < n; ++i) {
        const j = halfedges[i];
        if (j < i) continue;
        const ti = Math.floor(i / 3) * 2;
        const tj = Math.floor(j / 3) * 2;
        const xi = circumcenters[ti];
        const yi = circumcenters[ti + 1];
        const xj = circumcenters[tj];
        const yj = circumcenters[tj + 1];
        this._renderSegment(xi, yi, xj, yj, context);
      }
      let h0, h1 = hull[hull.length - 1];
      for (let i = 0; i < hull.length; ++i) {
        h0 = h1, h1 = hull[i];
        const t = Math.floor(inedges[h1] / 3) * 2;
        const x = circumcenters[t];
        const y = circumcenters[t + 1];
        const v = h0 * 4;
        const p = this._project(x, y, vectors[v + 2], vectors[v + 3]);
        if (p) this._renderSegment(x, y, p[0], p[1], context);
      }
      return buffer && buffer.value();
    }
    renderBounds(context) {
      const buffer = context == null ? context = new Path : undefined;
      context.rect(this.xmin, this.ymin, this.xmax - this.xmin, this.ymax - this.ymin);
      return buffer && buffer.value();
    }
    renderCell(i, context) {
      const buffer = context == null ? context = new Path : undefined;
      const points = this._clip(i);
      if (points === null || !points.length) return;
      context.moveTo(points[0], points[1]);
      let n = points.length;
      while (points[0] === points[n-2] && points[1] === points[n-1] && n > 1) n -= 2;
      for (let i = 2; i < n; i += 2) {
        if (points[i] !== points[i-2] || points[i+1] !== points[i-1])
          context.lineTo(points[i], points[i + 1]);
      }
      context.closePath();
      return buffer && buffer.value();
    }
    *cellPolygons() {
      const {delaunay: {points}} = this;
      for (let i = 0, n = points.length / 2; i < n; ++i) {
        const cell = this.cellPolygon(i);
        if (cell) cell.index = i, yield cell;
      }
    }
    cellPolygon(i) {
      const polygon = new Polygon;
      this.renderCell(i, polygon);
      return polygon.value();
    }
    _renderSegment(x0, y0, x1, y1, context) {
      let S;
      const c0 = this._regioncode(x0, y0);
      const c1 = this._regioncode(x1, y1);
      if (c0 === 0 && c1 === 0) {
        context.moveTo(x0, y0);
        context.lineTo(x1, y1);
      } else if (S = this._clipSegment(x0, y0, x1, y1, c0, c1)) {
        context.moveTo(S[0], S[1]);
        context.lineTo(S[2], S[3]);
      }
    }
    contains(i, x, y) {
      if ((x = +x, x !== x) || (y = +y, y !== y)) return false;
      return this.delaunay._step(i, x, y) === i;
    }
    *neighbors(i) {
      const ci = this._clip(i);
      if (ci) for (const j of this.delaunay.neighbors(i)) {
        const cj = this._clip(j);
        // find the common edge
        if (cj) loop: for (let ai = 0, li = ci.length; ai < li; ai += 2) {
          for (let aj = 0, lj = cj.length; aj < lj; aj += 2) {
            if (ci[ai] === cj[aj]
                && ci[ai + 1] === cj[aj + 1]
                && ci[(ai + 2) % li] === cj[(aj + lj - 2) % lj]
                && ci[(ai + 3) % li] === cj[(aj + lj - 1) % lj]) {
              yield j;
              break loop;
            }
          }
        }
      }
    }
    _cell(i) {
      const {circumcenters, delaunay: {inedges, halfedges, triangles}} = this;
      const e0 = inedges[i];
      if (e0 === -1) return null; // coincident point
      const points = [];
      let e = e0;
      do {
        const t = Math.floor(e / 3);
        points.push(circumcenters[t * 2], circumcenters[t * 2 + 1]);
        e = e % 3 === 2 ? e - 2 : e + 1;
        if (triangles[e] !== i) break; // bad triangulation
        e = halfedges[e];
      } while (e !== e0 && e !== -1);
      return points;
    }
    _clip(i) {
      // degenerate case (1 valid point: return the box)
      if (i === 0 && this.delaunay.hull.length === 1) {
        return [this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax, this.xmin, this.ymin];
      }
      const points = this._cell(i);
      if (points === null) return null;
      const {vectors: V} = this;
      const v = i * 4;
      return this._simplify(V[v] || V[v + 1]
          ? this._clipInfinite(i, points, V[v], V[v + 1], V[v + 2], V[v + 3])
          : this._clipFinite(i, points));
    }
    _clipFinite(i, points) {
      const n = points.length;
      let P = null;
      let x0, y0, x1 = points[n - 2], y1 = points[n - 1];
      let c0, c1 = this._regioncode(x1, y1);
      let e0, e1 = 0;
      for (let j = 0; j < n; j += 2) {
        x0 = x1, y0 = y1, x1 = points[j], y1 = points[j + 1];
        c0 = c1, c1 = this._regioncode(x1, y1);
        if (c0 === 0 && c1 === 0) {
          e0 = e1, e1 = 0;
          if (P) P.push(x1, y1);
          else P = [x1, y1];
        } else {
          let S, sx0, sy0, sx1, sy1;
          if (c0 === 0) {
            if ((S = this._clipSegment(x0, y0, x1, y1, c0, c1)) === null) continue;
            [sx0, sy0, sx1, sy1] = S;
          } else {
            if ((S = this._clipSegment(x1, y1, x0, y0, c1, c0)) === null) continue;
            [sx1, sy1, sx0, sy0] = S;
            e0 = e1, e1 = this._edgecode(sx0, sy0);
            if (e0 && e1) this._edge(i, e0, e1, P, P.length);
            if (P) P.push(sx0, sy0);
            else P = [sx0, sy0];
          }
          e0 = e1, e1 = this._edgecode(sx1, sy1);
          if (e0 && e1) this._edge(i, e0, e1, P, P.length);
          if (P) P.push(sx1, sy1);
          else P = [sx1, sy1];
        }
      }
      if (P) {
        e0 = e1, e1 = this._edgecode(P[0], P[1]);
        if (e0 && e1) this._edge(i, e0, e1, P, P.length);
      } else if (this.contains(i, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2)) {
        return [this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax, this.xmin, this.ymin];
      }
      return P;
    }
    _clipSegment(x0, y0, x1, y1, c0, c1) {
      // for more robustness, always consider the segment in the same order
      const flip = c0 < c1;
      if (flip) [x0, y0, x1, y1, c0, c1] = [x1, y1, x0, y0, c1, c0];
      while (true) {
        if (c0 === 0 && c1 === 0) return flip ? [x1, y1, x0, y0] : [x0, y0, x1, y1];
        if (c0 & c1) return null;
        let x, y, c = c0 || c1;
        if (c & 0b1000) x = x0 + (x1 - x0) * (this.ymax - y0) / (y1 - y0), y = this.ymax;
        else if (c & 0b0100) x = x0 + (x1 - x0) * (this.ymin - y0) / (y1 - y0), y = this.ymin;
        else if (c & 0b0010) y = y0 + (y1 - y0) * (this.xmax - x0) / (x1 - x0), x = this.xmax;
        else y = y0 + (y1 - y0) * (this.xmin - x0) / (x1 - x0), x = this.xmin;
        if (c0) x0 = x, y0 = y, c0 = this._regioncode(x0, y0);
        else x1 = x, y1 = y, c1 = this._regioncode(x1, y1);
      }
    }
    _clipInfinite(i, points, vx0, vy0, vxn, vyn) {
      let P = Array.from(points), p;
      if (p = this._project(P[0], P[1], vx0, vy0)) P.unshift(p[0], p[1]);
      if (p = this._project(P[P.length - 2], P[P.length - 1], vxn, vyn)) P.push(p[0], p[1]);
      if (P = this._clipFinite(i, P)) {
        for (let j = 0, n = P.length, c0, c1 = this._edgecode(P[n - 2], P[n - 1]); j < n; j += 2) {
          c0 = c1, c1 = this._edgecode(P[j], P[j + 1]);
          if (c0 && c1) j = this._edge(i, c0, c1, P, j), n = P.length;
        }
      } else if (this.contains(i, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2)) {
        P = [this.xmin, this.ymin, this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax];
      }
      return P;
    }
    _edge(i, e0, e1, P, j) {
      while (e0 !== e1) {
        let x, y;
        switch (e0) {
          case 0b0101: e0 = 0b0100; continue; // top-left
          case 0b0100: e0 = 0b0110, x = this.xmax, y = this.ymin; break; // top
          case 0b0110: e0 = 0b0010; continue; // top-right
          case 0b0010: e0 = 0b1010, x = this.xmax, y = this.ymax; break; // right
          case 0b1010: e0 = 0b1000; continue; // bottom-right
          case 0b1000: e0 = 0b1001, x = this.xmin, y = this.ymax; break; // bottom
          case 0b1001: e0 = 0b0001; continue; // bottom-left
          case 0b0001: e0 = 0b0101, x = this.xmin, y = this.ymin; break; // left
        }
        // Note: this implicitly checks for out of bounds: if P[j] or P[j+1] are
        // undefined, the conditional statement will be executed.
        if ((P[j] !== x || P[j + 1] !== y) && this.contains(i, x, y)) {
          P.splice(j, 0, x, y), j += 2;
        }
      }
      return j;
    }
    _project(x0, y0, vx, vy) {
      let t = Infinity, c, x, y;
      if (vy < 0) { // top
        if (y0 <= this.ymin) return null;
        if ((c = (this.ymin - y0) / vy) < t) y = this.ymin, x = x0 + (t = c) * vx;
      } else if (vy > 0) { // bottom
        if (y0 >= this.ymax) return null;
        if ((c = (this.ymax - y0) / vy) < t) y = this.ymax, x = x0 + (t = c) * vx;
      }
      if (vx > 0) { // right
        if (x0 >= this.xmax) return null;
        if ((c = (this.xmax - x0) / vx) < t) x = this.xmax, y = y0 + (t = c) * vy;
      } else if (vx < 0) { // left
        if (x0 <= this.xmin) return null;
        if ((c = (this.xmin - x0) / vx) < t) x = this.xmin, y = y0 + (t = c) * vy;
      }
      return [x, y];
    }
    _edgecode(x, y) {
      return (x === this.xmin ? 0b0001
          : x === this.xmax ? 0b0010 : 0b0000)
          | (y === this.ymin ? 0b0100
          : y === this.ymax ? 0b1000 : 0b0000);
    }
    _regioncode(x, y) {
      return (x < this.xmin ? 0b0001
          : x > this.xmax ? 0b0010 : 0b0000)
          | (y < this.ymin ? 0b0100
          : y > this.ymax ? 0b1000 : 0b0000);
    }
    _simplify(P) {
      if (P && P.length > 4) {
        for (let i = 0; i < P.length; i+= 2) {
          const j = (i + 2) % P.length, k = (i + 4) % P.length;
          if (P[i] === P[j] && P[j] === P[k] || P[i + 1] === P[j + 1] && P[j + 1] === P[k + 1]) {
            P.splice(j, 2), i -= 2;
          }
        }
        if (!P.length) P = null;
      }
      return P;
    }
  }

  const tau = 2 * Math.PI, pow = Math.pow;

  function pointX(p) {
    return p[0];
  }

  function pointY(p) {
    return p[1];
  }

  // A triangulation is collinear if all its triangles have a non-null area
  function collinear(d) {
    const {triangles, coords} = d;
    for (let i = 0; i < triangles.length; i += 3) {
      const a = 2 * triangles[i],
            b = 2 * triangles[i + 1],
            c = 2 * triangles[i + 2],
            cross = (coords[c] - coords[a]) * (coords[b + 1] - coords[a + 1])
                  - (coords[b] - coords[a]) * (coords[c + 1] - coords[a + 1]);
      if (cross > 1e-10) return false;
    }
    return true;
  }

  function jitter(x, y, r) {
    return [x + Math.sin(x + y) * r, y + Math.cos(x - y) * r];
  }

  class Delaunay {
    static from(points, fx = pointX, fy = pointY, that) {
      return new Delaunay("length" in points
          ? flatArray(points, fx, fy, that)
          : Float64Array.from(flatIterable(points, fx, fy, that)));
    }
    constructor(points) {
      this._delaunator = new Delaunator(points);
      this.inedges = new Int32Array(points.length / 2);
      this._hullIndex = new Int32Array(points.length / 2);
      this.points = this._delaunator.coords;
      this._init();
    }
    update() {
      this._delaunator.update();
      this._init();
      return this;
    }
    _init() {
      const d = this._delaunator, points = this.points;

      // check for collinear
      if (d.hull && d.hull.length > 2 && collinear(d)) {
        this.collinear = Int32Array.from({length: points.length/2}, (_,i) => i)
          .sort((i, j) => points[2 * i] - points[2 * j] || points[2 * i + 1] - points[2 * j + 1]); // for exact neighbors
        const e = this.collinear[0], f = this.collinear[this.collinear.length - 1],
          bounds = [ points[2 * e], points[2 * e + 1], points[2 * f], points[2 * f + 1] ],
          r = 1e-8 * Math.hypot(bounds[3] - bounds[1], bounds[2] - bounds[0]);
        for (let i = 0, n = points.length / 2; i < n; ++i) {
          const p = jitter(points[2 * i], points[2 * i + 1], r);
          points[2 * i] = p[0];
          points[2 * i + 1] = p[1];
        }
        this._delaunator = new Delaunator(points);
      } else {
        delete this.collinear;
      }

      const halfedges = this.halfedges = this._delaunator.halfedges;
      const hull = this.hull = this._delaunator.hull;
      const triangles = this.triangles = this._delaunator.triangles;
      const inedges = this.inedges.fill(-1);
      const hullIndex = this._hullIndex.fill(-1);

      // Compute an index from each point to an (arbitrary) incoming halfedge
      // Used to give the first neighbor of each point; for this reason,
      // on the hull we give priority to exterior halfedges
      for (let e = 0, n = halfedges.length; e < n; ++e) {
        const p = triangles[e % 3 === 2 ? e - 2 : e + 1];
        if (halfedges[e] === -1 || inedges[p] === -1) inedges[p] = e;
      }
      for (let i = 0, n = hull.length; i < n; ++i) {
        hullIndex[hull[i]] = i;
      }

      // degenerate case: 1 or 2 (distinct) points
      if (hull.length <= 2 && hull.length > 0) {
        this.triangles = new Int32Array(3).fill(-1);
        this.halfedges = new Int32Array(3).fill(-1);
        this.triangles[0] = hull[0];
        inedges[hull[0]] = 1;
        if (hull.length === 2) {
          inedges[hull[1]] = 0;
          this.triangles[1] = hull[1];
          this.triangles[2] = hull[1];
        }
      }
    }
    voronoi(bounds) {
      return new Voronoi(this, bounds);
    }
    *neighbors(i) {
      const {inedges, hull, _hullIndex, halfedges, triangles, collinear} = this;

      // degenerate case with several collinear points
      if (collinear) {
        const l = collinear.indexOf(i);
        if (l > 0) yield collinear[l - 1];
        if (l < collinear.length - 1) yield collinear[l + 1];
        return;
      }

      const e0 = inedges[i];
      if (e0 === -1) return; // coincident point
      let e = e0, p0 = -1;
      do {
        yield p0 = triangles[e];
        e = e % 3 === 2 ? e - 2 : e + 1;
        if (triangles[e] !== i) return; // bad triangulation
        e = halfedges[e];
        if (e === -1) {
          const p = hull[(_hullIndex[i] + 1) % hull.length];
          if (p !== p0) yield p;
          return;
        }
      } while (e !== e0);
    }
    find(x, y, i = 0) {
      if ((x = +x, x !== x) || (y = +y, y !== y)) return -1;
      const i0 = i;
      let c;
      while ((c = this._step(i, x, y)) >= 0 && c !== i && c !== i0) i = c;
      return c;
    }
    _step(i, x, y) {
      const {inedges, hull, _hullIndex, halfedges, triangles, points} = this;
      if (inedges[i] === -1 || !points.length) return (i + 1) % (points.length >> 1);
      let c = i;
      let dc = pow(x - points[i * 2], 2) + pow(y - points[i * 2 + 1], 2);
      const e0 = inedges[i];
      let e = e0;
      do {
        let t = triangles[e];
        const dt = pow(x - points[t * 2], 2) + pow(y - points[t * 2 + 1], 2);
        if (dt < dc) dc = dt, c = t;
        e = e % 3 === 2 ? e - 2 : e + 1;
        if (triangles[e] !== i) break; // bad triangulation
        e = halfedges[e];
        if (e === -1) {
          e = hull[(_hullIndex[i] + 1) % hull.length];
          if (e !== t) {
            if (pow(x - points[e * 2], 2) + pow(y - points[e * 2 + 1], 2) < dc) return e;
          }
          break;
        }
      } while (e !== e0);
      return c;
    }
    render(context) {
      const buffer = context == null ? context = new Path : undefined;
      const {points, halfedges, triangles} = this;
      for (let i = 0, n = halfedges.length; i < n; ++i) {
        const j = halfedges[i];
        if (j < i) continue;
        const ti = triangles[i] * 2;
        const tj = triangles[j] * 2;
        context.moveTo(points[ti], points[ti + 1]);
        context.lineTo(points[tj], points[tj + 1]);
      }
      this.renderHull(context);
      return buffer && buffer.value();
    }
    renderPoints(context, r) {
      if (r === undefined && (!context || typeof context.moveTo !== "function")) r = context, context = null;
      r = r == undefined ? 2 : +r;
      const buffer = context == null ? context = new Path : undefined;
      const {points} = this;
      for (let i = 0, n = points.length; i < n; i += 2) {
        const x = points[i], y = points[i + 1];
        context.moveTo(x + r, y);
        context.arc(x, y, r, 0, tau);
      }
      return buffer && buffer.value();
    }
    renderHull(context) {
      const buffer = context == null ? context = new Path : undefined;
      const {hull, points} = this;
      const h = hull[0] * 2, n = hull.length;
      context.moveTo(points[h], points[h + 1]);
      for (let i = 1; i < n; ++i) {
        const h = 2 * hull[i];
        context.lineTo(points[h], points[h + 1]);
      }
      context.closePath();
      return buffer && buffer.value();
    }
    hullPolygon() {
      const polygon = new Polygon;
      this.renderHull(polygon);
      return polygon.value();
    }
    renderTriangle(i, context) {
      const buffer = context == null ? context = new Path : undefined;
      const {points, triangles} = this;
      const t0 = triangles[i *= 3] * 2;
      const t1 = triangles[i + 1] * 2;
      const t2 = triangles[i + 2] * 2;
      context.moveTo(points[t0], points[t0 + 1]);
      context.lineTo(points[t1], points[t1 + 1]);
      context.lineTo(points[t2], points[t2 + 1]);
      context.closePath();
      return buffer && buffer.value();
    }
    *trianglePolygons() {
      const {triangles} = this;
      for (let i = 0, n = triangles.length / 3; i < n; ++i) {
        yield this.trianglePolygon(i);
      }
    }
    trianglePolygon(i) {
      const polygon = new Polygon;
      this.renderTriangle(i, polygon);
      return polygon.value();
    }
  }

  function flatArray(points, fx, fy, that) {
    const n = points.length;
    const array = new Float64Array(n * 2);
    for (let i = 0; i < n; ++i) {
      const p = points[i];
      array[i * 2] = fx.call(that, p, i, points);
      array[i * 2 + 1] = fy.call(that, p, i, points);
    }
    return array;
  }

  function* flatIterable(points, fx, fy, that) {
    let i = 0;
    for (const p of points) {
      yield fx.call(that, p, i, points);
      yield fy.call(that, p, i, points);
      ++i;
    }
  }

  const pi = Math.PI;
  const halfPi = pi / 2;

  const degrees = 180 / pi;
  const radians = pi / 180;
  const atan2 = Math.atan2;
  const cos = Math.cos;
  const max = Math.max;
  const min = Math.min;
  const sin = Math.sin;
  const sign =
    Math.sign ||
    function (x) {
      return x > 0 ? 1 : x < 0 ? -1 : 0;
    };
  const sqrt = Math.sqrt;

  function asin(x) {
    return x > 1 ? halfPi : x < -1 ? -halfPi : Math.asin(x);
  }

  function cartesianDot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  }

  function cartesianCross(a, b) {
    return [
      a[1] * b[2] - a[2] * b[1],
      a[2] * b[0] - a[0] * b[2],
      a[0] * b[1] - a[1] * b[0],
    ];
  }

  function cartesianAdd(a, b) {
    return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
  }

  function cartesianNormalize(d) {
    var l = sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
    return [d[0] / l, d[1] / l, d[2] / l];
  }

  // Converts 3D Cartesian to spherical coordinates (degrees).
  function spherical(cartesian) {
    return [
      atan2(cartesian[1], cartesian[0]) * degrees,
      asin(max(-1, min(1, cartesian[2]))) * degrees,
    ];
  }

  // Converts spherical coordinates (degrees) to 3D Cartesian.
  function cartesian(coordinates) {
    const lambda = coordinates[0] * radians,
      phi = coordinates[1] * radians,
      cosphi = cos(phi);
    return [cosphi * cos(lambda), cosphi * sin(lambda), sin(phi)];
  }

  // Spherical excess of a triangle (in spherical coordinates)
  function excess(triangle) {
    triangle = triangle.map((p) => cartesian(p));
    return cartesianDot(triangle[0], cartesianCross(triangle[2], triangle[1]));
  }

  function geoDelaunay(points) {
    const delaunay = geo_delaunay_from(points),
      triangles = geo_triangles(delaunay),
      edges = geo_edges(triangles, points),
      neighbors = geo_neighbors(triangles, points.length),
      find = geo_find(neighbors, points),
      // Voronoi ; could take a center function as an argument
      circumcenters = geo_circumcenters(triangles, points),
      { polygons, centers } = geo_polygons(circumcenters, triangles, points),
      mesh = geo_mesh(polygons),
      hull = geo_hull(triangles, points),
      // Urquhart ; returns a function that takes a distance array as argument.
      urquhart = geo_urquhart(edges, triangles);
    return {
      delaunay,
      edges,
      triangles,
      centers,
      neighbors,
      polygons,
      mesh,
      hull,
      urquhart,
      find,
    };
  }

  function geo_find(neighbors, points) {
    function distance2(a, b) {
      let x = a[0] - b[0],
        y = a[1] - b[1],
        z = a[2] - b[2];
      return x * x + y * y + z * z;
    }

    return function find(x, y, next) {
      if (next === undefined) next = 0;
      let cell,
        dist,
        found = next;
      const xyz = cartesian([x, y]);
      do {
        cell = next;
        next = null;
        dist = distance2(xyz, cartesian(points[cell]));
        neighbors[cell].forEach((i) => {
          let ndist = distance2(xyz, cartesian(points[i]));
          if (ndist < dist) {
            dist = ndist;
            next = i;
            found = i;
            return;
          }
        });
      } while (next !== null);

      return found;
    };
  }

  function geo_delaunay_from(points) {
    if (points.length < 2) return {};

    // find a valid point to send to infinity
    let pivot = 0;
    while (isNaN(points[pivot][0] + points[pivot][1]) && pivot++ < points.length);

    const r = geoRotation(points[pivot]),
      projection = geoStereographic()
        .translate([0, 0])
        .scale(1)
        .rotate(r.invert([180, 0]));
    points = points.map(projection);

    const zeros = [];
    let max2 = 1;
    for (let i = 0, n = points.length; i < n; i++) {
      let m = points[i][0] ** 2 + points[i][1] ** 2;
      if (!isFinite(m) || m > 1e32) zeros.push(i);
      else if (m > max2) max2 = m;
    }

    const FAR = 1e6 * sqrt(max2);

    zeros.forEach((i) => (points[i] = [FAR, 0]));

    // Add infinite horizon points
    points.push([0, FAR]);
    points.push([-FAR, 0]);
    points.push([0, -FAR]);

    const delaunay = Delaunay.from(points);

    delaunay.projection = projection;

    // clean up the triangulation
    const { triangles, halfedges, inedges } = delaunay;
    for (let i = 0, l = halfedges.length; i < l; i++) {
      if (halfedges[i] < 0) {
        const j = i % 3 == 2 ? i - 2 : i + 1;
        const k = i % 3 == 0 ? i + 2 : i - 1;
        const a = halfedges[j];
        const b = halfedges[k];
        halfedges[a] = b;
        halfedges[b] = a;
        halfedges[j] = halfedges[k] = -1;
        triangles[i] = triangles[j] = triangles[k] = pivot;
        inedges[triangles[a]] = a % 3 == 0 ? a + 2 : a - 1;
        inedges[triangles[b]] = b % 3 == 0 ? b + 2 : b - 1;
        i += 2 - (i % 3);
      } else if (triangles[i] > points.length - 3 - 1) {
        triangles[i] = pivot;
      }
    }

    // there should always be 4 degenerate triangles
    // console.warn(degenerate);
    return delaunay;
  }

  function geo_edges(triangles, points) {
    const _index = new Set();
    if (points.length === 2) return [[0, 1]];
    triangles.forEach((tri) => {
      if (tri[0] === tri[1]) return;
      if (excess(tri.map((i) => points[i])) < 0) return;
      for (let i = 0, j; i < 3; i++) {
        j = (i + 1) % 3;
        _index.add(extent([tri[i], tri[j]]).join("-"));
      }
    });
    return Array.from(_index, (d) => d.split("-").map(Number));
  }

  function geo_triangles(delaunay) {
    const { triangles } = delaunay;
    if (!triangles) return [];

    const geo_triangles = [];
    for (let i = 0, n = triangles.length / 3; i < n; i++) {
      const a = triangles[3 * i],
        b = triangles[3 * i + 1],
        c = triangles[3 * i + 2];
      if (a !== b && b !== c) {
        geo_triangles.push([a, c, b]);
      }
    }
    return geo_triangles;
  }

  function geo_circumcenters(triangles, points) {
    // if (!use_centroids) {
    return triangles.map((tri) => {
      const c = tri.map((i) => points[i]).map(cartesian),
        V = cartesianAdd(
          cartesianAdd(cartesianCross(c[1], c[0]), cartesianCross(c[2], c[1])),
          cartesianCross(c[0], c[2])
        );
      return spherical(cartesianNormalize(V));
    });
    /*} else {
      return triangles.map(tri => {
        return d3.geoCentroid({
          type: "MultiPoint",
          coordinates: tri.map(i => points[i])
        });
      });
    }*/
  }

  function geo_neighbors(triangles, npoints) {
    const neighbors = [];
    triangles.forEach((tri) => {
      for (let j = 0; j < 3; j++) {
        const a = tri[j],
          b = tri[(j + 1) % 3];
        neighbors[a] = neighbors[a] || [];
        neighbors[a].push(b);
      }
    });

    // degenerate cases
    if (triangles.length === 0) {
      if (npoints === 2) (neighbors[0] = [1]), (neighbors[1] = [0]);
      else if (npoints === 1) neighbors[0] = [];
    }

    return neighbors;
  }

  function geo_polygons(circumcenters, triangles, points) {
    const polygons = [];

    const centers = circumcenters.slice();

    if (triangles.length === 0) {
      if (points.length < 2) return { polygons, centers };
      if (points.length === 2) {
        // two hemispheres
        const a = cartesian(points[0]),
          b = cartesian(points[1]),
          m = cartesianNormalize(cartesianAdd(a, b)),
          d = cartesianNormalize(cartesianCross(a, b)),
          c = cartesianCross(m, d);
        const poly = [
          m,
          cartesianCross(m, c),
          cartesianCross(cartesianCross(m, c), c),
          cartesianCross(cartesianCross(cartesianCross(m, c), c), c),
        ]
          .map(spherical)
          .map(supplement);
        return (
          polygons.push(poly),
          polygons.push(poly.slice().reverse()),
          { polygons, centers }
        );
      }
    }

    triangles.forEach((tri, t) => {
      for (let j = 0; j < 3; j++) {
        const a = tri[j],
          b = tri[(j + 1) % 3],
          c = tri[(j + 2) % 3];
        polygons[a] = polygons[a] || [];
        polygons[a].push([b, c, t, [a, b, c]]);
      }
    });

    // reorder each polygon
    const reordered = polygons.map((poly) => {
      const p = [poly[0][2]]; // t
      let k = poly[0][1]; // k = c
      for (let i = 1; i < poly.length; i++) {
        // look for b = k
        for (let j = 0; j < poly.length; j++) {
          if (poly[j][0] == k) {
            k = poly[j][1];
            p.push(poly[j][2]);
            break;
          }
        }
      }

      if (p.length > 2) {
        return p;
      } else if (p.length == 2) {
        const R0 = o_midpoint(
            points[poly[0][3][0]],
            points[poly[0][3][1]],
            centers[p[0]]
          ),
          R1 = o_midpoint(
            points[poly[0][3][2]],
            points[poly[0][3][0]],
            centers[p[0]]
          );
        const i0 = supplement(R0),
          i1 = supplement(R1);
        return [p[0], i1, p[1], i0];
      }
    });

    function supplement(point) {
      let f = -1;
      centers.slice(triangles.length, Infinity).forEach((p, i) => {
        if (p[0] === point[0] && p[1] === point[1]) f = i + triangles.length;
      });
      if (f < 0) (f = centers.length), centers.push(point);
      return f;
    }

    return { polygons: reordered, centers };
  }

  function o_midpoint(a, b, c) {
    a = cartesian(a);
    b = cartesian(b);
    c = cartesian(c);
    const s = sign(cartesianDot(cartesianCross(b, a), c));
    return spherical(cartesianNormalize(cartesianAdd(a, b)).map((d) => s * d));
  }

  function geo_mesh(polygons) {
    const mesh = [];
    polygons.forEach((poly) => {
      if (!poly) return;
      let p = poly[poly.length - 1];
      for (let q of poly) {
        if (q > p) mesh.push([p, q]);
        p = q;
      }
    });
    return mesh;
  }

  function geo_urquhart(edges, triangles) {
    return function (distances) {
      const _lengths = new Map(),
        _urquhart = new Map();
      edges.forEach((edge, i) => {
        const u = edge.join("-");
        _lengths.set(u, distances[i]);
        _urquhart.set(u, true);
      });

      triangles.forEach((tri) => {
        let l = 0,
          remove = -1;
        for (let j = 0; j < 3; j++) {
          let u = extent([tri[j], tri[(j + 1) % 3]]).join("-");
          if (_lengths.get(u) > l) {
            l = _lengths.get(u);
            remove = u;
          }
        }
        _urquhart.set(remove, false);
      });

      return edges.map((edge) => _urquhart.get(edge.join("-")));
    };
  }

  function geo_hull(triangles, points) {
    const _hull = new Set(),
      hull = [];
    triangles.map((tri) => {
      if (excess(tri.map((i) => points[i > points.length ? 0 : i])) > 1e-12)
        return;
      for (let i = 0; i < 3; i++) {
        let e = [tri[i], tri[(i + 1) % 3]],
          code = `${e[0]}-${e[1]}`;
        if (_hull.has(code)) _hull.delete(code);
        else _hull.add(`${e[1]}-${e[0]}`);
      }
    });

    const _index = new Map();
    let start;
    _hull.forEach((e) => {
      e = e.split("-").map(Number);
      _index.set(e[0], e[1]);
      start = e[0];
    });

    if (start === undefined) return hull;

    let next = start;
    do {
      hull.push(next);
      let n = _index.get(next);
      _index.set(next, -1);
      next = n;
    } while (next > -1 && next !== start);

    return hull;
  }

  function geoVoronoi(data) {
    const v = function (data) {
      v.delaunay = null;
      v._data = data;

      if (typeof v._data === "object" && v._data.type === "FeatureCollection") {
        v._data = v._data.features;
      }
      if (typeof v._data === "object") {
        const temp = v._data
          .map((d) => [v._vx(d), v._vy(d), d])
          .filter((d) => isFinite(d[0] + d[1]));
        v.points = temp.map((d) => [d[0], d[1]]);
        v.valid = temp.map((d) => d[2]);
        v.delaunay = geoDelaunay(v.points);
      }
      return v;
    };

    v._vx = function (d) {
      if (typeof d == "object" && "type" in d) {
        return geoCentroid(d)[0];
      }
      if (0 in d) return d[0];
    };
    v._vy = function (d) {
      if (typeof d == "object" && "type" in d) {
        return geoCentroid(d)[1];
      }
      if (1 in d) return d[1];
    };

    v.x = function (f) {
      if (!f) return v._vx;
      v._vx = f;
      return v;
    };
    v.y = function (f) {
      if (!f) return v._vy;
      v._vy = f;
      return v;
    };

    v.polygons = function (data) {
      if (data !== undefined) {
        v(data);
      }

      if (!v.delaunay) return false;
      const coll = {
        type: "FeatureCollection",
        features: [],
      };
      if (v.valid.length === 0) return coll;
      v.delaunay.polygons.forEach((poly, i) =>
        coll.features.push({
          type: "Feature",
          geometry: !poly
            ? null
            : {
                type: "Polygon",
                coordinates: [
                  [...poly, poly[0]].map((i) => v.delaunay.centers[i]),
                ],
              },
          properties: {
            site: v.valid[i],
            sitecoordinates: v.points[i],
            neighbours: v.delaunay.neighbors[i], // not part of the public API
          },
        })
      );
      if (v.valid.length === 1)
        coll.features.push({
          type: "Feature",
          geometry: { type: "Sphere" },
          properties: {
            site: v.valid[0],
            sitecoordinates: v.points[0],
            neighbours: [],
          },
        });
      return coll;
    };

    v.triangles = function (data) {
      if (data !== undefined) {
        v(data);
      }
      if (!v.delaunay) return false;

      return {
        type: "FeatureCollection",
        features: v.delaunay.triangles
          .map((tri, index) => {
            tri = tri.map((i) => v.points[i]);
            tri.center = v.delaunay.centers[index];
            return tri;
          })
          .filter((tri) => excess(tri) > 0)
          .map((tri) => ({
            type: "Feature",
            properties: {
              circumcenter: tri.center,
            },
            geometry: {
              type: "Polygon",
              coordinates: [[...tri, tri[0]]],
            },
          })),
      };
    };

    v.links = function (data) {
      if (data !== undefined) {
        v(data);
      }
      if (!v.delaunay) return false;
      const _distances = v.delaunay.edges.map((e) =>
          geoDistance(v.points[e[0]], v.points[e[1]])
        ),
        _urquart = v.delaunay.urquhart(_distances);
      return {
        type: "FeatureCollection",
        features: v.delaunay.edges.map((e, i) => ({
          type: "Feature",
          properties: {
            source: v.valid[e[0]],
            target: v.valid[e[1]],
            length: _distances[i],
            urquhart: !!_urquart[i],
          },
          geometry: {
            type: "LineString",
            coordinates: [v.points[e[0]], v.points[e[1]]],
          },
        })),
      };
    };

    v.mesh = function (data) {
      if (data !== undefined) {
        v(data);
      }
      if (!v.delaunay) return false;
      return {
        type: "MultiLineString",
        coordinates: v.delaunay.edges.map((e) => [
          v.points[e[0]],
          v.points[e[1]],
        ]),
      };
    };

    v.cellMesh = function (data) {
      if (data !== undefined) {
        v(data);
      }
      if (!v.delaunay) return false;
      const { centers, polygons } = v.delaunay;
      const coordinates = [];
      for (const p of polygons) {
        if (!p) continue;
        for (
          let n = p.length, p0 = p[n - 1], p1 = p[0], i = 0;
          i < n;
          p0 = p1, p1 = p[++i]
        ) {
          if (p1 > p0) {
            coordinates.push([centers[p0], centers[p1]]);
          }
        }
      }
      return {
        type: "MultiLineString",
        coordinates,
      };
    };

    v._found = undefined;
    v.find = function (x, y, radius) {
      v._found = v.delaunay.find(x, y, v._found);
      if (!radius || geoDistance([x, y], v.points[v._found]) < radius)
        return v._found;
    };

    v.hull = function (data) {
      if (data !== undefined) {
        v(data);
      }
      const hull = v.delaunay.hull,
        points = v.points;
      return hull.length === 0
        ? null
        : {
            type: "Polygon",
            coordinates: [[...hull.map((i) => points[i]), points[hull[0]]]],
          };
    };

    return v(data) ;
  }

  function initRange(domain, range) {
    switch (arguments.length) {
      case 0: break;
      case 1: this.range(domain); break;
      default: this.range(range).domain(domain); break;
    }
    return this;
  }

  function define(constructor, factory, prototype) {
    constructor.prototype = factory.prototype = prototype;
    prototype.constructor = constructor;
  }

  function extend(parent, definition) {
    var prototype = Object.create(parent.prototype);
    for (var key in definition) prototype[key] = definition[key];
    return prototype;
  }

  function Color() {}

  var darker = 0.7;
  var brighter = 1 / darker;

  var reI = "\\s*([+-]?\\d+)\\s*",
      reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      reHex = /^#([0-9a-f]{3,8})$/,
      reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`),
      reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`),
      reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`),
      reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`),
      reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`),
      reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);

  var named = {
    aliceblue: 0xf0f8ff,
    antiquewhite: 0xfaebd7,
    aqua: 0x00ffff,
    aquamarine: 0x7fffd4,
    azure: 0xf0ffff,
    beige: 0xf5f5dc,
    bisque: 0xffe4c4,
    black: 0x000000,
    blanchedalmond: 0xffebcd,
    blue: 0x0000ff,
    blueviolet: 0x8a2be2,
    brown: 0xa52a2a,
    burlywood: 0xdeb887,
    cadetblue: 0x5f9ea0,
    chartreuse: 0x7fff00,
    chocolate: 0xd2691e,
    coral: 0xff7f50,
    cornflowerblue: 0x6495ed,
    cornsilk: 0xfff8dc,
    crimson: 0xdc143c,
    cyan: 0x00ffff,
    darkblue: 0x00008b,
    darkcyan: 0x008b8b,
    darkgoldenrod: 0xb8860b,
    darkgray: 0xa9a9a9,
    darkgreen: 0x006400,
    darkgrey: 0xa9a9a9,
    darkkhaki: 0xbdb76b,
    darkmagenta: 0x8b008b,
    darkolivegreen: 0x556b2f,
    darkorange: 0xff8c00,
    darkorchid: 0x9932cc,
    darkred: 0x8b0000,
    darksalmon: 0xe9967a,
    darkseagreen: 0x8fbc8f,
    darkslateblue: 0x483d8b,
    darkslategray: 0x2f4f4f,
    darkslategrey: 0x2f4f4f,
    darkturquoise: 0x00ced1,
    darkviolet: 0x9400d3,
    deeppink: 0xff1493,
    deepskyblue: 0x00bfff,
    dimgray: 0x696969,
    dimgrey: 0x696969,
    dodgerblue: 0x1e90ff,
    firebrick: 0xb22222,
    floralwhite: 0xfffaf0,
    forestgreen: 0x228b22,
    fuchsia: 0xff00ff,
    gainsboro: 0xdcdcdc,
    ghostwhite: 0xf8f8ff,
    gold: 0xffd700,
    goldenrod: 0xdaa520,
    gray: 0x808080,
    green: 0x008000,
    greenyellow: 0xadff2f,
    grey: 0x808080,
    honeydew: 0xf0fff0,
    hotpink: 0xff69b4,
    indianred: 0xcd5c5c,
    indigo: 0x4b0082,
    ivory: 0xfffff0,
    khaki: 0xf0e68c,
    lavender: 0xe6e6fa,
    lavenderblush: 0xfff0f5,
    lawngreen: 0x7cfc00,
    lemonchiffon: 0xfffacd,
    lightblue: 0xadd8e6,
    lightcoral: 0xf08080,
    lightcyan: 0xe0ffff,
    lightgoldenrodyellow: 0xfafad2,
    lightgray: 0xd3d3d3,
    lightgreen: 0x90ee90,
    lightgrey: 0xd3d3d3,
    lightpink: 0xffb6c1,
    lightsalmon: 0xffa07a,
    lightseagreen: 0x20b2aa,
    lightskyblue: 0x87cefa,
    lightslategray: 0x778899,
    lightslategrey: 0x778899,
    lightsteelblue: 0xb0c4de,
    lightyellow: 0xffffe0,
    lime: 0x00ff00,
    limegreen: 0x32cd32,
    linen: 0xfaf0e6,
    magenta: 0xff00ff,
    maroon: 0x800000,
    mediumaquamarine: 0x66cdaa,
    mediumblue: 0x0000cd,
    mediumorchid: 0xba55d3,
    mediumpurple: 0x9370db,
    mediumseagreen: 0x3cb371,
    mediumslateblue: 0x7b68ee,
    mediumspringgreen: 0x00fa9a,
    mediumturquoise: 0x48d1cc,
    mediumvioletred: 0xc71585,
    midnightblue: 0x191970,
    mintcream: 0xf5fffa,
    mistyrose: 0xffe4e1,
    moccasin: 0xffe4b5,
    navajowhite: 0xffdead,
    navy: 0x000080,
    oldlace: 0xfdf5e6,
    olive: 0x808000,
    olivedrab: 0x6b8e23,
    orange: 0xffa500,
    orangered: 0xff4500,
    orchid: 0xda70d6,
    palegoldenrod: 0xeee8aa,
    palegreen: 0x98fb98,
    paleturquoise: 0xafeeee,
    palevioletred: 0xdb7093,
    papayawhip: 0xffefd5,
    peachpuff: 0xffdab9,
    peru: 0xcd853f,
    pink: 0xffc0cb,
    plum: 0xdda0dd,
    powderblue: 0xb0e0e6,
    purple: 0x800080,
    rebeccapurple: 0x663399,
    red: 0xff0000,
    rosybrown: 0xbc8f8f,
    royalblue: 0x4169e1,
    saddlebrown: 0x8b4513,
    salmon: 0xfa8072,
    sandybrown: 0xf4a460,
    seagreen: 0x2e8b57,
    seashell: 0xfff5ee,
    sienna: 0xa0522d,
    silver: 0xc0c0c0,
    skyblue: 0x87ceeb,
    slateblue: 0x6a5acd,
    slategray: 0x708090,
    slategrey: 0x708090,
    snow: 0xfffafa,
    springgreen: 0x00ff7f,
    steelblue: 0x4682b4,
    tan: 0xd2b48c,
    teal: 0x008080,
    thistle: 0xd8bfd8,
    tomato: 0xff6347,
    turquoise: 0x40e0d0,
    violet: 0xee82ee,
    wheat: 0xf5deb3,
    white: 0xffffff,
    whitesmoke: 0xf5f5f5,
    yellow: 0xffff00,
    yellowgreen: 0x9acd32
  };

  define(Color, color, {
    copy(channels) {
      return Object.assign(new this.constructor, this, channels);
    },
    displayable() {
      return this.rgb().displayable();
    },
    hex: color_formatHex, // Deprecated! Use color.formatHex.
    formatHex: color_formatHex,
    formatHex8: color_formatHex8,
    formatHsl: color_formatHsl,
    formatRgb: color_formatRgb,
    toString: color_formatRgb
  });

  function color_formatHex() {
    return this.rgb().formatHex();
  }

  function color_formatHex8() {
    return this.rgb().formatHex8();
  }

  function color_formatHsl() {
    return hslConvert(this).formatHsl();
  }

  function color_formatRgb() {
    return this.rgb().formatRgb();
  }

  function color(format) {
    var m, l;
    format = (format + "").trim().toLowerCase();
    return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
        : l === 3 ? new Rgb((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1) // #f00
        : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
        : l === 4 ? rgba((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff) // #f000
        : null) // invalid hex
        : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
        : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
        : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
        : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
        : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
        : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
        : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
        : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
        : null;
  }

  function rgbn(n) {
    return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
  }

  function rgba(r, g, b, a) {
    if (a <= 0) r = g = b = NaN;
    return new Rgb(r, g, b, a);
  }

  function rgbConvert(o) {
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Rgb;
    o = o.rgb();
    return new Rgb(o.r, o.g, o.b, o.opacity);
  }

  function rgb$1(r, g, b, opacity) {
    return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
  }

  function Rgb(r, g, b, opacity) {
    this.r = +r;
    this.g = +g;
    this.b = +b;
    this.opacity = +opacity;
  }

  define(Rgb, rgb$1, extend(Color, {
    brighter(k) {
      k = k == null ? brighter : Math.pow(brighter, k);
      return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    darker(k) {
      k = k == null ? darker : Math.pow(darker, k);
      return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    rgb() {
      return this;
    },
    clamp() {
      return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
    },
    displayable() {
      return (-0.5 <= this.r && this.r < 255.5)
          && (-0.5 <= this.g && this.g < 255.5)
          && (-0.5 <= this.b && this.b < 255.5)
          && (0 <= this.opacity && this.opacity <= 1);
    },
    hex: rgb_formatHex, // Deprecated! Use color.formatHex.
    formatHex: rgb_formatHex,
    formatHex8: rgb_formatHex8,
    formatRgb: rgb_formatRgb,
    toString: rgb_formatRgb
  }));

  function rgb_formatHex() {
    return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
  }

  function rgb_formatHex8() {
    return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
  }

  function rgb_formatRgb() {
    const a = clampa(this.opacity);
    return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
  }

  function clampa(opacity) {
    return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
  }

  function clampi(value) {
    return Math.max(0, Math.min(255, Math.round(value) || 0));
  }

  function hex(value) {
    value = clampi(value);
    return (value < 16 ? "0" : "") + value.toString(16);
  }

  function hsla(h, s, l, a) {
    if (a <= 0) h = s = l = NaN;
    else if (l <= 0 || l >= 1) h = s = NaN;
    else if (s <= 0) h = NaN;
    return new Hsl(h, s, l, a);
  }

  function hslConvert(o) {
    if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Hsl;
    if (o instanceof Hsl) return o;
    o = o.rgb();
    var r = o.r / 255,
        g = o.g / 255,
        b = o.b / 255,
        min = Math.min(r, g, b),
        max = Math.max(r, g, b),
        h = NaN,
        s = max - min,
        l = (max + min) / 2;
    if (s) {
      if (r === max) h = (g - b) / s + (g < b) * 6;
      else if (g === max) h = (b - r) / s + 2;
      else h = (r - g) / s + 4;
      s /= l < 0.5 ? max + min : 2 - max - min;
      h *= 60;
    } else {
      s = l > 0 && l < 1 ? 0 : h;
    }
    return new Hsl(h, s, l, o.opacity);
  }

  function hsl(h, s, l, opacity) {
    return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
  }

  function Hsl(h, s, l, opacity) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
    this.opacity = +opacity;
  }

  define(Hsl, hsl, extend(Color, {
    brighter(k) {
      k = k == null ? brighter : Math.pow(brighter, k);
      return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    darker(k) {
      k = k == null ? darker : Math.pow(darker, k);
      return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    rgb() {
      var h = this.h % 360 + (this.h < 0) * 360,
          s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
          l = this.l,
          m2 = l + (l < 0.5 ? l : 1 - l) * s,
          m1 = 2 * l - m2;
      return new Rgb(
        hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
        hsl2rgb(h, m1, m2),
        hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
        this.opacity
      );
    },
    clamp() {
      return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
    },
    displayable() {
      return (0 <= this.s && this.s <= 1 || isNaN(this.s))
          && (0 <= this.l && this.l <= 1)
          && (0 <= this.opacity && this.opacity <= 1);
    },
    formatHsl() {
      const a = clampa(this.opacity);
      return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
    }
  }));

  function clamph(value) {
    value = (value || 0) % 360;
    return value < 0 ? value + 360 : value;
  }

  function clampt(value) {
    return Math.max(0, Math.min(1, value || 0));
  }

  /* From FvD 13.37, CSS Color Module Level 3 */
  function hsl2rgb(h, m1, m2) {
    return (h < 60 ? m1 + (m2 - m1) * h / 60
        : h < 180 ? m2
        : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
        : m1) * 255;
  }

  var constant = x => () => x;

  function linear$1(a, d) {
    return function(t) {
      return a + t * d;
    };
  }

  function exponential(a, b, y) {
    return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
      return Math.pow(a + t * b, y);
    };
  }

  function gamma(y) {
    return (y = +y) === 1 ? nogamma : function(a, b) {
      return b - a ? exponential(a, b, y) : constant(isNaN(a) ? b : a);
    };
  }

  function nogamma(a, b) {
    var d = b - a;
    return d ? linear$1(a, d) : constant(isNaN(a) ? b : a);
  }

  var rgb = (function rgbGamma(y) {
    var color = gamma(y);

    function rgb(start, end) {
      var r = color((start = rgb$1(start)).r, (end = rgb$1(end)).r),
          g = color(start.g, end.g),
          b = color(start.b, end.b),
          opacity = nogamma(start.opacity, end.opacity);
      return function(t) {
        start.r = r(t);
        start.g = g(t);
        start.b = b(t);
        start.opacity = opacity(t);
        return start + "";
      };
    }

    rgb.gamma = rgbGamma;

    return rgb;
  })(1);

  function numberArray(a, b) {
    if (!b) b = [];
    var n = a ? Math.min(b.length, a.length) : 0,
        c = b.slice(),
        i;
    return function(t) {
      for (i = 0; i < n; ++i) c[i] = a[i] * (1 - t) + b[i] * t;
      return c;
    };
  }

  function isNumberArray(x) {
    return ArrayBuffer.isView(x) && !(x instanceof DataView);
  }

  function genericArray(a, b) {
    var nb = b ? b.length : 0,
        na = a ? Math.min(nb, a.length) : 0,
        x = new Array(na),
        c = new Array(nb),
        i;

    for (i = 0; i < na; ++i) x[i] = interpolate(a[i], b[i]);
    for (; i < nb; ++i) c[i] = b[i];

    return function(t) {
      for (i = 0; i < na; ++i) c[i] = x[i](t);
      return c;
    };
  }

  function date(a, b) {
    var d = new Date;
    return a = +a, b = +b, function(t) {
      return d.setTime(a * (1 - t) + b * t), d;
    };
  }

  function interpolateNumber(a, b) {
    return a = +a, b = +b, function(t) {
      return a * (1 - t) + b * t;
    };
  }

  function object(a, b) {
    var i = {},
        c = {},
        k;

    if (a === null || typeof a !== "object") a = {};
    if (b === null || typeof b !== "object") b = {};

    for (k in b) {
      if (k in a) {
        i[k] = interpolate(a[k], b[k]);
      } else {
        c[k] = b[k];
      }
    }

    return function(t) {
      for (k in i) c[k] = i[k](t);
      return c;
    };
  }

  var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      reB = new RegExp(reA.source, "g");

  function zero(b) {
    return function() {
      return b;
    };
  }

  function one(b) {
    return function(t) {
      return b(t) + "";
    };
  }

  function string(a, b) {
    var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
        am, // current match in a
        bm, // current match in b
        bs, // string preceding current number in b, if any
        i = -1, // index in s
        s = [], // string constants and placeholders
        q = []; // number interpolators

    // Coerce inputs to strings.
    a = a + "", b = b + "";

    // Interpolate pairs of numbers in a & b.
    while ((am = reA.exec(a))
        && (bm = reB.exec(b))) {
      if ((bs = bm.index) > bi) { // a string precedes the next number in b
        bs = b.slice(bi, bs);
        if (s[i]) s[i] += bs; // coalesce with previous string
        else s[++i] = bs;
      }
      if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
        if (s[i]) s[i] += bm; // coalesce with previous string
        else s[++i] = bm;
      } else { // interpolate non-matching numbers
        s[++i] = null;
        q.push({i: i, x: interpolateNumber(am, bm)});
      }
      bi = reB.lastIndex;
    }

    // Add remains of b.
    if (bi < b.length) {
      bs = b.slice(bi);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }

    // Special optimization for only a single match.
    // Otherwise, interpolate each of the numbers and rejoin the string.
    return s.length < 2 ? (q[0]
        ? one(q[0].x)
        : zero(b))
        : (b = q.length, function(t) {
            for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
            return s.join("");
          });
  }

  function interpolate(a, b) {
    var t = typeof b, c;
    return b == null || t === "boolean" ? constant(b)
        : (t === "number" ? interpolateNumber
        : t === "string" ? ((c = color(b)) ? (b = c, rgb) : string)
        : b instanceof color ? rgb
        : b instanceof Date ? date
        : isNumberArray(b) ? numberArray
        : Array.isArray(b) ? genericArray
        : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object
        : interpolateNumber)(a, b);
  }

  function interpolateRound(a, b) {
    return a = +a, b = +b, function(t) {
      return Math.round(a * (1 - t) + b * t);
    };
  }

  function constants(x) {
    return function() {
      return x;
    };
  }

  function number(x) {
    return +x;
  }

  var unit = [0, 1];

  function identity$1(x) {
    return x;
  }

  function normalize(a, b) {
    return (b -= (a = +a))
        ? function(x) { return (x - a) / b; }
        : constants(isNaN(b) ? NaN : 0.5);
  }

  function clamper(a, b) {
    var t;
    if (a > b) t = a, a = b, b = t;
    return function(x) { return Math.max(a, Math.min(b, x)); };
  }

  // normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
  // interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].
  function bimap(domain, range, interpolate) {
    var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
    if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
    else d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
    return function(x) { return r0(d0(x)); };
  }

  function polymap(domain, range, interpolate) {
    var j = Math.min(domain.length, range.length) - 1,
        d = new Array(j),
        r = new Array(j),
        i = -1;

    // Reverse descending domains.
    if (domain[j] < domain[0]) {
      domain = domain.slice().reverse();
      range = range.slice().reverse();
    }

    while (++i < j) {
      d[i] = normalize(domain[i], domain[i + 1]);
      r[i] = interpolate(range[i], range[i + 1]);
    }

    return function(x) {
      var i = bisectRight(domain, x, 1, j) - 1;
      return r[i](d[i](x));
    };
  }

  function copy(source, target) {
    return target
        .domain(source.domain())
        .range(source.range())
        .interpolate(source.interpolate())
        .clamp(source.clamp())
        .unknown(source.unknown());
  }

  function transformer() {
    var domain = unit,
        range = unit,
        interpolate$1 = interpolate,
        transform,
        untransform,
        unknown,
        clamp = identity$1,
        piecewise,
        output,
        input;

    function rescale() {
      var n = Math.min(domain.length, range.length);
      if (clamp !== identity$1) clamp = clamper(domain[0], domain[n - 1]);
      piecewise = n > 2 ? polymap : bimap;
      output = input = null;
      return scale;
    }

    function scale(x) {
      return x == null || isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate$1)))(transform(clamp(x)));
    }

    scale.invert = function(y) {
      return clamp(untransform((input || (input = piecewise(range, domain.map(transform), interpolateNumber)))(y)));
    };

    scale.domain = function(_) {
      return arguments.length ? (domain = Array.from(_, number), rescale()) : domain.slice();
    };

    scale.range = function(_) {
      return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
    };

    scale.rangeRound = function(_) {
      return range = Array.from(_), interpolate$1 = interpolateRound, rescale();
    };

    scale.clamp = function(_) {
      return arguments.length ? (clamp = _ ? true : identity$1, rescale()) : clamp !== identity$1;
    };

    scale.interpolate = function(_) {
      return arguments.length ? (interpolate$1 = _, rescale()) : interpolate$1;
    };

    scale.unknown = function(_) {
      return arguments.length ? (unknown = _, scale) : unknown;
    };

    return function(t, u) {
      transform = t, untransform = u;
      return rescale();
    };
  }

  function continuous() {
    return transformer()(identity$1, identity$1);
  }

  function formatDecimal(x) {
    return Math.abs(x = Math.round(x)) >= 1e21
        ? x.toLocaleString("en").replace(/,/g, "")
        : x.toString(10);
  }

  // Computes the decimal coefficient and exponent of the specified number x with
  // significant digits p, where x is positive and p is in [1, 21] or undefined.
  // For example, formatDecimalParts(1.23) returns ["123", 0].
  function formatDecimalParts(x, p) {
    if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
    var i, coefficient = x.slice(0, i);

    // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
    // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
    return [
      coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
      +x.slice(i + 1)
    ];
  }

  function exponent(x) {
    return x = formatDecimalParts(Math.abs(x)), x ? x[1] : NaN;
  }

  function formatGroup(grouping, thousands) {
    return function(value, width) {
      var i = value.length,
          t = [],
          j = 0,
          g = grouping[0],
          length = 0;

      while (i > 0 && g > 0) {
        if (length + g + 1 > width) g = Math.max(1, width - length);
        t.push(value.substring(i -= g, i + g));
        if ((length += g + 1) > width) break;
        g = grouping[j = (j + 1) % grouping.length];
      }

      return t.reverse().join(thousands);
    };
  }

  function formatNumerals(numerals) {
    return function(value) {
      return value.replace(/[0-9]/g, function(i) {
        return numerals[+i];
      });
    };
  }

  // [[fill]align][sign][symbol][0][width][,][.precision][~][type]
  var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

  function formatSpecifier(specifier) {
    if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
    var match;
    return new FormatSpecifier({
      fill: match[1],
      align: match[2],
      sign: match[3],
      symbol: match[4],
      zero: match[5],
      width: match[6],
      comma: match[7],
      precision: match[8] && match[8].slice(1),
      trim: match[9],
      type: match[10]
    });
  }

  formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

  function FormatSpecifier(specifier) {
    this.fill = specifier.fill === undefined ? " " : specifier.fill + "";
    this.align = specifier.align === undefined ? ">" : specifier.align + "";
    this.sign = specifier.sign === undefined ? "-" : specifier.sign + "";
    this.symbol = specifier.symbol === undefined ? "" : specifier.symbol + "";
    this.zero = !!specifier.zero;
    this.width = specifier.width === undefined ? undefined : +specifier.width;
    this.comma = !!specifier.comma;
    this.precision = specifier.precision === undefined ? undefined : +specifier.precision;
    this.trim = !!specifier.trim;
    this.type = specifier.type === undefined ? "" : specifier.type + "";
  }

  FormatSpecifier.prototype.toString = function() {
    return this.fill
        + this.align
        + this.sign
        + this.symbol
        + (this.zero ? "0" : "")
        + (this.width === undefined ? "" : Math.max(1, this.width | 0))
        + (this.comma ? "," : "")
        + (this.precision === undefined ? "" : "." + Math.max(0, this.precision | 0))
        + (this.trim ? "~" : "")
        + this.type;
  };

  // Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
  function formatTrim(s) {
    out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
      switch (s[i]) {
        case ".": i0 = i1 = i; break;
        case "0": if (i0 === 0) i0 = i; i1 = i; break;
        default: if (!+s[i]) break out; if (i0 > 0) i0 = 0; break;
      }
    }
    return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
  }

  var prefixExponent;

  function formatPrefixAuto(x, p) {
    var d = formatDecimalParts(x, p);
    if (!d) return x + "";
    var coefficient = d[0],
        exponent = d[1],
        i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
        n = coefficient.length;
    return i === n ? coefficient
        : i > n ? coefficient + new Array(i - n + 1).join("0")
        : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
        : "0." + new Array(1 - i).join("0") + formatDecimalParts(x, Math.max(0, p + i - 1))[0]; // less than 1y!
  }

  function formatRounded(x, p) {
    var d = formatDecimalParts(x, p);
    if (!d) return x + "";
    var coefficient = d[0],
        exponent = d[1];
    return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
        : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
        : coefficient + new Array(exponent - coefficient.length + 2).join("0");
  }

  var formatTypes = {
    "%": (x, p) => (x * 100).toFixed(p),
    "b": (x) => Math.round(x).toString(2),
    "c": (x) => x + "",
    "d": formatDecimal,
    "e": (x, p) => x.toExponential(p),
    "f": (x, p) => x.toFixed(p),
    "g": (x, p) => x.toPrecision(p),
    "o": (x) => Math.round(x).toString(8),
    "p": (x, p) => formatRounded(x * 100, p),
    "r": formatRounded,
    "s": formatPrefixAuto,
    "X": (x) => Math.round(x).toString(16).toUpperCase(),
    "x": (x) => Math.round(x).toString(16)
  };

  function identity(x) {
    return x;
  }

  var map = Array.prototype.map,
      prefixes = ["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];

  function formatLocale(locale) {
    var group = locale.grouping === undefined || locale.thousands === undefined ? identity : formatGroup(map.call(locale.grouping, Number), locale.thousands + ""),
        currencyPrefix = locale.currency === undefined ? "" : locale.currency[0] + "",
        currencySuffix = locale.currency === undefined ? "" : locale.currency[1] + "",
        decimal = locale.decimal === undefined ? "." : locale.decimal + "",
        numerals = locale.numerals === undefined ? identity : formatNumerals(map.call(locale.numerals, String)),
        percent = locale.percent === undefined ? "%" : locale.percent + "",
        minus = locale.minus === undefined ? "−" : locale.minus + "",
        nan = locale.nan === undefined ? "NaN" : locale.nan + "";

    function newFormat(specifier) {
      specifier = formatSpecifier(specifier);

      var fill = specifier.fill,
          align = specifier.align,
          sign = specifier.sign,
          symbol = specifier.symbol,
          zero = specifier.zero,
          width = specifier.width,
          comma = specifier.comma,
          precision = specifier.precision,
          trim = specifier.trim,
          type = specifier.type;

      // The "n" type is an alias for ",g".
      if (type === "n") comma = true, type = "g";

      // The "" type, and any invalid type, is an alias for ".12~g".
      else if (!formatTypes[type]) precision === undefined && (precision = 12), trim = true, type = "g";

      // If zero fill is specified, padding goes after sign and before digits.
      if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";

      // Compute the prefix and suffix.
      // For SI-prefix, the suffix is lazily computed.
      var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
          suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";

      // What format function should we use?
      // Is this an integer type?
      // Can this type generate exponential notation?
      var formatType = formatTypes[type],
          maybeSuffix = /[defgprs%]/.test(type);

      // Set the default precision if not specified,
      // or clamp the specified precision to the supported range.
      // For significant precision, it must be in [1, 21].
      // For fixed precision, it must be in [0, 20].
      precision = precision === undefined ? 6
          : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
          : Math.max(0, Math.min(20, precision));

      function format(value) {
        var valuePrefix = prefix,
            valueSuffix = suffix,
            i, n, c;

        if (type === "c") {
          valueSuffix = formatType(value) + valueSuffix;
          value = "";
        } else {
          value = +value;

          // Determine the sign. -0 is not less than 0, but 1 / -0 is!
          var valueNegative = value < 0 || 1 / value < 0;

          // Perform the initial formatting.
          value = isNaN(value) ? nan : formatType(Math.abs(value), precision);

          // Trim insignificant zeros.
          if (trim) value = formatTrim(value);

          // If a negative value rounds to zero after formatting, and no explicit positive sign is requested, hide the sign.
          if (valueNegative && +value === 0 && sign !== "+") valueNegative = false;

          // Compute the prefix and suffix.
          valuePrefix = (valueNegative ? (sign === "(" ? sign : minus) : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
          valueSuffix = (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");

          // Break the formatted value into the integer “value” part that can be
          // grouped, and fractional or exponential “suffix” part that is not.
          if (maybeSuffix) {
            i = -1, n = value.length;
            while (++i < n) {
              if (c = value.charCodeAt(i), 48 > c || c > 57) {
                valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
                value = value.slice(0, i);
                break;
              }
            }
          }
        }

        // If the fill character is not "0", grouping is applied before padding.
        if (comma && !zero) value = group(value, Infinity);

        // Compute the padding.
        var length = valuePrefix.length + value.length + valueSuffix.length,
            padding = length < width ? new Array(width - length + 1).join(fill) : "";

        // If the fill character is "0", grouping is applied after padding.
        if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

        // Reconstruct the final output based on the desired alignment.
        switch (align) {
          case "<": value = valuePrefix + value + valueSuffix + padding; break;
          case "=": value = valuePrefix + padding + value + valueSuffix; break;
          case "^": value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length); break;
          default: value = padding + valuePrefix + value + valueSuffix; break;
        }

        return numerals(value);
      }

      format.toString = function() {
        return specifier + "";
      };

      return format;
    }

    function formatPrefix(specifier, value) {
      var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)),
          e = Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3,
          k = Math.pow(10, -e),
          prefix = prefixes[8 + e / 3];
      return function(value) {
        return f(k * value) + prefix;
      };
    }

    return {
      format: newFormat,
      formatPrefix: formatPrefix
    };
  }

  var locale;
  var format;
  var formatPrefix;

  defaultLocale({
    thousands: ",",
    grouping: [3],
    currency: ["$", ""]
  });

  function defaultLocale(definition) {
    locale = formatLocale(definition);
    format = locale.format;
    formatPrefix = locale.formatPrefix;
    return locale;
  }

  function precisionFixed(step) {
    return Math.max(0, -exponent(Math.abs(step)));
  }

  function precisionPrefix(step, value) {
    return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3 - exponent(Math.abs(step)));
  }

  function precisionRound(step, max) {
    step = Math.abs(step), max = Math.abs(max) - step;
    return Math.max(0, exponent(max) - exponent(step)) + 1;
  }

  function tickFormat(start, stop, count, specifier) {
    var step = tickStep(start, stop, count),
        precision;
    specifier = formatSpecifier(specifier == null ? ",f" : specifier);
    switch (specifier.type) {
      case "s": {
        var value = Math.max(Math.abs(start), Math.abs(stop));
        if (specifier.precision == null && !isNaN(precision = precisionPrefix(step, value))) specifier.precision = precision;
        return formatPrefix(specifier, value);
      }
      case "":
      case "e":
      case "g":
      case "p":
      case "r": {
        if (specifier.precision == null && !isNaN(precision = precisionRound(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
        break;
      }
      case "f":
      case "%": {
        if (specifier.precision == null && !isNaN(precision = precisionFixed(step))) specifier.precision = precision - (specifier.type === "%") * 2;
        break;
      }
    }
    return format(specifier);
  }

  function linearish(scale) {
    var domain = scale.domain;

    scale.ticks = function(count) {
      var d = domain();
      return ticks(d[0], d[d.length - 1], count == null ? 10 : count);
    };

    scale.tickFormat = function(count, specifier) {
      var d = domain();
      return tickFormat(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
    };

    scale.nice = function(count) {
      if (count == null) count = 10;

      var d = domain();
      var i0 = 0;
      var i1 = d.length - 1;
      var start = d[i0];
      var stop = d[i1];
      var prestep;
      var step;
      var maxIter = 10;

      if (stop < start) {
        step = start, start = stop, stop = step;
        step = i0, i0 = i1, i1 = step;
      }
      
      while (maxIter-- > 0) {
        step = tickIncrement(start, stop, count);
        if (step === prestep) {
          d[i0] = start;
          d[i1] = stop;
          return domain(d);
        } else if (step > 0) {
          start = Math.floor(start / step) * step;
          stop = Math.ceil(stop / step) * step;
        } else if (step < 0) {
          start = Math.ceil(start * step) / step;
          stop = Math.floor(stop * step) / step;
        } else {
          break;
        }
        prestep = step;
      }

      return scale;
    };

    return scale;
  }

  function linear() {
    var scale = continuous();

    scale.copy = function() {
      return copy(scale, linear());
    };

    initRange.apply(scale, arguments);

    return linearish(scale);
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
    var lngUvScale = linear(extent(points, function (d) {
      return d[0];
    }), [0, 1]);
    var latUvScale = linear(extent(points, function (d) {
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
    return crossesPoleOrAntimeridian ? geoContains(polygon, pnt) : turf_boolean_point_in_polygon_default(pnt, polygon);
  }

  var THREE = window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
  : {
    BufferGeometry: three.BufferGeometry,
    Float32BufferAttribute: three.Float32BufferAttribute
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

  return ConicPolygonGeometry;

}));
//# sourceMappingURL=three-conic-polygon-geometry.js.map
