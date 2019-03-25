import clone from '../../../utils/clone'
import config from '../../../../config.json'

const run = async function(answers) {
  await clone('--branch multi-stack ' + config.boilerplateRepo, answers.baseDir)
  return answers
}

export default run
