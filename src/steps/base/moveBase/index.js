import move from '../../../utils/move'
const run = async function(answers) {
  const baseDir = answers.baseDir
  await move(baseDir + 'base/{.,}*', baseDir)
  return answers
}

export default run
