import promptBase from './promptBase'
import cloneBase from './cloneBase'
import moveBase from './moveBase'
import deleteBase from './deleteBase'
import configureBase from './configureBase'

export const BASE_REPO = 'https://github.com/chadfurman/boilerplate'

const base = async function(answers) {
  answers.base = { BASE_REPO }
  answers = await promptBase(answers)
  answers = await cloneBase(answers)
  answers = await moveBase(answers)
  answers = await deleteBase(answers)
  answers = await configureBase(answers)
  return answers
}

export default base
