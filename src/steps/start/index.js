import baseRun from '../base'
import stackRun from '../stack'
import employeeRun from '../employee'
import adminRun from '../admin'
import cleanupRun from '../cleanup'
import suffixRun from '../suffix'
import getDefaultAnswers from '../../utils/getDefaultAnswers'

const run = async function() {
  let answers = getDefaultAnswers()
  answers = await baseRun(answers)
  answers = await stackRun(answers)
  answers = await employeeRun(answers)
  answers = await adminRun(answers)
  answers = await cleanupRun(answers)
  answers = await suffixRun(answers)
  return answers
}

export default run
