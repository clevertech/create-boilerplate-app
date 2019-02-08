export const REPO = 'https://github.com/chadfurman/boilerplate'
// clone down boilerplate index repo
// mv boilerplate index files boilerplate root
// delete empty boilerplate index folder
// prompt for index questions
// apply index answers to index configuration files
const run = function(answers) {
  if (answers.admin) {
    console.log()
    console.log('Use the following helm files:')
    console.log(chalk.cyan(path.join(dirName, 'helm-api-development.yml')))
    console.log(chalk.cyan(path.join(dirName, 'helm-frontend-development.yml')))
    console.log()
  }
}
export default run
