import stackPrompt from './prompt'
import configureStack from './configureStack'

const main = function(answers) {
  const newAnswers = stackPrompt(answers)
  configureStack(newAnswers)
  return newAnswers
}

export default main
