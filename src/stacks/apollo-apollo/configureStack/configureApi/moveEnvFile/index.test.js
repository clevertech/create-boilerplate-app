import exec from '../../../../../utils/exec'

import subject from './'

jest.mock('../../../../../utils/exec')
const mockBaseDir = 'mockbasedir/'
const fakeAnswers = { baseDir: mockBaseDir }
describe('Redux-Express Stack: Configure API -- move env file script', () => {
  it('moves api env into place', async () => {
    const answers = await subject(fakeAnswers)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
    expect(exec).toHaveBeenCalledWith(
      'mv mockbasedir/api/.env.example mockbasedir/api/.env'
    )
  })
})
