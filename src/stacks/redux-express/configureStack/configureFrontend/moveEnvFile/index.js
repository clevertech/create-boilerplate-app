import exec from '../../../../../utils/exec'

const run = async function(answers) {
  await exec(`mv src/frontend/.env.example src/frontend/.env`)
  return answers
}

export default run
