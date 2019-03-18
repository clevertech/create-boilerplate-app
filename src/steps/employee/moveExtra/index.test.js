import moveTerraform from './moveTerraform'
import moveMakefiles from './moveMakefiles'
import moveBuildspecs from './moveBuildspecs'

import subject from './'

jest.mock('./moveTerraform', () => jest.fn(async answers => answers))
jest.mock('./moveMakefiles', () => jest.fn(async answers => answers))
jest.mock('./moveBuildspecs', () => jest.fn(async answers => answers))

const fakeAnswers = { asdf: 123 }
describe('Move extra config', async () => {
  afterEach(jest.clearAllMocks)

  it('moves terraform into place', async () => {
    await subject(fakeAnswers)
    expect(moveTerraform).toHaveBeenCalledWith(
      expect.objectContaining(fakeAnswers)
    )
  })
  it('moves makefiles into place', async () => {
    await subject(fakeAnswers)
    // expect(moveTerraform).toHaveBeenCalledWith(fakeAnswers)
    expect(moveMakefiles).toHaveBeenCalledWith(
      expect.objectContaining(fakeAnswers)
    )
  })
  it('moves appropriate buildspec into place', async () => {
    await subject(fakeAnswers)
    expect(moveBuildspecs).toHaveBeenCalledWith(
      expect.objectContaining(fakeAnswers)
    )
  })
})
