import subject from './'
import yaml from '../../../../../utils/yaml'

const mockYaml = {}
jest.mock('../../../../../utils/yaml', () => jest.fn(() => mockYaml))

const fakeSlug = 'project_slug'
const fakeAnswers = { base: { prompt: { admin: true, projectSlug: fakeSlug } } }

describe('Admin ConfigureApiHelm: setSecrets', () => {
  afterEach(jest.clearAllMocks)
  test.todo('sets the healthcheck secret')
  test.todo('sets the session secret')
})
