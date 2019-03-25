import configureApi from './configureApi'
import configureFrontend from './configureFrontend'
import configurePackageJson from './configurePackageJson'

const main = async function(answers) {
  answers = await configureApi(answers)
  answers = await configureFrontend(answers)
  answers = await configurePackageJson(answers)
  return answers
}

export default main
