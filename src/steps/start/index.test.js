import base from '../base'
import stack from '../stack'
import employee from '../employee'
import cleanup from '../cleanup'
import suffix from '../suffix'
import getDefaultAnswers from '../../utils/getDefaultAnswers'
import subject from './'

jest.mock('../base', () => jest.fn(() => 1))
jest.mock('../stack', () => jest.fn(() => 2))
jest.mock('../employee', () => jest.fn(() => 3))
jest.mock('../cleanup', () => jest.fn(() => 4))
jest.mock('../suffix', () => jest.fn(() => 5))

process.argv[2] = 'purpleflowers'
const fakeAnswers = getDefaultAnswers()
describe('CBA Step: Start', () => {
  it('runs base setup script', async () => {
    await subject(fakeAnswers)
    expect(base).toHaveBeenCalledWith(fakeAnswers)
  })
  it('runs stack setup script', async () => {
    await subject(fakeAnswers)
    expect(stack).toHaveBeenCalledWith(1)
  })
  it('runs employee configuration if employee', async () => {
    await subject(fakeAnswers)
    expect(employee).toHaveBeenCalledWith(2)
  })
  it('runs cleanup', async () => {
    await subject(fakeAnswers)
    expect(cleanup).toHaveBeenCalledWith(3)
  })
  it('prints a suffix message', async () => {
    await subject(fakeAnswers)
    expect(suffix).toHaveBeenCalledWith(4)
  })
})
