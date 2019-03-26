import exec from '../../../utils/exec'
import subject from './'

jest.mock('../../../utils/exec')
const fakeAnswers = {
  baseDir: 'basedir/',
  stack: {
    slug: 'redux-express'
  }
}
describe('Stack Step: Move', () => {
  afterEach(jest.clearAllMocks)
  it('moves stack files into place', async () => {
    const answers = await subject(fakeAnswers)
    expect(exec).toHaveBeenNthCalledWith(
      1,
      expect.stringMatching(
        /cp \-r basedir\/stacks\/redux-express\/\* basedir\//
      )
    )
  })
  it('moves stack hidden files into place', async () => {
    const answers = await subject(fakeAnswers)
    expect(exec).toHaveBeenNthCalledWith(
      2,
      expect.stringMatching(
        /cp \-r basedir\/stacks\/redux-express\/\{\,\.\[\^\.\]\}\* basedir\//
      )
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
  it('removes remaining files', async () => {
    const answers = await subject(fakeAnswers)
    expect(exec).toHaveReturnedTimes(3)
    expect(exec).toHaveBeenNthCalledWith(
      3,
      expect.stringMatching(/rm \-R basedir\/stacks\/redux-express\//)
    )
  })
})
