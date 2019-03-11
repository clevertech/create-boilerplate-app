import yaml from '../../../../utils/yaml'
import { databases } from '../../../../utils/databases'
import subject from './'
jest.mock('../../../../utils/yaml', () => jest.fn(answers => answers))

const fakeAnswers = {
  base: {
    prompt: {
      projectTitle: 'HappyCats'
    }
  },
  dirName: './',
  stack: {
    prompt: {
      dbEngine: 'postgres',
      dbName: 'happycats',
      dbPort: 5423,
      dbUser: 'happycats',
      dbPass: '123abcNotARealPassword',
      healthCheckSecret: '321fdsAFakeHealthCheckSecret',
      sessionSecret: '321fdsAFakeSessionSecret'
    },
    apiDependenciess: []
  }
}
describe('redux-express stack docker-compose configuration', () => {
  afterEach(jest.clearAllMocks)
  it('configures database environment variables', async () => {
    const answers = await subject(fakeAnswers)
    expect(yaml).toHaveBeenCalledWith(
      expect.stringMatching(/.*docker-compose\.yml/),
      expect.objectContaining({
        services: expect.objectContaining({
          db: expect.objectContaining({
            environment: expect.objectContaining({
              POSTGRES_DB: fakeAnswers.stack.prompt.dbName,
              POSTGRES_USER: fakeAnswers.stack.prompt.dbUser,
              POSTGRES_PASSWORD: fakeAnswers.stack.prompt.dbPass
            })
          })
        })
      })
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
  it('configures database port', async () => {
    const answers = await subject(fakeAnswers)
    const databaseConfig = databases[fakeAnswers.stack.prompt.dbEngine]
    expect(yaml).toHaveBeenCalledWith(
      expect.stringMatching(/.*docker-compose\.yml/),
      expect.objectContaining({
        services: expect.objectContaining({
          db: expect.objectContaining({
            ports:
              '' + fakeAnswers.stack.prompt.dbPort + ':' + databaseConfig.port
          })
        })
      })
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
  it('configures database image', async () => {
    const answers = await subject(fakeAnswers)
    const databaseConfig = databases[fakeAnswers.stack.prompt.dbEngine]
    expect(yaml).toHaveBeenCalledWith(
      expect.stringMatching(/.*docker-compose\.yml/),
      expect.objectContaining({
        services: expect.objectContaining({
          db: expect.objectContaining({
            image: databaseConfig.dockerComposeImage
          })
        })
      })
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
