import fs from 'fs-extra'

const main = async function(jsonPath, update) {
  if (!jsonPath) return

  let config = await fs.readJson(jsonPath, 'utf8')
  if (!update) return config

  config = Object.assign(config, update)
  await fs.writeFile(jsonPath, JSON.stringify(config, null, 2))
  return config
}

export default main
