// import moveHelm from './configureFrontendHelm'
import configureFrontendHelm from './configureFrontendHelm'
import configureApiHelm from './configureApiHelm'

const run = async function(answers) {
  if (!answers.base.prompt.admin) return answers
  answers = await configureApiHelm(answers)
  answers = await configureFrontendHelm(answers)
  return answers
}

export default run
