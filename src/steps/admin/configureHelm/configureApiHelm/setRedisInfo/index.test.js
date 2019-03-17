import subject from './'
import yaml from '../../../../../utils/yaml'

const mockYaml = {}
jest.mock('../../../../../utils/yaml', () => jest.fn(() => mockYaml))

const fakeSlug = 'project_slug'
const fakeAnswers = { base: { prompt: { admin: true, projectSlug: fakeSlug } } }

describe('Admin ConfigureApiHelm: setRedisInfo', () => {
  afterEach(jest.clearAllMocks)
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
