import configureEnvFile from './configureEnvFile'
import configurePackageJson from './configurePackageJson'
import moveEnvFile from './moveEnvFile'

import subject from './'

jest.mock('./configureEnvFile', () => jest.fn(answers => answers))
jest.mock('./configurePackageJson', () => jest.fn(answers => answers))
jest.mock('./moveEnvFile', () => jest.fn(answers => answers))

const fakeAnswers = { test: 'asdf' }
describe('API configuration', () => {
  afterEach(jest.clearAllMocks)
  it('sets up env file (database connection, etc.)', async () => {
    const answers = await subject(fakeAnswers)
    expect(configureEnvFile).toHaveBeenCalledWith(fakeAnswers)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
  it('sets up package.json file', async () => {
    const answers = await subject(fakeAnswers)
    expect(configurePackageJson).toHaveBeenCalledWith(fakeAnswers)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
  it('moves the env file into place', async () => {
    const answers = await subject(fakeAnswers)
    expect(moveEnvFile).toHaveBeenCalledWith(fakeAnswers)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
