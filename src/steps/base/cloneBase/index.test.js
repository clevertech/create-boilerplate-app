import clone from '../../../utils/clone'

import subject, { BASE_REPO } from './'

jest.mock('../../../utils/clone')
const fakeAnswers = { asdf: 123 }
describe('Clone down base boilerplate code', () => {
  it('pulls down the public boilerplate repo', async () => {
    const answers = await subject(fakeAnswers)
    expect(clone).toHaveBeenCalledWith(BASE_REPO)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
