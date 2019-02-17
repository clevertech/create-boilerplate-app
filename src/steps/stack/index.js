import stackStepPrompt from './stackStepPrompt'
import stackStepMove from './stackStepMove'
import stackStepDelete from './stackStepDelete'
import stackStepSetup from './stackStepSetup'

const run = async function(answers) {
  answers = await stackStepPrompt(answers)
  answers = await stackStepMove(answers)
  answers = await stackStepDelete(answers)
  answers = await stackStepSetup(answers)
  return answers
}

export default run
