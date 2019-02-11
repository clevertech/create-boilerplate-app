import configurePackageJson from './configurePackageJson'

import subject from './'

jest.mock('./configurePackageJson')

const fakeAnswers = { asdf: 'asdf' }
describe('frontend configuration', () => {
  beforeEach(async () => await subject(fakeAnswers))
  it('sets up package.json', () => {
    expect(configurePackageJson).toHaveBeenCalledWith(
      expect.objectContaining(fakeAnswers)
    )
  })
})
