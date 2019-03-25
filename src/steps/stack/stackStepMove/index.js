import exec from '../../../utils/exec'

const run = async function(answers) {
  await exec(
    `mv ${answers.baseDir}stack/${answers.stack.slug}/{,.[^.]}* ${
      answers.baseDir
    }`
  )
  return answers
}

export default run
