import exec from '../../../../../utils/exec'

const run = async function(answers) {
  await exec(
    `mv ${answers.baseDir}src/frontend/.env.example ${
      answers.baseDir
    }src/frontend/.env`
  )
  return answers
}

export default run
