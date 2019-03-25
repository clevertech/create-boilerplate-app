import exec from '../../../utils/exec'

const run = async function(answers) {
  await exec('rm -rfi ' + answers.baseDir + 'base')
  return answers
}

export default run
