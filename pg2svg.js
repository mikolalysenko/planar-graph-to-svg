'use strict'

module.exports = planarGraphToSVG

var ARROW_MARKER = '\
<marker id="markerArrow" markerWidth="13" markerHeight="13" refx="2" refy="6" orient="auto">\
  <path d="M2,2 L2,11 L10,6 L2,2" style="fill: #000000;" />\
</marker>'

var SVG_BOILERPLATE= 'xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"'

function planarGraphToSVG(edges, positions, options) {

  options = options || {}

  //First compute bounds
  var lo = [ Infinity,  Infinity]
  var hi = [-Infinity, -Infinity]
  for(var i=0; i<positions.length; ++i) {
    var p = positions[i]
    for(var j=0; j<2; ++j) {
      lo[j] = Math.min(lo[j], p[j])
      hi[j] = Math.max(hi[j], p[j])
    }
  }

  var width  = options.width  || 500
  var height = options.height || 500

  width  /= (hi[0] - lo[0]) || 1
  height /= (hi[1] - lo[1]) || 1

  var svg = ['<svg ', SVG_BOILERPLATE, 
    ' width="', width, 
    '" height="', height, '">']

  if(options.arrows) {
    svg.push('<defs>',ARROW_MARKER,'</defs>')
  }

  var dx = lo[0] 
  var dy = lo[1]
  var sx = width  / (hi[0] - lo[0])
  var sy = height / (hi[1] - lo[1])

  var pathColor = options.pathColor || 'black'
  var pathWidth = options.lineWidth || '1px'

  for(var i=0; i<edges.length; ++i) {
    var e = edges[i]
    var e0 = positions[e[0]]
    var e1 = positions[e[1]]
    svg.push('<path style="stroke: ', 
      pathColor, '; stroke-width: ', 
      pathWidth, '; fill:none;',
      (options.arrows ?  'marker-end: #markerArrow' : ''),
      '" d="', 
       'M', sx*(e0[0]-dx), ' ', sy*(e0[1]-dy), 
      ' L', sx*(e1[0]-dx), ' ', sy*(e1[1]-dy), 
      '"/>')
  }

  svg.push('</svg>')
  return svg.join('')
}