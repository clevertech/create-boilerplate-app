import { pathOr } from 'ramda'
import packageJson from '../../../../utils/packageJson'
import { getDatabaseConfig } from '../../../../utils/databases'

const run = async function(answers) {
  const path = answers.dirName + '/package.json'
  const pjson = await packageJson(path)
  pjson.name = answers.base.prompt.projectTitle
  pjson.description = answers.base.prompt.projectTitle
  await packageJson(path, pjson)
  return answers
}

export default run
