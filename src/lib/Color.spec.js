import { expect } from 'chai'
import jsdom from 'mocha-jsdom'
import { Color } from './Color'

describe('Testing Color validation class', () => {

  jsdom({
    globalize: true,
    url: 'http://localhost'
  })

  before(() => {
    global.Option = window.Option
  })

  it('Color is good: return true', () => {

    const testingColor = new Color()

    const result = testingColor.isValid('purple')

    expect(result).to.be.eql(true)
  })

  it('Color is not good: return false', () => {

    const testingColor = new Color()

    const result = testingColor.isValid('plop')

    expect(result).to.be.eql(false)
  })
})