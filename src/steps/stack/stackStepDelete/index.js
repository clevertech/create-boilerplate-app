import exec from '../../../utils/exec'

const run = async function(answers) {
  console.log('Stack: delete')
  console.log('rm -rf ' + answers.baseDir + 'stacks')
  await exec('rm -rf ' + answers.baseDir + 'stacks')
  return answers
}

export default run
