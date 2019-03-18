import subject from './index'
import yaml from '../../../../../../utils/yaml'
import config from 'config'

const mockYaml = {}
jest.mock('../../../../../utils/yaml', () => jest.fn(() => mockYaml))

const mockSlug = 'project_slug'
const mockRedisHost = 'mockredishost'
const fakeAnswers = {
  base: { prompt: { admin: true, projectSlug: mockSlug } },
  admin: { prompt: { redisHost: mockRedisHost } }
}

describe('Admin ConfigureApiHelm: setRedisInfo', () => {
  afterEach(jest.clearAllMocks)
  it('configures redis secrets', async () => {
    const answers = await subject(fakeAnswers)
    const redisHost = fakeAnswers.admin.prompt.redisHost
    const redisPort = config.redis.port
    const redisPrefix = fakeAnswers.base.prompt.projectSlug
    expect(yaml).toHaveBeenCalledWith(
      expect.stringMatching(/\.\/helm\/api\.yml/),
      expect.objectContaining({
        secrets: expect.arrayContaining([
          expect.objectContaining({
            data: expect.objectContaining({
              REDIS_HOST: redisHost,
              REDIS_PORT: redisPort,
              REDIS_PREFIX: redisPrefix + '_development'
            })
          })
        ])
      })
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
