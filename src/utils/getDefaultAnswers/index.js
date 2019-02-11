import path from 'path'

const run = function() {
  const dirName = process.argv[2]
  return { dirName, baseDir: path.resolve(process.cwd(), dirName) }
}

export default run
