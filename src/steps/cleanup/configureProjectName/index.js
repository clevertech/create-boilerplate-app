const run = async function(answers) {
  return answers
  //
  // function setImageNames(composeConfig, keys, name) {
  //   keys.forEach(function(key) {
  //     composeConfig.services[key].image = `${name}_${key}:latest`
  //   })
  // }
  //
  // const updateDockerCompose = async (answers, dbPassword) => {
  //   const dockerComposePath = path.join(basedir, 'docker-compose.yml')
  //   const dockerComposeSource = await fs.readFile(dockerComposePath, 'utf8')
  //   const dockerCompose = yaml.parse(dockerComposeSource)
  //   const dbPort = databases[answers.databaseEngine].port
  //   const db = dockerCompose.services.db
  //
  //   setImageNames(
  //     dockerCompose,
  //     ['api', 'frontend', 'redis'],
  //     dashify(answers.projectName)
  //   )
  //
  //   db.image = answers.databaseEngine
  //   db.ports = [`${dbPort}:${dbPort}`]
  //   const dbUser = toSnakeCase(answers.projectName)
  //   if (answers.databaseEngine === 'postgres') {
  //     db.environment = {
  //       POSTGRES_PASSWORD: dbPassword,
  //       POSTGRES_DB: dbUser + '_local',
  //       POSTGRES_USER: dbUser
  //     }
  //   } else if (answers.databaseEngine === 'mysql') {
  //     db.environment = {
  //       MYSQL_ROOT_PASSWORD: nanoid(),
  //       MYSQL_PASSWORD: dbPassword,
  //       MYSQL_DATABASE: dbUser + '_local',
  //       MYSQL_USER: dbUser
  //     }
  //   }
  //   await fs.writeFile(dockerComposePath, yaml.stringify(dockerCompose, 4, 2))
  // }
}

export default run
