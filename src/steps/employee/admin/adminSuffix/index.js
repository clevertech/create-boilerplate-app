import chalk from 'chalk/types'

const run = async function(answers) {
  if (!answers || !answers.dirName) return answers
  console.log()
  console.log('Use the following helm files:')
  console.log(chalk.cyan(answers.dirName, 'helm-api-development.yml'))
  console.log(chalk.cyan(answers.dirName, 'helm-frontend-development.yml'))
  console.log()
  return answers
}

export default run
