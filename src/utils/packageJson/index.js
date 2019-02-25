import fs from 'fs-extra'

const main = async function(packageJsonPath, update) {
  if (!packageJsonPath) return
  const packageObj = require(packageJsonPath)
  const newPackageObj = Object.assign(packageObj, update)
  await fs.writeFile(packageJsonPath, JSON.stringify(newPackageObj, null, 2))
  return newPackageObj
}

export default main
