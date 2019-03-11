import adminPrompt from './adminPrompt'
import moveHelm from './moveHelm'
import configureHelm from './configureHelm'
import adminSuffix from './adminSuffix'

const run = async function(answers) {
  if (!answers.admin) return answers
  answers = await adminPrompt(answers)
  answers = await moveHelm(answers)
  answers = await configureHelm(answers)
  answers = await adminSuffix(answers)
  return answers
}
export default run
