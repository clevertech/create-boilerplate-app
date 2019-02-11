import configureDockerCompose from './configureDockerCompose'
import configurePackageJson from './configurePackageJson'

import subject from './'

jest.mock('./configureDockerCompose')
jest.mock('./configurePackageJson')

const answers = { test: 'asdf' }
describe('Stack: root folder configuration', () => {
  beforeEach(() => subject(answers))
  afterEach(jest.resetAllMocks)

  it('configures docker-compose', () => {
    expect(configureDockerCompose).toHaveBeenCalledWith(
      expect.objectContaining(answers)
    )
  })
  it('configures package.json', () => {
    expect(configurePackageJson).toHaveBeenCalledWith(
      expect.objectContaining(answers)
    )
  })
})
