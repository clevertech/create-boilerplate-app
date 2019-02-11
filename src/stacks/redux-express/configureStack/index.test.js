import configureApi from './configureApi'
import configureFrontend from './configureFrontend'
import configureRoot from './configureRoot'

import subject from './'

jest.mock('./configureApi')
jest.mock('./configureFrontend')
jest.mock('./configureRoot')

const fakeAnswers = { test: 2 }
describe('Redux-express stack script', () => {
  it('configures API', async () => {
    await subject(fakeAnswers)
    expect(configureApi).toHaveBeenCalledWith(
      expect.objectContaining(fakeAnswers)
    )
  })
  it('configures Frontend', async () => {
    await subject(fakeAnswers)
    expect(configureFrontend).toHaveBeenCalledWith(
      expect.objectContaining(fakeAnswers)
    )
  })
  it('configures Root', async () => {
    await subject(fakeAnswers)
    expect(configureRoot).toHaveBeenCalledWith(
      expect.objectContaining(fakeAnswers)
    )
  })
})
