import exec from '../../../../../utils/exec'

import subject from './'

jest.mock('../../../../../utils/exec')
const fakeAnswers = { a: 123 }
describe('move env file', () => {
  it('moves example env into place', async () => {
    const answers = await subject(fakeAnswers)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
    expect(exec).toHaveBeenCalledWith(
      expect.stringMatching('mv src/frontend/.env.example src/frontend/.env')
    )
  })
})
