import deleteOldGitDir from '../../../utils/delete'

import subject from './'

jest.mock('../../../utils/delete')

describe('Delete git dir cleanupExtra subtask', () => {
  it('removes the leftover base boilerplate code', async () => {
    await subject()
    expect(deleteOldGitDir).toHaveBeenCalledWith('.git')
  })
})
