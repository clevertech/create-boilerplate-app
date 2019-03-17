import fs from 'fs-extra'

const main = async function(strToReplace, filePath, newValue) {
  if (
    filePath === undefined ||
    strToReplace === undefined ||
    newValue === undefined
  ) {
    return
  }

  const fileSource = await fs.readFile(filePath, 'utf8')
  const fileNewSource = fileSource.replace(
    new RegExp(strToReplace, 'g'),
    newValue
  )
  await fs.writeFile(filePath, fileNewSource)
  return fileNewSource
}
export default main
