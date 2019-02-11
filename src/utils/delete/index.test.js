import exec from '../exec'
import subject from './'
jest.mock('../exec')
describe('Delete util', () => {
  it('does nothing if folder not specified', async () => {
    await subject()
    expect(exec).not.toHaveBeenCalled()
  })
  it('Deletes a folder from the current working directory', async () => {
    const folderToDelete = 'aFolderToDelete'
    await subject(folderToDelete)
    expect(exec).toHaveBeenCalledWith(`rm -rf ./${folderToDelete}`)
  })
})
