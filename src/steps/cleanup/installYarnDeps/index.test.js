import exec from '../../../utils/exec'
import subject from './'

const mockBaseDir = 'mockbasedir/'
const fakeAnswers = { baseDir: mockBaseDir }

jest.mock('../../../utils/exec')
describe('Cleanup: Install yarn dependencies', () => {
  it('runs yarn install', async () => {
    const answers = await subject(fakeAnswers)
    expect(exec).toHaveBeenCalledWith('cd mockbasedir/ && yarn install')
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
