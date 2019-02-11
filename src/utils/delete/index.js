import exec from '../exec'

const run = async function(fileOrFolder) {
  if (!fileOrFolder || fileOrFolder === '') return
  exec(`rm -rf ./${fileOrFolder}`)
}
export default run
