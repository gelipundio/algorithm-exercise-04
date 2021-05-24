const { expect } = require('chai')
const { quick } = require('../solution')

describe('Sumarize', function() {
    const scenarios = [
        {
          test: [],
          result: []
        },
        {
          test: [1, 0],
          result: [0, 1]
        },
        {
          test: [0],
          result: [0]
        },
        {
          test: [0, -1],
          result: [-1, 0]
        },
        {
          test: [-1, -3],
          result: [-3, -1]
        },
        {
          test: [1, 6, 7],
          result: [1, 6, 7]
        },
        {
          test: [34, 12, 1, 5, 0, 103],
          result: [0, 1, 5, 12, 34, 103]
        },
        {
          test: [0, 45, 1, 234, 11111, 23, 43],
          result: [0, 1, 23, 43, 45, 234, 11111]
        },
        {
          test: [5, 10, 200, -1, 0, 23, 56],
          result: [-1, 0, 5, 10, 23, 56, 200]
        },
        
    ]
    scenarios.forEach(scenario => it(`Should return ${scenario.result} when the array is ${JSON.stringify(scenario.test)}`, function() {
        const result = quick(scenario.test)
        expect(result).to.deep.equal(scenario.result)
    }))
})