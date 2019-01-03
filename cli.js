const badge = require('./badge')
const fs = require('fs')
const commandLineUsage = require('command-line-usage')

const sections = [
  {
    header: 'Dimibadge',
    content: 'Generate badges for Dimigo related documents'
  },
  {
    header: 'Options',
    optionList: [
      {
        name: 'minimal',
        typeLabel: '{underline department} {underline year} {underline output file}',
        description: 'Create badge with department and admission year'
      },
      {
        name: 'named',
        typeLabel: '{underline department} {underline year} {underline name} {underline output file}',
        description: 'Create badge with department, admission year, name'
      },
      {
        name: 'help',
        description: 'Print this usage guide.'
      }
    ]
  }
]
const usage = commandLineUsage(sections)

var type = process.argv[2]
if (type === '--minimal') {
  const svg = badge.minimal(process.argv[3], process.argv[4])
  fs.writeFile(process.argv[5], svg, function (err) {
    if (err) {
      return console.log(err)
    }
  })
} else if (type === '--named') {
  const svg = badge.named(process.argv[3], process.argv[4], process.argv[5])
  fs.writeFile(process.argv[6], svg, function (err) {
    if (err) {
      return console.log(err)
    }
  })
} else if (type === '--help') {
  console.log(usage)
} else {
  console.log("Not a valid command. See '--help'.")
}

// fs.writeFile('/tmp/test', 'Hey there!', function (err) {
//   if (err) {
//     return console.log(err)
//   }
// })
