import exec from '../../../utils/exec'
const run = async function(answers) {
  exec(`rm -rf ${answers.baseDir}boilerplate-extras`)
  return answers
}

export default run
