import nanoid from 'nanoid'
import { getDatabaseConfig } from '../../../../../utils/databases'
import envFile from '../../../../../utils/envFile'

const main = async function(answers) {
  answers.stack.api.dbPassword = nanoid()
  const envPath = path.join(answers.dirName, 'api/.env.example')
  const changes = {
    DB_DATABASE: answers.base.prompt.projectSlug + '_local',
    DB_USER: answers.base.prompt.projectSlug,
    DB_PASSWORD: answers.stack.api.dbPassword,
    DB_ENGINE: answers.stack.api.dbEngine,
    DB_PORT: getDatabaseConfig(answers.stack.api.dbEngine).port,
    HEALTH_CHECK_SECRET: nanoid(),
    SESSION_SECRET: nanoid()
  }
  envFile(envPath, changes)

  return answers
}

export default main
