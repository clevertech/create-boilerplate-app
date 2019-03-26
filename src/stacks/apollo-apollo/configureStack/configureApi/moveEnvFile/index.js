import exec from '../../../../../utils/exec'

const run = async function(answers) {
  await exec(
    `mv ${answers.baseDir}src/api/.env.example ${answers.baseDir}src/api/.env`
  )
  return answers
}

export default run
