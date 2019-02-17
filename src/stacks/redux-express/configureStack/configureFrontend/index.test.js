import configurePackageJson from './configurePackageJson'
import moveEnvFile from './moveEnvFile'

import subject from './'

jest.mock('./moveEnvFile', () => jest.fn(answers => answers))
jest.mock('./configurePackageJson', () => jest.fn(answers => answers))

const fakeAnswers = { asdf: 'asdf' }
describe('frontend configuration', () => {
  afterEach(jest.clearAllMocks)
  it('sets up package.json', async () => {
    const answers = await subject(fakeAnswers)
    expect(configurePackageJson).toHaveBeenCalledWith(
      expect.objectContaining(fakeAnswers)
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
  it('moves the example env file', async () => {
    const answers = await subject(fakeAnswers)
    expect(moveEnvFile).toHaveBeenCalledWith(
      expect.objectContaining(fakeAnswers)
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
