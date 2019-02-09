import base from '../base'
import stack from '../stack'
import employee from '../employee'
import admin from '../admin'
import cleanup from '../cleanup'
import suffix from '../suffix'
jest.mock('../base')
jest.mock('../stack')
jest.mock('../employee')
jest.mock('../admin')
jest.mock('../cleanup')
jest.mock('../suffix')

import subject from './'

describe('CBA Step: Start', () => {
  it('runs base setup script', () => {
    subject()
    expect(base).toHaveBeenCalled()
  })
  it('runs stack setup script', () => {
    subject()
    expect(stack).toHaveBeenCalled()
  })
  it('runs employee configuration if employee', () => {
    subject()
    expect(employee).toHaveBeenCalled()
  })
  it('runs admin configuration if employee and admin', () => {
    subject()
    expect(admin).toHaveBeenCalled()
  })
  it('runs cleanup', () => {
    subject()
    expect(cleanup).toHaveBeenCalled()
  })
  it('prints a suffix message', () => {
    subject()
    expect(suffix).toHaveBeenCalled()
  })
})
