import baseRun from '../base'
import stackRun from '../stack'
import employeeRun from '../employee'
import adminRun from '../admin'
import cleanupRun from '../cleanup'
import suffixRun from '../suffix'

const run = function() {
  let results = {}
  results.baseRunResults = baseRun()
  results.stackRunResults = stackRun(results)
  results.employeeRunResults = employeeRun(results)
  results.adminRunResults = adminRun(results)
  results.cleanupRunResults = cleanupRun(results)
  results.suffixRunResults = suffixRun(results)
}

export default run
