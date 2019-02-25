import exec from '../../../../utils/exec'

import subject from './'

jest.mock('../../../../utils/exec')
const fakeAnswers = {
  base: {
    prompt: {
      employee: true
    }
  }
}
describe('Employee-specific Config: Move terraform step', () => {
  it('moves extra terraform files into place', async () => {
    const answers = await subject(fakeAnswers)
    expect(exec).toHaveBeenCalledWith('mv boilerplate-extra/terraform ./')
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
