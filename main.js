var express = require('express')
var app = express()

const badge = require('./badge')

app.get('/:dpt/:year', function (req, res) {
  var dpt = req.params.dpt.toUpperCase()
  var base = '#777'
  if (req.query.base) base = '#' + req.query.base

  const svg = badge.minmal(dpt, req.params.year, base)

  res.setHeader('Content-Type', 'image/svg+xml')
  res.send(svg)
})

app.get('/:dpt/:year/:name', function (req, res) {
  var dpt = req.params.dpt.toUpperCase()

  const svg = badge.named(dpt, req.params.year, req.params.name)

  res.setHeader('Content-Type', 'image/svg+xml')
  res.send(svg)
})

app.listen(3000, function () {
  console.log('Dimibadge listening on port 3000!')
})
