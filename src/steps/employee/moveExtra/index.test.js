import moveTerraform from './moveTerraform'
import moveMakefiles from './moveMakefiles'
import moveBuildspec from './moveBuildspec'

import subject from './'

jest.mock('./moveTerraform')
jest.mock('./moveMakefiles')
jest.mock('./moveBuildspec')

const fakeAnswers = { asdf: 123 }
describe('Move extra config', () => {
  it('moves terraform into place', () => {
    expect(moveTerraform).toHaveBeenCalledWith(fakeAnswers)
  })
  it('moves makefiles into place', () => {
    expect(moveMakefiles).toHaveBeenCalledWith(fakeAnswers)
  })
  it('moves appropriate buildspec into place', () => {
    expect(moveBuildspec).toHaveBeenCalledWith(fakeAnswers)
  })
})
