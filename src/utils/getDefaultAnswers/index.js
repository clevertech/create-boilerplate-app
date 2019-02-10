import path from 'path'

const run = async function() {
  const dirName = process.argv[2]
  return {
    dirName,
    baseDir: path.resolve(process.cwd(), dirName)
  }
}

export default run
