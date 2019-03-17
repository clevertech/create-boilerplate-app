import subject from './'
import yaml from '../../../../../utils/yaml'

const mockYaml = {}
jest.mock('../../../../../utils/yaml', () => jest.fn(() => mockYaml))

const fakeSlug = 'project_slug'
const fakeAnswers = { base: { prompt: { admin: true, projectSlug: fakeSlug } } }

describe('Admin ConfigureApiHelm: setDbInfo', () => {
  afterEach(jest.clearAllMocks)
  it('configures database secrets', async () => {
    const answers = await subject(fakeAnswers)
    const dbPort = databases[answers.databaseEngine].port
    const dbName = toSnakeCase(answers.projectName)
    expect(yaml).toHaveBeenCalledWith(
      expect.stringMatching(/helm-api-development.yml/),
      expect.objectContaining({
        helm: expect.objectContaining({
          secrets: expect.arrayContaining([
            expect.objectContaining({
              data: expect.objectContaining({
                //     DB_ENGINE: answers.stack.databaseEngine,
                //     DB_PORT: dbPort,
                //     DB_DATABASE: dbName + '_development',
                //     DB_POOL_MIN: 2,
                //     DB_POOL_MAX: 10,
                //     DB_HOST: answers.dbhost,
                //     DB_USER: answers.dbuser,
                //     DB_PASSWORD: answers.dbpassword,
              })
            })
          ])
        })
      })
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })

  test.todo('sets the db info correctly for postgres')
  test.todo('sets the db info correctly for mysql')
})
