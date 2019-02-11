import exec from '../../../utils/exec'
jest.mock('../../../utils/exec')

import subject from './'

describe('Cleanup step: Init git dir', () => {
  it('runs git init', async () => {
    await subject()
    expect(exec).toHaveBeenCalledWith('git init')
  })
})
