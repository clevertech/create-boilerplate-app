import exec from '../../../utils/exec'

const run = async function(answers) {
  await exec('rm -rf ' + answers.baseDir + 'stacks')
  return answers
}

export default run
