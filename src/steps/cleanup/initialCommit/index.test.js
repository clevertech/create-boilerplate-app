import exec from '../../../utils/exec'
jest.mock('../../../utils/exec')

import subject from './'

describe('Cleanup: Initial Commit', () => {
  it('adds the files and commits them', async () => {
    await subject()
    expect(exec).toHaveBeenCalledWith(
      'git add . && git commit -m "initial commit"'
    )
  })
})
