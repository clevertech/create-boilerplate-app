import exec from '../exec'

import subject from './'

jest.mock('../exec')
describe('Move util', () => {
  it('does nothing if the folder is not specified', async () => {
    subject()
    expect(exec).not.toHaveBeenCalled()
  })
  it('Moves the contents of a folder into the current working directory', async () => {
    subject('asdf')
    expect(exec).toHaveBeenCalledWith('mv ./asdf/.* ./')
  })
  it('supports slashes', async () => {
    subject('asdf/asdf')
    expect(exec).toHaveBeenCalledWith('mv ./asdf/asdf/.* ./')
  })
})
