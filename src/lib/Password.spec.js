import { expect } from 'chai'
import jsdom from 'mocha-jsdom'
import { Password } from './Password'
import faker from 'faker'

const passwordOptions = {
  lowercase: false,
  uppercase: false,
  numeric: false,
  special: false,
  minLength: 12
}

describe('Testing Password validation class', () => {

  jsdom({
    globalize: true,
    url: 'http://localhost'
  })

  before(() => {
    global.Option = window.Option
  })

  it('Password check at least 1 lowercase: return true', () => {

    const testingPassword = new Password({ ...passwordOptions, lowercase: true })

    const result = testingPassword.isValid(faker.internet.password())

    expect(result).to.be.eql(true)
  })

  it('Password check at least 1 lowercase: return false', () => {

    const testingPassword = new Password({ ...passwordOptions, lowercase: true })

    const result = testingPassword.isValid('PLOP')

    expect(result.lowercase).to.be.eql(false)
  })

  it('Password check at least 1 uppercase: return true', () => {

    const testingPassword = new Password({ ...passwordOptions, uppercase: true })

    const result = testingPassword.isValid(faker.internet.password())

    expect(result).to.be.eql(true)
  })

  it('Password check at least 1 uppercase: return false', () => {

    const testingPassword = new Password({ ...passwordOptions, uppercase: true })

    const result = testingPassword.isValid('plop')

    expect(result.uppercase).to.be.eql(false)
  })

  it('Password check at least 1 numeric: return true', () => {

    const testingPassword = new Password({ ...passwordOptions, numeric: true })

    const result = testingPassword.isValid('password@143fd4bgvdbgv5')

    expect(result).to.be.eql(true)
  })

  it('Password check at least 1 numeric: return false', () => {

    const testingPassword = new Password({ ...passwordOptions, numeric: true })

    const result = testingPassword.isValid('plop')

    expect(result.numeric).to.be.eql(false)
  })

  it('Password check at least 1 special: return true', () => {

    const testingPassword = new Password({ ...passwordOptions, special: true })

    const result = testingPassword.isValid('password@143fd4bgvdbgv5')

    expect(result).to.be.eql(true)
  })

  it('Password check at least 1 special: return false', () => {

    const testingPassword = new Password({ ...passwordOptions, special: true })

    const result = testingPassword.isValid('plop')

    expect(result.special).to.be.eql(false)
  })

  it('Password check minLength: return true', () => {

    const testingPassword = new Password({ ...passwordOptions, minLength: 5 })

    const result = testingPassword.isValid(faker.internet.password(21))

    expect(result).to.be.eql(true)
  })

  it('Password check minLength: return false', () => {

    const testingPassword = new Password({ ...passwordOptions, minLength: 5 })

    const result = testingPassword.isValid('plop')

    expect(result.minLength).to.be.eql(false)
  })

  it('Password check error messages: minLength', () => {

    try {
      const testingPassword = new Password({ minLength: 'ah' })

    } catch (error) {
      expect(error).to.be.eql('minLength option should be a number')
    }

  })

  it('Password check error messages: special', () => {

    try {
      const testingPassword = new Password({ special: 'ah' })

    } catch (error) {
      expect(error).to.be.eql('special option should be boolean')
    }

  })

  it('Password check error messages: uppercase', () => {

    try {
      const testingPassword = new Password({ uppercase: 'ah' })

    } catch (error) {
      expect(error).to.be.eql('uppercase option should be boolean')
    }

  })

  it('Password check error messages: lowercase', () => {

    try {
      const testingPassword = new Password({ lowercase: 'ah' })

    } catch (error) {
      expect(error).to.be.eql('lowercase option should be boolean')
    }

  })

  it('Password check error messages: numeric', () => {

    try {
      const testingPassword = new Password({ numeric: 'ah' })

    } catch (error) {
      expect(error).to.be.eql('numeric option should be boolean')
    }

  })

})