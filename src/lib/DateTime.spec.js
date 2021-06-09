import { expect } from 'chai'
import jsdom from 'mocha-jsdom'
import { DateTime } from './DateTime'

describe('Testing DateTime validation class', () => {

  jsdom({
    globalize: true,
    url: 'http://localhost'
  })

  before(() => {
    global.Option = window.Option
  })

  it('DateTime is good: return true', () => {

    const testingDateTime = new DateTime()

    const result = testingDateTime.isValid('2021-05-31 02:30')

    expect(result).to.be.eql(true)
  })

  it('DateTime is not good: return false', () => {

    const testingDateTime = new DateTime()

    const result = testingDateTime.isValid('plop')

    expect(result).to.be.eql(false)
  })
})