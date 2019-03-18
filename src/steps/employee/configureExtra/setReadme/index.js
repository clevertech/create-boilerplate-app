import fs from 'fs-extra'
import path from 'path'

const run = async function(answers) {
  if (!answers.dirName) return

  const basedir = path.resolve(process.cwd(), answers.dirName)
  const dir = 'boilerplate-extras'
  const readme = path.join(basedir, 'README.md')
  const readmeExtra = path.join(dir, 'README-extra.md')
  let source = await fs.readFile(readme)
  source += '\n\n' + (await fs.readFile(readmeExtra))
  await fs.writeFile(readme, source)

  return answers
}
export default run
