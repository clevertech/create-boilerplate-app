import move from '../../../utils/move'
import subject from './'

const mockBaseDir = 'mockbasedir'
jest.mock('../../../utils/move')
const fakeAnswers = { baseDir: mockBaseDir }
describe('Base Step', () => {
  it('moves base files into root', async () => {
    const answers = await subject(fakeAnswers)
    expect(move).toHaveBeenCalledWith(
      expect.stringMatching(new RegExp(mockBaseDir + 'base')),
      mockBaseDir
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
