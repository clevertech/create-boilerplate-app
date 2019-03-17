import chalk from 'chalk'

const run = async function(answers) {
  const suffixString = `
  
         =========================== 
  
  You are almost all set! Run the application with
  
  ${chalk.cyan('🚀  docker/run')}
  
  More information on https://github.com/clevertech/boilerplate#local-development
  
         =========================== 
  
  `
  console.log(suffixString)
  return answers
}

export default run
