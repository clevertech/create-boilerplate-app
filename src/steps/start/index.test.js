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

describe('CBA Step: Start', () => {
  it('runs index setup script', () => {
    expect(base).toHaveBeenCalled()
  })
  it('runs stack setup script', () => {
    // run stack setup script
    expect(stack).toHaveBeenCalled()
  })
  it('runs employee configuration if employee', () => {
    // run employee configuration if employee
    expect(employee).toHaveBeenCalled()
  })
  it('runs admin configuration if employee and admin', () => {
    // run admin configuration if employee and admin
    expect(admin).toHaveBeenCalled()
  })
  it('runs cleanup', () => {
    // run cleanup
    expect(cleanup).toHaveBeenCalled()
  })
  it('prints a suffix message', () => {
    // suffix message
    expect(suffix).toHaveBeenCalled()
  })
})
