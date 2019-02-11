import configureApi from './configureApi'
import configureFrontend from './configureFrontend'
import configureRoot from './configureRoot'

import subject from './'

jest.mock('./configureApi')
jest.mock('./configureFrontend')
jest.mock('./configureRoot')

const fakeAnswers = { test: 2 }
describe('Relay-postgraphile stack script', () => {
  beforeEach(() => subject(fakeAnswers))
  afterEach(jest.resetAllMocks)

  it('configures API', async () => {
    expect(configureApi).toHaveBeenCalledWith(
      expect.objectContaining(fakeAnswers)
    )
  })
  it('configures Frontend', async () => {
    expect(configureFrontend).toHaveBeenCalledWith(
      expect.objectContaining(fakeAnswers)
    )
  })
  it('configures Root', async () => {
    expect(configureRoot).toHaveBeenCalledWith(
      expect.objectContaining(fakeAnswers)
    )
  })
})
