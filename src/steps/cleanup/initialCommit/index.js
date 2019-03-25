import exec from '../../../utils/exec'
const main = async function(answers) {
  await exec(
    `cd ${answers.baseDir} && git add . && git commit -m "initial commit"`
  )
  return answers
}

export default main
