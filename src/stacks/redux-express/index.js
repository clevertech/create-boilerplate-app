import promptStack from './promptStack'
import configureStack from './configureStack'

const STACK_REPO = 'https://...'

const main = async function(answers) {
  answers.stack = { STACK_REPO }
  answers = await promptStack(answers)
  answers = await configureStack(answers)
  return answers
}

export default main
