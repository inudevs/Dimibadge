
var express = require('express')
var app = express()

const { BadgeFactory } = require('gh-badges')

const bf = new BadgeFactory()
const colors = {
  'EB': '#424242',
  'DC': '#FF0080',
  'WP': '#9A2EFE',
  'HD': '#3A01DF'
}

app.get('/:dpt/:year', function (req, res) {
  var dpt = req.params.dpt.toUpperCase()
  var base = '#555'
  if (req.query.base) base = '#' + req.query.base
  const format = {
    text: [dpt, req.params.year.toUpperCase()],
    colorA: base,
    colorB: colors[dpt],
    template: 'flat'
  }

  const svg = bf.create(format)
  res.setHeader('Content-Type', 'image/svg+xml')
  res.send(svg)
})

app.get('/:dpt/:year/:name', function (req, res) {
  var dpt = req.params.dpt.toUpperCase()
  const format = {
    text: [dpt + req.params.year.toUpperCase(), req.params.name],
    colorA: colors[dpt],
    colorB: '#555',
    template: 'flat'
  }

  const svg = bf.create(format)
  res.setHeader('Content-Type', 'image/svg+xml')
  res.send(svg)
})

app.listen(3000, function () {
  console.log('Dimibadge listening on port 3000!')
})
