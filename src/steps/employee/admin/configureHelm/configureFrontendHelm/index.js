import setImageRepository from './setImageRepository'
import setSubdomain from './setSubdomain'

const run = async function(answers) {
  if (!answers.base.prompt.admin) return answers
  answers = await setImageRepository(answers)
  answers = await setSubdomain(answers)

  return answers
}

export default run
