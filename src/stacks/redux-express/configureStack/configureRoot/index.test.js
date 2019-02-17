import configureDockerCompose from './configureDockerCompose'
import configurePackageJson from './configurePackageJson'

import subject from './'

jest.mock('./configureDockerCompose', () => jest.fn(answers => answers))
jest.mock('./configurePackageJson', () => jest.fn(answers => answers))

const fakeAnswers = { test: 'asdf' }
describe('Stack: root folder configuration', async () => {
  afterEach(jest.clearAllMocks)

  it('configures docker-compose', async () => {
    const answers = await subject(fakeAnswers)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
    expect(configureDockerCompose).toHaveBeenCalledWith(
      expect.objectContaining(fakeAnswers)
    )
  })
  it('configures package.json', async () => {
    const answers = await subject(fakeAnswers)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
    expect(configurePackageJson).toHaveBeenCalledWith(
      expect.objectContaining(fakeAnswers)
    )
  })
})
