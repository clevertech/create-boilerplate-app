import subject from './'
import replaceStringInFile from '../../../../utils/replaceStringInFile'

jest.mock('../../../../utils/replaceStringInFile')
const fakeSlug = 'project_slug'
const fakeAnswers = { base: { prompt: { admin: true, projectSlug: fakeSlug } } }

describe('Writes project name to Makefiles', () => {
  afterEach(jest.clearAllMocks)
  it('configures api Makefile', async () => {
    const answers = await subject(fakeAnswers)
    expect(replaceStringInFile).toHaveBeenCalledWith(
      'boilerplate',
      'src/api/Makefile',
      fakeSlug
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })

  it('configures frontend Makefile', async () => {
    const answers = await subject(fakeAnswers)
    expect(replaceStringInFile).toHaveBeenCalledWith(
      'boilerplate',
      'src/frontend/Makefile',
      fakeSlug
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
