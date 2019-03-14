import setImageRepository from './setImageRepository/index'
import setSubdomain from './setSubdomain/index'

const run = async function(answers) {
  if (!answers.base.prompt.admin) return answers
  answers = await setImageRepository(answers)
  answers = await setSubdomain(answers)

  return answers
}

export default run
