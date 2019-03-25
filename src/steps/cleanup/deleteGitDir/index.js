import exec from '../../../utils/exec'

const main = async function(answers) {
  await exec('rm -rfi ' + answers.baseDir + '.git')
  return answers
}

export default main
