import exec from '../../../../../utils/exec'

import subject from './'

jest.mock('../../../../../utils/exec')
const mockBaseDir = 'mockbasedir/'
const fakeAnswers = { baseDir: mockBaseDir }
describe('move env file', () => {
  it('moves example env into place', async () => {
    const answers = await subject(fakeAnswers)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
    expect(exec).toHaveBeenCalledWith(
      'mv mockbasedir/frontend/.env.example mockbasedir/frontend/.env'
    )
  })
})
