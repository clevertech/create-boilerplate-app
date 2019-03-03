import fs from 'fs'

const main = async function(filePath, composeProjectName) {
  if (!filePath) return
  const fileSource = await fs.readFile(filePath, 'utf8')
  if (!composeProjectName) return fileSource
  const fileNewSource = fileSource.replace(/boilerplate/g, composeProjectName)
  await fs.writeFile(filePath, fileNewSource)
  return fileNewSource
}
export default main
