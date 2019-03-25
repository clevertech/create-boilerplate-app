import exec from '../exec'
import path from 'path'

const run = async function(src, dest) {
  if (!src || src === '') return
  if (!dest || dest === '') return

  const srcPath = path.resolve(process.cwd(), src)
  const destPath = path.resolve(process.cwd(), dest)

  await exec(`mv ${srcPath} ${destPath}`)
}
export default run
