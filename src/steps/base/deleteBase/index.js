import exec from '../../../utils/exec'

const run = async function(answers) {
  console.info('Base: Delete')
  //await exec('rm -rf ' + answers.baseDir + 'base')
  return answers
}

export default run
