import promptBase from './promptBase'
import cloneBase from './cloneBase'
import moveBase from './moveBase'
import deleteBase from './deleteBase'
import configureBase from './configureBase'

const base = async function(answers) {
  console.info('Base')
  answers = await promptBase(answers)
  answers = await cloneBase(answers)
  answers = await moveBase(answers)
  answers = await deleteBase(answers)
  answers = await configureBase(answers)
  return answers
}

export default base
