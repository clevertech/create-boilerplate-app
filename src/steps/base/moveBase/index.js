import exec from '../../../utils/exec'
const run = async function(answers) {
  console.info('Base: Move')
  const baseDir = answers.baseDir
  await exec('mv ' + baseDir + 'base/{,.[^.]}* ' + baseDir)
  return answers
}

export default run
