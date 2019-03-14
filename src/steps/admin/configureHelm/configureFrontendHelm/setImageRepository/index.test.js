import subject from './'
import replaceStringInFile from '../../../../../utils/replaceStringInFile'

jest.mock('../../../../../utils/replaceStringInFile')
const fakeSlug = 'image-repository'
const fakeAnswers = { base: { prompt: { admin: true, projectSlug: fakeSlug } } }

describe('Generate Frontend Admin Helm script', () => {
  afterEach(jest.clearAllMocks)
  it('configures image repository', async () => {
    const answers = await subject(fakeAnswers)
    expect(replaceStringInFile).toHaveBeenCalledWith(
      __dirname + '/../../../../../helm/frontend.yml',
      'boilerplateRepo',
      fakeSlug
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
