import clone from '../../../utils/clone'
import config from '../../../../config.json'

export const EXTRA_REPO = config.boilerplateExtrasRepo
const run = async function(answers) {
  console.info('Employee: clone')
  await clone(EXTRA_REPO, answers.baseDir)
  return answers
}

export default run
