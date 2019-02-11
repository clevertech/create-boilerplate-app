import updatePackageJson from './configurePackageJson'
import updatePrettierConfig from './configurePrettierConfig'
jest.mock('./configurePackageJson')
jest.mock('./configurePrettierConfig')

import subject from './'

describe('Configuration of Root', () => {
  it('updates package.json file', () => {
    subject()
    expect(updatePackageJson).toHaveBeenCalled()
  })
  it('updates prettier configuration', () => {
    subject()
    expect(updatePrettierConfig).toHaveBeenCalled()
  })
})
