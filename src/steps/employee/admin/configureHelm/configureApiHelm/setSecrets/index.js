import nanoid from 'nanoid'
import yaml from '../../../../../../utils/yaml'
import { mergeDeepRight } from 'ramda'

const filePath = './helm/api.yml'

const run = async function(answers) {
  const fileContents = await yaml(filePath)

  const info = {
    secrets: [
      {
        data: {
          HEALTH_CHECK_SECRET: nanoid(),
          SESSION_SECRET: nanoid()
        }
      }
    ]
  }

  await yaml(filePath, mergeDeepRight(fileContents, info))

  return answers
}

export default run
