import yaml from 'yamljs'
import { readFile, writeFile } from 'fs'

import { promisify } from 'util'

const asyncReadFile = promisify(readFile)
const asyncWriteFile = promisify(writeFile)

const main = async function(dockerComposePath, update) {
  if (!dockerComposePath) return

  const dockerComposeSource = await asyncReadFile(dockerComposePath, 'utf8')
  const dockerComposeObj = yaml.parse(dockerComposeSource)

  if (!update) return dockerComposeObj // stop here if we're not updating the file

  const newDockerComposeObj = Object.assign(dockerComposeObj, update)
  await asyncWriteFile(
    dockerComposePath,
    yaml.stringify(newDockerComposeObj, 4, 2)
  )
  return newDockerComposeObj
}

export default main
