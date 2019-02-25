import move from '../../../utils/move'
import subject from './'

jest.mock('../../../utils/move')
const fakeAnswers = { asdf: 123 }
describe('Base Step', () => {
  it('moves files from boilerplate into root', async () => {
    const answers = await subject(fakeAnswers)
    expect(move).toHaveBeenCalledWith('boilerplate')
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
