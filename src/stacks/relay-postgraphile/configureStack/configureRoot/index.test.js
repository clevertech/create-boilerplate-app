import configureDockerCompose from './configureDockerCompose'
import configurePackageJson from './configurePackageJson'
import configureYarnWorkspaces from './configureYarnWorkspaces'

import subject from './'

jest.mock('./configureDockerCompose')
jest.mock('./configurePackageJson')
jest.mock('./configureYarnWorkspaces')

const answers = { test: 'asdf' }
describe('Redux-Express stack root folder configuration', () => {
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
  it('configures yarn workspaces', () => {
    expect(configureYarnWorkspaces).toHaveBeenCalledWith(
      expect.objectContaining(answers)
    )
  })
})
