import clone from '../../../utils/clone'

import subject, { EXTRA_REPO } from './'

jest.mock('../../../utils/clone')
const fakeAnswers = { asdf: 123 }
describe('Clone for Extra Employee Step', () => {
  it('pulls down from private git repo extra files for employee', async () => {
    const answers = await subject(fakeAnswers)
    expect(clone).toHaveBeenCalledWith(EXTRA_REPO)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
