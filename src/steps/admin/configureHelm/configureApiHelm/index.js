import { pathOr } from 'ramda'
import setImageRepository from './setImageRepository/index'

const run = async function(answers) {
  if (!pathOr(false, ['base', 'prompt', 'admin'], answers)) return answers
  // 1. set image repository
  answers = await setImageRepository(answers)

  // 2. set subdomain
  helm.ingress.hosts[0].rules[0].subdomain = helm.ingress.hosts[0].rules[0].subdomain
    .replace(/boilerplate/g, dashify(answers.projectName))
    .replace(/randomvalue/g, randomValue)
  // 3. set redis info
  const redisInfo = {
    helm: {
      secrets: [
        {
          data: {
            REDIS_HOST: answers.redishost,
            REDIS_PORT: '6379',
            REDIS_PREFIX: dbName + '_development'
          }
        }
      ]
    }
  }

  // 4. set db info
  const dbInfo = {
    helm: {
      secrets: [
        {
          data: {
            DB_ENGINE: answers.databaseEngine,
            DB_PORT: dbPort,
            DB_DATABASE: dbName + '_development',
            DB_POOL_MIN: 2,
            DB_POOL_MAX: 10,
            DB_HOST: answers.dbhost,
            DB_USER: answers.dbuser,
            DB_PASSWORD: answers.dbpassword
          }
        }
      ]
    }
  }
  // -- get database port

  const secretInfo = {
    helm: {
      secrets: [
        {
          data: {
            SESSION_SECRET: nanoid(),
            HEALTH_CHECK_SECRET: nanoid()
          }
        }
      ]
    }
  }

  return answers
}

export default run
