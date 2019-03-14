import subject from './'
import replaceStringInFile from '../../../../../utils/replaceStringInFile'
import generateRandom from '../../../../../utils/generateRandom'

jest.mock('../../../../../utils/replaceStringInFile')
const fakeSlug = 'project_slug' + generateRandom(6)
const fakeAnswers = { base: { prompt: { admin: true, projectSlug: fakeSlug } } }

describe('Generate Frontend Admin Helm script', () => {
  afterEach(jest.clearAllMocks)
  it('configures subdomain', async () => {
    const answers = await subject(fakeAnswers)
    console.log(answers)
    expect(replaceStringInFile).toHaveBeenCalledWith(
      'boilerplate-dev-randomvalue',
      'helm/frontend.yml',
      fakeSlug
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
