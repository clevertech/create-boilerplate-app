import exec from '../../../utils/exec'

const main = async function(answers) {
  console.info('Cleanup: init git')
  await exec(`git init ${answers.baseDir}`)
  return answers
}

export default main
