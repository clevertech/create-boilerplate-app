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
        /mv basedir\/stack\/redux-express\/\{\,\.\[\^\.\]\}\* basedir\//
      )
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
