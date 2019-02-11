import configureApi from './configureApi'
import configureFrontend from './configureFrontend'
import configureRoot from './configureRoot'

const main = async function(answers) {
  await configureApi(answers)
  await configureFrontend(answers)
  await configureRoot(answers)
  return answers
}

export default main
