import cloneExtra from './cloneExtra'
import moveExtra from './moveExtra'
import configureExtra from './configureExtra'
import cleanupExtra from './cleanupExtra'

const run = async function(answers) {
  answers = await cloneExtra(answers)
  answers = await moveExtra(answers)
  answers = await configureExtra(answers)
  answers = await cleanupExtra(answers)
  return answers
}

export default run
