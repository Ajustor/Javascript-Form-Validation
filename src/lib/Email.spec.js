import { expect } from 'chai'
import jsdom from 'mocha-jsdom'
import { Email } from './Email'

describe('Testing Email validation class', () => {

  jsdom({
    globalize: true,
    url: 'http://localhost'
  })

  before(() => {
    global.Option = window.Option
  })

  it('Email is good: return true', () => {

    const testingEmail = new Email()

    const result = testingEmail.isValid("email@example.com")

    expect(result).to.be.eql(true)
  })

  it('Email is not good: return false', () => {

    const testingEmail = new Email()

    const result = testingEmail.isValid('plop')

    expect(result).to.be.eql(false)
  })
})