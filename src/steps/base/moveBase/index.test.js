import exec from '../../../utils/exec'
import subject from './'

const mockBaseDir = 'mockbasedir/'
jest.mock('../../../utils/exec')
const fakeAnswers = { baseDir: mockBaseDir }
describe('Base Step', () => {
  it('moves base files into root', async () => {
    const answers = await subject(fakeAnswers)
    expect(exec).toHaveBeenCalledWith(
      'mv ' + mockBaseDir + 'base/{,.[^.]}* ' + mockBaseDir
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
