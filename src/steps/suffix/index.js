import chalk from 'chalk'

const run = function() {
  console.log()
  console.log('You are almost all set! Run the application with')
  console.log(chalk.cyan('🚀  docker/run'))
  console.log()
  console.log('Check the logs, issues and more with')
  console.log(chalk.cyan('🗄  yarn run browse'))
  console.log()
  console.log(
    'More information on https://github.com/clevertech/boilerplate#local-development'
  )
}

export default run
