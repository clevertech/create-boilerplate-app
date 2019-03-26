import exec from '../../../../../utils/exec'

const run = async function(answers) {
  await exec(`mv ${answers.baseDir}api/.env.example ${answers.baseDir}api/.env`)
  return answers
}

export default run
