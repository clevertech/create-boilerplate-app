import deleteUtil from '../../../utils/delete'

import subject from './'

jest.mock('../../../utils/delete')
const fakeAnswers = {
  base: {
    prompt: {
      employee: true
    }
  }
}
describe('Cleanup for Extra Employee Step', () => {
  it('removes leftover files from employee configuration', async () => {
    const answers = await subject(fakeAnswers)
    expect(deleteUtil).toHaveBeenCalledWith('boilerplate-extras')
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
