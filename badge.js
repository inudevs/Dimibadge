const { BadgeFactory } = require('gh-badges')

const bf = new BadgeFactory()
const colors = {
  'EB': '#424242',
  'DC': '#FF0080',
  'WP': '#9A2EFE',
  'HD': '#3A01DF'
}

badge = {
  minimal: function (dpt, year, base = '#777') {
    const format = {
      text: [dpt, year.toUpperCase()],
      colorA: base,
      colorB: colors[dpt.toUpperCase()],
      template: 'flat'
    }
    const svg = bf.create(format)
    return svg
  },
  named: function (dpt, year, name) {
    const format = {
      text: [dpt + year.toUpperCase(), name],
      colorA: colors[dpt.toUpperCase()],
      colorB: '#777',
      template: 'flat'
    }

    const svg = bf.create(format)
    return svg
  }
}
module.exports = badge
