import generateHelm from './configureHelm'
import adminSuffix from './adminSuffix'

const run = async function(answers) {
  if (!answers.admin) return answers
  answers = await generateHelm(answers)
  answers = await adminSuffix(answers)
  return answers
}
export default run
