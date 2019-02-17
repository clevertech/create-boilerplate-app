import exec from '../../../utils/exec'

import subject from './'

jest.mock('../../../utils/exec')
const fakeAnswers = {
  stack: {
    slug: 'redux-express'
  }
}
describe('Stack Step: Move', () => {
  it('moves stack files into place', async () => {
    const answers = await subject(fakeAnswers)
    expect(exec).toHaveBeenCalledWith(
      `mv stack/${fakeAnswers.stack.slug}/{.,}* ./`
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
