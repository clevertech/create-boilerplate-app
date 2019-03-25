import configureApi from './configureApi'
import configureFrontend from './configureFrontend'
import configurePackageJson from './configurePackageJson'

import subject from './'

jest.mock('./configureApi', () => jest.fn(answers => answers))
jest.mock('./configureFrontend', () => jest.fn(answers => answers))
jest.mock('./configurePackageJson', () => jest.fn(answers => answers))

const fakeAnswers = { test: 2 }
describe('Redux-express stack script', () => {
  it('configures API', async () => {
    const answers = await subject(fakeAnswers)
    expect(configureApi).toHaveBeenCalledWith(
      expect.objectContaining(fakeAnswers)
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
  it('configures Frontend', async () => {
    const answers = await subject(fakeAnswers)
    expect(configureFrontend).toHaveBeenCalledWith(
      expect.objectContaining(fakeAnswers)
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
  it('configures PackageJSON', async () => {
    const answers = await subject(fakeAnswers)
    expect(configurePackageJson).toHaveBeenCalledWith(
      expect.objectContaining(fakeAnswers)
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
