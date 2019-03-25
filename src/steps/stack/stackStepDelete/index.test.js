import exec from '../../../utils/exec'

import subject from './'

jest.mock('../../../utils/exec', () => jest.fn(answers => answers))

const fakeAnswers = {
  baseDir: 'basedir/',
  stack: {
    slug: 'redux-express'
  }
}
describe('Stack Step: Delete', () => {
  it('deletes the left-over stack folder', async () => {
    const answers = await subject(fakeAnswers)
    expect(exec).toHaveBeenCalledWith(
      expect.stringMatching(/rm -rf basedir\/stacks/)
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
