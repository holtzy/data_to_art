ThreeJS Slippy Map Tiled Globe
==============================

[![NPM package][npm-img]][npm-url]
[![Build Size][build-size-img]][build-size-url]
[![NPM Downloads][npm-downloads-img]][npm-downloads-url]

<p align="center">
  <a href="//vasturiano.github.io/three-slippy-map-globe/example/basic/"><img width="90%" src="https://github.com/vasturiano/three-slippy-map-globe/blob/master/preview.gif"></a>
</p>

A ThreeJS mesh to render tiled raster images onto a sphere using [slippy map](https://en.wikipedia.org/wiki/Tiled_web_map) mechanics, with automatic detection of zoom level and tiles in view based on camera aim and proximity.

Check out the [example](https://vasturiano.github.io/three-slippy-map-globe/example/basic/) ([source](https://github.com/vasturiano/three-slippy-map-globe/blob/master/example/basic/index.html)).

## Quick start

```js
import SlippyMapGlobe from 'three-slippy-map-globe';
```
or using a *script* tag
```html
<script src="//unpkg.com/three-slippy-map-globe"></script>
```
then
```js
const myMap = new SlippyMapGlobe(100, {
  tileUrl: (x, y, l) => `https://tile.openstreetmap.org/${l}/${x}/${y}.png`
});

const myScene = new THREE.Scene();
myScene.add(myMap);
```
and on camera position changes:
```js
controls.addEventListener('change', () => {
  myMap.updatePov(camera);
});
```

## API reference

### Initialisation

```js
new SlippyMapGlobe(globeRadius: float, { configOptions })
```

| Config options                            | Description                                                                                                                                                                                                                                            | Default |
|-------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------:|
| <b>tileUrl</b>: <i>fn(x, y, l)</i>        | The callback function that defines the URL of the tile engine, invoked for each single tile that needs fetching. The slippy map coordinates `x`, `y` and `l` (zoom level) are passed as arguments and the function is expected to return a URL string. |    -    |
| <b>minZoom</b>: <i>int</i>                | The minimum zoom level of the tiles.                                                                                                                                                                                                                   |   `0`   |
| <b>maxZoom</b>: <i>int</i>                | The maximum zoom level of the tiles.                                                                                                                                                                                                                   |  `17`   |
| <b>mercatorProjection</b>: <i>boolean</i> | Whether the tile images use a mercator projection. This is usually true for slippy maps tile sets.                                                                                                                                                     | `true`  |

### Attributes

| Attribute                          | Description                                                                                                                                                                                                                                            |            Default             |
|------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------:|
| <b>tileUrl</b>: <i>fn(x, y, l)</i> | The callback function that defines the URL of the tile engine, invoked for each single tile that needs fetching. The slippy map coordinates `x`, `y` and `l` (zoom level) are passed as arguments and the function is expected to return a URL string. |               -                |
| <b>minZoom</b>: <i>int</i>         | The minimum zoom level of the tiles.                                                                                                                                                                                                                   |              `0`               |
| <b>maxZoom</b>: <i>int</i>         | The maximum zoom level of the tiles.                                                                                                                                                                                                                   |              `17`              |
| <b>thresholds</b>: <i>float[]</i>  | The list of zoom level shifting thresholds, based on camera proximity to the surface, specified in globe radius units.                                                                                                                                 | `[8, 4, 2, 1, 0.5, 0.25, ...]` |
| <b>level</b>: <i>int</i>           | The current zoom level the map is in. Can be modified to manually shift zoom levels.                                                                                                                                                                   |              `0`               |

### Methods

| Method                                                      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|-------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| <b>updatePov</b>(<i>camera</i>)                             | Reports the current position of the camera to this component. The camera object in use should be passed as sole argument. This is necessary to internally calculate which tiles are in view and need to be fetched, as well as controlling automatic zoom level changes. This method should be called everytime the camera changes position, so that the tiles in view and zoom level remains synchronized with what the viewport is showing. |
| <b>clearTiles</b>()    | Removes all the tiles across all zoom levels currently loaded on the map.                                                                                                                                                                                                                                                                                                                                                                     |

## Giving Back

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=L398E7PKP47E8&currency_code=USD&source=url) If this project has helped you and you'd like to contribute back, you can always [buy me a ☕](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=L398E7PKP47E8&currency_code=USD&source=url)!

[npm-img]: https://img.shields.io/npm/v/three-slippy-map-globe
[npm-url]: https://npmjs.org/package/three-slippy-map-globe
[build-size-img]: https://img.shields.io/bundlephobia/minzip/three-slippy-map-globe
[build-size-url]: https://bundlephobia.com/result?p=three-slippy-map-globe
[npm-downloads-img]: https://img.shields.io/npm/dt/three-slippy-map-globe
[npm-downloads-url]: https://www.npmtrends.com/three-slippy-map-globe
