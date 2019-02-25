import exec from '../../../../utils/exec'
import { pathOr } from 'ramda'

const run = async function(answers) {
  const deployMode = pathOr('k8s', ['base', 'prompt', 'deployMode'], answers)
  await exec(`mv boilerplate-extra/buildspec-${deployMode}-* ./`)
  return answers
}

export default run
