import exec from '../../../utils/exec'
jest.mock('../../../utils/exec')

import subject from './'

const mockBaseDir = 'mockbasedir/'
const fakeAnswers = { baseDir: mockBaseDir }
describe('Cleanup: Initial Commit', () => {
  it('adds the files and commits them', async () => {
    const answers = await subject(fakeAnswers)
    expect(exec).toHaveBeenCalledWith(
      'cd mockbasedir/ && git add . && git commit -m "initial commit"'
    )
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
