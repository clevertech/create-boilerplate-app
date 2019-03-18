import { pathOr } from 'ramda'
import setImageRepository from './setImageRepository'
import setSubdomain from './setSubdomain'
import setRedisInfo from './setRedisInfo'
import setDbInfo from './setDbInfo'
import setSecrets from './setSecrets'

const run = async function(answers) {
  if (!pathOr(false, ['base', 'prompt', 'admin'], answers)) return answers

  answers = await setImageRepository(answers)
  answers = await setSubdomain(answers)
  answers = await setRedisInfo(answers)
  answers = await setDbInfo(answers)
  answers = await setSecrets(answers)

  return answers
}

export default run
