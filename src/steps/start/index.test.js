import base from '../base'
import stack from '../stack'
import employee from '../employee'
import admin from '../admin'
import cleanup from '../cleanup'
import suffix from '../suffix'
import getDefaultAnswers from '../../utils/getDefaultAnswers'

jest.mock('../base', () => jest.fn(() => 1))
jest.mock('../stack', () => jest.fn(() => 2))
jest.mock('../employee', () => jest.fn(() => 3))
jest.mock('../admin', () => jest.fn(() => 4))
jest.mock('../cleanup', () => jest.fn(() => 5))
jest.mock('../suffix', () => jest.fn(() => 6))

import subject from './'

const fakeAnswers = getDefaultAnswers()
describe('CBA Step: Start', () => {
  beforeAll(() => {
    process.argv[2] = 'purpleflowers'
  })
  it('runs base setup script', async () => {
    await subject(fakeAnswers)
    expect(base).toHaveBeenCalledWith(1)
  })
  it('runs stack setup script', async () => {
    await subject(fakeAnswers)
    expect(stack).toHaveBeenCalledWith(2)
  })
  it('runs employee configuration if employee', async () => {
    await subject(fakeAnswers)
    expect(employee).toHaveBeenCalledWith(3)
  })
  it('runs admin configuration if employee and admin', async () => {
    await subject(fakeAnswers)
    expect(admin).toHaveBeenCalledWith(4)
  })
  it('runs cleanup', async () => {
    await subject(fakeAnswers)
    expect(cleanup).toHaveBeenCalledWith(5)
  })
  it('prints a suffix message', async () => {
    await subject(fakeAnswers)
    expect(suffix).toHaveBeenCalledWith(6)
  })
})
