import subject from './'
import exec from '../../../utils/exec'

const mockBaseDir = 'mockbasedir/'
const fakeAnswers = { baseDir: mockBaseDir }

jest.mock('../../../utils/exec')
describe('Cleanup step: Init git dir', () => {
  it('runs git init', async () => {
    const answers = await subject(fakeAnswers)
    expect(exec).toHaveBeenCalledWith('git init ' + mockBaseDir)
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
