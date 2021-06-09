import { expect } from 'chai'
import jsdom from 'mocha-jsdom'
import { Text } from './Text'
import faker from 'faker'

describe('Testing Text validation class', () => {

  jsdom({
    globalize: true,
    url: 'http://localhost'
  })

  before(() => {
    global.Option = window.Option
  })

  it('Text is good (between min-max): return true', () => {

    const testingText = new Text({ minLength: 0, maxLength: 600 })

    const result = testingText.isValid(faker.lorem.words(20))

    expect(result).to.be.eql(true)
  })

  it('Text is not good (upper than max): return false', () => {

    const testingText = new Text({ minLength: 0, maxLength: 15 })

    const result = testingText.isValid(faker.lorem.words(20))

    expect(result.maxLength).to.be.eql(false)
  })

  it('Text is not good (lower than min): return false', () => {

    const testingText = new Text({ minLength: 40, maxLength: 70 })

    const result = testingText.isValid(faker.lorem.words(2))

    expect(result.minLength).to.be.eql(false)
  })

  it('Text is good (upper than min): return true', () => {

    const testingText = new Text({ minLength: 0 })

    const result = testingText.isValid(faker.lorem.words(20))

    expect(result).to.be.eql(true)
  })

  it('Text is not good (lower than min): return false', () => {

    const testingText = new Text({ minLength: 30 })

    const result = testingText.isValid(faker.lorem.words(2))

    expect(result.minLength).to.be.eql(false)
  })

  it('Text is not good (upper than max): return false', () => {

    const testingText = new Text({ maxLength: 5 })

    const result = testingText.isValid(faker.lorem.words(20))

    expect(result.maxLength).to.be.eql(false)
  })


  it('Text is good (lower than max): return true', () => {

    const testingText = new Text({ maxLength: 600 })

    const result = testingText.isValid(faker.lorem.words(20))

    expect(result).to.be.eql(true)
  })

})