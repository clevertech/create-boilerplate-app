import configureEnvFile from './configureEnvFile'
import configurePackageJson from './configurePackageJson'

const main = async function(answers) {
  answers.api = {}
  await configureEnvFile(answers)
  await configurePackageJson(answers)
  return answers
}

export default main
