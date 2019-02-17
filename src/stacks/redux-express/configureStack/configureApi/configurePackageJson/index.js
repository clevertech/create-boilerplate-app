import { pathOr } from 'ramda'
import packageJson from '../../../../../utils/packageJson'
import { getDatabaseConfig } from '../../../../../utils/databases'

const main = async function(answers) {
  const path = answers.dirName + '/api/package.json'
  const pjson = await packageJson(path)
  pjson.name = answers.base.prompt.projectTitle + ' API'
  pjson.description = answers.base.prompt.projectTitle + ' API'
  const dbConfig = getDatabaseConfig(
    pathOr(null, ['stack', 'prompt', 'dbEngine'], answers)
  )
  if (dbConfig) {
    pjson.apiDependencies = Object.assign(
      {},
      pjson.apiDependencies,
      dbConfig.deps
    )
  }
  await packageJson(path, pjson)
  return answers
}

export default main
