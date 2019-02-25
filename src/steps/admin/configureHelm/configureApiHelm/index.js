const run = async function(answers) {
  if (!answers.base.prompt.admin) return answers
  /*  const helmFile = path.join(__dirname, 'helm/api.yml')
  const helmFileSource = await fs.readFile(helmFile, 'utf8')
  const helm = yaml.parse(helmFileSource)
  const dbPort = databases[answers.databaseEngine].port
  helm.deployment.image.repository = helm.deployment.image.repository.replace(
    /boilerplate/g,
    dashify(answers.projectName)
  )
  helm.ingress.hosts[0].rules[0].subdomain = helm.ingress.hosts[0].rules[0].subdomain
    .replace(/boilerplate/g, dashify(answers.projectName))
    .replace(/randomvalue/g, randomValue)
  const dbName = toSnakeCase(answers.projectName)
  helm.secrets[0].data = {
    DB_ENGINE: answers.databaseEngine,
    DB_PORT: dbPort,
    DB_DATABASE: dbName + '_development',
    DB_POOL_MIN: 2,
    DB_POOL_MAX: 10,
    DB_HOST: answers.dbhost,
    DB_USER: answers.dbuser,
    DB_PASSWORD: answers.dbpassword,
    REDIS_HOST: answers.redishost,
    REDIS_PORT: '6379',
    REDIS_PREFIX: dbName + '_development',
    SESSION_SECRET: nanoid(),
    HEALTH_CHECK_SECRET: nanoid()
  }
  const destFile = path.join(basedir, 'helm-api-development.yml')
  await fs.writeFile(destFile, yaml.stringify(helm, 4, 2))*/

  return answers
}

export default run
