import exec from '../../../utils/exec'

import subject from './'

jest.mock('../../../utils/exec', () => jest.fn(answers => answers))

const mockBaseDir = 'mockbasedir/'
const fakeAnswers = { baseDir: mockBaseDir }
describe('Base step: Delete', () => {
  it('deletes the left-over base folder', async () => {
    const answers = await subject(fakeAnswers)
    expect(exec).toHaveBeenCalledWith('rm -rf mockbasedir/base')
    expect(answers).toEqual(expect.objectContaining(fakeAnswers))
  })
})
