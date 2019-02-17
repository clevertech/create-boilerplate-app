import chalk from 'chalk'
const run = async function(answers) {
  console.log()
  console.log('Use the following helm files:')
  console.log(chalk.cyan(answers.dirName, 'helm-api-development.yml'))
  console.log(chalk.cyan(answers.dirName, 'helm-frontend-development.yml'))
  console.log()
  return answers
}

export default run
