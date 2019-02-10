import baseRun from '../base'
import stackRun from '../stack'
import employeeRun from '../employee'
import adminRun from '../admin'
import cleanupRun from '../cleanup'
import suffixRun from '../suffix'
import getDefaultAnswers from '../../utils/getDefaultAnswers'

const run = async function() {
  let answers = getDefaultAnswers()
  answers.baseRunResults = await baseRun(answers)
  answers.stackRunResults = await stackRun(answers)
  answers.employeeRunResults = await employeeRun(answers)
  answers.adminRunResults = await adminRun(answers)
  answers.cleanupRunResults = await cleanupRun(answers)
  answers.suffixRunResults = await suffixRun(answers)
  return answers
}

export default run
