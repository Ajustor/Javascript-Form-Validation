import { expect } from 'chai'
import jsdom from 'mocha-jsdom'
import { Siren } from './Siren'
import faker from 'faker'

describe('Testing Siren validation class', () => {

  jsdom({
    globalize: true,
    url: 'http://localhost'
  })

  before(() => {
    global.Option = window.Option
  })

  it('Siren is not good: return false', () => {

    const testingSiren = new Siren()

    const result = testingSiren.isValid('')

    expect(result).to.be.eql(false)
  })

})