import { expect } from 'chai'
import jsdom from 'mocha-jsdom'
import { Range } from './Range'
import faker from 'faker'

describe('Testing Range validation class', () => {

  jsdom({
    globalize: true,
    url: 'http://localhost'
  })

  before(() => {
    global.Option = window.Option
  })

  it('Range is good: return true', () => {

    const testingRange = new Range({ min: 0, max: 10 })

    const result = testingRange.isValid(faker.datatype.number({ min: 0, max: 10 }))

    expect(result).to.be.eql(true)
  })

  it('Range is good: return true', () => {

    const testingRange = new Range({ max: 10 })

    const result = testingRange.isValid(faker.datatype.number({ min: -100, max: 10 }))

    expect(result).to.be.eql(true)
  })

  it('Range is not good: return false', () => {

    const testingRange = new Range({ max: 10 })

    const result = testingRange.isValid(faker.datatype.number({ min: 10, max: 100 }))

    expect(result.max).to.be.eql(false)
  })

  it('Range is good: return true', () => {

    const testingRange = new Range({ min: 10 })

    const result = testingRange.isValid(faker.datatype.number({ min: 10, max: 100 }))

    expect(result).to.be.eql(true)
  })

  it('Range is not good: return false', () => {

    const testingRange = new Range({ min: 10 })

    const result = testingRange.isValid(faker.datatype.number({ min: -200, max: 9 }))

    expect(result.min).to.be.eql(false)
  })

  it('Range is not good: return false', () => {

    const testingRange = new Range({ min: 0, max: 10 })

    const result = testingRange.isValid(faker.datatype.number({ min: 10, max: 100 }))

    expect(result.max).to.be.eql(false)
  })

  it('Range is not good: return false', () => {

    const testingRange = new Range({ min: 0, max: 10 })

    const result = testingRange.isValid(faker.datatype.number({ min: -100, max: 0 }))

    expect(result.min).to.be.eql(false)
  })

  it('Range is not good: return false', () => {

    const testingRange = new Range({ min: 0, max: 10 })

    const result = testingRange.isValid(faker.lorem.word())

    expect(result).to.be.eql(false)
  })
})