import fs from 'fs'

const main = async function(envPath, changes) {
  if (!envPath) return
  const envSource = await fs.readFile(envPath, 'utf8')
  const oldSource = {}
  const newSource = {}
  const envNewSource = envSource
    .split('\n')
    .map(line => {
      const equalPos = line.indexOf('=')
      const oldKey = line.substr(0, equalPos)
      const oldVal = line.substr(equalPos + 1)
      oldSource[oldKey] = oldVal
      if (!changes) return line
      for (const key of Object.keys(changes)) {
        if (line.startsWith(key + '=')) {
          newSource[key] = changes[key]
          return `${key}=${changes[key]}`
        }
      }
      newSource[oldKey] = oldVal
      return line
    })
    .join('\n')
  if (!changes) return oldSource
  await fs.writeFile(envPath, envNewSource)
  return newSource
}

export default main
