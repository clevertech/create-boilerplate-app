import { databases } from '../../../../utils/databases'
import dockerCompose from '../../../../utils/dockerCompose'
const main = async function(answers) {
  const databaseConfig = databases[answers.stack.prompt.dbEngine]
  dockerCompose(answers.baseDir + 'docker-compose.yml', {
    services: {
      db: {
        image: databaseConfig.dockerComposeImage,
        environment: {
          POSTGRES_DB: answers.stack.prompt.dbName,
          POSTGRES_USER: answers.stack.prompt.dbUser,
          POSTGRES_PASSWORD: answers.stack.prompt.dbPass
        },
        ports: '' + answers.stack.prompt.dbPort + ':' + databaseConfig.port
      }
    }
  })
  return answers
}

export default main
