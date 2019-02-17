import exec from '../../../../utils/exec'

import subject from './'

jest.mock('../../../../utils/exec')
const fakeAnswers = { a: 123 }
describe('Move makefiles', () => {
  it('moves api makefile into place', async () => {
    const answers = await subject(fakeAnswers)
    expect(exec).toHaveBeenCalledWith(
      'mv boilerplate-extras/api/Makefile api/Makefile'
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
  it('moves frontend makefile into place', async () => {
    const answers = await subject(fakeAnswers)
    expect(exec).toHaveBeenCalledWith(
      'mv boilerplate-extras/frontend/Makefile frontend/Makefile'
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
