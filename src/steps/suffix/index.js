import chalk from 'chalk'

const run = async function() {
  const suffixString = `
  
         =========================== 
  
  You are almost all set! Run the application with
  
  ${chalk.cyan('🚀  docker/run')}
  
  More information on https://github.com/clevertech/boilerplate#local-development
  
         =========================== 
  
  `
  console.log(suffixString)
}

export default run
