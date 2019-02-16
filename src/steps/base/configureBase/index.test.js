import updatePackageJson from './configurePackageJson'
import updatePrettierConfig from './configurePrettierConfig'
jest.mock('./configurePackageJson')
jest.mock('./configurePrettierConfig')

import subject from './'

describe('Configuration of Root', async () => {
  it('updates package.json file', async () => {
    const answers = await subject()
    expect(updatePackageJson).toHaveBeenCalled()
  })
  it('updates prettier configuration', () => {
    subject()
    expect(updatePrettierConfig).toHaveBeenCalled()
  })
})
