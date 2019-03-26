import exec from '../../../utils/exec'

const run = async function(answers) {
  console.log('Stack: move')
  const copyHidden = '{,.[^.]}*'
  const basePath = `${answers.baseDir}stacks/${answers.stack.slug}/`
  const move = `cp -r ${basePath}* ${answers.baseDir}`
  await exec(move)
  try {
    await exec(`cp -r ${basePath}${copyHidden} ${answers.baseDir}`)
  } catch (e) {
    console.log('Stack: move - no hidden files to copy')
  }
  await exec(`rm -R ${basePath}`)
  return answers
}

export default run
