// test data type ResultSet

const assert = require('assert')
const math = require('../../../src/main')
const Complex = math.type.Complex
const ResultSet = math.type.ResultSet

describe('ResultSet', function () {
  it('should create a ResultSet without entries', function () {
    const r = new ResultSet()
    assert.deepEqual(r, {entries: []})
  })

  it('should create a ResultSet with entries', function () {
    const r = new ResultSet([1, 2, 3])
    assert.deepEqual(r, {entries: [1, 2, 3]})
  })

  it('should throw an error when called without the new operator', function () {
    assert.throws(function () { ResultSet([1, 2, 3]) })
  })

  it('should return an Array when calling valueOf()', function () {
    const r = new ResultSet([1, 2, 3])
    assert.deepEqual(r.valueOf(), [1, 2, 3])
  })

  it('should return a string when calling toString()', function () {
    const r = new ResultSet([1, 2, 3, new Complex(4, 5)])
    assert.deepEqual(r.toString(), '[1, 2, 3, 4 + 5i]')
  })

  it('should have a property isResultSet', function () {
    const a = new math.type.ResultSet([])
    assert.strictEqual(a.isResultSet, true)
  })

  it('should have a property type', function () {
    const a = new math.type.ResultSet([])
    assert.strictEqual(a.type, 'ResultSet')
  })

  it('toJSON', function () {
    const r = new ResultSet([1, 2, 3])
    const json = {'mathjs': 'ResultSet', 'entries': [1, 2, 3]}
    assert.deepEqual(r.toJSON(), json)
  })

  it('fromJSON', function () {
    const r1 = new ResultSet([1, 2, 3])
    const json = {'mathjs': 'ResultSet', 'entries': [1, 2, 3]}
    const r2 = ResultSet.fromJSON(json)
    assert(r2 instanceof ResultSet)
    assert.deepEqual(r2, r1)
  })
})
