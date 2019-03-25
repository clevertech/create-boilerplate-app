import exec from '../../../utils/exec'

const main = async function(answers) {
  console.info('Cleanup: install deps')
  await exec(`cd ${answers.baseDir} && yarn install`)
  return answers
}

export default main
