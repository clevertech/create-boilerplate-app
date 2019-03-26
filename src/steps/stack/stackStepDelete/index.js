import exec from '../../../utils/exec'

const run = async function(answers) {
  console.log('Stack: delete')
  await exec('rm -rf ' + answers.baseDir + 'stacks')
  return answers
}

export default run
