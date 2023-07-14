
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./seed-ts.cjs.production.min.js')
} else {
  module.exports = require('./seed-ts.cjs.development.js')
}
