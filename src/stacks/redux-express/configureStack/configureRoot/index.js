import configureDockerCompose from './configureDockerCompose'
import configurePackageJson from './configurePackageJson'

const main = async function(answers) {
  answers = await configureDockerCompose(answers)
  answers = await configurePackageJson(answers)
  return answers
}

export default main
