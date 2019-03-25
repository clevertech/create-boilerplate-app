import exec from '../../../utils/exec'

const main = async function(answers) {
  await exec(`git init ${answers.baseDir}`)
  return answers
}

export default main
