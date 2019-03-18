import subject from './'
import yaml from '../../../../../utils/yaml'

const mockYaml = {
  deployment: {
    image: {
      repository: 'somestringboilerplatesomestring'
    }
  }
}
jest.mock('../../../../../utils/yaml', () => jest.fn(() => mockYaml))

const fakeSlug = 'project_slug'
const fakeAnswers = { base: { prompt: { admin: true, projectSlug: fakeSlug } } }

describe('Admin ConfigureApiHelm: setImageRepository', () => {
  afterEach(jest.clearAllMocks)
  it('sets image repository', async () => {
    const answers = await subject(fakeAnswers)
    expect(yaml).toHaveBeenCalledWith(
      expect.stringMatching(/\.\/helm\/api\.yml/),
      expect.objectContaining({
        deployment: expect.objectContaining({
          image: expect.objectContaining({
            repository: expect.stringMatching(
              new RegExp(fakeAnswers.base.prompt.projectSlug)
            )
          })
        })
      })
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
