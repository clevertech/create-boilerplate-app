import exec from '../../../utils/exec'

const main = async function(answers) {
  console.info('Cleanup: delete git')
  await exec('rm -rf ' + answers.baseDir + '.git')
  return answers
}

export default main
