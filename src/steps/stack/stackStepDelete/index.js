import exec from '../../../utils/exec'

const run = async function(answers) {
  await exec('rm -rfi ' + answers.baseDir + 'stacks')
  return answers
}

export default run
