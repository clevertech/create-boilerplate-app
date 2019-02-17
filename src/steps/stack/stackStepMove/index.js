import exec from '../../../utils/exec'
import { pathOr } from 'ramda'

const run = async function(answers) {
  await exec(`mv stack/${pathOr(null, ['stack', 'slug'], answers)}/{.,}* ./`)
  return answers
}

export default run
