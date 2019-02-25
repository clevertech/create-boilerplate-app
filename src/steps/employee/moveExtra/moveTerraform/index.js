import exec from '../../../../utils/exec'

const run = async function(answers) {
  await exec('mv boilerplate-extra/terraform ./')
  return answers
}

export default run
