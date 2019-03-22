import clone from '../../../utils/clone'
import config from '../../../../config.json'

export const EXTRA_REPO = config.boilerplateExtrasRepo
const run = async function(answers) {
  clone(EXTRA_REPO)
  return answers
}

export default run
