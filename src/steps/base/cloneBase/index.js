import clone from '../../../utils/clone'
import config from '../../../../config.json'

const run = async function(answers) {
  await clone(config.boilerplateRepo, './')
  return answers
}

export default run
