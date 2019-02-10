import path from 'path'

const run = function() {
  console.log('cats are cool', process.argv[2])
  const dirName = process.argv[2]
  return {
    dirName,
    baseDir: path.resolve(process.cwd(), dirName)
  }
}

export default run
