import subject from './'
import replaceStringInFile from '../../../../../utils/replaceStringInFile'

jest.mock('../../../../../utils/replaceStringInFile')
const fakeSlug = 'image-repository'
const fakeAnswers = { base: { prompt: { admin: true, projectSlug: fakeSlug } } }
console.log('Answers is:', answers)

describe('Generate Frontend Admin Helm script', () => {
  afterEach(jest.clearAllMocks)
  it('configures image repository', async () => {
    const answers = await subject(fakeAnswers)
    expect(replaceStringInFile).toHaveBeenCalledWith(
      'boilerplate',
      'helm/frontend.yml',
      fakeSlug
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
