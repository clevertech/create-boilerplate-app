import clone from '../../../utils/clone'
import config from 'config'

const run = async function(answers) {
  clone(config.boilerplateRepo, './')
  return answers
}

export default run
