import reduxExpressStack from '../../../stacks/redux-express'

import subject from './'

jest.mock('../../../stacks/redux-express')

const fakeAnswers = {
  stack: {
    slug: 'redux-express'
  }
}
describe('Stack Step: Setup', () => {
  it('Call the appropriate stack setup script', async () => {
    const answers = await subject(fakeAnswers)
    expect(reduxExpressStack).toHaveBeenCalledWith(fakeAnswers)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
