import envFile from '../../../../../utils/envFile'
import subject from './'
jest.mock('../../../../../utils/envFile', () => jest.fn(answers => answers))

const mockBaseDir = 'mockbasedir/'
const fakeAnswers = {
  baseDir: mockBaseDir,
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
describe('configure API env file', () => {
  it('configures database', async () => {
    const answers = await subject(fakeAnswers)
    expect(envFile).toHaveBeenCalledWith(
      expect.stringMatching(/.*api\/.env/),
      expect.objectContaining({
        DB_ENGINE: fakeAnswers.stack.prompt.dbEngine,
        DB_HOST: 'db',
        DB_USER: fakeAnswers.stack.prompt.dbUser,
        DB_PORT: fakeAnswers.stack.prompt.dbPort,
        DB_PASSWORD: fakeAnswers.stack.prompt.dbPass,
        DB_DATABASE: fakeAnswers.stack.prompt.dbName
      })
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })

  it('configures secrets', async () => {
    const answers = await subject(fakeAnswers)
    expect(envFile).toHaveBeenCalledWith(
      expect.stringMatching(/.*api\/.env/),
      expect.objectContaining({
        HEALTH_CHECK_SECRET: fakeAnswers.stack.prompt.healthCheckSecret,
        SESSION_SECRET: fakeAnswers.stack.prompt.sessionSecret
      })
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
