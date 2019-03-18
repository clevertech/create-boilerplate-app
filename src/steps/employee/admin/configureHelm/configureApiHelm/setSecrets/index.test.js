import subject from './index'
import yaml from '../../../../../../utils/yaml'

const mockYaml = {}
jest.mock('../../../../../utils/yaml', () => jest.fn(() => mockYaml))

const fakeSlug = 'project_slug'
const fakeAnswers = { base: { prompt: { admin: true, projectSlug: fakeSlug } } }

describe('Admin ConfigureApiHelm: setSecrets', () => {
  afterEach(jest.clearAllMocks)

  it('sets the session secret', async () => {
    const answers = await subject(fakeAnswers)
    expect(yaml).toHaveBeenCalledWith(
      expect.stringMatching(/\.\/helm\/api\.yml/),
      expect.objectContaining({
        secrets: expect.arrayContaining([
          expect.objectContaining({
            data: expect.objectContaining({
              HEALTH_CHECK_SECRET: expect.stringMatching(/[A-Za-z0-9_-]{21}/)
            })
          })
        ])
      })
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })

  it('sets the session secret', async () => {
    const answers = await subject(fakeAnswers)
    expect(yaml).toHaveBeenCalledWith(
      expect.stringMatching(/\.\/helm\/api\.yml/),
      expect.objectContaining({
        secrets: expect.arrayContaining([
          expect.objectContaining({
            data: expect.objectContaining({
              SESSION_SECRET: expect.stringMatching(/[A-Za-z0-9_-]{21}/)
            })
          })
        ])
      })
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
