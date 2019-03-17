import subject from './'
import yaml from '../../../../../utils/yaml'

const mockYaml = {
  ingress: {
    hosts: [
      {
        rules: [
          {
            subdomain: 'boilerplate_randomvalue'
          }
        ]
      }
    ]
  }
}
jest.mock('../../../../../utils/yaml', () => jest.fn(() => mockYaml))

const mockRandomString = 'someRandomString'
jest.mock('../../../../../utils/generateRandom', () =>
  jest.fn(() => mockRandomString)
)

const filePath = __dirname + '/../../../../../helm/frontend.yml'
const fakeSlug = 'project_slug'
const fakeAnswers = { base: { prompt: { admin: true, projectSlug: fakeSlug } } }

describe('Generate Frontend Admin Helm script', () => {
  afterEach(jest.clearAllMocks)
  it('configures subdomain', async () => {
    const answers = await subject(fakeAnswers)
    const testYaml = Object.assign({}, mockYaml)
    testYaml.ingress.hosts[0].rules[0].subdomain =
      fakeSlug + '_' + mockRandomString
    expect(yaml).toHaveBeenCalledWith(filePath, testYaml)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
