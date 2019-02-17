import deleteFolder from '../../../utils/delete'

import subject from './'

jest.mock('../../../utils/delete', () => jest.fn(answers => answers))

const fakeAnswers = { a: 123 }
describe('Stack Step: Delete', () => {
  it('deletes the left-over stack folder', async () => {
    const answers = await subject(fakeAnswers)
    expect(deleteFolder).toHaveBeenCalledWith('stacks')
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
