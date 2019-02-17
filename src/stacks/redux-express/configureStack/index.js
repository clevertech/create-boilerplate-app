import configureApi from './configureApi'
import configureFrontend from './configureFrontend'

const main = async function(answers) {
  answers = await configureApi(answers)
  answers = await configureFrontend(answers)
  return answers
}

export default main
