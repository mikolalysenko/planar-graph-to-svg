planar-graph-to-svg
===================
Converts a planar graph to an SVG string

# Example

```javascript
var toSVG = require('planar-graph-to-svg')
var ch = require('convex-hull')
var points = []
for(var i=0; i<100; ++i) {
  points.push([Math.random(), Math.random()])
}
console.log(toSVG(ch(points), points))
```

Output:

<img src="https://mikolalysenko.github.io/planar-graph-to-svg/example/example.svg">

# Install

```
npm i planar-graph-to-svg
```

# API

#### `var svg = require('planar-graph-to-svg')(edges,positions[,options])`

* `edges` is an array of oriented edges for the planar graph
* `positions` is an array of vertex positions
* `options` is an array of options for the planar graph

**Returns** An SVG string encoding the planar graph

# License
(c) 2015 Mikola Lysenko. MIT License