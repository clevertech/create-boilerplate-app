import yaml from 'yamljs'
import { readFile, writeFile } from 'fs'

import { promisify } from 'util'

const asyncReadFile = promisify(readFile)
const asyncWriteFile = promisify(writeFile)

const main = async function(yamlFilePath, update) {
  if (!yamlFilePath) return

  const yamlFileSource = await asyncReadFile(yamlFilePath, 'utf8')
  const yamlFileObj = yaml.parse(yamlFileSource)

  if (!update) return yamlFileObj // stop here if we're not updating the file

  const newYamlFileObj = Object.assign(yamlFileObj, update)
  await asyncWriteFile(yamlFilePath, yaml.stringify(newYamlFileObj, 4, 2))
  return newYamlFileObj
}

export default main
