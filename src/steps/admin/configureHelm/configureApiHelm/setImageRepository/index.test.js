import subject from './'
import replaceStringInFile from '../../../../../utils/replaceStringInFile'

jest.mock('../../../../../utils/replaceStringInFile')
const fakeSlug = 'image-repository'
const fakeAnswers = { base: { prompt: { admin: true, projectSlug: fakeSlug } } }

describe('Generate API', () => {
  afterEach(jest.clearAllMocks)
  it('configures image repository', async () => {
    const answers = await subject(fakeAnswers)
    expect(replaceStringInFile).toHaveBeenCalledWith(
      __dirname + '/../../../../../helm/api.yml',
      'boilerplateRepo',
      fakeSlug
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
