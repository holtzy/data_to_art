data-bind-mapper
==========

[![NPM package][npm-img]][npm-url]
[![Build Size][build-size-img]][build-size-url]
[![NPM Downloads][npm-downloads-img]][npm-downloads-url]

A class to perform data joins with any type of JavaScript objects.
Useful in digest cycles where it's important to minimize changes to a view for performance reasons, such as DOM manipulation.
The module binds data points to objects via internal maps, and performs diffing comparisons across multiple iterations to ensure objects are not created or removed unnecessarily, thus keeping view changes to a minimum.

## Quick start

```js
import DataBindMapper from 'data-bind-mapper';
```
or using a *script* tag
```html
<script src="//cdn.jsdelivr.net/npm/data-bind-mapper"></script>
```
then
```js
const myData = [{ id: 0, val: 2 }, { id: 1, val: 4 }, { id: 2, val: 7 }];
const myView = new Set();

new DataBindMapper()
  .onCreateObj(() => {
    const obj = {};
    myView.add(obj);
    return obj;
  })
  .onUpdateObj((obj, d) => { obj.double = d.val * 2 })
  .onRemoveObj(obj => myView.delete(obj))
  .digest(myData);
```

## API reference

### Initialisation
```js
new DataBindMapper()
```

### Methods

| Method                                    | Description                                                                                                                                                                                                              |
|-------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| <b>getObj</b>(<i>datum</i>)               | Returns the object associated with this data element, or `undefined` if not found.                                                                                                                                       |
| <b>getData</b>(<i>obj</i>)                | Returns the data element associated with this object, or `undefined` if not found.                                                                                                                                       |
| <b>entries</b>()                          | Returns all the data elements and associated objects, formatted as an array of tuples.                                                                                                                                   |
| <b>id</b>(<i>str</i> or <i>fn</i>)        | Data element accessor function or attribute for the id to use when indexing the data. Should refer to a property unique to the data element.                                                                             |
| <b>onCreateObj</b>(<i>fn(datum)</i>)      | The method to create an entering view object for a new data element that does not yet have a corresponding object. The data element is passed as single argument: `d => { ... }`. The method should return a new object. |
| <b>onUpdateObj</b>(<i>fn(obj, datum)</i>) | The method to update an existing bound object with new data. The object and the data element are passed as arguments: `(obj, d) => { ... }`. This method is also called for entering objects after `onCreateObj`.        |
| <b>onRemoveObj</b>(<i>fn(obj, id)</i>)    | The method to handle exiting objects which no longer have a corresponding data element. The unbound object and the lost data id are passed as arguments: `(obj, id) => { ... }`.                                         |
| <b>digest</b>(data)                       | Receives a new array of data which is diffed with the existing one and invokes `onCreateObj`, `onUpdateObj` and `onRemoveObj` as needed.                                                                                 |
| <b>clear</b>()                            | Removes all registered data and objects. Equivalent to doing `.digest([])`.                                                                                                                                              |

[npm-img]: https://img.shields.io/npm/v/data-bind-mapper
[npm-url]: https://npmjs.org/package/data-bind-mapper
[build-size-img]: https://img.shields.io/bundlephobia/minzip/data-bind-mapper
[build-size-url]: https://bundlephobia.com/result?p=data-bind-mapper
[npm-downloads-img]: https://img.shields.io/npm/dt/data-bind-mapper
[npm-downloads-url]: https://www.npmtrends.com/data-bind-mapper
