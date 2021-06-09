import { expect } from 'chai'
import jsdom from 'mocha-jsdom'
import { Iban } from './Iban'
import faker from 'faker'

describe('Testing Iban validation class', () => {

  jsdom({
    globalize: true,
    url: 'http://localhost'
  })

  before(() => {
    global.Option = window.Option
  })

  it('Iban is good: return true', () => {

    const testingIban = new Iban()

    const result = testingIban.isValid(faker.finance.iban())

    expect(result).to.be.eql(true)
  })

  it('Iban is not good: return false', () => {

    const testingIban = new Iban()

    const result = testingIban.isValid('plop')

    expect(result).to.be.eql(false)
  })
})