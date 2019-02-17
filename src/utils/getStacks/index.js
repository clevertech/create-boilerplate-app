import fs from 'fs'
import { promisify } from 'util'

const asyncReaddir = promisify(fs.readdir)

const getStacks = function() {
  return asyncReaddir('src/stacks')
}

export default getStacks
