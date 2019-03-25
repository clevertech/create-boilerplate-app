import chalk from 'chalk'
import child_process from 'child_process'
const exec = (command, options) => {
  return new Promise((resolve, reject) => {
    const opts = Object.assign({ shell: true }, options)
    child_process.exec(command, opts, (err, stdout, stderr) => {
      stderr && console.error(chalk.red(stderr))
      stdout && console.log(stdout)
      if (err) return reject(err)
      resolve(stdout)
    })
  })
}

export default exec
