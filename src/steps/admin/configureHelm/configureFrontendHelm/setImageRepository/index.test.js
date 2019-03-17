import subject from './'
import yaml from '../../../../../utils/yaml'

function mockHelmDeploymentImageRepoObject(repo) {
  return {
    deployment: {
      image: {
        repository: repo
      }
    }
  }
}

jest.mock('../../../../../utils/yaml', () =>
  jest.fn(() => mockHelmDeploymentImageRepoObject('boilerplate'))
)
const fakeSlug = 'image-repository'
const fakeAnswers = { base: { prompt: { admin: true, projectSlug: fakeSlug } } }
const filePath = __dirname + '/../../../../../helm/frontend.yml'

describe('Generate Frontend Admin Helm script', () => {
  afterEach(jest.clearAllMocks)

  it('configures image repository', async () => {
    const answers = await subject(fakeAnswers)
    expect(yaml).not.toHaveBeenCalledWith(
      filePath,
      mockHelmDeploymentImageRepoObject('boilerplate')
    )
    expect(yaml).toHaveBeenCalledWith(
      filePath,
      mockHelmDeploymentImageRepoObject(fakeSlug)
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
