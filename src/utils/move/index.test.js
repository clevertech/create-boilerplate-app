import exec from '../exec'

import subject from './'

const mockSrc = 'mocksrc'
const mockDst = 'mockdst'
jest.mock('../exec')
describe('Move util', () => {
  it('does nothing if the src folder is not specified', async () => {
    subject(undefined, mockDst)
    expect(exec).not.toHaveBeenCalled()
  })
  it('does nothing if the dst folder is not specified', async () => {
    subject(mockSrc, undefined)
    expect(exec).not.toHaveBeenCalled()
  })
  it('Moves the contents of a folder into the current working directory', async () => {
    subject(mockSrc, mockDst)
    expect(exec).toHaveBeenCalledWith(expect.stringMatching(/mv.*src.*dst/))
  })
})
