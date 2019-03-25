import path from 'path'

const run = function() {
  if (typeof process.argv[2] === 'undefined') {
    throw new Error(`missing param`)
  }
  const dirName = process.argv[2]
  return { dirName, baseDir: path.resolve(process.cwd(), dirName) + '/' }
}

export default run
