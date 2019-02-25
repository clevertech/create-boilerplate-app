import exec from '../../../../../utils/exec'

const run = async function(answers) {
  await exec('mv src/api/.env.example src/api/.env')
  return answers
}

export default run
