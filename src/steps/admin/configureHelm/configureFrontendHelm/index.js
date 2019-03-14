import setImageRepository from './setImageRepository/index'
import setSubdomain from './setSubdomain/index'

const run = async function(answers) {
  if (!answers.base.prompt.admin) return answers

  console.log('received answers before start:', answers)
  answers = await setImageRepository(answers)

  console.log('after image repository answers', answers)
  answers = await setSubdomain(answers)

  console.log('after set subdomain answers', answers)
  return answers
}

export default run
