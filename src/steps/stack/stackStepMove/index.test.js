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
  it('moves stack files into place', async () => {
    const answers = await subject(fakeAnswers)
    expect(exec).toHaveBeenCalledWith(
      expect.stringMatching(
        /cp \-r basedir\/stacks\/redux-express\/\{\,\.\[\^\.\]\}\* basedir\/ \&\& rm \-R basedir\/stacks\/redux-express\/\{\,\.\[\^\.\]\}\*/
      )
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
