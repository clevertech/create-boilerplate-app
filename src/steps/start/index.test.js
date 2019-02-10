import base from '../base'
import stack from '../stack'
import employee from '../employee'
import admin from '../admin'
import cleanup from '../cleanup'
import suffix from '../suffix'
import getDefaultAnswers from '../../utils/getDefaultAnswers'

jest.mock('../base')
jest.mock('../stack')
jest.mock('../employee')
jest.mock('../admin')
jest.mock('../cleanup')
jest.mock('../suffix')

import subject from './'

describe('CBA Step: Start', () => {
  it('runs base setup script', async () => {
    await subject(getDefaultAnswers())
    expect(base).toHaveBeenCalled()
  })
  it('runs stack setup script', async () => {
    await subject(getDefaultAnswers())
    expect(stack).toHaveBeenCalled()
  })
  it('runs employee configuration if employee', async () => {
    await subject(getDefaultAnswers())
    expect(employee).toHaveBeenCalled()
  })
  it('runs admin configuration if employee and admin', async () => {
    await subject(getDefaultAnswers())
    expect(admin).toHaveBeenCalled()
  })
  it('runs cleanup', async () => {
    await subject(getDefaultAnswers())
    expect(cleanup).toHaveBeenCalled()
  })
  it('prints a suffix message', async () => {
    await subject(getDefaultAnswers())
    expect(suffix).toHaveBeenCalled()
  })
})
