import updatePackageJson from './updatePackageJson'
import updatePrettierConfig from './updatePrettierConfig'
import useProjectName from './useProjectName'
jest.mock('./updatePackageJson')
jest.mock('./updatePrettierConfig')
jest.mock('./useProjectName')

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
