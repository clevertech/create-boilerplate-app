import exec from '../../../../utils/exec'
const run = async function(answers) {
  await exec('mv boilerplate-extras/api/Makefile api/Makefile')
  await exec('mv boilerplate-extras/frontend/Makefile frontend/Makefile')
  return answers
}

export default run
