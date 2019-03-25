import exec from '../../../utils/exec'

const main = async function(answers) {
  await exec(`cd ${answers.baseDir} && yarn install`)
  return answers
}

export default main
