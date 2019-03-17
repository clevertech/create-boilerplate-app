import yaml from '../../../../../utils/yaml'
import { mergeDeepRight } from 'ramda'
import { databases } from '../../../../../utils/databases'

const filePath = './helm/api.yml'

const run = async function(answers) {
  const fileContents = await yaml(filePath)

  const dbName = answers.base.prompt.projectSlug
  const dbEngine = answers.stack.prompt.dbEngine
  const dbPort = databases[dbEngine].port
  const dbHost = answers.admin.prompt.dbHost
  const dbUser = answers.admin.prompt.dbUser
  const dbPass = answers.admin.prompt.dbPass

  const dbInfo = {
    secrets: [
      {
        data: {
          DB_ENGINE: dbEngine,
          DB_PORT: dbPort,
          DB_DATABASE: dbName + '_development',
          DB_POOL_MIN: 2,
          DB_POOL_MAX: 10,
          DB_HOST: dbHost,
          DB_USER: dbUser,
          DB_PASSWORD: dbPass
        }
      }
    ]
  }

  await yaml(filePath, mergeDeepRight(fileContents, dbInfo))

  return answers
}

export default run
