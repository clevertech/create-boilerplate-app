import configureDockerCompose from './configureDockerCompose'
import configurePackageJson from './configurePackageJson'
import configureYarnWorkspaces from './configureYarnWorkspaces'

const main = async function(answers) {
  await configureDockerCompose(answers)
  await configurePackageJson(answers)
  await configureYarnWorkspaces(answers)
}

export default main
