import exec from '../../../utils/exec'
const run = async function(answers) {
  exec(`rm -rfi ${answers.baseDir}boilerplate-extras`)
  return answers
}

export default run
