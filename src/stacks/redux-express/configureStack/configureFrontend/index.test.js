import configurePackageJson from './configurePackageJson'

import subject from './'

jest.mock('./configurePackageJson')

const fakeAnswers = { asdf: 'asdf' }
describe('Redux-Express stack frontend configuration', () => {
  beforeEach(async () => await subject(fakeAnswers))
  it('sets up package.json', () => {
    expect(configurePackageJson).toHaveBeenCalledWith(
      expect.objectContaining(fakeAnswers)
    )
  })
})
