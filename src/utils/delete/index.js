import exec from '../exec'

const run = async function(fileOrFolder) {
  if (!fileOrFolder || fileOrFolder === '') return
  return exec(`rm -rf ./${fileOrFolder}`)
}
export default run
