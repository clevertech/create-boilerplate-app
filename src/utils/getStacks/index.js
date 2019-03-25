import fs from 'fs'
import { promisify } from 'util'

const asyncReaddir = promisify(fs.readdir)

const getStacks = function(baseDir) {
  return asyncReaddir(baseDir + 'stacks')
}

export default getStacks
