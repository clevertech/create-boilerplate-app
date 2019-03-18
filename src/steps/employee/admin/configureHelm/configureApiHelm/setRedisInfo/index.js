import yaml from '../../../../../../utils/yaml'
import config from 'config'
import { mergeDeepRight } from 'ramda'

const filePath = './helm/api.yml'

const run = async function(answers) {
  const fileContents = await yaml(filePath)

  const redisHost = answers.admin.prompt.redisHost
  const redisPort = config.redis.port
  const redisPrefix = answers.base.prompt.projectSlug

  const dbInfo = {
    secrets: [
      {
        data: {
          REDIS_HOST: redisHost,
          REDIS_PORT: redisPort,
          REDIS_PREFIX: redisPrefix + '_development'
        }
      }
    ]
  }

  await yaml(filePath, mergeDeepRight(fileContents, dbInfo))

  return answers
}

export default run
