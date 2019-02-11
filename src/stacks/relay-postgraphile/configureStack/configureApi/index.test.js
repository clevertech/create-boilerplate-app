import configureProjectName from './configureProjectName'
import configureEnvFile from './configureEnvFile'
import configurePackageJson from './configurePackageJson'

import subject from './'

jest.mock('./configureProjectName')
jest.mock('./configureEnvFile')
jest.mock('./configurePackageJson')

const fakeAnswers = { test: 'asdf' }
describe('Relay Postgraphile stack API configuration', () => {
  beforeEach(() => subject(fakeAnswers))
  it('sets up project name', () => {
    expect(configureProjectName).toHaveBeenCalledWith(fakeAnswers)
  })
  it('sets up env file (database connection, etc.)', () => {
    expect(configureEnvFile).toHaveBeenCalledWith(fakeAnswers)
  })
  it('sets up package.json file', () => {
    expect(configurePackageJson).toHaveBeenCalledWith(fakeAnswers)
  })
})
