import fs from 'fs-extra'

const main = async function(prettierRcPath, update) {
  if (!prettierRcPath) return

  let config = await fs.readJson(prettierRcPath, 'utf8')
  console.log({ config: config, prettier: prettierRcPath })
  if (!update) return config

  config = Object.assign(config, update)
  await fs.writeFile(prettierRcPath, JSON.stringify(config, null, 2))
  return config
}

export default main
