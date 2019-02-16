import inquirer from 'inquirer'

export const DB_NAMES = ['postgres', 'mysql']
export const DB_DEFAULT = 'postgres'
const main = async function(answers) {
  const newAnswers = await inquirer.prompt([
    {
      name: 'dbEngine',
      type: 'list',
      choices: DB_NAMES,
      default: DB_DEFAULT,
      message: expect.any(String)
    }
  ])
  answers.stack = Object.assign(answers.stack || {}, { prompt: newAnswers })
  return answers
}

export default main
