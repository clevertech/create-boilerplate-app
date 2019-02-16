import moveTerraform from './moveTerraform'
import moveMakefiles from './moveMakefiles'
import moveBuildspec from './moveBuildspecs'

const run = async function(answers) {
  answers = await moveTerraform(answers)
  answers = await moveMakefiles(answers)
  answers = await moveBuildspec(answers)
  return answers
}

export default run
