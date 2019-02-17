import generateHelm from './generateHelm'
import adminSuffix from './adminSuffix'
import chalk from 'chalk'

const run = async function(answers) {
  if (!answers.admin) return answers
  answers = await generateHelm(answers)
  answers = await adminSuffix(answers)
  return answers
}
export default run
