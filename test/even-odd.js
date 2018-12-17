/**
 * Dependencies
 */

const test = require('tape')
const extract = require('..')


test('extract even and off characters #1', assert => {
  assert.plan(1)
  assert.deepEqual(
    extract('11010000110001100100'),
    ['1000100100', '1100101010']
  )
})

test('extract even and off characters #12', assert => {
  assert.plan(1)
  assert.deepEqual(
    extract('helloworld'),
    ['hlool', 'elwrd']
  )
})
