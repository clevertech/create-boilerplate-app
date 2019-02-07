import * as baseRun from '../base'
import * as stackRun from '../stack'
import * as employeeRun from '../employee'
import * as adminRun from '../admin'
import * as cleanupRun from '../cleanup'
import * as suffixRun from '../suffix'

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
