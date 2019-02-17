import fs from 'fs'
import subject from './'
import { promisify } from 'util'
const asyncReaddir = promisify(fs.readdir)

describe('getStacks utility', () => {
  it('Shows the names of the directories in the stacks folder that have an index.js file', async () => {
    console.log(await asyncReaddir('src/stacks'))
  })
})
