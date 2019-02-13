import yaml from 'yamljs'
import { readFile, writeFile } from 'fs'

import { promisify } from 'util'

const asyncReadFile = promisify(readFile)

const main = async function(dockerComposePath, update) {
  if (!dockerComposePath) return

  const dockerComposeSource = await asyncReadFile(dockerComposePath, 'utf8')
  const dockerComposeObj = yaml.parse(dockerComposeSource)

  if (!update) return dockerComposeObj

  const newDockerComposeObj = Object.assign(dockerComposeObj, update)
  writeFile(dockerComposePath, yaml.stringify(newDockerComposeObj, 4, 2))

  return newDockerComposeObj
}

export default main
