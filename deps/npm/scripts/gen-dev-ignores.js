const fs = require('fs')
const plock = require('../package-lock.json')
fs.writeFileSync(`${__dirname}/../node_modules/.gitignore`,
  '## Automatically generated dev dependency ignores\n' +
  'CODE_OF_CONDUCT.md\n' +
  'CONTRIBUTING.md\n' +
  Object.keys(plock.dependencies).filter(_ => plock.dependencies[_].dev).map(_ => `/${_}`).join('\n') + '\n')
