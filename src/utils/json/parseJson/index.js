import fs from 'fs-extra'

const main = async function(jsonPath) {
  if (!jsonPath) return

  const config = await fs.readJson(jsonPath, 'utf8')

  return config
}

export default main
