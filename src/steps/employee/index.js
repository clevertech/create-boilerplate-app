import admin from './admin'
import cloneExtra from './cloneExtra'
import moveExtra from './moveExtra'
import configureExtra from './configureExtra'
import cleanupExtra from './cleanupExtra'

const run = async function(answers) {
  if (!answers.base.prompt.employee) return answers
  console.info('Employee')
  answers = await cloneExtra(answers)
  answers = await moveExtra(answers)
  answers = await configureExtra(answers)
  answers = await cleanupExtra(answers)
  if (answers.base.prompt.admin) answers = await admin(answers)
  return answers
}

export default run
