import configureStack from './configureStack'
import stackPrompt from './prompt'

const main = async function(answers) {
  const newAnswers = await stackPrompt(answers)
  await configureStack(newAnswers)
  return newAnswers
}

export default main
