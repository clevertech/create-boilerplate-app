import subject from './'
import exec from '../../../utils/exec'

const mockBaseDir = 'mockbasedir/'
const fakeAnswers = { baseDir: mockBaseDir }

jest.mock('../../../utils/exec')
describe('Delete base .git dir', () => {
  it('removes the base boilerplate .git dir', async () => {
    const answers = await subject(fakeAnswers)
    expect(exec).toHaveBeenCalledWith('rm -rf mockbasedir/.git')
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
