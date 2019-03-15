import subject from './'
import replaceStringInFile from '../../../../../utils/replaceStringInFile'
import generateRandom from '../../../../../utils/generateRandom'

jest.mock('../../../../../utils/replaceStringInFile')
const fakeSlug = 'project_slug_' + generateRandom(6)
const fakeAnswers = { base: { prompt: { admin: true, projectSlug: fakeSlug } } }

describe('Sets boilerplate in subdomain', () => {
  afterEach(jest.clearAllMocks)
  it('configures subdomain', async () => {
    const answers = await subject(fakeAnswers)
    expect(replaceStringInFile).toHaveBeenCalledWith(
      __dirname + '/../../../../../helm/api.yml',
      'boilerplate-dev-randomvalue',
      fakeSlug
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
