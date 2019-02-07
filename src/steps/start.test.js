import { run as baseRun } from './base'
import { run as stackRun } from './stack'
import { run as employeeRun } from './employee'
import { run as adminRun } from './admin'
import { run as cleanupRun } from './cleanup'
import { run as suffixRun } from './suffix'
jest.mock('./base')
jest.mock('./stack')
jest.mock('./employee')
jest.mock('./admin')
jest.mock('./cleanup')
jest.mock('./suffix')

describe('CBA Step: Start', () => {
  it('runs base setup script', () => {
    expect(baseRun).toHaveBeenCalled()
  })
  it('runs stack setup script', () => {
    // run stack setup script
    expect(stackRun).toHaveBeenCalled()
  })
  it('runs employee configuration if employee', () => {
    // run employee configuration if employee
    expect(employeeRun).toHaveBeenCalled()
  })
  it('runs admin configuration if employee and admin', () => {
    // run admin configuration if employee and admin
    expect(adminRun).toHaveBeenCalled()
  })
  it('runs cleanup', () => {
    // run cleanup
    expect(cleanupRun).toHaveBeenCalled()
  })
  it('prints a suffix message', () => {
    // suffix message
    expect(suffixRun).toHaveBeenCalled()
  })
})
