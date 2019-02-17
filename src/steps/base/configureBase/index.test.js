import updatePackageJson from './configurePackageJson'
import updatePrettierConfig from './configurePrettierConfig'
jest.mock('./configurePackageJson', () => jest.fn(answers => answers))
jest.mock('./configurePrettierConfig', () => jest.fn(answers => answers))

import subject from './'

const fakeAnswers = { a: 123 }
describe('Configuration of Root', async () => {
  it('updates package.json file', async () => {
    const answers = await subject(fakeAnswers)
    expect(updatePackageJson).toHaveBeenCalledWith(
      expect.objectContaining(fakeAnswers)
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
  it('updates prettier configuration', async () => {
    const answers = await subject(fakeAnswers)
    expect(updatePrettierConfig).toHaveBeenCalledWith(
      expect.objectContaining(fakeAnswers)
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
  test.todo('configures project name in docker/run script') // should happen in configure base
  test.todo('configure project name in docker-compose script') // should happen in configure base
  test.todo('configure project name in COMPOSE_PROJECT_NAME env var') // should happen in configure base
})
