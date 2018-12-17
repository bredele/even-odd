/**
 * Dependencies
 */

const test = require('tape')
const extract = require('..')


test('convert string into bits #1', assert => {
  assert.plan(1)
  assert.deepEqual(
    extract('11010000110001100100'),
    ['1000100100', '1100101010']
  )
})
