import exec from '../../../utils/exec'
const run = async function(answers) {
  const baseDir = answers.baseDir
  await exec('mv `ls -A1 ' + baseDir + 'base` ' + baseDir)
  return answers
}

export default run
