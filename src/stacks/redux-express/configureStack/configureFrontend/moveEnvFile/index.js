import exec from '../../../../../utils/exec'

const run = async function(answers) {
  await exec(`mv frontend/.env.example frontend/.env`)
  return answers
}

export default run
