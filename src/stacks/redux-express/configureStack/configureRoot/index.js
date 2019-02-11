import configureDockerCompose from './configureDockerCompose'
import configurePackageJson from './configurePackageJson'

const main = async function(answers) {
  await configureDockerCompose(answers)
  await configurePackageJson(answers)
}

export default main
