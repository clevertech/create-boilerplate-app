import exec from '../../../../../utils/exec'

const run = async function(answers) {
  await exec(
    `mv ${answers.baseDir}frontend/.env.example ${answers.baseDir}frontend/.env`
  )
  return answers
}

export default run
