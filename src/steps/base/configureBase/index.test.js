import configurePackageJson from './configurePackageJson'
import configurePrettierConfig from './configurePrettierConfig'
import configureDockerRun from './configureDockerRun'
import configureDockerCompose from './configureDockerCompose'
import configureEnvFile from './configureEnvFile'

import subject from './'

jest.mock('./configurePackageJson', () => jest.fn(answers => answers))
jest.mock('./configurePrettierConfig', () => jest.fn(answers => answers))
jest.mock('./configureDockerRun', () => jest.fn(answers => answers))
jest.mock('./configureDockerCompose', () => jest.fn(answers => answers))
jest.mock('./configureEnvFile', () => jest.fn(answers => answers))

const fakeAnswers = { a: 123 }
describe('Configuration of Base Files', async () => {
  it('updates package.json file', async () => {
    const answers = await subject(fakeAnswers)
    expect(configurePackageJson).toHaveBeenCalledWith(
      expect.objectContaining(fakeAnswers)
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })

  it('updates prettier configuration', async () => {
    const answers = await subject(fakeAnswers)
    expect(configurePrettierConfig).toHaveBeenCalledWith(
      expect.objectContaining(fakeAnswers)
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })

  it('configures project name in docker/run script', async () => {
    const answers = await subject(fakeAnswers)
    expect(configureDockerRun).toHaveBeenCalledWith(
      expect.objectContaining(fakeAnswers)
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })

  it('configures project name in docker-compose script', async () => {
    const answers = await subject(fakeAnswers)
    expect(configureDockerCompose).toHaveBeenCalledWith(
      expect.objectContaining(fakeAnswers)
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })

  it('configures project name in COMPOSE_PROJECT_NAME env var', async () => {
    const answers = await subject(fakeAnswers)
    expect(configureEnvFile).toHaveBeenCalledWith(
      expect.objectContaining(fakeAnswers)
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
