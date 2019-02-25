import envFile from '../../../../../utils/envFile'
import path from 'path'

const main = async function(answers) {
  const envPath = path.join(answers.dirName, 'api/.env.example')
  const changes = {
    DB_ENGINE: answers.stack.prompt.dbEngine,
    DB_HOST: 'db',
    DB_USER: answers.stack.prompt.dbUser,
    DB_PORT: answers.stack.prompt.dbPort,
    DB_PASSWORD: answers.stack.prompt.dbPass,
    DB_DATABASE: answers.stack.prompt.dbName,
    HEALTH_CHECK_SECRET: answers.stack.prompt.healthCheckSecret,
    SESSION_SECRET: answers.stack.prompt.sessionSecret
  }
  envFile(envPath, changes)

  return answers
}

export default main
