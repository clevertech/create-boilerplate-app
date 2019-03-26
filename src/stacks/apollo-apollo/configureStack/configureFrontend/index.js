import configurePackageJson from './configurePackageJson'
import moveEnvFile from './moveEnvFile'

const main = async function(answers) {
  answers = await configurePackageJson(answers)
  answers = await moveEnvFile(answers)
  return answers
}

export default main
