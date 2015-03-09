'use strict'

var toSVG = require('../pg2svg')
var ch = require('convex-hull')
var points = []
for(var i=0; i<100; ++i) {
  points.push([Math.random(), Math.random()])
}
console.log(toSVG(ch(points), points))