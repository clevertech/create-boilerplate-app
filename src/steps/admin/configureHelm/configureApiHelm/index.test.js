import subject from './'
import yaml from '../../../../utils/yaml'

jest.mock('../../../../utils/yaml')
jest.mock('./setImageRepository/index', () => jest.fn(answers => answers))
jest.mock('./setSubdomain/index', () => jest.fn(answers => answers))

const fakeSlug = 'happy-cats-two'
const fakeAnswers = { base: { prompt: { admin: true, projectSlug: fakeSlug } } }
describe('Generate API Admin Helm script', () => {
  afterEach(jest.clearAllMocks)
  it('sets helm deployment image repository', async () => {
    const answers = await subject(fakeAnswers)
    expect(setImageRepository).toHaveBeenCalledWith(fakeAnswers)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
  it('sets boilerplate in subdomain', async () => {
    const answers = await subject(fakeAnswers)
    expect(setSubdomain).toHaveBeenCalledWith(fakeAnswers)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
  it('sets randomValue in subdomain', async () => {
    const answers = await subject(fakeAnswers)
    expect(yaml).toHaveBeenCalledWith(
      expect.stringMatching(/helm-api-development.yml/),
      expect.objectContaining({
        helm: expect.objectContaining({
          ingress: expect.objectContaining({
            hosts: expect.arrayContaining([
              expect.objectContaining({
                rules: expect.arrayContaining([
                  expect.objectContaining({
                    subdomain: expect.not.stringMatching(
                      new RegExp('randomString')
                    )
                  })
                ])
              })
            ])
          })
        })
      })
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })

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

  it('configures redis secrets', async () => {
    const answers = await subject(fakeAnswers)
    expect(yaml).toHaveBeenCalledWith(
      expect.stringMatching(/helm-api-development.yml/),
      expect.objectContaining({
        helm: expect.objectContaining({
          secrets: expect.arrayContaining([
            expect.objectContaining({
              data: expect.objectContaining({
                //     REDIS_HOST: answers.redishost,
                //     REDIS_PORT: '6379',
                //     REDIS_PREFIX: dbName + '_development',
                //     SESSION_SECRET: nanoid(),
                //     HEALTH_CHECK_SECRET: nanoid()
              })
            })
          ])
        })
      })
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
