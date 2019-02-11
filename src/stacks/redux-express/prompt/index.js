import inquirer from 'inquirer'
export const DB_NAMES = ['postgres', 'mysql']
export const DB_DEFAULT = 'postgres'
const main = async function(answers) {
  const newAnswers = inquirer.prompt([
    {
      name: 'dbEngine',
      type: 'list',
      choices: DB_NAMES,
      default: DB_DEFAULT,
      message: expect.any(String)
    }
  ])
  return Object.assign(answers, newAnswers)
}

export default main
