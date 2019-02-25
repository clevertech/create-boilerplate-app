import yaml from 'yamljs'
import { readFile, writeFile } from 'fs'

import { promisify } from 'util'

const asyncReadFile = promisify(readFile)
const asyncWriteFile = promisify(writeFile)

const main = async function(helmPath, update) {
  if (!helmPath) return

  const helmSource = await asyncReadFile(helmPath, 'utf8')
  const helmObj = yaml.parse(helmSource)

  if (!update) return helmObj // stop here if we're not updating the file

  const newHelmObj = Object.assign(helmObj, update)
  await asyncWriteFile(helmPath, yaml.stringify(newHelmObj, 4, 2))
  return newHelmObj
}

export default main
