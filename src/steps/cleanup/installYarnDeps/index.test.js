import exec from '../../../utils/exec'

import subject from './'

jest.mock('../../../utils/exec')
const fakeAnswers = { asdf: 'asdf' }
describe('Cleanup: Install yarn dependencies', () => {
  it('runs yarn install', async () => {
    await subject(fakeAnswers)
    expect(exec).toHaveBeenCalledWith(expect.stringMatching(/^yarn install/))
  })
})
