import exec from '../../../utils/exec'

import subject from './'

jest.mock('../../../utils/exec')
const mockBaseDir = 'mockbasedir/'
const fakeAnswers = {
  baseDir: mockBaseDir,
  base: {
    prompt: {
      employee: true
    }
  }
}
describe('Cleanup for Extra Employee Step', () => {
  it('removes leftover files from employee configuration', async () => {
    const answers = await subject(fakeAnswers)
    expect(exec).toHaveBeenCalledWith('rm -rf mockbasedir/boilerplate-extras')
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
