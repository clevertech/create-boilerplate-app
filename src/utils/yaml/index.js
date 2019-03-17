import yaml from 'js-yaml'
import { readFile, writeFile } from 'fs'

import { promisify } from 'util'

const asyncReadFile = promisify(readFile)
const asyncWriteFile = promisify(writeFile)

const main = async function(yamlFilePath, update) {
  if (!yamlFilePath) return

  const yamlFileSource = await asyncReadFile(yamlFilePath, 'utf8')
  const yamlFileObj = yaml.safeLoad(yamlFileSource)

  if (!update) return yamlFileObj // stop here if we're not updating the file

  const newYamlFileObj = Object.assign(yamlFileObj, update)
  await asyncWriteFile(yamlFilePath, yaml.safeDump(newYamlFileObj, 4))
  return newYamlFileObj
}

export default main
