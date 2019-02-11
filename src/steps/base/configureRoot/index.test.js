import updatePackageJson from './configurePackageJson'
import updatePrettierConfig from './configurePrettierConfig'
import useProjectName from './configureProjectName'
jest.mock('./configurePackageJson')
jest.mock('./configurePrettierConfig')
jest.mock('./configureProjectName')

import subject from './'

describe('Configuration of Root', () => {
  it('sets project name', () => {
    subject()
    expect(updatePackageJson).toHaveBeenCalled()
  })
  it('updates package.json file', () => {
    subject()
    expect(updatePrettierConfig).toHaveBeenCalled()
  })
  it('updates prettier configuration', () => {
    subject()
    expect(useProjectName).toHaveBeenCalled()
  })
})
