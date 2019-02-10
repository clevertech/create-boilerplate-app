import configureApi from './configureApi'
import configureFrontend from './configureFrontend'
import configureRoot from './configureRoot'

import subject from './'

jest.mock('./configureApi')
jest.mock('./configureFrontend')
jest.mock('./configureRoot')

const mockTest = () => {
  expect(false).toBe(true)
}
const fakeAnswers = { test: 2 }
describe('Redux-express stack script', () => {
  it('clone down stack', mockTest)
  it('mv stack files into boilerplate root', mockTest)
  it('delete empty stack folder', mockTest)
  it('prompt for stack questions', mockTest)
  it('configures API', () => {
    subject(fakeAnswers)
    expect(configureApi).toHaveBeenCalledWith(
      expect.objectContaining({ fakeAnswers })
    )
  })
  it('configures Frontend', () => {
    subject(fakeAnswers)
    expect(configureFrontend).toHaveBeenCalledWith(
      expect.objectContaining({ fakeAnswers })
    )
  })
  it('configures Root', () => {
    subject(fakeAnswers)
    expect(configureRoot).toHaveBeenCalledWith(
      expect.objectContaining({ fakeAnswers })
    )
  })
})
