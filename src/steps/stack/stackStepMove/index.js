import exec from '../../../utils/exec'

const run = async function(answers) {
  console.log('Stack: move')
  const basePath = `${answers.baseDir}stacks/${answers.stack.slug}/{,.[^.]}*`
  const move = `cp -r ${basePath} ${answers.baseDir} && rm -R ${basePath}`
  await exec(move)
  return answers
}

export default run
